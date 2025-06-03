// LifeOS.jsx
import React, { useEffect } from 'react';
import './LifeOS.css';

const LifeOS = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-fade');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="lifeos-container">
      {/* Hero Section */}
      <section className="intro-page">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-background-video"
        >
          <source src="/src/assets/video/backgroundvideo1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1>LifeOS</h1>
          <p>
            Our mind has a unique capability to change it’s perspective <br />
            — thus changing the landscape for where your attention goes <br />
            — but so few people have this skill
          </p>
        </div>
      </section>
      
      {/* Insights Section */}
      <section className="insights-section">
      
        <div className="insights-top">
          <div className="insights-heading">
            <h2 className="scroll-fade">
              A goal planner that guides you through <br /> the visualization to
              achieve your goals.
            </h2>
          </div>
          <div className="insights-description">
            <p className="scroll-fade">
              LifeOS helps you achieve goals through Vision, Clarity, and Identity. Define a meaningful vision, create a focused plan with milestones,
              and embody an empowered alter ego. Don’t just dream—act with intention, strategy, and purpose to become your ideal self.
            </p>
          </div>
        </div>

        <hr className="soft-divider" />

        <div className="insights-bottom">
          <h3 className="scroll-fade">Organize your life.<br />A 3-Step Goal Execution System.</h3>
          <p className="scroll-fade">
            Break your future into clear milestones, phases, and daily concrete actions.
            With structured planning, you’ll know exactly what to do next, eliminating being overwhelmed and turning intention into consistent, focused execution.
            LifeOS will guide you through our process and become a daily task manager and life organizer for you to document your tasks towards a clear goal. 
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <h2 className="scroll-fade">Crafting Your Vision</h2>
          <ul className="vision-list scroll-fade">
            <li><strong>Define what you truly want.</strong> The vision must have <strong>emotional gravity</strong>, not just be a surface-level goal.</li>
            <li><strong>Dedicate your life to it.</strong> It must be something worth waking up for.</li>
            <li><strong>Start messy and iterate.</strong> Clarity comes through <strong>experimentation and correction</strong>, not instant inspiration.</li>
          </ul>

          <div className="scroll-fade">
            <strong>Ask yourself the right questions:</strong>
            <ul className="vision-sublist">
              <li>How do you want to look, speak, and be perceived? What environment do you want to live in? Why?</li>
              <li>If money is a reflection of impact, how much do you want to make?</li>
              <li>What can you see yourself getting really good at and known for? Why?</li>
              <li>What should your average day look like—down to the details? Why?</li>
            </ul>
          </div>

          <p className="vision-note scroll-fade">
            Your vision doesn’t need to be perfect. Just like everything else you’ve started—school, a job, a new chapter—it’ll feel awkward at first.
            Write something down anyway. You'll improve it over time.
          </p>
        </div>
      </section>
      <section className="scroll-fade">
        <div className="clarity-container">
            <h2>Clarity Breeds Confidence</h2>
            <p>
            Lack of confidence isn't some mysterious internal flaw—it's often just a lack of clarity.
            </p>
            <p>
            When you're unsure of what you're doing, or why you're doing it, your brain interprets that uncertainty as a threat. That feeling becomes hesitation, anxiety, or self-doubt. But when your mind is clear—when you can see the path ahead and understand your place on it—confidence naturally arises.
            </p>
            <p>
            At its core, clarity comes from vision. Vision is your ability to see a future worth working toward. It’s the foundation for perspective. Once you truly know why you’re doing something, the “how” becomes much easier to figure out.
            </p>
            <p>
            But clarity doesn’t stop at vision—it also includes strategy.
            </p>

            <h3>Clarity = Vision + Strategy</h3>
            <p><strong>Vision</strong> tells you where you're going.</p>
            <p><strong>Strategy</strong> tells you how to get there.</p>
            <p>
            When you’re clear on both, your focus sharpens. Distractions stop registering because your brain is locked in on something meaningful. You stop hesitating because you know the next step, and the one after that.
            </p>
            <p>
            But without a clear plan:
            </p>
            <ul className="clarity-list">
            <li>The moment a task becomes hard, anxiety creeps in.</li>
            <li>If the task becomes too easy, you get bored and disengage.</li>
            <li>Your attention fragments. You slip into loops of avoidance or mindless drifting.</li>
            </ul>
            <p><strong>That’s why strategy is not optional—it’s essential.</strong></p>

            <h3>How to Make a Plan That Works</h3>
            <ol className="clarity-steps">
            <li>
                <strong>Define Your Vision</strong><br />
                Start big. What does the end look like? Be bold but specific. Whether it’s launching a startup, mastering a skill, or becoming financially free, put it into words. Your vision becomes your north star.
            </li>
            <li>
                <strong>Break It Into Milestones</strong><br />
                Reverse-engineer your vision into smaller, achievable milestones. Think in layers:
                <ul>
                <li><em>Ultimate Goal</em>: e.g., Earn $1M</li>
                <li><em>Phase Goal</em>: Build a product people love</li>
                <li><em>First Milestone</em>: Earn $1 from one real customer</li>
                </ul>
            </li>
            <li>
                <strong>List the Actions for Milestone #1</strong><br />
                Be honest and granular:
                <ul>
                <li>Create a basic prototype</li>
                <li>Post in 3 communities to get feedback</li>
                <li>Set up a Stripe account for payments</li>
                </ul>
            </li>
            <li>
                <strong>Identify the Knowledge Gaps</strong><br />
                Ask: What don’t I know yet? Make a learning list:
                <ul>
                <li>Learn how to use Stripe API</li>
                <li>Understand user feedback loops</li>
                <li>Study MVP strategies</li>
                </ul>
            </li>
            <li>
                <strong>Design Daily High-Leverage Tasks</strong><br />
                Focus on actions that move the needle:
                <ul>
                <li>“Does this bring me closer to the milestone?”</li>
                <li>“Will this produce feedback, data, or momentum?”</li>
                </ul>
                Structure your day around 1–3 key tasks and review weekly.
            </li>
            </ol>

            <h3>When You Get Distracted, Reflect—Don’t React</h3>
            <p>
            Don’t beat yourself up. Instead, zoom out and ask:
            </p>
            <ul>
            <li>“Did I lose track of my vision?”</li>
            <li>“Am I unclear about what to do next?”</li>
            <li>“Is the task too hard or too easy?”</li>
            </ul>
            <p>
            Once you know why your attention drifted, you can reorient. Clarify the step, adjust difficulty, or reconnect to the bigger picture.
            </p>
            <p className="vision-note scroll-fade">
            Your plan is never finished. It evolves with you. The point isn’t to make a perfect blueprint—it’s to stay aligned, focused, and adaptive. As long as your strategy reflects your vision and your actions reflect your strategy, progress is inevitable.
            
          </p>
        </div>
        </section>
        
        <section className="scroll-fade">
            <div className="identity-container">
                <h2>Build Your Alter Ego</h2>
                <p>The final layer of clarity is <strong>identity</strong>—who you <em>become</em> to execute your vision.</p>

                <p>You’re not just doing tasks. You’re becoming the kind of person who does them with power, ease, and consistency.</p>

                <blockquote>
                <em>“You can't solve a problem from the same level of mind that created it.” — Einstein</em>
                </blockquote>

                <p>Most challenges aren’t technical—they’re perceptual. The Alter Ego helps you bypass limitations by stepping into a new consciousness.</p>

                <h3>What Is an Alter Ego?</h3>
                <ul className="identity-list">
                <li>Executes under pressure</li>
                <li>Focuses when things get hard</li>
                <li>Behaves in alignment with your highest goals</li>
                </ul>
                <p>It’s not fake—it’s <strong>focused</strong>. It’s a psychological tool to activate your potential on command.</p>

                <h3>How to Create Your Alter Ego</h3>
                <ol className="identity-steps">
                <li>
                    <strong>Choose an Aspirational Archetype</strong><br />
                    Think of a real or fictional figure that embodies your future traits:
                    <ul>
                    <li>Kobe Bryant — relentless discipline</li>
                    <li>Tony Stark — bold innovation</li>
                    <li>Your Future Self — who’s already living the vision</li>
                    </ul>
                </li>

                <li>
                    <strong>List Their Core Traits</strong><br />
                    Ask: How do they think? Act? What do they ignore? <br />
                    <em>Example traits:</em> calm under pressure, obsessed with execution, bold decision-making.
                </li>

                <li>
                    <strong>Define the Alter Ego Version of You</strong><br />
                    This is your performance identity. Give it a name:
                    <ul>
                    <li>“Zero” — no-ego execution mode</li>
                    <li>“Nova” — bold, expressive creator</li>
                    <li>“Zeta” — your future self running Zρ at scale</li>
                    </ul>
                </li>

                <li>
                    <strong>Create an Activation Ritual</strong><br />
                    Step into character with triggers:
                    <ul>
                    <li>Say the name aloud</li>
                    <li>Use a symbol (hoodie, music, phrase)</li>
                    <li>Say: <em>“Right now, I am [name]. I am here to execute.”</em></li>
                    </ul>
                </li>

                <li>
                    <strong>Practice Embodying the Identity</strong><br />
                    Use it during:
                    <ul>
                    <li>Deep work sessions</li>
                    <li>Big decisions</li>
                    <li>Moments of doubt</li>
                    </ul>
                    Ask: <em>“What would [Alter Ego] do here?”</em>
                </li>
                </ol>

                <h3>Why This Works</h3>
                <p><strong>Identity drives behavior.</strong></p>
                <p>If you see yourself as overwhelmed, you’ll act overwhelmed.</p>
                <p>If you see yourself as focused, decisive, and capable—you’ll act that way too.</p>
                <p>This is how you shift from effort to embodiment.</p>
            </div>
            </section>
            <img src="src/assets/images/lifeos.png" alt="LifeOS" className="centered-image"/>
    </section>
  );
};

export default LifeOS;
