# Journey Content Style Guide

## Program Evaluation (December 2024)

### Overall Assessment
The Journey is a well-structured 14-week program (~110 lessons) that effectively maps to a 100-day journey with rest days. The content is coherent, progressive, and highly relevant to college students in tech. However, there are opportunities to strengthen its scientific foundation and clarify its spiritual positioning.

### Strengths
- **Excellent progression**: Clear developmental arc from self-discovery to future planning
- **Target-appropriate**: Content perfectly pitched for college/early-career audience
- **Practical focus**: Exercises are actionable and time-respectful (5-30 minutes)
- **Warm tone**: Successfully achieves supportive, friend-like voice without condescension
- **Holistic approach**: Covers technical, personal, emotional, and professional growth

### Areas for Improvement

#### 1. Scientific Foundation
**Current state**: References popular frameworks (MBTI, Enneagram, DISC) and concepts (flow state, deep work) but lacks citations or research backing.
**Recommendation**: Add brief "Why This Works" sections citing key research (e.g., Csikszentmihalyi for flow, Newport for deep work, Dweck for growth mindset).

#### 2. Spiritual Integration
**Current state**: Despite "Favor Church Manila style" in guidelines, actual content is 95% secular with minimal faith elements.
**Recommendation**: Either:
- Option A: Add optional faith-based reflection prompts in each week
- Option B: Create companion "Faith Track" materials for those wanting spiritual integration
- Option C: Clarify that program is values-based but faith-neutral

#### 3. Phase Structure
**Current state**: 14 weeks without clear phase delineation
**Recommendation**: Organize into 4 distinct phases for better mental modeling:
- **Phase 1 (Weeks 1-3)**: Foundation - Know Yourself
- **Phase 2 (Weeks 4-7)**: Optimization - Work Smarter  
- **Phase 3 (Weeks 8-11)**: Connection - Lead & Communicate
- **Phase 4 (Weeks 12-14)**: Integration - Future Forward

#### 4. 100-Day Mapping
**Current state**: ~110 lessons requiring flexible scheduling
**Recommendation**: Provide explicit 100-day schedule with:
- 5 lessons per week (Mon-Fri)
- Weekend reflection/catch-up days
- Built-in buffer weeks at phase transitions
- Clear rest day recommendations

#### 5. Consistency Issues
**Current state**: Some lessons have outdated frontmatter (day/week fields) and inconsistent navigation approaches
**Recommendation**: Audit all lessons for frontmatter compliance and ensure navigation system consistency

### Implementation Priorities
1. **High Priority**: Fix frontmatter inconsistencies (technical debt)
2. **Medium Priority**: Add phase structure and 100-day schedule
3. **Low Priority**: Enhance scientific backing and spiritual elements (based on audience needs)

### Recommended 100-Day Schedule

**Phase 1: Foundation (Days 1-21)**
- Week 1: Self-Discovery - Days 1-5 + Weekend reflection
- Week 2: Purpose & Vision - Days 8-12 + Weekend integration  
- Week 3: Personal Productivity - Days 15-19 + Weekend planning
- Phase Break: Days 20-21 (Rest & Review)

**Phase 2: Optimization (Days 22-49)**
- Week 4: Learning & Growth - Days 22-26 + Weekend practice
- Week 5: Deep Focus - Days 29-33 + Weekend experiments
- Week 6: Getting Help - Days 36-40 + Weekend networking
- Week 7: Sustainability - Days 43-47 + Weekend restoration
- Phase Break: Days 48-49 (Rest & Review)

**Phase 3: Connection (Days 50-77)**
- Week 8: Boundaries - Days 50-54 + Weekend boundaries practice
- Week 9: Communication - Days 57-61 + Weekend conversations
- Week 10: Resilience - Days 64-68 + Weekend recovery
- Week 11: Leadership - Days 71-75 + Weekend leadership practice
- Phase Break: Days 76-77 (Rest & Review)

**Phase 4: Integration (Days 78-100)**
- Week 12: Career Strategy - Days 78-82 + Weekend planning
- Week 13: Life Integration - Days 85-89 + Weekend balance
- Week 14: Future Planning - Days 92-96 + Weekend celebration
- Final Integration: Days 97-100 (Review, Plan, Launch)

### Science-Backed Elements to Strengthen

Consider adding research references for:
- **Week 1**: Big Five personality research (Costa & McCrae)
- **Week 3**: Circadian rhythms and ultradian cycles (Kleitman)
- **Week 4**: Spaced repetition (Ebbinghaus), Active learning (Freeman et al.)
- **Week 5**: Attention Restoration Theory (Kaplan), Flow theory (Csikszentmihalyi)
- **Week 10**: Post-traumatic growth (Tedeschi & Calhoun)
- **Week 11**: Emotional Intelligence (Goleman), Psychological safety (Edmondson)

### Faith Integration Options

For programs wanting spiritual elements, consider adding:
- Optional "Sacred Pause" reflection at week endings
- Scripture or inspirational quotes relevant to each theme
- Prayer/meditation alternatives in mindfulness sections
- Service/giving components in Week 13-14
- Gratitude practices with thanksgiving elements
- Purpose work connected to calling/vocation theology

### Conclusion
This is a **strong program** that achieves its goals of supporting young tech professionals through personal growth. With minor enhancements to structure and foundation, it could become an exceptional resource that uniquely combines practical skills with personal development in a way that resonates with its target audience.

---

## Overview
The Journey is a 14-week mentorship program designed for college students and early-career developers. Each week contains 8 daily lessons that build on each other. The content should feel like a supportive friend guiding them through their growth journey.

## Core Principles

### Tone & Voice
- **Warm and Friendly**: Write like you're talking to a younger sibling or close friend
- **Encouraging**: Celebrate small wins, normalize struggles
- **Casual but Clear**: Use contractions, casual language, but stay professional
- **Favor Church Manila style**: Uplifting, grace-filled, growth-oriented
- **Direct**: Get to the point quickly, no fluff
- **Inclusive**: Everyone belongs here, regardless of background

### Language Guidelines
- **ELI5 Approach**: Explain complex concepts simply
- **Use "you" and "we"**: Create connection
- **Active voice**: "You'll learn" not "It will be learned"
- **Present tense**: Keep it immediate and engaging
- **Contractions**: "You'll" instead of "You will"
- **Strategic emojis**: 1-2 per section max, only where they add value
- **NO EM DASHES (—)**: They sound too AI-written. Use shorter sentences, commas, or rephrase instead
- **Write like you talk**: Natural pauses, casual breaks, real human speech patterns

### Examples of Good Tone
```
❌ "This assessment will evaluate your competencies"
✅ "Let's figure out what makes you tick"

❌ "It is important to understand that productivity..."
✅ "Here's the thing about productivity: it's personal"

❌ "Participants should complete the following exercises"
✅ "Try this quick exercise"

❌ "You're not broken—you just need better tools"
✅ "You're not broken. You just need better tools"

❌ "This journey—all 14 weeks of it—will change everything"
✅ "This journey? All 14 weeks will change everything"
```

## Content Structure

### File Length
- **Target**: ~200 lines per file
- **Maximum**: 250 lines
- **Sweet spot**: 150-200 lines
- If content needs more space, split into multiple days

### Time Commitment
- **Daily lessons**: 20-30 minutes max
- **Exercises**: 5-10 minutes each
- **Assessments**: Quick ratings, not essays
- Students are busy—respect their time

### Frontmatter Requirements

**IMPORTANT**: Lessons are NOT daily. Week 1 Lesson 2 is NOT Day 2.

Required frontmatter fields:
```yaml
---
title: "Lesson Title Here"
description: "Brief description for SEO/preview"
excerpt: "What students will learn or achieve"
objectives:
  - "Clear learning objective 1"
  - "Clear learning objective 2"
  - "Clear learning objective 3"
estimated_time: 30 minutes  # Optional - can be calculated by plugin
---
```

DO NOT use:
- `day: X` 
- `week: X` (already in directory structure)
- `lesson: X` (use filename for ordering)

### Navigation System

**NEW APPROACH**: Navigation is managed through `_data.yml` files in each week folder, not hardcoded in lesson files.

#### _data.yml Structure
Each week folder should have a `_data.yml` file with a `lessons` array:

```yaml
lessons:
  - index: 1
    title: "Understanding Yourself"
    slug: "01-self-discovery"
  - index: 2
    title: "The MBTI Framework"
    slug: "02-mbti-assessment"
  - index: 3
    title: "Discovering Your Strengths"
    slug: "03-strengths-assessment"
  # ... continue for all 8 lessons
```

#### Lesson Frontmatter
Each lesson file should include an `index` field to map to the lessons array:

```yaml
---
title: "Understanding Yourself"
description: "Brief description for SEO/preview"
excerpt: "What students will learn or achieve"
index: 1  # Maps to lessons array in _data.yml
objectives:
  - "Clear learning objective 1"
  - "Clear learning objective 2"
---
```

#### Navigation Display
The navigation will be automatically generated by the `layouts/journey.vto` template using the lessons array. This includes:
- Previous/Next lesson links at the bottom of each page
- Week overview navigation
- Consistent ordering based on the index

**Do NOT manually add navigation links at the end of lesson files** - the template handles this automatically.

### Standard Sections

1. **Opening Hook** (5-10 lines)
   - Start with a relatable problem or feeling
   - Use a question they're probably thinking
   - Connect to their real experience

2. **Core Concept** (30-40 lines)
   - One main idea per lesson
   - 2-3 supporting points max
   - Use bullets and short paragraphs

3. **Practical Application** (40-60 lines)
   - Real examples from college/early career life
   - Step-by-step instructions
   - Templates they can copy and modify

4. **Quick Exercise** (20-30 lines)
   - Something they can do RIGHT NOW
   - Low commitment, high impact
   - Clear success criteria

5. **Remember This** (5-10 lines)
   - Key takeaway in 1-2 sentences
   - Encouraging final thought
   
(Navigation is automatically generated by the template - no need to add manually)

## College-Relevant Examples

Use scenarios they actually face:
- Group projects
- Part-time jobs
- Internship applications
- Roommate conflicts
- Budget constraints
- Imposter syndrome
- Social media comparison
- Academic pressure
- Career uncertainty
- First job experiences

Avoid:
- Corporate executive scenarios
- 10+ years experience examples
- Luxury problems
- Outdated references
- Assuming resources they don't have

## Practical Exercises

### Good Exercise Patterns
```markdown
## Try This Now (5 minutes)
1. Open your phone
2. Set a timer for 2 minutes
3. Write down three things that stressed you today
4. Circle the one you can actually control
5. Write one tiny action you could take

That's it. You just did stress triage. 🎯
```

### Rating Scales
Keep them simple:
- 1-5 scales (not 1-10)
- Clear anchors (1 = Never, 5 = Always)
- No complex scoring
- Instant insights

## Week-by-Week Themes

### Weeks 1-2: Self-Discovery
"Getting to know yourself isn't narcissistic—it's strategic"

### Weeks 3-4: Learning & Productivity
"Work smarter, not harder (seriously)"

### Weeks 5-6: Focus & Deep Work
"Your attention is your superpower"

### Week 7-8: Boundaries & Sustainability
"You can't pour from an empty cup"

### Week 9-10: Communication & Resilience
"People skills ARE technical skills"

### Week 11-12: Leadership & Career
"You don't need a title to lead"

### Week 13-14: Integration & Future
"Bringing it all together for the long game"

## Common Pitfalls to Avoid

### Don't:
- Use academic or corporate jargon
- Create exercises requiring >10 minutes
- Assume they have money/resources
- Make them feel behind or inadequate
- Use complex frameworks without simplification
- Write walls of text
- Be preachy or condescending

### Do:
- Acknowledge their challenges
- Celebrate small progress
- Provide free/cheap solutions
- Give permission to adapt
- Use lots of line breaks
- Include practical templates
- End with encouragement

## Formatting Standards

### Headers
```markdown
## Main Section (Clear, Action-Oriented)
### Subsection (Specific Topic)
```

### Lists
- Use bullets for most lists
- Numbers only for sequential steps
- Keep items short (one line preferred)

### Code Blocks
Use for templates, examples, scripts:
```markdown
```
Subject: Quick Question about [Topic]

Hi [Name],

[One sentence context]
[Specific question]

Thanks!
[Your name]
```
```

### Emphasis
- **Bold** for key concepts first mention
- *Italics* sparingly for emphasis
- CAPS only for acronyms

## Voice Consistency Checklist

Before publishing, check:
- [ ] Would I say this to a friend?
- [ ] Can a tired college student understand this?
- [ ] Is this immediately useful?
- [ ] Does it feel encouraging?
- [ ] Is it under 250 lines?
- [ ] Did I include a practical exercise?
- [ ] Does it connect to their real life?

## Sample Transformation

### Before:
"The assessment of individual productivity patterns requires a comprehensive analysis of temporal energy fluctuations and their correlation with output quality metrics."

### After:
"Let's figure out when you do your best work. Spoiler: It's probably not when you think."

## Remember

These students are:
- Juggling multiple responsibilities
- Figuring out who they are
- Dealing with comparison and imposter syndrome
- Excited but overwhelmed
- Looking for practical guidance
- Needing encouragement more than perfection

Write for the student pulling an all-nighter, checking this between classes, or reading on their phone during commute. Make it worth their time, make it stick, and make them feel capable.

Every lesson should leave them thinking: "I can actually do this."