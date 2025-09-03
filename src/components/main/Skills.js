

const Skills = () => {
  return (
    <div>
      {/* SKILLS */}
      <div id="S"></div>
      <section className="skills">
        <h1>
          SKILLS<span> & TOOLS</span>
        </h1>
        <ul className="skills-grid">
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/photoshop_icon.png`}
                alt="포토샵"
              />
              <figcaption>Photoshop</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/illustrator_icon.png`}
                alt="일러스트"
              />
              <figcaption>Illustrator</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/figma_icon.png`}
                alt="피그마"
              />
              <figcaption>Figma</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/html5_icon.png`}
                alt="HTML"
              />
              <figcaption>HTML5</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/css3_icon.png`}
                alt="CSS"
              />
              <figcaption>CSS3</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/javascript_icon.png`}
                alt="JS"
              />
              <figcaption>
                JavaScript <br />
                ES6
              </figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/scss_icon.png`}
                alt="SCSS"
              />
              <figcaption>SCSS</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/react_icon.png`}
                alt="REACT"
              />
              <figcaption>React</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/supabase_icon.png`}
                alt="SUPABASE"
              />
              <figcaption>Supabase</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/github_icon.png`}
                alt="깃허브"
              />
              <figcaption>GitHub</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/git_icon.png`}
                alt="깃"
              />
              <figcaption>Git</figcaption>
            </figure>
          </li>
          <li className="skills-icon">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/slack_icon.png`}
                alt="SLACK"
              />
              <figcaption>Slack</figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
