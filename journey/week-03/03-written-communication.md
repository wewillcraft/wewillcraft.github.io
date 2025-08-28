---
title: "Writing That Actually Gets Read"
description: "Master emails, docs, and Slack without the pain"
excerpt: "Learn to craft clear, effective written communication that saves time and prevents misunderstandings."
objectives:
  - Structure emails and documents for maximum clarity
  - Write Slack messages that get responses
  - Adapt written tone for different audiences
  - Create documentation that people actually use
estimated_time: 30 minutes
---

## The Written Word Problem 📝

Let's be honest: Half your emails go unread. Your beautiful documentation gathers dust. And that important Slack message? Buried under 47 messages about lunch.

in this lesson, we fix that.

## The Email Formula That Works

### Subject Lines That Get Opened

```
❌ "Update"
✅ "[ACTION] Deploy approval needed by 3pm"

❌ "Question"  
✅ "Quick question: AWS budget for Q2?"

❌ "FYI"
✅ "[FYI] Server migration complete - no action needed"
```

### The BLUF Method

**B**ottom **L**ine **U**p **F**ront. Military folks know what's up.

```
Subject: [DECISION] Choose payment provider by Friday

Hi team,

**We need to pick Stripe or PayPal by Friday.**

Context:
- Both cost roughly the same
- Stripe has better docs
- PayPal has wider user adoption

My recommendation: Stripe (developer experience wins)

Let me know if you need more info.
-Your Name
```

### The Email Length Rule

- **1 screen or less:** They'll read it now
- **2-3 screens:** They'll "read it later" (never)
- **4+ screens:** You should have scheduled a meeting

## Slack Messages That Don't Get Lost

### The Thread Starter

```
🔴 @channel Quick database question (thread below)
↳ Details in thread to keep channel clean
```

### The Update Format

```
✅ **Deployment Complete**
- What: User service v2.3
- When: 10:32 AM
- Impact: None (zero downtime)
- Next: Monitoring for 30 mins
```

### The Question Template

```
**Need help with:** Login bug on mobile
**What I tried:** Cache clear, different browsers
**Error:** "Token undefined" in console
**Urgency:** Blocking 3 customers
**DM or thread?** Thread is fine
```

## Documentation People Actually Read

### The TL;DR Section

Every doc needs this at the top:

```markdown
## TL;DR

- What: Payment integration service
- Why: Handle subscriptions without pain
- Setup time: 15 minutes
- Gotchas: Needs Redis for sessions
```

### The Skimmable Structure

```markdown
## What You Need (30 seconds)

[Bullet points]

## Quick Start (2 minutes)

[Copy-paste commands]

## Common Problems (browse when stuck)

[FAQ style]

## Deep Dive (only if curious)

[The detailed stuff]
```

### Code Comments That Help

```javascript
// ❌ Bad: Increments i
i++;

// ✅ Good: Retry up to 3 times before failing
i++;

// ⭐ Best: Retry because API randomly fails ~5% of the time
// See incident #4234. Remove after API v3 upgrade.
i++;
```

## PR Descriptions That Get Quick Reviews

### The Template

```markdown
## What

One-line summary

## Why

Business or technical reason

## How

- Key change 1
- Key change 2

## Testing

What you tested and how

## Screenshots

[If UI changes]

## Notes for Reviewer

Where to focus attention
```

## The Personality-Based Writing

### For Detail-Oriented Readers

- Number your points
- Include all edge cases
- Add data and metrics
- Link to sources

### For Big-Picture Readers

- Start with why
- Use analogies
- Keep it conceptual
- Details in appendix

### For Busy Executives

- One paragraph max
- Bullets only
- Bold the ask
- Include deadline

## Writing Energy Hacks

**Morning Brain = Creative Writing**

- Blog posts
- Proposals
- Vision docs

**Afternoon Brain = Structured Writing**

- Documentation
- Status updates
- Meeting notes

**Evening Brain = Quick Responses**

- Slack replies
- Email cleanup
- Code reviews

## The Async Communication Rules

1. **Default to Public** - Others might have the same question
2. **Link, Don't Repeat** - "See thread [link] for context"
3. **Time Zone Friendly** - "By EOD Friday (your timezone)"
4. **Response Time Expectations** - "Need answer by..." or "Not urgent"
5. **Close the Loop** - "Thanks, that solved it!" or "Still stuck because..."

## Common Writing Mistakes

### The Novel

"Hey Sarah, hope you're having a great Monday! So I was thinking about our conversation last week about the database stuff, and you know how we talked about maybe potentially possibly considering..."

**Fix:** Get to the point in sentence one.

### The Cryptic

"It's broken. Please fix."

**Fix:** What's broken? What did you expect? What happened instead?

### The Wall of Text

[Imagine a huge paragraph with no breaks no bullets no structure just words words words that keep going and going...]

**Fix:** Paragraph breaks. Bullets. Bold key points.

## Your Writing Workout

**Monday:** Write every email with BLUF method
**Tuesday:** Add TL;DR to one document
**Wednesday:** Use emoji markers in Slack (⚡ urgent, ✅ done, ❓ question)
**Thursday:** Time yourself - can you write that email in 2 minutes?
**Friday:** Review your sent messages - what worked?

## Quick Templates Library

### The FYI

"FYI - [what happened]. No action needed, just keeping you in the loop."

### The Blocker

"🔴 Blocked on [specific thing]. Need [specific help] from [specific person] by [specific time]."

### The Decision

"We need to decide between A and B by [date]. I recommend A because [reason]. Thoughts?"

### The Kudos

"Quick shoutout to @person for [specific thing they did]. [Specific impact it had]. 🙌"

## Remember This

Good writing isn't about being Shakespeare. It's about being clear, being considerate of the reader's time, and making it easy for people to help you or make decisions.

Write like you're explaining to a smart friend who's had too much coffee and has 30 seconds before their next meeting.

Next lesson: Verbal communication - meetings, presentations, and the art of not rambling.

---

[← Previous Lesson](/journey/week-09/02-personality-adaptation/) | [Next Lesson →](/journey/week-09/04-verbal-communication/)

[← Back to Week 9 Overview](/journey/week-09/)
