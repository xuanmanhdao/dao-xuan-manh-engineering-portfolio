/* Maintained portfolio content: bilingual copy, project case studies and career facts.
   Keep unverified employment dates, private contact channels and internal identifiers
   out of the presentation. Scope all user-approved measured data explicitly. */
window.PORTFOLIO = {
  ui: {
    en: {
      navAbout:"About",navExperience:"Experience",navProjects:"Projects",navSkills:"Expertise",navThinking:"Approach",navContact:"Contact",
      heroEyebrow:"INDEPENDENT ENGINEERING PORTFOLIO",heroKicker:"Senior Java Backend Engineer",
      heroHeadline:"Engineering dependable backend systems at the intersection of <em>business complexity</em> and <em>technical precision.</em>",
      heroDescription:"Hands-on experience in fintech, banking data platforms, enterprise integration and PostgreSQL performance. Building toward Solution Architecture.",
      exploreWork:"Explore selected work",viewExperience:"Professional journey",metricYears:"3+ years",metricBackend:"JAVA BACKEND",metricData:"6 months",metricDataLabel:"DATA ENGINEERING",metricDomain:"INDUSTRY FOCUS",
      visualLabel:"ENGINEERING LENS",nodeTop:"BUSINESS LOGIC",nodeRight:"INTEGRATION",nodeBottom:"DATA ACCESS",nodeLeft:"RELIABILITY",visualBottom:"From requirements to reliable solutions.",scrollExplore:"SCROLL TO EXPLORE",
      journeyLabel:"A JOURNEY THROUGH SYSTEMS",journey1:"Financial Transactions",journey2:"Data Platforms",journey3:"Enterprise Backend",journey4:"Architecture Thinking",
      aboutIndex:"PROFILE",aboutEyebrow:"THE PERSON BEHIND THE CODE",aboutTitle:"Engineering with context.<br><span class='serif-accent'>Not just code.</span>",
      aboutLead:"I'm a backend engineer working on systems where business rules, data consistency, and performance have to make sense together.",
      aboutP1:"My work spans financial transaction integrations, banking data migration and backend services for enterprise financial operations. I focus on Java and Spring Boot, with particular depth in PostgreSQL query analysis, role-aware data access, and workflow-driven systems.",
      aboutP2:"I enjoy going below the API surface: tracing a slow query to its execution plan, examining a permission boundary, or finding where a design needs to balance speed with correctness. My long-term direction is Solution Architecture—connecting business needs with technical choices across systems.",
      focusLabel:"CURRENT FOCUS",experienceIndex:"EXPERIENCE",experienceEyebrow:"PROFESSIONAL JOURNEY",experienceTitle:"Experience shaped by<br><span class='serif-accent'>real systems.</span>",experienceIntro:"Three complementary domains that inform how I approach backend engineering today.",
      projectsIndex:"SELECTED WORK",projectsEyebrow:"ENGINEERING CASE STUDIES",projectsTitle:"The work behind<br><span class='serif-accent'>the systems.</span>",projectsIntro:"Selected contributions, described at a conceptual level to protect confidential system and business information.",
      labTitle:"Engineering Lab",labText:"Ongoing explorations in developer tooling, SQL diagnostics, workflow patterns and software architecture. Research work is kept separate from production contributions.",labStatus:"EXPLORATION",
      expertiseIndex:"EXPERTISE",expertiseEyebrow:"TECHNICAL TOOLKIT",expertiseTitle:"Depth where it matters.<br><span class='serif-accent'>Breadth where it connects.</span>",expertiseIntro:"Tools and practices grouped by hands-on depth, not arbitrary proficiency percentages.",
      mindsetIndex:"APPROACH",mindsetEyebrow:"HOW I APPROACH ENGINEERING",mindsetTitle:"Deliberate decisions.<br><span class='serif-accent'>Dependable outcomes.</span>",insightQuote:"Backend performance isn't only about faster queries. It's about choosing the right data access strategy while preserving business rules, authorization boundaries and data consistency.",insightCaption:"ENGINEERING PERSPECTIVE",
      directionIndex:"WHAT'S NEXT",directionEyebrow:"CAREER DIRECTION · NEXT 2–3 YEARS",directionTitle:"Building toward<br><span class='serif-accent'>Solution Architecture.</span>",directionIntro:"A development roadmap, not a claim of a position already held.",
      contactEyebrow:"LET'S CONNECT THROUGH ENGINEERING",contactTitle:"Good systems start<br>with <em>good conversations.</em>",contactText:"Interested in discussing backend systems, complex business problems, or architecture-minded engineering? Start with the work and ideas shared here.",copyIntro:"Copy professional introduction",revisitProjects:"Explore case studies",contactFoot:"SENIOR JAVA BACKEND ENGINEER",
      footerNote:"Built with intention. Grounded in real engineering work.",backToTop:"BACK TO TOP ↑",caseLabel:"ENGINEERING CASE STUDY",caseButton:"Read case study",caseClose:"Close case study",caseOverview:"Business context",caseChallenge:"Engineering challenges",caseApproach:"Technical approach",caseContribution:"My contributions",caseConsideration:"Design considerations",caseLearning:"Engineering insight",caseArchitecture:"Conceptual architecture",caseConceptNote:"Illustrative architecture only; not a representation of internal systems.",caseStack:"TECHNOLOGIES",caseCategory:"DOMAIN",featuredTitle:"FEATURED CASE STUDY",copySuccess:"Professional introduction copied",copyFailure:"Copy unavailable in this browser",tabCore:"Core expertise",tabHands:"Hands-on experience",tabKnowledge:"Working knowledge",tabEcosystem:"Wider ecosystem",tierCore:"CORE",tierHands:"HANDS-ON",tierKnowledge:"WORKING",tierEcosystem:"EXPOSURE"
    },
    vi: {
      navAbout:"Giới thiệu",navExperience:"Kinh nghiệm",navProjects:"Dự án",navSkills:"Chuyên môn",navThinking:"Tư duy",navContact:"Liên hệ",
      heroEyebrow:"HỒ SƠ NĂNG LỰC KỸ THUẬT",heroKicker:"Kỹ sư Java Backend cao cấp",
      heroHeadline:"Xây dựng hệ thống backend đáng tin cậy, nơi <em>nghiệp vụ phức tạp</em> gặp <em>tư duy kỹ thuật chính xác.</em>",
      heroDescription:"Kinh nghiệm thực tế trong Fintech, nền tảng dữ liệu ngân hàng, tích hợp hệ thống doanh nghiệp và tối ưu PostgreSQL. Định hướng phát triển lên Solution Architect.",
      exploreWork:"Khám phá dự án",viewExperience:"Hành trình nghề nghiệp",metricYears:"Hơn 3 năm",metricBackend:"JAVA BACKEND",metricData:"6 tháng",metricDataLabel:"DATA ENGINEERING",metricDomain:"LĨNH VỰC CHUYÊN MÔN",
      visualLabel:"GÓC NHÌN KỸ THUẬT",nodeTop:"LOGIC NGHIỆP VỤ",nodeRight:"TÍCH HỢP",nodeBottom:"TRUY CẬP DỮ LIỆU",nodeLeft:"ĐỘ TIN CẬY",visualBottom:"Từ yêu cầu đến giải pháp đáng tin cậy.",scrollExplore:"CUỘN ĐỂ KHÁM PHÁ",
      journeyLabel:"HÀNH TRÌNH QUA CÁC HỆ THỐNG",journey1:"Giao dịch tài chính",journey2:"Nền tảng dữ liệu",journey3:"Backend doanh nghiệp",journey4:"Tư duy kiến trúc",
      aboutIndex:"HỒ SƠ",aboutEyebrow:"CON NGƯỜI ĐẰNG SAU MÃ NGUỒN",aboutTitle:"Hiểu đúng bối cảnh.<br><span class='serif-accent'>Rồi mới viết code.</span>",
      aboutLead:"Tôi làm backend trong những hệ thống mà quy tắc nghiệp vụ, tính đúng đắn của dữ liệu và hiệu năng luôn phải được xem xét cùng nhau.",
      aboutP1:"Tôi từng tham gia tích hợp giao dịch tài chính, chuyển đổi nền tảng dữ liệu ngân hàng và phát triển dịch vụ backend cho các nghiệp vụ tài chính doanh nghiệp. Chuyên môn tập trung vào Java, Spring Boot, phân tích truy vấn PostgreSQL, truy cập dữ liệu theo phân quyền và hệ thống vận hành theo workflow.",
      aboutP2:"Tôi thích đi sâu hơn lớp API: lần theo execution plan của một truy vấn chậm, kiểm tra ranh giới phân quyền hoặc đánh giá sự cân bằng giữa hiệu năng và tính chính xác. Mục tiêu dài hạn là Solution Architecture—kết nối yêu cầu nghiệp vụ với các quyết định kỹ thuật giữa nhiều hệ thống.",
      focusLabel:"TRỌNG TÂM HIỆN TẠI",experienceIndex:"KINH NGHIỆM",experienceEyebrow:"HÀNH TRÌNH NGHỀ NGHIỆP",experienceTitle:"Trưởng thành từ<br><span class='serif-accent'>những hệ thống thực tế.</span>",experienceIntro:"Ba lĩnh vực kinh nghiệm bổ trợ lẫn nhau và định hình cách tôi tiếp cận Backend Engineering.",
      projectsIndex:"DỰ ÁN NỔI BẬT",projectsEyebrow:"CASE STUDY KỸ THUẬT",projectsTitle:"Đi sâu vào<br><span class='serif-accent'>những bài toán đã làm.</span>",projectsIntro:"Các đóng góp thực tế được trình bày ở mức khái quát để bảo vệ thông tin nghiệp vụ và hệ thống nội bộ.",
      labTitle:"Engineering Lab",labText:"Những hướng tìm hiểu về developer tooling, SQL diagnostics, workflow patterns và software architecture. Phần nghiên cứu được tách biệt với các đóng góp production.",labStatus:"ĐANG TÌM HIỂU",
      expertiseIndex:"CHUYÊN MÔN",expertiseEyebrow:"BỘ CÔNG CỤ KỸ THUẬT",expertiseTitle:"Đào sâu đúng chỗ.<br><span class='serif-accent'>Kết nối đúng tầng.</span>",expertiseIntro:"Phân nhóm công nghệ theo mức độ trải nghiệm, không dùng những thang phần trăm kỹ năng không có cơ sở.",
      mindsetIndex:"TƯ DUY",mindsetEyebrow:"CÁCH TÔI TIẾP CẬN KỸ THUẬT",mindsetTitle:"Quyết định có cơ sở.<br><span class='serif-accent'>Hệ thống đáng tin cậy.</span>",insightQuote:"Tối ưu backend không chỉ là làm truy vấn chạy nhanh hơn. Đó là lựa chọn cách truy cập dữ liệu phù hợp mà vẫn bảo toàn nghiệp vụ, ranh giới phân quyền và tính nhất quán.",insightCaption:"GÓC NHÌN KỸ THUẬT",
      directionIndex:"ĐỊNH HƯỚNG",directionEyebrow:"LỘ TRÌNH NGHỀ NGHIỆP · 2–3 NĂM",directionTitle:"Tiến tới<br><span class='serif-accent'>Solution Architecture.</span>",directionIntro:"Đây là lộ trình phát triển năng lực, không phải chức danh tôi đang đảm nhiệm.",
      contactEyebrow:"KẾT NỐI QUA NHỮNG BÀI TOÁN KỸ THUẬT",contactTitle:"Hệ thống tốt bắt đầu<br>từ <em>cuộc trao đổi tốt.</em>",contactText:"Bạn quan tâm đến backend, những bài toán nghiệp vụ phức tạp hay thiết kế kiến trúc hệ thống? Hãy bắt đầu từ những dự án và góc nhìn được chia sẻ tại đây.",copyIntro:"Sao chép giới thiệu chuyên môn",revisitProjects:"Xem các case study",contactFoot:"KỸ SƯ JAVA BACKEND CAO CẤP",
      footerNote:"Làm bằng sự chỉn chu. Dựa trên trải nghiệm kỹ thuật thực tế.",backToTop:"LÊN ĐẦU TRANG ↑",caseLabel:"CASE STUDY KỸ THUẬT",caseButton:"Đọc case study",caseClose:"Đóng case study",caseOverview:"Bối cảnh nghiệp vụ",caseChallenge:"Thách thức kỹ thuật",caseApproach:"Hướng tiếp cận",caseContribution:"Đóng góp cá nhân",caseConsideration:"Các cân nhắc thiết kế",caseLearning:"Bài học kỹ thuật",caseArchitecture:"Kiến trúc khái niệm",caseConceptNote:"Sơ đồ minh họa khái niệm, không phải kiến trúc nội bộ thực tế.",caseStack:"CÔNG NGHỆ",caseCategory:"LĨNH VỰC",featuredTitle:"CASE STUDY TIÊU BIỂU",copySuccess:"Đã sao chép phần giới thiệu",copyFailure:"Trình duyệt không hỗ trợ sao chép",tabCore:"Chuyên môn cốt lõi",tabHands:"Kinh nghiệm thực tế",tabKnowledge:"Kiến thức làm việc",tabEcosystem:"Hệ sinh thái mở rộng",tierCore:"CỐT LÕI",tierHands:"THỰC TẾ",tierKnowledge:"KIẾN THỨC",tierEcosystem:"TIẾP XÚC"
    }
  },
  experiences: [
    {date:{en:"OCT 2025 — PRESENT",vi:"10/2025 — HIỆN TẠI"},dateDetail:{en:"Since 20 October 2025",vi:"Bắt đầu từ 20/10/2025"},role:{en:"Senior Specialist, Java System Development",vi:"Chuyên viên cao cấp, Phát triển hệ thống Java"},company:"F88",description:{en:"Backend services for financial operations, including contract-centric worklists, role-aware queries, dashboards, workflow integration and PostgreSQL performance analysis.",vi:"Phát triển backend cho nghiệp vụ tài chính, bao gồm danh sách công việc theo hợp đồng, truy vấn theo phân quyền, dashboard, tích hợp workflow và phân tích hiệu năng PostgreSQL."},tags:["Java 21","Spring Boot","PostgreSQL","RBAC","Workflow"]},
    {date:{en:"EARLIER EXPERIENCE",vi:"KINH NGHIỆM TRƯỚC ĐÂY"},dateDetail:{en:"Dates not specified",vi:"Chưa xác nhận mốc thời gian"},role:{en:"Java Backend Developer · International E-Wallet",vi:"Java Backend Developer · Ví điện tử quốc tế"},company:"Viettel-related project",companyVi:"Dự án thuộc hệ sinh thái Viettel",description:{en:"Developed and maintained backend components for digital payment integrations, financial transaction processing and ISO 8583-based messaging.",vi:"Phát triển và bảo trì các thành phần backend cho tích hợp thanh toán số, xử lý giao dịch tài chính và thông điệp ISO 8583."},tags:["Java","Spring Boot","ISO 8583","Oracle","Kafka"]},
    {date:{en:"6-MONTH PROJECT",vi:"DỰ ÁN KHOẢNG 6 THÁNG"},dateDetail:{en:"Dates not specified",vi:"Chưa xác nhận mốc thời gian"},role:{en:"Data Engineer · Data Lake Migration",vi:"Data Engineer · Chuyển đổi Data Lake"},company:"VietinBank-related project",companyVi:"Dự án Data Lake VietinBank",description:{en:"Contributed to migration work across banking data-platform technologies, covering processing pipelines, distributed storage and orchestration components.",vi:"Tham gia chuyển đổi nền tảng dữ liệu ngân hàng, tiếp xúc với data pipeline, hệ thống lưu trữ phân tán và các thành phần điều phối xử lý dữ liệu."},tags:["Hive","Presto","Iceberg","MinIO","Airflow","IBM CP4D"]}
  ],
  projects: [
    {
      number:"01",featured:true,category:{en:"ENTERPRISE BACKEND / FINANCIAL SERVICES",vi:"BACKEND DOANH NGHIỆP / TÀI CHÍNH"},
      title:{en:"Enterprise Debt Collection Management Platform",vi:"Nền tảng quản lý nghiệp vụ thu hồi nợ"},
      summary:{en:"Role-aware contract worklists, workflow-driven operations and PostgreSQL-backed reporting within a complex financial business domain.",vi:"Danh sách công việc theo hợp đồng và phân quyền, quy trình nghiệp vụ theo workflow và báo cáo vận hành trên PostgreSQL trong lĩnh vực tài chính phức tạp."},
      technologies:["Java 21","Spring Boot","PostgreSQL","PL/pgSQL","RBAC","Materialized Views"],
      overview:{en:"A backend platform supports the organization, assignment and tracking of debt collection activities. Different operational roles need distinct scopes of contract and case data, with worklists and dashboards supporting day-to-day decisions.",vi:"Nền tảng backend hỗ trợ tổ chức, phân công và theo dõi nghiệp vụ thu hồi nợ. Các nhóm vai trò có phạm vi dữ liệu hợp đồng và hồ sơ khác nhau; danh sách công việc và dashboard phục vụ quyết định vận hành hằng ngày."},
      challenge:{en:["Data access must reflect roles, organizational scope, assignment and business state without leaking records across authorization boundaries.","Contract-oriented searches combine filters, pagination, sorting, priority rules and time-sensitive business conditions.","Current operational views and historical indicators have different freshness and computation requirements."],vi:["Truy cập dữ liệu cần đúng vai trò, phạm vi tổ chức, phân công và trạng thái nghiệp vụ; không để vượt ranh giới phân quyền.","Các truy vấn theo hợp đồng kết hợp bộ lọc, phân trang, sắp xếp, phân loại ưu tiên và điều kiện nghiệp vụ phụ thuộc thời gian.","Dữ liệu vận hành hiện tại và chỉ số lịch sử có yêu cầu khác nhau về độ mới và phương pháp tính toán."]},
      approach:{en:["Contribute to backend API and SQL-function paths for contract-centric worklists, searches and dashboards.","Investigate PostgreSQL execution plans and assess join strategies, indexing, precomputed summaries and read-model trade-offs.","Examine how role-based scope affects query paths, and verify that optimization does not alter the underlying business result."],vi:["Tham gia các API backend và SQL function phục vụ worklist, tìm kiếm và dashboard theo hợp đồng.","Phân tích execution plan PostgreSQL và đánh giá join, indexing, dữ liệu tổng hợp tính trước và chiến lược read model.","Xem xét ảnh hưởng của phạm vi RBAC đến đường thực thi truy vấn và bảo đảm tối ưu không làm thay đổi kết quả nghiệp vụ."]},
      contribution:{en:["Backend API development and adjustments for web/mobile workflows.","SQL function investigation, query-plan analysis and performance-oriented refactoring.","Work with materialized views, current/historical reporting concepts and role-aware data retrieval.","Troubleshooting of data access, workflow and authorization behavior; supporting test and performance assessment."],vi:["Phát triển và điều chỉnh API backend cho các luồng Web/Mobile.","Phân tích SQL function, execution plan và cải tiến truy vấn hướng đến hiệu năng.","Làm việc với Materialized View, mô hình báo cáo hiện tại/lịch sử và truy vấn theo phân quyền.","Phân tích các vấn đề về dữ liệu, workflow, authorization; hỗ trợ kiểm thử và đánh giá phương án tối ưu."]},
      consideration:{en:["A faster query is not a correct query if it changes scope or omits business conditions.","Materialized read models can improve heavy reads, but data freshness and refresh behavior must be considered.","Optimizations should be validated per role and request shape rather than assumed to help every execution path."],vi:["Truy vấn nhanh hơn chưa chắc đúng nếu làm sai phạm vi dữ liệu hoặc bỏ qua điều kiện nghiệp vụ.","Read model tính sẵn có thể giảm tải truy vấn nhưng phải cân nhắc độ mới và cách cập nhật dữ liệu.","Cần kiểm chứng tối ưu theo từng nhóm vai trò và dạng yêu cầu, không suy rộng cho mọi đường thực thi."]},
      learning:{en:"Backend performance is a system-level decision: data model, authorization scope, business correctness and refresh strategy matter as much as SQL execution time.",vi:"Hiệu năng backend là quyết định ở cấp hệ thống: mô hình dữ liệu, phân quyền, tính đúng đắn nghiệp vụ và chiến lược cập nhật quan trọng không kém thời gian thực thi SQL."},
      architecture:true
    },
    {
      number:"02",category:{en:"ENTERPRISE APPLICATIONS",vi:"ỨNG DỤNG DOANH NGHIỆP"},
      title:{en:"Enterprise Assessment & Configuration Services",vi:"Dịch vụ quản lý danh mục và cấu hình đánh giá"},
      summary:{en:"Configuration-oriented backend capabilities for assessment cases, information categories, verification and outcome definitions.",vi:"Các thành phần backend thiên về cấu hình phục vụ hồ sơ đánh giá, nhóm thông tin, xác minh và định nghĩa kết quả."},
      technologies:["REST API","Domain Modeling","Data Consistency","Configuration"],
      overview:{en:"Enterprise assessment workflows use shared business definitions: case types and statuses, subject and source categories, evidence, verification methods, and evaluation outcomes.",vi:"Các quy trình đánh giá nghiệp vụ cần hệ thống danh mục dùng chung: loại và trạng thái hồ sơ, nhóm chủ thể và nguồn dữ liệu, bằng chứng, phương thức xác minh và kết quả đánh giá."},
      challenge:{en:["Different business functions need a consistent vocabulary of statuses, types and result mappings.","Configuration data can evolve without sacrificing coherence across APIs and business processes."],vi:["Các nhóm nghiệp vụ cần dùng thống nhất loại, trạng thái và ánh xạ kết quả.","Danh mục cấu hình cần có khả năng thay đổi mà vẫn giữ tính nhất quán giữa API và quy trình nghiệp vụ."]},
      approach:{en:["Work on backend responsibilities for centralized configuration and reference data.","Consider clear domain definitions, validation boundaries and consistent API representations."],vi:["Tham gia phát triển các phần backend phục vụ danh mục và dữ liệu cấu hình tập trung.","Xem xét ranh giới domain, kiểm tra dữ liệu và cách biểu diễn nhất quán qua API."]},
      contribution:{en:["Backend development in the scope of assessment/configuration management.","Work relating to case statuses, subject/source definitions, information categories, verification and assessment result catalogs."],vi:["Phát triển backend trong phạm vi quản lý danh mục và cấu hình đánh giá.","Làm việc với nhóm trạng thái hồ sơ, chủ thể/nguồn, danh mục thông tin, xác minh và kết quả đánh giá."]},
      consideration:{en:["Shared configuration must make business meaning explicit.","Domain boundaries and data consistency are critical when reference data serves multiple flows."],vi:["Danh mục dùng chung cần thể hiện rõ ý nghĩa nghiệp vụ.","Ranh giới domain và tính nhất quán đặc biệt quan trọng khi dữ liệu tham chiếu phục vụ nhiều luồng."]},
      learning:{en:"Well-structured reference data is part of system design, not simply a supporting CRUD feature.",vi:"Danh mục được tổ chức tốt là một phần của thiết kế hệ thống, không chỉ là các màn hình CRUD hỗ trợ."}
    },
    {
      number:"03",category:{en:"FINTECH / DIGITAL PAYMENTS",vi:"FINTECH / THANH TOÁN SỐ"},
      title:{en:"International E-Wallet Backend",vi:"Backend ví điện tử quốc tế"},
      summary:{en:"Java backend contributions to digital payment services, ISO 8583 messaging and integrations in a transaction-oriented domain.",vi:"Tham gia phát triển Java backend cho dịch vụ thanh toán số, thông điệp ISO 8583 và tích hợp trong miền nghiệp vụ giao dịch."},
      technologies:["Java","Spring Boot","ISO 8583","Oracle","Redis","Kafka"],
      overview:{en:"A Viettel-related digital wallet initiative required backend services that handle financial transaction information and communicate with components in a payment ecosystem.",vi:"Dự án ví điện tử thuộc hệ sinh thái Viettel cần các dịch vụ backend xử lý thông tin giao dịch tài chính và tích hợp với các thành phần trong hệ sinh thái thanh toán."},
      challenge:{en:["Financial transaction data places high demands on consistency and reliable integration.","Messaging, service boundaries and failure handling need careful attention during development and troubleshooting."],vi:["Dữ liệu giao dịch tài chính đòi hỏi tính nhất quán và tích hợp đáng tin cậy.","Thông điệp, ranh giới dịch vụ và xử lý lỗi cần được chú trọng khi phát triển và phân tích sự cố."]},
      approach:{en:["Develop and maintain Java/Spring Boot backend logic for payment-oriented services.","Work with ISO 8583 messaging and connected data or service components."],vi:["Phát triển, bảo trì logic Java/Spring Boot cho các dịch vụ liên quan thanh toán.","Làm việc với thông điệp ISO 8583 và tích hợp các thành phần dữ liệu, dịch vụ."]},
      contribution:{en:["Backend services and API integrations in a financial transaction context.","Business logic implementation and operational issue investigation."],vi:["Phát triển backend services và tích hợp API trong bối cảnh giao dịch tài chính.","Xây dựng logic nghiệp vụ và phân tích vấn đề trong vận hành."]},
      consideration:{en:["The correctness of financial messages and transaction state is a core concern.","Operational traceability and error analysis are essential to dependable integrations."],vi:["Tính chính xác của thông điệp tài chính và trạng thái giao dịch là yêu cầu cốt lõi.","Khả năng truy vết và phân tích lỗi rất quan trọng để tích hợp ổn định."]},
      learning:{en:"Payments engineering reinforces the importance of consistency, careful integration contracts and operational reliability.",vi:"Kinh nghiệm thanh toán củng cố tư duy về tính nhất quán, hợp đồng tích hợp rõ ràng và độ tin cậy vận hành."}
    },
    {
      number:"04",category:{en:"BANKING / DATA ENGINEERING",vi:"NGÂN HÀNG / DATA ENGINEERING"},
      title:{en:"Banking Data Lake Modernization",vi:"Chuyển đổi nền tảng Data Lake ngân hàng"},
      summary:{en:"A six-month data engineering engagement involving distributed storage, query engines, orchestration and enterprise migration workflows.",vi:"Giai đoạn khoảng sáu tháng làm Data Engineering với lưu trữ phân tán, query engine, điều phối pipeline và luồng chuyển đổi dữ liệu."},
      technologies:["HDFS / Hive","Presto","Iceberg","MinIO","Airflow","IBM DataStage"],
      overview:{en:"A VietinBank Data Lake migration initiative involved modernizing a banking data ecosystem and working across legacy and new platform components, including IBM Cloud Pak for Data.",vi:"Dự án chuyển đổi Data Lake VietinBank liên quan đến hiện đại hóa hệ sinh thái dữ liệu ngân hàng, làm việc giữa các thành phần nền tảng cũ và mới, có IBM Cloud Pak for Data."},
      challenge:{en:["Distributed storage and processing involve different assumptions from transactional application backends.","Migration work requires understanding data movement, processing dependencies and orchestration."],vi:["Lưu trữ và xử lý phân tán có những đặc điểm khác với backend ứng dụng giao dịch.","Quá trình chuyển đổi đòi hỏi hiểu luồng dữ liệu, quan hệ phụ thuộc trong xử lý và điều phối."]},
      approach:{en:["Participate in data platform migration and pipeline integration work.","Work within an ecosystem including HDFS, Hive, Presto, Iceberg, MinIO, Airflow and IBM data technologies."],vi:["Tham gia các công việc chuyển đổi nền tảng dữ liệu và tích hợp pipeline.","Làm việc trong hệ sinh thái HDFS, Hive, Presto, Iceberg, MinIO, Airflow và công nghệ dữ liệu IBM."]},
      contribution:{en:["Data processing and migration-related engineering tasks within the broader project.","Exposure to query/storage layers and orchestration components across an enterprise data platform."],vi:["Thực hiện các công việc kỹ thuật liên quan đến xử lý và chuyển đổi dữ liệu trong phạm vi dự án.","Tiếp xúc các tầng truy vấn, lưu trữ và thành phần điều phối của nền tảng dữ liệu doanh nghiệp."]},
      consideration:{en:["Data pipelines have distinct dependencies and observability needs.","A solution spanning transactional and analytical systems benefits from understanding both domains."],vi:["Pipeline dữ liệu có các mối phụ thuộc và nhu cầu giám sát riêng.","Giải pháp kết nối hệ thống giao dịch và phân tích hưởng lợi từ hiểu biết ở cả hai miền."]},
      learning:{en:"Seeing both operational backends and analytics platforms creates a broader perspective on how information flows through an enterprise.",vi:"Trải nghiệm cả backend vận hành và nền tảng phân tích giúp nhìn rộng hơn về cách thông tin luân chuyển trong doanh nghiệp."}
    },
    {
      number:"05",category:{en:"PERSONAL TOOL / DEVELOPER PRODUCTIVITY",vi:"CÔNG CỤ CÁ NHÂN / NĂNG SUẤT KỸ THUẬT"},
      title:{en:"PostgreSQL Database Toolkit",vi:"Bộ công cụ PostgreSQL bằng Java"},
      summary:{en:"A Java command-line tool for repeatable PostgreSQL object backup and SQL-script operations with configuration-driven execution.",vi:"Công cụ Java CLI hỗ trợ backup đối tượng PostgreSQL và thực thi SQL script có cấu hình, phục vụ các thao tác lặp lại."},
      technologies:["Java","Maven","JDBC","PostgreSQL","CLI"],
      overview:{en:"Database development involves repeatable tasks such as choosing objects to back up, executing SQL scripts and managing environment-specific connection settings.",vi:"Phát triển database thường có những công việc lặp lại như chọn đối tượng cần backup, thực thi SQL script và quản lý kết nối theo môi trường."},
      challenge:{en:["Manual database operations can become repetitive and inconsistent.","An internal-use CLI needs explicit input configuration, predictable operation boundaries and understandable errors."],vi:["Các thao tác database thủ công dễ lặp lại và thiếu thống nhất.","Một công cụ CLI cần cấu hình đầu vào rõ ràng, giới hạn thao tác dễ kiểm soát và thông báo lỗi dễ hiểu."]},
      approach:{en:["Build a Java/Maven command-line application using JDBC and configuration files.","Use a register file to select database objects for backup and commands for SQL-related operations."],vi:["Xây dựng ứng dụng Java/Maven dạng dòng lệnh với JDBC và file cấu hình.","Sử dụng register file để chọn đối tượng backup và các command phục vụ thao tác với SQL."]},
      contribution:{en:["Designed and implemented the personal utility and its command-oriented workflow.","Worked on configuration parsing, object selection, database connectivity and CLI troubleshooting."],vi:["Tự xây dựng tiện ích và luồng thao tác theo command.","Làm việc với phân tích cấu hình, chọn đối tượng, kết nối database và xử lý lỗi CLI."]},
      consideration:{en:["Operational tooling should make its target and configuration obvious before execution.","Error reporting and repeatability matter as much as the happy path."],vi:["Công cụ thao tác dữ liệu cần thể hiện rõ đích và cấu hình trước khi chạy.","Thông báo lỗi và khả năng chạy lặp lại quan trọng không kém luồng thành công."]},
      learning:{en:"A small developer utility can encode useful engineering discipline without becoming a large platform. No broad organizational rollout is claimed.",vi:"Một công cụ nhỏ có thể chuẩn hóa thói quen kỹ thuật mà không cần trở thành nền tảng lớn. Không mặc định công cụ đã được triển khai rộng rãi."}
    }
  ],
  skillTabs:[
    {id:"core",label:"tabCore",tier:"tierCore",groups:[
      {title:{en:"Backend engineering",vi:"Phát triển Backend"},items:["Java 8 / 11 / 21","Spring Boot","REST API","Service Integration","Backend Business Logic"]},
      {title:{en:"Database engineering",vi:"Kỹ thuật Database"},items:["PostgreSQL","SQL / PL/pgSQL","Query Optimization","EXPLAIN / ANALYZE","Indexing","Materialized Views"]},
      {title:{en:"Enterprise patterns",vi:"Mô hình ứng dụng doanh nghiệp"},items:["RBAC / Permission Scope","Workflow Integration","Search & Filtering","Data Consistency"]},
      {title:{en:"Engineering practice",vi:"Thực hành kỹ thuật"},items:["Root Cause Analysis","Production Troubleshooting","Performance Investigation","Technical Documentation"]}
    ]},
    {id:"hands",label:"tabHands",tier:"tierHands",groups:[
      {title:{en:"Backend frameworks & jobs",vi:"Framework và tác vụ backend"},items:["Hibernate / JPA","Spring Batch","Quartz","Maven","Microservices"]},
      {title:{en:"Payments & integration",vi:"Thanh toán và tích hợp"},items:["Oracle Database","Kafka","Redis","ISO 8583","Financial Service Integration"]},
      {title:{en:"Database delivery",vi:"Quản trị và triển khai Database"},items:["Liquibase","Pagination Strategies","Read Models","SQL Diagnostics","JDBC"]},
      {title:{en:"Delivery & observability",vi:"Triển khai và giám sát"},items:["Git","Jenkins","Grafana","Prometheus","JMeter"]}
    ]},
    {id:"knowledge",label:"tabKnowledge",tier:"tierKnowledge",groups:[
      {title:{en:"Data platforms",vi:"Nền tảng dữ liệu"},items:["HDFS","Apache Hive","Presto","Apache Iceberg","MinIO"]},
      {title:{en:"Data orchestration",vi:"Điều phối dữ liệu"},items:["Apache Airflow","IBM DataStage","IBM Cloud Pak for Data"]},
      {title:{en:"Architecture concepts",vi:"Khái niệm kiến trúc"},items:["CQRS-oriented patterns","API Architecture","Business Process Modeling","System Design"]}
    ]},
    {id:"ecosystem",label:"tabEcosystem",tier:"tierEcosystem",groups:[
      {title:{en:"Areas of continued study",vi:"Hướng tiếp tục nghiên cứu"},items:["Distributed Systems","Event-driven Architecture","Resilience Patterns","High Availability","Security Architecture","Cloud Architecture"]},
      {title:{en:"Architecture disciplines",vi:"Thực hành kiến trúc cần phát triển"},items:["Architecture Decision Records","Non-functional Requirements","Architecture Trade-offs","Scalability","Cost & Maintainability"]}
    ]}
  ],
  principles:[
    {en:{title:"Understand the business first",text:"In financial systems, a technically elegant result is not useful if it changes the meaning of a contract, state or calculation. Clarify the rule before the implementation."},vi:{title:"Hiểu nghiệp vụ trước tiên",text:"Với hệ thống tài chính, giải pháp kỹ thuật chỉ có ý nghĩa khi đúng hợp đồng, trạng thái và cách tính. Cần làm rõ quy tắc trước khi triển khai."}},
    {en:{title:"Measure before optimizing",text:"Start with execution plans, query behavior and evidence. Build a hypothesis, test the change and validate results for the relevant workload."},vi:{title:"Đo đạc trước khi tối ưu",text:"Bắt đầu từ execution plan, hành vi truy vấn và bằng chứng. Đặt giả thuyết, kiểm chứng thay đổi rồi đánh giá theo đúng dạng tải."}},
    {en:{title:"Protect correctness and access",text:"Performance work must retain the same business result, authorization boundaries and appropriate data freshness."},vi:{title:"Bảo toàn kết quả và phân quyền",text:"Tối ưu hiệu năng phải giữ nguyên kết quả nghiệp vụ, ranh giới truy cập và mức độ cập nhật dữ liệu phù hợp."}},
    {en:{title:"Think across components",text:"An API depends on business services, workflow, storage, security and integrations. Good decisions account for how these parts affect one another."},vi:{title:"Nhìn vượt qua từng API",text:"Một API phụ thuộc vào service, workflow, lưu trữ, bảo mật và tích hợp. Quyết định tốt cần xét ảnh hưởng qua các thành phần."}},
    {en:{title:"Make systems maintainable",text:"Prefer explicit rules, clear component responsibilities, understandable abstractions and technical documentation over hidden complexity."},vi:{title:"Thiết kế để dễ bảo trì",text:"Ưu tiên quy tắc rõ ràng, trách nhiệm thành phần mạch lạc, abstraction dễ hiểu và tài liệu kỹ thuật thay cho sự phức tạp bị che giấu."}},
    {en:{title:"Keep broadening the lens",text:"Learn from incidents and adjacent disciplines. Grow beyond implementation detail toward reasoning about the overall solution."},vi:{title:"Tiếp tục mở rộng góc nhìn",text:"Học từ sự cố và các lĩnh vực liên quan; tiến từ chi tiết triển khai sang khả năng suy xét giải pháp tổng thể."}}
  ],
  roadmap:[
    {phase:"01 / FOUNDATION",phaseVi:"01 / NỀN TẢNG",active:true,title:{en:"Deep Backend Expertise",vi:"Chuyên sâu Backend"},text:{en:"The base built through real engineering work and continued refinement.",vi:"Nền tảng hình thành từ công việc thực tế và tiếp tục được đào sâu."},items:{en:["Java backend & integration","Financial systems","Database performance","Authorization & workflow","Production troubleshooting"],vi:["Java backend và tích hợp","Hệ thống tài chính","Hiệu năng database","Phân quyền và workflow","Xử lý sự cố vận hành"]}},
    {phase:"02 / DEVELOPING",phaseVi:"02 / ĐANG PHÁT TRIỂN",title:{en:"System Design & Architecture",vi:"Thiết kế hệ thống và kiến trúc"},text:{en:"Strengthening architectural thinking across boundaries and non-functional requirements.",vi:"Phát triển tư duy kiến trúc đa thành phần và các yêu cầu phi chức năng."},items:{en:["Distributed systems & event-driven design","Scalability, resilience & security","Cloud architecture","Architecture decision records","Non-functional requirements"],vi:["Hệ thống phân tán và event-driven","Mở rộng, ổn định và bảo mật","Kiến trúc cloud","Tài liệu quyết định kiến trúc","Yêu cầu phi chức năng"]}},
    {phase:"03 / ASPIRATION",phaseVi:"03 / MỤC TIÊU",title:{en:"Solution Architecture",vi:"Kiến trúc giải pháp"},text:{en:"A future role focused on connecting business intent to technology decisions.",vi:"Vai trò mục tiêu kết nối nhu cầu nghiệp vụ với những quyết định công nghệ."},items:{en:["Translate requirements into designs","Evaluate technology trade-offs","Define integration strategies","Balance reliability, cost and maintainability","Communicate with stakeholders"],vi:["Chuyển yêu cầu thành thiết kế","Đánh giá đánh đổi công nghệ","Xây dựng chiến lược tích hợp","Cân bằng độ tin cậy, chi phí và bảo trì","Trao đổi với các bên liên quan"]}}
  ]
};

/* CV-first editorial revision: factual, concise presentation copy and verified scope. */
Object.assign(window.PORTFOLIO.ui.vi, {
  heroEyebrow:"HỒ SƠ NĂNG LỰC · CẬP NHẬT 11/2026",
  heroKicker:"Senior Specialist – Java System Development · F88",
  heroHeadline:"Java Backend · PostgreSQL · Tích hợp hệ thống doanh nghiệp",
  heroDescription:"Hiện làm tại F88 từ 20/10/2025. Hơn 3 năm phát triển Java Backend, từng tham gia hệ thống thanh toán số và khoảng 6 tháng làm Data Engineering cho dự án chuyển đổi dữ liệu ngân hàng.",
  heroDirection:"Định hướng: Solution Architect (chưa phải chức danh hiện tại)",
  heroLocation:"Hà Nội, Việt Nam",
  viewExperience:"Xem kinh nghiệm",
  exploreWork:"Xem các dự án đã tham gia",
  metricYears:"Hơn 3 năm",metricBackend:"Kinh nghiệm Java Backend",
  metricData:"~6 tháng",metricDataLabel:"Dự án Data Engineering",
  factCurrent:"Ngày bắt đầu tại F88",factProjects:"Case study kỹ thuật",
  factsKicker:"TÓM TẮT BẰNG SỐ LIỆU",factsTitle:"Thông tin nghề nghiệp đã xác nhận",
  factsStack:"CÔNG NGHỆ ĐÃ TỪNG SỬ DỤNG",
  evidenceLabel:"NHỮNG NHÓM VIỆC TỪNG THỰC HIỆN",
  evidence1:"API danh sách hợp đồng có phân quyền",
  evidence2:"Phân tích và tối ưu truy vấn PostgreSQL",
  evidence3:"Tích hợp giao dịch thanh toán",
  evidence4:"Chuyển đổi Data Lake ngân hàng",
  aboutEyebrow:"TÓM TẮT CHUYÊN MÔN",
  aboutTitle:"Tôi làm gì và<br><span class='serif-accent'>có thế mạnh ở đâu?</span>",
  aboutLead:"Tôi là kỹ sư Java Backend làm việc chủ yếu với hệ thống tài chính, tích hợp dịch vụ và truy vấn dữ liệu nghiệp vụ.",
  aboutP1:"Tại F88, tôi tham gia backend cho các luồng tìm kiếm, phân trang và dashboard theo hợp đồng; truy cập dữ liệu theo vai trò; tích hợp workflow và xử lý nghiệp vụ. Phần công việc chuyên sâu gồm SQL function, PL/pgSQL, EXPLAIN ANALYZE, index và Materialized View.",
  aboutP2:"Trước đó tôi tham gia backend ví điện tử thuộc hệ sinh thái Viettel, có làm việc với thông điệp ISO 8583 và các thành phần tích hợp thanh toán. Tôi cũng có khoảng 6 tháng tham gia chuyển đổi Data Lake VietinBank. Mục tiêu tiếp theo là bổ sung năng lực thiết kế hệ thống để tiến tới Solution Architecture.",
  experienceEyebrow:"LỊCH SỬ CÔNG VIỆC",
  experienceTitle:"Kinh nghiệm làm việc",
  experienceIntro:"Ghi rõ phạm vi công việc và công nghệ từng sử dụng. Những mốc thời gian chưa có xác nhận không được tự thêm.",
  projectsEyebrow:"DỰ ÁN & ĐÓNG GÓP",
  projectsTitle:"Dự án đã tham gia",
  projectsIntro:"Mỗi dự án cho biết bài toán, công nghệ, phần việc tôi đã thực hiện và các cân nhắc thiết kế. Không sử dụng KPI nội bộ chưa được phép công khai.",
  featuredTitle:"DỰ ÁN NỔI BẬT",
  caseButton:"Xem phần việc chi tiết",
  expertiseEyebrow:"CÔNG NGHỆ & KỸ NĂNG",
  expertiseTitle:"Tech stack đã làm việc",
  expertiseIntro:"Phân biệt kỹ năng cốt lõi, công nghệ đã trực tiếp sử dụng và kiến thức đang tìm hiểu.",
  mindsetEyebrow:"PHƯƠNG PHÁP LÀM VIỆC",
  mindsetTitle:"Cách tôi xử lý bài toán kỹ thuật",
  directionTitle:"Mục tiêu nghề nghiệp: Solution Architect",
  directionIntro:"Lộ trình phát triển trong 2–3 năm tới, chưa phải chức danh đã đảm nhiệm.",
  contactEyebrow:"THÔNG TIN HỒ SƠ",
  contactTitle:"Cần xem nhanh<br><em>năng lực chuyên môn?</em>",
  contactText:"Bạn có thể sao chép phần giới thiệu ngắn gọn hoặc đọc chi tiết từng dự án. Kênh liên hệ cá nhân sẽ được bổ sung khi có xác nhận công khai.",
  footerNote:"Hồ sơ được trình bày dựa trên kinh nghiệm đã xác nhận.",
  insightQuote:"Trước khi tối ưu truy vấn, tôi kiểm tra execution plan, phạm vi quyền và logic nghiệp vụ. Một truy vấn nhanh hơn nhưng trả sai dữ liệu không phải là tối ưu.",
  insightCaption:"PHƯƠNG PHÁP KIỂM CHỨNG"
});
Object.assign(window.PORTFOLIO.ui.en, {
  heroEyebrow:"PROFESSIONAL CV · UPDATED NOV 2026",
  heroKicker:"Senior Specialist – Java System Development · F88",
  heroHeadline:"Java Backend · PostgreSQL · Enterprise Integration",
  heroDescription:"Working at F88 since 20 October 2025. More than three years in Java backend development, experience with digital payment systems and approximately six months on a banking data migration project.",
  heroDirection:"Career direction: Solution Architect (not a current title)",
  heroLocation:"Hanoi, Vietnam",
  viewExperience:"View experience", exploreWork:"See engineering work",
  metricYears:"3+ years",metricBackend:"Java Backend experience",
  metricData:"~6 months",metricDataLabel:"Data Engineering engagement",
  factCurrent:"Joined F88",factProjects:"Documented case studies",
  factsKicker:"CAREER SNAPSHOT",factsTitle:"Confirmed professional facts",
  factsStack:"TECHNOLOGIES USED",
  evidenceLabel:"EXAMPLES OF WORK PERFORMED",
  evidence1:"Contract APIs with role-aware access",
  evidence2:"PostgreSQL query analysis and tuning",
  evidence3:"Financial payment integration",
  evidence4:"Banking Data Lake migration",
  aboutEyebrow:"PROFESSIONAL SUMMARY",
  aboutTitle:"What I do<br><span class='serif-accent'>and where I focus</span>",
  aboutLead:"I am a Java backend engineer with practical experience in financial applications, service integration and business data queries.",
  aboutP1:"At F88, I contribute to backend work for contract-based search, pagination and dashboards, role-aware access, workflow integration and business processing. My deeper technical work involves SQL functions, PL/pgSQL, execution plans, indexes and materialized views.",
  aboutP2:"Previously, I worked on a Viettel-related digital wallet backend, including ISO 8583 messaging and payment integration components. I also contributed to a roughly six-month VietinBank Data Lake migration. I am now building system-design skills toward a future Solution Architecture role.",
  experienceEyebrow:"WORK HISTORY",
  experienceTitle:"Professional experience",
  experienceIntro:"Concrete responsibilities and technologies, with unconfirmed dates left unspecified.",
  projectsEyebrow:"PROJECTS & CONTRIBUTIONS",
  projectsTitle:"Selected engineering work",
  projectsIntro:"Each case explains its problem, technologies, my contributions and engineering trade-offs. No unapproved internal performance figures are displayed.",
  featuredTitle:"FEATURED PROJECT",caseButton:"View detailed contributions",
  expertiseEyebrow:"TECHNOLOGIES & SKILLS",expertiseTitle:"Technical stack in practice",
  expertiseIntro:"Core strengths are separated from hands-on technologies and areas of continued study.",
  mindsetEyebrow:"WORKING METHODS",mindsetTitle:"How I solve engineering problems",
  directionTitle:"Career goal: Solution Architect",
  directionIntro:"A two-to-three-year learning path, not a title currently held.",
  contactEyebrow:"PROFESSIONAL PROFILE",contactTitle:"Need a quick summary<br>of <em>my experience?</em>",
  contactText:"Copy the short professional introduction or explore a detailed case study. Personal contact details can be added after approval.",
  footerNote:"A professional record based on confirmed work.",
  insightQuote:"Before tuning a query, I check its execution plan, permission scope and business rules. A faster query that returns the wrong data is not an optimization.",
  insightCaption:"EVIDENCE-BASED APPROACH"
});

window.PORTFOLIO.experiences[0].details = {
  vi:[
    "Tham gia phát triển API Web/Mobile cho danh sách hồ sơ và hợp đồng: tìm kiếm, lọc, sắp xếp, phân trang và tổng hợp dashboard.",
    "Làm việc với PostgreSQL SQL function/PL/pgSQL, EXPLAIN ANALYZE, chỉ mục và Materialized View để phân tích đường thực thi truy vấn.",
    "Áp dụng truy cập dữ liệu theo vai trò, phạm vi phân công và trạng thái nghiệp vụ; kiểm tra ảnh hưởng của phân quyền khi tối ưu.",
    "Tích hợp workflow, phân tích lỗi dữ liệu và kết nối, hỗ trợ kiểm thử các phương án tối ưu."
  ],
  en:[
    "Contributed to web/mobile APIs for case and contract worklists: search, filtering, sorting, pagination and dashboard aggregation.",
    "Worked with PostgreSQL SQL functions/PL/pgSQL, EXPLAIN ANALYZE, indexes and materialized views to investigate query execution.",
    "Applied role-aware scope, assignments and business states to data retrieval while validating authorization during optimization.",
    "Integrated workflow logic, investigated data and connection issues, and supported performance testing."
  ]
};
window.PORTFOLIO.experiences[1].details = {
  vi:[
    "Phát triển và bảo trì backend Java/Spring Boot cho các luồng xử lý thông tin giao dịch tài chính.",
    "Tham gia tích hợp dịch vụ thanh toán và xử lý thông điệp ISO 8583.",
    "Có kinh nghiệm làm việc với Oracle, Redis, Kafka và phân tích lỗi luồng tích hợp."
  ],
  en:[
    "Developed and maintained Java/Spring Boot services handling financial transaction information.",
    "Contributed to payment service integration and ISO 8583 message handling.",
    "Worked with Oracle, Redis and Kafka in the project environment and investigated integration issues."
  ]
};
window.PORTFOLIO.experiences[2].details = {
  vi:[
    "Tham gia dự án chuyển đổi hệ sinh thái Data Lake của ngân hàng trong khoảng 6 tháng.",
    "Làm việc trong hệ sinh thái HDFS, Hive, Presto, Iceberg, MinIO, Airflow, IBM DataStage và IBM Cloud Pak for Data.",
    "Tham gia công việc liên quan đến xử lý dữ liệu, pipeline, SQL và phối hợp giữa các thành phần nền tảng."
  ],
  en:[
    "Contributed to a banking Data Lake migration engagement lasting approximately six months.",
    "Worked within an environment involving HDFS, Hive, Presto, Iceberg, MinIO, Airflow, IBM DataStage and IBM Cloud Pak for Data.",
    "Participated in data processing, SQL/pipeline and data-platform integration tasks."
  ]
};

/* Case-study proof records.
   The dashboard benchmark is one observation backed by a preserved tool
   output, not a repeated controlled study, p95/p99, or system-wide claim. */
window.PORTFOLIO.projects[0].evidence = {
  type:"timing",
  beforeSeconds:5.157,
  afterSeconds:4.601,
  label:{
    vi:"Kết quả một lần đo truy vấn PostgreSQL",
    en:"One recorded PostgreSQL query measurement"
  },
  description:{
    vi:"Số đo được ghi nhận trong quá trình phân tích và tối ưu một đường truy vấn nghiệp vụ. Mốc trước và sau dùng cùng đơn vị giây; mức giảm được tính trực tiếp từ hai giá trị.",
    en:"A recorded before/after observation from an investigation into a business query path. Both values are in seconds, with the change calculated from the recorded timings."
  },
  limitations:{
    vi:"Phạm vi bằng chứng: 1 phép đo. Chưa có log benchmark gốc, số vòng lặp, cấu hình môi trường, tải đồng thời và phân vị p95/p99 để xác nhận. Không suy rộng thành hiệu năng toàn hệ thống hoặc SLA production.",
    en:"Evidence scope: a single observation. Original benchmark logs, repeated runs, environment settings, concurrency and p95/p99 statistics are not available here. This is not a system-wide performance or production SLA claim."
  }
};
window.PORTFOLIO.projects[1].evidence = {
  type:"technical",
  value:"04",
  label:{vi:"Nhóm danh mục nghiệp vụ được đề cập",en:"Reference-data domains in scope"},
  description:{vi:"Assessment Case; Subject & Source; Information & Verification; Assessment Outcomes. Đây là số nhóm phạm vi nghiệp vụ, không phải KPI hay số API đã triển khai.",en:"Assessment Case; Subject & Source; Information & Verification; Assessment Outcomes. This is a count of business domains described, not a count of delivered APIs."}
};
window.PORTFOLIO.projects[2].evidence = {
  type:"technical",
  value:"ISO 8583",
  label:{vi:"Chuẩn thông điệp từng làm việc",en:"Messaging standard in scope"},
  description:{vi:"Bằng chứng về loại giao thức tích hợp thuộc miền giao dịch tài chính; không khẳng định TPS, số lượng giao dịch hoặc SLA chưa có số đo.",en:"Specific integration protocol experience in the financial transaction domain. No unsupported TPS, transaction-volume or SLA claims."}
};
window.PORTFOLIO.projects[3].evidence = {
  type:"technical",
  value:"~6 tháng",
  valueEn:"~6 months",
  label:{vi:"Thời lượng tham gia dự án",en:"Project engagement duration"},
  description:{vi:"Khoảng thời gian đã được xác nhận trong hồ sơ; không suy diễn ngày bắt đầu/kết thúc hoặc vai trò thiết kế toàn bộ kiến trúc.",en:"Duration confirmed in the professional history; exact start/end dates and architecture-wide ownership are not claimed."}
};
window.PORTFOLIO.projects[4].evidence = {
  type:"technical",
  value:"v1.0.0",
  label:{vi:"Phiên bản công cụ Java CLI",en:"Java CLI toolkit version"},
  description:{vi:"Công cụ cá nhân có luồng chọn đối tượng theo register file, backup và thực thi SQL script. Không khẳng định đã triển khai rộng trong doanh nghiệp.",en:"Personal utility with registry-based object selection, backup and SQL-script operations. No organization-wide deployment is claimed."}
};

Object.assign(window.PORTFOLIO.ui.vi, {
  projectsIntro:"Case study tập trung vào bài toán, phần việc cá nhân, dữ liệu kiểm chứng và giới hạn của từng kết quả. Số đo chỉ được trình bày đúng phạm vi đã ghi nhận.",
  evidenceHeading:"Bằng chứng kỹ thuật",
  benchmarkTitle:"Số đo trước / sau",
  benchmarkBefore:"Trước tối ưu",
  benchmarkAfter:"Sau tối ưu",
  benchmarkDelta:"Giảm thời gian",
  benchmarkPercent:"Mức giảm tương đối",
  benchmarkScope:"Bối cảnh phép đo",
  benchmarkLimit:"Giới hạn của bằng chứng",
  benchmarkBadge:"01 LẦN ĐO ĐƯỢC GHI NHẬN",
  benchmarkUnit:"giây",
  benchmarkNote:"Không đại diện cho toàn bộ hệ thống",
  featuredEvidence:"KẾT QUẢ ĐO CÓ GIỚI HẠN",
  technicalEvidence:"DỮ LIỆU CÓ THỂ ĐỐI CHIẾU",
  caseContributionHeading:"Phần việc trực tiếp",
  technicalResult:"Dữ liệu kỹ thuật đã xác nhận"
});
Object.assign(window.PORTFOLIO.ui.en, {
  projectsIntro:"Each case focuses on the problem, personal contribution, evidence and the limits of the observed results. Measurements are scoped to what was actually recorded.",
  evidenceHeading:"Engineering evidence",
  benchmarkTitle:"Before / after measurement",
  benchmarkBefore:"Before",
  benchmarkAfter:"After",
  benchmarkDelta:"Time reduction",
  benchmarkPercent:"Relative decrease",
  benchmarkScope:"Measurement context",
  benchmarkLimit:"Evidence limitations",
  benchmarkBadge:"ONE RECORDED OBSERVATION",
  benchmarkUnit:"seconds",
  benchmarkNote:"Not a system-wide result",
  featuredEvidence:"SCOPED PERFORMANCE MEASUREMENT",
  technicalEvidence:"VERIFIABLE TECHNICAL DETAIL",
  caseContributionHeading:"Direct contributions",
  technicalResult:"Confirmed technical facts"
});

/* Evidence audit 16 November 2026: owner-private review material.
   IDs are local audit references, never paths to company repositories.
   These are individual captured SQL measurements, NOT API or production SLAs. */
window.PORTFOLIO.measurementStudies = [
  {
    number:"01 / SQL PLANS",sourceIds:"E076 · E077 · E078",
    title:{vi:"Tìm kiếm hợp đồng theo khu vực & bán kính",en:"Geographic and radius contract search"},
    description:{vi:"Truy vấn đếm hợp đồng bị kéo dài do planner đánh giá sai số dòng, khiến phép lọc địa lý và phép tính khoảng cách được thực hiện lặp lại.",en:"Contract counting became expensive when row cardinality was underestimated and geographic membership or distance calculations repeated across nested loops."},
    measurementMode:{vi:"01 plan trước/sau cho từng trường hợp",en:"One saved before/after plan per case"},
    metrics:[
      {title:{vi:"SQL đếm theo bán kính",en:"Radius-count SQL"},before:29698.691,after:3207.923,displayUnit:"s"},
      {title:{vi:"SQL lọc theo khu vực",en:"Geographic area-count SQL"},before:19847.135,after:678.747,displayUnit:"s"},
      {title:{vi:"SQL bán kính với read model",en:"Read-model radius-count SQL"},before:10287.017,after:3464.671,displayUnit:"s"}
    ],
    solution:{vi:"Dùng các CTE MATERIALIZED để tính khoảng cách trước khi áp dụng bán kính và tái sử dụng tập khách hàng đã resolve; đặt optimization fence trong bước parse tọa độ để giảm tính lại biểu thức. Việc lựa chọn fence dựa trên execution plan của từng query.",en:"Materialized distance calculation before the radius filter, reused resolved customer sets, and placed a targeted optimization fence around coordinate parsing to reduce repeated expression evaluation. Each choice was guided by its query plan."},
    verification:{vi:"Đối chiếu các cặp execution plan, số vòng lặp thực tế và thay đổi SQL trong Git. Kiểm tra nghiệp vụ của nhóm tối ưu mobile có 378 so sánh local và 84 phép đối chiếu dữ liệu tham chiếu được ghi nhận.",en:"Compared captured PostgreSQL execution plans, actual loop counts and associated SQL changes in Git. The broader mobile optimization task also recorded 378 local comparisons and 84 reference-data parity checks."},
    limitations:{vi:"Mỗi cặp là một quan sát; dữ liệu/tải đồng thời có thể khác nhau. Chưa khóa toàn bộ mã nguồn và snapshot cho từng biến thể; chưa có phép đo API hoặc xác nhận production đang chạy đúng bản này.",en:"Single observations per variant, with possible differences in cache and concurrent load. Exact full-source and dataset snapshots were not locked for each measurement; neither API latency nor the currently deployed production state was verified."}
  },
  {
    number:"02 / MOBILE",sourceIds:"E070 · E071 · E072 · E073",
    title:{vi:"Tra cứu & phân trang hợp đồng trên mobile",en:"Mobile contract search and pagination"},
    description:{vi:"Phần đếm kết quả và truy vấn trang gặp chi phí join, resolve khách hàng và tổng hợp dữ liệu theo hợp đồng.",en:"Result counting and page retrieval were affected by repeated joins, customer resolution and contract-level aggregation."},
    measurementMode:{vi:"01 plan trước/sau mỗi luồng",en:"One before/after plan per query path"},
    metrics:[
      {title:{vi:"Truy vấn trang — luồng quản lý A",en:"Page query — manager flow A"},before:8478.423,after:3265.879,displayUnit:"s"},
      {title:{vi:"Truy vấn đếm — luồng quản lý A",en:"Count query — manager flow A"},before:1774.107,after:150.753,displayUnit:"s"},
      {title:{vi:"Truy vấn đếm — luồng quản lý B",en:"Count query — manager flow B"},before:493.107,after:85.459,displayUnit:"ms"},
      {title:{vi:"Truy vấn trang — luồng quản lý B",en:"Page query — manager flow B"},before:2527.687,after:855.583,displayUnit:"s"}
    ],
    solution:{vi:"Gom dữ liệu theo contract grain bằng UNION ALL, điều chỉnh ranh giới MATERIALIZED và giảm lookup/join lặp trước bước phân trang, đồng thời giữ nguyên tập dữ liệu và thứ tự.",en:"Consolidated contract-grain facts with UNION ALL, adjusted MATERIALIZED stage boundaries, and reduced repeated lookups before pagination while preserving result membership and order."},
    verification:{vi:"Có 378 so sánh local đạt, 20 kiểm tra ngưỡng đạt, 84 phép so sánh dữ liệu tham chiếu khớp và 6 kiểm tra migration được lưu trong audit của task.",en:"The task's saved checks include 378 passing local comparisons, 20 threshold checks, 84 matching reference comparisons and 6 migration checks."},
    limitations:{vi:"Số đo là PostgreSQL expanded SQL Execution Time, không gồm network, authentication hay thời gian dựng HTTP response. Mỗi trường hợp chỉ có một plan đã lưu; after query chưa khớp exact full function ở commit cuối.",en:"Timings are PostgreSQL expanded-SQL execution time, excluding network, authentication and HTTP response processing. Each path has one saved plan; exact full-function candidate matching to the final commit remains unverified."}
  },
  {
    number:"03 / READ MODELS",sourceIds:"E019 · E049 · E051",
    title:{vi:"Read model và truy vấn worklist cho manager",en:"Manager worklist queries and read models"},
    description:{vi:"Đơn giản hóa projection/JSON, hạn chế decode và aggregate dư thừa, tối ưu cách truy xuất dữ liệu hợp đồng.",en:"Reduced redundant JSON projections, decoding and aggregation in contract-oriented read paths."},
    measurementMode:{vi:"Median 3 lượt warm run cho SQL mẫu",en:"Median of 3 warm SQL runs"},
    metrics:[
      {title:{vi:"SQL tìm kiếm theo hợp đồng — mẫu local",en:"Contract search SQL — local fixture"},before:39.437,after:26.009,displayUnit:"ms"},
      {title:{vi:"Dung lượng heap read model — mẫu local",en:"Read-model heap size — local"},before:48.5,after:39,displayUnit:"MiB"},
      {title:{vi:"Thời gian refresh read model — mẫu local",en:"Read-model refresh wall time — local"},before:5030.59,after:4515.01,displayUnit:"s"}
    ],
    solution:{vi:"Giảm các trường JSON không cần thiết, chuẩn hóa dữ kiện hợp đồng và điều chỉnh thứ tự pagination/enrichment. Đối chiếu riêng từng profile và dạng filter.",en:"Trimmed unnecessary JSON fields, normalized contract facts and adjusted pagination/enrichment order. Compared profiles and filter shapes separately."},
    verification:{vi:"48 cặp truy vấn local được đo theo median 3 run; 96/96 median trước/sau khớp file raw. Bộ test liên quan ghi nhận 1.922 parity assertions, 38 boundary, 348 security/scale và 106 pagination/action assertions.",en:"48 paired local SQL cases used three-run medians; all 96 recomputed before/after medians matched raw samples. Related artifacts record 1,922 parity, 38 boundary, 348 security/scale and 106 pagination/action assertions."},
    limitations:{vi:"Local PostgreSQL 18.4 với fixture 46.174 hợp đồng/role; số đo inner SQL không gồm tầng Java/HTTP. Phần candidate của một số query khác với commit gộp cuối; không gán số đo cho mã production đã triển khai.",en:"Local PostgreSQL 18.4 with a 46,174-contract-per-role fixture; inner SQL only, excluding Java and HTTP. Some measured candidate sources differ from the final grouped commit, so the timings cannot be attributed to deployed production code."}
  },
  {
    number:"04 / DASHBOARD",sourceIds:"E057",
    title:{vi:"Tối ưu tổng hợp dashboard theo hợp đồng",en:"Contract-grain dashboard aggregation"},
    description:{vi:"Hai bước window/sort xử lý tập dữ liệu lớn khi tổng hợp dư nợ và chọn hồ sơ đại diện.",en:"Two window/sort passes over a large relation were used for financial aggregation and representative-case selection."},
    measurementMode:{vi:"01 phép đo lịch sử có output gốc",en:"One historical measurement with raw output"},
    metrics:[
      {title:{vi:"Thời gian chạy đường truy vấn dashboard tháng",en:"Monthly dashboard query-path execution"},before:5157,after:4601,displayUnit:"s"}
    ],
    solution:{vi:"Chuyển tổng hợp về contract grain và dùng một window ranking để chọn hồ sơ chính, giảm số lần sort/window. Đối chiếu 6 trường kết quả giữa hai phiên bản.",en:"Aggregated at contract grain and used a single ranking window to select the primary case, reducing repeated sorting/window processing. Six output fields matched between variants."},
    verification:{vi:"Kết quả gốc đã lưu ghi nhận old=5.157 ms, new=4.601 ms và 0 sai khác ở 6 trường; REPEATABLE READ, đặt work_mem 192 MB, phiên bản cũ chạy trước mới.",en:"Original saved tool output recorded old=5,157 ms, new=4,601 ms and zero differences across six fields; REPEATABLE READ, 192 MB work_mem, old variant executed first."},
    limitations:{vi:"Một lần quan sát, không đủ kết luận tính ổn định thống kê. Không khóa được RBAC scope, số dòng và input thời điểm; chưa có bằng chứng mã đã triển khai lên production. Kết quả chỉ cho một nhánh tính dashboard.",en:"Single observation without statistical repeatability. Exact RBAC scope, row counts and resolved date input were not locked; production deployment was not established. This covers one dashboard query path, not an entire endpoint."}
  }
];

Object.assign(window.PORTFOLIO.ui.vi, {
  measurementPrivate:"BẢNG ĐO LỊCH SỬ · CÓ NGUỒN ĐỐI CHIẾU",
  measurementTitle:"Kết quả đo kỹ thuật đã truy vết",
  measurementIntro:"Số liệu trích từ output và plan đã lưu trong lịch sử làm việc. Mỗi trường hợp thể hiện đúng phạm vi đo, không được hiểu là thời gian phản hồi API hay SLA production.",
  measurementJump:"Đọc bối cảnh dự án",
  measurementReduction:"Mức giảm",
  measurementPrimaryReduction:"giảm thời gian",
  measurementDetails:"Xem điều kiện đo, giải pháp và giới hạn",
  measurementOther:"CÁC TRƯỜNG HỢP LIÊN QUAN",
  measurementScenario:"Phép đo",
  measurementSolution:"GIẢI PHÁP KỸ THUẬT",
  measurementVerification:"BẰNG CHỨNG KIỂM CHỨNG",
  measurementGlobalLimit:"Lưu ý: các cặp đo khác môi trường, phạm vi và thời điểm; không cộng thành một chỉ số tổng. Cần kiểm tra quyền công bố số liệu kỹ thuật trước khi chia sẻ hồ sơ rộng rãi.",
  projectsIntro:"Các đóng góp có thể truy vết từ Git, execution plan và kết quả kiểm thử. Bảng benchmark là kết quả riêng lẻ có điều kiện đo cụ thể; dự án và số liệu không đại diện cho toàn hệ thống."
});
Object.assign(window.PORTFOLIO.ui.en, {
  measurementPrivate:"HISTORICAL MEASUREMENTS · SOURCE-TRACED",
  measurementTitle:"Measured engineering results",
  measurementIntro:"Figures originate from preserved outputs and execution plans in the local working history. Each result retains its testing scope; none represents API latency or a production SLA.",
  measurementJump:"Project context",
  measurementReduction:"Reduction",
  measurementPrimaryReduction:"time reduction",
  measurementDetails:"Measurement context, approach and limitations",
  measurementOther:"RELATED OBSERVATIONS",
  measurementScenario:"Measurement",
  measurementSolution:"TECHNICAL APPROACH",
  measurementVerification:"VALIDATION EVIDENCE",
  measurementGlobalLimit:"Note: measurements differ in environment, query scope and time and cannot be combined into a system-wide result. Verify permission to disclose technical measurements before sharing this portfolio broadly.",
  projectsIntro:"Contributions are traced to Git history, execution plans and validation results. Benchmarks are individual scoped observations and must not be generalized to overall system performance."
});

/* Update the initial dashboard measurement with the discovered source and
   limitations. Prior copy incorrectly said its raw tool output was unavailable. */
window.PORTFOLIO.projects[0].evidence.description = {
  vi:"E057 · Kết quả gốc ngày 16/08/2026 từ một đường tổng hợp dashboard tháng. REPEATABLE READ; tối ưu từ hai window/sort sang aggregate theo hợp đồng và một ranking window. Sáu trường kết quả đối chiếu khớp.",
  en:"E057 · Saved raw observation from 16 Aug 2026 for one monthly dashboard aggregation path. REPEATABLE READ; optimized two window/sort stages to contract-grain aggregation and one ranking window. Six output fields matched."
};
window.PORTFOLIO.projects[0].evidence.limitations = {
  vi:"01 lần đo; mã cũ chạy trước mã mới. Chưa cố định chính xác input thời điểm, số dòng/RBAC scope; không có repeat stats hoặc xác nhận triển khai production. Đây không phải thời gian phản hồi API hay KPI toàn hệ thống.",
  en:"One observation, old measured before new. Resolved date inputs, row counts and RBAC scope were not locked; no repeat statistics or production deployment proof. This is not API latency or system-wide performance."
};
window.PORTFOLIO.projects[0].approach = {
  vi:[
    "Tối ưu một nhánh tổng hợp dashboard theo contract grain, giảm từ hai bước window/sort xuống một ranking window; kiểm tra 6 trường dữ liệu tương đương.",
    "Phân tích PostgreSQL EXPLAIN để xác định Nested Loop, số lần thực thi predicate và tác động của cardinality tới truy vấn địa lý.",
    "Dùng MATERIALIZED CTE có chọn lọc để tránh resolve dữ liệu khách hàng, parse tọa độ và tính khoảng cách lặp lại.",
    "Đối chiếu truy vấn manager và mobile theo vai trò, sorting, pagination và quyền truy cập sau khi tối ưu."
  ],
  en:[
    "Optimized a monthly dashboard path around contract grain, reducing two window/sort stages to one ranking window while matching six data fields.",
    "Used PostgreSQL EXPLAIN to investigate nested loops, predicate execution counts and cardinality estimates in geographic search.",
    "Applied targeted MATERIALIZED CTEs to avoid repeated customer resolution, coordinate parsing and distance calculations.",
    "Validated manager and mobile query behavior for role scope, sorting, pagination and authorization after refactoring."
  ]
};
window.PORTFOLIO.projects[0].contribution = {
  vi:[
    "Đặt yêu cầu tối ưu, kiểm chứng tính đúng đắn và tham gia triển khai các thay đổi SQL/Java trong lịch sử Git; quá trình thực hiện có hỗ trợ Codex.",
    "Đối chiếu execution plan và kết quả đo trước/sau cho các nhánh mobile, tìm kiếm địa lý, worklist và dashboard.",
    "Điều chỉnh truy vấn theo hợp đồng và phạm vi phân quyền; kiểm tra dữ liệu sau thay đổi bằng các bộ parity, boundary và pagination.",
    "Làm việc với PostgreSQL read model, refresh, Materialized View và các ràng buộc về độ mới dữ liệu."
  ],
  en:[
    "Defined optimization and correctness requirements and contributed SQL/Java changes captured in Git; implementation work was AI-assisted.",
    "Reviewed execution plans and before/after measurements for mobile, geographic search, worklist and dashboard paths.",
    "Adjusted contract-grain and authorization-aware queries and used parity, boundary and pagination checks after changes.",
    "Worked with PostgreSQL read models, refresh behavior, materialized views and data-freshness constraints."
  ]
};

/* Independent F88 financial-transaction contribution, distinct from the
   earlier Viettel-linked e-wallet history, as verified by authored Git diffs. */
const transactionProject = {
  number:"03",
  category:{vi:"JAVA BACKEND / GIAO DỊCH TÀI CHÍNH",en:"JAVA BACKEND / FINANCIAL TRANSACTIONS"},
  title:{vi:"Backend giao dịch tài chính & tích hợp thanh toán",en:"Financial transaction backend & payment integration"},
  summary:{vi:"Phát triển transactional outbox có cơ chế khôi phục thông điệp và ký yêu cầu tích hợp thanh toán bằng HMAC/RSA-SHA256.",en:"Transactional outbox with stalled-message recovery, alongside HMAC and RSA-SHA256 request signing for payment integration."},
  technologies:["Java","Spring Boot","Transaction Outbox","HMAC","RSA-SHA256"],
  overview:{vi:"Backend giao dịch cần bảo toàn ranh giới commit khi chuyển thông điệp cho các thành phần liên quan và bảo vệ tính toàn vẹn của request tích hợp.",en:"Financial transaction backends must respect commit boundaries when dispatching messages and preserve integrity in partner integration requests."},
  challenge:{vi:["Tránh phát thông điệp trước khi giao dịch dữ liệu được xác nhận.","Có chiến lược xử lý lại thông điệp bị tồn đọng và quản lý lỗi tích hợp.","Áp dụng chữ ký yêu cầu phù hợp với hợp đồng kết nối."],en:["Prevent message dispatch before the related data transaction is committed.","Handle stalled-message recovery and integration failures.","Apply request signatures according to integration contracts."]},
  approach:{vi:["Triển khai transactional outbox và phát sự kiện sau commit, kèm luồng xử lý thông điệp tồn đọng.","Bổ sung thành phần ký request sử dụng HMAC và RSA-SHA256.","Giữ rõ ranh giới transaction và hợp đồng dữ liệu giữa các thành phần."],en:["Implemented transactional outbox logic with after-commit dispatch and stalled-message recovery.","Added request-signing components using HMAC and RSA-SHA256.","Kept transaction boundaries and service contracts explicit."]},
  contribution:{vi:["Các thay đổi Java về outbox và request signature được truy vết qua hai commit có author alias phù hợp với hồ sơ làm việc.","Phạm vi chứng cứ là mã nguồn và diff; không khẳng định thiết kế độc quyền, hiệu năng production hoặc exactly-once delivery."],en:["Java changes for outbox and request signing are traceable to two Git diffs with a matching local author alias.","Evidence supports implementation changes, not exclusive architecture ownership, production throughput or exactly-once delivery."]},
  consideration:{vi:["After-commit dispatch chưa tự động đảm bảo exactly-once delivery.","Cơ chế retry/recovery cần kiểm thử thêm dưới lỗi và tải đồng thời.","An toàn chữ ký phụ thuộc vào quản lý khóa và quy tắc xác thực của hệ thống tích hợp."],en:["After-commit dispatch does not itself guarantee exactly-once delivery.","Retry and recovery need failure and concurrency testing.","Signature safety also depends on key management and verification contracts."]},
  learning:{vi:"Thiết kế giao dịch không chỉ dừng ở việc ghi dữ liệu thành công; cần hiểu thời điểm phát thông điệp, cơ chế phục hồi và bảo vệ hợp đồng tích hợp.",en:"Transaction design involves more than successful persistence: dispatch timing, recovery behavior and secure integration contracts are essential."},
  evidence:{type:"technical",value:"02",label:{vi:"Nhóm thay đổi Java có diff truy vết",en:"Java contribution areas with traceable diffs"},description:{vi:"E058: transactional outbox. E062: request signing. Đây là số nhóm kỹ thuật được xác minh từ source, không phải KPI giao dịch.",en:"E058: transactional outbox. E062: request signing. This is a count of source-backed technical areas, not a transaction KPI."}}
};
window.PORTFOLIO.projects[2].number = "04";
window.PORTFOLIO.projects[3].number = "05";
window.PORTFOLIO.projects[4].number = "06";
window.PORTFOLIO.projects.splice(2, 0, transactionProject);

/* 17 Nov 2026: the portfolio owner clarified the final outcome achieved
   across the query paths he optimized. This is a DIRECT USER STATEMENT,
   separate from the audited intermediate paired measurements above.
   The timeout threshold, repeat count and matching final plans remain unknown. */
window.PORTFOLIO.projects[0].evidence = {
  type:"reportedOutcome",
  description:{
    vi:"Theo kết quả kiểm thử do chính tôi ghi nhận, các đường truy vấn từng timeout đã được tối ưu: case thông thường còn dưới 1 giây, case đặc biệt phức tạp dưới 2 giây. Đây là kết quả sau các vòng tối ưu, khác với những snapshot SQL cũ được trích trong nhật ký đo bên dưới.",
    en:"In the tests I recorded, query paths that previously timed out were optimized to under 1 second in typical cases and under 2 seconds in complex exceptions. This represents my reported outcome after multiple optimization iterations, distinct from older SQL measurement snapshots below."
  },
  limitations:{
    vi:"Đây là kết quả người thực hiện trực tiếp xác nhận, chưa được độc lập đối chiếu bằng một bộ benchmark cuối đầy đủ với cùng timeout threshold, input, môi trường và số lần chạy. Không mặc định là SLA API, p95/p99 hay cam kết áp dụng cho mọi truy vấn production.",
    en:"Directly confirmed by the engineer, but not independently cross-checked against a complete final benchmark with a common timeout threshold, inputs, environment and repeat counts. It is not an API SLA, p95/p99 or a guarantee for every production query."
  }
};
window.PORTFOLIO.projects[0].summary = {
  vi:"Backend quản lý hợp đồng theo vai trò, với các nhánh truy vấn từng timeout được cải tiến để case thường còn dưới 1 giây và case phức tạp dưới 2 giây theo kiểm thử của tôi.",
  en:"Role-aware contract operations with formerly timing-out query paths optimized to under 1 second for typical scenarios and under 2 seconds for complex cases, based on my recorded testing."
};
window.PORTFOLIO.experiences[0].details.vi.unshift(
  "Tối ưu các nhánh truy vấn nghiệp vụ từng timeout; theo kết quả kiểm thử tôi ghi nhận, case thông thường xuống dưới 1 giây, case đặc biệt phức tạp dưới 2 giây."
);
window.PORTFOLIO.experiences[0].details.en.unshift(
  "Optimized business query paths that had timed out; in my recorded tests, typical cases completed in under 1 second and complex exceptions in under 2 seconds."
);

Object.assign(window.PORTFOLIO.ui.vi, {
  outcomeKicker:"KẾT QUẢ TỐI ƯU · DO NGƯỜI THỰC HIỆN XÁC NHẬN",
  outcomeHeroText:"Truy vấn từng TIMEOUT → dưới 1 giây (case thông thường) · dưới 2 giây (case đặc biệt)",
  outcomeTitle:"Từ timeout xuống dưới 1 giây ở các case thông thường",
  outcomeIntro:"Tôi tối ưu các đường truy vấn nghiệp vụ từng timeout qua nhiều vòng phân tích execution plan, điều chỉnh SQL/read model và kiểm chứng kết quả. Những case phức tạp hơn vẫn được kiểm soát dưới 2 giây theo kết quả tôi ghi nhận.",
  outcomeBefore:"TRƯỚC KHI TỐI ƯU",
  outcomeBeforeCaption:"Các nhánh truy vấn từng vượt giới hạn thời gian",
  outcomeTypical:"SAU · CASE THÔNG THƯỜNG",
  outcomeTypicalCaption:"Kết quả tôi ghi nhận sau tối ưu",
  outcomeExceptional:"SAU · CASE ĐẶC BIỆT",
  outcomeExceptionalCaption:"Các kịch bản phức tạp hơn",
  outcomeEvidenceBadge:"NGƯỜI THỰC HIỆN XÁC NHẬN",
  outcomeEvidenceNote:"Nguồn: Mạnh xác nhận trực tiếp kết quả tổng thể. Chưa có bộ log benchmark cuối đồng nhất để kiểm chứng độc lập. Các cặp đo trong bảng phía dưới là snapshot ở những thời điểm và vòng tối ưu khác nhau, không phải giới hạn hiệu năng cuối cùng.",
  measurementTitle:"Các mốc đo đã lưu trong quá trình tối ưu",
  measurementIntro:"Những cặp trước/sau dưới đây được truy vết từ execution plan và output lịch sử. Chúng ghi lại từng bước của quá trình tối ưu, không được hiểu là thời gian cuối cùng sau tất cả thay đổi.",
  measurementGlobalLimit:"Các phép đo có môi trường và điều kiện khác nhau; không gộp thành một KPI tổng. Mốc 3,208 giây hay 3,266 giây trong từng snapshot không phủ định kết quả cuối dưới 1 giây / dưới 2 giây mà người thực hiện xác nhận. Cần rà soát quyền công bố dữ liệu kỹ thuật khi chia sẻ website.",
  projectsIntro:"Tôi đã xử lý các đường truy vấn từng timeout, với kết quả kiểm thử ghi nhận dưới 1 giây ở case thông thường và dưới 2 giây ở case đặc biệt. Bên dưới phân biệt rõ kết quả tôi xác nhận với bằng chứng đo ở các vòng tối ưu."
});
Object.assign(window.PORTFOLIO.ui.en, {
  outcomeKicker:"OPTIMIZATION OUTCOME · ENGINEER-CONFIRMED",
  outcomeHeroText:"Previously TIMED-OUT queries → under 1 second (typical) · under 2 seconds (complex)",
  outcomeTitle:"From timeouts to sub-second typical queries",
  outcomeIntro:"I worked through multiple optimization iterations on business query paths that had previously timed out, examining execution plans, restructuring SQL/read models and checking correctness. More complex cases also ran below two seconds in my recorded tests.",
  outcomeBefore:"BEFORE OPTIMIZATION",
  outcomeBeforeCaption:"Query paths previously exceeding their timeout",
  outcomeTypical:"AFTER · TYPICAL CASES",
  outcomeTypicalCaption:"My recorded post-optimization result",
  outcomeExceptional:"AFTER · COMPLEX CASES",
  outcomeExceptionalCaption:"More demanding scenarios",
  outcomeEvidenceBadge:"ENGINEER-CONFIRMED",
  outcomeEvidenceNote:"Source: direct confirmation from the engineer. A complete, consistent final benchmark log is not yet available for independent verification. The pairs below are intermediate historical snapshots from different optimization iterations, not final performance ceilings.",
  measurementTitle:"Preserved measurements along the optimization path",
  measurementIntro:"The following before/after observations can be traced to saved execution plans and historical outputs. They represent intermediate steps during optimization, not the final timings after all iterations.",
  measurementGlobalLimit:"These observations differ by environment and workload and cannot be aggregated into one KPI. The historical 3.208-second or 3.266-second snapshot does not represent the engineer-confirmed eventual under-1-second / under-2-second outcome. Verify disclosure permission before sharing the Site.",
  projectsIntro:"I optimized business query paths that had timed out, recording under-one-second typical cases and under-two-second complex cases in my tests. This section distinguishes the engineer-confirmed outcome from measured observations at intermediate stages."
});

/* 17 Nov 2026: workflow, decisions and caching experience clarified by the
   portfolio owner. Evidence in prior technical exchanges supports Camunda 7
   DMN evaluation/deployment and Spring Boot integration. Neither a separate
   Drools production rollout nor cache performance metrics are claimed. */
window.PORTFOLIO.projects.push({
  number:"07",
  category:{vi:"WORKFLOW / TỰ ĐỘNG HÓA QUYẾT ĐỊNH",en:"WORKFLOW / DECISION AUTOMATION"},
  title:{vi:"Camunda, BPMN & công cụ ra quyết định nghiệp vụ",en:"Camunda, BPMN & business decision automation"},
  summary:{
    vi:"Tích hợp Camunda vào backend tài chính: workflow BPMN, bảng quyết định DMN, đánh giá rule qua API và cấu hình nghiệp vụ; có kinh nghiệm với Redis/cache.",
    en:"Camunda integration in financial backends: BPMN workflows, DMN decision tables, API-driven rule evaluation and configurable business logic, alongside Redis/caching experience."
  },
  technologies:["Camunda 7","BPMN 2.0","DMN / Decision Tables","Rule Engine","Spring Boot","Redis Cache"],
  overview:{
    vi:"Trong hệ thống tài chính, một số luồng cần điều phối các bước xử lý, trong khi điều kiện lựa chọn sản phẩm hoặc cấu hình thay đổi theo bảng quy tắc. Backend cần tích hợp các kết quả quyết định với dữ liệu và API nghiệp vụ.",
    en:"Financial applications need both process orchestration and configurable decision logic. Backend services consume rule evaluation results and apply them consistently to domain data and APIs."
  },
  challenge:{
    vi:["Biểu diễn luồng xử lý và điều kiện quyết định tách khỏi logic API bị viết cứng.","Đưa đúng biến đầu vào cho DMN và ánh xạ kết quả có kiểu dữ liệu phù hợp khi rule trả một hoặc nhiều hàng.","Quản lý vòng đời triển khai decision, phiên bản và cấu hình mà không làm sai logic nghiệp vụ."],
    en:["Separate process flows and decision rules from hard-coded API branches.","Pass correctly typed DMN inputs and map decision outputs, including multiple matching rows.","Handle decision deployment, versioning and configuration without changing business semantics."]
  },
  approach:{
    vi:["Làm việc với mô hình BPMN và tích hợp workflow vào service Java/Spring Boot; sử dụng Camunda 7 cho các luồng đánh giá DMN.","Gọi Camunda Decision REST API qua lớp client/Feign, truyền typed variables và chuyển kết quả decision table sang DTO/domain response.","Thực hành deploy/kiểm tra DMN, xử lý những vấn đề về namespace, input expression và cấu hình lưu lịch sử của decision.","Áp dụng tư duy rule engine cho quy tắc có cấu hình; làm việc với Redis/cache trong hệ sinh thái backend và cân nhắc tính nhất quán dữ liệu."],
    en:["Worked with BPMN process modeling and Java/Spring Boot workflow integration, using Camunda 7 for DMN decisions.","Called the Camunda Decision REST API through client/Feign integration, submitted typed variables and mapped decision-table results to domain DTOs.","Practiced DMN deployment and validation, including namespace, input-expression and decision-history configuration issues.","Applied configurable rule-evaluation patterns and worked with Redis/caching in backend services, considering data consistency."]
  },
  contribution:{
    vi:["Tích hợp evaluate DMN Camunda 7 từ backend Java/Spring Boot; xử lý dữ liệu input/output và các trường hợp kết quả không hợp lệ hoặc nhiều kết quả.","Làm việc với decision table phục vụ lựa chọn sản phẩm/cấu hình và logic lọc nghiệp vụ; tham gia kiểm tra lỗi triển khai DMN.","Có kinh nghiệm liên quan BPMN, workflow, Redis/cache và rule engine theo phạm vi công việc đã xác nhận; không gán chỉ số cache hit hoặc latency không có log."],
    en:["Integrated Camunda 7 DMN evaluation from Java/Spring Boot services, handling typed inputs/outputs and empty, invalid or multiple results.","Worked with decision tables for product/configuration choices and business filtering, including troubleshooting DMN deployments.","Brought BPMN, workflow, Redis/caching and rule-engine experience to the backend scope without inventing cache-hit or latency metrics."]
  },
  consideration:{
    vi:["Cần phân biệt BPMN điều phối tiến trình với DMN đánh giá điều kiện; không đồng nhất chúng với một rule engine độc lập như Drools.","Cache phải xét TTL, cơ chế làm mới và nguồn dữ liệu gốc để không trả quyết định lỗi thời.","Chưa có bằng chứng xác nhận triển khai Drools production, Camunda 8 production hay benchmark về rule/cache."],
    en:["BPMN process orchestration and DMN decision evaluation serve different purposes; they should not be conflated with a separate rules engine such as Drools.","Caching decisions should account for TTL, refresh and source-of-truth consistency.","No verified production Drools or Camunda 8 rollout, or rule/cache performance benchmark, is claimed."]
  },
  learning:{
    vi:"Đưa quy trình và bảng quyết định ra khỏi các nhánh điều kiện viết cứng giúp tách trách nhiệm rõ hơn, nhưng API vẫn phải kiểm tra input/output, kiểm soát phiên bản và bảo toàn logic nghiệp vụ.",
    en:"Externalizing processes and decisions clarifies responsibilities, while APIs still need robust input/output handling, version discipline and business-rule correctness."
  },
  evidence:{
    type:"technical",
    value:"Camunda 7",
    label:{vi:"Tích hợp DMN có ví dụ kỹ thuật đối chiếu",en:"DMN integration with traceable technical examples"},
    description:{
      vi:"Nhật ký trao đổi kỹ thuật ghi nhận gọi REST evaluate decision, client Feign, DTO typed-value và xử lý lỗi deploy DMN. Chưa có số đo thông lượng hoặc độ trễ liên quan.",
      en:"Technical history records REST decision evaluation, Feign integration, typed-value DTOs and troubleshooting DMN deployment. No decision-throughput or latency benchmark is claimed."
    }
  }
});

window.PORTFOLIO.experiences[0].description = {
  vi:"Phát triển backend tài chính: worklist hợp đồng, phân quyền, dashboard, tối ưu PostgreSQL; tích hợp Camunda/BPMN, DMN decision table, workflow và các thành phần cache.",
  en:"Financial backend development covering contract worklists, authorization, dashboards and PostgreSQL tuning, alongside Camunda/BPMN, DMN decision tables, workflow and caching integration."
};
window.PORTFOLIO.experiences[0].tags.push("Camunda", "BPMN", "DMN", "Rule Engine", "Redis");
window.PORTFOLIO.experiences[0].details.vi.push(
  "Tích hợp Camunda 7/DMN decision table với Spring Boot qua REST/Feign; ánh xạ typed variables và kết quả rule, xử lý lỗi cấu hình/triển khai decision.",
  "Có kinh nghiệm làm việc với mô hình BPMN, workflow, rule engine và Redis/cache; quan tâm đến tính đúng đắn khi thực thi quy tắc nghiệp vụ."
);
window.PORTFOLIO.experiences[0].details.en.push(
  "Integrated Camunda 7 DMN decision tables with Spring Boot via REST/Feign, mapping typed variables and rule outputs and troubleshooting decision deployment/configuration.",
  "Worked with BPMN, workflow patterns, rule engines and Redis/caching, with attention to business-rule correctness."
);

window.PORTFOLIO.skillTabs[0].groups[2].items = [
  "RBAC / Permission Scope","BPMN / Workflow Orchestration","DMN Decision Tables",
  "Rule Evaluation / Rule Engine","Caching & Data Consistency","Search & Filtering"
];
window.PORTFOLIO.skillTabs[1].groups.push({
  title:{vi:"Workflow & tự động hóa quyết định",en:"Workflow & decision automation"},
  items:["Camunda 7","BPMN 2.0","DMN","Decision Tables","Camunda REST Evaluation","Spring Boot / Feign","Rule Engine Integration"]
});
window.PORTFOLIO.skillTabs[1].groups.push({
  title:{vi:"Cache & dữ liệu truy cập nhanh",en:"Caching & fast data access"},
  items:["Redis","Application Cache","Cache / TTL","Cache Consistency","Database-backed Configuration"]
});
window.PORTFOLIO.skillTabs[2].groups.push({
  title:{vi:"Nền tảng rule engine đang mở rộng",en:"Additional rule-engine ecosystem"},
  items:["Camunda 8 / Zeebe (explored)","Drools (studied)","DMN Hit Policies","Rule Versioning"]
});

Object.assign(window.PORTFOLIO.ui.vi, {
  heroHeadline:"Java Backend · PostgreSQL · Camunda / Workflow · Tích hợp hệ thống",
  factsStack:"CÔNG NGHỆ ĐÃ TỪNG SỬ DỤNG",
  aboutLead:"Tôi là kỹ sư Java Backend có kinh nghiệm với hệ thống tài chính, tối ưu dữ liệu, tích hợp workflow và tự động hóa quyết định nghiệp vụ.",
  aboutP1:"Tại F88, tôi làm backend cho worklist hợp đồng, phân quyền, dashboard và PostgreSQL. Tôi cũng làm việc với Camunda, BPMN, DMN/decision table, rule engine, Redis/cache và tích hợp dịch vụ Spring Boot; có kinh nghiệm đánh giá quyết định qua API và xử lý kết quả rule.",
  expertiseIntro:"Nhóm kỹ năng theo kinh nghiệm thực tế: Java/PostgreSQL, Camunda–BPMN–DMN, rule engine, Redis/cache, thanh toán và dữ liệu; phần Camunda 8/Drools được ghi riêng ở mức tìm hiểu khi chưa có chứng cứ triển khai production."
});
Object.assign(window.PORTFOLIO.ui.en, {
  heroHeadline:"Java Backend · PostgreSQL · Camunda / Workflow · Integration",
  aboutLead:"I am a Java backend engineer experienced in financial systems, data performance, workflow integration and business decision automation.",
  aboutP1:"At F88, I work on contract worklists, role-aware queries, dashboards and PostgreSQL tuning. My experience also covers Camunda, BPMN, DMN decision tables, rule-engine integration, Redis/caching and Spring Boot services, including API-based rule evaluation and result mapping.",
  expertiseIntro:"Experience grouped by actual work: Java/PostgreSQL, Camunda–BPMN–DMN, rule engines, Redis/caching, payments and data platforms. Camunda 8/Drools are separately marked as explored or studied, without implying verified production delivery."
});

/* Business-domain and service-architecture expansion, November 2026.
   Distinguish the technical stack evidenced in a project from personal
   ownership of each infrastructure component. Sensitive internal identifiers,
   hostnames, paths and proprietary integration contracts are deliberately
   excluded from this public-facing copy. */
Object.assign(window.PORTFOLIO.ui.vi, {
  caseBusinessFlows:"Nghiệp vụ và luồng xử lý",
  heroHeadline:"Java Backend · Microservices · Kafka · Camunda · PostgreSQL",
  aboutLead:"Tôi làm Java Backend cho hệ thống tài chính: xử lý giao dịch, workflow, quyết định nghiệp vụ và các dịch vụ tích hợp theo kiến trúc microservices.",
  aboutP1:"Tại F88, tôi làm việc trên các mảng quản lý thu hồi nợ và backend hợp đồng đầu tư: worklist theo phân quyền, dashboard, Camunda/BPMN/DMN, tích hợp đối tác, xử lý message bất đồng bộ qua Kafka/SQS, Redis cache và tối ưu PostgreSQL. Tôi quan tâm đến tính đúng đắn của giao dịch, retry và trạng thái qua nhiều service.",
  expertiseIntro:"Kinh nghiệm thực tế gồm Java/Spring Boot microservices, PostgreSQL, Kafka/message queue, Redis/cache, Camunda–BPMN–DMN, tích hợp partner service và Saga-style processing. API Gateway, Drools và Camunda 8 được ghi rõ theo phạm vi kiến thức hoặc trải nghiệm có thể đối chiếu."
});
Object.assign(window.PORTFOLIO.ui.en, {
  caseBusinessFlows:"Business capabilities & flows",
  heroHeadline:"Java Backend · Microservices · Kafka · Camunda · PostgreSQL",
  aboutLead:"I build financial-services backends spanning transaction processing, workflow orchestration, configurable decisions and microservice integrations.",
  aboutP1:"At F88, my work spans debt-collection operations and investment-contract services: role-aware worklists, dashboards, Camunda/BPMN/DMN, partner integration, asynchronous Kafka/SQS messages, Redis caching and PostgreSQL tuning. Transaction correctness, retries and cross-service state handling are key concerns.",
  expertiseIntro:"Hands-on work spans Java/Spring Boot microservices, PostgreSQL, Kafka/message queues, Redis caching, Camunda–BPMN–DMN, partner services and Saga-style processing. API Gateway, Drools and Camunda 8 are scoped to the experience or knowledge actually evidenced."
});

window.PORTFOLIO.experiences[0].description = {
  vi:"Phát triển backend nghiệp vụ tài chính trên Java/Spring Boot microservices: thu hồi nợ, hợp đồng đầu tư, workflow, tích hợp partner service, messaging Kafka/SQS, Redis cache và tối ưu PostgreSQL.",
  en:"Java/Spring Boot microservices for financial operations: debt collection, investment contracts, workflow, partner-service integration, Kafka/SQS messaging, Redis caching and PostgreSQL performance."
};
window.PORTFOLIO.experiences[0].tags.push("Microservices", "Kafka", "AWS SQS", "Saga", "Partner APIs");
window.PORTFOLIO.experiences[0].details.vi.push(
  "Làm việc trong hệ sinh thái microservices có Kafka/message queue và AWS SQS cho giao tiếp bất đồng bộ, request–response và cơ chế retry giữa các dịch vụ.",
  "Tích hợp partner services qua REST/Feign; xử lý các nghiệp vụ onboarding/hợp đồng đầu tư, kết quả xử lý từ đối tác, Redis caching và luồng Saga response."
);
window.PORTFOLIO.experiences[0].details.en.push(
  "Worked in a microservice environment using Kafka and AWS SQS for asynchronous service messages, request–response flows and retries.",
  "Integrated partner services through REST/Feign, including investment onboarding/contract processing, partner status handling, Redis caching and Saga-style response flows."
);

const businessFlows = [
  {number:"01",vi:[
    "Quản lý danh sách hợp đồng/hồ sơ cần thu hồi theo phân khúc xử lý và vai trò nhân sự.",
    "Phân công và theo dõi công việc theo nhóm, nhân viên và đơn vị phụ trách; giới hạn dữ liệu theo quyền truy cập.",
    "Ghi nhận tương tác, lịch hẹn gọi lại và cam kết thanh toán (PTP); xác định ưu tiên xử lý.",
    "Tra cứu, lọc, phân trang trên Web/Mobile; tổng hợp dư nợ, tiến độ và KPI dashboard."
  ],en:[
    "Contract/case worklists for debt collection across operational stages and access roles.",
    "Assignments and work ownership by team, collector and organization, with role-based visibility.",
    "Interaction tracking, callbacks and promises to pay (PTP), supporting work prioritization.",
    "Web/mobile searching and pagination, plus outstanding-debt and operational dashboard reporting."
  ]},
  {number:"02",vi:[
    "Quản lý loại và trạng thái hồ sơ đánh giá, chủ thể được đánh giá và hệ thống nguồn.",
    "Chuẩn hóa danh mục thông tin, bằng chứng, phương thức xác minh và ánh xạ trạng thái kết quả.",
    "Cung cấp dữ liệu cấu hình thống nhất cho API và các luồng đánh giá nghiệp vụ."
  ],en:[
    "Assessment case types and statuses, evaluated subjects and source-system categories.",
    "Information, evidence and verification method catalogs, including result-to-status mappings.",
    "Consistent shared configuration for assessment APIs and business workflows."
  ]},
  {number:"03",vi:[
    "Ghi nhận thay đổi giao dịch tài chính và đảm bảo phát thông điệp theo ranh giới commit.",
    "Khôi phục/xử lý lại thông điệp tồn đọng qua transactional outbox.",
    "Ký request tích hợp để bảo vệ tính toàn vẹn của thông điệp gửi tới dịch vụ liên quan."
  ],en:[
    "Financial transaction state changes with message dispatch aligned to commit boundaries.",
    "Recovery of stalled messages through a transactional outbox.",
    "Integrity protection for requests sent to integrated services."
  ]},
  {number:"04",vi:[
    "Xử lý thông tin giao dịch ví điện tử và tương tác với các hệ thống thanh toán liên quan.",
    "Chuyển đổi/xử lý thông điệp tài chính theo chuẩn ISO 8583.",
    "Tích hợp API và phân tích trạng thái, lỗi giao dịch trong luồng backend."
  ],en:[
    "E-wallet transaction processing and communication with surrounding payment services.",
    "Financial message parsing and handling using ISO 8583.",
    "Backend API integration and transaction state/error investigation."
  ]},
  {number:"05",vi:[
    "Chuyển đổi luồng dữ liệu từ hệ sinh thái Data Lake cũ sang các thành phần nền tảng mới.",
    "Xử lý/truy vấn dữ liệu qua lớp lưu trữ phân tán và query engine.",
    "Phối hợp pipeline và lịch chạy xử lý trong môi trường dữ liệu ngân hàng."
  ],en:[
    "Migration of banking Data Lake processing from legacy to modernized platform components.",
    "Data processing and queries across distributed storage and SQL engines.",
    "Pipeline dependencies and orchestration within a banking analytics environment."
  ]},
  {number:"06",vi:[
    "Chọn đối tượng PostgreSQL cần backup bằng danh sách đăng ký và cấu hình kết nối.",
    "Chạy backup và thực thi tập SQL script theo command trong công cụ Java CLI.",
    "Chuẩn hóa thao tác kỹ thuật lặp lại, giảm sai sót từ chạy thủ công."
  ],en:[
    "Registry-driven selection of PostgreSQL objects to back up.",
    "Backup and SQL-script commands through a configurable Java CLI.",
    "Repeatable developer operations with explicit targets and errors."
  ]},
  {number:"07",vi:[
    "Điều phối các bước onboarding/phê duyệt qua workflow BPMN ở cấp tích hợp dịch vụ.",
    "Đánh giá bảng quyết định DMN để xác định cấu hình và phương án sản phẩm theo dữ liệu đầu vào.",
    "Đọc kết quả decision table, ánh xạ sang DTO và áp dụng vào truy vấn/lựa chọn nghiệp vụ.",
    "Cấp liên kết tài liệu/cấu hình theo rule và kiểm soát trường hợp rule không khớp hoặc nhiều kết quả."
  ],en:[
    "Integration with BPMN-driven onboarding/approval workflows.",
    "DMN table evaluation for product and configuration choices based on typed inputs.",
    "Decision-result mapping into DTOs and business filtering/selection logic.",
    "Rule-driven document/configuration retrieval and handling of empty or multiple matches."
  ]}
];
for (const f of businessFlows) {
  const p = window.PORTFOLIO.projects.find(project => project.number === f.number);
  if (p) p.businessFlows = {vi:f.vi,en:f.en};
}

window.PORTFOLIO.projects.push({
  number:"08",
  category:{vi:"FINTECH / MICROSERVICES / TÍCH HỢP ĐỐI TÁC",en:"FINTECH / MICROSERVICES / PARTNER INTEGRATION"},
  title:{vi:"Backend hợp đồng đầu tư & tích hợp dịch vụ bất đồng bộ",en:"Investment contracts & asynchronous partner integration"},
  summary:{
    vi:"Microservices phục vụ onboarding và hợp đồng đầu tư, tích hợp eKYC/hợp đồng điện tử, partner APIs, Kafka, AWS SQS, Redis cache và các luồng Saga response/retry.",
    en:"Microservices for investment onboarding and contracts, integrating eKYC/e-contract services, partner APIs, Kafka, AWS SQS, Redis cache and Saga-style responses/retries."
  },
  technologies:["Java 21","Spring Boot","Microservices","Kafka / MSK","AWS SQS","Redis Cache","OpenFeign","Saga Pattern","Partner APIs"],
  overview:{
    vi:"Dịch vụ backend hỗ trợ hành trình đầu tư từ xác minh thông tin và lập hợp đồng đến tương tác với các hệ thống tài chính/đối tác. Nhiều bước cần phản hồi không đồng bộ, đồng bộ trạng thái và khả năng phục hồi khi service bên ngoài chưa trả kết quả.",
    en:"Backend services support an investment journey from identity checks and digital contracts through financial partner integration. Several steps require asynchronous responses, state transitions and recovery when other services are delayed or unavailable."
  },
  businessFlows:{
    vi:[
      "Tiếp nhận và xử lý hồ sơ onboarding đầu tư: thông tin khách hàng, xác minh eKYC, đồng ý điều khoản và hợp đồng điện tử.",
      "Trao đổi thông tin khách hàng với dịch vụ định danh/tài khoản và lưu trữ tài liệu số qua các partner APIs.",
      "Gửi yêu cầu thực hiện giao dịch/chuyển tiền qua hệ thống thanh toán đối tác và tiếp nhận trạng thái/kết quả xử lý.",
      "Trao đổi sự kiện, request–response qua Kafka/AWS SQS; xử lý retry và Saga-style response để phối hợp trạng thái giữa các service.",
      "Dùng Redis caching cho dữ liệu truy cập thường xuyên và giảm gọi lặp tới các service dữ liệu/cấu hình."
    ],
    en:[
      "Investment onboarding: customer information, eKYC, consent and digital-contract flows.",
      "Customer/account and document-service integration through partner APIs.",
      "Partner payment/transfer requests with asynchronous status and outcome responses.",
      "Kafka/SQS event and request–response messaging, retries and Saga-style response coordination across services.",
      "Redis caching for frequently accessed data and reduced repeated configuration/data-service calls."
    ]
  },
  challenge:{
    vi:[
      "Luồng nghiệp vụ băng qua nhiều microservices và đối tác, không thể dựa vào một transaction database chung.",
      "Message bất đồng bộ có thể tới chậm, bị lặp hoặc thất bại; cần mô hình trạng thái, retry và xử lý kết quả chặt chẽ.",
      "Cache và cấu hình phải cân bằng độ mới dữ liệu, thời gian phản hồi và tính đúng đắn của quyết định nghiệp vụ."
    ],
    en:[
      "Business flows span multiple microservices and partners without a single shared database transaction.",
      "Asynchronous messages may arrive late, repeat or fail, requiring careful state handling, retries and outcome reconciliation.",
      "Caching and configuration access balance freshness, response time and business correctness."
    ]
  },
  approach:{
    vi:[
      "Làm việc với Java/Spring Boot microservices, kết nối service nội bộ và đối tác qua REST/OpenFeign.",
      "Sử dụng Kafka và AWS SQS trong hệ sinh thái request–response, thông báo trạng thái, consumer/producer và retry.",
      "Khai thác Redis cache/ElastiCache cho dữ liệu backend; phối hợp Camunda cho các nhánh workflow và decision.",
      "Nhìn giao tiếp từ API Gateway/điểm vào API qua application/partner services theo từng boundary; việc triển khai Gateway không được khẳng định là đầu việc cá nhân.",
      "Đánh giá Saga pattern cho giao dịch nhiều bước và phản hồi bất đồng bộ; cần phân biệt Saga response đã thấy trong flow với một Saga orchestrator/compensation hoàn chỉnh."
    ],
    en:[
      "Worked with Java/Spring Boot microservices and REST/OpenFeign integration to internal and partner services.",
      "Kafka and AWS SQS served request–response, status events, producers/consumers and retry flows within the project environment.",
      "Redis/ElastiCache supported backend data access, alongside Camunda workflow/decision integration.",
      "Understood the API Gateway/API-entry-to-service boundary without claiming personal ownership of gateway implementation.",
      "Applied Saga pattern reasoning to multi-step transactions and asynchronous responses, without claiming a fully implemented compensation orchestrator."
    ]
  },
  contribution:{
    vi:[
      "Tham gia backend tích hợp luồng nghiệp vụ đầu tư, API gọi đối tác và các thành phần xử lý dữ liệu/message trong hệ sinh thái microservices.",
      "Làm việc với Spring Boot, Feign, Camunda/DMN và các cấu hình kết nối Kafka/SQS/Redis của dự án; đối chiếu lỗi request/response và trạng thái nghiệp vụ.",
      "Phạm vi bằng chứng là tài liệu dự án, cấu hình và trao đổi kỹ thuật do tôi cung cấp; không khẳng định sở hữu tất cả producer, consumer, gateway hay đối tác."
    ],
    en:[
      "Contributed backend work across investment workflows, partner API calls and microservice messaging/data-access components.",
      "Worked with Spring Boot, Feign, Camunda/DMN and project Kafka/SQS/Redis integration configuration while investigating request/response and business-state behavior.",
      "Evidence comes from project documentation, configuration and technical exchanges I supplied; ownership of every producer, consumer, gateway or partner is not claimed."
    ]
  },
  consideration:{
    vi:[
      "Kafka/SQS giải quyết giao tiếp bất đồng bộ nhưng cần cân nhắc idempotency, thứ tự, retry và dead-letter/error handling.",
      "Saga-style coordination không tự đảm bảo một giao dịch tài chính nhất quán; cần xác định trạng thái và nhánh bù trừ theo nghiệp vụ thực.",
      "Không mô tả endpoint, queue/topic name, tài khoản, số tiền giao dịch hay cấu hình hệ thống nội bộ; không tự đưa ra TPS, cache-hit ratio hoặc SLA."
    ],
    en:[
      "Kafka/SQS messaging needs idempotency, ordering, retry and failed-message handling appropriate to the flow.",
      "Saga-style coordination requires business-state and compensation design; it does not automatically guarantee financial transaction correctness.",
      "No internal endpoints, queue/topic names, credentials or transaction data are disclosed, and no TPS, cache-hit or SLA numbers are invented."
    ]
  },
  learning:{
    vi:"Giải pháp microservices tài chính phải kết nối đồng thời nghiệp vụ hợp đồng, giao dịch, workflow và sự kiện bất đồng bộ. Ranh giới dịch vụ, trạng thái và cơ chế phục hồi quan trọng không kém framework sử dụng.",
    en:"Financial microservices require contract, transaction, workflow and asynchronous event concerns to work together. Service boundaries, state correctness and recovery matter as much as the frameworks."
  },
  evidence:{
    type:"technical",value:"Kafka + SQS",
    label:{vi:"Hai kênh messaging có trong cấu hình dự án",en:"Two messaging technologies evidenced in project configuration"},
    description:{
      vi:"Tài liệu/cấu hình do người thực hiện cung cấp ghi nhận Kafka/MSK và AWS SQS cho event/request–response, cùng Redis cache và Feign partner integration. Đây là bằng chứng stack dự án, không phải số producer/consumer cá nhân đã phát triển.",
      en:"Engineer-supplied configuration records Kafka/MSK and AWS SQS event/request–response paths, Redis caching and Feign partner integration. This verifies the project stack, not personal ownership of all producers and consumers."
    }
  }
});

window.PORTFOLIO.skillTabs[0].groups.push({
  title:{vi:"Microservices & giao dịch phân tán",en:"Microservices & distributed transactions"},
  items:["Microservices","Event-Driven Architecture","Kafka Messaging","AWS SQS","Saga Pattern","Partner Service Integration","Transaction Boundaries"]
});
window.PORTFOLIO.skillTabs[1].groups.push({
  title:{vi:"Messaging & tích hợp đối tác",en:"Messaging & partner services"},
  items:["Kafka Producer / Consumer","Message Queue","AWS SQS / FIFO","Async Request–Response","OpenFeign","Partner APIs","Retry / Failure Handling","Saga Response"]
});
window.PORTFOLIO.skillTabs[2].groups.push({
  title:{vi:"Điểm vào API & kiểm soát giao tiếp",en:"API entry & integration boundaries"},
  items:["API Gateway Architecture","Gateway / Service Routing","Service-to-Service Authentication","Idempotency","Saga Compensation Design"]
});
window.PORTFOLIO.skillTabs[0].groups[0].items.push("Microservice Architecture");
window.PORTFOLIO.skillTabs[1].groups[1].items.push("Kafka / Message Queue");

/* Editorial/architecture revision: visitor-first professional narrative.
   Clean/Hexagonal is named in engineer-authored F2F documentation; CQRS
   separation is confirmed in his FCIS technical discussions. Other patterns
   describe applicable integration work without asserting full-platform
   architecture ownership or undocumented production metrics. */
window.PORTFOLIO.architecture = [
  {
    label:"01 / STRUCTURE",
    title:{vi:"Clean Architecture & Hexagonal",en:"Clean Architecture & Hexagonal"},
    summary:{vi:"Tách nghiệp vụ cốt lõi khỏi HTTP, cơ sở dữ liệu và các dịch vụ bên ngoài.",en:"Keep core business rules independent from HTTP, persistence and external services."},
    practice:{vi:"Application / Domain / Infrastructure / Interfaces; Ports & Adapters; REST/Feign/SQS adapters.",en:"Application / Domain / Infrastructure / Interfaces; Ports & Adapters; REST/Feign/SQS adapters."},
    context:{vi:"Có mô tả trong tài liệu kỹ thuật F88 F2F và các lớp service/port/adapter.",en:"Documented in F88 F2F engineering material and reflected in service/port/adapter boundaries."}
  },
  {
    label:"02 / DATA ACCESS",
    title:{vi:"CQRS & Read Models",en:"CQRS & Read Models"},
    summary:{vi:"Tách đường ghi lệnh với đường truy vấn; tối ưu dữ liệu đọc theo nhu cầu nghiệp vụ.",en:"Separate command and query paths, optimizing read models for business access patterns."},
    practice:{vi:"Command/Query handlers, Query Port, PostgreSQL functions, Materialized Views, phân quyền theo vai trò.",en:"Command/query handlers, query ports, PostgreSQL functions, materialized views and role-aware reads."},
    context:{vi:"Được mô tả trong các API/worklist và phương án query nhiều nguồn của FCIS.",en:"Used in FCIS worklist/API discussions and multi-source query design."}
  },
  {
    label:"03 / INTEGRATION",
    title:{vi:"Microservices & Event-Driven",en:"Microservices & Event-Driven"},
    summary:{vi:"Kết nối các dịch vụ qua API và message bất đồng bộ thay vì phụ thuộc vào một transaction chung.",en:"Connect services through APIs and asynchronous messages rather than one global transaction."},
    practice:{vi:"Spring Boot, Kafka, AWS SQS, OpenFeign, Redis, Transactional Outbox, Saga-style responses.",en:"Spring Boot, Kafka, AWS SQS, OpenFeign, Redis, transactional outbox and Saga-style responses."},
    context:{vi:"Có bằng chứng ở cấu hình F2F và các thay đổi backend giao dịch; chưa nhận sở hữu toàn bộ platform.",en:"Supported by F2F configuration and transaction-backend work, without claiming end-to-end platform ownership."}
  },
  {
    label:"04 / BUSINESS PROCESS",
    title:{vi:"BPMN, DMN & Business Rules",en:"BPMN, DMN & Business Rules"},
    summary:{vi:"Biểu diễn tiến trình và quy tắc lựa chọn bằng workflow, decision table có cấu hình.",en:"Model process steps and configurable choices through workflows and decision tables."},
    practice:{vi:"Camunda 7, BPMN, DMN, decision evaluation, Spring Boot/Feign, rule-result mapping.",en:"Camunda 7, BPMN, DMN, decision evaluation, Spring Boot/Feign and rule-result mapping."},
    context:{vi:"Có ví dụ tích hợp evaluate/deploy DMN và xử lý dữ liệu đầu vào–đầu ra.",en:"Traceable examples of DMN evaluation/deployment and typed input–output handling."}
  }
];

window.PORTFOLIO.skillTabs[0].groups.unshift({
  title:{vi:"Kiến trúc phần mềm",en:"Software architecture"},
  items:["Clean Architecture","Hexagonal / Ports & Adapters","Layered Boundaries","CQRS","Microservices","Event-Driven Integration","Dependency Inversion"]
});
window.PORTFOLIO.skillTabs[1].groups.push({
  title:{vi:"Mẫu thiết kế đã sử dụng trong backend",en:"Backend design patterns in practice"},
  items:["Service / Repository","DTO & Mapper","External Ports","Feign Adapters","Transactional Outbox","Command / Query Handlers","Domain Services"]
});
window.PORTFOLIO.skillTabs[2].groups.push({
  title:{vi:"Khái niệm kiến trúc tiếp tục đào sâu",en:"Architecture topics under continued study"},
  items:["Domain-Driven Design (DDD)","Onion Architecture","Event Sourcing","Full Saga Orchestration","Architecture Decision Records"]
});

window.PORTFOLIO.experiences[0].description = {
  vi:"Phát triển backend tài chính theo kiến trúc microservices: nghiệp vụ thu hồi nợ, hợp đồng đầu tư, tích hợp đối tác và tối ưu dữ liệu.",
  en:"Financial microservices development across debt collection, investment contracts, partner integrations and data performance."
};
window.PORTFOLIO.experiences[0].details = {
  vi:[
    "Kết quả hiệu năng: từ các nhánh truy vấn từng timeout xuống dưới 1 giây ở case thông thường, dưới 2 giây ở case đặc biệt theo kiểm thử đã ghi nhận.",
    "Nghiệp vụ thu hồi nợ: API worklist hợp đồng, tìm kiếm, phân quyền, phân công, tương tác/PTP và dashboard Web/Mobile.",
    "Nghiệp vụ đầu tư: onboarding, hợp đồng điện tử, đánh giá DMN và trao đổi dữ liệu/trạng thái với dịch vụ đối tác.",
    "Kiến trúc: làm việc với Clean/Hexagonal, Ports & Adapters và CQRS tách command/query, kết hợp các read model PostgreSQL.",
    "Tích hợp: Spring Boot microservices, REST/Feign, Kafka và AWS SQS cho luồng bất đồng bộ; Redis cache và Saga-style response.",
    "Kỹ thuật: phân tích SQL/PLpgSQL, EXPLAIN ANALYZE, index, Materialized View; bảo toàn logic nghiệp vụ và RBAC khi tối ưu."
  ],
  en:[
    "Performance: query paths that previously timed out reached under 1 second in typical cases and under 2 seconds in complex cases in my recorded tests.",
    "Debt collection: contract worklist APIs, searching, authorization, assignments, interactions/PTP and web/mobile dashboards.",
    "Investment business: onboarding, electronic contracts, DMN decisions and partner-service data/status exchanges.",
    "Architecture: Clean/Hexagonal, Ports & Adapters and CQRS command/query separation with PostgreSQL read models.",
    "Integration: Spring Boot microservices, REST/Feign, Kafka/SQS asynchronous flows, Redis caching and Saga-style responses.",
    "Engineering: SQL/PLpgSQL, EXPLAIN ANALYZE, indexes and materialized views, preserving business rules and RBAC while tuning."
  ]
};
window.PORTFOLIO.experiences[0].tags = ["Java 21","Spring Boot","Clean / Hexagonal","CQRS","PostgreSQL","Kafka / SQS","Camunda / DMN","Redis"];

window.PORTFOLIO.projects[0].summary = {
  vi:"Worklist và dashboard thu hồi nợ theo hợp đồng/phân quyền; các nhánh truy vấn từng timeout được tối ưu xuống dưới 1 giây (thông thường) hoặc dưới 2 giây (phức tạp) theo kiểm thử của tôi.",
  en:"Role-aware debt-collection worklists and dashboards; previously timing-out query paths reached under 1 second typically or under 2 seconds for complex cases in my recorded tests."
};
window.PORTFOLIO.projects[6].summary = {
  vi:"Tích hợp Camunda 7: BPMN workflow, DMN decision table, evaluate rule qua API và ánh xạ kết quả cho nghiệp vụ đầu tư/cấu hình.",
  en:"Camunda 7 integration: BPMN workflows, DMN decision tables, API-based evaluation and rule-result mapping for investment/configuration flows."
};
window.PORTFOLIO.projects[7].summary = {
  vi:"Backend hợp đồng đầu tư: onboarding/eKYC, dịch vụ đối tác, Kafka/SQS request–response, Redis cache và Saga-style response/retry.",
  en:"Investment backend: onboarding/eKYC, partner services, Kafka/SQS request–response, Redis caching and Saga-style responses/retries."
};

Object.assign(window.PORTFOLIO.ui.vi, {
  navArchitecture:"Kiến trúc",
  architectureIndex:"KIẾN TRÚC",
  architectureTitle:"Kiến trúc phần mềm đã làm việc",
  architectureIntro:"Bốn nhóm quyết định kỹ thuật có ngữ cảnh dự án. Mỗi nhóm chỉ rõ mục đích, cách triển khai và phạm vi bằng chứng.",
  architectureConceptTitle:"Cách tổ chức backend theo Clean Architecture",
  architectureConceptCaption:"Sơ đồ khái niệm theo luồng xử lý, không phải kiến trúc triển khai nội bộ. Các tầng lõi phụ thuộc vào abstraction, không phụ thuộc adapter ngoài.",
  architectureLayer1:"Interfaces · REST / Event / Workflow",
  architectureLayer2:"Application · Use Cases / Command / Query",
  architectureLayer3:"Domain · Quy tắc nghiệp vụ",
  architectureLayer4:"Ports ↔ Adapters · Database / Messaging / Partner APIs",
  architectureMeaning:"Mục đích",
  architecturePractice:"Kỹ thuật",
  architectureContext:"Bối cảnh thực tế",
  measurementArchiveSummary:"Xem 4 nhóm benchmark trung gian và bằng chứng đo chi tiết",
  caseDeepDive:"Thách thức, cân nhắc và bài học kỹ thuật",
  caseBusinessFlows:"Nghiệp vụ hệ thống xử lý",
  heroHeadline:"Java Backend Engineer · Hệ thống tài chính & Microservices",
  heroDescription:"Chuyên viên cao cấp phát triển Java tại F88 (từ 20/10/2025). Hơn 3 năm kinh nghiệm backend tài chính, từng tham gia ví điện tử quốc tế và dự án Data Lake ngân hàng (~6 tháng).",
  aboutLead:"Tôi phát triển dịch vụ Java Backend cho hệ thống tài chính, nơi hiệu năng, tính đúng đắn giao dịch và quy tắc nghiệp vụ phải đi cùng nhau.",
  aboutP1:"Công việc hiện tại gồm nghiệp vụ thu hồi nợ và hợp đồng đầu tư: API Web/Mobile, dữ liệu theo phân quyền, Camunda/DMN, kết nối đối tác và messaging Kafka/SQS. Tôi làm việc với Clean/Hexagonal, CQRS, Spring Boot microservices và PostgreSQL read model.",
  aboutP2:"Trước F88, tôi tham gia ví điện tử quốc tế thuộc hệ sinh thái Viettel (ISO 8583, thanh toán) và chuyển đổi Data Lake VietinBank (~6 tháng). Định hướng dài hạn là Solution Architect; đây là mục tiêu phát triển, chưa phải chức danh hiện tại.",
  experienceIntro:"Ba mảng kinh nghiệm: backend tài chính tại F88, thanh toán ví điện tử và nền tảng dữ liệu ngân hàng.",
  projectsIntro:"Mỗi case trả lời bốn câu hỏi: giải quyết nghiệp vụ gì, xây thế nào, tôi đóng góp phần nào và có bằng chứng gì. Bấm vào từng dự án để xem chi tiết.",
  expertiseIntro:"Phân biệt kiến trúc và công nghệ đã áp dụng, công cụ từng làm việc, cùng những chủ đề mới ở mức nghiên cứu — không dùng phần trăm tự đánh giá.",
  evidenceLabel:"BỐN GÓC NHÌN CHÍNH",
  evidence1:"Nghiệp vụ tài chính phức tạp",
  evidence2:"Clean Architecture & CQRS",
  evidence3:"Kafka, SQS & Partner APIs",
  evidence4:"Đo đạc & tối ưu PostgreSQL"
});
Object.assign(window.PORTFOLIO.ui.en, {
  navArchitecture:"Architecture",
  architectureIndex:"ARCHITECTURE",
  architectureTitle:"Software architecture in practice",
  architectureIntro:"Four engineering approaches grounded in project context. Each explains its purpose, techniques and evidence scope.",
  architectureConceptTitle:"A Clean Architecture backend boundary",
  architectureConceptCaption:"Conceptual request path, not an internal deployment diagram. Core layers depend on abstractions, not external adapters.",
  architectureLayer1:"Interfaces · REST / Events / Workflow",
  architectureLayer2:"Application · Use Cases / Commands / Queries",
  architectureLayer3:"Domain · Business Rules",
  architectureLayer4:"Ports ↔ Adapters · Database / Messaging / Partner APIs",
  architectureMeaning:"Why it matters",
  architecturePractice:"Techniques",
  architectureContext:"Project context",
  measurementArchiveSummary:"Explore 4 groups of intermediate SQL measurements and supporting evidence",
  caseDeepDive:"Engineering challenges, trade-offs and lessons",
  caseBusinessFlows:"Business capabilities & flows",
  heroHeadline:"Java Backend Engineer · Financial Systems & Microservices",
  heroDescription:"Senior Java System Development Specialist at F88 since 20 October 2025. Over three years in financial backends, with international e-wallet work and a ~6-month banking Data Lake engagement.",
  aboutLead:"I build Java backend services for financial systems where performance, transaction correctness and business rules matter equally.",
  aboutP1:"My current work spans debt-collection operations and investment contracts: web/mobile APIs, role-aware data, Camunda/DMN, partner services and Kafka/SQS messaging. I work with Clean/Hexagonal boundaries, CQRS, Spring Boot microservices and PostgreSQL read models.",
  aboutP2:"Earlier, I worked on a Viettel-related international e-wallet (ISO 8583/payments) and a roughly six-month VietinBank Data Lake migration. My longer-term goal is Solution Architecture, not a title I currently hold.",
  experienceIntro:"Three complementary areas: financial backends at F88, digital-wallet payments and banking data engineering.",
  projectsIntro:"Every case answers four questions: what business problem, what approach, what I contributed and what evidence supports it. Open a project for detail.",
  expertiseIntro:"Architecture, hands-on tools and continuing studies are kept distinct, without arbitrary proficiency percentages.",
  evidenceLabel:"FOUR PILLARS OF WORK",
  evidence1:"Financial business domains",
  evidence2:"Clean Architecture & CQRS",
  evidence3:"Kafka, SQS & Partner APIs",
  evidence4:"Measured PostgreSQL tuning"
});

/* Public-facing CV copy: present the portfolio owner's work and outcomes
   directly. Technical measurements and actual project boundaries remain in
   the case studies, without audit commentary or defensive disclaimers. */
Object.assign(window.PORTFOLIO.ui.vi, {
  factsTitle:"Thông tin nghề nghiệp",
  factProjects:"Dự án & case study",
  heroDirection:"Định hướng phát triển: Solution Architect",
  outcomeKicker:"KẾT QUẢ TỐI ƯU HIỆU NĂNG",
  outcomeTitle:"Từ timeout xuống dưới 1 giây",
  outcomeIntro:"Tối ưu các luồng truy vấn nghiệp vụ bằng phân tích execution plan, cải tiến SQL/PL/pgSQL, indexing và PostgreSQL read models. Kết quả sau tối ưu: dưới 1 giây với case thông thường và dưới 2 giây với case phức tạp.",
  outcomeTypicalCaption:"Luồng truy vấn phổ biến",
  outcomeExceptionalCaption:"Luồng truy vấn phức tạp",
  measurementPrivate:"SỐ LIỆU TỐI ƯU POSTGRESQL",
  measurementTitle:"Chi tiết hiệu năng trước và sau tối ưu",
  measurementIntro:"Các phép đo từ những hạng mục tối ưu SQL: thời gian chạy, tỷ lệ cải thiện, giải pháp và bước kiểm thử.",
  measurementDetails:"Xem phương án kỹ thuật và kiểm thử",
  measurementVerification:"KIỂM THỬ & ĐỐI CHIẾU KẾT QUẢ",
  evidenceHeading:"KẾT QUẢ KỸ THUẬT",
  technicalResult:"Giải pháp và công nghệ đã triển khai",
  measurementArchiveSummary:"Xem bảng số liệu tối ưu SQL chi tiết",
  projectsIntro:"Các dự án trình bày rõ nghiệp vụ, giải pháp đã triển khai, phần việc tôi trực tiếp thực hiện và kết quả đạt được.",
  expertiseIntro:"Năng lực kiến trúc, backend, database, tích hợp hệ thống và các công nghệ đã sử dụng trong công việc.",
  architectureIntro:"Bốn nhóm kiến trúc và phương pháp kỹ thuật tôi sử dụng trong phát triển hệ thống backend tài chính.",
  contactText:"Xem các dự án và case study để hiểu rõ năng lực triển khai backend, tích hợp hệ thống và tối ưu hiệu năng của tôi.",
  labText:"Các thử nghiệm và tiện ích kỹ thuật tôi phát triển về PostgreSQL, developer tooling, workflow và kiến trúc phần mềm.",
  labStatus:"PHÁT TRIỂN & THỬ NGHIỆM",
  footerNote:"Đào Xuân Mạnh · Java Backend Engineering Portfolio",
  directionIntro:"Lộ trình nâng cao năng lực thiết kế hệ thống trong 2–3 năm để phát triển lên Solution Architect."
});
Object.assign(window.PORTFOLIO.ui.en, {
  factsTitle:"Professional overview",
  factProjects:"Projects & case studies",
  heroDirection:"Career goal: Solution Architect",
  outcomeKicker:"QUERY PERFORMANCE RESULTS",
  outcomeTitle:"From timeouts to sub-second queries",
  outcomeIntro:"Optimized business query paths through execution-plan analysis, SQL/PL/pgSQL improvements, indexing and PostgreSQL read models. Results: under 1 second for typical cases and under 2 seconds for complex scenarios.",
  outcomeTypicalCaption:"Common query paths",
  outcomeExceptionalCaption:"Complex query paths",
  measurementPrivate:"POSTGRESQL PERFORMANCE RESULTS",
  measurementTitle:"Before-and-after SQL performance",
  measurementIntro:"Measurements from individual SQL optimization workstreams: execution time, improvement, technical approach and validation.",
  measurementDetails:"View technical solution and validation",
  measurementVerification:"TESTING & RESULT VALIDATION",
  evidenceHeading:"TECHNICAL RESULTS",
  technicalResult:"Implemented solutions and technologies",
  measurementArchiveSummary:"View detailed SQL optimization measurements",
  projectsIntro:"Each project explains the business domain, implemented approach, my direct contributions and the achieved results.",
  expertiseIntro:"Software architecture, backend, database, integrations and technologies I have used in engineering work.",
  architectureIntro:"Four architecture approaches and engineering practices used in financial backend development.",
  contactText:"Explore projects and case studies to understand my backend engineering, integration and performance optimization experience.",
  labText:"My engineering experiments and tools covering PostgreSQL, developer productivity, workflow and software architecture.",
  labStatus:"ENGINEERING EXPERIMENTS",
  footerNote:"Dao Xuan Manh · Java Backend Engineering Portfolio",
  directionIntro:"A two-to-three-year development plan to deepen system design and move toward Solution Architecture."
});

window.PORTFOLIO.experiences[0].details.vi[0] = "Kết quả hiệu năng: tối ưu truy vấn từ timeout xuống dưới 1 giây với case thông thường và dưới 2 giây với case phức tạp.";
window.PORTFOLIO.experiences[0].details.en[0] = "Performance: optimized query paths from timeouts to under 1 second for typical cases and under 2 seconds for complex cases.";
window.PORTFOLIO.ui.vi.aboutP2 = "Trước F88, tôi tham gia ví điện tử quốc tế thuộc hệ sinh thái Viettel (ISO 8583, thanh toán) và chuyển đổi Data Lake VietinBank (~6 tháng). Tôi tiếp tục đào sâu tư duy thiết kế hệ thống để phát triển lên Solution Architect.";
window.PORTFOLIO.ui.en.aboutP2 = "Before F88, I worked on an international e-wallet in the Viettel ecosystem (ISO 8583/payments) and a roughly six-month VietinBank Data Lake migration. I am deepening my system-design skills to grow into a Solution Architect role.";
window.PORTFOLIO.projects[0].summary = {
  vi:"Phát triển worklist và dashboard thu hồi nợ theo hợp đồng và phân quyền; tối ưu các luồng truy vấn từ timeout xuống dưới 1 giây (case thường) và dưới 2 giây (case phức tạp).",
  en:"Developed role-aware debt collection worklists and dashboards; optimized query paths from timeouts to under 1 second (typical) and under 2 seconds (complex)."
};
window.PORTFOLIO.projects[0].evidence.description = {
  vi:"Phân tích execution plan, tái cấu trúc SQL và read model theo hợp đồng, giảm join/tính toán lặp, điều chỉnh index và kiểm thử dữ liệu cùng phân quyền sau tối ưu.",
  en:"Analyzed execution plans, refactored contract-grain SQL and read models, reduced repeated joins and calculations, refined indexes, and validated data and authorization after tuning."
};
window.PORTFOLIO.projects[0].contribution.vi[0] = "Phát triển và tối ưu SQL/Java cho các luồng tìm kiếm, worklist và dashboard; xác định yêu cầu nghiệp vụ và kiểm thử kết quả sau thay đổi.";
window.PORTFOLIO.projects[0].contribution.en[0] = "Developed and optimized SQL/Java query paths for search, worklists and dashboards, defining business requirements and validating results after changes.";

window.PORTFOLIO.projects[1].evidence.description = {
  vi:"Bốn nhóm danh mục: Assessment Case; Subject & Source; Information & Verification; Assessment Outcomes.",
  en:"Four reference-data groups: Assessment Case; Subject & Source; Information & Verification; Assessment Outcomes."
};
window.PORTFOLIO.projects[2].contribution = {
  vi:[
    "Phát triển thành phần transactional outbox: phát sự kiện sau commit và khôi phục các thông điệp tồn đọng.",
    "Triển khai ký request tích hợp bằng HMAC và RSA-SHA256; rà soát ranh giới giao dịch và lỗi kết nối đối tác."
  ],
  en:[
    "Developed transactional outbox components for after-commit dispatch and stalled-message recovery.",
    "Implemented HMAC and RSA-SHA256 request signing, with attention to transaction boundaries and partner integration failures."
  ]
};
window.PORTFOLIO.projects[2].evidence.description = {
  vi:"Hai hạng mục Java backend: transactional outbox và request signing HMAC/RSA-SHA256.",
  en:"Two Java backend areas: transactional outbox and HMAC/RSA-SHA256 request signing."
};
window.PORTFOLIO.projects[2].evidence.label = {
  vi:"Thành phần backend đã phát triển",
  en:"Backend components developed"
};
window.PORTFOLIO.projects[3].evidence.description = {
  vi:"Tích hợp thanh toán số và xử lý thông điệp giao dịch theo chuẩn ISO 8583.",
  en:"Digital payment integration and financial message processing using ISO 8583."
};
window.PORTFOLIO.projects[4].evidence.description = {
  vi:"Tham gia khoảng 6 tháng chuyển đổi Data Lake ngân hàng với Hive, Presto, Iceberg, MinIO và Airflow.",
  en:"Contributed to roughly six months of banking Data Lake migration work using Hive, Presto, Iceberg, MinIO and Airflow."
};
window.PORTFOLIO.projects[5].evidence.description = {
  vi:"Công cụ Java CLI tự xây dựng, hỗ trợ chọn đối tượng PostgreSQL bằng register file, backup và thực thi SQL script.",
  en:"Self-developed Java CLI for register-driven PostgreSQL object selection, backup and SQL-script execution."
};
window.PORTFOLIO.projects[5].learning = {
  vi:"Thiết kế một công cụ CLI có cấu hình, cú pháp command rõ ràng, thông báo lỗi dễ hiểu và thao tác database có thể chạy lặp lại.",
  en:"Designed a configuration-driven CLI with clear commands, actionable errors and repeatable database operations."
};

window.PORTFOLIO.projects[6].contribution.vi[2] = "Tích hợp BPMN workflow, rule engine và Redis/cache vào các luồng nghiệp vụ backend; kiểm soát dữ liệu cấu hình và kết quả đánh giá rule.";
window.PORTFOLIO.projects[6].contribution.en[2] = "Integrated BPMN workflows, rule evaluation and Redis/caching with backend business flows, managing configuration data and decision results.";
window.PORTFOLIO.projects[6].consideration.vi = window.PORTFOLIO.projects[6].consideration.vi.slice(0,2);
window.PORTFOLIO.projects[6].consideration.en = window.PORTFOLIO.projects[6].consideration.en.slice(0,2);
window.PORTFOLIO.projects[6].evidence.description = {
  vi:"Tích hợp Camunda REST Decision Evaluation, Feign Client, typed-value DTO và xử lý lỗi triển khai DMN.",
  en:"Camunda REST Decision Evaluation, Feign Client integration, typed-value DTO mapping and DMN deployment troubleshooting."
};
window.PORTFOLIO.projects[6].evidence.label = {
  vi:"Workflow & Decision Automation",
  en:"Workflow & decision automation"
};

window.PORTFOLIO.projects[7].approach.vi[3] = "Làm việc với luồng request qua API Gateway, application services và partner services; xác định ranh giới tích hợp và hợp đồng dữ liệu giữa các service.";
window.PORTFOLIO.projects[7].approach.vi[4] = "Áp dụng Saga pattern cho giao dịch nhiều bước, xử lý phản hồi bất đồng bộ, retry và cập nhật trạng thái nghiệp vụ.";
window.PORTFOLIO.projects[7].approach.en[3] = "Worked with API Gateway, application and partner-service request flows, including integration boundaries and service contracts.";
window.PORTFOLIO.projects[7].approach.en[4] = "Applied Saga pattern concepts to multi-step transactions, asynchronous responses, retries and business-state updates.";
window.PORTFOLIO.projects[7].contribution.vi[2] = "Phân tích và xử lý lỗi tích hợp liên dịch vụ, message response và trạng thái xử lý hợp đồng đầu tư.";
window.PORTFOLIO.projects[7].contribution.en[2] = "Investigated cross-service integration failures, messaging responses and investment-contract processing states.";
window.PORTFOLIO.projects[7].consideration.vi[2] = "Thiết kế idempotency, retry và giám sát lỗi phù hợp với các bước onboarding, giao dịch và phản hồi từ đối tác.";
window.PORTFOLIO.projects[7].consideration.en[2] = "Designed idempotency, retries and failure monitoring around onboarding, transaction and partner-response steps.";
window.PORTFOLIO.projects[7].evidence.description = {
  vi:"Kafka/MSK và AWS SQS cho event/request–response; Redis caching và OpenFeign để tích hợp partner services.",
  en:"Kafka/MSK and AWS SQS for events/request–response, with Redis caching and OpenFeign partner-service integration."
};
window.PORTFOLIO.projects[7].evidence.label = {
  vi:"Messaging bất đồng bộ",
  en:"Asynchronous messaging"
};

window.PORTFOLIO.architecture[0].context = {
  vi:"Ứng dụng trong backend hợp đồng đầu tư F88 với các lớp service, port, adapter và tích hợp Feign/SQS.",
  en:"Applied in F88 investment backends with service, port and adapter boundaries and Feign/SQS integrations."
};
window.PORTFOLIO.architecture[1].context = {
  vi:"Áp dụng cho FCIS worklist, dashboard, API tìm kiếm và các đường truy vấn nhiều nguồn dữ liệu.",
  en:"Used in FCIS worklists, dashboards, search APIs and multi-source data queries."
};
window.PORTFOLIO.architecture[2].context = {
  vi:"Backend giao dịch và hợp đồng đầu tư: Kafka/SQS messaging, Redis caching, partner APIs và transactional outbox.",
  en:"Transaction and investment-contract backends: Kafka/SQS messaging, Redis caching, partner APIs and transactional outbox."
};
window.PORTFOLIO.architecture[3].context = {
  vi:"Tích hợp evaluate/deploy DMN và ánh xạ kết quả rule vào nghiệp vụ trên Java/Spring Boot.",
  en:"Integrated DMN evaluation/deployment and business-rule result mapping in Java/Spring Boot."
};

// Keep technical figures and methods, but remove public audit-disclaimer fields.
for (const project of window.PORTFOLIO.projects) {
  if (project.evidence) delete project.evidence.limitations;
}
for (const study of window.PORTFOLIO.measurementStudies) delete study.limitations;
