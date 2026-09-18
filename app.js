const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count++;
  });
  document.querySelector('#project-count').textContent = `${String(count).padStart(2, '0')} PROJECT${count === 1 ? '' : 'S'} FOUND`;
}));
const projects = {
  "evently": {
    "title": "EVENTLY",
    "filter": "backend",
    "category": "BACKEND / EVENT BOOKING",
    "kind": "PERSONAL PROJECT",
    "art": "booking",
    "icon": "▣",
    "summary": "Event booking with concurrent request handling, background jobs, and Redis caching.",
    "description": "An API-first Django event booking system with separate booking, user, and administration modules. The implementation combines database transactions, Redis locks, and asynchronous processing.",
    "highlights": [
      "Coordinates bookings with database transactions and Redis-based locks.",
      "Uses Celery for booking workflows and email notifications.",
      "Includes cache utilities, database indexes, and Docker Compose configuration.",
      "Includes API, Celery integration, end-to-end, and traffic simulation scripts."
    ],
    "tags": [
      "DJANGO / DRF",
      "CELERY",
      "REDIS",
      "POSTGRESQL"
    ],
    "repo": "Evently",
    "diagram": [
      "REQUEST",
      "LOCK",
      "BOOK"
    ],
    "url": "https://github.com/arpit-tiwari-dev/Evently"
  },
  "taskapi": {
    "title": "TASK MANAGEMENT API",
    "filter": "cloud",
    "category": "CLOUD / BACKEND API",
    "kind": "ENGINEERING ASSESSMENT",
    "art": "cloud",
    "icon": "☷",
    "summary": "An async task API with MongoDB, GitHub issue creation, and Kubernetes deployment manifests.",
    "description": "A FastAPI task management service built as an engineering assessment, with route, service, and repository layers. It connects task workflows to GitHub and includes local container and Kubernetes configuration.",
    "highlights": [
      "Implements task creation, updates, completion, deletion, and paginated listing.",
      "Uses asynchronous MongoDB access through Motor.",
      "Optionally creates GitHub issues through background tasks and PyGithub.",
      "Includes Docker Compose, Kubernetes deployment and service manifests, and an autoscaler configuration."
    ],
    "tags": [
      "FASTAPI",
      "MONGODB",
      "KUBERNETES",
      "DOCKER"
    ],
    "repo": "Task_Management_System",
    "diagram": [
      "API",
      "MONGO",
      "K8S"
    ],
    "url": "https://github.com/arpit-tiwari-dev/Task_Management_System"
  },
  "ifsc": {
    "title": "IFSC LOOKUP SERVICE",
    "filter": "backend",
    "category": "BACKEND / DATA SERVICE",
    "kind": "ENGINEERING ASSESSMENT",
    "art": "data",
    "icon": "▤",
    "summary": "Bank branch lookups through Redis, MongoDB, and an external IFSC data provider.",
    "description": "A TypeScript and Express service for Indian bank branch lookups. Requests pass through a cache, persistent storage, and an external provider, with configurable expiration and typed data models.",
    "highlights": [
      "Checks Redis first, then MongoDB, before requesting fresh data from the Razorpay IFSC API.",
      "Separates the external provider from the lookup service.",
      "Includes IFSC format validation and handling for missing records and upstream errors.",
      "Provides service test files and a Docker Compose setup."
    ],
    "tags": [
      "TYPESCRIPT",
      "EXPRESS",
      "REDIS",
      "MONGODB"
    ],
    "repo": "ifsc-service",
    "diagram": [
      "CACHE",
      "DB",
      "API"
    ],
    "url": "https://github.com/arpit-tiwari-dev/ifsc-service"
  },
  "pocketcloud": {
    "title": "POCKETCLOUD",
    "filter": "tools",
    "category": "DEVELOPER TOOLS / FILE SHARING",
    "kind": "PERSONAL PROJECT",
    "art": "cloud",
    "icon": "⇄",
    "summary": "Share files between devices on the same local network through a browser interface.",
    "description": "A local-network file sharing utility built with FastAPI and a browser UI. Files stay in a configurable folder on the host machine, with token-based access for connected devices.",
    "highlights": [
      "Lists, uploads, downloads, and deletes files through HTTP endpoints.",
      "Streams downloads and processes uploads in chunks.",
      "Uses a shared token for file API access.",
      "Works on the same Wi-Fi or LAN; remote relay access is a planned extension."
    ],
    "tags": [
      "PYTHON",
      "FASTAPI",
      "UVICORN"
    ],
    "repo": "pocket-cloud",
    "diagram": [
      "DEVICE",
      "LAN",
      "FILES"
    ],
    "url": "https://github.com/arpit-tiwari-dev/pocket-cloud"
  },
  "moviegeeks": {
    "title": "MOVIE GEEKS",
    "filter": "backend",
    "category": "BACKEND / MOVIE DISCOVERY",
    "kind": "PERSONAL PROJECT",
    "art": "movies",
    "icon": "▶",
    "summary": "A Django movie catalog with user ratings, HTMX updates, and background rating aggregation.",
    "description": "A movie discovery and rating application built with Django. The public implementation includes sortable movie lists, detail pages, account templates, interactive ratings, and Celery tasks.",
    "highlights": [
      "Browses and sorts movies with paginated Django views.",
      "Returns HTMX fragments for dynamic catalog and rating interactions.",
      "Shows authenticated users their individual movie ratings.",
      "Aggregates movie rating counts and averages with Celery tasks."
    ],
    "tags": [
      "DJANGO",
      "HTMX",
      "CELERY",
      "SQL"
    ],
    "repo": "movieGeeks",
    "diagram": [
      "BROWSE",
      "RATE",
      "DISCOVER"
    ],
    "url": "https://github.com/arpit-tiwari-dev/movieGeeks"
  },
  "fraud": {
    "title": "PAYMENT FRAUD DETECTION",
    "filter": "ml",
    "category": "MACHINE LEARNING / CLASSIFICATION",
    "kind": "ACADEMIC PROJECT",
    "art": "ml",
    "icon": "◇",
    "summary": "A LightGBM-based payment classifier with individual and batch prediction workflows.",
    "description": "A final-year machine learning project combining preprocessing and training notebooks with a Streamlit interface. The application loads a saved LightGBM model to classify payment transactions.",
    "highlights": [
      "Supports individual transaction inputs and batch CSV uploads.",
      "Uses transaction type, amount, and balance features for inference.",
      "Exports batch predictions and session history as CSV files.",
      "Includes data preparation, model-training, and model-comparison notebooks."
    ],
    "tags": [
      "PYTHON",
      "LIGHTGBM",
      "STREAMLIT",
      "PANDAS"
    ],
    "repo": "final-year-major-project",
    "diagram": [
      "DATA",
      "MODEL",
      "RESULT"
    ],
    "url": "https://github.com/arpit-tiwari-dev/final-year-major-project"
  },
  "cliassist": {
    "title": "CLI ASSIST",
    "filter": "tools",
    "category": "DEVELOPER TOOLS / AI ASSISTANT",
    "kind": "PROTOTYPE",
    "art": "terminal",
    "icon": ">_",
    "summary": "Capture PowerShell command failures and ask an LLM to suggest the intended command.",
    "description": "An experimental command-line assistant that connects a PowerShell error-logging hook to a Python script using the Gemini API. It reports suggestions without executing them.",
    "highlights": [
      "Logs failed commands, error messages, timestamps, and exit codes as JSONL.",
      "Reads recent error entries and constructs an analysis prompt.",
      "Calls the Gemini API and prints a suggested interpretation of the command.",
      "Keeps command execution under the user’s control."
    ],
    "tags": [
      "PYTHON",
      "POWERSHELL",
      "GEMINI API"
    ],
    "repo": "cli-assist",
    "diagram": [
      "ERROR",
      "ANALYZE",
      "SUGGEST"
    ],
    "url": "https://github.com/arpit-tiwari-dev/cli-assist"
  },
  "trade": {
    "title": "TRADE EXECUTION ENGINE",
    "filter": "backend",
    "category": "BACKEND / EXECUTION SIMULATION",
    "kind": "ENGINEERING ASSESSMENT",
    "art": "data",
    "icon": "↗",
    "summary": "A broker-adapter API demonstrating order execution, retries, and structured results.",
    "description": "A FastAPI engineering exercise with interchangeable mock broker adapters. It demonstrates execution flow and failure handling with simulated brokers rather than live trading connections.",
    "highlights": [
      "Accepts typed order requests and returns structured execution results.",
      "Separates API schemas, execution logic, broker adapters, and notifications.",
      "Retries failed order attempts up to three times.",
      "Includes Docker configuration and simulated broker behavior."
    ],
    "tags": [
      "PYTHON",
      "FASTAPI",
      "PYDANTIC",
      "DOCKER"
    ],
    "repo": "Portfolio-Trade-Execution-Engine",
    "diagram": [
      "ORDER",
      "ADAPTER",
      "RESULT"
    ],
    "url": "https://github.com/arpit-tiwari-dev/Portfolio-Trade-Execution-Engine"
  },
  "workforce": {
    "title": "WORKFORCE MANAGEMENT",
    "filter": "backend",
    "category": "BACKEND / WORKFLOW MANAGEMENT",
    "kind": "ASSESSMENT EXTENSION",
    "art": "booking",
    "icon": "☷",
    "summary": "Spring Boot task workflows with reassignment, overdue views, priorities, and comments.",
    "description": "An extension of a Spring Boot workforce management starter project. The implementation adds task workflow behavior and activity features using in-memory repositories.",
    "highlights": [
      "Reassigns tasks by reference while cancelling duplicate active tasks.",
      "Builds a daily view of active tasks and overdue work.",
      "Supports changing and filtering task priorities.",
      "Adds task comments and comment retrieval endpoints."
    ],
    "tags": [
      "JAVA",
      "SPRING BOOT",
      "GRADLE"
    ],
    "repo": "railse-task",
    "diagram": [
      "ASSIGN",
      "PRIORITIZE",
      "TRACK"
    ],
    "url": "https://github.com/arpit-tiwari-dev/railse-task"
  },
  "sentiment": {
    "title": "IMDB SENTIMENT ANALYSIS",
    "filter": "ml",
    "category": "MACHINE LEARNING / NLP",
    "kind": "LEARNING PROJECT",
    "art": "ml",
    "icon": "±",
    "summary": "Compare text classifiers for positive and negative IMDb movie-review sentiment.",
    "description": "A notebook-based NLP project that explores movie-review sentiment classification and compares several baseline machine learning models.",
    "highlights": [
      "Works with the IMDb movie-review dataset.",
      "Preprocesses review text for classification.",
      "Compares Gaussian, Multinomial, and Bernoulli Naive Bayes with Logistic Regression.",
      "Documents model accuracy comparisons in the repository."
    ],
    "tags": [
      "PYTHON",
      "NLP",
      "SCIKIT-LEARN"
    ],
    "repo": "imdb-movie-review-sentimnet-analysis",
    "diagram": [
      "TEXT",
      "CLASSIFY",
      "+ / −"
    ],
    "url": "https://github.com/arpit-tiwari-dev/imdb-movie-review-sentimnet-analysis"
  }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-description').textContent = project.description;
  const highlights = document.querySelector('#dialog-highlights');
  highlights.replaceChildren(...project.highlights.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
  document.querySelector("#dialog-repository").href = project.url;
  dialog.showModal();
}));
document.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
let toastTimeout;
document.querySelector('#copy-email').addEventListener('click', async () => {
  const toast = document.querySelector('#toast');
  try { await navigator.clipboard.writeText('arpit.tiwari.dev@gmail.com'); toast.textContent = '✓ Email address copied.'; }
  catch { toast.textContent = 'Email: arpit.tiwari.dev@gmail.com'; }
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3500);
});
document.querySelector('#year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) {
    navigation.querySelectorAll('a').forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${entry.target.id}`));
  }
}, { rootMargin: '-10% 0px -60% 0px' });
document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
