import { person } from './person.js';

export const documentAsideBar = () => {
  return `<aside class="sidepanel sidepanel--white">
      <a
        href="${person.socials.github}"
        target="_blank"
        class="sidepanel__link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
        >
          <path
            d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z"
            fill="#fff"
          />
        </svg>
      </a>
      <a href="${person.socials.telegram}" target="_blank" class="sidepanel__link"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z"
            fill="#fff"
          />
        </svg>
      </a>
      <a
        href="${person.socials.discord}"
        target="_blank"
        class="sidepanel__link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="22"
          height="22"
          viewBox="0 -28.5 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
              fill="#fff"
              fill-rule="nonzero"
            ></path>
          </g>
        </svg>
      </a>
      <div class="sidepanel__divider"></div>
      <div class="sidepanel__text"><span>Social media</span></div>
    </aside>`;
};

export const documentMenu = () => {
  return `
  <div class="menu">
      <div class="menu__block">
        <div class="menu__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <path
              d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z"
              fill="#fff"
            />
          </svg>
        </div>
        <nav>
          <ul class="menu__list">
            <li class="menu__link"><a href="#about_section">About me </a></li>
            <li class="menu__link">
              <a href="#resume_section">My experience </a>
            </li>
            <li class="menu__link"><a href="#skills_section">My skills </a></li>
            <li class="menu__link">
              <a href="#portfolio_section">My works </a>
            </li>
            <li class="menu__link"><a href="#price_section">Price list </a></li>
            <li class="menu__link">
              <a href="#contacts_section">Contacts </a>
            </li>
          </ul>
        </nav>
        <div class="menu__social">
          <a href="${person.socials.github}" target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z"
                fill="#fff"
              />
            </svg>
          </a>
          <a href="${person.socials.telegram}" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z"
                fill="#fff"
              />
            </svg>
          </a>
          <a
            href="${person.socials.discord}"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="22"
              height="22"
              viewBox="0 -28.5 256 256"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="#fff"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="menu__overlay"></div>
    </div>`;
};

export const documentPromoSection = () => {
  return `   <section class="promo">
      <div class="hamburger">
        <span class="hamburger_small"></span>
        <span class="hamburger_long"></span>
        <span class="hamburger_small"></span>
      </div>
      <div class="container">
        <div class="title title_s promo__subtitle">My name is ${person.name} ${person.surname}</div>
        <h1 class="title title_xxl promo__title">I am a ${person.job} </h1>
        <div class="promo__btns">
          <a href="#portfolio_section" class="btn promo__link">Portfolio</a>
          <a
            href="#about_section"
            class="btn promo__link promo__link_transparent"
          >
            About me
          </a>
        </div>
      </div>
    </section>
`;
};

export const documentAboutSection = () => {
  return `<section class="about">
      <div class="container">
        <div class="about__wrapper">
          <img src="img/main_photo.jpg" alt="my photo" class="about__photo" />
          <div class="about__descr">
            <h2 class="title title_s about__title" id="about_section">
              About me
            </h2>
            <div class="title title_xl about__subtitle">My name is Valerii</div>
            <div class="divider"></div>
            <p class="about__text">
            ${person.description}
            </p>
          </div>
          <div class="about__skills">
            <div class="about__skill">
              <div class="about__skills-circle">
                <img
                  src="icons/about_me/web_development.svg"
                  class="about__img"
                  alt="web development"
                />
              </div>
              <div>
                <div class="title title_xs">Web development</div>
                <div class="about__skill-text">
                 ${person.skills.webdev}
                </div>
              </div>
            </div>
            <div class="about__skill">
              <div class="about__skills-circle">
                <img
                  src="icons/about_me/mobile_dev.svg"
                  class="about__img"
                  alt="mobile development"
                />
              </div>
              <div>
                <div class="title title_xs">Mobile development</div>
                <div class="about__skill-text">
                 ${person.skills.mobiledev}
                </div>
              </div>
            </div>
            <div class="about__skill">
              <div class="about__skills-circle">
                <img
                  src="icons/about_me/design.svg"
                  class="about__img"
                  alt="web development"
                />
              </div>
              <div>
                <div class="title title_xs">UI/UX Design</div>
                <div class="about__skill-text">
                  ${person.skills.uiux}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
};

export const documentResumeSection = () => {
  return `    <section class="resume">
      <div class="container">
        <h2
          class="title title_s resume__title title__section-title"
          id="resume_section"
        >
          Experience
        </h2>
        <div class="title title_xl resume__subtitle title__section-subtitle">
          How can I be useful?
        </div>
        <div class="divider"></div>
        <div class="resume__wrapper">
          <div class="resume__column">
            <h3 class="title title_m resume__column-title">Education</h3>
            <ul class="resume__list">
              <li class="resume__list-item">
                <div class="resume__item">
                  <div class="resume__item-header">
                    <div class="resume__item-icon">
                      <img
                        src="icons/experience/high-school.svg"
                        alt="high school"
                      />
                    </div>
                    <h4 class="title title_xs">${person.education.school.name}</h4>
                    <div class="resume__item-descr">${person.education.school.whereAndSinceYear}</div>
                  </div>
                  <div class="resume__item-body">
                   ${person.education.school.description}
                  </div>
                </div>
              </li>
              <li class="resume__list-item">
                <div class="resume__item">
                  <div class="resume__item-header">
                    <div class="resume__item-icon">
                      <img src="icons/experience/courses.svg" alt="udemy" />
                    </div>
                    <h4 class="title title_xs">${person.education.courses.name}</h4>
                    <div class="resume__item-descr">
                      ${person.education.courses.whereAndSinceYear}
                    </div>
                  </div>
                  <div class="resume__item-body">
                   ${person.education.courses.description}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="resume__column">
            <h3 class="title title_m resume__column-title">
              Non-commercial experience
            </h3>
            <ul class="resume__list">
              <li class="resume__list-item">
                <div class="resume__item">
                  <div class="resume__item-header">
                    <div class="resume__item-icon">
                      <img src="icons/experience/designer.svg" alt="designer" />
                    </div>
                    <h4 class="title title_xs">${person.experience.frontend.name}</h4>
                    <div class="resume__item-descr">${person.experience.frontend.whereAndSinceYear}</div>
                  </div>
                  <div class="resume__item-body">
                    ${person.experience.frontend.description}
                  </div>
                </div>
              </li>
              <li class="resume__list-item">
                <div class="resume__item">
                  <div class="resume__item-header">
                    <div class="resume__item-icon">
                      <img
                        src="icons/experience/developer.svg"
                        alt="backend developer"
                      />
                    </div>
                    <h4 class="title title_xs">${person.experience.backend.name}</h4>
                    <div class="resume__item-descr">${person.experience.backend.whereAndSinceYear}</div>
                  </div>
                  <div class="resume__item-body">
                    ${person.experience.backend.description}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>`;
};

export const documentSkillsSection = () => {
  return `   <section class="skills">
      <div class="container">
        <h2
          class="title title_s skills__title title__section-title"
          id="skills_section"
        >
          Skills
        </h2>
        <div class="title title_xl skills__subtitle title__section-subtitle">
          What I use in my work ?
        </div>
        <div class="divider"></div>
        <div class="skills__wrapper">
          <div class="skills__item">
            <div class="skills__item-header">
              <img src="img/skills/html5.svg" alt="html" />
            </div>
            <div class="skills__item-title">${person.techStack.html.name}</div>
            <div class="skills__item-body">
            ${person.techStack.html.description}
            </div>
          </div>
          <div class="skills__item">
            <div class="skills__item-header">
              <img src="img/skills/css3.png" alt="css" />
            </div>
            <div class="skills__item-title">${person.techStack.css.name}</div>
            <div class="skills__item-body">
            ${person.techStack.css.description}
            </div>
          </div>
          <div class="skills__item">
            <div class="skills__item-header">
              <img src="img/skills/JS.svg" alt="javascript" />
            </div>
            <div class="skills__item-title">${person.techStack.js.name}</div>
            <div class="skills__item-body">
             ${person.techStack.js.description}
            </div>
          </div>
          <div class="skills__item">
            <div class="skills__item-header">
              <img src="img/skills/Jquery.svg" alt="jquery" />
            </div>
            <div class="skills__item-title">${person.techStack.jquery.name}</div>
            <div class="skills__item-body">
            ${person.techStack.jquery.description}
            </div>
          </div>
          <!-- <div class="skills__item">
            <div class="skills__item-header">
              <img src="img/skills/React.svg" alt="react" />
            </div>
            <div class="skills__item-title">React</div>
            <div class="skills__item-body">
              This library allows you to create web applications. We can create
              the most interactive product specifically for your purposes
            </div>
          </div>
          <div class="skills__item">
            <div class="skills__item-header">
              <img src="img/skills/Node.js.svg" alt="node js" />
            </div>
            <div class="skills__item-title">Node.js</div>
            <div class="skills__item-body">
              This platform allows you to create a backend for your product -
              the “brains” that will perform actions that the user does not see.
            </div>
          </div> -->
          <!-- <div class="skills__item">
            <div class="skills__item-header">
              <img src="img/skills/Mongo.db.svg" alt="mongo database" />
            </div>
            <div class="skills__item-title">Mongo.db</div>
            <div class="skills__item-body">
              This is a non-relational database that will store the data of your
              website or application.
            </div>
          </div> -->
        </div>
        <div class="skills__stats">
          <div class="skills__stat">
            <div class="skills__stat-top">
              <div class="skills__stat">Creation of Front-end</div>
              <div class="skills__proc">${person.stats.frontend}</div>
            </div>
            <div class="skills__stat-bottom">
              <div class="skills__stat-disable">
                <div class="skills__stat-active"></div>
              </div>
            </div>
          </div>
          <div class="skills__stat">
            <div class="skills__stat-top">
              <div class="skills__stat">Creation of Back-end</div>
              <div class="skills__proc">${person.stats.backend}</div>
            </div>
            <div class="skills__stat-bottom">
              <div class="skills__stat-disable">
                <div class="skills__stat-active"></div>
              </div>
            </div>
          </div>
          <div class="skills__stat">
            <div class="skills__stat-top">
              <div class="skills__stat">Application creation</div>
              <div class="skills__proc">${person.stats.application}</div>
            </div>
            <div class="skills__stat-bottom">
              <div class="skills__stat-disable">
                <div class="skills__stat-active"></div>
              </div>
            </div>
          </div>
          <div class="skills__stat">
            <div class="skills__stat-top">
              <div class="skills__stat">Working with data</div>
              <div class="skills__proc">${person.stats.data}</div>
            </div>
            <div class="skills__stat-bottom">
              <div class="skills__stat-disable">
                <div class="skills__stat-active"></div>
              </div>
            </div>
          </div>
          <div class="skills__stat">
            <div class="skills__stat-top">
              <div class="skills__stat">Creativity</div>
              <div class="skills__proc">${person.stats.creativity}</div>
            </div>
            <div class="skills__stat-bottom">
              <div class="skills__stat-disable">
                <div class="skills__stat-active"></div>
              </div>
            </div>
          </div>
          <div class="skills__stat">
            <div class="skills__stat-top">
              <div class="skills__stat">Soft skills</div>
              <div class="skills__proc">${person.stats.softSkills}</div>
            </div>
            <div class="skills__stat-bottom">
              <div class="skills__stat-disable">
                <div class="skills__stat-active"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
};

export const documentPortfolioSection = () => {
  return `    <section class="portfolio">
      <div class="container">
        <h2
          class="title title_s portfolio__title title__section-title"
          id="portfolio_section"
        >
          Portfio
        </h2>
        <div class="title title_xl portfolio__subtitle title__section-subtitle">
          My works
        </div>
        <div class="divider"></div>
        <div class="portfolio__wrapper">
          <a
            href="${person.works.ceramicSoul}"
            class="portfolio__item"
            target="_blank"
          >
            <img
              src="img/works/ceramic-soul.jpg"
              alt="ceramic-soul"
              class="portfolio__img"
            />
          </a>
          <a
            href="${person.works.dezign}"
            class="portfolio__item"
            target="_blank"
          >
            <img
              src="img/works/second-DszjXBWP.png"
              alt="dezign"
              class="portfolio__img"
            />
          </a>
          <a
            href="${person.works.pulse}"
            class="portfolio__item"
            target="_blank"
          >
            <img src="img/works/pulse.jpg" alt="pulse" class="portfolio__img" />
          </a>
          <a
            href="${person.works.monovisionStudio}"
            class="portfolio__item vertical"
            target="_blank"
          >
            <img
              src="img/works/monovision-studio.jpg"
              alt="monovision-studio"
              class="portfolio__img"
            />
          </a>
          <a
            href="${person.works.cyberpunk}"
            class="portfolio__item"
            target="_blank"
          >
            <img
              src="img/works/cyberpunk-landing.png"
              alt="cyberpunk-landing"
              class="portfolio__img"
            />
          </a>
          <a
            href="${person.works.createOwnRadio}"
            class="portfolio__item horizontal"
            target="_blank"
          >
            <img
              src="img/works/create-own-radio.jpg"
              alt="create-own-radio"
              class="portfolio__img"
            />
          </a>
        </div>
      </div>
    </section>`;
};

export const documentPriceSection = () => {
  return `    <section class="price">
      <div class="container">
        <h2
          class="title title_s price__title title__section-title"
          id="price_section"
        >
          Price-list
        </h2>
        <div class="divider"></div>
        <div class="price__wrapper">
          <div class="price__item">
            <div class="price__item-top">
              <div class="price__item-title">
                ${person.priceList.design.name} <span class="price__not-available">Locked</span>
              </div>
              <div class="price__item-price">from ${person.priceList.design.price}</div>
            </div>
            <div class="price__item-descr">
            ${person.priceList.design.description} 
            </div>
          </div>
          <div class="price__item">
            <div class="price__item-top">
              <div class="price__item-title">
                ${person.priceList.landingPage.name} 
                <span class="price__not-available">Locked</span>
              </div>
              <div class="price__item-price">from ${person.priceList.landingPage.price}</div>
            </div>
            <div class="price__item-descr">
              ${person.priceList.landingPage.description}
            </div>
          </div>

          <div class="price__item">
            <div class="price__item-top">
              <div class="price__item-title">
                ${person.priceList.corporateWebsite.name}
                <span class="price__not-available">Locked</span>
              </div>
              <div class="price__item-price">from ${person.priceList.corporateWebsite.price}</div>
            </div>
            <div class="price__item-descr">
              ${person.priceList.corporateWebsite.description}  
            </div>
          </div>
          <div class="price__item">
            <div class="price__item-top">
              <div class="price__item-title">
                ${person.priceList.application.name}
                <span class="price__not-available">Locked</span>
              </div>
              <div class="price__item-price">from ${person.priceList.application.price}</div>
            </div>
            <div class="price__item-descr">
              ${person.priceList.application.description}
            </div>
          </div>

          <div class="price__item">
            <div class="price__item-top">
              <div class="price__item-title">
                ${person.priceList.webApplication.name}
                <span class="price__not-available">Locked</span>
              </div>
              <div class="price__item-price">from ${person.priceList.webApplication.price}</div>
            </div>
            <div class="price__item-descr">
              ${person.priceList.webApplication.description}
            </div>
          </div>
          <div class="price__item">
            <div class="price__item-top">
              <div class="price__item-title">
                ${person.priceList.onlineStore.name}
                <span class="price__not-available">Locked</span>
              </div>
              <div class="price__item-price">from ${person.priceList.onlineStore.price}</div>
            </div>
            <div class="price__item-descr">${person.priceList.onlineStore.description}</div>
          </div>
        </div>
      </div>
    </section>`;
};

export const documentContactsSection = () => {
  return `    <section class="contacts">
      <div class="container">
        <div class="contacts__wrapper">
          <div class="contacts__photo">
            <img src="img/main_photo-minify.jpg" alt="photo" />
          </div>
          <div class="contacts__descr">
            <h2 class="title title_s contacts__title" id="contacts_section">
              Contacts
            </h2>
            <div class="title title_xl contacts__subtitle">Contact me</div>
            <div class="divider"></div>
            <div class="title title_xs contacts__text">
              In any convenient way
            </div>
            <div class="contacts__social">
              <a
                href="${person.socials.github}"
                class="contacts__link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z"
                    fill="#000"
                  />
                </svg>
              </a>
              <a
                href="${person.socials.discord}"
                class="contacts__link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="22"
                  height="22"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill="#000"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="${person.socials.telegram}"
                class="contacts__link"
                target="_blank"
              >
                <img src="icons/social/telegram.svg" alt="telegram" />
              </a>
            </div>
            <div class="title title_xs contacts__text">
              Or leave your details and I will write to you myself.
            </div>
            <form action="#" class="contacts__form">
              <div class="contacts__input">
                <input name="name" type="text" id="name" required />
                <label for="name">Your name</label>
              </div>
              <div class="contacts__input">
                <input name="email" type="email" id="email" required />
                <label for="email">Your email</label>
              </div>
              <div class="contacts__textarea">
                <textarea name="message" id="message"></textarea>
                <label for="message">Your message</label>
              </div>
              <div class="contacts__triggers">
                <button class="btn contacts__btn">Send message</button>
                <div class="contacts__policy">
                  <input type="checkbox" required />
                  <span
                    >I agree with the
                    <a href="/policy.html" target="_blank"
                      >privacy policy</a
                    ></span
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`;
};
