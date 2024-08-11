# Recreating the PDF content due to download link error
from fpdf import FPDF
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

# Setting title
pdf.set_font("Arial", size=12, style='B')
pdf.cell(0, 10, "Frontend Developer Learning Resources", 0, 1, 'C')
pdf.ln(10)

# Adding content
sections = [
    ("Basics:", [
        ("HTML:", [
            "MDN Web Docs - HTML: https://developer.mozilla.org/en-US/docs/Web/HTML",
            "freeCodeCamp - Responsive Web Design Certification: https://www.freecodecamp.org/learn/responsive-web-design/"
        ]),
        ("CSS:", [
            "MDN Web Docs - CSS: https://developer.mozilla.org/en-US/docs/Web/CSS",
            "CSS-Tricks: https://css-tricks.com/",
            "freeCodeCamp - Responsive Web Design Certification: https://www.freecodecamp.org/learn/responsive-web-design/"
        ]),
        ("JavaScript:", [
            "MDN Web Docs - JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "Eloquent JavaScript (book): https://eloquentjavascript.net/",
            "You Don't Know JS (book series): https://github.com/getify/You-Dont-Know-JS",
            "freeCodeCamp - JavaScript Algorithms and Data Structures: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
        ])
    ]),
    ("Version Control:", [
        ("Git:", [
            "Pro Git (book): https://git-scm.com/book/en/v2",
            "GitHub Learning Lab: https://lab.github.com/",
            "Atlassian Git Tutorials: https://www.atlassian.com/git/tutorials"
        ])
    ]),
    ("Package Managers:", [
        ("NPM/Yarn:", [
            "NPM Documentation: https://docs.npmjs.com/",
            "Yarn Documentation: https://classic.yarnpkg.com/en/docs/"
        ])
    ]),
    ("Build Tools:", [
        ("Webpack:", [
            "Webpack Documentation: https://webpack.js.org/concepts/",
            "Webpack Academy: https://webpack.academy/"
        ]),
        ("Parcel:", [
            "Parcel Documentation: https://parceljs.org/"
        ]),
        ("Babel:", [
            "Babel Documentation: https://babeljs.io/docs/en/"
        ])
    ]),
    ("CSS Preprocessors:", [
        ("Sass:", [
            "Sass Documentation: https://sass-lang.com/documentation",
            "Codecademy - Learn Sass: https://www.codecademy.com/learn/learn-sass"
        ])
    ]),
    ("Advanced JavaScript:", [
        ("ES6+ Features:", [
            "MDN Web Docs - ES6: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
            "ES6 for Everyone (course by Wes Bos): https://es6.io/"
        ]),
        ("APIs:", [
            "MDN Web Docs - Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
            "freeCodeCamp - APIs and Microservices: https://www.freecodecamp.org/learn/apis-and-microservices/"
        ])
    ]),
    ("Frameworks/Libraries:", [
        ("React:", [
            "React Official Documentation: https://reactjs.org/docs/getting-started.html",
            "React for Beginners (course by Wes Bos): https://reactforbeginners.com/",
            "freeCodeCamp - Front End Development Libraries: https://www.freecodecamp.org/learn/front-end-development-libraries/"
        ]),
        ("Vue:", [
            "Vue Official Documentation: https://vuejs.org/v2/guide/",
            "Vue Mastery: https://www.vuemastery.com/"
        ]),
        ("Angular:", [
            "Angular Official Documentation: https://angular.io/docs",
            "Tour of Heroes Tutorial: https://angular.io/tutorial"
        ])
    ]),
    ("State Management:", [
        ("Redux:", [
            "Redux Official Documentation: https://redux.js.org/introduction/getting-started",
            "Redux Essentials (tutorial): https://redux.js.org/tutorials/essentials/part-1-overview-concepts"
        ]),
        ("MobX:", [
            "MobX Official Documentation: https://mobx.js.org/README.html"
        ])
    ]),
    ("Testing:", [
        ("Jest:", [
            "Jest Official Documentation: https://jestjs.io/docs/en/getting-started"
        ]),
        ("React Testing Library:", [
            "React Testing Library Documentation: https://testing-library.com/docs/react-testing-library/intro/"
        ])
    ]),
    ("Performance Optimization:", [
        ("Lighthouse:", [
            "Lighthouse Documentation: https://developers.google.com/web/tools/lighthouse"
        ]),
        ("Code Splitting:", [
            "Code Splitting with Webpack: https://webpack.js.org/guides/code-splitting/"
        ]),
        ("Lazy Loading:", [
            "Lazy Loading Images and Video: https://web.dev/lazy-loading/"
        ])
    ]),
    ("Responsive Design:", [
        ("Bootstrap:", [
            "Bootstrap Official Documentation: https://getbootstrap.com/docs/5.0/getting-started/introduction/"
        ]),
        ("Tailwind CSS:", [
            "Tailwind CSS Documentation: https://tailwindcss.com/docs"
        ])
    ]),
    ("Accessibility:", [
        ("ARIA:", [
            "MDN Web Docs - ARIA: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
        ]),
        ("Semantic HTML:", [
            "MDN Web Docs - Semantic HTML: https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML"
        ])
    ]),
    ("Progressive Web Apps (PWA):", [
        ("Service Workers:", [
            "MDN Web Docs - Service Workers: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
        ]),
        ("Web App Manifest:", [
            "MDN Web Docs - Web App Manifest: https://developer.mozilla.org/en-US/docs/Web/Manifest"
        ])
    ]),
    ("Advanced Git:", [
        ("Advanced Git Tutorials:", [
            "Atlassian Advanced Git Tutorials: https://www.atlassian.com/git/tutorials/advanced-overview"
        ])
    ]),
    ("CI/CD:", [
        ("Jenkins:", [
            "Jenkins Documentation: https://www.jenkins.io/doc/"
        ]),
        ("Travis CI:", [
            "Travis CI Documentation: https://docs.travis-ci.com/"
        ]),
        ("CircleCI:", [
            "CircleCI Documentation: https://circleci.com/docs/"
        ]),
        ("GitHub Actions:", [
            "GitHub Actions Documentation: https://docs.github.com/en/actions"
        ])
    ]),
    ("DevOps Basics:", [
        ("Docker:", [
            "Docker Documentation: https://docs.docker.com/get-started/"
        ])
    ]),
    ("Soft Skills:", [
        ("Communication & Project Management:", [
            "Coursera - Communication Skills: https://www.coursera.org/courses?query=communication%20skills",
            "Coursera - Project Management: https://www.coursera.org/courses?query=project%20management"
        ])
    ]),
    ("Keeping Up-to-Date:", [
        ("Blogs/Podcasts:", [
            "CSS-Tricks: https://css-tricks.com/",
            "Smashing Magazine: https://www.smashingmagazine.com/",
            "Syntax.fm (podcast): https://syntax.fm/"
        ]),
        ("Conferences/Meetups:", [
            "Meetup: https://www.meetup.com/",
            "Eventbrite: https://www.eventbrite.com/"
        ]),
        ("Open Source:", [
            "GitHub: https://github.com/",
            "FreeCodeCamp: https://www.freecodecamp.org/"
        ])
    ])
]

pdf.set_font("Arial", size=12)
for section, topics in sections:
    pdf.set_font("Arial", size=12, style='B')
    pdf.cell(0, 10, section, 0, 1)
    pdf.set_font("Arial", size=12)
    for topic, links in topics:
        pdf.cell(0, 10, f"- {topic}", 0, 1)
        for link in links:
            pdf.cell(0, 10, f"  - {link}", 0, 1)

# Save the PDF
pdf_output_path = "/mnt/data/Frontend_Developer_Learning_Resources.pdf"
pdf.output(pdf_output_path)

pdf_output_path
