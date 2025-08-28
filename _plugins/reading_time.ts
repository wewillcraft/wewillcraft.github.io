import Site from "lume/core/site.ts";

export interface ReadingTimeOptions {
  /** Words per minute for reading speed (default: 200) */
  wordsPerMinute?: number;
  /** Minimum reading time in minutes (default: 1) */
  minimumTime?: number;
  /** Whether to round up to nearest minute (default: true) */
  roundUp?: boolean;
  /** Pattern to match files (default: matches journey markdown files) */
  pattern?: string;
}

/**
 * Lume plugin to automatically calculate reading time based on word count
 * Adds an estimated_time field to page data if not already present
 */
export default function readingTime(options: ReadingTimeOptions = {}) {
  const {
    wordsPerMinute = 200,
    minimumTime = 1,
    roundUp = true,
    pattern = "/journey/week-*/",
  } = options;

  return (site: Site) => {
    site.preprocess([pattern], (pages) => {
      for (const page of pages) {
        // Skip if estimated_time is already set in frontmatter
        if (page.data.estimated_time) {
          continue;
        }

        // Get the content as string
        const content = page.data.content?.toString() || "";

        // Calculate word count (excluding HTML tags, code blocks, and frontmatter)
        const wordCount = calculateWordCount(content);

        // Calculate reading time in minutes
        const readingTimeMinutes = Math.max(
          wordCount / wordsPerMinute,
          minimumTime,
        );

        // Round up if specified
        const finalTime = roundUp
          ? Math.ceil(readingTimeMinutes)
          : Math.round(readingTimeMinutes);

        // Format the estimated time
        page.data.estimated_time = formatReadingTime(finalTime);

        // Also add raw values for potential use in templates
        page.data.word_count = wordCount;
        page.data.reading_time_minutes = finalTime;
      }
    });

    // Add helper function to site for manual calculation if needed
    site.helper(
      "calculateReadingTime",
      (content: string) => {
        const wordCount = calculateWordCount(content);
        const readingTimeMinutes = Math.max(
          wordCount / wordsPerMinute,
          minimumTime,
        );
        const finalTime = roundUp
          ? Math.ceil(readingTimeMinutes)
          : Math.round(readingTimeMinutes);

        return {
          words: wordCount,
          minutes: finalTime,
          formatted: formatReadingTime(finalTime),
        };
      },
      { type: "tag" },
    );
  };
}

/**
 * Calculate word count from content, excluding code blocks and HTML
 */
function calculateWordCount(content: string): number {
  let cleanContent = content;

  // Remove code blocks (both backtick and indented)
  cleanContent = cleanContent.replace(/```[\s\S]*?```/g, "");
  cleanContent = cleanContent.replace(/`[^`]+`/g, "");

  // Remove HTML tags
  cleanContent = cleanContent.replace(/<[^>]*>/g, "");

  // Remove markdown links but keep text
  cleanContent = cleanContent.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // Remove markdown formatting characters
  cleanContent = cleanContent.replace(/[*_#>\-+~]/g, "");

  // Remove extra whitespace
  cleanContent = cleanContent.replace(/\s+/g, " ").trim();

  // Count words (split by whitespace)
  const words = cleanContent.split(/\s+/).filter((word) => word.length > 0);

  return words.length;
}

/**
 * Format reading time into a human-readable string
 */
function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return "1 minute";
  } else if (minutes < 60) {
    return `${minutes} minutes`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
      return hours === 1 ? "1 hour" : `${hours} hours`;
    } else {
      const hourText = hours === 1 ? "1 hour" : `${hours} hours`;
      const minuteText = remainingMinutes === 1 ? "1 minute" : `${remainingMinutes} minutes`;
      return `${hourText} ${minuteText}`;
    }
  }
}
