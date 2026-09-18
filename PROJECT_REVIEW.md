# Portfolio project selection

Reviewed the 19 public repositories returned by the GitHub API for [arpit-tiwari-dev](https://github.com/arpit-tiwari-dev). Selection prioritizes implemented features, relevance to backend/cloud engineering, and variety. This is a source review, not a claim that every application was run or production-tested.

## Included

| Repository | Portfolio focus | Evidence reviewed |
| --- | --- | --- |
| [Evently](https://github.com/arpit-tiwari-dev/Evently) | Booking concurrency and asynchronous processing | README, file tree, booking concurrency utilities |
| [Task_Management_System](https://github.com/arpit-tiwari-dev/Task_Management_System) | FastAPI, MongoDB, GitHub integration, Kubernetes | Routes, service layer, deployment manifest, README |
| [ifsc-service](https://github.com/arpit-tiwari-dev/ifsc-service) | Layered caching and provider integration | Service implementation, service test file, README |
| [pocket-cloud](https://github.com/arpit-tiwari-dev/pocket-cloud) | Practical local-network file sharing | Server implementation, requirements, README |
| [movieGeeks](https://github.com/arpit-tiwari-dev/movieGeeks) | Django catalog, HTMX ratings, Celery aggregation | Movie and rating views, tasks, file tree |
| [final-year-major-project](https://github.com/arpit-tiwari-dev/final-year-major-project) | Fraud classification with a usable interface | Streamlit implementation, requirements, notebook file tree, README |
| [cli-assist](https://github.com/arpit-tiwari-dev/cli-assist) | Error capture and LLM-assisted command suggestions | Python implementation and PowerShell hook |
| [Portfolio-Trade-Execution-Engine](https://github.com/arpit-tiwari-dev/Portfolio-Trade-Execution-Engine) | Adapter architecture and retries | Execution engine, mock broker, request schemas, README |
| [railse-task](https://github.com/arpit-tiwari-dev/railse-task) | Workflow extensions to a Spring Boot starter | Task service implementation and feature documentation |
| [imdb-movie-review-sentimnet-analysis](https://github.com/arpit-tiwari-dev/imdb-movie-review-sentimnet-analysis) | NLP classifier comparison | README and notebook file listing |

Assessment projects and prototypes are labelled as such. The trade engine uses mocked brokers: the portfolio does not claim live execution or the unimplemented portfolio-rebalancing behavior described in its README. Movie Geeks copy reflects its public catalog/rating implementation; the public tree did not establish the recommendation-model implementation described in the resume. Evently performance figures were omitted from the project gallery because this review did not rerun its benchmarks.

## Not featured

| Repository | Reason |
| --- | --- |
| zero-budget | README clone URL and license identify an upstream project by Indranil Bhuin. Arpit's specific contribution is not established; add as a contribution only after clarification. |
| github_sdk_issues_creation_test | README-only integration test repository. |
| go-command-correction-cli-utility | Empty repository. |
| online-payment-fraud-detection | Overlaps the more developed final-year project selected above. |
| movie-recommendation-system | Small Streamlit recommendation demo; selected Movie Geeks and the fraud application for the main gallery. |
| IPL_Score_Predictor | Introductory regression notebook; sentiment analysis provides a more distinct ML example. |
| Snake | Small early JavaScript game; less relevant to the current backend/cloud focus. |
| go-to-do-cli | Small learning utility; inspected command/storage code, with an apparent edit-command parsing issue. CLI Assist provides a more distinctive tools example. |
| 2201640100081 | URL-shortener assessment with expiry and click statistics; inspected its views, but the selected APIs demonstrate a broader range of engineering work. |

The gallery links to all repositories through the GitHub profile, so other work remains discoverable. No live-demo URLs were added.
