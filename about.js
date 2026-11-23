(() => {
  "use strict";

  /*==================================================
  ABOUT HERO ANIMATION
  ==================================================*/

  const aboutHero = document.querySelector(".about-hero");

  if (aboutHero) {
    const aboutElements = aboutHero.querySelectorAll(".section-tag, h1, p");

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },

      {
        threshold: 0.2,
      },
    );

    aboutElements.forEach((element, index) => {
      element.classList.add("about-reveal");

      element.style.transitionDelay = `${index * 0.2}s`;

      aboutObserver.observe(element);
    });
  }

  /*==================================================
  OUR STORY ANIMATION
  ==================================================*/

  const storySection = document.querySelector(".story");

  if (storySection) {
    const storyElements = storySection.querySelectorAll(
      ".story-image, .story-content, .story-badge, .story-points div",
    );

    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },

      {
        threshold: 0.15,
      },
    );

    storyElements.forEach((element, index) => {
      element.classList.add("story-reveal");

      element.style.transitionDelay = `${index * 0.15}s`;

      storyObserver.observe(element);
    });
  }

  /*==================================================
  MISSION & VISION ANIMATION
  ==================================================*/

  const missionSection = document.querySelector(".mission");

  if (missionSection) {
    const missionCards = missionSection.querySelectorAll(".mission-card");

    const missionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },

      {
        threshold: 0.15,
      },
    );

    missionCards.forEach((card, index) => {
      card.classList.add("mission-reveal");

      card.style.transitionDelay = `${index * 0.2}s`;

      missionObserver.observe(card);
    });
  }

  /*==================================================
  OUR APPROACH ANIMATION
  ==================================================*/

  const approachSection = document.querySelector(".approach");

  if (approachSection) {
    const approachElements = approachSection.querySelectorAll(
      ".approach-header, .approach-item",
    );

    const approachObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },

      {
        threshold: 0.15,
      },
    );

    approachElements.forEach((element, index) => {
      element.classList.add("approach-reveal");

      element.style.transitionDelay = `${index * 0.15}s`;

      approachObserver.observe(element);
    });
  }

  /*==================================================
  OUR VALUES ANIMATION
  ==================================================*/

  const valuesSection = document.querySelector(".values");

  if (valuesSection) {
    const valuesElements = valuesSection.querySelectorAll(
      ".values-header, .value-card",
    );

    const valuesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },

      {
        threshold: 0.15,
      },
    );

    valuesElements.forEach((element, index) => {
      element.classList.add("value-reveal");

      element.style.transitionDelay = `${index * 0.12}s`;

      valuesObserver.observe(element);
    });
  }

  /*==================================================
  TEAM SECTION ANIMATION & DATA
  ==================================================*/

  const teamSection = document.querySelector(".team");

  if (teamSection) {
    const teamGrid = teamSection.querySelector(".team-grid");

    if (!teamGrid) {
      console.error("Team container .team-grid was not found in about.html");
    } else {
      const canonicalRoster = [
        {
          displayOrder: 1,
          fullName: "James Lochek",
          role: "Founder and Director",
          photoUrl: "/team/james-lochek.png",
        },
        {
          displayOrder: 2,
          fullName: "Sunday James",
          role: "Program and Project Lead",
          photoUrl: "/team/sunday-james.png",
        },
        {
          displayOrder: 3,
          fullName: "Henry Abahenya",
          role: "Monitoring, Evaluation, and Learning Lead",
          photoUrl: "/team/henry-abahenya.png",
        },
        {
          displayOrder: 4,
          fullName: "Helder James",
          role: "Finance and Administration Lead",
          photoUrl: "/team/helder-james.png",
        },
        {
          displayOrder: 5,
          fullName: "Martin Philip",
          role: "Communication and Media Lead",
          photoUrl: "/team/martin-philip.png",
        },
        {
          displayOrder: 6,
          fullName: "Victoria Iliha",
          role: "Secretary",
          photoUrl: "/team/victoria-iliha.png",
        },
        {
          displayOrder: 7,
          fullName: "Laku Noel",
          role: "Community Engagement Lead",
          photoUrl: "/team/laku-noel.png",
        },
        {
          displayOrder: 8,
          fullName: "Lucy Iholong",
          role: "Partnership and Resource Mobilization Lead",
          photoUrl: "/team/lucy-iholong.png",
        },
        {
          displayOrder: 9,
          fullName: "Salah Charles",
          role: "Digital Innovation and Tech Lead",
          photoUrl: "/team/salah-charles.png",
        },
      ];

      const normalizedName = (name) =>
        String(name || "")
          .trim()
          .replace(/\s+/g, " ")
          .toLowerCase();

      const normalizeResponse = (payload) => {
        if (Array.isArray(payload)) return payload;
        if (payload && Array.isArray(payload.team)) return payload.team;
        if (payload && Array.isArray(payload.members)) return payload.members;
        if (payload && Array.isArray(payload.data)) return payload.data;
        return [];
      };

      const showTeamError = (message) => {
        teamGrid.replaceChildren();

        const status = document.createElement("p");
        status.className = "team-load-error";
        status.setAttribute("role", "alert");
        status.textContent = message;

        teamGrid.appendChild(status);
        console.error(message);
      };

      const renderTeam = (members) => {
        teamGrid.replaceChildren();

        const orderedMembers = canonicalRoster.map((canonical) => {
          const apiMember = members.find(
            (member) =>
              normalizedName(member.fullName) ===
                normalizedName(canonical.fullName) ||
              Number(member.displayOrder) === canonical.displayOrder,
          );

          return {
            ...canonical,
            ...apiMember,
            displayOrder: canonical.displayOrder,
            fullName: canonical.fullName,
            role: canonical.role,
          };
        });

        orderedMembers.forEach((member) => {
          const card = document.createElement("article");
          card.className = "team-card team-reveal show";

          const imageWrap = document.createElement("div");
          imageWrap.className = "team-image";

          const image = document.createElement("img");
          image.src = member.photoUrl || "./profile.png";
          image.alt = member.fullName;
          image.loading = "lazy";
          image.addEventListener(
            "error",
            () => {
              image.onerror = null;
              image.src = "./profile.png";
            },
            { once: true },
          );

          imageWrap.appendChild(image);

          const info = document.createElement("div");
          info.className = "team-info";

          const name = document.createElement("h3");
          name.textContent = member.fullName;

          const role = document.createElement("span");
          role.textContent = member.role;

          const bio = document.createElement("p");
          bio.textContent =
            member.bio ||
            "Building inclusive, people-centered digital solutions.";

          const social = document.createElement("div");
          social.className = "team-social";

          [
            ["LinkedIn", "fa-linkedin"],
            ["X Twitter", "fa-x-twitter"],
          ].forEach(([label, iconClass]) => {
            const link = document.createElement("a");
            link.href = "#";
            link.setAttribute("aria-label", label);

            const icon = document.createElement("i");
            icon.className = `fa-brands ${iconClass}`;
            link.appendChild(icon);
            social.appendChild(link);
          });

          info.append(name, role, bio, social);
          card.append(imageWrap, info);
          teamGrid.appendChild(card);
        });
      };

      const loading = document.createElement("p");
      loading.className = "team-load-status";
      loading.setAttribute("role", "status");
      loading.textContent = "Loading team members...";
      teamGrid.replaceChildren(loading);

      fetch("/api/team", { headers: { Accept: "application/json" } })
        .then(async (response) => {
          const payload = await response.json().catch(() => null);

          if (!response.ok) {
            throw new Error(
              payload && payload.message
                ? payload.message
                : `Unable to load team members (${response.status})`,
            );
          }

          return payload;
        })
        .then((payload) => {
          const members = normalizeResponse(payload);

          if (!members.length) {
            showTeamError("No team members are available right now.");
            return;
          }

          renderTeam(members);
        })
        .catch((error) => {
          showTeamError(
            error.message ||
              "Unable to load team members. Please try again later.",
          );
        });
    }
  }
})();
