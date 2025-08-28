# Journey Content Style Guide

## Program Structure

### Overall Design

The Journey is a 14-week transformational program organized into 3 phases, designed for college students and early-career professionals from ALL backgrounds (not just tech). Each week contains 8 practical lessons plus 1 devotional/reflection lesson for deeper spiritual and personal introspection.

### Strengths

- **Excellent progression**: Clear developmental arc from self-discovery to future planning
- **Universally applicable**: Content relevant for students and professionals in any field
- **Practical focus**: Exercises are actionable and time-respectful (5-30 minutes)
- **Warm tone**: Successfully achieves supportive, friend-like voice without condescension
- **Holistic approach**: Covers technical, personal, emotional, and professional growth

### Areas for Improvement

#### 1. Scientific Foundation

**Current state**: References popular frameworks (MBTI, Enneagram, DISC) and concepts (flow state, deep work) but lacks citations or research backing.
**Recommendation**: Add brief "Why This Works" sections citing key research (e.g., Csikszentmihalyi for flow, Newport for deep work, Dweck for growth mindset).

#### 2. Spiritual Integration

**Approach**: Gentle spiritual nourishment through weekly devotionals

- Each week includes Lesson 9 as an optional devotional/reflection
- Scripture presented with grace-focused interpretation showing Jesus' heart
- Non-legalistic, encouraging tone that invites rather than commands
- Participants can engage as deeply as they choose

#### 3. Phase Structure

**Implementation**: 3 clear phases for natural progression

- **Phase 1: Foundation (Weeks 1-5)** - Who am I and how do I grow?
- **Phase 2: Systems (Weeks 6-10)** - How do I create sustainable success?
- **Phase 3: Impact (Weeks 11-14)** - How do I contribute and lead?

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

### Weekly Devotional Structure (Lesson 9)

Each week ends with a devotional lesson containing:

- **Scripture to Ponder**: Relevant verse for the week's theme
- **The Heart Behind It**: Grace-focused interpretation showing God's love
- **Questions for Your Heart**: Deep introspection prompts
- **This Week's Practice**: Optional spiritual discipline
- **A Prayer for Your Journey**: Simple, authentic prayer

Devotionals should be:

- Encouraging, not condemning
- About relationship, not rules
- Showing God's love and grace
- Inviting deeper reflection
- Optional but enriching

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
---
```

DO NOT use:

- `day: X`
- `week: X` (already in directory structure)
- `lesson: X` (use filename for ordering)

### Navigation System

**NEW APPROACH**: Navigation is managed through `_data.yml` files in each week folder, not hardcoded in lesson files.

#### \_data.yml Structure

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
  - index: 9
    title: "Weekly Meditation & Reflection"
    slug: "09-devotional"
```

#### Lesson Frontmatter

Each lesson file should include an `index` field to map to the lessons array:

```yaml
---
title: "Understanding Yourself"
description: "Brief description for SEO/preview"
excerpt: "What students will learn or achieve"
index: 1 # Maps to lessons array in _data.yml
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

   - Real examples from various life situations
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

## Universal Examples (Not Just Tech/CS)

Use scenarios everyone faces:

- Group projects (any field)
- Part-time jobs and internships
- Job/opportunity applications
- Relationship conflicts
- Budget constraints
- Imposter syndrome
- Social media comparison
- Work/academic pressure
- Career transitions
- Early career experiences

**Include diverse fields:**

- Students (any major)
- Teachers and educators
- Healthcare workers
- Creative professionals
- Service industry workers
- Small business owners
- Non-profit workers
- Freelancers

Avoid:

- Tech-only examples (coding, GitHub, etc.)
- Corporate executive scenarios
- 10+ years experience examples
- Luxury problems
- Field-specific jargon

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

## Three-Phase Journey

### Phase 1: Foundation (Weeks 1-5)

_"Who am I and how do I grow?"_

- Week 1: Self-Discovery
- Week 2: Learning How to Learn
- Week 3: Communication Basics
- Week 4: Getting Help & Building Community
- Week 5: Resilience & Growth Mindset

### Phase 2: Systems (Weeks 6-10)

_"How do I create sustainable success?"_

- Week 6: Purpose & Vision
- Week 7: Energy & Productivity
- Week 8: Focus & Deep Work
- Week 9: Boundaries
- Week 10: Work-Life Integration

### Phase 3: Impact (Weeks 11-14)

_"How do I contribute and lead?"_

- Week 11: Career Strategy
- Week 12: Leadership & Influence
- Week 13: Giving Back & Legacy
- Week 14: Future Planning

## Universal Language Guidelines

### Tech Terms to Replace:

- "debug" → "troubleshoot" or "figure out"
- "iterate" → "improve step by step"
- "MVP" → "simple first version"
- "optimize" → "make better"
- "algorithm" → "process" or "method"
- "framework" → "structure" or "approach"
- "stack" → "tools" or "resources"
- "ship" → "complete" or "deliver"
- "bandwidth" → "capacity" or "energy"
- "sprint" → "focused work period"
- "deploy" → "launch" or "start using"
- "refactor" → "reorganize" or "improve"

## Common Pitfalls to Avoid

### Don't:

- Use academic or corporate jargon
- Use tech-specific examples as the only option
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
- _Italics_ sparingly for emphasis
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
