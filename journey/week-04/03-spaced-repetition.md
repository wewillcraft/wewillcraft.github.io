---
title: "The Spaced Repetition System"
excerpt: Master long-term retention using scientifically-proven spaced repetition techniques.
---

# The Spaced Repetition System

**Time:** 90 minutes  
**Purpose:** Build permanent technical knowledge through scientifically-proven spaced repetition techniques

## Why Spaced Repetition Matters for Developers

As a developer, you encounter thousands of concepts, APIs, syntax patterns, and architectural principles. Traditional learning methods lead to the "forgetting curve" - within 24 hours, you forget 50-80% of new information.

**Spaced repetition solves this** by reviewing information at optimal intervals just before you're about to forget it. This creates strong neural pathways and moves knowledge from short-term to long-term memory.

Consider these scenarios:
- **Without SRS:** Learn React hooks → Use them for a week → Switch projects → Forget useState syntax
- **With SRS:** Learn React hooks → Review key concepts every few days → Build permanent recall → Apply confidently months later

The difference is permanent technical fluency vs. constantly relearning the same concepts.

## Part 1: Understanding the Science (20 minutes)

### The Forgetting Curve

Hermann Ebbinghaus discovered that we lose information predictably:
- **20 minutes:** 40% forgotten
- **1 hour:** 55% forgotten  
- **1 day:** 70% forgotten
- **1 week:** 90% forgotten

### How Spaced Repetition Works

Each time you successfully recall information:
1. **Memory strength increases**
2. **Time until forgetting extends**
3. **Next review interval lengthens**

**Optimal intervals follow this pattern:**
- First review: 1 day
- Second review: 3 days  
- Third review: 7 days
- Fourth review: 14 days
- Fifth review: 30 days
- Sixth review: 90 days

### SuperMemo Algorithm

The most effective spaced repetition uses the SuperMemo algorithm, which adjusts intervals based on:
- **Ease of recall** (how quickly you remembered)
- **Previous success rate** (your history with this card)
- **Time since last review** (interval adjustment)

### Your SRS Assessment

Before building your system, assess your current retention:

**Quick Memory Test:**
Think of 5 technical concepts you learned 3 months ago:

1. **Concept:** ________________
   **Can you explain it now?** ☐ Yes ☐ Partially ☐ No

2. **Concept:** ________________  
   **Can you explain it now?** ☐ Yes ☐ Partially ☐ No

3. **Concept:** ________________
   **Can you explain it now?** ☐ Yes ☐ Partially ☐ No

4. **Concept:** ________________
   **Can you explain it now?** ☐ Yes ☐ Partially ☐ No

5. **Concept:** ________________
   **Can you explain it now?** ☐ Yes ☐ Partially ☐ No

**Retention rate:** _____ out of 5

If you scored less than 4/5, spaced repetition will dramatically improve your technical retention.

## Part 2: Tool Selection and Setup (25 minutes)

### SRS Tool Comparison

#### Anki (Recommended for Developers)
**Pros:**
- Completely customizable
- Supports code formatting
- Rich media (images, audio, video)
- Powerful statistics
- Cross-platform sync
- Free (mobile apps cost $25)

**Cons:**
- Steeper learning curve
- Can be overwhelming initially

#### Quizlet
**Pros:**
- Simple interface
- Good for basic concepts
- Built-in study modes

**Cons:**
- Limited customization
- No proper spaced repetition algorithm
- Subscription required for best features

#### RemNote
**Pros:**
- Integrated with note-taking
- Automatic flashcard generation
- Good for hierarchical knowledge

**Cons:**
- Expensive
- Less mature than Anki

### Anki Setup Walkthrough

**Step 1: Installation**
1. Download Anki from ankiweb.net
2. Create AnkiWeb account for syncing
3. Install AnkiDroid (Android) or AnkiMobile (iOS)

**Step 2: Essential Add-ons**
Install these add-ons (Tools → Add-ons → Get Add-ons):

- **Code Highlighter** (1463041493): Syntax highlighting for code
- **Review Heatmap** (1771074083): Visual progress tracking  
- **AnkiConnect** (2055492159): API for automation
- **Image Resizer** (1103084694): Optimize images
- **Speed Focus Mode** (1046608507): Prevent overthinking

**Step 3: Basic Configuration**
1. Set new cards per day: 20-30 (start conservative)
2. Maximum reviews per day: 100-200
3. Enable night mode if preferred
4. Set up sync with AnkiWeb

### Your Setup Checklist

- [ ] Anki installed on computer
- [ ] AnkiWeb account created  
- [ ] Mobile app installed and synced
- [ ] Essential add-ons installed
- [ ] Basic settings configured
- [ ] Test sync working between devices

**My SRS Tool Choice:** ________________

## Part 3: Creating Effective Technical Cards (30 minutes)

### Card Creation Principles

#### 1. Make it Atomic
**Bad:** "Explain React hooks"
**Good:** "What React hook is used to add state to functional components?"

#### 2. Make it Precise  
**Bad:** "What does async do?"
**Good:** "In JavaScript, what keyword makes a function return a Promise?"

#### 3. Use Active Recall
**Bad:** "useState returns [value, setter]"
**Good:** "What does the useState hook return?" → "[current state value, function to update it]"

#### 4. Include Context
**Bad:** "O(n) complexity"
**Good:** "What is the time complexity of searching an unsorted array?" → "O(n) - linear time"

### Card Types for Developers

#### Basic Cards
**Front:** What HTTP status code indicates "Resource Not Found"?  
**Back:** 404

#### Code Completion Cards
**Front:** Complete this React hook:
```javascript
const [count, ________] = useState(0);
```
**Back:** `setCount`

#### Code Output Cards  
**Front:** What does this output?
```javascript
console.log([1, 2, 3].map(x => x * 2));
```
**Back:** `[2, 4, 6]`

#### Debugging Cards
**Front:** What's wrong with this code?
```javascript
async function fetchData() {
  const data = fetch('/api/data');
  return data.json();
}
```
**Back:** Missing `await` before `fetch()` - returns Promise instead of data

#### Concept Explanation Cards
**Front:** Explain the difference between `==` and `===` in JavaScript
**Back:** 
- `==` performs type coercion before comparison
- `===` checks both value and type without coercion
- Example: `'5' == 5` is true, `'5' === 5` is false

#### Best Practice Cards
**Front:** When should you use `async/await` instead of `.then()`?
**Back:** 
- Multiple sequential async operations
- Better error handling with try/catch
- More readable code that looks synchronous
- Easier debugging

### Your First Card Set

Create 10 cards on a topic you're currently learning:

**Topic:** ________________

**Card 1:**
- Front: ________________
- Back: ________________

**Card 2:**
- Front: ________________  
- Back: ________________

**Card 3:**
- Front: ________________
- Back: ________________

**Card 4:**
- Front: ________________
- Back: ________________

**Card 5:**
- Front: ________________
- Back: ________________

**Card 6:**
- Front: ________________
- Back: ________________

**Card 7:**
- Front: ________________
- Back: ________________

**Card 8:**
- Front: ________________
- Back: ________________

**Card 9:**
- Front: ________________
- Back: ________________

**Card 10:**
- Front: ________________
- Back: ________________

### Card Quality Checklist

For each card, verify:
- [ ] Tests one specific concept
- [ ] Question is unambiguous  
- [ ] Answer is factually correct
- [ ] Includes necessary context
- [ ] Uses proper formatting
- [ ] Will be useful long-term

## Part 4: Daily Practice System (15 minutes)

### Creating Your Review Routine

#### Time Investment
- **Beginners:** 15-20 minutes daily
- **Intermediate:** 20-30 minutes daily  
- **Advanced:** 30-45 minutes daily

#### Optimal Review Times
**Best times based on research:**
1. **Morning** (7-9 AM): Fresh mental state
2. **Before lunch** (11 AM - 12 PM): Pre-meal focus
3. **Evening** (6-8 PM): End-of-day consolidation

**Worst times:**
- Right after meals (reduced focus)
- Late night (interferes with sleep)
- During high-stress periods

#### Your Daily Schedule

**Preferred review time:** ________________  
**Backup review time:** ________________  
**Daily time commitment:** ______ minutes

### Review Strategy

#### The 4-Point Grading System
- **Again (1):** Completely forgot, need to see again soon
- **Hard (2):** Remembered with difficulty, reduce interval  
- **Good (3):** Remembered correctly, normal interval
- **Easy (4):** Too easy, increase interval significantly

#### Honest Self-Assessment

Rate your recall speed and confidence:
- **Instant recall + high confidence** → Easy
- **Quick recall + medium confidence** → Good  
- **Slow recall + low confidence** → Hard
- **Couldn't recall or wrong** → Again

#### Managing Review Load

**When reviews pile up:**
1. Reduce new cards temporarily
2. Focus on failed cards first
3. Use "review all due cards" rather than daily limits
4. Consider increasing daily review limits

**Preventing overload:**
- Start with 10-15 new cards daily
- Increase gradually as habit forms
- Take breaks during intensive learning periods

### Mobile Review Strategy

**Optimize for dead time:**
- Commuting (if not driving)
- Waiting in lines
- Coffee breaks
- Before meetings start
- Exercise rest periods

**Mobile-specific tips:**
- Enable offline sync
- Use larger text for readability
- Create shortcuts for quick access
- Set daily review reminders

## Advanced SRS Techniques (Additional 20 minutes)

### Cloze Deletion Cards

Instead of basic Q&A, use fill-in-the-blank:

**Template:**
"In React, {{c1::useState}} is used to add state to {{c2::functional components}}"

**Generates two cards:**
1. "In React, **[...]** is used to add state to functional components"
2. "In React, useState is used to add state to **[...]**"

### Image Occlusion

For system diagrams and visual concepts:
- Upload architecture diagrams  
- Cover parts you want to test
- Practice recall of system components

### Hierarchical Learning

Structure cards from general to specific:
1. **Concept level:** "What is Redux?"
2. **Component level:** "What are Redux actions?"  
3. **Implementation level:** "How do you dispatch a Redux action?"

### Code-to-Explanation Cards

**Front:** 
```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Back:** Creates a memoized callback that only changes if dependencies [a, b] change. Prevents unnecessary re-renders of child components.

## Integration with Your Second Brain

### Workflow Integration

1. **Capture:** Save concepts in your second brain
2. **Process:** Identify key facts for long-term retention
3. **Create:** Convert important concepts to SRS cards
4. **Review:** Use spaced repetition for permanent recall
5. **Apply:** Use retained knowledge in projects

### Card Sources

**From your second brain:**
- Key API methods and syntax
- Important architectural patterns  
- Debugging solutions you found
- Best practices and principles
- Code snippets you reference often

### Automated Card Creation

**Tools that help:**
- **Anki plugins** for importing from notes
- **Browser extensions** for quick card creation
- **IDE plugins** for code-to-card conversion
- **Custom scripts** for bulk card generation

## Troubleshooting Common Issues

### "I Don't Have Time for Reviews"

**Solutions:**
- Start with just 10 minutes daily
- Use mobile app for dead time
- Review during routine activities
- Focus on highest-value cards first

### "The Cards Are Too Hard"

**Solutions:**  
- Break complex cards into simpler ones
- Add more context to questions
- Include memory aids and mnemonics
- Review the concept in your second brain first

### "I Keep Forgetting the Same Cards"

**Solutions:**
- Rewrite the card more clearly
- Add visual or contextual cues  
- Connect to existing knowledge
- Practice the concept outside SRS

### "The Reviews Are Boring"

**Solutions:**
- Add variety with different card types
- Include interesting examples
- Gamify with daily streak goals
- Connect learning to project goals

## Your 30-Day SRS Challenge

### Week 1: Foundation
- [ ] Set up SRS tool completely
- [ ] Create first 20 cards
- [ ] Establish daily review habit
- [ ] Test sync across devices

### Week 2: Expansion  
- [ ] Add 10-15 new cards daily
- [ ] Experiment with different card types
- [ ] Track review statistics
- [ ] Adjust review timing if needed

### Week 3: Optimization
- [ ] Refine difficult cards
- [ ] Add advanced card types (cloze, images)
- [ ] Connect to second brain workflow
- [ ] Measure retention improvements

### Week 4: Integration
- [ ] SRS fully integrated into learning
- [ ] Consistent daily practice established  
- [ ] Measurable improvement in recall
- [ ] System optimized for long-term use

### Success Metrics

Track these indicators:
- **Consistency:** Days with reviews completed
- **Accuracy:** Percentage of cards answered correctly
- **Retention:** Ability to recall information after long intervals
- **Application:** Using retained knowledge in real projects

## Reflection Questions

1. **How does having permanent technical recall change your confidence as a developer?**

2. **What concepts do you wish you had memorized earlier in your career?**

3. **How might spaced repetition complement your project-based learning?**

4. **What barriers exist to maintaining a daily SRS practice?**

5. **How will you measure the ROI of time spent in spaced repetition?**

## Next Steps

With spaced repetition building permanent knowledge retention, you're ready to transform how you engage with new learning material. The next lesson covers active learning techniques that maximize comprehension and practical application from every learning session.

[← Previous: Building Your Second Brain](/journey/week-04/02-second-brain/) | [Continue to Active Learning Mastery →](/journey/week-04/04-active-learning/)