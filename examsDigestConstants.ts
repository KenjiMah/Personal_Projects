import { Question, QuestionType, SecurityDomain } from './types';

// Exams Digest Practice Questions - 6 exams total
// Each exam will contain practice questions from the Exams Digest source
export const EXAMS_DIGEST_QUESTIONS: Question[][] = [
  // Exam 1
  [
    {
      id: 'ed1-q1',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A smart city project is deploying various IoT sensors across the city to gather data on traffic patterns, weather, pollution levels, and more. Which of the following is the MOST critical security consideration when deploying these sensors?",
      options: [
        { id: 'A', text: "Ensuring high data transfer speeds to cater to the volume of data from the IoT sensors" },
        { id: 'B', text: "Limiting the IoT devices to communicate only with specific, pre-defined servers" },
        { id: 'C', text: "Installing physical locks on IoT devices to prevent theft" },
        { id: 'D', text: "Allowing IoT devices to connect to any available network for data redundancy" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q2',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFirm Inc. is starting a new business venture. Before moving forward, the security team holds brainstorming sessions, interviews, and reviews historical data to generate a list of potential security threats the new venture could face. This activity is a primary component of which step in the risk management process?",
      options: [
        { id: 'A', text: "Risk assessment" },
        { id: 'B', text: "Risk response" },
        { id: 'C', text: "Risk monitoring" },
        { id: 'D', text: "Risk identification" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q3',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large financial organization wants to ensure that all employees understand the importance of cybersecurity and the role they play in safeguarding company assets. Which of the following managerial security controls will be MOST effective in achieving this?",
      options: [
        { id: 'A', text: "Installing a firewall at the network perimeter" },
        { id: 'B', text: "Regular security awareness training for employees" },
        { id: 'C', text: "Deploying an Intrusion Detection System (IDS)" },
        { id: 'D', text: "Encrypting all company data" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q4',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A major pharmaceutical company announced an increase in drug prices. Following the announcement, their website was taken offline by a DDoS attack, with a message posted online by a group demanding affordable healthcare for all. Which type of threat actor is MOST likely behind this attack?",
      options: [
        { id: 'A', text: "Unskilled attacker" },
        { id: 'B', text: "Insider threat" },
        { id: 'C', text: "Hacktivist" },
        { id: 'D', text: "Nation-state" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q5',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After deploying wireless access points in a large manufacturing facility, employees report inconsistent wireless connectivity in some areas. What tool would be most effective for the IT team to use to visualize areas of weak wireless signal strength?",
      options: [
        { id: 'A', text: "Network bandwidth monitor" },
        { id: 'B', text: "Protocol analyzer" },
        { id: 'C', text: "Heat map software" },
        { id: 'D', text: "Intrusion detection system" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q6',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "In an IaaS (Infrastructure as a Service) model, which of the following tasks is typically the responsibility of the cloud customer in a standard Cloud Responsibility Matrix?",
      options: [
        { id: 'A', text: "Physical security of data centers" },
        { id: 'B', text: "Patching of host operating systems" },
        { id: 'C', text: "Network infrastructure maintenance" },
        { id: 'D', text: "Patching of guest operating systems" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q7',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company’s website was temporarily defaced with a humorous meme, but no sensitive data was stolen and no significant damage was done. The attacker left a message bragging about their first successful hack. Which type of threat actor is MOST likely responsible for this attack?",
      options: [
        { id: 'A', text: "Insider threat" },
        { id: 'B', text: "Advanced Persistent Threat (APT)" },
        { id: 'C', text: "Unskilled attacker" },
        { id: 'D', text: "Nation-state" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q8',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution discovered that a large number of confidential customer records were being accessed and copied during off-business hours. The access came from an authenticated user within the company who had recently been passed over for a promotion. Which type of threat actor is MOST likely responsible?",
      options: [
        { id: 'A', text: "Hacktivist" },
        { id: 'B', text: "Insider threat" },
        { id: 'C', text: "Nation-state" },
        { id: 'D', text: "Organized crime syndicate" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q9',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company is evaluating its data storage options. They need a solution that provides the highest level of control over hardware, software, and network configurations, allowing for customized security controls and measures. Which deployment model would best suit their needs?",
      options: [
        { id: 'A', text: "Cloud-based Infrastructure" },
        { id: 'B', text: "Hybrid Infrastructure" },
        { id: 'C', text: "On-premises Infrastructure" },
        { id: 'D', text: "Community Cloud" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q10',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A new technology firm launched a device that uses facial recognition for authentication. A cybersecurity researcher, without malicious intent, demonstrated a method to bypass the facial recognition using a photograph and then privately disclosed the findings to the firm. What is the primary motivation behind the researcher’s action?",
      options: [
        { id: 'A', text: "Philosophical beliefs opposing facial recognition" },
        { id: 'B', text: "Financial gain by blackmailing the firm" },
        { id: 'C', text: "Ethical considerations for consumer security" },
        { id: 'D', text: "Aiming to damage the firm's market reputation" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q11',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "ABC Corp recently adopted a Bring Your Own Device (BYOD) policy. The IT department is concerned about the risks associated with personal devices accessing the corporate network. Which solution would be MOST effective for enforcing security policies on these personal mobile devices?",
      options: [
        { id: 'A', text: "Installing antivirus software on each device" },
        { id: 'B', text: "Establishing a separate guest Wi-Fi network for mobile devices" },
        { id: 'C', text: "Using Mobile Device Management (MDM) to enforce security policies" },
        { id: 'D', text: "Mandating that employees use strong passwords on their personal devices" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q12',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AcmeTech, a software development firm, suffered a major data breach traced back to a vulnerability introduced during the coding phase and never detected during testing. To avoid such vulnerabilities in the future, which policy should AcmeTech emphasize to ensure secure practices are maintained throughout the development process?",
      options: [
        { id: 'A', text: "Incident Response Policy" },
        { id: 'B', text: "Change Management Policy" },
        { id: 'C', text: "Business Continuity Policy" },
        { id: 'D', text: "Software Development Lifecycle (SDLC) Policy" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q13',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A high-profile executive received an email containing personal photos and a message threatening to release the images unless a large sum of money was transferred to a cryptocurrency address. What motivation is most evident behind this threat?",
      options: [
        { id: 'A', text: "Espionage to gather competitive intelligence" },
        { id: 'B', text: "Service disruption to harm the reputation of the executive's company" },
        { id: 'C', text: "Blackmail to extract money by leveraging sensitive information" },
        { id: 'D', text: "Data exfiltration for selling on the dark web" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q14',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software development team used an unauthorized cloud-based tool to host and manage their source code, believing it would increase productivity despite lacking IT approval. Later, unauthorized access to their project data was detected. Which threat actor concept BEST describes this situation?",
      options: [
        { id: 'A', text: "Insider threat" },
        { id: 'B', text: "Hacktivist" },
        { id: 'C', text: "Shadow IT" },
        { id: 'D', text: "Organized crime syndicate" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q15',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution has seen an increase in unauthorized transactions and wants a control that will allow them to identify suspicious transactions in real time. Which of the following would be the BEST detective control for this scenario?",
      options: [
        { id: 'A', text: "Implementing a multi-factor authentication system for all users" },
        { id: 'B', text: "Establishing a Security Operations Center (SOC) to monitor network traffic" },
        { id: 'C', text: "Installing an Intrusion Detection System (IDS) on their network" },
        { id: 'D', text: "Restricting transaction capabilities to only a few trusted IP addresses" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q16',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "MegaTech Inc. wants to ensure that after any disaster, critical applications can be restored to a working state within 4 hours, and data loss does not exceed 1 hour. Which of the following policies is most relevant to achieving this objective?",
      options: [
        { id: 'A', text: "Data Retention Policy" },
        { id: 'B', text: "Incident Response Policy" },
        { id: 'C', text: "Disaster Recovery Policy" },
        { id: 'D', text: "Password Policy" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q17',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large financial institution wants more efficient use of hardware resources, faster deployment of applications, and reduced server provisioning times. Which of the following technologies would directly address these needs?",
      options: [
        { id: 'A', text: "Network Segmentation" },
        { id: 'B', text: "Intrusion Detection System" },
        { id: 'C', text: "Virtualization" },
        { id: 'D', text: "Multi-Factor Authentication" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q18',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Bob receives an email prompting him to verify his identity by clicking on a link, which leads to a webpage that asks for his username, password, and a personal security question. What type of authentication method is being employed here?",
      options: [
        { id: 'A', text: "Biometric authentication" },
        { id: 'B', text: "Token-based authentication" },
        { id: 'C', text: "Two-factor authentication" },
        { id: 'D', text: "Single sign-on" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q19',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An online banking website automatically logs out users after 10 minutes of inactivity to ensure that if a user forgets to log out, no one else can alter the user’s banking details. Which principle of the CIA triad is MOST directly being addressed?",
      options: [
        { id: 'A', text: "Confidentiality" },
        { id: 'B', text: "Availability" },
        { id: 'C', text: "Authentication" },
        { id: 'D', text: "Integrity" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q20',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software development company wants to migrate legacy applications to a more modern infrastructure and ensure they can be deployed consistently across multiple environments without dependency and configuration issues. Which approach would best achieve this goal?",
      options: [
        { id: 'A', text: "Virtual Machine Deployment" },
        { id: 'B', text: "Bare-Metal Deployment" },
        { id: 'C', text: "Containerization" },
        { id: 'D', text: "Serverless Computing" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q21',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Your organization is implementing Infrastructure as Code (IaC) to deploy and manage its cloud infrastructure. As part of a security review, what is a primary concern regarding the use of IaC scripts?",
      options: [
        { id: 'A', text: "Lack of graphical interface for infrastructure visualization" },
        { id: 'B', text: "Hardcoding sensitive data within the scripts" },
        { id: 'C', text: "Inability to scale the infrastructure dynamically" },
        { id: 'D', text: "Incompatibility with non-cloud environments" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q22',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A pharmaceutical company is concerned about competitors accessing their formula for a new drug. Which pillar of the CIA triad is MOST directly addressed by their concern?",
      options: [
        { id: 'A', text: "Availability" },
        { id: 'B', text: "Confidentiality" },
        { id: 'C', text: "Integrity" },
        { id: 'D', text: "Non-repudiation" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q23',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An online gaming platform experiences latency issues during multiplayer sessions, affecting users’ gameplay experience. The company wants to ensure real-time responsiveness for players worldwide. Which solution would BEST mitigate these latency issues?",
      options: [
        { id: 'A', text: "Implementing a Content Delivery Network (CDN)" },
        { id: 'B', text: "Introducing stricter user authentication methods" },
        { id: 'C', text: "Deploying a centralized database server" },
        { id: 'D', text: "Reducing the game's graphical fidelity" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q24',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A startup anticipates rapid growth in its user base and is considering an application architectural model that can handle the projected growth without performance issues. Which would be the BEST design consideration?",
      options: [
        { id: 'A', text: "Implementing strict password policies" },
        { id: 'B', text: "Using a monolithic application design" },
        { id: 'C', text: "Integrating a DDoS protection mechanism" },
        { id: 'D', text: "Adopting a microservices architecture" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q25',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "MedGuard, a health tech company, has developed AI-driven software that predicts potential health risks based on patient data. Before launching in the U.S. market, which industry external consideration should be the company’s primary focus?",
      options: [
        { id: 'A', text: "Integrating with popular fitness tracking apps in the U.S." },
        { id: 'B', text: "Ensuring compliance with the Health Insurance Portability and Accountability Act (HIPAA)" },
        { id: 'C', text: "Surveying U.S. doctors about software interface preferences" },
        { id: 'D', text: "Collaborating with U.S. pharmaceutical companies for promotional deals" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
  
    // --- Questions 26 - 50 ---
  
    {
      id: 'ed1-q26',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company experienced a Distributed Denial of Service (DDoS) attack, making its website inaccessible for several hours. To mitigate the impact of such attacks in the future, which of the following would be the BEST corrective control?",
      options: [
        { id: 'A', text: "Displaying a seal for third-party security certifications on the website" },
        { id: 'B', text: "Establishing a Web Application Firewall (WAF) with DDoS protection" },
        { id: 'C', text: "Conducting routine vulnerability assessments on the website" },
        { id: 'D', text: "Implementing strong password policies for website administrators" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q27',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A healthcare organization uses embedded systems in various medical devices and wants to properly secure them. Which of the following is NOT a recommended practice when hardening embedded systems?",
      options: [
        { id: 'A', text: "Regularly patching and updating the firmware of the devices" },
        { id: 'B', text: "Allowing unrestricted access to the devices for ease of use by the medical staff" },
        { id: 'C', text: "Disabling unnecessary services and features not required for the device's primary function" },
        { id: 'D', text: "Changing default credentials and using strong, unique passwords for device access" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q28',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution wants customers to be aware of the bank’s policies on information sharing and how their personal data is used. Which security control would BEST communicate this to customers?",
      options: [
        { id: 'A', text: "Implementing end-to-end encryption for online transactions" },
        { id: 'B', text: "Publishing a privacy policy on the bank's website" },
        { id: 'C', text: "Conducting annual cybersecurity awareness training for employees" },
        { id: 'D', text: "Using multi-factor authentication for online banking" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q29',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company detected a DDoS attack that lasted for several weeks using a botnet of millions of infected devices, with frequently rotated attack vectors to bypass mitigation. This prolonged, resource-intensive attack suggests which kind of threat actor’s resources and funding?",
      options: [
        { id: 'A', text: "Amateur hacker with minimal resources" },
        { id: 'B', text: "Cybersecurity researcher testing vulnerabilities" },
        { id: 'C', text: "Nation-state actor with strategic interests" },
        { id: 'D', text: "Organized crime syndicate with substantial funding" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q30',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaCorp is migrating to cloud infrastructure and wants all virtual machines (VMs) to be securely configured from the start. Before deploying multiple VM instances, what should AlphaCorp do to ensure each VM starts from a secure configuration?",
      options: [
        { id: 'A', text: "Use the default VM templates provided by the cloud provider" },
        { id: 'B', text: "Establish a secure baseline for VM configurations and use it for deployment" },
        { id: 'C', text: "Regularly backup all VMs" },
        { id: 'D', text: "Use multi-factor authentication for cloud access" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q31',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureNet Ltd. wants to protect user accounts from brute force attacks by locking accounts after a number of failed login attempts. Which standard best suits this requirement?",
      options: [
        { id: 'A', text: "Password minimum length" },
        { id: 'B', text: "Account lockout threshold" },
        { id: 'C', text: "Mandatory password resets" },
        { id: 'D', text: "Two-factor authentication" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q32',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An energy company wants to enhance security of its ICS/SCADA systems and realizes default configurations may have vulnerabilities. Which is the BEST initial step to secure their ICS/SCADA systems?",
      options: [
        { id: 'A', text: "Connect ICS/SCADA systems to the internet for remote monitoring" },
        { id: 'B', text: "Use commercial off-the-shelf software to add a layer of security" },
        { id: 'C', text: "Implement a secure baseline configuration tailored to the ICS/SCADA environment" },
        { id: 'D', text: "Increase the number of users with administrative privileges to ensure rapid response to issues" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q33',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "The IT department wants to monitor network traffic in real time to detect anomalies or malicious activities. Which security control can accomplish this?",
      options: [
        { id: 'A', text: "Security policy documentation" },
        { id: 'B', text: "Intrusion Detection System (IDS)" },
        { id: 'C', text: "Employee code of conduct" },
        { id: 'D', text: "Access Control Lists (ACL)" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q34',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company is located in an area prone to natural disasters such as earthquakes and floods. Which physical security control would be MOST effective in ensuring the safety of the company’s IT infrastructure?",
      options: [
        { id: 'A', text: "Using biometric authentication for server access" },
        { id: 'B', text: "Deploying a firewall to protect against cyber threats" },
        { id: 'C', text: "Establishing a raised floor system in the data center" },
        { id: 'D', text: "Conducting penetration testing on a regular basis" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q35',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A network engineer is preparing a new batch of routers for deployment in a large organization. Which step should be prioritized to ensure routers are securely configured from the start?",
      options: [
        { id: 'A', text: "Configure the routers to use DHCP to dynamically assign IP addresses to connected devices" },
        { id: 'B', text: "Change the default administrative credentials on the routers" },
        { id: 'C', text: "Update the routers' firmware to the latest, most feature-rich version regardless of its security posture" },
        { id: 'D', text: "Customize the routers' LED colors for easy identification in the server room" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q36',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureCom, a telecommunications company, is expanding across Country A, which recently updated telecom regulations mandating strict guidelines for external communications. What should be SecureCom’s primary focus?",
      options: [
        { id: 'A', text: "Increasing advertising budget to gain a stronger market presence" },
        { id: 'B', text: "Ensuring its infrastructure meets the national standards for secure and encrypted communications" },
        { id: 'C', text: "Collaborating with local tech companies to better understand the culture" },
        { id: 'D', text: "Launching new products tailored to the preferences of the residents" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q37',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A medical company deployed a device to monitor patient heart rates in real time using a Real-Time Operating System (RTOS). The security team is concerned about risks. Which KEY recommendation would enhance the security of such devices?",
      options: [
        { id: 'A', text: "Ensure real-time data analysis capabilities" },
        { id: 'B', text: "Integrate the device with the corporate cloud for backups" },
        { id: 'C', text: "Implement strict network segmentation for the device" },
        { id: 'D', text: "Increase the storage capacity of the device" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q38',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DigitalZone Corp, a marketing company, collects personal data from users and determines how and why it will be processed. They engage CloudSolutions to store and manage the data. In this scenario, what role does DigitalZone Corp play in relation to data protection regulations?",
      options: [
        { id: 'A', text: "Processor" },
        { id: 'B', text: "Data subject" },
        { id: 'C', text: "Controller" },
        { id: 'D', text: "Third-party provider" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q39',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During an annual review, a company discovered that one of its critical systems had several unscheduled downtimes. The CTO recommends moving toward a high availability architecture. What is the PRIMARY concern when implementing high availability?",
      options: [
        { id: 'A', text: "Ensuring that there are no single points of failure" },
        { id: 'B', text: "Ensuring that the system is patched regularly" },
        { id: 'C', text: "Implementing multi-factor authentication" },
        { id: 'D', text: "Storing backups in multiple geographical locations" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q40',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "In a cloud environment, which of the following matrices defines the shared responsibilities between the cloud provider and the customer for specific cloud service models?",
      options: [
        { id: 'A', text: "Shared Accountability Matrix" },
        { id: 'B', text: "Cloud Resource Allocation Table" },
        { id: 'C', text: "Cloud Security Posture Matrix" },
        { id: 'D', text: "Cloud Responsibility Matrix" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q41',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational company is issuing company-owned mobile devices to executives. Given the sensitivity of data they handle, what hardening measure would be MOST effective?",
      options: [
        { id: 'A', text: "Regularly updating the company's social media profiles to mention the security measures taken" },
        { id: 'B', text: "Implementing biometric authentication in addition to strong passcodes" },
        { id: 'C', text: "Turning off Bluetooth and Wi-Fi when not in use" },
        { id: 'D', text: "Setting the devices to display brighter screen colors" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q42',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational company is deploying new servers in data centers across various countries. Which step should be taken FIRST to ensure the servers are secured against potential threats?",
      options: [
        { id: 'A', text: "Set up a monitoring system to alert the IT team of any irregular activities" },
        { id: 'B', text: "Deploy all the software applications the company might need in the future" },
        { id: 'C', text: "Use the server's default configuration to ensure manufacturer's best practices are maintained" },
        { id: 'D', text: "Disable any unused services and ports on the server" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q43',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During an incident response, the IT team discovers malware collecting information about military projects and sending the data to a foreign server. Which type of threat actor would MOST likely be involved?",
      options: [
        { id: 'A', text: "Disgruntled employee" },
        { id: 'B', text: "Nation-state" },
        { id: 'C', text: "Phishing scam artist" },
        { id: 'D', text: "Hacktivist" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q44',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large e-commerce platform experiences slowdowns and outages during peak sale periods due to high user traffic. Which solution would BEST improve scalability during these high-demand times?",
      options: [
        { id: 'A', text: "Implement a centralized logging system" },
        { id: 'B', text: "Employ auto-scaling cloud solutions" },
        { id: 'C', text: "Increase the frequency of data backups" },
        { id: 'D', text: "Mandate regular security training for employees" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q45',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large enterprise wants a more flexible and programmable network architecture by centralizing the control plane and enabling automated, programmable configurations and rapid provisioning. Which network architecture model should they consider?",
      options: [
        { id: 'A', text: "VLAN (Virtual Local Area Network)" },
        { id: 'B', text: "MPLS (Multiprotocol Label Switching)" },
        { id: 'C', text: "VPN (Virtual Private Network)" },
        { id: 'D', text: "SDN (Software-Defined Networking)" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q46',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An audit report indicates that several network switches in a data center lack security configurations. Which hardening technique would BEST reduce the risk associated with these switches?",
      options: [
        { id: 'A', text: "Configuring port mirroring to monitor network traffic" },
        { id: 'B', text: "Disabling unused switch ports" },
        { id: 'C', text: "Implementing load balancing across the switches" },
        { id: 'D', text: "Increasing the MAC address table size for performance" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q47',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce platform reported multiple breaches where financial and personal data of thousands of users were exfiltrated and then sold on the dark web. Which type of threat actor is MOST likely behind these breaches?",
      options: [
        { id: 'A', text: "Insider threat" },
        { id: 'B', text: "Hacktivist" },
        { id: 'C', text: "Organized crime syndicate" },
        { id: 'D', text: "Nation-state" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q48',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company’s primary security control for accessing secure server rooms is a biometric fingerprint scanner, which occasionally malfunctions in high humidity. The security team wants an alternative solution to grant access when the primary method fails. Which would be the MOST appropriate compensating control?",
      options: [
        { id: 'A', text: "Implementing a security token-based authentication system" },
        { id: 'B', text: "Employing security guards at the main entrance" },
        { id: 'C', text: "Installing security cameras inside the server room" },
        { id: 'D', text: "Conducting regular server room audits" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q49',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial firm noticed a series of unauthorized transactions moving funds from legitimate accounts to overseas locations. The investigation revealed a group exploiting vulnerabilities in the transaction system. What motivation is most likely driving this group’s actions?",
      options: [
        { id: 'A', text: "Seeking notoriety within the hacker community" },
        { id: 'B', text: "Financial gain from unauthorized transactions" },
        { id: 'C', text: "Demonstrating political beliefs against financial institutions" },
        { id: 'D', text: "Espionage to uncover the firm's investment strategies" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q50',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechGuard Corp. conducts a risk assessment every six months to identify new vulnerabilities and ensure that previous risk-mitigation strategies remain effective. This type of risk assessment is best described as:",
      options: [
        { id: 'A', text: "Periodic" },
        { id: 'B', text: "Ad hoc" },
        { id: 'C', text: "Continuous" },
        { id: 'D', text: "Recurring" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
  
    // --- Questions 51 - 75 ---
  
    {
      id: 'ed1-q51',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company recently faced a DDoS attack that rendered its website unavailable for several hours. The CISO emphasizes having a detailed plan including identification, containment, eradication, recovery, and lessons learned. Which policy primarily encompasses these stages?",
      options: [
        { id: 'A', text: "Change Management Policy" },
        { id: 'B', text: "Incident Response Policy" },
        { id: 'C', text: "Disaster Recovery Policy" },
        { id: 'D', text: "Remote Access Policy" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q52',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "MatrixCorp provides employees with company-owned devices that are also allowed for personal use, while retaining management and monitoring capabilities. Which deployment model is MatrixCorp using?",
      options: [
        { id: 'A', text: "Bring Your Own Device (BYOD)" },
        { id: 'B', text: "Choose Your Own Device (CYOD)" },
        { id: 'C', text: "Corporate-owned, Personally Enabled (COPE)" },
        { id: 'D', text: "Public Device Deployment (PDD)" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q53',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "The network administrator of a growing tech firm is concerned about vulnerabilities of the company’s switches. Which measure is MOST effective in hardening these switches against attacks?",
      options: [
        { id: 'A', text: "Assigning static IP addresses to all connected devices" },
        { id: 'B', text: "Implementing strong password policies for switch access" },
        { id: 'C', text: "Upgrading the switches to support 10Gbps for future expansion" },
        { id: 'D', text: "Customizing the switch LED colors for easy identification" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q54',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A developer deployed a new service using serverless architecture, but the company notices an increased bill even when the service is supposedly not in use. Which could be a contributing factor?",
      options: [
        { id: 'A', text: "The serverless functions are continuously triggered by unintended events" },
        { id: 'B', text: "The server hardware is outdated" },
        { id: 'C', text: "The load balancer is misconfigured" },
        { id: 'D', text: "The organization lacks a Content Delivery Network (CDN)" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q55',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech wants to ensure remote employees follow best security practices when working from home. The security team is drafting guidelines for remote work. What should be the primary focus of these guidelines?",
      options: [
        { id: 'A', text: "Outlining punitive measures for non-compliance" },
        { id: 'B', text: "Stating the company's legal position on remote work" },
        { id: 'C', text: "Recommending security measures for home networks and devices" },
        { id: 'D', text: "Dictating exact software and hardware specifications for remote workers" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q56',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Lisa, a security manager, finds there is no comprehensive document detailing the organization’s stance, expectations, and commitment to protecting information assets. Which should she prioritize creating?",
      options: [
        { id: 'A', text: "Incident Response Plan" },
        { id: 'B', text: "Information Security Policy" },
        { id: 'C', text: "Acceptable Use Policy" },
        { id: 'D', text: "Data Backup Strategy" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q57',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GlobalFin, a fintech company, is launching a new mobile banking app worldwide. To avoid legal complications, which legal external consideration should receive the most attention?",
      options: [
        { id: 'A', text: "Ensuring the app meets global data privacy laws" },
        { id: 'B', text: "Confirming the color scheme aligns with branding regulations in all countries" },
        { id: 'C', text: "Securing copyrights for all images used in the app" },
        { id: 'D', text: "Making sure the app's name isn't offensive in any language" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q58',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "In a microservices architecture, each service should be designed to perform a specific task and interact with others through well-defined interfaces. What principle is this referring to?",
      options: [
        { id: 'A', text: "Principle of Least Privilege" },
        { id: 'B', text: "Single Responsibility Principle" },
        { id: 'C', text: "Open-Closed Principle" },
        { id: 'D', text: "Zero Trust Model" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q59',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corp is defining roles for IT assets. They discuss the individual responsible for the data within a specific IT system and who is the main point of contact for decisions related to it. Which role best describes this individual?",
      options: [
        { id: 'A', text: "System administrator" },
        { id: 'B', text: "Data custodian" },
        { id: 'C', text: "System owner" },
        { id: 'D', text: "End-user" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q60',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An organization with a single physical network wants to separate finance traffic from HR traffic without creating new physical networks, ensuring packets do not mix. What should they implement?",
      options: [
        { id: 'A', text: "Air-gapped network" },
        { id: 'B', text: "DMZ (Demilitarized Zone)" },
        { id: 'C', text: "VLAN (Virtual Local Area Network)" },
        { id: 'D', text: "VPN (Virtual Private Network)" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q61',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A medium-sized company suffered a data breach when an attacker from a rival firm exploited a misconfigured firewall to access the company’s database. How is this threat actor best described?",
      options: [
        { id: 'A', text: "Internal actor leveraging physical access" },
        { id: 'B', text: "Internal actor abusing privileges" },
        { id: 'C', text: "External actor using social engineering" },
        { id: 'D', text: "External actor exploiting technical vulnerabilities" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q62',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A global corporation has experienced outages due to natural disasters and cyber attacks. The CEO wants IT infrastructure that can withstand or rapidly recover from disruptive events. Which best encapsulates this requirement?",
      options: [
        { id: 'A', text: "Adopting a Zero Trust Architecture" },
        { id: 'B', text: "Implementing a strict password policy" },
        { id: 'C', text: "Establishing a Business Continuity Plan (BCP) with emphasis on resilience" },
        { id: 'D', text: "Regularly updating firewall rules" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q63',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company has had multiple instances of unauthorized individuals gaining access to its office premises. Which preventive security control would be MOST effective in preventing unauthorized physical access?",
      options: [
        { id: 'A', text: "Implementing a log monitoring solution for network traffic" },
        { id: 'B', text: "Installing video surveillance cameras at all entry and exit points" },
        { id: 'C', text: "Conducting regular security awareness training for employees" },
        { id: 'D', text: "Implementing a multi-factor authentication system for network access" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q64',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After detecting an unauthorized intrusion into their network, a financial institution wants to implement a control that will restore compromised systems to a known good state. Which would be the MOST appropriate corrective control?",
      options: [
        { id: 'A', text: "Implementing Intrusion Detection Systems (IDS) across the network" },
        { id: 'B', text: "Frequently updating firewall rules" },
        { id: 'C', text: "Restoring systems from verified backups" },
        { id: 'D', text: "Enabling multi-factor authentication for users" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q65',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An organization processing classified information wants a network configuration where systems remain completely disconnected from unsecured networks and external connections. Which configuration is this?",
      options: [
        { id: 'A', text: "DMZ (Demilitarized Zone)" },
        { id: 'B', text: "VPN (Virtual Private Network)" },
        { id: 'C', text: "VLAN (Virtual Local Area Network)" },
        { id: 'D', text: "Air-gapped network" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q66',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A small business detected unauthorized access to its website after the attacker used default login credentials. What level of sophistication and capability does this attack suggest about the threat actor?",
      options: [
        { id: 'A', text: "Script kiddie with basic skills" },
        { id: 'B', text: "Expert attacker leveraging advanced techniques" },
        { id: 'C', text: "Nation-state actor with strategic objectives" },
        { id: 'D', text: "Organized crime syndicate targeting high-value assets" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q67',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "To discourage cybercriminals from targeting their online storefront, an e-commerce company is considering security measures. Which of the following would act MOST effectively as a deterrent control?",
      options: [
        { id: 'A', text: "Displaying a seal for third-party security certifications on the website" },
        { id: 'B', text: "Using a Web Application Firewall (WAF)" },
        { id: 'C', text: "Conducting monthly vulnerability assessments" },
        { id: 'D', text: "Storing customer data in encrypted databases" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q68',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A system administrator is setting up an authentication system for a new web application. Which security control falls under the technical category and ensures users prove their identity before gaining access?",
      options: [
        { id: 'A', text: "Implementing a security awareness training program" },
        { id: 'B', text: "Conducting a background check for new employees" },
        { id: 'C', text: "Using multi-factor authentication" },
        { id: 'D', text: "Establishing a clean desk policy" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q69',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberFirm updated their server OS for new features and patches. They previously established and deployed a secure baseline. What should they do NEXT to ensure continued security?",
      options: [
        { id: 'A', text: "Conduct a complete system reboot for all servers" },
        { id: 'B', text: "Re-deploy the same baseline without any modifications" },
        { id: 'C', text: "Update the secure baseline to include new configurations and then deploy it" },
        { id: 'D', text: "Implement a new firewall rule for the servers" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q70',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A cybersecurity analyst notices a series of sophisticated, coordinated, and well-funded attacks against critical infrastructure systems in their country with clear geopolitical objectives. Which type of threat actor is MOST likely responsible?",
      options: [
        { id: 'A', text: "Organized crime syndicates" },
        { id: 'B', text: "Script kiddies" },
        { id: 'C', text: "Insider threat" },
        { id: 'D', text: "Nation-state" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q71',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company is preparing for a Black Friday sale and expects a surge in web traffic. To ensure systems remain responsive, which strategy would be MOST effective?",
      options: [
        { id: 'A', text: "Increasing password complexity for all users" },
        { id: 'B', text: "Limiting the number of products on sale" },
        { id: 'C', text: "Implementing a content delivery network (CDN)" },
        { id: 'D', text: "Conducting a yearly security audit" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q72',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alice wants to access a restricted online portal. The portal asks her to enter a unique username and a secret passphrase only she should know. What security concept is the portal employing?",
      options: [
        { id: 'A', text: "Authorization" },
        { id: 'B', text: "Accounting" },
        { id: 'C', text: "Multifactor authentication" },
        { id: 'D', text: "Authentication" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q73',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a routine check, IT discovers several employees left their computers on and unattended during lunch. Which operational security control can help mitigate the risk associated with this behavior?",
      options: [
        { id: 'A', text: "Implementing biometric authentication" },
        { id: 'B', text: "Enforcing a strict password policy" },
        { id: 'C', text: "Deploying an automatic screen lock after inactivity" },
        { id: 'D', text: "Implementing a secure coding practice" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q74',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A retail company suffered a breach where attackers encrypted all point-of-sale systems and demanded payment in cryptocurrency to decrypt them. What motivation is most evident behind this attack?",
      options: [
        { id: 'A', text: "Protesting against the company's environmental policies" },
        { id: 'B', text: "Financial gain through ransom" },
        { id: 'C', text: "Espionage to understand the company's supply chain" },
        { id: 'D', text: "Seeking a reputation boost by showing off technical skills" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q75',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "To minimize data breaches from malware, a company wants a control to prevent malicious software from executing on company devices. Which would be the BEST preventive control?",
      options: [
        { id: 'A', text: "Deploying a Network Intrusion Detection System (NIDS)" },
        { id: 'B', text: "Regularly backing up critical data" },
        { id: 'C', text: "Installing an antivirus software with real-time scanning" },
        { id: 'D', text: "Performing a forensic analysis after a security incident" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
  
    // --- Questions 76 - 100 ---
  
    {
      id: 'ed1-q76',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a service outage, a hospital’s IT team reviews the availability of its patient record system and wants it to remain operational even during hardware failures. Which consideration is MOST relevant?",
      options: [
        { id: 'A', text: "Implementing database mirroring" },
        { id: 'B', text: "Regularly updating the system's antivirus definitions" },
        { id: 'C', text: "Using strong encryption for data at rest" },
        { id: 'D', text: "Conducting penetration testing on the system" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q77',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An environmental NGO’s website was hacked and replaced with a message criticizing their recent anti-deforestation campaign and promoting responsible forestry. Which type of threat actor is MOST likely behind this incident?",
      options: [
        { id: 'A', text: "Ransomware gang" },
        { id: 'B', text: "Organized crime syndicate" },
        { id: 'C', text: "Hacktivist" },
        { id: 'D', text: "Advanced Persistent Threat (APT)" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q78',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A government agency’s communication platforms were breached. The intruders silently monitored diplomatic communications for an extended period without stealing data or causing disruptions. What was the likely motivation?",
      options: [
        { id: 'A', text: "To gain financial benefits from insider trading" },
        { id: 'B', text: "Espionage to understand and anticipate diplomatic moves" },
        { id: 'C', text: "Disgruntlement of an internal employee" },
        { id: 'D', text: "An attempt to expand their cybercriminal network" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q79',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During onboarding, new employees must read and acknowledge company policies. HR wants employees aware of their responsibilities when using company devices and internet resources. Which policy should be included?",
      options: [
        { id: 'A', text: "Password Complexity Policy" },
        { id: 'B', text: "Data Classification Policy" },
        { id: 'C', text: "Acceptable Use Policy (AUP)" },
        { id: 'D', text: "Vendor Management Policy" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q80',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "WhiteCape Healthcare, an international provider, has many EU citizens in its patient database and is implementing a new system to improve physician access. Which regulatory requirement should they pay particular attention to when granting physicians access to EU patient data?",
      options: [
        { id: 'A', text: "Ensure data is only accessed for tax reporting purposes" },
        { id: 'B', text: "Acquire explicit consent from patients before sharing data" },
        { id: 'C', text: "Encrypt all data using a proprietary algorithm" },
        { id: 'D', text: "Store data in a physical server located within the EU" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q81',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An enterprise is deploying IoT-based security cameras across multiple offices. As lead security professional, what recommendation would you prioritize to establish a secure baseline for these devices?",
      options: [
        { id: 'A', text: "Setting the devices to public mode so all employees can access the feed" },
        { id: 'B', text: "Regularly updating the device firmware to patch known vulnerabilities" },
        { id: 'C', text: "Enabling Universal Plug and Play (UPnP) for easy connectivity" },
        { id: 'D', text: "Using the same password for all cameras for ease of management" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q82',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A robotics company is developing an autonomous vehicle that relies on a Real-Time Operating System (RTOS). To establish a secure baseline for this RTOS, what should the team prioritize?",
      options: [
        { id: 'A', text: "Installing a robust antivirus software" },
        { id: 'B', text: "Enabling all features for maximum functionality" },
        { id: 'C', text: "Regularly backing up the RTOS data to the cloud" },
        { id: 'D', text: "Minimizing the number of services and open ports" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q83',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After an incident of vandalism, a corporate building wants security controls that dissuade potential perpetrators. Which would serve BEST as a deterrent control?",
      options: [
        { id: 'A', text: "Encrypting all stored data" },
        { id: 'B', text: "Installing biometric access controls on all entrances" },
        { id: 'C', text: "Implementing regular data backups" },
        { id: 'D', text: "Placing visible security signage indicating 24/7 surveillance" }
      ],
      correctOptionId: 'D',
      explanation: "Correct answer: D."
    },
    {
      id: 'ed1-q84',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "The finance department found unauthorized transactions originating from an employee’s workstation. The employee bypassed company policies to make unauthorized investments using company funds. How can this threat actor be best categorized?",
      options: [
        { id: 'A', text: "External actor leveraging malware" },
        { id: 'B', text: "External actor exploiting vulnerabilities" },
        { id: 'C', text: "Internal actor with direct access" },
        { id: 'D', text: "Internal actor with indirect access" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q85',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a series of cyberattacks, BetaTech standardized configurations across its server fleet and established a secure baseline configuration. What should be the NEXT step to ensure servers conform to this new baseline?",
      options: [
        { id: 'A', text: "Frequently conduct vulnerability scanning on all servers" },
        { id: 'B', text: "Introduce biometric authentication for server access" },
        { id: 'C', text: "Deploy the secure baseline across all servers" },
        { id: 'D', text: "Monitor network traffic to detect anomalies" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q86',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "ClearView Industries wants employees to choose their own devices for work while the organization retains control over configurations and applications. Which deployment model is MOST appropriate?",
      options: [
        { id: 'A', text: "Bring Your Own Device (BYOD)" },
        { id: 'B', text: "Choose Your Own Device (CYOD)" },
        { id: 'C', text: "Corporate-owned, Personally Enabled (COPE)" },
        { id: 'D', text: "Fixed Device Deployment (FDD)" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q87',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Company uses MDM to manage mobile devices. An employee lost their personal phone over the weekend. Which MDM feature should IT use to ensure sensitive company data on the lost phone isn’t accessed?",
      options: [
        { id: 'A', text: "Monitor the device's location" },
        { id: 'B', text: "Force update the device's apps" },
        { id: 'C', text: "Remote wipe the device" },
        { id: 'D', text: "Change the user's email password" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q88',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a major sports event, a broadcasting company’s streaming services were taken offline by a sudden surge in traffic, which continued for the duration of the event and then subsided. What was the most probable motivation behind this attack?",
      options: [
        { id: 'A', text: "Espionage to intercept sensitive communications" },
        { id: 'B', text: "To cause a service disruption during the sports event" },
        { id: 'C', text: "Data exfiltration for future ransom demands" },
        { id: 'D', text: "To gain unauthorized access and implant malware" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q89',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software development company is hosting applications in a multi-cloud environment and wants to harden its cloud infrastructure. Which is the BEST practice?",
      options: [
        { id: 'A', text: "Ensure all cloud storage buckets are publicly accessible for easier data sharing" },
        { id: 'B', text: "Apply consistent security configurations and policies across all cloud providers" },
        { id: 'C', text: "Use the same SSH key pairs across all cloud instances for uniformity" },
        { id: 'D', text: "Limit the use of Identity and Access Management (IAM) roles to senior staff only" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q90',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "RedFlare Solutions, a financial firm, is storing sensitive client data in a database. The CISO wants data to be unreadable even if intercepted during transmission or if storage is compromised. Which encryption standard best serves this requirement?",
      options: [
        { id: 'A', text: "Symmetric encryption using a shared key only" },
        { id: 'B', text: "Hashing the data with a one-way function" },
        { id: 'C', text: "Encrypting the entire database using transparent data encryption" },
        { id: 'D', text: "Storing the data in a proprietary format" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q91',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corporation is deploying a new wireless infrastructure in a newly acquired office building. The IT manager wants optimal wireless coverage. What should the IT team prioritize before installing access points?",
      options: [
        { id: 'A', text: "Purchase the most expensive wireless access points to ensure maximum range" },
        { id: 'B', text: "Conduct a site survey to determine the best locations for access points" },
        { id: 'C', text: "Deploy all access points near windows to enhance signal strength" },
        { id: 'D', text: "Ensure all users have 5GHz capable devices" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q92',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A client disputes having signed a digital contract. The service provider needs to prove the signature was from the client and hasn’t been tampered with. Which security concept is the provider relying on?",
      options: [
        { id: 'A', text: "Authentication" },
        { id: 'B', text: "Confidentiality" },
        { id: 'C', text: "Non-repudiation" },
        { id: 'D', text: "Access Control" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q93',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software company discovered a vulnerability in its popular application that allowed unauthorized access to user data. Before a patch was released, a group of hackers exploited the vulnerability only to notify users about it and did not misuse any data. What is the most probable motivation?",
      options: [
        { id: 'A', text: "Financial gain by selling the data" },
        { id: 'B', text: "Political beliefs against the software company's operations" },
        { id: 'C', text: "Ethical concerns about user privacy and security" },
        { id: 'D', text: "Desire to disrupt the software company's services" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q94',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A healthcare institution suffered a breach where medical records of high-profile patients were extracted. The data was not sold or publicly disclosed, but individuals were extorted using their personal health information. What is the primary motivation behind this cyber attack?",
      options: [
        { id: 'A', text: "Political activism to expose vulnerabilities in healthcare" },
        { id: 'B', text: "Personal animosity targeting the healthcare institution" },
        { id: 'C', text: "Financial gain through targeted extortion" },
        { id: 'D', text: "Spreading malware and expanding the botnet" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q95',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company wants to ensure that security incidents are detected and addressed as quickly as possible by on-duty personnel. Which operational security control would be BEST to implement?",
      options: [
        { id: 'A', text: "Deploying a Network Intrusion Prevention System (NIPS)" },
        { id: 'B', text: "Establishing a 24/7 Security Operations Center (SOC)" },
        { id: 'C', text: "Creating a company-wide security policy" },
        { id: 'D', text: "Implementing end-to-end data encryption" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q96',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechHive Inc. reviews its password policy and finds that users make minimal changes when passwords are reset. Which standard should be integrated to ensure passwords become more complex and unique over time?",
      options: [
        { id: 'A', text: "Password history retention" },
        { id: 'B', text: "Password expiration period" },
        { id: 'C', text: "Account lockout duration" },
        { id: 'D', text: "Maximum password age" }
      ],
      correctOptionId: 'A',
      explanation: "Correct answer: A."
    },
    {
      id: 'ed1-q97',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A medium-sized enterprise is concerned about malware infections on office workstations. Which recommendation would BEST improve the security baseline of the workstations?",
      options: [
        { id: 'A', text: "Install multiple antivirus solutions to ensure maximum detection" },
        { id: 'B', text: "Set up screensavers with cyber hygiene tips to educate users" },
        { id: 'C', text: "Disable unnecessary services and ports on the workstations" },
        { id: 'D', text: "Frequently change the desktop wallpaper to prevent monotony" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q98',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a significant merger between two large corporations, a comprehensive risk assessment was conducted to identify potential security gaps within the combined infrastructure. This assessment was exclusive to the merger and not planned to be repeated. What type of risk assessment was this?",
      options: [
        { id: 'A', text: "Recurring" },
        { id: 'B', text: "Continuous" },
        { id: 'C', text: "One-time" },
        { id: 'D', text: "Dynamic" }
      ],
      correctOptionId: 'C',
      explanation: "Correct answer: C."
    },
    {
      id: 'ed1-q99',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corporation faced a major power outage that affected their primary data center. There was no clear guidance on steps to maintain or quickly restore business operations. Which policy should XYZ prioritize implementing?",
      options: [
        { id: 'A', text: "Data Classification Policy" },
        { id: 'B', text: "Business Continuity Policy" },
        { id: 'C', text: "Acceptable Use Policy" },
        { id: 'D', text: "Network Segmentation Strategy" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    },
    {
      id: 'ed1-q100',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberFleet Inc. relies heavily on a third-party library and has just heard of a newly discovered vulnerability in it. The security team quickly gathers to understand and analyze the potential risks. This spontaneous assessment is best described as:",
      options: [
        { id: 'A', text: "Routine" },
        { id: 'B', text: "Ad hoc" },
        { id: 'C', text: "Scheduled" },
        { id: 'D', text: "Benchmark" }
      ],
      correctOptionId: 'B',
      explanation: "Correct answer: B."
    }
  ],

  // Exam 2
  // Exam 2
[
    {
      id: 'ed2-q101',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corp is implementing a new vulnerability scanning solution. The security team wants a solution that does not require any software to be installed on the target machines but can still identify vulnerabilities. Which type of vulnerability scanning solution should they choose?",
      options: [
        { id: 'A', text: "Host-based Intrusion Detection System (HIDS)" },
        { id: 'B', text: "Agentless Vulnerability Scanner" },
        { id: 'C', text: "Client-based Vulnerability Scanner" },
        { id: 'D', text: "Host-based Intrusion Prevention System (HIPS)" }
      ],
      correctOptionId: 'B',
      explanation: "An agentless vulnerability scanner does not require any software to be installed on target systems and remotely scans them for known vulnerabilities."
    },
    {
      id: 'ed2-q102',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "FinCorp has adopted a framework where every device and user inside the organization’s network is treated as if they were outside the perimeter, requiring rigorous verification even for internal requests. Which security paradigm has FinCorp implemented?",
      options: [
        { id: 'A', text: "Demilitarized Zone (DMZ)" },
        { id: 'B', text: "Network Segmentation" },
        { id: 'C', text: "Intrusion Detection System (IDS)" },
        { id: 'D', text: "Zero Trust" }
      ],
      correctOptionId: 'D',
      explanation: "Zero Trust is a security model that assumes no inherent trust based on network location and requires strict verification for every access request."
    },
    {
      id: 'ed2-q103',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An art gallery wants to detect movement in an open courtyard with varying temperature conditions. Which sensor is MOST appropriate to ensure consistent motion detection?",
      options: [
        { id: 'A', text: "Thermal imaging sensors" },
        { id: 'B', text: "Pressure-sensitive mats" },
        { id: 'C', text: "Ultrasonic detectors" },
        { id: 'D', text: "Microwave motion detectors" }
      ],
      correctOptionId: 'D',
      explanation: "Microwave motion detectors create an invisible detection zone using microwave beams and are less affected by ambient temperature changes, making them suitable for open areas."
    },
    {
      id: 'ed2-q104',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureNet is implementing an Intrusion Detection System (IDS) for an enterprise client. Where should the IDS be placed for optimal detection of malicious activities?",
      options: [
        { id: 'A', text: "Before the perimeter firewall to capture all inbound traffic" },
        { id: 'B', text: "Between the perimeter firewall and the internal network" },
        { id: 'C', text: "Inside the DMZ to monitor only external service requests" },
        { id: 'D', text: "Adjacent to each workstation for personalized security" }
      ],
      correctOptionId: 'B',
      explanation: "Placing the IDS between the firewall and the internal network lets it inspect filtered traffic, balancing visibility and reduced false positives."
    },
    {
      id: 'ed2-q105',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AcmeBank’s business impact analysis shows it can tolerate a maximum downtime of 4 hours for its online banking system before significant losses occur. Which concept best describes this 4-hour period?",
      options: [
        { id: 'A', text: "Recovery Point Objective (RPO)" },
        { id: 'B', text: "Maximum Tolerable Downtime (MTD)" },
        { id: 'C', text: "Recovery Time Objective (RTO)" },
        { id: 'D', text: "Time To Restore (TTR)" }
      ],
      correctOptionId: 'C',
      explanation: "Recovery Time Objective (RTO) is the targeted duration to restore a system after disruption to avoid unacceptable impact; here, 4 hours."
    },
    {
      id: 'ed2-q106',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial company wants to intercept and inspect web traffic to prevent users from accessing malicious sites or downloading malware, using an intermediary for client requests. What should they implement?",
      options: [
        { id: 'A', text: "Network IDS" },
        { id: 'B', text: "VPN Concentrator" },
        { id: 'C', text: "Proxy server" },
        { id: 'D', text: "Jump server" }
      ],
      correctOptionId: 'C',
      explanation: "A proxy server acts as an intermediary for web requests and can filter, cache, and inspect traffic for security."
    },
    {
      id: 'ed2-q107',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A user receives an SMS claiming to be from her bank, urging her to click a link and verify account details. Which type of attack is this most likely?",
      options: [
        { id: 'A', text: "Smishing" },
        { id: 'B', text: "Vishing" },
        { id: 'C', text: "Bluejacking" },
        { id: 'D', text: "Bluesnarfing" }
      ],
      correctOptionId: 'A',
      explanation: "Smishing is phishing via SMS, tricking users into divulging sensitive information through text messages."
    },
    {
      id: 'ed2-q108',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jane discovers that a device is flooding a network switch’s MAC table with addresses, causing the switch to broadcast traffic and slowing the network. What type of attack is this?",
      options: [
        { id: 'A', text: "Distributed Denial of Service (DDoS)" },
        { id: 'B', text: "ARP poisoning" },
        { id: 'C', text: "MAC flooding" },
        { id: 'D', text: "DNS amplification" }
      ],
      correctOptionId: 'C',
      explanation: "MAC flooding fills a switch’s CAM/MAC table with bogus entries so it fails open and broadcasts, degrading performance."
    },
    {
      id: 'ed2-q109',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a major international sporting event, attackers target transportation, power, and telecom infrastructure with no ransom or financial motive. What is the most probable motivation?",
      options: [
        { id: 'A', text: "Financial gain from selling stolen data" },
        { id: 'B', text: "Ethical concerns about the event’s environmental impact" },
        { id: 'C', text: "Revenge against a particular athlete or team" },
        { id: 'D', text: "Desire to create disruption and chaos during the event" }
      ],
      correctOptionId: 'D',
      explanation: "Coordinated attacks on multiple infrastructures with no financial motive suggest a desire to cause disruption and chaos."
    },
    {
      id: 'ed2-q110',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A coffee shop with free Wi-Fi has had man-in-the-middle attacks reported. The owner wants a cryptographic protocol that balances security and performance for public users. Which should they use?",
      options: [
        { id: 'A', text: "Advanced Encryption Standard (AES)" },
        { id: 'B', text: "Wired Equivalent Privacy (WEP)" },
        { id: 'C', text: "RC4 Stream Cipher" },
        { id: 'D', text: "Open Wireless" }
      ],
      correctOptionId: 'A',
      explanation: "AES is a modern, efficient, and strong encryption standard that provides good security with reasonable performance."
    },
    {
      id: 'ed2-q111',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechHive Corp. plans to sell old servers but wants to ensure no retrievable data remains on the drives. Which method should they use?",
      options: [
        { id: 'A', text: "Simple Format" },
        { id: 'B', text: "Magnetic Wiping" },
        { id: 'C', text: "Physical Destruction" },
        { id: 'D', text: "Standard Defragmentation" }
      ],
      correctOptionId: 'B',
      explanation: "Magnetic wiping (degaussing) uses strong magnetic fields to erase data from magnetic media, making it irretrievable while preserving hardware for reuse."
    },
    {
      id: 'ed2-q112',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution reports an average of 3 phishing attacks per year. What is the Annualized Rate of Occurrence (ARO) for these attacks?",
      options: [
        { id: 'A', text: "0.33" },
        { id: 'B', text: "1" },
        { id: 'C', text: "3" },
        { id: 'D', text: "12" }
      ],
      correctOptionId: 'C',
      explanation: "ARO is the expected frequency per year; 3 incidents per year means an ARO of 3."
    },
    {
      id: 'ed2-q113',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFlow’s risk analysis shows that exploiting a critical vulnerability would cost $10,000 in repairs, $5,000 in compensation, and $15,000 in fines. What is the Single Loss Expectancy (SLE)?",
      options: [
        { id: 'A', text: "$10,000" },
        { id: 'B', text: "$20,000" },
        { id: 'C', text: "$30,000" },
        { id: 'D', text: "$50,000" }
      ],
      correctOptionId: 'C',
      explanation: "SLE is the cost of a single event: $10,000 + $5,000 + $15,000 = $30,000."
    },
    {
      id: 'ed2-q114',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Country A and Country B have a territorial dispute. Critical infrastructure in Country B suffers systematic cyberattacks with no ransom demands. What is the most probable motivation?",
      options: [
        { id: 'A', text: "Financial gain from market disruptions" },
        { id: 'B', text: "Ethical hackers testing vulnerabilities" },
        { id: 'C', text: "Disruption due to philosophical disagreements with Country B's policies" },
        { id: 'D', text: "Acts of cyberwarfare to weaken Country B's position" }
      ],
      correctOptionId: 'D',
      explanation: "Targeted attacks on critical infrastructure in a geopolitical dispute strongly indicate cyberwarfare intended to weaken the opponent."
    },
    {
      id: 'ed2-q115',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A corporation needs a monitoring tool that inspects network packets without introducing latency or altering traffic flow. Which device type should they consider?",
      options: [
        { id: 'A', text: "Active IDS" },
        { id: 'B', text: "Passive firewall" },
        { id: 'C', text: "Active firewall" },
        { id: 'D', text: "Passive IDS" }
      ],
      correctOptionId: 'D',
      explanation: "A passive IDS only monitors and analyzes traffic, without altering it or introducing latency."
    },
    {
      id: 'ed2-q116',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Claire finds a newly deployed database server still using default login credentials. What is the PRIMARY security risk?",
      options: [
        { id: 'A', text: "The database will not function optimally" },
        { id: 'B', text: "The server will need frequent patches" },
        { id: 'C', text: "Unauthorized individuals may easily gain access" },
        { id: 'D', text: "The server will consume more bandwidth" }
      ],
      correctOptionId: 'C',
      explanation: "Default credentials are widely known and easily discovered, allowing unauthorized users to log in."
    },
    {
      id: 'ed2-q117',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Mike notices an unauthorized device connected to the main network switch, attempting to capture network traffic. What attack is this device likely performing?",
      options: [
        { id: 'A', text: "Rogue access point" },
        { id: 'B', text: "VLAN hopping" },
        { id: 'C', text: "Port mirroring" },
        { id: 'D', text: "ARP poisoning" }
      ],
      correctOptionId: 'C',
      explanation: "Port mirroring duplicates traffic from one or more ports to another for monitoring, which an attacker could abuse to capture traffic."
    },
    {
      id: 'ed2-q118',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GreenValley Mall wants to create a protective barrier between a major road and its main entrance to ensure pedestrian safety and prevent unauthorized vehicular access. What should they implement?",
      options: [
        { id: 'A', text: "Reinforced Walls" },
        { id: 'B', text: "Metal Detectors" },
        { id: 'C', text: "Bollards" },
        { id: 'D', text: "Perimeter Fencing" }
      ],
      correctOptionId: 'C',
      explanation: "Bollards are strong vertical posts designed to block vehicles while allowing pedestrian flow, ideal for entrance protection."
    },
    {
      id: 'ed2-q119',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechCorp is categorizing project risks as Low, Medium, High, and Critical based on impact levels. Which type of risk analysis is this?",
      options: [
        { id: 'A', text: "Quantitative" },
        { id: 'B', text: "Statistical" },
        { id: 'C', text: "Qualitative" },
        { id: 'D', text: "Financial" }
      ],
      correctOptionId: 'C',
      explanation: "Qualitative risk analysis uses descriptive scales (e.g., Low/Medium/High) instead of numeric values."
    },
    {
      id: 'ed2-q120',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechBlitz wants to reduce its attack surface. Which measure is MOST effective?",
      options: [
        { id: 'A', text: "Increasing password length requirements" },
        { id: 'B', text: "Implementing regular vulnerability assessments" },
        { id: 'C', text: "Deactivating unused services and ports on servers" },
        { id: 'D', text: "Implementing a strict BYOD policy" }
      ],
      correctOptionId: 'C',
      explanation: "Disabling unused services and ports directly reduces the number of potential entry points for attackers."
    },
    {
      id: 'ed2-q121',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GreenTech, a data center company in a region with frequent power outages, wants to maintain security and continuity. What should be their PRIMARY power consideration?",
      options: [
        { id: 'A', text: "Using power-efficient servers" },
        { id: 'B', text: "Setting up solar panels" },
        { id: 'C', text: "Investing in redundant power supplies and UPS" },
        { id: 'D', text: "Running only during daylight hours" }
      ],
      correctOptionId: 'C',
      explanation: "Redundant power and UPS systems keep services running through outages, critical for availability and security."
    },
    {
      id: 'ed2-q122',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "WebFlix restores systems from a backup taken 6 hours prior to a data center outage, losing 6 hours of user interactions. What does this 6-hour gap represent?",
      options: [
        { id: 'A', text: "Recovery Time Objective (RTO)" },
        { id: 'B', text: "Maximum Tolerable Downtime (MTD)" },
        { id: 'C', text: "Recovery Duration Period (RDP)" },
        { id: 'D', text: "Recovery Point Objective (RPO)" }
      ],
      correctOptionId: 'D',
      explanation: "Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time; here, 6 hours."
    },
    {
      id: 'ed2-q123',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jane, a CISO, is decommissioning old servers and must destroy some data while retaining other data due to regulations. Which principle should she focus on?",
      options: [
        { id: 'A', text: "Minimum necessary principle" },
        { id: 'B', text: "Principle of least privilege" },
        { id: 'C', text: "Data retention policy" },
        { id: 'D', text: "Mandatory vacation policy" }
      ],
      correctOptionId: 'C',
      explanation: "A data retention policy defines how long data must be kept and how it should be stored or destroyed to meet regulatory and business requirements."
    },
    {
      id: 'ed2-q124',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company suffered a breach where network indicators were present but no alarms were raised. They now want a solution that monitors and actively stops malicious traffic. What should they deploy?",
      options: [
        { id: 'A', text: "Intrusion Detection System (IDS)" },
        { id: 'B', text: "Network Access Control (NAC)" },
        { id: 'C', text: "Proxy server" },
        { id: 'D', text: "Intrusion Prevention System (IPS)" }
      ],
      correctOptionId: 'D',
      explanation: "An IPS both detects malicious traffic and actively blocks or prevents it in real time."
    },
    {
      id: 'ed2-q125',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A cybersecurity analyst wants to deploy a system that looks vulnerable and enticing in order to study attackers’ TTPs without them realizing it’s a decoy. What should be used?",
      options: [
        { id: 'A', text: "Intrusion Detection System (IDS)" },
        { id: 'B', text: "Firewall" },
        { id: 'C', text: "Honeypot" },
        { id: 'D', text: "VPN Concentrator" }
      ],
      correctOptionId: 'C',
      explanation: "A honeypot is a decoy system intentionally made to look vulnerable so attackers can be observed safely."
    },
    {
      id: 'ed2-q126',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureNet Corp. needs secure connectivity between a new branch office and the main office. Which solution BEST provides this?",
      options: [
        { id: 'A', text: "Clear line of sight for wireless antennas" },
        { id: 'B', text: "Virtual Private Network (VPN) between sites" },
        { id: 'C', text: "Increased public internet bandwidth" },
        { id: 'D', text: "Multi-factor authentication for all users" }
      ],
      correctOptionId: 'B',
      explanation: "A site-to-site VPN provides encrypted, secure communication over untrusted networks between two locations."
    },
    {
      id: 'ed2-q127',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechVault wants a system that detects weight changes in a restricted floor area to alert on unauthorized access after burglars bypassed motion sensors. What is BEST?",
      options: [
        { id: 'A', text: "Ultrasonic motion detectors" },
        { id: 'B', text: "Pressure-sensitive floor mats" },
        { id: 'C', text: "CCTV cameras with facial recognition" },
        { id: 'D', text: "Glass break sensors" }
      ],
      correctOptionId: 'B',
      explanation: "Pressure-sensitive floor mats trigger alerts when weight is applied, ideal for detecting footsteps in restricted zones."
    },
    {
      id: 'ed2-q128',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SafeMed uses a life-saving FDA-regulated medical device with an unpatchable software vulnerability. How should they address the security risk?",
      options: [
        { id: 'A', text: "Disconnect the device from all networks" },
        { id: 'B', text: "Inform patients and let them decide" },
        { id: 'C', text: "Implement network segmentation and strict access control" },
        { id: 'D', text: "Return the device for a refund" }
      ],
      correctOptionId: 'C',
      explanation: "Isolating the device via network segmentation and tightly controlling access reduces exploitation risk while maintaining functionality."
    },
    {
      id: 'ed2-q129',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A university wants wireless clients authenticated against a central server with encrypted communication between APs and that server. What should they implement?",
      options: [
        { id: 'A', text: "WPA3 with SAE" },
        { id: 'B', text: "WPA2-Personal with AES" },
        { id: 'C', text: "WPA2-Enterprise with RADIUS" },
        { id: 'D', text: "Open wireless with VPN" }
      ],
      correctOptionId: 'C',
      explanation: "WPA2-Enterprise with RADIUS provides centralized authentication and encrypts traffic between AP and RADIUS server."
    },
    {
      id: 'ed2-q130',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechHaus wants to detect human intruders in server rooms after hours based on body heat, even in complete darkness. What should they deploy?",
      options: [
        { id: 'A', text: "CCTV cameras with LED lights" },
        { id: 'B', text: "Ultrasonic motion sensors" },
        { id: 'C', text: "Infrared (IR) sensors" },
        { id: 'D', text: "RFID badge readers at the entrance" }
      ],
      correctOptionId: 'C',
      explanation: "Infrared sensors detect infrared radiation (heat) from the human body, allowing detection in complete darkness."
    },
    {
      id: 'ed2-q131',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureTech Corp wants to ensure only one person can enter at a time, even if multiple people attempt to tailgate on one badge. What should they use?",
      options: [
        { id: 'A', text: "CCTV Cameras" },
        { id: 'B', text: "Mantrap" },
        { id: 'C', text: "Biometric Scanners" },
        { id: 'D', text: "Motion Detectors" }
      ],
      correctOptionId: 'B',
      explanation: "A mantrap (access control vestibule) uses two interlocking doors to physically enforce single-person entry."
    },
    {
      id: 'ed2-q132',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An enterprise wants its firewall to automatically allow traffic if it malfunctions, to ensure business continuity. Which failure mode should be implemented?",
      options: [
        { id: 'A', text: "Fail-safe" },
        { id: 'B', text: "Fail-over" },
        { id: 'C', text: "Fail-closed" },
        { id: 'D', text: "Fail-open" }
      ],
      correctOptionId: 'D',
      explanation: "Fail-open means that on failure, the device defaults to allowing traffic, prioritizing availability over security."
    },
    {
      id: 'ed2-q133',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DataFlow Corp.’s CEO wants a defined limit on the level of acceptable risk, especially regarding financial loss. What should be defined in the risk register?",
      options: [
        { id: 'A', text: "Risk Owner Assignment" },
        { id: 'B', text: "Key Risk Indicator (KRI)" },
        { id: 'C', text: "Risk Impact Analysis" },
        { id: 'D', text: "Risk Threshold" }
      ],
      correctOptionId: 'D',
      explanation: "A risk threshold sets the maximum level of risk an organization is willing to tolerate."
    },
    {
      id: 'ed2-q134',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A healthcare provider wants to ensure anomalies or malicious activities in the network are immediately detected and alerted. Which system should they primarily consider?",
      options: [
        { id: 'A', text: "Intrusion Prevention System (IPS)" },
        { id: 'B', text: "Intrusion Detection System (IDS)" },
        { id: 'C', text: "DHCP server" },
        { id: 'D', text: "VPN concentrator" }
      ],
      correctOptionId: 'B',
      explanation: "An IDS monitors traffic and system activity to detect and alert on malicious behavior or policy violations."
    },
    {
      id: 'ed2-q135',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "BioGen Inc. wants to add a human element to its lab security that can evaluate and respond to various situations with judgment. What should they implement?",
      options: [
        { id: 'A', text: "Biometric locks" },
        { id: 'B', text: "Security guards" },
        { id: 'C', text: "Access control vestibule" },
        { id: 'D', text: "AI-driven security cameras" }
      ],
      correctOptionId: 'B',
      explanation: "Security guards provide human judgment and flexible response that technology alone cannot match."
    },
    {
      id: 'ed2-q136',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "ExamsDigest Corp compared its current security posture to a desired future state and identified discrepancies. What approach is this?",
      options: [
        { id: 'A', text: "Vulnerability Assessment" },
        { id: 'B', text: "Penetration Testing" },
        { id: 'C', text: "Gap Analysis" },
        { id: 'D', text: "Threat Modeling" }
      ],
      correctOptionId: 'C',
      explanation: "Gap analysis compares current vs. desired state to identify what’s missing or needs improvement."
    },
    {
      id: 'ed2-q137',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sophia receives a phone call from someone claiming to be IT, asking for her login details for a 'critical update.' IT later confirms no such call was made. What type of attack is this?",
      options: [
        { id: 'A', text: "Vishing" },
        { id: 'B', text: "Phishing" },
        { id: 'C', text: "SQL Injection" },
        { id: 'D', text: "Cross-Site Request Forgery (CSRF)" }
      ],
      correctOptionId: 'A',
      explanation: "Vishing is voice phishing—fraudulent attempts to gain information via phone calls."
    },
    {
      id: 'ed2-q138',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Before purchasing cheaper workstations from a lesser-known vendor, what should be the PRIMARY security consideration?",
      options: [
        { id: 'A', text: "Whether the vendor offers a longer warranty period" },
        { id: 'B', text: "The aesthetics and design of the workstations" },
        { id: 'C', text: "The vendor's adherence to industry security standards and practices" },
        { id: 'D', text: "The amount of training required for IT staff" }
      ],
      correctOptionId: 'C',
      explanation: "Ensuring the vendor follows industry security standards minimizes the risk of introducing insecure hardware."
    },
    {
      id: 'ed2-q139',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An employee downloads a seemingly benign PDF from a vendor’s site. After opening it, the IDS reports suspicious activity originating from that workstation. What did the PDF most likely contain?",
      options: [
        { id: 'A', text: "Watering Hole Attack" },
        { id: 'B', text: "Malicious Macro" },
        { id: 'C', text: "SQL Injection" },
        { id: 'D', text: "Credential Harvesting" }
      ],
      correctOptionId: 'B',
      explanation: "Documents can contain embedded macros that execute malicious actions when opened."
    },
    {
      id: 'ed2-q140',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A rapidly growing e-commerce platform experiences intermittent downtime during sales. To ensure high availability and even traffic distribution, which network appliance should be deployed?",
      options: [
        { id: 'A', text: "Intrusion Detection System (IDS)" },
        { id: 'B', text: "VPN concentrator" },
        { id: 'C', text: "Load balancer" },
        { id: 'D', text: "Proxy server" }
      ],
      correctOptionId: 'C',
      explanation: "A load balancer distributes client requests across multiple servers to prevent any single server from being overwhelmed."
    },
    {
      id: 'ed2-q141',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFusion Inc. decides to pursue aggressive growth by entering new, untested markets and launching cutting-edge products despite significant risks. How would you classify their risk appetite?",
      options: [
        { id: 'A', text: "Conservative" },
        { id: 'B', text: "Expansionary" },
        { id: 'C', text: "Neutral" },
        { id: 'D', text: "Risk-averse" }
      ],
      correctOptionId: 'B',
      explanation: "Expansionary risk appetite accepts higher risks in pursuit of higher rewards and rapid growth."
    },
    {
      id: 'ed2-q142',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alex finds an unfamiliar USB in the parking lot and plugs it into his workstation. Malware immediately tries to execute. What type of attack is this?",
      options: [
        { id: 'A', text: "Man-in-the-Middle Attack" },
        { id: 'B', text: "Evil Twin" },
        { id: 'C', text: "Spear Phishing" },
        { id: 'D', text: "USB Drop Attack" }
      ],
      correctOptionId: 'D',
      explanation: "A USB drop attack relies on victims plugging in intentionally 'lost' malicious USB drives."
    },
    {
      id: 'ed2-q143',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company facing XSS and SQL injection attacks wants a solution that protects at the application layer. Which firewall type is most appropriate?",
      options: [
        { id: 'A', text: "Stateful Packet Inspection Firewall" },
        { id: 'B', text: "Proxy Firewall" },
        { id: 'C', text: "Network Layer Firewall" },
        { id: 'D', text: "Web Application Firewall (WAF)" }
      ],
      correctOptionId: 'D',
      explanation: "A WAF is specifically designed to protect web applications against attacks like XSS and SQL injection."
    },
    {
      id: 'ed2-q144',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution wants to ensure only authorized devices can connect to its wired network using credential or certificate-based port authentication. Which protocol should they use?",
      options: [
        { id: 'A', text: "SNMPv3" },
        { id: 'B', text: "SSL/TLS" },
        { id: 'C', text: "802.1X EAP" },
        { id: 'D', text: "DHCP" }
      ],
      correctOptionId: 'C',
      explanation: "802.1X with EAP provides port-based network access control using credentials or digital certificates."
    },
    {
      id: 'ed2-q145',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A new branch office needs a network security solution that can be rapidly deployed with minimal configuration. Which option BEST fulfills this?",
      options: [
        { id: 'A', text: "Customized IPS tailored to the organization" },
        { id: 'B', text: "Zero-touch provisioning firewall" },
        { id: 'C', text: "Open-source firewall with extensive manual settings" },
        { id: 'D', text: "SIEM solution requiring manual log integration" }
      ],
      correctOptionId: 'B',
      explanation: "Zero-touch provisioning allows firewalls to auto-configure on deployment, enabling fast rollout."
    },
    {
      id: 'ed2-q146',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFlow uses a single supplier for a crucial component in smart home devices. What is the MOST significant security risk?",
      options: [
        { id: 'A', text: "Harder price negotiation" },
        { id: 'B', text: "Product launch delays due to delivery issues" },
        { id: 'C', text: "A compromise at the supplier could affect all devices" },
        { id: 'D', text: "Dependence on the supplier’s warranty policies" }
      ],
      correctOptionId: 'C',
      explanation: "A single compromised supplier can introduce vulnerabilities into all products using that component."
    },
    {
      id: 'ed2-q147',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational company deploys a globally distributed network of honeypots that looks like a realistic environment to study coordinated multi-stage attacks. What is this setup called?",
      options: [
        { id: 'A', text: "Firewall Cluster" },
        { id: 'B', text: "Virtual LAN (VLAN)" },
        { id: 'C', text: "DDoS Prevention" },
        { id: 'D', text: "Honeynet" }
      ],
      correctOptionId: 'D',
      explanation: "A honeynet is a network of interconnected honeypots designed to appear like a real network to attackers."
    },
    {
      id: 'ed2-q148',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "David suspects company mobile devices still use cellular data in the office despite Wi-Fi. Which solution ensures devices use corporate Wi-Fi for data while on site?",
      options: [
        { id: 'A', text: "Enable Airplane mode on all devices" },
        { id: 'B', text: "Set up a Wi-Fi whitelist" },
        { id: 'C', text: "Implement an MDM policy to prioritize Wi-Fi" },
        { id: 'D', text: "Disable cellular antennas in the office area" }
      ],
      correctOptionId: 'C',
      explanation: "MDM policies can enforce network preferences and ensure Wi-Fi is used when available."
    },
    {
      id: 'ed2-q149',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A university wants wireless authentication that uses a centralized server, integrates with directory services, and provides strong mutual authentication with certificates. Which protocol should they consider?",
      options: [
        { id: 'A', text: "Pre-shared Key (PSK)" },
        { id: 'B', text: "LEAP" },
        { id: 'C', text: "EAP-TLS" },
        { id: 'D', text: "Shared Secret Challenge" }
      ],
      correctOptionId: 'C',
      explanation: "EAP-TLS uses certificates for strong mutual authentication and typically works with a RADIUS server and directory service."
    },
    {
      id: 'ed2-q150',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A university wants wireless authentication that uses a centralized server, integrates with directory services, and provides strong mutual authentication with certificates. Which protocol should they consider?",
      options: [
        { id: 'A', text: "Pre-shared Key (PSK)" },
        { id: 'B', text: "LEAP" },
        { id: 'C', text: "EAP-TLS" },
        { id: 'D', text: "Shared Secret Challenge" }
      ],
      correctOptionId: 'C',
      explanation: "EAP-TLS provides strong certificate-based mutual authentication and works with centralized RADIUS and directory infrastructure."
    },
    {
      id: 'ed2-q151',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberGuard LLC chooses not to pursue aggressive growth and instead maintains current market share, accepting minor risks but avoiding major disruptions. How is its risk appetite best described?",
      options: [
        { id: 'A', text: "Expansionary" },
        { id: 'B', text: "Neutral" },
        { id: 'C', text: "Conservative" },
        { id: 'D', text: "Aggressive" }
      ],
      correctOptionId: 'B',
      explanation: "Neutral risk appetite neither aggressively seeks risk nor avoids it entirely, aligning with a stable, maintenance-focused strategy."
    },
    {
      id: 'ed2-q152',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a series of attacks, CyberCorp deploys a system that looks like a normal part of the network but is isolated and monitored to detect and analyze malicious activity. What is this technology?",
      options: [
        { id: 'A', text: "Network segmentation" },
        { id: 'B', text: "Honeypot" },
        { id: 'C', text: "DMZ" },
        { id: 'D', text: "Sandboxing" }
      ],
      correctOptionId: 'B',
      explanation: "A honeypot is an isolated, monitored system designed to appear legitimate and attract attackers."
    },
    {
      id: 'ed2-q153',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Before partnering with TechVendor Inc., you want the most direct method to assess the robustness of their application against cyber threats. What should you do?",
      options: [
        { id: 'A', text: "Conduct internal security awareness training" },
        { id: 'B', text: "Review their past audit reports" },
        { id: 'C', text: "Implement strict firewall rules" },
        { id: 'D', text: "Perform a penetration test on their application" }
      ],
      correctOptionId: 'D',
      explanation: "Penetration testing simulates real attacks to directly assess an application’s security posture."
    },
    {
      id: 'ed2-q154',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After an XSS-related breach, a security analyst wants to ensure cookies are transmitted securely between browser and server. Which measure should be implemented?",
      options: [
        { id: 'A', text: "Storing cookies in the database" },
        { id: 'B', text: "Implementing the 'Secure' attribute for cookies" },
        { id: 'C', text: "Increasing cookie expiration time" },
        { id: 'D', text: "Base64 encoding cookie content" }
      ],
      correctOptionId: 'B',
      explanation: "The Secure attribute ensures cookies are only sent over HTTPS, protecting them from being sent in clear text."
    },
    {
      id: 'ed2-q155',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Before deploying a new software patch to production, the security team wants to safely execute and observe its behavior. Which method is MOST effective?",
      options: [
        { id: 'A', text: "Deploying the patch during a maintenance window" },
        { id: 'B', text: "Running the patch within a sandbox environment" },
        { id: 'C', text: "Conducting a code review of the patch" },
        { id: 'D', text: "Installing the patch on a virtual machine" }
      ],
      correctOptionId: 'B',
      explanation: "A sandbox isolates execution so behavior can be observed without risk to production systems."
    },
    {
      id: 'ed2-q156',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A new security analyst wants a list of all active servers, workstations, printers, switches, and routers on the network. Which activity provides this?",
      options: [
        { id: 'A', text: "Vulnerability Scanning" },
        { id: 'B', text: "Intrusion Detection" },
        { id: 'C', text: "Network Enumeration" },
        { id: 'D', text: "Penetration Testing" }
      ],
      correctOptionId: 'C',
      explanation: "Network enumeration identifies and lists devices and services on a network."
    },
    {
      id: 'ed2-q157',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Tech Enterprises sources components for a new product from various vendors. What is the MOST concerning security risk?",
      options: [
        { id: 'A', text: "Difficulty tracking warranties" },
        { id: 'B', text: "Increased assembly time" },
        { id: 'C', text: "Potential introduction of insecure or compromised components" },
        { id: 'D', text: "More purchase orders and paperwork" }
      ],
      correctOptionId: 'C',
      explanation: "Multiple supply-chain vendors increase the chance that one introduces compromised or insecure components."
    },
    {
      id: 'ed2-q158',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "John notices unauthorized devices connecting to the wireless network and discovers the access points use an old encryption standard that is easily compromised. Which is likely in use?",
      options: [
        { id: 'A', text: "WPA3" },
        { id: 'B', text: "WEP" },
        { id: 'C', text: "WPA2-PSK" },
        { id: 'D', text: "AES" }
      ],
      correctOptionId: 'B',
      explanation: "WEP is an outdated wireless encryption standard with well-known weaknesses and is easily cracked."
    },
    {
      id: 'ed2-q159',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After being fired, a former senior network administrator uses a backdoor he created to launch DDoS attacks against his former company. What is the most probable motivation?",
      options: [
        { id: 'A', text: "Ethical concerns about data handling" },
        { id: 'B', text: "Financial gain by selling access" },
        { id: 'C', text: "Desire for personal research" },
        { id: 'D', text: "Revenge against the company" }
      ],
      correctOptionId: 'D',
      explanation: "The timing and disruptive attacks following termination strongly indicate revenge as the motivation."
    },
    {
      id: 'ed2-q160',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechBank’s city-center branch is concerned about vehicular attacks on the facility. Which physical security measure specifically deters such attacks?",
      options: [
        { id: 'A', text: "Surveillance Cameras" },
        { id: 'B', text: "Bollards" },
        { id: 'C', text: "Access Badges" },
        { id: 'D', text: "Security Guards" }
      ],
      correctOptionId: 'B',
      explanation: "Bollards are physical barriers designed to stop or deter vehicles from approaching too closely."
    },
    {
      id: 'ed2-q161',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A high-security data center wants its authentication system to deny all access if it encounters an error. Which configuration is appropriate?",
      options: [
        { id: 'A', text: "Fail-open" },
        { id: 'B', text: "Fail-closed" },
        { id: 'C', text: "Fail-secure" },
        { id: 'D', text: "Fail-passive" }
      ],
      correctOptionId: 'B',
      explanation: "Fail-closed denies access on failure, which is appropriate for high-security areas."
    },
    {
      id: 'ed2-q162',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberSecure Inc. estimates that a breach of its main server would cause a direct financial loss of $500,000. Which metric does this estimate represent?",
      options: [
        { id: 'A', text: "Annual Rate of Occurrence (ARO)" },
        { id: 'B', text: "Total Cost of Ownership (TCO)" },
        { id: 'C', text: "Single Loss Expectancy (SLE)" },
        { id: 'D', text: "Annualized Loss Expectancy (ALE)" }
      ],
      correctOptionId: 'C',
      explanation: "SLE represents the expected monetary loss from a single occurrence of a risk event."
    },
    {
      id: 'ed2-q163',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Before deploying a new application, an e-commerce company wants to find code vulnerabilities that might lead to security risks, without executing the app. Which methodology should they use?",
      options: [
        { id: 'A', text: "Runtime application self-protection (RASP)" },
        { id: 'B', text: "Penetration testing on the live application" },
        { id: 'C', text: "Static code analysis" },
        { id: 'D', text: "User acceptance testing (UAT)" }
      ],
      correctOptionId: 'C',
      explanation: "Static analysis examines source or compiled code without execution to identify potential vulnerabilities."
    },
    {
      id: 'ed2-q164',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A bank branch installs an entry system that forces visitors through two separate authorization checks before entering the main premises. Which measure is this?",
      options: [
        { id: 'A', text: "Turnstiles" },
        { id: 'B', text: "Security Guards" },
        { id: 'C', text: "Access Control Vestibule" },
        { id: 'D', text: "Keycard Readers" }
      ],
      correctOptionId: 'C',
      explanation: "An access control vestibule (mantrap) enforces two-stage entry with separate checks."
    },
    {
      id: 'ed2-q165',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corporation implements a solution that constantly evaluates the threat landscape and alerts on changes in real time, allowing rapid adjustment of security posture. What type of risk assessment is this?",
      options: [
        { id: 'A', text: "One-time" },
        { id: 'B', text: "Periodic" },
        { id: 'C', text: "Dynamic" },
        { id: 'D', text: "Continuous" }
      ],
      correctOptionId: 'D',
      explanation: "Continuous risk assessment involves ongoing, real-time monitoring of risks and threats."
    },
    {
      id: 'ed2-q166',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security team estimates a 0.25 probability that a vulnerability will be exploited in the next year. What does this indicate?",
      options: [
        { id: 'A', text: "The vulnerability has a 1 in 4 chance of being exploited in the next year" },
        { id: 'B', text: "The vulnerability will certainly be exploited four times in the next year" },
        { id: 'C', text: "The vulnerability has been exploited 25 times in the past year" },
        { id: 'D', text: "Every fourth customer will exploit the vulnerability" }
      ],
      correctOptionId: 'A',
      explanation: "A probability of 0.25 equates to a 25% or 1-in-4 chance of the event occurring in that time frame."
    },
    {
      id: 'ed2-q167',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After an employee downloads and opens an image from an email, unusual network traffic is detected, though the image appears normal. What attack might this be?",
      options: [
        { id: 'A', text: "Image Steganography Malware" },
        { id: 'B', text: "Password Brute Force" },
        { id: 'C', text: "Phishing" },
        { id: 'D', text: "Port Scanning" }
      ],
      correctOptionId: 'A',
      explanation: "Steganography hides malicious code inside seemingly normal files, such as images."
    },
    {
      id: 'ed2-q168',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechSoft Corp is implementing an asset-tracking system. What is the PRIMARY security reason for maintaining an up-to-date hardware and software inventory?",
      options: [
        { id: 'A', text: "To ensure software licenses are renewed on time" },
        { id: 'B', text: "To identify and respond to unauthorized devices or software promptly" },
        { id: 'C', text: "To aid in procurement decisions" },
        { id: 'D', text: "To inform employees of available resources" }
      ],
      correctOptionId: 'B',
      explanation: "Accurate inventories enable quick detection of unauthorized or rogue assets that pose security risks."
    },
    {
      id: 'ed2-q169',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Acme Corp hires Zenith MSP for IT management. What is the PRIMARY security concern when using managed service providers (MSPs)?",
      options: [
        { id: 'A', text: "Increased costs from new technologies" },
        { id: 'B', text: "Difficulty ensuring consistent patch management" },
        { id: 'C', text: "Potential for unauthorized access to company resources" },
        { id: 'D', text: "Decreased IT staff morale due to outsourcing" }
      ],
      correctOptionId: 'C',
      explanation: "MSPs often hold elevated access; if compromised, they can provide attackers with broad access to client environments."
    },
    {
      id: 'ed2-q170',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Mike receives an instant message from 'Jessica' with a link, but he knows Jessica is on vacation and suspects the message is fake. What threat is this?",
      options: [
        { id: 'A', text: "Watering Hole Attack" },
        { id: 'B', text: "Man-in-the-Middle Attack" },
        { id: 'C', text: "IM Spoofing" },
        { id: 'D', text: "Side-channel Attack" }
      ],
      correctOptionId: 'C',
      explanation: "IM spoofing is sending messages that appear to come from a trusted contact to trick the recipient."
    },
    {
      id: 'ed2-q171',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A museum wants sensors in exhibit rooms to detect unauthorized movement after hours. The rooms have mixed air conditioning and external city noise. Which sensor is BEST suited?",
      options: [
        { id: 'A', text: "Acoustic sensors" },
        { id: 'B', text: "Glass break detectors" },
        { id: 'C', text: "Ultrasonic sensors" },
        { id: 'D', text: "Thermal imaging cameras" }
      ],
      correctOptionId: 'C',
      explanation: "Ultrasonic sensors use high-frequency sound waves, unaffected by normal ambient noise, to detect motion."
    },
    {
      id: 'ed2-q172',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company sees a 20% increase in abandoned carts and tracks this in its risk register. How should this metric be categorized?",
      options: [
        { id: 'A', text: "Risk Appetite" },
        { id: 'B', text: "Risk Mitigation Strategy" },
        { id: 'C', text: "Key Risk Indicator (KRI)" },
        { id: 'D', text: "Risk Tolerance Threshold" }
      ],
      correctOptionId: 'C',
      explanation: "A KRI is a metric that provides early warning of increasing risk exposure, such as abnormal user behavior."
    },
    {
      id: 'ed2-q173',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An IT security analyst receives an email from 'HR' with the company logo asking for personal details and social security number, but the email has spelling errors. What is this most likely?",
      options: [
        { id: 'A', text: "Business Email Compromise (BEC)" },
        { id: 'B', text: "Email bombing" },
        { id: 'C', text: "Email forwarding" },
        { id: 'D', text: "Phishing" }
      ],
      correctOptionId: 'D',
      explanation: "Phishing emails impersonate trusted entities to trick recipients into revealing sensitive information."
    },
    {
      id: 'ed2-q174',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechSoft Corp is relocating and is worried about after-hours threats in the context of cyber-espionage. Which option provides an immediate physical presence and deterrence at night?",
      options: [
        { id: 'A', text: "CCTV with motion detection" },
        { id: 'B', text: "Retinal scan at all entrances" },
        { id: 'C', text: "Security guard presence" },
        { id: 'D', text: "Reinforced doors and windows" }
      ],
      correctOptionId: 'C',
      explanation: "Security guards provide visible deterrence and can respond in real time to suspicious activity."
    },
    {
      id: 'ed2-q175',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational corporation with restricted data center access needs a centralized, secure way for admins to reach all data centers without direct workstation access. What should they implement?",
      options: [
        { id: 'A', text: "Setting up a DMZ" },
        { id: 'B', text: "Implementing a Jump server" },
        { id: 'C', text: "Deploying Active Directory" },
        { id: 'D', text: "Using a local Proxy" }
      ],
      correctOptionId: 'B',
      explanation: "A jump server (bastion host) serves as a controlled intermediary for admins to access restricted systems."
    },
    {
      id: 'ed2-q176',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GammaTech’s security team wants to examine an application’s code without executing it to identify vulnerabilities before deployment. Which method should they use?",
      options: [
        { id: 'A', text: "Penetration Testing" },
        { id: 'B', text: "Dynamic Analysis" },
        { id: 'C', text: "Static Analysis" },
        { id: 'D', text: "Fuzz Testing" }
      ],
      correctOptionId: 'C',
      explanation: "Static analysis inspects code or binaries without execution to find vulnerabilities early in development."
    },
    {
      id: 'ed2-q177',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A cloud-based SaaS company wants to ensure its infrastructure can handle a future influx of many users. Which approach BEST meets this scalability need?",
      options: [
        { id: 'A', text: "Implement a horizontal scaling strategy" },
        { id: 'B', text: "Introduce multi-factor authentication" },
        { id: 'C', text: "Deploy deep packet inspection tools" },
        { id: 'D', text: "Implement a centralized logging system" }
      ],
      correctOptionId: 'A',
      explanation: "Horizontal scaling adds more nodes/instances to handle greater load and is ideal for cloud scalability."
    },
    {
      id: 'ed2-q178',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "WebServ Corp finds that a server model fails on average once every 2000 hours and is then repaired. Which metric are they evaluating?",
      options: [
        { id: 'A', text: "Recovery Time Objective (RTO)" },
        { id: 'B', text: "Mean Time To Repair (MTTR)" },
        { id: 'C', text: "Mean Time Between Failures (MTBF)" },
        { id: 'D', text: "Recovery Point Objective (RPO)" }
      ],
      correctOptionId: 'C',
      explanation: "MTBF measures the average time between inherent failures of a system under normal operation."
    },
    {
      id: 'ed2-q179',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sarah downloads software and wants to verify it hasn’t been tampered with and comes from a trusted source. What should she check?",
      options: [
        { id: 'A', text: "The SSL certificate of the website" },
        { id: 'B', text: "The application's code signing certificate" },
        { id: 'C', text: "The application's open-source repositories" },
        { id: 'D', text: "The software's user reviews" }
      ],
      correctOptionId: 'B',
      explanation: "A valid code signing certificate confirms authenticity and integrity of the software package."
    },
    {
      id: 'ed2-q180',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A risk assessment concludes that the likelihood of a breach through an insecure API is 'High.' Which factor best explains this rating?",
      options: [
        { id: 'A', text: "The API has a known secure configuration and thorough testing" },
        { id: 'B', text: "Few records of similar breaches in the industry" },
        { id: 'C', text: "The API is publicly accessible and had several vulnerabilities reported in the last six months" },
        { id: 'D', text: "The cloud provider guarantees an SLA against any breach" }
      ],
      correctOptionId: 'C',
      explanation: "A public-facing API with a recent history of vulnerabilities significantly increases likelihood of exploitation."
    },
    {
      id: 'ed2-q181',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jenny, the CIO, wants every asset to have a clearly defined owner responsible for its security and maintenance. What is the MOST effective way to achieve this?",
      options: [
        { id: 'A', text: "Use automated discovery and assign by location" },
        { id: 'B', text: "Make department heads default owners of all department assets" },
        { id: 'C', text: "Conduct audits and have users claim ownership" },
        { id: 'D', text: "Introduce an Asset Management System logging ownership at procurement/assignment" }
      ],
      correctOptionId: 'D',
      explanation: "A formal Asset Management System records ownership from procurement onward, ensuring accountability."
    },
    {
      id: 'ed2-q182',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "New IoT devices are given unique key pairs so only authorized devices can connect to the corporate network. What system authentication approach is being used?",
      options: [
        { id: 'A', text: "Shared secret authentication" },
        { id: 'B', text: "Public key infrastructure (PKI)" },
        { id: 'C', text: "Token-based authentication" },
        { id: 'D', text: "Username and password authentication" }
      ],
      correctOptionId: 'B',
      explanation: "PKI uses public/private key pairs and certificates for system or device authentication."
    },
    {
      id: 'ed2-q183',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberCorp wants to assess vendors’ responsiveness to vulnerabilities after a breach. Which metric BEST measures patch timeliness?",
      options: [
        { id: 'A', text: "Frequency of software updates" },
        { id: 'B', text: "Vendor's quarterly financial reports" },
        { id: 'C', text: "Time between vulnerability disclosure and patch release" },
        { id: 'D', text: "Number of features added in last update" }
      ],
      correctOptionId: 'C',
      explanation: "The time from disclosure to patch release directly shows how quickly a vendor responds to security issues."
    },
    {
      id: 'ed2-q184',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company is setting up a secure communication channel and wants to ensure data originates from a legitimate system using digital certificates. Which system authentication method are they contemplating?",
      options: [
        { id: 'A', text: "Kerberos authentication" },
        { id: 'B', text: "Password-based authentication" },
        { id: 'C', text: "Certificate-based authentication" },
        { id: 'D', text: "Biometric-based authentication" }
      ],
      correctOptionId: 'C',
      explanation: "Certificate-based authentication uses digital certificates to validate system identity."
    },
    {
      id: 'ed2-q185',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech wants a comprehensive report of potential weaknesses in its network without exploiting them. Which option BEST meets this objective?",
      options: [
        { id: 'A', text: "Penetration test" },
        { id: 'B', text: "Vulnerability scan" },
        { id: 'C', text: "Red team assessment" },
        { id: 'D', text: "Port security" }
      ],
      correctOptionId: 'B',
      explanation: "Vulnerability scans identify and report vulnerabilities without actively exploiting them."
    },
    {
      id: 'ed2-q186',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Employees receive unauthorized file transfer requests via Bluetooth in the cafeteria. Which attack is MOST likely?",
      options: [
        { id: 'A', text: "Bluejacking" },
        { id: 'B', text: "ARP poisoning" },
        { id: 'C', text: "Bluesnarfing" },
        { id: 'D', text: "Evil Twin" }
      ],
      correctOptionId: 'A',
      explanation: "Bluejacking involves sending unsolicited messages or files over Bluetooth."
    },
    {
      id: 'ed2-q187',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A small business wants one network security device that handles firewalling, IDS, anti-malware, and content filtering. Which solution is most suitable?",
      options: [
        { id: 'A', text: "Network Intrusion Detection System (NIDS)" },
        { id: 'B', text: "Web Application Firewall (WAF)" },
        { id: 'C', text: "Unified Threat Management (UTM)" },
        { id: 'D', text: "Proxy Server" }
      ],
      correctOptionId: 'C',
      explanation: "UTM appliances combine multiple security functions (firewall, IDS/IPS, AV, content filtering) in a single device."
    },
    {
      id: 'ed2-q188',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Auditors find that NetSecure Corp is willing to take risks that can lead to up to a 10% profit decrease, but no more. What term describes this stance?",
      options: [
        { id: 'A', text: "Risk Avoidance" },
        { id: 'B', text: "Risk Transfer" },
        { id: 'C', text: "Risk Tolerance" },
        { id: 'D', text: "Risk Assessment" }
      ],
      correctOptionId: 'C',
      explanation: "Risk tolerance is the maximum level of risk an organization is willing to accept."
    },
    {
      id: 'ed2-q189',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureWeb LLC experienced two server breaches over five years. What is the Annualized Rate of Occurrence (ARO) for these breaches?",
      options: [
        { id: 'A', text: "0.2" },
        { id: 'B', text: "0.4" },
        { id: 'C', text: "2" },
        { id: 'D', text: "5" }
      ],
      correctOptionId: 'B',
      explanation: "ARO = number of events / years = 2 / 5 = 0.4 per year."
    },
    {
      id: 'ed2-q190',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DataCenter Inc., in an area prone to protests and vandalism, wants a visible first line of perimeter defense to deter intruders. What is MOST effective?",
      options: [
        { id: 'A', text: "Sliding Doors" },
        { id: 'B', text: "Security Cameras" },
        { id: 'C', text: "High-security Fencing" },
        { id: 'D', text: "Proximity Card Readers" }
      ],
      correctOptionId: 'C',
      explanation: "High-security fencing clearly marks and physically protects the perimeter as a first line of defense."
    },
    {
      id: 'ed2-q191',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution is shutting down a data center and wants to ensure data on storage devices is impossible to recover. Which method is MOST effective?",
      options: [
        { id: 'A', text: "Overwriting with zeros" },
        { id: 'B', text: "Standard Disk Format" },
        { id: 'C', text: "Physical Destruction" },
        { id: 'D', text: "Running a Disk Cleanup utility" }
      ],
      correctOptionId: 'C',
      explanation: "Physical destruction of media guarantees that data cannot be recovered."
    },
    {
      id: 'ed2-q192',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Maria receives a report listing open service ports on critical servers and wants to verify it. Which tool is BEST for validating the findings?",
      options: [
        { id: 'A', text: "Password cracker" },
        { id: 'B', text: "Port scanner" },
        { id: 'C', text: "Intrusion Detection System (IDS)" },
        { id: 'D', text: "Web application firewall" }
      ],
      correctOptionId: 'B',
      explanation: "Port scanners probe ports and report which are open and what services appear to be running."
    },
    {
      id: 'ed2-q193',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Acme Corp wants to restructure its network to separate areas with different trust levels. Which approach BEST achieves this?",
      options: [
        { id: 'A', text: "Implement VLANs based only on departments" },
        { id: 'B', text: "Set up a perimeter firewall between internal and external traffic" },
        { id: 'C', text: "Design network zones based on data sensitivity and access requirements" },
        { id: 'D', text: "Use a single flat network for simplicity" }
      ],
      correctOptionId: 'C',
      explanation: "Zoning based on data sensitivity and access separates different trust levels, improving internal segmentation."
    },
    {
      id: 'ed2-q194',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company wants its upgraded wireless infrastructure to use the most recent and secure encryption standard. What should be configured on the access points?",
      options: [
        { id: 'A', text: "WEP" },
        { id: 'B', text: "WPA" },
        { id: 'C', text: "WPA2" },
        { id: 'D', text: "WPA3" }
      ],
      correctOptionId: 'D',
      explanation: "WPA3 is the latest Wi-Fi security standard with improved encryption and protections over WPA2."
    },
    {
      id: 'ed2-q195',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech calculates ARO = 2 for a vulnerability and SLE = $50,000. What is the Annualized Loss Expectancy (ALE)?",
      options: [
        { id: 'A', text: "$10,000" },
        { id: 'B', text: "$100,000" },
        { id: 'C', text: "$25,000" },
        { id: 'D', text: "$1,000,000" }
      ],
      correctOptionId: 'B',
      explanation: "ALE = ARO × SLE = 2 × $50,000 = $100,000 per year."
    },
    {
      id: 'ed2-q196',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberSolutions Inc. finds it takes, on average, 4 hours from identifying a security breach to having it fully resolved. Which metric does this 4-hour timeframe describe?",
      options: [
        { id: 'A', text: "Recovery Time Objective (RTO)" },
        { id: 'B', text: "Recovery Point Objective (RPO)" },
        { id: 'C', text: "Mean Time Between Failures (MTBF)" },
        { id: 'D', text: "Mean Time To Repair (MTTR)" }
      ],
      correctOptionId: 'D',
      explanation: "MTTR is the average time needed to repair or resolve a failure once it has occurred."
    },
    {
      id: 'ed2-q197',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial application allows money transfers, and auditors find attackers can input SQL code into the account number field to manipulate the database. Which security technique should be implemented?",
      options: [
        { id: 'A', text: "Code obfuscation" },
        { id: 'B', text: "Input validation" },
        { id: 'C', text: "Encryption at rest" },
        { id: 'D', text: "Session timeout" }
      ],
      correctOptionId: 'B',
      explanation: "Proper input validation and sanitization prevent SQL injection and similar input-based attacks."
    },
    {
      id: 'ed2-q198',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GreenTech Inc. is selling old servers and wants to prove data was properly wiped. What should they provide the buyer?",
      options: [
        { id: 'A', text: "Receipt of sale" },
        { id: 'B', text: "Detailed server usage log" },
        { id: 'C', text: "Certificate of data sanitization" },
        { id: 'D', text: "Server user manual" }
      ],
      correctOptionId: 'C',
      explanation: "A certificate of data sanitization from a reputable service documents that secure erasure procedures were followed."
    },
    {
      id: 'ed2-q199',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A vulnerability assessment shows an exploit could allow access to 30% of stored patient data. Which concept does this 30% BEST describe?",
      options: [
        { id: 'A', text: "Threat likelihood" },
        { id: 'B', text: "Rate of occurrence" },
        { id: 'C', text: "Exposure factor" },
        { id: 'D', text: "Percentage of impacted patients" }
      ],
      correctOptionId: 'C',
      explanation: "Exposure factor is the percentage of asset value (or data) potentially lost if a risk is realized."
    },
    {
      id: 'ed2-q200',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GreenTech Industries, in a secluded area, has had theft and trespassing incidents and wants to deter unauthorized nighttime access to the perimeter. What is MOST effective?",
      options: [
        { id: 'A', text: "Installing infrared sensors" },
        { id: 'B', text: "Using bright perimeter lighting" },
        { id: 'C', text: "Deploying more guards inside" },
        { id: 'D', text: "Increasing the height of facility walls" }
      ],
      correctOptionId: 'B',
      explanation: "Bright perimeter lighting is a strong deterrent and improves visibility for cameras and guards."
    }
  ],

  // Exam 3
 // Exam 3
[
    {
      id: 'ed3-q1',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An international bank is setting up a new online portal for its customers to access their financial statements. Which measure should the bank implement to ensure that financial data in transit between the customer’s browser and the bank’s servers is kept confidential?",
      options: [
        { id: 'A', text: "Use file-level encryption for all financial statements" },
        { id: 'B', text: "Implement a Web Application Firewall (WAF)" },
        { id: 'C', text: "Use Secure Sockets Layer (SSL) or Transport Layer Security (TLS) for the portal" },
        { id: 'D', text: "Store all financial data in an encrypted database" }
      ],
      correctOptionId: 'C',
      explanation: "SSL/TLS is designed to secure data in transit between a client and server by encrypting the traffic, ensuring confidentiality while the data moves across the network."
    },
    {
      id: 'ed3-q2',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational organization with multiple branch offices is looking to simplify their WAN connectivity and reduce costs while ensuring that their inter-office data transfers remain secure. Which technology would best fit their needs?",
      options: [
        { id: 'A', text: "VLAN" },
        { id: 'B', text: "MPLS" },
        { id: 'C', text: "SD-WAN" },
        { id: 'D', text: "DMZ" }
      ],
      correctOptionId: 'C',
      explanation: "SD-WAN can securely connect sites over a mix of transports (MPLS, LTE, broadband) while simplifying WAN management and reducing costs by using cheaper internet links."
    },
    {
      id: 'ed3-q3',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "While setting up a new internal web application, Laura, a system administrator, decides to use a digital certificate for SSL/TLS encryption. Due to budget constraints, she can’t procure a certificate from a commercial Certificate Authority (CA). Which of the following would be a viable option for Laura to secure the application?",
      options: [
        { id: 'A', text: "Rely on plaintext HTTP for the application" },
        { id: 'B', text: "Obtain a certificate from a free Certificate Authority" },
        { id: 'C', text: "Generate a self-signed certificate" },
        { id: 'D', text: "Use a shared certificate from another application" }
      ],
      correctOptionId: 'C',
      explanation: "A self-signed certificate provides encryption without involving a CA and is often acceptable for internal apps where trust can be managed manually."
    },
    {
      id: 'ed3-q4',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A technology company’s new routers were found to contain malicious chips embedded during manufacturing. This incident most likely represents a vulnerability related to which supply chain aspect?",
      options: [
        { id: 'A', text: "Outsourced software development risks" },
        { id: 'B', text: "Service provider's outdated security practices" },
        { id: 'C', text: "Hardware provider's embedded compromise" },
        { id: 'D', text: "Inadequate vendor background checks" }
      ],
      correctOptionId: 'C',
      explanation: "The malicious chips were introduced in the hardware manufacturing process, indicating a hardware provider’s embedded compromise in the supply chain."
    },
    {
      id: 'ed3-q5',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational corporation is expanding its operations in various countries and wants to restrict access to its internal network based on geolocation so that only employees from specific countries can access certain data. Which of the following would be the MOST appropriate solution?",
      options: [
        { id: 'A', text: "Deploy a VPN with multi-factor authentication" },
        { id: 'B', text: "Use MAC address filtering on all company devices" },
        { id: 'C', text: "Implement a geolocation-based access control system" },
        { id: 'D', text: "Set up region-specific SSIDs for the company's Wi-Fi network" }
      ],
      correctOptionId: 'C',
      explanation: "Geolocation-based access control evaluates the user’s location and can enforce country-specific access policies for internal resources."
    },
    {
      id: 'ed3-q6',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechGuard Inc. and CloudSecure are two cybersecurity firms planning a collaboration on a new cloud security project with shared proprietary technologies and methodologies. Which agreement should they finalize to define the terms of their partnership, roles, and shared responsibilities?",
      options: [
        { id: 'A', text: "Non-disclosure agreement (NDA)" },
        { id: 'B', text: "Service-level agreement (SLA)" },
        { id: 'C', text: "Business partners agreement (BPA)" },
        { id: 'D', text: "Memorandum of understanding (MOU)" }
      ],
      correctOptionId: 'C',
      explanation: "A Business Partners Agreement (BPA) defines roles, responsibilities, financial terms, and conditions for an ongoing business partnership."
    },
    {
      id: 'ed3-q7',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security team recently upgraded their intrusion detection system (IDS). Since the upgrade, the system hasn’t flagged any intrusions, even though intrusion attempts are a regular occurrence. What is this situation best characterized as?",
      options: [
        { id: 'A', text: "A true negative" },
        { id: 'B', text: "A false negative" },
        { id: 'C', text: "A true positive" },
        { id: 'D', text: "A confirmation feedback" }
      ],
      correctOptionId: 'B',
      explanation: "A false negative occurs when a system fails to detect threats that actually exist, as with an IDS missing real intrusion attempts."
    },
    {
      id: 'ed3-q8',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberTech Inc. is about to receive sensitive patient data from MedCorp as part of developing a secure medical records system. Which agreement should be in place before sharing this information to ensure confidentiality?",
      options: [
        { id: 'A', text: "Memorandum of understanding (MOU)" },
        { id: 'B', text: "Service-level agreement (SLA)" },
        { id: 'C', text: "Non-disclosure agreement (NDA)" },
        { id: 'D', text: "Work order (WO)/statement of work (SOW)" }
      ],
      correctOptionId: 'C',
      explanation: "An NDA specifically protects the confidentiality of shared information such as sensitive patient data."
    },
    {
      id: 'ed3-q9',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "While analyzing server logs, Mike, an IT security analyst, notices that an unfamiliar document is frequently accessed. He learns it was deliberately placed by the security team, contains no real data, and is closely monitored. What is the purpose of this file MOST likely?",
      options: [
        { id: 'A', text: "To serve as a redundancy copy in case of data loss" },
        { id: 'B', text: "To act as a decoy to attract and detect unauthorized access" },
        { id: 'C', text: "To maintain a record of all user activities for auditing" },
        { id: 'D', text: "To be encrypted and sent to clients as a sample" }
      ],
      correctOptionId: 'B',
      explanation: "This is a honeyfile used as a decoy; access to it signals potential unauthorized or suspicious activity."
    },
    {
      id: 'ed3-q10',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a major security update to its database system, TechCo experienced unexpected downtime and incompatibilities. To ensure such incidents can be quickly addressed in the future, which of the following should have been in place before deploying the update?",
      options: [
        { id: 'A', text: "A comprehensive list of all updates" },
        { id: 'B', text: "An automated system recovery tool" },
        { id: 'C', text: "A backout plan" },
        { id: 'D', text: "A detailed user manual for the update" }
      ],
      correctOptionId: 'C',
      explanation: "A backout plan allows the organization to revert to the previous stable state if an update causes issues."
    },
    {
      id: 'ed3-q11',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFirm is starting a new project to overhaul a client’s cybersecurity infrastructure and wants to lay out specific tasks, deliverables, timelines, and resources. Which type of agreement best captures these details?",
      options: [
        { id: 'A', text: "Memorandum of understanding (MOU)" },
        { id: 'B', text: "Joint venture agreement" },
        { id: 'C', text: "Master service agreement (MSA)" },
        { id: 'D', text: "Work order (WO)/statement of work (SOW)" }
      ],
      correctOptionId: 'D',
      explanation: "A SOW/WO describes the specific tasks, deliverables, schedule, and resources for a particular project."
    },
    {
      id: 'ed3-q12',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a vulnerability assessment of virtualized infrastructure, the IT team finds a potential threat where a user within a VM could interact with and compromise the host system. What is this vulnerability commonly called?",
      options: [
        { id: 'A', text: "VM cloning" },
        { id: 'B', text: "VM snapshotting" },
        { id: 'C', text: "VM escape" },
        { id: 'D', text: "VM migration" }
      ],
      correctOptionId: 'C',
      explanation: "VM escape is when code running in a guest VM breaks isolation and gains access to the host or other VMs."
    },
    {
      id: 'ed3-q13',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large organization wants employees to securely access company resources remotely using their personal devices, with strong authentication and confidentiality of data in transit. Which technology should be adopted?",
      options: [
        { id: 'A', text: "Kerberos" },
        { id: 'B', text: "Remote Desktop Services (RDS)" },
        { id: 'C', text: "Remote Access VPN" },
        { id: 'D', text: "SNMP" }
      ],
      correctOptionId: 'C',
      explanation: "A Remote Access VPN provides encrypted tunnels from remote devices to the internal network and can enforce strong authentication."
    },
    {
      id: 'ed3-q14',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security analyst at ZetaTech wants continuously updated information about emerging threats and vulnerabilities relevant to their industry. Which method is MOST suitable for obtaining real-time data on potential security issues?",
      options: [
        { id: 'A', text: "Rely solely on automated internal vulnerability scanners" },
        { id: 'B', text: "Periodic manual penetration testing" },
        { id: 'C', text: "Subscribing to an OSINT threat feed" },
        { id: 'D', text: "Regularly checking the company's firewall logs" }
      ],
      correctOptionId: 'C',
      explanation: "An OSINT threat feed continuously aggregates publicly available threat data, providing real-time updates on emerging issues."
    },
    {
      id: 'ed3-q15',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During testing, Lucy finds that an application crashes when she inputs a string much longer than the input field is designed to handle, potentially allowing arbitrary code execution. What vulnerability is she likely trying to exploit?",
      options: [
        { id: 'A', text: "SQL Injection" },
        { id: 'B', text: "Cross-Site Scripting (XSS)" },
        { id: 'C', text: "Buffer Overflow" },
        { id: 'D', text: "Directory Traversal" }
      ],
      correctOptionId: 'C',
      explanation: "A buffer overflow occurs when input exceeds a buffer’s capacity and overwrites adjacent memory, potentially enabling arbitrary code execution."
    },
    {
      id: 'ed3-q16',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "WebFirm, a web development company, did not comply with data handling and protection clauses in its contract with e-commerce client RetailMax, resulting in a customer data breach. What is the MOST probable contractual impact on WebFirm?",
      options: [
        { id: 'A', text: "WebFirm will receive bonuses for early project completion" },
        { id: 'B', text: "WebFirm will be required to provide additional services at no cost" },
        { id: 'C', text: "RetailMax will terminate the contract and may seek damages" },
        { id: 'D', text: "RetailMax will extend the project timeline" }
      ],
      correctOptionId: 'C',
      explanation: "Non-compliance that leads to a data breach commonly results in contract termination and potential legal or financial damages."
    },
    {
      id: 'ed3-q17',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a political campaign, an anonymous group releases articles containing fabricated data about a candidate’s past to influence voters’ opinions. This is an example of:",
      options: [
        { id: 'A', text: "Impersonation" },
        { id: 'B', text: "Smishing" },
        { id: 'C', text: "Disinformation" },
        { id: 'D', text: "Baiting" }
      ],
      correctOptionId: 'C',
      explanation: "Disinformation is deliberately false information spread to mislead or manipulate public opinion."
    },
    {
      id: 'ed3-q18',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational company considers using a foreign cloud storage provider for customer data, but its home country’s laws require customer data to remain within national borders. What is the MOST critical consideration?",
      options: [
        { id: 'A', text: "Speed of data access from the foreign-based cloud storage" },
        { id: 'B', text: "Encryption standards used by the foreign cloud provider" },
        { id: 'C', text: "Whether the provider offers data storage exclusively within the company's home country" },
        { id: 'D', text: "The reputation and customer reviews of the foreign cloud provider" }
      ],
      correctOptionId: 'C',
      explanation: "To satisfy data sovereignty requirements, the provider must be able to guarantee storage within the company’s home country."
    },
    {
      id: 'ed3-q19',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "BetaTech, a tech manufacturing firm, wants to ensure that compromise of its IoT devices will not endanger its primary manufacturing control systems. Which approach would be MOST effective?",
      options: [
        { id: 'A', text: "Using a single robust firewall for the entire network" },
        { id: 'B', text: "Periodic password changes for IoT devices" },
        { id: 'C', text: "Segmenting the IoT devices from the manufacturing control systems" },
        { id: 'D', text: "Enabling automatic updates for all IoT devices" }
      ],
      correctOptionId: 'C',
      explanation: "Network segmentation isolates IoT devices so compromise of that segment does not directly impact critical control systems."
    },
    {
      id: 'ed3-q20',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software company is developing a new cloud-based application where clients can store and manage customer contact details, including phone numbers and email addresses, but no financial or medical information. How should this information be classified?",
      options: [
        { id: 'A', text: "Public" },
        { id: 'B', text: "Restricted" },
        { id: 'C', text: "Sensitive" },
        { id: 'D', text: "Classified" }
      ],
      correctOptionId: 'C',
      explanation: "Phone numbers and email addresses are PII and should be classified as sensitive, as unauthorized access could lead to privacy violations."
    },
    {
      id: 'ed3-q21',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational company wants remote employees to securely access the corporate intranet over the Internet, with confidentiality and integrity of data in transit. Which solution should be implemented?",
      options: [
        { id: 'A', text: "VLAN" },
        { id: 'B', text: "VPN" },
        { id: 'C', text: "NAC" },
        { id: 'D', text: "DMZ" }
      ],
      correctOptionId: 'B',
      explanation: "A VPN provides encrypted tunnels over the public internet to ensure confidentiality and integrity for remote access."
    },
    {
      id: 'ed3-q22',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial firm outsources payment processing to a third party. After fraudulent transactions, it is discovered the provider was not using the latest encryption standards when transmitting data. Which supply chain vulnerability does this highlight?",
      options: [
        { id: 'A', text: "Inadequate vendor background checks" },
        { id: 'B', text: "Service provider's outdated security practices" },
        { id: 'C', text: "Deficient hardware components from a supplier" },
        { id: 'D', text: "Software with embedded backdoors" }
      ],
      correctOptionId: 'B',
      explanation: "The issue is the provider’s failure to use current encryption standards, a clear example of outdated security practices in the supply chain."
    },
    {
      id: 'ed3-q23',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An online shopping platform finds product reviews containing a strange link that leads users to a fake site harvesting login credentials. What vulnerability in the review system likely allowed these links?",
      options: [
        { id: 'A', text: "Session Hijacking" },
        { id: 'B', text: "Cross-site scripting (XSS)" },
        { id: 'C', text: "Password Spraying" },
        { id: 'D', text: "Credential Stuffing" }
      ],
      correctOptionId: 'B',
      explanation: "An XSS-style input validation failure can allow attackers to inject malicious content, such as phishing links, into user-generated fields."
    },
    {
      id: 'ed3-q24',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An organization wants to secure its database servers where customer details and transaction records are stored. This data is not actively being accessed or processed. Which security measure is MOST appropriate for this type of data?",
      options: [
        { id: 'A', text: "Data Loss Prevention (DLP) for email" },
        { id: 'B', text: "Web Application Firewall (WAF)" },
        { id: 'C', text: "Full Disk Encryption (FDE)" },
        { id: 'D', text: "Intrusion Detection System (IDS) for network traffic" }
      ],
      correctOptionId: 'C',
      explanation: "Full disk encryption protects data at rest on storage devices, making the database contents unreadable if disks are stolen or accessed offline."
    },
    {
      id: 'ed3-q25',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corp. has developed a new manufacturing process that reduces costs by 50%. It is a trade secret and not yet patented. The company wants to prevent employees from disclosing it to competitors. What is the MOST effective strategy?",
      options: [
        { id: 'A', text: "Providing employees with a bonus for keeping the process confidential" },
        { id: 'B', text: "Conducting random checks of employee communications" },
        { id: 'C', text: "Implementing a mandatory non-disclosure agreement (NDA) for all employees" },
        { id: 'D', text: "Hosting quarterly seminars on the value of the trade secret" }
      ],
      correctOptionId: 'C',
      explanation: "An NDA is a legally binding way to restrict disclosure of trade secrets and provides legal recourse if employees reveal them."
    },
    {
      id: 'ed3-q26',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "While analyzing a vulnerability, the security team references a specific CVE and its CVSS score to decide remediation urgency. Which statement best describes the purpose of CVE and CVSS?",
      options: [
        { id: 'A', text: "CVE provides a severity score, while CVSS gives a unique identifier" },
        { id: 'B', text: "CVE and CVSS both offer a scoring mechanism to rank vulnerabilities" },
        { id: 'C', text: "CVE provides a unique identifier, while CVSS offers a standardized severity score" },
        { id: 'D', text: "CVE and CVSS are regulatory requirements for all software applications" }
      ],
      correctOptionId: 'C',
      explanation: "CVE assigns unique identifiers to publicly known vulnerabilities, while CVSS provides a standardized severity score."
    },
    {
      id: 'ed3-q27',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a security assessment, Maria identifies a self-signed certificate being used on a client’s public-facing web server. What is the PRIMARY security concern?",
      options: [
        { id: 'A', text: "The web server might be vulnerable to DDoS attacks" },
        { id: 'B', text: "The certificate could be expired" },
        { id: 'C', text: "Users cannot validate the authenticity of the website easily" },
        { id: 'D', text: "The web server might not support modern encryption algorithms" }
      ],
      correctOptionId: 'C',
      explanation: "Self-signed certificates are not trusted by default, so users cannot reliably confirm the site’s authenticity, increasing MITM risk."
    },
    {
      id: 'ed3-q28',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Julia, a security administrator, places an enticing monitored document within confidential project folders to detect unauthorized access. What is this document commonly known as?",
      options: [
        { id: 'A', text: "Salt file" },
        { id: 'B', text: "Honeyfile" },
        { id: 'C', text: "Log file" },
        { id: 'D', text: "Backup file" }
      ],
      correctOptionId: 'B',
      explanation: "A honeyfile is a decoy file used to detect unauthorized access when it is opened or manipulated."
    },
    {
      id: 'ed3-q29',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security auditor notes that a website’s login form returns detailed database error messages like “Incorrect column name” or “Table not found.” Which type of vulnerability could attackers potentially exploit using this information?",
      options: [
        { id: 'A', text: "Brute Force Attack" },
        { id: 'B', text: "Structured Query Language injection (SQLi)" },
        { id: 'C', text: "Man-in-the-Middle Attack" },
        { id: 'D', text: "Session Hijacking" }
      ],
      correctOptionId: 'B',
      explanation: "Detailed SQL errors reveal database structure and can assist attackers in crafting SQL injection attacks."
    },
    {
      id: 'ed3-q30',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A law firm is transitioning to a digital storage system and wants to protect client records and case files from unauthorized access. Which strategy BEST ensures confidentiality of the legal information stored digitally?",
      options: [
        { id: 'A', text: "Conducting regular penetration testing on the digital storage system" },
        { id: 'B', text: "Encrypting the client records and case files" },
        { id: 'C', text: "Applying watermarks to digital documents" },
        { id: 'D', text: "Limiting physical access to the server room" }
      ],
      correctOptionId: 'B',
      explanation: "Encrypting the files ensures that even if storage is accessed by unauthorized parties, the content remains unreadable without the keys."
    },
    {
      id: 'ed3-q31',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jake, a security specialist, discovers a piece of data intentionally placed and monitored in the financial system to detect unauthorized interaction. What is this deceptive piece of data known as?",
      options: [
        { id: 'A', text: "Honeystring" },
        { id: 'B', text: "Honeytoken" },
        { id: 'C', text: "Canary token" },
        { id: 'D', text: "Security marker" }
      ],
      correctOptionId: 'B',
      explanation: "A honeytoken is any piece of fake, monitored data whose use or access indicates potential malicious activity."
    },
    {
      id: 'ed3-q32',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company using cloud infrastructure has no boundaries defined between development, testing, and production environments, which could lead to unintended interactions and data leaks. What vulnerability does this illustrate?",
      options: [
        { id: 'A', text: "Insecure API endpoints" },
        { id: 'B', text: "Weak encryption methods" },
        { id: 'C', text: "Lack of resource isolation" },
        { id: 'D', text: "Insufficient backup strategies" }
      ],
      correctOptionId: 'C',
      explanation: "Without proper resource isolation, data and code can bleed between environments, increasing the risk of leaks and compromise."
    },
    {
      id: 'ed3-q33',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaCorp is selecting a cybersecurity consultant. One firm, SecureWorld, recently hired AlphaCorp’s former CISO as a senior consultant. What should be AlphaCorp’s immediate concern?",
      options: [
        { id: 'A', text: "The expertise the former CISO brings to SecureWorld" },
        { id: 'B', text: "The possibility that SecureWorld could offer a discounted price" },
        { id: 'C', text: "Potential conflict of interest due to prior associations" },
        { id: 'D', text: "SecureWorld's global presence and reputation" }
      ],
      correctOptionId: 'C',
      explanation: "Hiring a former CISO can raise conflict-of-interest concerns that must be addressed to ensure objectivity and fairness in selection."
    },
    {
      id: 'ed3-q34',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a server room audit, a technician discovers a server with firmware that hasn’t been updated for two years. What potential vulnerability does the outdated firmware expose the server to?",
      options: [
        { id: 'A', text: "SQL Injection" },
        { id: 'B', text: "Physical tampering" },
        { id: 'C', text: "Unpatched exploits" },
        { id: 'D', text: "Credential stuffing" }
      ],
      correctOptionId: 'C',
      explanation: "Outdated firmware can contain known vulnerabilities that attackers can exploit because they are no longer receiving security patches."
    },
    {
      id: 'ed3-q35',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "As part of its vulnerability management initiative, a security team decides to conduct a series of penetration tests. What is the PRIMARY reason for incorporating penetration testing as a threat identification method?",
      options: [
        { id: 'A', text: "To ensure compliance with regulatory requirements" },
        { id: 'B', text: "To validate the efficiency of security awareness training" },
        { id: 'C', text: "To actively exploit vulnerabilities and assess potential impact" },
        { id: 'D', text: "To identify misconfigurations in the SIEM system" }
      ],
      correctOptionId: 'C',
      explanation: "Penetration testing simulates real attacks to actively exploit vulnerabilities and reveal their true business impact."
    },
    {
      id: 'ed3-q36',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Globex Industries is expanding its data centers across multiple geographic locations. The IT team wants a centralized system for real-time status, outages, and metrics of all data center infrastructures. Which solution would be MOST effective?",
      options: [
        { id: 'A', text: "Data Loss Prevention (DLP) tools" },
        { id: 'B', text: "Distributed Denial of Service (DDoS) protection" },
        { id: 'C', text: "Security Information and Event Management (SIEM)" },
        { id: 'D', text: "Infrastructure Management Platform (IMP)" }
      ],
      correctOptionId: 'D',
      explanation: "An Infrastructure Management Platform centralizes monitoring and management of infrastructure health and metrics across multiple sites."
    },
    {
      id: 'ed3-q37',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a major infrastructure upgrade, GlobalMed Corp experienced several unanticipated security issues. The IT manager realizes they skipped an essential step in the change management process that could have predicted and mitigated these issues. What step was most likely overlooked?",
      options: [
        { id: 'A', text: "Procurement of new hardware" },
        { id: 'B', text: "Training of IT staff on the new systems" },
        { id: 'C', text: "Impact analysis" },
        { id: 'D', text: "Integration with legacy systems" }
      ],
      correctOptionId: 'C',
      explanation: "Impact analysis evaluates the potential consequences of a change, helping to identify and mitigate security risks beforehand."
    },
    {
      id: 'ed3-q38',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sarah, a software developer, gains root access to her company-issued mobile device to customize its features. Soon after, IT detects unauthorized data transmissions from her device. Which mobile vulnerability is most likely associated with her actions?",
      options: [
        { id: 'A', text: "Side loading of applications" },
        { id: 'B', text: "Inconsistent OS updates" },
        { id: 'C', text: "Mobile device jailbreaking" },
        { id: 'D', text: "Use of open Wi-Fi networks" }
      ],
      correctOptionId: 'C',
      explanation: "Jailbreaking removes manufacturer restrictions, granting root access but also weakening security controls and increasing attack surface."
    },
    {
      id: 'ed3-q39',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jenna, a web administrator, is obtaining SSL certificates for multiple subdomains like shop.example.com, blog.example.com, and support.example.com. She wants to use one certificate for all subdomains. What type of certificate should she pursue?",
      options: [
        { id: 'A', text: "Extended Validation Certificate" },
        { id: 'B', text: "Wildcard Certificate" },
        { id: 'C', text: "Certificate with Subject Alternative Names (SAN)" },
        { id: 'D', text: "Code Signing Certificate" }
      ],
      correctOptionId: 'B',
      explanation: "A wildcard certificate such as *.example.com can secure a domain and all of its first-level subdomains."
    },
    {
      id: 'ed3-q40',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberLock Inc. wants to assess third-party vendors’ security postures and gather foundational security information from many vendors in a cost-effective way. What should they do?",
      options: [
        { id: 'A', text: "Conduct a penetration test for each vendor" },
        { id: 'B', text: "Send out security questionnaires to each vendor" },
        { id: 'C', text: "Visit each vendor's site for an in-person assessment" },
        { id: 'D', text: "Review the annual financial reports of each vendor" }
      ],
      correctOptionId: 'B',
      explanation: "Standardized security questionnaires are an efficient, low-cost way to collect comparable security information from many vendors."
    },
    {
      id: 'ed3-q41',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a new product name search feature is implemented, an e-commerce company notices entire database tables being dumped. Which vulnerability might the new feature have introduced?",
      options: [
        { id: 'A', text: "Cross-Site Scripting (XSS)" },
        { id: 'B', text: "Distributed Denial-of-Service (DDoS)" },
        { id: 'C', text: "Structured Query Language injection (SQLi)" },
        { id: 'D', text: "Cross-Site Request Forgery (CSRF)" }
      ],
      correctOptionId: 'C',
      explanation: "Unsanitized input in SQL queries can enable SQL injection attacks, allowing attackers to dump entire tables."
    },
    {
      id: 'ed3-q42',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DeltaSoft has released a new web application. The security team wants to observe the application's behavior and responses while it is running to identify vulnerabilities. Which method is most appropriate?",
      options: [
        { id: 'A', text: "Static Analysis" },
        { id: 'B', text: "Fuzz Testing" },
        { id: 'C', text: "Whitebox Testing" },
        { id: 'D', text: "Dynamic Analysis" }
      ],
      correctOptionId: 'D',
      explanation: "Dynamic analysis examines an application during runtime to uncover vulnerabilities that only appear when the app is executing."
    },
    {
      id: 'ed3-q43',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GlobalTech is negotiating a cloud storage contract with CloudCorp and wants to ensure data retrieval times remain under 2 seconds 99.9% of the time. Which component should explicitly define this expectation?",
      options: [
        { id: 'A', text: "Pricing model" },
        { id: 'B', text: "Data sovereignty clauses" },
        { id: 'C', text: "Service-level agreement (SLA)" },
        { id: 'D', text: "Termination clauses" }
      ],
      correctOptionId: 'C',
      explanation: "SLAs define concrete performance metrics such as response times, uptime, and penalties for not meeting them."
    },
    {
      id: 'ed3-q44',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SoftTech Inc. is expanding operations to Europe and will process personal data of EU citizens. Which legal implication is MOST critical to consider?",
      options: [
        { id: 'A', text: "The need to register with each country's software association" },
        { id: 'B', text: "Compliance with the General Data Protection Regulation (GDPR)" },
        { id: 'C', text: "Ensuring software patent rights in each European country" },
        { id: 'D', text: "The European standard for software coding" }
      ],
      correctOptionId: 'B',
      explanation: "GDPR governs processing of EU citizens’ personal data and imposes strict privacy and security requirements."
    },
    {
      id: 'ed3-q45',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational organization suffered a security breach after a change to the network infrastructure was made without following the standard approval process, leading to a misconfiguration. What change management principle was neglected?",
      options: [
        { id: 'A', text: "Configuration baseline reviews" },
        { id: 'B', text: "Least privilege enforcement" },
        { id: 'C', text: "Approval process adherence" },
        { id: 'D', text: "Patch management" }
      ],
      correctOptionId: 'C',
      explanation: "Skipping the formal approval stage of change management allows risky or unreviewed changes to reach production."
    },
    {
      id: 'ed3-q46',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A startup plans multiple microsites under various subdomains and wants a cost-effective solution that still provides third-party validation for external users. What type of certificate should be recommended?",
      options: [
        { id: 'A', text: "A separate self-signed certificate for each microsite" },
        { id: 'B', text: "An individual third-party certificate for each subdomain" },
        { id: 'C', text: "A third-party wildcard certificate" },
        { id: 'D', text: "An EV certificate issued by an internal CA" }
      ],
      correctOptionId: 'C',
      explanation: "A third-party wildcard certificate secures many subdomains at lower cost while still being trusted by external clients."
    },
    {
      id: 'ed3-q47',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Two university research departments, UniAlpha and UniBeta, want an agreement that expresses mutual intentions on a quantum computing security project without creating legally binding obligations. Which document is most suitable?",
      options: [
        { id: 'A', text: "Service-level agreement (SLA)" },
        { id: 'B', text: "Non-disclosure agreement (NDA)" },
        { id: 'C', text: "Memorandum of understanding (MOU)" },
        { id: 'D', text: "Licensing agreement" }
      ],
      correctOptionId: 'C',
      explanation: "An MOU outlines mutual intentions and broad cooperation without necessarily being legally binding like a contract."
    },
    {
      id: 'ed3-q48',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An unauthorized user gains elevated privileges on a server even though default account settings were configured correctly. Investigators find the OS has not been updated for months. What type of vulnerability was likely exploited?",
      options: [
        { id: 'A', text: "Application Misconfiguration" },
        { id: 'B', text: "OS Patch Management Issue" },
        { id: 'C', text: "Weak Encryption Algorithm" },
        { id: 'D', text: "Password Reuse Attack" }
      ],
      correctOptionId: 'B',
      explanation: "Failing to apply OS patches leaves known privilege-escalation vulnerabilities unaddressed and exploitable."
    },
    {
      id: 'ed3-q49',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jane, an accountant, receives an email that looks like it’s from her company’s IT department, with matching logo and branding, urging her to click a link to reset her password. She notices a minor spelling error in the sender’s domain name. What type of attack is this?",
      options: [
        { id: 'A', text: "Spear Phishing" },
        { id: 'B', text: "Vishing" },
        { id: 'C', text: "Baiting" },
        { id: 'D', text: "Brand Impersonation" }
      ],
      correctOptionId: 'D',
      explanation: "Brand impersonation mimics a legitimate organization’s look and feel to trick users, often with a subtly altered domain."
    },
    {
      id: 'ed3-q50',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "As the CSO of AlphaTech, you are finalizing a partnership with a third-party provider and want the right to inspect the vendor’s operations and security measures in the future. Which clause should you include?",
      options: [
        { id: 'A', text: "Non-disclosure agreement (NDA)" },
        { id: 'B', text: "Service level agreement (SLA)" },
        { id: 'C', text: "Termination clause" },
        { id: 'D', text: "Right-to-audit clause" }
      ],
      correctOptionId: 'D',
      explanation: "A right-to-audit clause explicitly grants the customer the ability to audit the vendor’s processes and controls."
    },
    {
      id: 'ed3-q51',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a major security incident, DeltaTech implements several security patches. What should be their PRIMARY next step to ensure the effectiveness of these patches?",
      options: [
        { id: 'A', text: "Deploy additional firewalls at the network perimeter" },
        { id: 'B', text: "Provide cybersecurity training to all employees" },
        { id: 'C', text: "Rescan the systems to check if vulnerabilities are effectively addressed" },
        { id: 'D', text: "Change all user passwords across the organization" }
      ],
      correctOptionId: 'C',
      explanation: "Rescanning validates that vulnerabilities identified earlier have been successfully remediated by the patches."
    },
    {
      id: 'ed3-q52',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A Security Analyst wants tools that can detect unauthorized changes made to system files and configurations. Which is BEST suited for this purpose?",
      options: [
        { id: 'A', text: "Network protocol analyzer" },
        { id: 'B', text: "File integrity monitoring (FIM) system" },
        { id: 'C', text: "Bandwidth monitoring tool" },
        { id: 'D', text: "Passive vulnerability scanner" }
      ],
      correctOptionId: 'B',
      explanation: "FIM solutions monitor critical files and configurations for unauthorized or unexpected changes."
    },
    {
      id: 'ed3-q53',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company wants to ensure customers’ credit card data remains confidential in transit over the internet. Which protocol best fits this requirement?",
      options: [
        { id: 'A', text: "IPSec" },
        { id: 'B', text: "SSH" },
        { id: 'C', text: "TLS" },
        { id: 'D', text: "ICMP" }
      ],
      correctOptionId: 'C',
      explanation: "TLS underpins HTTPS and is the standard for securing web traffic, including payment data, in transit."
    },
    {
      id: 'ed3-q54',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a breach, Sarah embeds specific values in a database that serve no real purpose but are monitored and trigger alerts if accessed. What are these values commonly called?",
      options: [
        { id: 'A', text: "Security flags" },
        { id: 'B', text: "Honeypots" },
        { id: 'C', text: "Honeytokens" },
        { id: 'D', text: "Audit trails" }
      ],
      correctOptionId: 'C',
      explanation: "Honeytokens are fake, monitored data values designed to alert when they are accessed, indicating possible unauthorized activity."
    },
    {
      id: 'ed3-q55',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Maria receives a text from an unknown number claiming she has won a $500 gift card and asking her to click a link to claim the prize. She is unsure about its authenticity. What is the BEST course of action?",
      options: [
        { id: 'A', text: "Click the link to check if the website looks genuine" },
        { id: 'B', text: "Forward the message to friends to verify if they received a similar message" },
        { id: 'C', text: "Delete the message without clicking on any links" },
        { id: 'D', text: "Respond to the sender asking for more details about the offer" }
      ],
      correctOptionId: 'C',
      explanation: "This is likely smishing; deleting the message without interacting with the link is the safest response."
    },
    {
      id: 'ed3-q56',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "While assessing vulnerabilities in a new cloud infrastructure, the security team considers the physical location of data centers, local laws, and natural disaster risks. In vulnerability management, what are these considerations called?",
      options: [
        { id: 'A', text: "Asset valuation factors" },
        { id: 'B', text: "Risk response variables" },
        { id: 'C', text: "Threat intelligence variables" },
        { id: 'D', text: "Environmental variables" }
      ],
      correctOptionId: 'D',
      explanation: "Environmental variables refer to external factors like geography, regulations, and natural hazards that affect risk."
    },
    {
      id: 'ed3-q57',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During an e-commerce audit, a security analyst discovers that if a user simultaneously purchases and cancels an order, the product can be added without charging funds. Which vulnerability type is the site susceptible to?",
      options: [
        { id: 'A', text: "Directory Traversal" },
        { id: 'B', text: "Insecure Direct Object References (IDOR)" },
        { id: 'C', text: "Race Condition" },
        { id: 'D', text: "Cross-Site Request Forgery (CSRF)" }
      ],
      correctOptionId: 'C',
      explanation: "A race condition arises when application behavior depends on the timing of concurrent operations, leading to unexpected states."
    },
    {
      id: 'ed3-q58',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a security audit, the CISO of a multinational must report findings to internal stakeholders and a governmental regulatory agency. What is the correct type of compliance reporting for each?",
      options: [
        { id: 'A', text: "Internal report for the regulatory agency and external report for internal stakeholders" },
        { id: 'B', text: "External report for both the regulatory agency and internal stakeholders" },
        { id: 'C', text: "Internal report for internal stakeholders and external report for the regulatory agency" },
        { id: 'D', text: "No report for internal stakeholders, only an external report for the regulatory agency" }
      ],
      correctOptionId: 'C',
      explanation: "Internal reports are tailored for internal audiences, while external compliance reports are crafted for regulators and other external parties."
    },
    {
      id: 'ed3-q59',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GlobalFin Corp experienced outages during peak business hours due to system maintenance. To prevent this in future, what should it implement?",
      options: [
        { id: 'A', text: "Conduct maintenance activities randomly" },
        { id: 'B', text: "Implement maintenance activities during peak business hours" },
        { id: 'C', text: "Establish designated maintenance windows" },
        { id: 'D', text: "Reduce the frequency of maintenance activities" }
      ],
      correctOptionId: 'C',
      explanation: "Defined maintenance windows during off-peak hours minimize disruptions to critical business operations."
    },
    {
      id: 'ed3-q60',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alex, a new intern, accidentally types “comapnyportal.com” instead of “companyportal.com” and lands on a look-alike site asking him to download a certificate. What type of attack is this?",
      options: [
        { id: 'A', text: "Spear Phishing" },
        { id: 'B', text: "Watering Hole Attack" },
        { id: 'C', text: "Typosquatting" },
        { id: 'D', text: "Man-in-the-Middle" }
      ],
      correctOptionId: 'C',
      explanation: "Typosquatting registers misspelled domains of popular sites to catch victims who mistype URLs."
    },
    {
      id: 'ed3-q61',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DataGuard Corp, operating in the EU, suffers a major data breach and has failed to comply with key GDPR provisions. What is the MOST likely immediate consequence?",
      options: [
        { id: 'A', text: "They will be forced to shut down operations until compliance is achieved" },
        { id: 'B', text: "DataGuard's executive team will face immediate imprisonment" },
        { id: 'C', text: "The company will be required to issue a public apology" },
        { id: 'D', text: "DataGuard Corp. will face substantial fines for their non-compliance" }
      ],
      correctOptionId: 'D',
      explanation: "GDPR enables regulators to impose substantial fines (up to 4% of global turnover or €20 million) for serious non-compliance."
    },
    {
      id: 'ed3-q62',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A pharmaceutical company is documenting a new drug formula and trial results that represent valuable intellectual property. How should this documentation be classified so only the right people have access?",
      options: [
        { id: 'A', text: "Unclassified" },
        { id: 'B', text: "Public" },
        { id: 'C', text: "Confidential" },
        { id: 'D', text: "Sensitive" }
      ],
      correctOptionId: 'C',
      explanation: "Confidential classification is appropriate for high-value proprietary information that should be tightly controlled internally."
    },
    {
      id: 'ed3-q63',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a software update, a company’s intranet portal is inaccessible to some employees. IT suspects a network filtering issue. What should they review to confirm their suspicions?",
      options: [
        { id: 'A', text: "The content filtering policies" },
        { id: 'B', text: "The malware detection logs" },
        { id: 'C', text: "The allow list/deny list configurations" },
        { id: 'D', text: "The network bandwidth utilization graphs" }
      ],
      correctOptionId: 'C',
      explanation: "Misconfigured allow/deny lists can unintentionally block specific users or addresses from accessing resources."
    },
    {
      id: 'ed3-q64',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "MegaCorp rigorously tested a new web application in a controlled environment, but once deployed to production, several security vulnerabilities were reported. Which reason best explains the mismatch?",
      options: [
        { id: 'A', text: "The testing environment was an exact replica of the production environment" },
        { id: 'B', text: "Test results were not thoroughly reviewed" },
        { id: 'C', text: "The software was not tested for zero-day vulnerabilities" },
        { id: 'D', text: "Penetration testing was done post-production" }
      ],
      correctOptionId: 'B',
      explanation: "If test results are not thoroughly reviewed and acted upon, vulnerabilities identified in testing may still ship into production."
    },
    {
      id: 'ed3-q65',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "NexTech, a cloud-based software company, experienced a breach due to inconsistent practices among system administrators. To avoid such inconsistencies, what should NexTech emphasize?",
      options: [
        { id: 'A', text: "Rely on system administrators to develop their personal methods" },
        { id: 'B', text: "Mandate frequent system reboots" },
        { id: 'C', text: "Implement Standard Operating Procedures (SOPs) for all technical operations" },
        { id: 'D', text: "Conduct random security audits without notifying administrators" }
      ],
      correctOptionId: 'C',
      explanation: "SOPs standardize how tasks are performed, reducing variability and the chance of security-impacting mistakes."
    },
    {
      id: 'ed3-q66',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After running a vulnerability scan, a reported vulnerability on a server is manually verified and found not to exist. What is this situation best described as?",
      options: [
        { id: 'A', text: "A false negative" },
        { id: 'B', text: "A true positive" },
        { id: 'C', text: "A false positive" },
        { id: 'D', text: "A confirmation bias" }
      ],
      correctOptionId: 'C',
      explanation: "A false positive occurs when a tool reports a vulnerability that is not actually present."
    },
    {
      id: 'ed3-q67',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An organization repeatedly ignores security guidelines from a global standards body despite pledging adherence and is now facing disciplinary measures. What is the MOST likely consequence?",
      options: [
        { id: 'A', text: "Immediate revocation of business licenses" },
        { id: 'B', text: "Sanctions imposed by the global standards organization" },
        { id: 'C', text: "Forcible shutdown of all online operations" },
        { id: 'D', text: "Mandatory public apology to stakeholders" }
      ],
      correctOptionId: 'B',
      explanation: "Standards organizations typically respond with sanctions such as warnings, suspensions, or other penalties for repeated non-compliance."
    },
    {
      id: 'ed3-q68',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sophia, the cybersecurity lead, drafts a new security policy consulting only her security team. After implementation, several departments push back due to operational impact. What misstep did Sophia make?",
      options: [
        { id: 'A', text: "Not using a standardized security framework" },
        { id: 'B', text: "Over-reliance on automated security solutions" },
        { id: 'C', text: "Not including key stakeholders in the policy drafting process" },
        { id: 'D', text: "Focusing too much on external threats rather than internal ones" }
      ],
      correctOptionId: 'C',
      explanation: "Key stakeholders from affected departments should be involved to ensure policies are practical and aligned with business operations."
    },
    {
      id: 'ed3-q69',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A network administrator notices switches that no longer receive firmware updates and have reached end-of-life. What vulnerability do these switches introduce?",
      options: [
        { id: 'A', text: "Physical hardware tampering" },
        { id: 'B', text: "Lack of redundancy" },
        { id: 'C', text: "Increased susceptibility to new threats" },
        { id: 'D', text: "Wireless interference" }
      ],
      correctOptionId: 'C',
      explanation: "End-of-life devices no longer receive security patches, making them increasingly vulnerable to new and known threats."
    },
    {
      id: 'ed3-q70',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Liam, the CTO, finds several software applications are not updated regularly because no specific team or individual owns them. To enhance security, what should Liam emphasize?",
      options: [
        { id: 'A', text: "Immediate decommissioning of all unowned applications" },
        { id: 'B', text: "Assignment of clear ownership to all business applications" },
        { id: 'C', text: "Conducting monthly vulnerability assessments on all applications" },
        { id: 'D', text: "Outsourcing the management of these applications to third-party vendors" }
      ],
      correctOptionId: 'B',
      explanation: "Clear ownership ensures accountability for maintenance, updates, and security of each application."
    },
    {
      id: 'ed3-q71',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sophia receives an email from her bank asking her to urgently update details due to a system upgrade, with a link to a bank-look-alike site. What should she do FIRST?",
      options: [
        { id: 'A', text: "Follow the link and update her details promptly" },
        { id: 'B', text: "Forward the email to friends and family" },
        { id: 'C', text: "Delete the email immediately" },
        { id: 'D', text: "Contact her bank through official channels to verify the email" }
      ],
      correctOptionId: 'D',
      explanation: "Verifying the request via official bank channels is the safest way to confirm legitimacy before taking any action."
    },
    {
      id: 'ed3-q72',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech has multiple applications across different cloud providers and struggles to manage and analyze logs from disparate sources. Which solution BEST helps centralize logs?",
      options: [
        { id: 'A', text: "Network Intrusion Detection System (NIDS)" },
        { id: 'B', text: "Log Aggregation Tool" },
        { id: 'C', text: "Data Loss Prevention (DLP) software" },
        { id: 'D', text: "Vulnerability Scanner" }
      ],
      correctOptionId: 'B',
      explanation: "Log aggregation tools collect and centralize logs from various systems to support unified analysis and correlation."
    },
    {
      id: 'ed3-q73',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech wants a comprehensive, specialized source of intelligence about the latest cyber threats targeting its specific industry, beyond OSINT. What should it do?",
      options: [
        { id: 'A', text: "Implement internal honeypots to trap attackers" },
        { id: 'B', text: "Subscribe to a third-party threat intelligence feed" },
        { id: 'C', text: "Regularly attend cybersecurity conferences" },
        { id: 'D', text: "Use open-source vulnerability scanners" }
      ],
      correctOptionId: 'B',
      explanation: "A third-party threat intelligence feed provides curated, often industry-specific, real-time threat data."
    },
    {
      id: 'ed3-q74',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An employee gets a call from someone claiming to be IT, asking for login credentials to perform an urgent update. The employee is suspicious because IT normally sends email notifications about updates. Which red flag is this?",
      options: [
        { id: 'A', text: "The caller did not use technical jargon" },
        { id: 'B', text: "IT normally sends email notifications about updates" },
        { id: 'C', text: "The employee was not expecting any updates" },
        { id: 'D', text: "The caller's voice sounded unfamiliar" }
      ],
      correctOptionId: 'B',
      explanation: "Deviation from the organization’s standard update procedure (email notifications) is a strong sign of impersonation."
    },
    {
      id: 'ed3-q75',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Your client wants to ensure that a promising vendor periodically examines and strengthens its internal procedures and security controls. What should you advise them to request from the vendor?",
      options: [
        { id: 'A', text: "The vendor's business continuity plan" },
        { id: 'B', text: "A list of the vendor's clients" },
        { id: 'C', text: "Evidence of internal audits" },
        { id: 'D', text: "The vendor's company mission statement" }
      ],
      correctOptionId: 'C',
      explanation: "Evidence of internal audits shows that the vendor regularly reviews and improves its controls and procedures."
    },
    {
      id: 'ed3-q76',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechDynamics serves a global clientele across multiple time zones and wants to schedule maintenance with minimal disruption. What should they do?",
      options: [
        { id: 'A', text: "Schedule maintenance during the headquarters' busiest local hours" },
        { id: 'B', text: "Stagger maintenance based on each client's peak hours" },
        { id: 'C', text: "Perform maintenance only after a system breakdown" },
        { id: 'D', text: "Establish a consistent maintenance window during off-peak hours for most clients" }
      ],
      correctOptionId: 'D',
      explanation: "A consistent maintenance window aligned with off-peak hours for the majority of users balances predictability and minimal impact."
    },
    {
      id: 'ed3-q77',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A defense contractor’s detailed missile system schematics are classified, but an overview document is available only to a select group of partners. How should the overview document be classified?",
      options: [
        { id: 'A', text: "Public" },
        { id: 'B', text: "Restricted" },
        { id: 'C', text: "Confidential" },
        { id: 'D', text: "Top Secret" }
      ],
      correctOptionId: 'B',
      explanation: "Restricted classification limits access to a defined group, appropriate for an overview shared with selected partners."
    },
    {
      id: 'ed3-q78',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFusion and CodeRush are collaborating on a project expected to define industry standards for a new coding language. They have an understanding of shared responsibilities but no binding obligations yet. Which agreement best suits their current understanding?",
      options: [
        { id: 'A', text: "Service-level agreement (SLA)" },
        { id: 'B', text: "Non-disclosure agreement (NDA)" },
        { id: 'C', text: "Memorandum of agreement (MOA)" },
        { id: 'D', text: "Licensing agreement" }
      ],
      correctOptionId: 'C',
      explanation: "An MOA documents mutual understandings and roles, often without imposing the full legal obligations of a detailed contract."
    },
    {
      id: 'ed3-q79',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security analyst reviews a report about an application that allows attackers to upload malicious scripts, which when executed grant complete control over the application. How should this vulnerability be primarily classified?",
      options: [
        { id: 'A', text: "Integrity vulnerability" },
        { id: 'B', text: "Availability vulnerability" },
        { id: 'C', text: "Remote code execution vulnerability" },
        { id: 'D', text: "Disclosure vulnerability" }
      ],
      correctOptionId: 'C',
      explanation: "Remote code execution vulnerabilities allow attackers to run arbitrary code, potentially taking full control of the application."
    },
    {
      id: 'ed3-q80',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution wants to protect customer financial data from unauthorized internal users. Which measure is MOST effective?",
      options: [
        { id: 'A', text: "Deploying perimeter firewalls" },
        { id: 'B', text: "Implementing two-factor authentication (2FA) for all customer accounts" },
        { id: 'C', text: "Enforcing strict access controls based on the principle of least privilege" },
        { id: 'D', text: "Conducting yearly cybersecurity awareness training" }
      ],
      correctOptionId: 'C',
      explanation: "Least-privilege access controls ensure that even insiders only see data required for their job, reducing risk of internal misuse."
    },
    {
      id: 'ed3-q81',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alice is preparing to obtain a digital certificate for a new website. What step must she first undertake before requesting a certificate from a Certificate Authority (CA)?",
      options: [
        { id: 'A', text: "Generate a public-private key pair" },
        { id: 'B', text: "Submit her passport copy to the CA" },
        { id: 'C', text: "Download the latest CA root certificate" },
        { id: 'D', text: "Encrypt the website with symmetric encryption" }
      ],
      correctOptionId: 'A',
      explanation: "The certificate is bound to a public key; Alice must generate a key pair and create a CSR containing the public key for the CA."
    },
    {
      id: 'ed3-q82',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFin Bank is implementing new transaction processing software. The cybersecurity team wants to understand how this change might affect the organization’s security posture. What analysis are they referring to?",
      options: [
        { id: 'A', text: "Risk appetite assessment" },
        { id: 'B', text: "Performance benchmarking" },
        { id: 'C', text: "Impact analysis" },
        { id: 'D', text: "Penetration testing" }
      ],
      correctOptionId: 'C',
      explanation: "Impact analysis evaluates the potential consequences of a change, including how it may introduce new security risks."
    },
    {
      id: 'ed3-q83',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "ABC Corp has created a unique application using innovative algorithms and wants to prevent competitors from legally copying its functionality. What is the MOST suitable way to protect this intellectual property?",
      options: [
        { id: 'A', text: "Copyright the user interface design" },
        { id: 'B', text: "Apply for a patent for the innovative algorithms" },
        { id: 'C', text: "Store the application code in an encrypted vault" },
        { id: 'D', text: "Ensure all users sign an acceptable use policy (AUP)" }
      ],
      correctOptionId: 'B',
      explanation: "Patents provide exclusive legal rights to the underlying invention, preventing others from using the patented algorithms."
    },
    {
      id: 'ed3-q84',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureBank is selecting a vendor for its online transaction system and wants assurance that the vendor has robust, well-maintained security measures. Which step is MOST relevant?",
      options: [
        { id: 'A', text: "Checking the vendor's sales growth over five years" },
        { id: 'B', text: "Conducting due diligence regarding the vendor's security practices" },
        { id: 'C', text: "Comparing UI visual appeal to competitors" },
        { id: 'D', text: "Evaluating the vendor's marketing strategies" }
      ],
      correctOptionId: 'B',
      explanation: "Security due diligence reviews the vendor’s controls, history, and governance to ensure their security posture meets requirements."
    },
    {
      id: 'ed3-q85',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corp, a smart home device manufacturer, failed to implement standard security practices, and a tech review site publishes details of these vulnerabilities. What is XYZ Corp MOST likely to face immediately?",
      options: [
        { id: 'A', text: "An award for innovation in smart home technologies" },
        { id: 'B', text: "Reputational damage leading to decreased sales" },
        { id: 'C', text: "Increased partnerships with tech retailers" },
        { id: 'D', text: "A surge in employee recruitment" }
      ],
      correctOptionId: 'B',
      explanation: "Public exposure of security weaknesses usually erodes consumer trust and harms sales and brand reputation."
    },
    {
      id: 'ed3-q86',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company is being attacked specifically at the shopping cart feature and wants a firewall that understands web application commands and can protect at the application layer. What should they consider?",
      options: [
        { id: 'A', text: "Layer 4 Firewall" },
        { id: 'B', text: "Layer 2 Firewall" },
        { id: 'C', text: "Layer 7 Firewall" },
        { id: 'D', text: "Packet Filtering Firewall" }
      ],
      correctOptionId: 'C',
      explanation: "Layer 7 (application layer) firewalls can inspect and filter traffic based on HTTP semantics and application-level data."
    },
    {
      id: 'ed3-q87',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "John, a senior executive, receives a call from someone claiming to be the bank’s fraud department asking for an OTP to confirm transactions. What form of social engineering attack is he likely facing?",
      options: [
        { id: 'A', text: "Baiting" },
        { id: 'B', text: "Quizzing" },
        { id: 'C', text: "Vishing" },
        { id: 'D', text: "Pharming" }
      ],
      correctOptionId: 'C',
      explanation: "Vishing uses voice calls to phish sensitive information like OTPs from victims."
    },
    {
      id: 'ed3-q88',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DeltaCorp assesses that a breach could cause a $1M loss in sales. They can tolerate up to $500,000 in loss, but anything beyond that severely impacts operations, so they buy cyber insurance to cover the excess. What does the $500,000 figure represent?",
      options: [
        { id: 'A', text: "Risk appetite" },
        { id: 'B', text: "Risk threshold" },
        { id: 'C', text: "Risk capacity" },
        { id: 'D', text: "Risk assessment" }
      ],
      correctOptionId: 'B',
      explanation: "Risk threshold is the specific level of risk or loss the organization is willing to tolerate before it becomes unacceptable."
    },
    {
      id: 'ed3-q89',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial organization collects and stores PII of its customers under strict data regulations. Which strategy is MOST appropriate to ensure compliance?",
      options: [
        { id: 'A', text: "Use open source encryption algorithms without validation" },
        { id: 'B', text: "Only store customer data on physical, on-site servers" },
        { id: 'C', text: "Implement data classification and labeling procedures" },
        { id: 'D', text: "Limit the number of administrators with access to the data" }
      ],
      correctOptionId: 'C',
      explanation: "Data classification and labeling ensure regulated data is clearly identified and handled according to its required controls."
    },
    {
      id: 'ed3-q90',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An organization is moving to a cloud-centric, zero-trust network and wants integrated cloud security, zero-trust access, and WAN capabilities ensuring secure access for employees everywhere. Which solution best addresses this?",
      options: [
        { id: 'A', text: "Remote Desktop Services (RDS)" },
        { id: 'B', text: "Secure access service edge (SASE)" },
        { id: 'C', text: "Content Delivery Network (CDN)" },
        { id: 'D', text: "Virtual Local Area Network (VLAN)" }
      ],
      correctOptionId: 'B',
      explanation: "SASE converges networking and security (including ZTNA and cloud security) into a single cloud-delivered service."
    },
    {
      id: 'ed3-q91',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "MedTech, a medical device manufacturer, fails to meet required standards for device security and patient data protection. What repercussion might be MOST critical for MedTech’s ongoing operations?",
      options: [
        { id: 'A', text: "Increased public relations campaigns" },
        { id: 'B', text: "Short-term stock price fluctuations" },
        { id: 'C', text: "Offering discounts on their devices" },
        { id: 'D', text: "Loss of license to manufacture and distribute" }
      ],
      correctOptionId: 'D',
      explanation: "Regulators can revoke or suspend licenses for non-compliance with safety and data protection standards, halting operations."
    },
    {
      id: 'ed3-q92',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational is replacing firewalls at all global branches and wants stateful inspection, application-level filtering, and integration with threat intelligence feeds. Which solution is MOST suitable?",
      options: [
        { id: 'A', text: "Stateful Packet Inspection Firewall" },
        { id: 'B', text: "Proxy Server" },
        { id: 'C', text: "Web Application Firewall (WAF)" },
        { id: 'D', text: "Next-Generation Firewall (NGFW)" }
      ],
      correctOptionId: 'D',
      explanation: "NGFWs combine traditional stateful inspection with deep application awareness and integration with threat intelligence."
    },
    {
      id: 'ed3-q93',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security analyst sees a reference to CVE-2023-12345 with a CVSS score of 9.5. Which conclusion can they draw?",
      options: [
        { id: 'A', text: "The vulnerability was first identified in the year 2023" },
        { id: 'B', text: "The vulnerability is of low severity" },
        { id: 'C', text: "The vulnerability affects only software produced in 2023" },
        { id: 'D', text: "CVE-2023-12345 is the software vendor's internal code for the vulnerability" }
      ],
      correctOptionId: 'A',
      explanation: "In CVE IDs, the year denotes when the vulnerability was published, and a CVSS 9.5 indicates a critical severity, not low."
    },
    {
      id: 'ed3-q94',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GlobalTech is partnering with WebSolutions, a web host, and wants a standard set of terms for ongoing transactions (payments, delivery, warranties). Which agreement is most suitable?",
      options: [
        { id: 'A', text: "Memorandum of understanding (MOU)" },
        { id: 'B', text: "Non-disclosure agreement (NDA)" },
        { id: 'C', text: "Licensing agreement" },
        { id: 'D', text: "Master service agreement (MSA)" }
      ],
      correctOptionId: 'D',
      explanation: "An MSA defines overarching terms for the business relationship, under which individual orders and SOWs can be placed."
    },
    {
      id: 'ed3-q95',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech has developed a patch for a critical vulnerability in its primary software product. Before distributing the patch to customers, what should it ideally do?",
      options: [
        { id: 'A', text: "Deploy the patch on all company systems immediately" },
        { id: 'B', text: "Notify the media about the vulnerability" },
        { id: 'C', text: "Test the patch in a controlled environment" },
        { id: 'D', text: "Offer compensation to affected customers" }
      ],
      correctOptionId: 'C',
      explanation: "Testing in a controlled environment helps ensure the patch fixes the issue without introducing new problems."
    },
    {
      id: 'ed3-q96',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Employees at a software firm frequently visit an industry forum. Several report malware infections shortly after accessing it, and investigations show the forum was compromised to target that company’s developers. Which attack type is this?",
      options: [
        { id: 'A', text: "Spear Phishing" },
        { id: 'B', text: "Watering Hole" },
        { id: 'C', text: "Drive-by Download" },
        { id: 'D', text: "Whaling" }
      ],
      correctOptionId: 'B',
      explanation: "A watering hole attack compromises a site frequented by targets to infect them when they visit."
    },
    {
      id: 'ed3-q97',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechGiant Corp hires a cybersecurity firm to perform penetration testing. The CEO wants to ensure critical systems are not targeted and operations are not disrupted. What should be established to define the scope and boundaries of the test?",
      options: [
        { id: 'A', text: "Service-level agreement (SLA)" },
        { id: 'B', text: "Non-disclosure agreement (NDA)" },
        { id: 'C', text: "Rules of engagement (ROE)" },
        { id: 'D', text: "Memorandum of understanding (MOU)" }
      ],
      correctOptionId: 'C',
      explanation: "The ROE document defines allowed methods, targets, time windows, and other constraints for penetration testing."
    },
    {
      id: 'ed3-q98',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a vulnerability assessment, TechInc discovers a weakness that, if exploited, would allow an attacker to modify existing user accounts and privileges. How is this vulnerability best classified?",
      options: [
        { id: 'A', text: "Elevation of privilege vulnerability" },
        { id: 'B', text: "Disclosure vulnerability" },
        { id: 'C', text: "Replay vulnerability" },
        { id: 'D', text: "Remote code execution vulnerability" }
      ],
      correctOptionId: 'A',
      explanation: "If attackers can modify accounts and privileges, they are effectively elevating their level of access within the system."
    },
    {
      id: 'ed3-q99',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce company wants immediate notification of application errors and unauthorized changes to its online payment app’s codebase. Which tool should it implement?",
      options: [
        { id: 'A', text: "Web Application Firewall (WAF)" },
        { id: 'B', text: "Application Performance Monitoring (APM)" },
        { id: 'C', text: "Domain Name System (DNS) monitoring tool" },
        { id: 'D', text: "Network flow analyzer" }
      ],
      correctOptionId: 'B',
      explanation: "APM tools monitor application performance and can detect anomalies, errors, and unexpected code changes."
    },
    {
      id: 'ed3-q100',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security analyst wants a proactive way to receive real-time threat intelligence from the dark web about potential vulnerabilities affecting the organization. What provides the BEST method?",
      options: [
        { id: 'A', text: "Utilizing a vulnerability scanner on the internal network" },
        { id: 'B', text: "Subscribing to a dark web threat intelligence feed" },
        { id: 'C', text: "Conducting regular penetration tests on external systems" },
        { id: 'D', text: "Reviewing daily reports from the organization's SIEM system" }
      ],
      correctOptionId: 'B',
      explanation: "A dark web threat intelligence feed continuously monitors underground sources and pushes relevant, real-time alerts."
    }
  ],

  // Exam 4
[
    {
      id: 'ed4-q301',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution is implementing a system where customers can verify the integrity of their monthly statements without having access to the original data. Which of the following techniques would be MOST appropriate for this task?",
      options: [
        { id: 'A', text: "Encrypting the statements using AES" },
        { id: 'B', text: "Compressing the statements to reduce file size" },
        { id: 'C', text: "Hashing the statements and providing the hash value to the customers" },
        { id: 'D', text: "Tokenizing sensitive data within the statements" }
      ],
      correctOptionId: 'C',
      explanation: "Hashing lets customers recompute a hash on the received statement and compare it to the official hash to verify integrity without needing the original data."
    },
    {
      id: 'ed4-q302',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company is developing a new video conferencing tool and wants all audio and video data transmitted between participants to be encrypted and protected from eavesdropping. Which type of encryption should the developers implement?",
      options: [
        { id: 'A', text: "Endpoint Encryption" },
        { id: 'B', text: "Transport-layer Encryption" },
        { id: 'C', text: "Volume-level Encryption" },
        { id: 'D', text: "Database-level Encryption" }
      ],
      correctOptionId: 'B',
      explanation: "Transport-layer encryption (e.g., TLS) protects data in transit between endpoints, preventing eavesdropping on video and audio streams."
    },
    {
      id: 'ed4-q303',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A global finance firm wants a backup site that allows them to continue operations with minimal downtime and no data loss after a disaster. Which type of backup site is most appropriate?",
      options: [
        { id: 'A', text: "Cold site" },
        { id: 'B', text: "Warm site" },
        { id: 'C', text: "Hot site" },
        { id: 'D', text: "Mobile site" }
      ],
      correctOptionId: 'C',
      explanation: "A hot site is fully equipped and kept in sync with current data, enabling nearly immediate failover with minimal downtime and data loss."
    },
    {
      id: 'ed4-q304',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a routine update, a web server application requires a restart. What should the administrator do FIRST to ensure client connections aren’t abruptly terminated during the restart?",
      options: [
        { id: 'A', text: "Redirect incoming traffic to a backup server" },
        { id: 'B', text: "Increase the server's memory" },
        { id: 'C', text: "Manually terminate all active client sessions" },
        { id: 'D', text: "Check for available patches for the application" }
      ],
      correctOptionId: 'A',
      explanation: "Redirecting traffic to a backup server lets clients continue working while the primary server restarts, avoiding abrupt disconnections."
    },
    {
      id: 'ed4-q305',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Kara notices unusual account activity tied to her credentials. IT discovers a program on her computer that records her keystrokes. What type of malware was found?",
      options: [
        { id: 'A', text: "Ransomware" },
        { id: 'B', text: "Keylogger" },
        { id: 'C', text: "Adware" },
        { id: 'D', text: "Rootkit" }
      ],
      correctOptionId: 'B',
      explanation: "A keylogger specifically captures and records keystrokes to steal credentials and other sensitive input."
    },
    {
      id: 'ed4-q306',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a CRM application update, users experience connectivity issues. As a security administrator, which step should you take FIRST to address the problem without causing data loss?",
      options: [
        { id: 'A', text: "Restart the application immediately" },
        { id: 'B', text: "Disconnect all users and then restart the application" },
        { id: 'C', text: "Validate the update's integrity and then restart the application" },
        { id: 'D', text: "Reinstall the previous version of the CRM application" }
      ],
      correctOptionId: 'C',
      explanation: "Validating the update’s integrity before restarting ensures the update was applied correctly and avoids compounding issues."
    },
    {
      id: 'ed4-q307',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software company wants to release a user manual that details how to use a new product, its features, and basic troubleshooting steps. How should this user manual be classified?",
      options: [
        { id: 'A', text: "Confidential" },
        { id: 'B', text: "Restricted" },
        { id: 'C', text: "Public" },
        { id: 'D', text: "Internal" }
      ],
      correctOptionId: 'C',
      explanation: "User manuals are intended for all users and typically contain no sensitive information, so they are classified as public."
    },
    {
      id: 'ed4-q308',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jake runs an old game from a friend and later finds his documents duplicated with slight modifications and his system performance deteriorating. Which type of malware most likely caused this?",
      options: [
        { id: 'A', text: "Adware" },
        { id: 'B', text: "Trojan" },
        { id: 'C', text: "Worm" },
        { id: 'D', text: "Virus" }
      ],
      correctOptionId: 'D',
      explanation: "Viruses attach to legitimate files, replicate, and can modify or corrupt documents while degrading system performance."
    },
    {
      id: 'ed4-q309',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Caroline, a security analyst, detects an unfamiliar file on a mission-critical server and suspects malware. What is the BEST immediate action she should take?",
      options: [
        { id: 'A', text: "Delete the file immediately to prevent further damage" },
        { id: 'B', text: "Quarantine the file to prevent it from executing or spreading" },
        { id: 'C', text: "Make a copy of the file for further analysis" },
        { id: 'D', text: "Notify all employees about the suspicious file" }
      ],
      correctOptionId: 'B',
      explanation: "Quarantining isolates the suspicious file to prevent execution or spread while preserving it for later analysis."
    },
    {
      id: 'ed4-q310',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alex buys a new laptop and notices several pre-installed applications he doesn’t need, and overall performance is slower than expected. Which type of software is most likely causing this degradation?",
      options: [
        { id: 'A', text: "Ransomware" },
        { id: 'B', text: "Bloatware" },
        { id: 'C', text: "Spyware" },
        { id: 'D', text: "Adware" }
      ],
      correctOptionId: 'B',
      explanation: "Bloatware consists of unnecessary pre-installed programs that consume resources and slow down the system."
    },
    {
      id: 'ed4-q311',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Julia discovers that a recently installed application named “PhotoEditorPro.exe” is silently exfiltrating sensitive company data to an external IP. Which type of malware is this?",
      options: [
        { id: 'A', text: "Worm" },
        { id: 'B', text: "Ransomware" },
        { id: 'C', text: "Trojan" },
        { id: 'D', text: "Adware" }
      ],
      correctOptionId: 'C',
      explanation: "A Trojan masquerades as legitimate software but performs malicious actions such as data exfiltration."
    },
    {
      id: 'ed4-q312',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jane notices her browser homepage changed unexpectedly, a new toolbar appeared, and she is seeing many targeted ads. Which type of malware is most likely affecting her computer?",
      options: [
        { id: 'A', text: "Ransomware" },
        { id: 'B', text: "Worm" },
        { id: 'C', text: "Spyware" },
        { id: 'D', text: "Botnet" }
      ],
      correctOptionId: 'C',
      explanation: "Spyware often alters browser settings and injects targeted advertising while tracking user activity."
    },
    {
      id: 'ed4-q313',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A web server hosting an e-commerce site is scheduled for an OS upgrade expected to last 30 minutes. What should be a primary consideration to minimize customer impact due to downtime?",
      options: [
        { id: 'A', text: "Implementing a load balancer" },
        { id: 'B', text: "Taking a backup of the e-commerce site" },
        { id: 'C', text: "Posting a maintenance notice a week in advance" },
        { id: 'D', text: "Upgrading the server's hardware" }
      ],
      correctOptionId: 'A',
      explanation: "A load balancer can route traffic to other servers while one is offline for maintenance, reducing visible downtime."
    },
    {
      id: 'ed4-q314',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a major cybersecurity incident, ABC Tech revamped its incident response procedures but did not update the documentation. During a later incident, confusion arose about the steps to follow. What is the MOST direct implication of not updating the incident response documentation?",
      options: [
        { id: 'A', text: "The company may have to invest in new cybersecurity tools" },
        { id: 'B', text: "Stakeholders might lose trust in the company’s ability to handle incidents" },
        { id: 'C', text: "Incident response might be inconsistent and less effective" },
        { id: 'D', text: "ABC Tech may have to hire external consultants for incident response" }
      ],
      correctOptionId: 'C',
      explanation: "Out-of-date procedures lead to inconsistent, less effective responses because staff lack clear, current guidance."
    },
    {
      id: 'ed4-q315',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A network administrator receives a new security patch for a mission-critical application. What is the BEST action to take before applying this patch in the live environment?",
      options: [
        { id: 'A', text: "Apply the patch immediately to ensure system security" },
        { id: 'B', text: "Notify all users about the upcoming downtime due to the patch" },
        { id: 'C', text: "Test the patch in a separate testing environment" },
        { id: 'D', text: "Take a backup of only the mission-critical application" }
      ],
      correctOptionId: 'C',
      explanation: "Testing the patch in a non-production environment validates its behavior and reduces the risk of outages in production."
    },
    {
      id: 'ed4-q316',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company discovers an unauthorized wireless access point using the same SSID as the official network and configured without encryption. What type of wireless attack is this indicative of?",
      options: [
        { id: 'A', text: "War Driving" },
        { id: 'B', text: "Wireless Phishing" },
        { id: 'C', text: "Bluejacking" },
        { id: 'D', text: "Evil Twin" }
      ],
      correctOptionId: 'D',
      explanation: "An evil twin is a rogue access point mimicking a legitimate one to trick users into connecting, enabling interception."
    },
    {
      id: 'ed4-q317',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An IT manager wants to protect data stored on laptops for remote employees so that the entire drive contents are unreadable if a laptop is lost or stolen. Which encryption level best addresses this?",
      options: [
        { id: 'A', text: "File-level Encryption" },
        { id: 'B', text: "Transport-layer Encryption" },
        { id: 'C', text: "Full-disk Encryption" },
        { id: 'D', text: "Database-level Encryption" }
      ],
      correctOptionId: 'C',
      explanation: "Full-disk encryption protects all data on the drive by requiring credentials or a key before any data can be read."
    },
    {
      id: 'ed4-q318',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An e-commerce website suddenly experiences a sharp increase in traffic from many IP addresses worldwide, making it slow and occasionally inaccessible. What type of network attack is this likely?",
      options: [
        { id: 'A', text: "Man-in-the-middle attack" },
        { id: 'B', text: "DNS spoofing" },
        { id: 'C', text: "Distributed denial-of-service (DDoS) attack" },
        { id: 'D', text: "ARP poisoning" }
      ],
      correctOptionId: 'C',
      explanation: "A DDoS attack uses many systems to flood a target with requests, overwhelming resources and degrading availability."
    },
    {
      id: 'ed4-q319',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security administrator plans to apply a critical update to the company’s firewall during a maintenance window. Which action is MOST crucial to minimize downtime?",
      options: [
        { id: 'A', text: "Notifying the firewall vendor about the update" },
        { id: 'B', text: "Disabling all firewall rules temporarily" },
        { id: 'C', text: "Creating a rollback plan in case of update failure" },
        { id: 'D', text: "Scheduling the update during peak business hours" }
      ],
      correctOptionId: 'C',
      explanation: "A rollback plan allows quick reversion to a known good state if the update causes problems, minimizing downtime."
    },
    {
      id: 'ed4-q320',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A global e-commerce website wants customer service reps to assist with order issues without exposing full credit card details. Which method should IT implement?",
      options: [
        { id: 'A', text: "Replace all digits of the credit card number with random characters" },
        { id: 'B', text: "Display only the last four digits of the credit card number while masking the rest" },
        { id: 'C', text: "Encrypt the credit card number with a symmetric key" },
        { id: 'D', text: "Use a hash function to represent the credit card number" }
      ],
      correctOptionId: 'B',
      explanation: "Masking all but the last four digits allows support staff to reference the card without seeing the full PAN."
    },
    {
      id: 'ed4-q321',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security analyst at DataCorp must prevent unauthorized external applications from connecting to their server. Which approach should they primarily rely on?",
      options: [
        { id: 'A', text: "Implement an allow list for approved applications" },
        { id: 'B', text: "Monitor server CPU usage" },
        { id: 'C', text: "Regularly patch server software" },
        { id: 'D', text: "Encrypt data at rest on the server" }
      ],
      correctOptionId: 'A',
      explanation: "An application allow list only permits explicitly approved applications to connect, blocking unauthorized ones by default."
    },
    {
      id: 'ed4-q322',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a database system upgrade, which action should be RESTRICTED until the upgrade is validated to maintain security?",
      options: [
        { id: 'A', text: "Monitoring the database for any anomalies" },
        { id: 'B', text: "Allowing end-users to access the upgraded database" },
        { id: 'C', text: "Making regular backups of the database" },
        { id: 'D', text: "Reviewing the database system logs" }
      ],
      correctOptionId: 'B',
      explanation: "End-user access should be restricted until the upgraded system is validated to avoid exposing untested issues."
    },
    {
      id: 'ed4-q323',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial organization uses manual files instead of version control for documenting system changes. During an audit, it’s hard to tell which version of a critical file is most recent and accurate. What is the PRIMARY risk of not implementing version control?",
      options: [
        { id: 'A', text: "Increased storage requirements for multiple files" },
        { id: 'B', text: "Difficulty in collaborating between team members" },
        { id: 'C', text: "Lack of traceability and difficulty reverting to a known stable state" },
        { id: 'D', text: "Greater need for training staff on manual documentation" }
      ],
      correctOptionId: 'C',
      explanation: "Version control tracks changes and supports reversion to known good versions; without it, traceability and rollback are difficult."
    },
    {
      id: 'ed4-q324',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Your organization plans to upgrade a database server that supports an e-commerce application. Documentation reveals many applications depend on this server. Which step should be taken FIRST to ensure a smooth upgrade?",
      options: [
        { id: 'A', text: "Upgrade the database server immediately to benefit from new features" },
        { id: 'B', text: "Perform a backup of the database server" },
        { id: 'C', text: "Identify and test all applications that have dependencies on the database server" },
        { id: 'D', text: "Inform users about potential downtime during the upgrade" }
      ],
      correctOptionId: 'C',
      explanation: "Understanding and testing all dependent applications first prevents unexpected outages or breakage after the upgrade."
    },
    {
      id: 'ed4-q325',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational corporation fears losing access to encrypted data due to private key loss or compromise and asks a third party to securely hold copies of its cryptographic keys. What is this system called?",
      options: [
        { id: 'A', text: "Public Key Repository" },
        { id: 'B', text: "Key Generation Center" },
        { id: 'C', text: "Key Escrow" },
        { id: 'D', text: "Key Renewal Service" }
      ],
      correctOptionId: 'C',
      explanation: "Key escrow involves securely storing copies of cryptographic keys with a trusted third party for recovery."
    },
    {
      id: 'ed4-q326',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A developer embeds code in an application that corrupts the database if his name is removed from the credits. Months after he leaves, the database is corrupted when the credits are updated. What type of malware is this?",
      options: [
        { id: 'A', text: "Trojan" },
        { id: 'B', text: "Spyware" },
        { id: 'C', text: "Adware" },
        { id: 'D', text: "Logic bomb" }
      ],
      correctOptionId: 'D',
      explanation: "A logic bomb is malicious code that triggers when specific conditions are met, such as a name being removed."
    },
    {
      id: 'ed4-q327',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An employee notices a stranger standing close with an unfamiliar device as she uses her RFID badge to enter the building. Later, a colleague’s badge stops working unexpectedly. What attack should the security team suspect?",
      options: [
        { id: 'A', text: "Brute force attack on the access control system" },
        { id: 'B', text: "RFID cloning" },
        { id: 'C', text: "Tailgating" },
        { id: 'D', text: "RFID jamming" }
      ],
      correctOptionId: 'B',
      explanation: "RFID cloning captures a badge’s signal to create a duplicate, often done with a nearby reader device."
    },
    {
      id: 'ed4-q328',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An employee installs an app on a company-issued mobile device from a website instead of the approved app store. Soon, sensitive data is sent to an unknown server. What mobile vulnerability was exploited?",
      options: [
        { id: 'A', text: "Inadequate password policies" },
        { id: 'B', text: "Open Wi-Fi connection" },
        { id: 'C', text: "Mobile device side loading" },
        { id: 'D', text: "Lack of mobile device encryption" }
      ],
      correctOptionId: 'C',
      explanation: "Side loading apps from untrusted sources bypasses vetting and can introduce malicious software that exfiltrates data."
    },
    {
      id: 'ed4-q329',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A user trying to visit an online banking site is redirected to a site with a nearly identical look but slightly different URL that asks for extra personal details. Which DNS attack is likely occurring?",
      options: [
        { id: 'A', text: "DNS Tunneling" },
        { id: 'B', text: "DNS Fast Flux" },
        { id: 'C', text: "DNS Cache Poisoning" },
        { id: 'D', text: "Domain Hijacking" }
      ],
      correctOptionId: 'C',
      explanation: "DNS cache poisoning corrupts DNS records so users are redirected to malicious look-alike sites instead of the legitimate one."
    },
    {
      id: 'ed4-q330',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An IT security team learns that a new, previously unknown vulnerability is being actively exploited and no vendor patch exists yet. What is this vulnerability called?",
      options: [
        { id: 'A', text: "Legacy vulnerability" },
        { id: 'B', text: "Zero-day vulnerability" },
        { id: 'C', text: "Patched vulnerability" },
        { id: 'D', text: "Known vulnerability" }
      ],
      correctOptionId: 'B',
      explanation: "A zero-day vulnerability is an unknown flaw with no patch available, often already being exploited."
    },
    {
      id: 'ed4-q331',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An online payment gateway wants to enhance security by replacing sensitive cardholder data with a unique identifier that has no intrinsic value. Which method should they implement?",
      options: [
        { id: 'A', text: "Hashing the card data" },
        { id: 'B', text: "Encrypting the card data" },
        { id: 'C', text: "Masking the card data" },
        { id: 'D', text: "Tokenizing the card data" }
      ],
      correctOptionId: 'D',
      explanation: "Tokenization replaces sensitive data with a non-sensitive token that maps back to the original only in secure systems."
    },
    {
      id: 'ed4-q332',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A corporation uses encryption algorithms that were deprecated years ago. Which cryptographic vulnerability are they most exposed to?",
      options: [
        { id: 'A', text: "Key generation flaw" },
        { id: 'B', text: "Weak algorithms susceptible to attacks" },
        { id: 'C', text: "Inadequate public key infrastructure" },
        { id: 'D', text: "Mismanagement of cryptographic keys" }
      ],
      correctOptionId: 'B',
      explanation: "Deprecated algorithms often have known weaknesses and are easier to break with modern computing and techniques."
    },
    {
      id: 'ed4-q333',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After changing load balancer configurations, a logistics company experiences technical issues. Troubleshooting is complicated because network diagrams weren’t updated. What is the MAJOR consequence of not having updated diagrams?",
      options: [
        { id: 'A', text: "The servers might need a hardware upgrade" },
        { id: 'B', text: "The company might need to revert to the old load balancer configuration" },
        { id: 'C', text: "It increases the time and complexity of troubleshooting" },
        { id: 'D', text: "Customers might prefer other logistics companies" }
      ],
      correctOptionId: 'C',
      explanation: "Outdated diagrams make it harder to understand the current environment, slowing down troubleshooting and resolution."
    },
    {
      id: 'ed4-q334',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An online banking site automatically logs users out after 10 minutes of inactivity to prevent others from altering their banking details on an unattended session. Which CIA triad principle is MOST directly addressed?",
      options: [
        { id: 'A', text: "Confidentiality" },
        { id: 'B', text: "Availability" },
        { id: 'C', text: "Authentication" },
        { id: 'D', text: "Integrity" }
      ],
      correctOptionId: 'D',
      explanation: "The control is framed as preventing unauthorized changes to data, which the exam maps to integrity in this context."
    },
    {
      id: 'ed4-q335',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Amy wants to securely send a confidential document to Bob so that only Bob can decrypt it. Which key should she use to encrypt the document?",
      options: [
        { id: 'A', text: "Amy's private key" },
        { id: 'B', text: "Amy's public key" },
        { id: 'C', text: "Bob's private key" },
        { id: 'D', text: "Bob's public key" }
      ],
      correctOptionId: 'D',
      explanation: "Encrypting with Bob’s public key ensures only Bob, who holds the corresponding private key, can decrypt the document."
    },
    {
      id: 'ed4-q336',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A startup’s mobile app offers exclusive content only to users in a specific country due to licensing. Which method should they use to ensure only users in that country can access the content?",
      options: [
        { id: 'A', text: "Integrate a time-based one-time password (TOTP) system" },
        { id: 'B', text: "Use geolocation-based access controls" },
        { id: 'C', text: "Enable biometric authentication" },
        { id: 'D', text: "Implement IP whitelisting" }
      ],
      correctOptionId: 'B',
      explanation: "Geolocation-based access controls determine a user’s physical location and can restrict content access to specific regions."
    },
    {
      id: 'ed4-q337',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company sees a rapid increase in network traffic and users report slowness. Many received a file named “updatePatch.exe” from coworkers who didn’t actually send it. Which type of malware is most likely responsible?",
      options: [
        { id: 'A', text: "Trojan" },
        { id: 'B', text: "Ransomware" },
        { id: 'C', text: "Adware" },
        { id: 'D', text: "Worm" }
      ],
      correctOptionId: 'D',
      explanation: "Worms self-replicate and often email themselves automatically, causing increased traffic and performance issues."
    },
    {
      id: 'ed4-q338',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software development company wants developers to be able to change shared code but testers only to view it. Which approach should be implemented?",
      options: [
        { id: 'A', text: "Assign all employees read-only permissions" },
        { id: 'B', text: "Provide testers with administrative rights" },
        { id: 'C', text: "Implement role-based access controls (RBAC)" },
        { id: 'D', text: "Use data encryption on the repository" }
      ],
      correctOptionId: 'C',
      explanation: "RBAC assigns permissions by role, allowing developers write access and testers read-only access to the code repository."
    },
    {
      id: 'ed4-q339',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A cloud-based database used by a new application is later found to be accessible without a password, leading to unauthorized access. Which misconfiguration primarily caused this breach?",
      options: [
        { id: 'A', text: "Default configurations left unchanged" },
        { id: 'B', text: "Insufficient network segmentation" },
        { id: 'C', text: "Encryption not enabled at rest" },
        { id: 'D', text: "Lack of intrusion detection system" }
      ],
      correctOptionId: 'A',
      explanation: "Leaving default settings, often including weak or no authentication, is a common misconfiguration leading to open access."
    },
    {
      id: 'ed4-q340',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Access logs for a secure server room show many failed login attempts using sequential access codes in a short span. What type of physical attack is likely being attempted?",
      options: [
        { id: 'A', text: "Tailgating" },
        { id: 'B', text: "Phishing" },
        { id: 'C', text: "Brute force" },
        { id: 'D', text: "Social engineering" }
      ],
      correctOptionId: 'C',
      explanation: "A brute-force attack systematically tries many combinations in sequence to guess the correct access code."
    },
    {
      id: 'ed4-q341',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A multinational e-commerce company wants to distribute incoming web traffic across multiple servers so that no single server is overwhelmed. Which method should they use?",
      options: [
        { id: 'A', text: "Deploy a web application firewall" },
        { id: 'B', text: "Implement server clustering" },
        { id: 'C', text: "Use hardware-based firewalls" },
        { id: 'D', text: "Set up a load balancer" }
      ],
      correctOptionId: 'D',
      explanation: "A load balancer distributes client requests across multiple servers, preventing any single server from being overloaded."
    },
    {
      id: 'ed4-q342',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alice needs to provide proof of authenticity for a digital document she’s sending to Bob so he knows it came from her. What should she use?",
      options: [
        { id: 'A', text: "Encrypt the document with Bob's private key" },
        { id: 'B', text: "Encrypt the document with her public key" },
        { id: 'C', text: "Sign the document with her private key" },
        { id: 'D', text: "Sign the document with Bob's public key" }
      ],
      correctOptionId: 'C',
      explanation: "A digital signature created with Alice’s private key can be verified with her public key, proving authenticity and integrity."
    },
    {
      id: 'ed4-q343',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company laptop containing sensitive financial data is stolen, but it was equipped with full-disk encryption. How does this impact the potential data breach?",
      options: [
        { id: 'A', text: "The data remains easily accessible, as only the boot sector was encrypted" },
        { id: 'B', text: "The data is protected, as the entire hard drive's contents are encrypted" },
        { id: 'C', text: "The data is partially encrypted, with only the user directories protected" },
        { id: 'D', text: "The data is vulnerable since full-disk encryption only applies when connected to the company network" }
      ],
      correctOptionId: 'B',
      explanation: "Full-disk encryption protects all data on the drive; without the key or credentials, stolen data remains unreadable."
    },
    {
      id: 'ed4-q344',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large news website goes down during a major news event. Logs show an overwhelming amount of traffic from IoT devices. Which type of DDoS attack is this?",
      options: [
        { id: 'A', text: "Reflected Attack" },
        { id: 'B', text: "Botnet Attack" },
        { id: 'C', text: "Amplification Attack" },
        { id: 'D', text: "Teardrop Attack" }
      ],
      correctOptionId: 'B',
      explanation: "IoT devices are often compromised into botnets, which are then used to launch large-scale DDoS attacks."
    },
    {
      id: 'ed4-q345',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security administrator must apply a configuration change to a critical service requiring a restart. Before restarting, which step is MOST important to ensure continuous service availability?",
      options: [
        { id: 'A', text: "Implement automatic service restart on failure" },
        { id: 'B', text: "Announce the restart to all company employees" },
        { id: 'C', text: "Schedule the restart during off-peak hours" },
        { id: 'D', text: "Take a backup of the current service configuration" }
      ],
      correctOptionId: 'A',
      explanation: "Automatic restart on failure helps the service recover quickly if the change causes a crash, improving availability."
    },
    {
      id: 'ed4-q346',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A finance department relies on a legacy application with known security flaws that cannot be easily replaced. How can the firm BEST mitigate the associated risks?",
      options: [
        { id: 'A', text: "Train the finance team about the latest cybersecurity threats" },
        { id: 'B', text: "Run the legacy application on the latest hardware to improve performance" },
        { id: 'C', text: "Place the legacy application behind a web application firewall (WAF)" },
        { id: 'D', text: "Frequently change the passwords of users who have access to the application" }
      ],
      correctOptionId: 'C',
      explanation: "A WAF can filter and block malicious traffic targeting known weaknesses in the legacy web application."
    },
    {
      id: 'ed4-q347',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A server will store both highly confidential customer data and non-sensitive marketing material. Only the confidential data should be encrypted. Which encryption level is most suitable?",
      options: [
        { id: 'A', text: "File-level Encryption" },
        { id: 'B', text: "Full-disk Encryption" },
        { id: 'C', text: "Partition Encryption" },
        { id: 'D', text: "Transport-layer Encryption" }
      ],
      correctOptionId: 'C',
      explanation: "Partition encryption allows encrypting only the partition holding confidential data while leaving other partitions unencrypted."
    },
    {
      id: 'ed4-q348',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An attacker implants software on a server that masks processes, files, and system data to remain hidden while keeping privileged access. What type of malware is this?",
      options: [
        { id: 'A', text: "Trojan" },
        { id: 'B', text: "Worm" },
        { id: 'C', text: "Logic Bomb" },
        { id: 'D', text: "Rootkit" }
      ],
      correctOptionId: 'D',
      explanation: "Rootkits are designed to hide their presence and maintain stealthy, privileged access by masking system artifacts."
    },
    {
      id: 'ed4-q349',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During initial penetration testing, Jackson uses tools that directly probe the target’s network to discover open ports and services, even though this activity can be detected. What type of reconnaissance is he performing?",
      options: [
        { id: 'A', text: "Threat analysis" },
        { id: 'B', text: "Passive reconnaissance" },
        { id: 'C', text: "Active reconnaissance" },
        { id: 'D', text: "Social engineering" }
      ],
      correctOptionId: 'C',
      explanation: "Active reconnaissance directly interacts with target systems (e.g., port scans) to gather detailed information."
    },
    {
      id: 'ed4-q350',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "HealthCareNow wants to ensure its new electronic health record (EHR) system adheres to national standards regarding patient data. Which type of audit is most appropriate?",
      options: [
        { id: 'A', text: "Self-assessment using internal standards" },
        { id: 'B', text: "Third-party risk assessment" },
        { id: 'C', text: "External regulatory audit" },
        { id: 'D', text: "Informal peer review" }
      ],
      correctOptionId: 'C',
      explanation: "An external regulatory audit by a competent authority verifies compliance with national healthcare data regulations."
    },
    {
      id: 'ed4-q351',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A healthcare provider wants an additional layer of security so patient data remains confidential even if attackers gain unauthorized access to servers. What is the MOST effective solution?",
      options: [
        { id: 'A', text: "Use hash algorithms on all patient data" },
        { id: 'B', text: "Implement data deduplication techniques" },
        { id: 'C', text: "Encrypt the stored patient data" },
        { id: 'D', text: "Use a web application firewall (WAF)" }
      ],
      correctOptionId: 'C',
      explanation: "Encrypting data at rest ensures stolen data is unreadable without decryption keys, preserving confidentiality."
    },
    {
      id: 'ed4-q352',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "John, an EU citizen under GDPR, stops using an online platform and requests deletion of all his personal data. Under the “Right to be Forgotten,” what is the platform’s primary obligation?",
      options: [
        { id: 'A', text: "Retain the data but ensure it's never used for marketing" },
        { id: 'B', text: "Delete all personal data about John unless there's a legal reason to keep it" },
        { id: 'C', text: "Anonymize John's data and notify him" },
        { id: 'D', text: "Move John's data to a secure, encrypted server where it won't be accessed" }
      ],
      correctOptionId: 'B',
      explanation: "GDPR’s right to be forgotten requires erasing personal data unless retention is legally justified."
    },
    {
      id: 'ed4-q353',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFirm runs a security exercise where an external red team attacks and the internal team defends, detect, and mitigates in real time. What kind of penetration testing is this for the internal team?",
      options: [
        { id: 'A', text: "Offensive penetration testing" },
        { id: 'B', text: "Passive penetration testing" },
        { id: 'C', text: "Defensive penetration testing" },
        { id: 'D', text: "Black box testing" }
      ],
      correctOptionId: 'C',
      explanation: "Defensive penetration testing focuses on the blue team’s ability to detect and respond to simulated attacks."
    },
    {
      id: 'ed4-q354',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During an assessment, Ryan inputs larger-than-expected data into a field and the application crashes. What vulnerability has he likely uncovered?",
      options: [
        { id: 'A', text: "Input Validation Error" },
        { id: 'B', text: "Cross-Site Scripting (XSS)" },
        { id: 'C', text: "Buffer Overflow" },
        { id: 'D', text: "Insecure Direct Object Reference (IDOR)" }
      ],
      correctOptionId: 'C',
      explanation: "A buffer overflow occurs when more data is written than the buffer can handle, often causing crashes or code execution."
    },
    {
      id: 'ed4-q355',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution wants to ensure that if an attacker gains access to one part of the network, they cannot easily move laterally to more sensitive areas. Which method helps achieve this?",
      options: [
        { id: 'A', text: "Deploying a honeypot in every segment" },
        { id: 'B', text: "Implementing network segmentation" },
        { id: 'C', text: "Applying encryption on all data traffic" },
        { id: 'D', text: "Enabling two-factor authentication for all users" }
      ],
      correctOptionId: 'B',
      explanation: "Network segmentation isolates parts of the network, limiting lateral movement if one segment is compromised."
    },
    {
      id: 'ed4-q356',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Emily receives a phone call from someone claiming to be IT asking for her username and password for verification. How should she respond?",
      options: [
        { id: 'A', text: "Politely decline and report the call to the IT department" },
        { id: 'B', text: "Provide the caller with the username but not the password" },
        { id: 'C', text: "Ask the caller to email the request" },
        { id: 'D', text: "Hang up without saying anything" }
      ],
      correctOptionId: 'A',
      explanation: "This is vishing; she should refuse to share credentials and report the incident to IT for investigation."
    },
    {
      id: 'ed4-q357',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SafeNet combines its internal security team and external ethical hackers to collaboratively assess vulnerabilities and defenses in real time. What form of penetration testing is this?",
      options: [
        { id: 'A', text: "Black box testing" },
        { id: 'B', text: "Integrated penetration testing" },
        { id: 'C', text: "Defensive penetration testing" },
        { id: 'D', text: "Red team assessment" }
      ],
      correctOptionId: 'B',
      explanation: "Integrated (often purple-team) testing coordinates offensive and defensive teams to assess and improve both sides together."
    },
    {
      id: 'ed4-q358',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company wants to protect its proprietary algorithm from competitors by disguising the original code structure without changing behavior. What should they implement?",
      options: [
        { id: 'A', text: "Data masking on the algorithm’s output" },
        { id: 'B', text: "Obfuscation on the algorithm's code" },
        { id: 'C', text: "Encryption of the algorithm's storage location" },
        { id: 'D', text: "Implementing a hashing mechanism within the algorithm" }
      ],
      correctOptionId: 'B',
      explanation: "Code obfuscation transforms code into a harder-to-read form while preserving functionality, hindering reverse engineering."
    },
    {
      id: 'ed4-q359',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech commissions a penetration test on firmware and provides testers with source code, architecture diagrams, and internal details. What kind of penetration test is this?",
      options: [
        { id: 'A', text: "Zero-knowledge testing" },
        { id: 'B', text: "Open box testing" },
        { id: 'C', text: "Opaque testing" },
        { id: 'D', text: "Blind testing" }
      ],
      correctOptionId: 'B',
      explanation: "Open box (white box) testing gives testers full insight into internals to thoroughly assess vulnerabilities."
    },
    {
      id: 'ed4-q360',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Lisa is setting up a centralized system to correlate logs from multiple sources, detect malicious activities in real time, and generate security reports. Which tool should she use?",
      options: [
        { id: 'A', text: "Network Intrusion Detection System (NIDS)" },
        { id: 'B', text: "Web Application Firewall (WAF)" },
        { id: 'C', text: "Vulnerability Scanner" },
        { id: 'D', text: "Security Information and Event Management (SIEM)" }
      ],
      correctOptionId: 'D',
      explanation: "A SIEM ingests, correlates, and analyzes logs from many systems and provides alerts and reports on security events."
    },
    {
      id: 'ed4-q361',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "WebMasters LLC invites ethical hackers to find vulnerabilities in hosted websites without giving any details about servers or applications. Which penetration testing method is this?",
      options: [
        { id: 'A', text: "External testing" },
        { id: 'B', text: "Grey box testing" },
        { id: 'C', text: "Active testing" },
        { id: 'D', text: "Black box testing" }
      ],
      correctOptionId: 'D',
      explanation: "Black box testing is performed with no prior knowledge of internal architecture or configurations."
    },
    {
      id: 'ed4-q362',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "BestTech Co. finds its IT team unfamiliar with data breach response protocols but doesn’t want to run a live drill yet. What should the company implement?",
      options: [
        { id: 'A', text: "Upgrade their firewall systems" },
        { id: 'B', text: "Engage in a tabletop exercise" },
        { id: 'C', text: "Conduct a red team exercise" },
        { id: 'D', text: "Implement multi-factor authentication for all users" }
      ],
      correctOptionId: 'B',
      explanation: "Tabletop exercises walk teams through scenarios in discussion form to clarify roles and procedures without live impact."
    },
    {
      id: 'ed4-q363',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a third-party audit of information security controls, an organization receives a formal statement verifying the effectiveness of those controls. What is this statement called?",
      options: [
        { id: 'A', text: "Certification" },
        { id: 'B', text: "Accreditation" },
        { id: 'C', text: "Attestation" },
        { id: 'D', text: "Assurance" }
      ],
      correctOptionId: 'C',
      explanation: "An attestation is a formal declaration by an auditor confirming that specific criteria have been met."
    },
    {
      id: 'ed4-q364',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech hires a team that attempts to bypass security barriers, unlock doors, and access restricted floors by posing as maintenance staff. What type of testing is this?",
      options: [
        { id: 'A', text: "Network vulnerability scanning" },
        { id: 'B', text: "Physical penetration testing" },
        { id: 'C', text: "OS fingerprinting" },
        { id: 'D', text: "Source code review" }
      ],
      correctOptionId: 'B',
      explanation: "Physical penetration testing evaluates the effectiveness of physical security controls such as locks and access controls."
    },
    {
      id: 'ed4-q365',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "WebSoft Inc. launches a new web application and hires a firm to actively find and exploit vulnerabilities like real attackers would. What kind of penetration testing is this?",
      options: [
        { id: 'A', text: "White box testing" },
        { id: 'B', text: "Defensive penetration testing" },
        { id: 'C', text: "Offensive penetration testing" },
        { id: 'D', text: "Gray box testing" }
      ],
      correctOptionId: 'C',
      explanation: "Offensive penetration testing aggressively seeks and exploits weaknesses to assess real-world attack potential."
    },
    {
      id: 'ed4-q366',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "OnlineRetail Corp wants a detailed, formal external review of its security posture to present to shareholders after industry breaches. Which assessment should they choose?",
      options: [
        { id: 'A', text: "External examination of IT controls and operations" },
        { id: 'B', text: "Internal review of security protocols" },
        { id: 'C', text: "External regulatory audit on financial statements" },
        { id: 'D', text: "Informal feedback from industry peers" }
      ],
      correctOptionId: 'A',
      explanation: "An external examination of IT controls provides a structured, formal evaluation of security posture suitable for stakeholders."
    },
    {
      id: 'ed4-q367',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Ltd. wants its own IT department to first evaluate whether security measures align with required industry regulations before inviting external auditors. Which approach should they adopt?",
      options: [
        { id: 'A', text: "Third-party vulnerability scanning" },
        { id: 'B', text: "Internal compliance assessment" },
        { id: 'C', text: "External attestation" },
        { id: 'D', text: "Vendor risk assessment" }
      ],
      correctOptionId: 'B',
      explanation: "An internal compliance assessment checks conformance with regulations using internal resources before external review."
    },
    {
      id: 'ed4-q368',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SafeNet Banking Corporation wants official attestation that its cybersecurity measures are robust and compliant with industry standards. What should it opt for?",
      options: [
        { id: 'A', text: "Feedback from customers on the bank's app security" },
        { id: 'B', text: "Internal IT team's report on cybersecurity practices" },
        { id: 'C', text: "External independent third-party audit" },
        { id: 'D', text: "Informal evaluation by a cybersecurity consultancy" }
      ],
      correctOptionId: 'C',
      explanation: "An independent third-party audit provides recognized, formal attestation regarding cybersecurity controls and compliance."
    },
    {
      id: 'ed4-q369',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security administrator sees multiple unauthorized access attempts from a specific IP range and wants to temporarily block them. Which firewall configuration BEST addresses this?",
      options: [
        { id: 'A', text: "Configure an implicit deny rule for the specific IP range" },
        { id: 'B', text: "Set up a honeypot for the specific IP range" },
        { id: 'C', text: "Allow the IP range but set a bandwidth limit" },
        { id: 'D', text: "Add the IP range to a whitelist" }
      ],
      correctOptionId: 'A',
      explanation: "An explicit deny rule for that IP range blocks all traffic from those addresses to the network."
    },
    {
      id: 'ed4-q370',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Lisa uses a popular benchmark to ensure her organization’s web servers are securely configured (unnecessary services disabled, permissions correct). Which organization most likely provides this benchmark?",
      options: [
        { id: 'A', text: "PCI DSS" },
        { id: 'B', text: "OWASP" },
        { id: 'C', text: "CIS" },
        { id: 'D', text: "GDPR" }
      ],
      correctOptionId: 'C',
      explanation: "The Center for Internet Security (CIS) publishes CIS Benchmarks for secure configuration of many technologies."
    },
    {
      id: 'ed4-q371',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "ZenTech adopts a multi-cloud strategy, deploying workloads across multiple cloud providers. What is a primary security benefit of this approach?",
      options: [
        { id: 'A', text: "Centralized management of all cloud resources" },
        { id: 'B', text: "Automatic encryption of data in transit between clouds" },
        { id: 'C', text: "Mitigation against a single point of failure" },
        { id: 'D', text: "Reduction in the cost of cloud storage solutions" }
      ],
      correctOptionId: 'C',
      explanation: "Distributing workloads across providers avoids dependence on a single environment, reducing single-point-of-failure risk."
    },
    {
      id: 'ed4-q372',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company wants to host a public-facing website but ensure that if it’s compromised, attackers cannot reach sensitive internal data. Which configuration is BEST?",
      options: [
        { id: 'A', text: "Place the web server on the internal network and strictly monitor traffic" },
        { id: 'B', text: "Place the web server in the DMZ with a firewall in front of it and another firewall between the DMZ and the internal network" },
        { id: 'C', text: "Directly connect the web server to the internet without a firewall and move sensitive data off the server" },
        { id: 'D', text: "Place the web server in the DMZ and connect it directly to the internal network without a firewall" }
      ],
      correctOptionId: 'B',
      explanation: "A DMZ with an external and internal firewall adds layered protection between the internet-facing web server and internal network."
    },
    {
      id: 'ed4-q373',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechFirm collects users’ personal data and decides the purposes and means of processing it, while CloudData stores this data for TechFirm. Under data privacy regulations, how are TechFirm and CloudData classified?",
      options: [
        { id: 'A', text: "TechFirm: Processor; CloudData: Controller" },
        { id: 'B', text: "TechFirm: Controller; CloudData: Processor" },
        { id: 'C', text: "Both TechFirm and CloudData: Processors" },
        { id: 'D', text: "Both TechFirm and CloudData: Controllers" }
      ],
      correctOptionId: 'B',
      explanation: "TechFirm determines why and how data is processed (controller); CloudData processes it on TechFirm’s behalf (processor)."
    },
    {
      id: 'ed4-q374',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Globex Corp wants corporate web filtering policies enforced on laptops even when employees work remotely. What is the BEST solution?",
      options: [
        { id: 'A', text: "Implement a cloud-based web filtering solution" },
        { id: 'B', text: "Use a VPN to force all remote traffic through the corporate network" },
        { id: 'C', text: "Deploy an agent-based web filter on all company laptops" },
        { id: 'D', text: "Periodically remind employees about acceptable web usage" }
      ],
      correctOptionId: 'C',
      explanation: "Agent-based filters installed on endpoints can enforce corporate policies regardless of network location."
    },
    {
      id: 'ed4-q375',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SoftTech Solutions conducts a penetration test where testers are given user credentials, network diagrams, and some code snippets. What type of penetration testing is this?",
      options: [
        { id: 'A', text: "Black box testing" },
        { id: 'B', text: "Double-blind testing" },
        { id: 'C', text: "Known environment testing" },
        { id: 'D', text: "Zero-knowledge testing" }
      ],
      correctOptionId: 'C',
      explanation: "Known environment testing provides testers with partial internal information to simulate an informed attacker."
    },
    {
      id: 'ed4-q376',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DeltaTech uses a UNIX-based primary site and is considering a different platform for its disaster recovery site. Which is NOT a primary benefit of platform diversity?",
      options: [
        { id: 'A', text: "It reduces the organization's learning curve by using familiar technologies" },
        { id: 'B', text: "It provides resilience against attacks targeting UNIX-based systems" },
        { id: 'C', text: "It ensures platform-specific outages don't affect both primary and backup sites" },
        { id: 'D', text: "It diversifies the attack surface, reducing the impact of specific platform vulnerabilities" }
      ],
      correctOptionId: 'A',
      explanation: "Introducing a new platform increases, not reduces, the learning curve; other options are true benefits of diversity."
    },
    {
      id: 'ed4-q377',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sarah wants to analyze IP traffic flow metadata (IP addresses, ports, protocols) to identify patterns and potential threats. Which tool should she use?",
      options: [
        { id: 'A', text: "Intrusion Detection System (IDS)" },
        { id: 'B', text: "Syslog server" },
        { id: 'C', text: "NetFlow collector" },
        { id: 'D', text: "SNMP traps" }
      ],
      correctOptionId: 'C',
      explanation: "NetFlow collectors gather and analyze flow records summarizing IP traffic characteristics across the network."
    },
    {
      id: 'ed4-q378',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution’s IDS failed to detect a zero-day exploit used in a breach. How can they enhance IDS capability against such threats?",
      options: [
        { id: 'A', text: "Switch from a signature-based IDS to a behavior-based IDS" },
        { id: 'B', text: "Disable the IDS and rely solely on firewall rules" },
        { id: 'C', text: "Update the IDS with the latest threat intelligence feeds and signatures" },
        { id: 'D', text: "Reduce the frequency of IDS signature updates" }
      ],
      correctOptionId: 'A',
      explanation: "Behavior-based IDS detects anomalies relative to normal behavior and can identify novel or zero-day attacks."
    },
    {
      id: 'ed4-q379',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechWave Corp wants to ensure operations can automatically and immediately shift from a primary data center to another facility after a power outage. What test should they conduct?",
      options: [
        { id: 'A', text: "Conduct a vulnerability assessment on both data centers" },
        { id: 'B', text: "Execute a failover test" },
        { id: 'C', text: "Engage in a tabletop exercise" },
        { id: 'D', text: "Perform a routine backup test" }
      ],
      correctOptionId: 'B',
      explanation: "A failover test validates that services can automatically transfer to a backup site without interruption."
    },
    {
      id: 'ed4-q380',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sarah wants to monitor server infrastructure without installing additional software on the servers. Which monitoring approach should she choose?",
      options: [
        { id: 'A', text: "Agent-based monitoring" },
        { id: 'B', text: "Intrusion Detection System (IDS)" },
        { id: 'C', text: "Agentless monitoring" },
        { id: 'D', text: "Network-based Application Performance Monitoring (APM)" }
      ],
      correctOptionId: 'C',
      explanation: "Agentless monitoring uses existing protocols (e.g., SNMP, WMI) and doesn’t require agents on each server."
    },
    {
      id: 'ed4-q381',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alice must proactively discover system vulnerabilities, missing patches, and misconfigurations in a new web application’s infrastructure before go-live. Which tool should she use?",
      options: [
        { id: 'A', text: "Intrusion Detection System (IDS)" },
        { id: 'B', text: "Network sniffer" },
        { id: 'C', text: "Vulnerability scanner" },
        { id: 'D', text: "Security Information and Event Management (SIEM) system" }
      ],
      correctOptionId: 'C',
      explanation: "Vulnerability scanners probe systems to find known flaws, missing patches, and configuration weaknesses."
    },
    {
      id: 'ed4-q382',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A local library’s business impact analysis shows they can tolerate several days of downtime. Which disaster recovery site type is most suitable and cost-effective?",
      options: [
        { id: 'A', text: "Mobile site with a full set of IT equipment" },
        { id: 'B', text: "Hot site with daily data replication" },
        { id: 'C', text: "Cold site" },
        { id: 'D', text: "Warm site with weekly backups" }
      ],
      correctOptionId: 'C',
      explanation: "A cold site provides space and basic infrastructure at low cost, suitable when longer recovery times are acceptable."
    },
    {
      id: 'ed4-q383',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a security incident, an organization’s IDS generates many false positives by flagging legitimate activity. What is the MOST appropriate action to improve accuracy?",
      options: [
        { id: 'A', text: "Disable the intrusion detection system for a week" },
        { id: 'B', text: "Set up a stricter firewall rule to block all external traffic" },
        { id: 'C', text: "Implement alert tuning to refine the system's detection criteria" },
        { id: 'D', text: "Encourage employees to reduce their internet usage" }
      ],
      correctOptionId: 'C',
      explanation: "Alert tuning refines IDS rules and thresholds to better distinguish normal activity from malicious behavior."
    },
    {
      id: 'ed4-q384',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Amy wants to automate evaluating systems against a specific security baseline and comes across SCAP. What is the primary function of the Security Content Automation Protocol (SCAP)?",
      options: [
        { id: 'A', text: "Facilitate the real-time transfer of threat intelligence feeds" },
        { id: 'B', text: "Provide an interface for user authentication against Active Directory" },
        { id: 'C', text: "Allow for automated vulnerability management and policy compliance evaluation" },
        { id: 'D', text: "Offer encrypted communication channels for remote system management" }
      ],
      correctOptionId: 'C',
      explanation: "SCAP is a suite of standards enabling automated vulnerability scanning and compliance checking against baselines."
    },
    {
      id: 'ed4-q385',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution wants unauthorized access to customer data to trigger immediate alerts. Which approach is MOST effective?",
      options: [
        { id: 'A', text: "Configure alerts for any modification to database records" },
        { id: 'B', text: "Set up alerts for successful logins during off-business hours" },
        { id: 'C', text: "Establish alerting thresholds based on anomalous user behavior" },
        { id: 'D', text: "Send daily reports of all access attempts to the security team" }
      ],
      correctOptionId: 'C',
      explanation: "User and entity behavior analytics (UEBA) uses anomaly thresholds to alert on behaviors that deviate from normal patterns."
    },
    {
      id: 'ed4-q386',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a cyber-attack, Acme Corp wants to identify unpatched and vulnerable systems. Which scanning activity BEST assists them?",
      options: [
        { id: 'A', text: "Conducting a passive scan during business hours" },
        { id: 'B', text: "Implementing a full open port scan on all systems" },
        { id: 'C', text: "Running a credentialed vulnerability scan on their network" },
        { id: 'D', text: "Scanning the external perimeter for domain name resolutions" }
      ],
      correctOptionId: 'C',
      explanation: "Credentialed scans can log into systems to perform deep checks for missing patches and configuration issues."
    },
    {
      id: 'ed4-q387',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A healthcare provider informs testers of technologies used (languages, databases) but not of security controls like IDS. What kind of penetration test is this?",
      options: [
        { id: 'A', text: "White box testing" },
        { id: 'B', text: "External testing" },
        { id: 'C', text: "Grey box testing" },
        { id: 'D', text: "Active testing" }
      ],
      correctOptionId: 'C',
      explanation: "Grey box testing provides partial knowledge of the environment while withholding full security configuration details."
    },
    {
      id: 'ed4-q388',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sarah receives an email from her bank urging her to update account details via a link with a subtly misspelled URL. What should she do?",
      options: [
        { id: 'A', text: "Forward the email to her colleagues as a warning" },
        { id: 'B', text: "Click the link and update details since the site likely changed" },
        { id: 'C', text: "Delete the email without taking any action" },
        { id: 'D', text: "Report the email to her company's IT department and avoid clicking any links" }
      ],
      correctOptionId: 'D',
      explanation: "This is likely a phishing attempt; she should avoid the link and report it so IT can warn and protect others."
    },
    {
      id: 'ed4-q389',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Paul configured devices to send alerts on specific failures. After a switch power supply failure, he gets an immediate notification. Which mechanism most likely sent this alert?",
      options: [
        { id: 'A', text: "Syslog server" },
        { id: 'B', text: "SNMP traps" },
        { id: 'C', text: "Packet sniffer" },
        { id: 'D', text: "Firewall logs" }
      ],
      correctOptionId: 'B',
      explanation: "SNMP traps are unsolicited messages sent by devices to report events like hardware failures to a management station."
    },
    {
      id: 'ed4-q390',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Samantha must create a monthly report for senior management on the company’s security posture. Which element is MOST important to include?",
      options: [
        { id: 'A', text: "Detailed technical logs of all security incidents" },
        { id: 'B', text: "Graphical representation of incidents by category" },
        { id: 'C', text: "A complete list of all users and their access levels" },
        { id: 'D', text: "Copies of recent phishing emails" }
      ],
      correctOptionId: 'B',
      explanation: "High-level graphical summaries of incidents by type make trends and risk areas clear to non-technical executives."
    },
    {
      id: 'ed4-q391',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A legitimate software tool repeatedly gets flagged and quarantined by the company’s antivirus. What is the BEST action for the cybersecurity team?",
      options: [
        { id: 'A', text: "Turn off the antivirus solution" },
        { id: 'B', text: "Whitelist the software tool in the antivirus settings" },
        { id: 'C', text: "Decrease the security level of the antivirus" },
        { id: 'D', text: "Install a different antivirus solution" }
      ],
      correctOptionId: 'B',
      explanation: "Whitelisting the known-good tool prevents it from being flagged while keeping overall antivirus protections enabled."
    },
    {
      id: 'ed4-q392',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Lucy receives an automated alert that an employee tried to email a document containing social security numbers to an external address. Which tool most likely generated this alert?",
      options: [
        { id: 'A', text: "Network Intrusion Detection System (NIDS)" },
        { id: 'B', text: "Data Loss Prevention (DLP) solution" },
        { id: 'C', text: "Vulnerability Scanner" },
        { id: 'D', text: "Packet Analyzer" }
      ],
      correctOptionId: 'B',
      explanation: "DLP solutions inspect data in motion and at rest to detect and block sensitive information leaving the organization."
    },
    {
      id: 'ed4-q393',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A healthcare organization sets up a geographically dispersed backup site for its global medical data repository. Which is the LEAST valid reason for geographic dispersion in this disaster recovery scenario?",
      options: [
        { id: 'A', text: "Mitigate risks of regional natural disasters" },
        { id: 'B', text: "Offer redundancy in case of local power outages" },
        { id: 'C', text: "Benefit from varying peak load times in different regions" },
        { id: 'D', text: "Ensure faster access speeds for global patients" }
      ],
      correctOptionId: 'D',
      explanation: "Geo-dispersion for disaster recovery focuses on resilience and redundancy, not primarily on improving access speed."
    },
    {
      id: 'ed4-q394',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechCo wants to monitor, control, and restrict employee web access while caching frequently accessed content to reduce bandwidth. Which solution BEST fits?",
      options: [
        { id: 'A', text: "Deploy a decentralized proxy on each departmental network" },
        { id: 'B', text: "Set up a DNS-based filtering service" },
        { id: 'C', text: "Use a centralized proxy with caching capabilities" },
        { id: 'D', text: "Recommend browser extensions for web filtering to all employees" }
      ],
      correctOptionId: 'C',
      explanation: "A centralized proxy can enforce web policies and cache content, reducing bandwidth and simplifying management."
    },
    {
      id: 'ed4-q395',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A growing software company wants to resume operations within a day after a disaster but has a limited budget. Which disaster recovery site type is most suitable?",
      options: [
        { id: 'A', text: "Hot site with hourly data replication" },
        { id: 'B', text: "Cold site with monthly data backups" },
        { id: 'C', text: "Warm site with daily backups" },
        { id: 'D', text: "Offsite tape backups" }
      ],
      correctOptionId: 'C',
      explanation: "A warm site with recent backups provides faster recovery than a cold site at lower cost than a full hot site."
    },
    {
      id: 'ed4-q396',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Employees are spending too much time on social media during work hours. The security admin wants to limit access during peak hours. Which firewall rule modification is appropriate?",
      options: [
        { id: 'A', text: "Implement an IPS rule to block social media content" },
        { id: 'B', text: "Deny access to known social media IP addresses between 9 AM and 5 PM" },
        { id: 'C', text: "Use URL filtering to blacklist social media URLs" },
        { id: 'D', text: "Increase firewall bandwidth to accommodate the excess traffic" }
      ],
      correctOptionId: 'B',
      explanation: "A time-based deny rule on social media IP ranges restricts access only during defined working hours."
    },
    {
      id: 'ed4-q397',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corp plans a simulated phishing campaign to assess employee awareness. What is the MOST effective first step?",
      options: [
        { id: 'A', text: "Inform all employees about the campaign a week prior" },
        { id: 'B', text: "Create a realistic phishing email that closely resembles common threats" },
        { id: 'C', text: "Offer rewards to employees who click on the simulated phishing links" },
        { id: 'D', text: "Review the results of the previous year's campaign" }
      ],
      correctOptionId: 'B',
      explanation: "A realistic phishing email ensures the test accurately measures employees’ ability to recognize real-world phishing attempts."
    },
    {
      id: 'ed4-q398',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A new web application will be accessible internally and over the internet, using only HTTPS. How should the firewall be configured?",
      options: [
        { id: 'A', text: "Allow port 21 and block all others" },
        { id: 'B', text: "Allow port 443 and block all others" },
        { id: 'C', text: "Allow port 80 and block all others" },
        { id: 'D', text: "Allow port 23 and block all others" }
      ],
      correctOptionId: 'B',
      explanation: "HTTPS traffic uses TCP port 443, so only that port needs to be open for the application’s secure communications."
    },
    {
      id: 'ed4-q399',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corp wants to prevent users from changing critical system settings like firewall configuration on Windows systems. What is the most effective way?",
      options: [
        { id: 'A', text: "Use SELinux to enforce strict access controls" },
        { id: 'B', text: "Utilize Group Policy to set and enforce policies related to system settings" },
        { id: 'C', text: "Deploy a third-party software solution to lock system settings" },
        { id: 'D', text: "Implement a user training program on system settings best practices" }
      ],
      correctOptionId: 'B',
      explanation: "Group Policy in Active Directory provides centralized enforcement of system configuration restrictions for Windows clients."
    },
    {
      id: 'ed4-q400',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An IT technician finds files on a server renamed with a “.locked” extension and a note called “README_TO_RECOVER_FILES.txt”. Which malicious activity is most likely in progress?",
      options: [
        { id: 'A', text: "Worm propagation" },
        { id: 'B', text: "Trojan horse execution" },
        { id: 'C', text: "Ransomware attack" },
        { id: 'D', text: "Logic bomb activation" }
      ],
      correctOptionId: 'C',
      explanation: "Renaming files with a new extension and dropping a ransom note are classic indicators of a ransomware attack."
    }
  ],
  


 // Exam 5 (Questions 401–500)
 [
    {
      id: 'ed5-q1',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT department at TechCorp Ltd has been instructed to ensure that critical system files remain unchanged to avoid potential security breaches. They want to implement a system that can provide alerts whenever there is an unauthorized change to these files. Which of the following would best serve this purpose?`,
      options: [
        { id: 'A', text: 'Data Loss Prevention (DLP)' },
        { id: 'B', text: 'Intrusion Detection System (IDS)' },
        { id: 'C', text: 'File Integrity Monitoring (FIM)' },
        { id: 'D', text: 'Remote Monitoring and Management (RMM)' }
      ],
      correctOptionId: 'C',
      explanation: `FIM tracks and alerts on unauthorized changes to critical files, ensuring integrity.`
    },
    {
      id: 'ed5-q2',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Cybertech Corp. is reviewing its backup protocols to enhance security. They decided that before transferring backups to an offsite location, the data should be rendered unreadable to unauthorized individuals. Which backup strategy will ensure this requirement is met?`,
      options: [
        { id: 'A', text: 'Use deduplication before storing backups' },
        { id: 'B', text: 'Store backups in proprietary formats' },
        { id: 'C', text: 'Encrypt backups before transfer' },
        { id: 'D', text: 'Compress backups using standard tools' }
      ],
      correctOptionId: 'C',
      explanation: `Encrypting the backup ensures that, even if intercepted, the data cannot be read without the key.`
    },
    {
      id: 'ed5-q3',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `XYZ Corp is designing their new web application infrastructure. They want to ensure that all web traffic to and from their application is encrypted. In addition to selecting HTTPS as the protocol, which default port should they configure for this encrypted traffic?`,
      options: [
        { id: 'A', text: '21' },
        { id: 'B', text: '80' },
        { id: 'C', text: '443' },
        { id: 'D', text: '25' }
      ],
      correctOptionId: 'C',
      explanation: `Port 443 is the default port for HTTPS (HTTP over TLS/SSL).`
    },
    {
      id: 'ed5-q4',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company is developing a new web application that will be processing highly sensitive user data. They want to ensure that if the web server is compromised, attackers cannot directly access the database or other critical infrastructure. Which of the following is the BEST strategy to achieve this objective?`,
      options: [
        { id: 'A', text: 'Use strong authentication methods for the web application' },
        { id: 'B', text: 'Encrypt the user data at rest and in transit' },
        { id: 'C', text: 'Place the web server and the database server in separate network segments' },
        { id: 'D', text: 'Implement real-time monitoring of the web server' }
      ],
      correctOptionId: 'C',
      explanation: `Network segmentation isolates the database so a compromised web server cannot directly reach it.`
    },
    {
      id: 'ed5-q5',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `After a major outage, CloudTech Services is reviewing their disaster recovery strategy. The company found out that after restoring from backup, several applications did not function properly due to configuration discrepancies. What would be the best approach to ensure a successful recovery in the future?`,
      options: [
        { id: 'A', text: 'Prioritize applications for backup based on their importance' },
        { id: 'B', text: 'Implement differential backups in addition to full backups' },
        { id: 'C', text: 'Regularly conduct a full system recovery in a test environment' },
        { id: 'D', text: 'Use a third-party backup solution instead of an in-house solution' }
      ],
      correctOptionId: 'C',
      explanation: `Test restores in a lab reveal configuration and dependency issues before a real disaster occurs.`
    },
    {
      id: 'ed5-q6',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `GlobalBank has implemented a backup strategy where only the changes made since the last full backup are recorded. Considering the need to optimize storage and reduce backup times, the IT team performs this type of backup every day. What backup frequency and type is GlobalBank utilizing?`,
      options: [
        { id: 'A', text: 'Incremental Backup daily' },
        { id: 'B', text: 'Differential Backup weekly' },
        { id: 'C', text: 'Full Backup bi-weekly' },
        { id: 'D', text: 'Snapshot Backup daily' }
      ],
      correctOptionId: 'A',
      explanation: `Incremental backups store only changes since the last full or incremental backup.`
    },
    {
      id: 'ed5-q7',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company has recently deployed a new e-commerce application. The security team wants to ensure they can detect any unauthorized or malicious activities on the application. Which of the following would be the MOST effective way to achieve this goal?`,
      options: [
        { id: 'A', text: 'Conduct a penetration test on the application' },
        { id: 'B', text: 'Install a firewall in front of the application' },
        { id: 'C', text: `Implement continuous monitoring of the application's logs and activities` },
        { id: 'D', text: 'Provide training to users about secure browsing habits' }
      ],
      correctOptionId: 'C',
      explanation: `Continuous log monitoring provides real-time visibility into suspicious or unauthorized activity.`
    },
    {
      id: 'ed5-q8',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Sophia, a network administrator, is reviewing the logs from the company’s Intrusion Detection System (IDS). She notices an increased amount of outbound traffic to an unfamiliar IP address consisting of sensitive data being transferred. What type of malicious code might be responsible for this?`,
      options: [
        { id: 'A', text: 'Ransomware' },
        { id: 'B', text: 'Adware' },
        { id: 'C', text: 'Data Exfiltration Malware' },
        { id: 'D', text: 'Keylogger' }
      ],
      correctOptionId: 'C',
      explanation: `Data exfiltration malware is built to steal and send sensitive data to an attacker-controlled host.`
    },
    {
      id: 'ed5-q9',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `ExamsDigest Enterprises wants to streamline their permission assignments. They decide that rather than assigning permissions to each user individually, they will group users based on departmental roles and then assign permissions to these groups. Which access control method is ExamsDigest Enterprises employing?`,
      options: [
        { id: 'A', text: 'Rule-based access control' },
        { id: 'B', text: 'Mandatory Access Control (MAC)' },
        { id: 'C', text: 'Discretionary Access Control (DAC)' },
        { id: 'D', text: 'Role-Based Access Control (RBAC)' }
      ],
      correctOptionId: 'D',
      explanation: `RBAC assigns permissions to roles, and users inherit those permissions via membership in the role.`
    },
    {
      id: 'ed5-q10',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A security administrator is considering a cryptographic solution for protecting data in transit between two servers located in the same data center. The primary goal is to ensure speed and efficiency in encryption and decryption processes. Which type of encryption would best meet this requirement?`,
      options: [
        { id: 'A', text: 'Asymmetric encryption using RSA' },
        { id: 'B', text: 'Symmetric encryption using AES' },
        { id: 'C', text: 'Hybrid encryption using a combination of RSA and AES' },
        { id: 'D', text: 'Asymmetric encryption using ECC' }
      ],
      correctOptionId: 'B',
      explanation: `Symmetric algorithms like AES are much faster than asymmetric algorithms for bulk data encryption.`
    },
    {
      id: 'ed5-q11',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A large e-commerce company is deploying a new online payment system. The Chief Information Security Officer (CISO) is concerned about the security of cryptographic keys and wants to ensure they are protected from potential theft or compromise. Which tool should the CISO implement to provide the HIGHEST level of security for these keys?`,
      options: [
        { id: 'A', text: 'Password vault' },
        { id: 'B', text: 'Software-based key storage' },
        { id: 'C', text: 'Hardware Security Module (HSM)' },
        { id: 'D', text: 'Cloud-based encryption service' }
      ],
      correctOptionId: 'C',
      explanation: `HSMs are tamper-resistant hardware devices purpose-built to securely generate and store keys.`
    },
    {
      id: 'ed5-q12',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `During a security audit, a company realized that a malicious actor was able to situate themselves on the network path, capturing TLS handshake messages between clients and the server, attempting to weaken the encryption by influencing the cipher suite negotiation process. What type of network attack does this scenario depict?`,
      options: [
        { id: 'A', text: 'ARP Poisoning' },
        { id: 'B', text: 'Downgrade Attack' },
        { id: 'C', text: 'SYN Flood' },
        { id: 'D', text: 'Ping of Death' }
      ],
      correctOptionId: 'B',
      explanation: `A downgrade attack interferes with negotiation to force use of weaker protocol versions or ciphers.`
    },
    {
      id: 'ed5-q13',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A software developer wants to store user passwords in a way that even if the database is compromised, attackers would not be able to retrieve the original passwords. What technique should the developer use to achieve this?`,
      options: [
        { id: 'A', text: 'Symmetric encryption' },
        { id: 'B', text: 'Digital signing' },
        { id: 'C', text: 'Hashing' },
        { id: 'D', text: 'Steganography' }
      ],
      correctOptionId: 'C',
      explanation: `Passwords should be stored as salted hashes so they are one-way and not directly reversible.`
    },
    {
      id: 'ed5-q14',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company’s IT department notices a sharp increase in account lockouts over the past two days, especially during non-business hours, with a majority from the finance team. Which of the following is the MOST plausible explanation for these lockouts?`,
      options: [
        { id: 'A', text: 'Scheduled maintenance by the IT department' },
        { id: 'B', text: 'Employees are sharing passwords within the finance team' },
        { id: 'C', text: 'An attacker is trying to gain unauthorized access' },
        { id: 'D', text: 'A recent password policy change requiring more frequent changes' }
      ],
      correctOptionId: 'C',
      explanation: `Targeted lockouts outside business hours suggest password guessing attacks against finance accounts.`
    },
    {
      id: 'ed5-q15',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Carlos manages IT services for a university with numerous departmental subdomains (e.g., arts.university.com, science.university.com). He considers using a Wildcard Certificate for cost-effective HTTPS security but is wary of potential risks. What might be a drawback of using a Wildcard Certificate for the university’s subdomains?`,
      options: [
        { id: 'A', text: 'It can secure only one subdomain' },
        { id: 'B', text: 'If compromised, all subdomains are at risk' },
        { id: 'C', text: "It only validates the domain ownership, not the organization's identity" },
        { id: 'D', text: "It's the most expensive certificate available" }
      ],
      correctOptionId: 'B',
      explanation: `If the wildcard private key is stolen, every subdomain covered by it becomes vulnerable.`
    },
    {
      id: 'ed5-q16',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `SecureData Inc., a financial firm, recently experienced a system crash and needed to restore their database. While they had a full backup from the previous week, they realized that several days of transactions were missing. To prevent such data loss in the future, which backup strategy involving recording transactions can SecureData implement?`,
      options: [
        { id: 'A', text: 'Implement differential backups' },
        { id: 'B', text: 'Use snapshot backups every hour' },
        { id: 'C', text: 'Enable database journaling' },
        { id: 'D', text: 'Configure RAID 5 for their storage' }
      ],
      correctOptionId: 'C',
      explanation: `Database journaling logs every transaction so they can be replayed after a restore.`
    },
    {
      id: 'ed5-q17',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company has set up its firewall to allow web traffic through port 80 and port 443, while denying all other traffic by default. This setup is an example of which type of access control?`,
      options: [
        { id: 'A', text: 'Role-Based Access Control (RBAC)' },
        { id: 'B', text: 'Mandatory Access Control (MAC)' },
        { id: 'C', text: 'Discretionary Access Control (DAC)' },
        { id: 'D', text: 'Rule-Based Access Control (RAC)' }
      ],
      correctOptionId: 'D',
      explanation: `The firewall is applying predefined rules about what traffic is allowed, which is rule-based control.`
    },
    {
      id: 'ed5-q18',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `During a routine security assessment, Jake, a penetration tester, discovers that by modifying a configuration file located in a public directory, he can assign himself administrative privileges in the application. What type of vulnerability is Jake exploiting?`,
      options: [
        { id: 'A', text: 'Cross-Site Scripting (XSS)' },
        { id: 'B', text: 'Privilege Escalation' },
        { id: 'C', text: 'SQL Injection' },
        { id: 'D', text: 'Insecure Direct Object Reference (IDOR)' }
      ],
      correctOptionId: 'B',
      explanation: `By manipulating a config to gain admin access, he is performing privilege escalation.`
    },
    {
      id: 'ed5-q19',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A school wants to prevent its students from accessing inappropriate websites during class hours. The IT department decides to implement a solution that blocks requests to specific domain names associated with inappropriate content. Which of the following security solutions would best address this need?`,
      options: [
        { id: 'A', text: 'Firewall filtering based on IP addresses' },
        { id: 'B', text: 'Intrusion Detection System monitoring' },
        { id: 'C', text: 'Virtual Private Network (VPN) enforcement' },
        { id: 'D', text: 'DNS filtering with a blacklist' }
      ],
      correctOptionId: 'D',
      explanation: `DNS filtering can block resolution of blacklisted domains, preventing access to those sites.`
    },
    {
      id: 'ed5-q20',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A financial firm has just experienced a cyber attack, and the IT team identified a piece of malware that evaded their traditional antivirus solutions. The CISO now wants to not only detect but also be able to analyze and respond to such advanced threats in real-time. Which solution should the firm consider implementing?`,
      options: [
        { id: 'A', text: 'Vulnerability Scanner' },
        { id: 'B', text: 'Intrusion Prevention System (IPS)' },
        { id: 'C', text: 'Endpoint Detection and Response (EDR)' },
        { id: 'D', text: 'Patch Management System' }
      ],
      correctOptionId: 'C',
      explanation: `EDR platforms provide continuous endpoint telemetry, detection, investigation, and response.`
    },
    {
      id: 'ed5-q21',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `During a routine audit of the corporate servers, the system administrator discovers that a week’s worth of security logs are missing from one of the key application servers. Which of the following is the MOST likely reason for this occurrence?`,
      options: [
        { id: 'A', text: 'The logging service experienced a malfunction' },
        { id: 'B', text: 'There was insufficient storage space for the logs' },
        { id: 'C', text: 'A malware attack aimed to erase traces of intrusion' },
        { id: 'D', text: 'The time zone setting was incorrectly configured' }
      ],
      correctOptionId: 'C',
      explanation: `Attackers often delete or alter logs to hide evidence of their activities.`
    },
    {
      id: 'ed5-q22',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A financial company is designing a new system that needs to ensure data is accessed based on classifications and clearance levels of the users. Which of the following access control models BEST fits this requirement?`,
      options: [
        { id: 'A', text: 'Role-Based Access Control (RBAC)' },
        { id: 'B', text: 'Discretionary Access Control (DAC)' },
        { id: 'C', text: 'Mandatory Access Control (MAC)' },
        { id: 'D', text: 'Attribute-Based Access Control (ABAC)' }
      ],
      correctOptionId: 'C',
      explanation: `MAC uses labels and clearances to strictly control access based on data classification.`
    },
    {
      id: 'ed5-q23',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `TechSolutions Inc., a rapidly growing startup, is expanding its workforce. They need to ensure their IT infrastructure can accommodate the influx of new employees without compromising performance or security. Which of the following should be TechSolutions’ primary focus during this expansion phase?`,
      options: [
        { id: 'A', text: 'Adopting a Zero Trust Network Architecture' },
        { id: 'B', text: 'Increasing the frequency of vulnerability assessments' },
        { id: 'C', text: 'Implementing capacity planning' },
        { id: 'D', text: 'Deploying additional firewalls and intrusion detection systems' }
      ],
      correctOptionId: 'C',
      explanation: `Capacity planning ensures infrastructure resources scale appropriately with growth.`
    },
    {
      id: 'ed5-q24',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Emily, a cybersecurity analyst, has been tasked with gathering preliminary information about a target organization without directly interacting with its systems. She collects data from third-party sources, search engines, public records, and other online platforms without sending any packets to the target. Which phase of penetration testing is Emily currently engaged in?`,
      options: [
        { id: 'A', text: 'Active reconnaissance' },
        { id: 'B', text: 'Passive reconnaissance' },
        { id: 'C', text: 'Vulnerability scanning' },
        { id: 'D', text: 'Threat hunting' }
      ],
      correctOptionId: 'B',
      explanation: `Passive recon gathers information from public or third-party sources without touching the target directly.`
    },
    {
      id: 'ed5-q25',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `During the setup of a secure communication channel, Alice and Bob need to agree upon a shared secret key without sending the key directly to each other, as they fear eavesdropping. Which protocol would best facilitate this requirement?`,
      options: [
        { id: 'A', text: 'RSA' },
        { id: 'B', text: 'HMAC' },
        { id: 'C', text: 'Diffie-Hellman' },
        { id: 'D', text: 'AES' }
      ],
      correctOptionId: 'C',
      explanation: `Diffie-Hellman allows two parties to derive a shared secret over an insecure channel.`
    },
    {
      id: 'ed5-q26',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company plans to upgrade its email server to ensure that email transmission between their mail server and client applications is encrypted. Which of the following protocols would be the most appropriate for this purpose?`,
      options: [
        { id: 'A', text: 'HTTP' },
        { id: 'B', text: 'FTP' },
        { id: 'C', text: 'IMAP over SSL/TLS' },
        { id: 'D', text: 'SNMP' }
      ],
      correctOptionId: 'C',
      explanation: `IMAP over SSL/TLS (IMAPS) encrypts email retrieval traffic between clients and the server.`
    },
    {
      id: 'ed5-q27',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A medium-sized company has just deployed a new file server for the HR department. They want to ensure that only HR employees can view and edit HR-specific documents, while the IT department should only be able to perform system maintenance tasks. What should the company implement to achieve this requirement?`,
      options: [
        { id: 'A', text: 'Install a firewall between the HR and IT departments' },
        { id: 'B', text: 'Implement an Access Control List (ACL) for the file server' },
        { id: 'C', text: 'Enforce a strong password policy for the HR department' },
        { id: 'D', text: 'Enable full disk encryption on the file server' }
      ],
      correctOptionId: 'B',
      explanation: `ACLs allow granular control over who can read, write, or manage files on the server.`
    },
    {
      id: 'ed5-q28',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Carla, a security analyst, receives an alert that one of the company’s server certificates may have been exposed in a recent data breach. What is the most immediate action Carla should take to ensure that the exposed certificate cannot be used maliciously?`,
      options: [
        { id: 'A', text: 'Request a new certificate from the CA' },
        { id: 'B', text: 'Update the company firewall rules' },
        { id: 'C', text: 'Add the certificate to the Certificate Revocation List (CRL)' },
        { id: 'D', text: 'Perform a vulnerability assessment on the server' }
      ],
      correctOptionId: 'C',
      explanation: `Revoking the certificate (CRL/OCSP) immediately tells clients to stop trusting it.`
    },
    {
      id: 'ed5-q29',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `DataFin, a financial analytics firm, experienced a minor fire incident in one of its server rooms. They had backups stored in another wing of the building, allowing for quick data recovery. However, management realizes that in a major disaster, both primary and backup data might be destroyed. Which backup strategy should DataFin consider?`,
      options: [
        { id: 'A', text: 'Mirror Backup' },
        { id: 'B', text: 'Local Storage Backup' },
        { id: 'C', text: 'Incremental Backup' },
        { id: 'D', text: 'Offsite Backup' }
      ],
      correctOptionId: 'D',
      explanation: `Offsite backups keep copies in a different physical location in case the primary site is lost.`
    },
    {
      id: 'ed5-q30',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `An online retailer is considering various methods to protect its customers’ credit card information. Instead of storing the actual credit card numbers in their database, they opt for a solution that replaces the numbers with unrelated, random values. What is this method called?`,
      options: [
        { id: 'A', text: 'Symmetric encryption' },
        { id: 'B', text: 'Digital watermarking' },
        { id: 'C', text: 'Hashing' },
        { id: 'D', text: 'Tokenization' }
      ],
      correctOptionId: 'D',
      explanation: `Tokenization replaces sensitive data with non-sensitive tokens that reference the original value.`
    },
    {
      id: 'ed5-q31',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT team at TechnoCorp has noticed a consistent pattern over the last week where a particular server’s CPU usage spikes to 100% between 2:00 AM and 4:00 AM, a time when there’s typically minimal user activity. What could be the MOST probable reason for this?`,
      options: [
        { id: 'A', text: 'The server is automatically updating its software' },
        { id: 'B', text: 'An employee is running a heavy computational task' },
        { id: 'C', text: 'The server is undergoing a DDoS attack' },
        { id: 'D', text: 'Malware is performing cryptomining activities' }
      ],
      correctOptionId: 'D',
      explanation: `Cryptomining malware typically uses high CPU and often runs during off-peak hours to avoid detection.`
    },
    {
      id: 'ed5-q32',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A journalist wants to send a confidential message to her editor without raising suspicion. Instead of sending a coded or encrypted text, she embeds the message within a harmless-looking photograph. What method is she employing to keep the message concealed?`,
      options: [
        { id: 'A', text: 'Digital signature' },
        { id: 'B', text: 'Tunneling' },
        { id: 'C', text: 'Steganography' },
        { id: 'D', text: 'Chaining' }
      ],
      correctOptionId: 'C',
      explanation: `Steganography hides data inside other data, such as a message inside an image.`
    },
    {
      id: 'ed5-q33',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Ella, a security analyst, is reviewing the logs of a web application and notices that an attacker attempted to use the following input in a login form: ' OR '1'='1' --. This input was used in an effort to manipulate the application’s backend database. What type of injection attack is this an example of?`,
      options: [
        { id: 'A', text: 'XML Injection' },
        { id: 'B', text: 'Command Injection' },
        { id: 'C', text: 'SQL Injection' },
        { id: 'D', text: 'LDAP Injection' }
      ],
      correctOptionId: 'C',
      explanation: `The classic ' OR '1'='1' -- payload is a textbook SQL injection attempt.`
    },
    {
      id: 'ed5-q34',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `During a security audit, it was found that an application was using plain hashes for storing passwords. The security team recommended a method that involves using the original password along with a salt and then rehashing it multiple times. What is this method known as?`,
      options: [
        { id: 'A', text: 'Key clustering' },
        { id: 'B', text: 'Rainbow table prevention' },
        { id: 'C', text: 'Key rotation' },
        { id: 'D', text: 'Key stretching' }
      ],
      correctOptionId: 'D',
      explanation: `Key stretching repeatedly hashes a salted password to make brute-force attacks slower.`
    },
    {
      id: 'ed5-q35',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A university’s IT department provides access to its student records for training purposes to new hires. To protect student identities, they replace the real names and social security numbers with fictitious ones while maintaining the database’s original format. Which technique is the IT department utilizing?`,
      options: [
        { id: 'A', text: 'Digital signing' },
        { id: 'B', text: 'Data masking' },
        { id: 'C', text: 'Steganography' },
        { id: 'D', text: 'Data deduplication' }
      ],
      correctOptionId: 'B',
      explanation: `Data masking obscures sensitive values while preserving structure and usability for testing/training.`
    },
    {
      id: 'ed5-q36',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `StreamNet, a popular online streaming service, is planning to launch in three new countries and anticipates a substantial increase in users and concurrent streams. To ensure the service remains uninterrupted and provides a seamless experience, which action related to capacity planning should StreamNet prioritize?`,
      options: [
        { id: 'A', text: 'Investing in content encryption and DRM' },
        { id: 'B', text: 'Increasing marketing and promotional activities in the new countries' },
        { id: 'C', text: 'Implementing stronger user authentication methods' },
        { id: 'D', text: 'Expanding and optimizing their infrastructure to handle the projected growth' }
      ],
      correctOptionId: 'D',
      explanation: `Scaling and optimizing infrastructure is critical to handle the projected load.`
    },
    {
      id: 'ed5-q37',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT department of an e-commerce company is configuring access controls for a new online product inventory system. They want the sales team to update the inventory levels and product details but don’t want them to access financial data stored in the same system. Which access control principle is the IT department applying?`,
      options: [
        { id: 'A', text: 'Least Privilege' },
        { id: 'B', text: 'Role-Based Access Control (RBAC)' },
        { id: 'C', text: 'Mandatory Access Control (MAC)' },
        { id: 'D', text: 'User-Based Access Control (UBAC)' }
      ],
      correctOptionId: 'B',
      explanation: `They are assigning permissions based on the sales role, which is RBAC (though it also supports least privilege).`
    },
    {
      id: 'ed5-q38',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT department of XYZ Corp noticed that server logs are recording user login attempts during non-business hours between 2:00 AM and 3:00 AM, when no scheduled tasks or backups are set to run. Which of the following is the MOST plausible explanation for this unusual activity?`,
      options: [
        { id: 'A', text: 'The company’s employees are working overtime' },
        { id: 'B', text: 'There might be a time zone misconfiguration on the server' },
        { id: 'C', text: 'An unauthorized user is trying to gain access to the server' },
        { id: 'D', text: 'The server is automatically installing security patches' }
      ],
      correctOptionId: 'C',
      explanation: `Unexpected login attempts at odd hours are strong indicators of unauthorized access attempts.`
    },
    {
      id: 'ed5-q39',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A financial institution processes thousands of credit card transactions daily. To ensure the security and integrity of these transactions, the security officer wants to employ a solution that will safely manage and store cryptographic keys. Which of the following would be the MOST suitable solution?`,
      options: [
        { id: 'A', text: 'Trusted Platform Module (TPM)' },
        { id: 'B', text: 'Full Disk Encryption (FDE)' },
        { id: 'C', text: 'Hardware Security Module (HSM)' },
        { id: 'D', text: 'Software Key Repository' }
      ],
      correctOptionId: 'C',
      explanation: `HSMs are the standard for secure, high-volume cryptographic key management in financial environments.`
    },
    {
      id: 'ed5-q40',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `XYZ Corp recently faced a ransomware attack that encrypted critical data files. They had a recent backup available, but when they tried to restore the data, they found the backup was corrupted. Which of the following best practices would have helped XYZ Corp in ensuring the integrity of their backups?`,
      options: [
        { id: 'A', text: 'Regularly testing backup restoration processes' },
        { id: 'B', text: 'Storing backups in the same directory as original files' },
        { id: 'C', text: 'Increasing the frequency of backups to every hour' },
        { id: 'D', text: 'Encrypting backups with a strong encryption algorithm' }
      ],
      correctOptionId: 'A',
      explanation: `Routine restore tests verify that backups are valid and usable when needed.`
    },
    {
      id: 'ed5-q41',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `An e-commerce company stores millions of customer transaction records in their primary database. They decide to enhance security by applying encryption only to data within the database, not the whole server storage. Which encryption approach should the company adopt?`,
      options: [
        { id: 'A', text: 'Full-disk Encryption' },
        { id: 'B', text: 'File-level Encryption' },
        { id: 'C', text: 'Volume-level Encryption' },
        { id: 'D', text: 'Database-level Encryption' }
      ],
      correctOptionId: 'D',
      explanation: `Database-level encryption targets the data in the database specifically, regardless of storage layout.`
    },
    {
      id: 'ed5-q42',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A database administrator is concerned about identical hashes being produced for users who select the same password. To mitigate this risk, what cryptographic technique should the administrator implement?`,
      options: [
        { id: 'A', text: 'Digital signature' },
        { id: 'B', text: 'Salting' },
        { id: 'C', text: 'Key stretching' },
        { id: 'D', text: 'Symmetric encryption' }
      ],
      correctOptionId: 'B',
      explanation: `Salting adds a unique random value to each password before hashing, ensuring different hashes.`
    },
    {
      id: 'ed5-q43',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `After a recent data breach, a multinational corporation is evaluating its cryptographic practices. The CSO determines that manual management of cryptographic keys has become too complex. Which tool would BEST address this concern while ensuring robust security practices?`,
      options: [
        { id: 'A', text: 'Password Management System' },
        { id: 'B', text: 'Secure File Transfer Protocol (SFTP)' },
        { id: 'C', text: 'Trusted Platform Module (TPM)' },
        { id: 'D', text: 'Key Management System (KMS)' }
      ],
      correctOptionId: 'D',
      explanation: `A KMS centralizes and automates key generation, distribution, rotation, and retirement.`
    },
    {
      id: 'ed5-q44',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `After a security incident, a forensic investigation revealed that a compromised internal workstation was communicating with a known malicious IP address. To prevent further communication, the security team decided to take immediate action. Which of the following is the BEST immediate action to ensure the workstation cannot communicate with that IP?`,
      options: [
        { id: 'A', text: 'Implement a block rule on the web filter for the IP address' },
        { id: 'B', text: 'Disable the network port of the compromised workstation' },
        { id: 'C', text: 'Use a honeypot to divert the traffic from the malicious IP' },
        { id: 'D', text: "Update the firewall's firmware" }
      ],
      correctOptionId: 'A',
      explanation: `Blocking the malicious IP at the filtering layer immediately stops any traffic to that address.`
    },
    {
      id: 'ed5-q45',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Jennifer, an IT administrator, is asked to onboard a new remote employee for a sales role. Which of the following is the BEST approach for provisioning the user account?`,
      options: [
        { id: 'A', text: 'Assign the new user the same access privileges as the CEO' },
        { id: 'B', text: 'Provide the new user with administrative rights' },
        { id: 'C', text: 'Use the access privileges from a template of a salesperson' },
        { id: 'D', text: 'Allow the new user to self-select the necessary access' }
      ],
      correctOptionId: 'C',
      explanation: `Role templates for a salesperson enforce consistent, least-privilege access for that role.`
    },
    {
      id: 'ed5-q46',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT department of a large organization receives reports from employees that they are unable to access certain resources on the network. Investigation reveals recent modifications to the Access Control List (ACL) settings. Which of the following would be the PRIMARY reason to review and modify the ACL settings?`,
      options: [
        { id: 'A', text: 'To balance the network load' },
        { id: 'B', text: "To update the organization's firewall rules" },
        { id: 'C', text: 'To ensure appropriate access rights to resources' },
        { id: 'D', text: "To update the organization's password policy" }
      ],
      correctOptionId: 'C',
      explanation: `ACLs control which users or systems can access which resources, so they must be aligned to need.`
    },
    {
      id: 'ed5-q47',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `TechWorld Corp is concerned about cybercriminals sending emails that appear to come from its domain to deceive its clients. They want receiving email servers to validate that an email claiming to come from their domain indeed originates from an approved server. Which of the following should the company implement?`,
      options: [
        { id: 'A', text: 'SMTP authentication' },
        { id: 'B', text: 'DKIM' },
        { id: 'C', text: 'POP3 over SSL' },
        { id: 'D', text: 'S/MIME' }
      ],
      correctOptionId: 'B',
      explanation: `DKIM signs outbound mail so recipients can verify it really comes from the sending domain.`
    },
    {
      id: 'ed5-q48',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A cloud-based collaboration tool used by a company displays a warning to a user stating, “You are logged in from two locations,” but the user only has one active session. What should be the primary concern for the security team?`,
      options: [
        { id: 'A', text: 'The user might be using multiple devices' },
        { id: 'B', text: "There's a potential misconfiguration in the tool's settings" },
        { id: 'C', text: 'The collaboration tool is facing an outage' },
        { id: 'D', text: 'There might be unauthorized access to the user’s account' }
      ],
      correctOptionId: 'D',
      explanation: `A second session from another location strongly indicates a compromised account.`
    },
    {
      id: 'ed5-q49',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company is looking for a cryptographic solution that provides an immutable and transparent record of all transactions in a distributed ledger system. Which of the following would BEST meet this requirement?`,
      options: [
        { id: 'A', text: 'Symmetric key algorithm' },
        { id: 'B', text: 'Public key infrastructure' },
        { id: 'C', text: 'Blockchain' },
        { id: 'D', text: 'Digital watermark' }
      ],
      correctOptionId: 'C',
      explanation: `Blockchain provides a distributed, tamper-evident ledger of transactions.`
    },
    {
      id: 'ed5-q50',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `TechCorp is collaborating with SoftTech, a business partner. To streamline collaboration without managing multiple accounts, TechCorp wants its employees to use their existing credentials to access SoftTech’s online project management system. Which of the following approaches would BEST enable this functionality?`,
      options: [
        { id: 'A', text: "TechCorp should create new accounts for its employees on SoftTech's system" },
        { id: 'B', text: 'SoftTech should allow anonymous access for TechCorp’s employees' },
        { id: 'C', text: "TechCorp should implement federation between its identity provider and SoftTech's service provider" },
        { id: 'D', text: 'SoftTech should reset all passwords and provide them to TechCorp’s employees' }
      ],
      correctOptionId: 'C',
      explanation: `Identity federation allows SoftTech to trust TechCorp’s IdP for authenticating users.`
    },
    {
      id: 'ed5-q51',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `GlobalTech is implementing a disaster recovery plan and wants to ensure continuous availability with no data loss. They decide to use replication as a backup strategy. Which of the following replication techniques should GlobalTech implement to achieve their objective?`,
      options: [
        { id: 'A', text: 'Periodic replication scheduled daily' },
        { id: 'B', text: 'Asynchronous replication with hourly synchronization' },
        { id: 'C', text: 'Synchronous replication' },
        { id: 'D', text: 'Snapshot replication every 30 minutes' }
      ],
      correctOptionId: 'C',
      explanation: `Synchronous replication writes data to both primary and secondary at the same time, preventing loss.`
    },
    {
      id: 'ed5-q52',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `An e-commerce website suddenly experiences a sharp increase in traffic, causing the website to become slow and occasionally inaccessible. The IT team observes that a large number of requests are originating from multiple IP addresses spread across various countries. What type of network attack is the e-commerce website likely experiencing?`,
      options: [
        { id: 'A', text: 'Man-in-the-middle attack' },
        { id: 'B', text: 'DNS spoofing' },
        { id: 'C', text: 'Distributed denial-of-service (DDoS) attack' },
        { id: 'D', text: 'ARP poisoning' }
      ],
      correctOptionId: 'C',
      explanation: `A DDoS attack uses many distributed hosts to flood a target with traffic and exhaust resources.`
    },
    {
      id: 'ed5-q53',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A software development company is working on a mobile banking application. They want to ensure that sensitive operations like cryptographic processes and biometric data validation are isolated from the main operating system to prevent potential tampering. Which tool should they consider implementing to achieve this objective?`,
      options: [
        { id: 'A', text: 'Hardware Security Module (HSM)' },
        { id: 'B', text: 'Key Management System (KMS)' },
        { id: 'C', text: 'Secure enclave' },
        { id: 'D', text: 'Trusted Platform Module (TPM)' }
      ],
      correctOptionId: 'C',
      explanation: `A secure enclave provides an isolated hardware-backed execution environment for sensitive operations.`
    },
    {
      id: 'ed5-q54',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A popular social media platform allows third-party applications to access user data and post on behalf of users. To avoid sharing user passwords with third-party applications and provide limited, scoped access, which authentication method should the platform use?`,
      options: [
        { id: 'A', text: "Embed user passwords in the application's code" },
        { id: 'B', text: 'Use basic authentication with username and password for every request' },
        { id: 'C', text: 'Implement Single Sign-On (SSO) using OAuth to provide token-based access' },
        { id: 'D', text: 'Rely solely on CAPTCHA for third-party app authentication' }
      ],
      correctOptionId: 'C',
      explanation: `OAuth provides scoped, token-based access for third-party apps without sharing passwords.`
    },
    {
      id: 'ed5-q55',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company has noticed an increase in malware infections over the past month caused by employees visiting newly registered malicious websites. Which of the following would be the BEST approach to mitigate this threat?`,
      options: [
        { id: 'A', text: 'Implement a block rule to deny access to all websites' },
        { id: 'B', text: 'Use a web filter that incorporates domain reputation checks and blocks domains registered recently' },
        { id: 'C', text: 'Set the web filter to block all websites not categorized as "Business"' },
        { id: 'D', text: 'Enforce multi-factor authentication for all internet-based applications' }
      ],
      correctOptionId: 'B',
      explanation: `Reputation-based web filtering can automatically block suspicious newly registered domains.`
    },
    {
      id: 'ed5-q56',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `MetroTech recently experienced an incident where an employee mistakenly deleted a portion of their database. The IT team restored the data using a snapshot taken 24 hours prior, but some data was lost. Which recommendation would minimize data loss in a similar situation in the future?`,
      options: [
        { id: 'A', text: 'Configure backup snapshots to be taken on a weekly basis' },
        { id: 'B', text: 'Employ a differential backup solution in addition to snapshots' },
        { id: 'C', text: 'Increase the storage capacity for backups' },
        { id: 'D', text: 'Use an hourly snapshot backup schedule' }
      ],
      correctOptionId: 'D',
      explanation: `More frequent snapshots reduce the recovery point objective, minimizing potential data loss.`
    },
    {
      id: 'ed5-q57',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Alice receives an email from Bob with an attached document. She wants to verify both the authenticity of the sender and the integrity of the attached document. Which of the following should Bob have used before sending the email?`,
      options: [
        { id: 'A', text: 'Encrypt the document with his private key' },
        { id: 'B', text: 'Hash the document' },
        { id: 'C', text: "Encrypt the document with Alice's public key" },
        { id: 'D', text: 'Sign the document with his private key' }
      ],
      correctOptionId: 'D',
      explanation: `A digital signature (hash encrypted with Bob’s private key) proves origin and integrity.`
    },
    {
      id: 'ed5-q58',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `An international company, GlobalTech, is using several web applications hosted by different vendors. To ensure their employees can access these applications without having to remember multiple sets of credentials, they want a solution that can securely exchange user authentication information between the company and the service providers. What should GlobalTech implement?`,
      options: [
        { id: 'A', text: 'Integrate each application with an independent LDAP server' },
        { id: 'B', text: 'Implement SSO using Security Assertions Markup Language (SAML)' },
        { id: 'C', text: 'Embed encrypted user credentials within the URL of each application' },
        { id: 'D', text: 'Rely on public API keys shared between the company and each vendor' }
      ],
      correctOptionId: 'B',
      explanation: `SAML is a standard for exchanging authentication/authorization assertions in SSO scenarios.`
    },
    {
      id: 'ed5-q59',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A user wants to send a confidential email to their colleague and ensure that only the intended recipient can read it, while also providing assurance that the email was indeed sent by them. Which encryption method should the user employ to accomplish this?`,
      options: [
        { id: 'A', text: 'Use symmetric encryption with a shared key' },
        { id: 'B', text: "Use asymmetric encryption and encrypt the email with the recipient's public key" },
        { id: 'C', text: "Use asymmetric encryption, encrypt the email with the user's private key" },
        { id: 'D', text: "Use asymmetric encryption, first sign the email with the user's private key, then encrypt it with the recipient's public key" }
      ],
      correctOptionId: 'D',
      explanation: `Signing with the sender’s private key provides authenticity; encrypting with the recipient’s public key ensures confidentiality.`
    },
    {
      id: 'ed5-q60',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `DigitalFront, an e-commerce company, is expecting a surge in traffic during their upcoming annual sale event. They want to ensure their website can handle the anticipated increase in user activity without performance degradation. Which of the following steps is MOST relevant to achieving this goal?`,
      options: [
        { id: 'A', text: 'Increasing the frequency of security audits' },
        { id: 'B', text: 'Implementing capacity planning specifically focused on technology' },
        { id: 'C', text: 'Adopting multi-factor authentication for all users' },
        { id: 'D', text: 'Investing in advanced threat intelligence solutions' }
      ],
      correctOptionId: 'B',
      explanation: `Tech-focused capacity planning ensures servers, bandwidth, and storage can handle peak loads.`
    },
    {
      id: 'ed5-q61',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Sarah, a security analyst, is concerned about potential man-in-the-middle attacks on the company’s internal portal. To mitigate this risk, she recommends obtaining a digital certificate from a trusted entity. Which of the following is responsible for issuing such certificates?`,
      options: [
        { id: 'A', text: 'Key distribution center' },
        { id: 'B', text: 'Certificate authority (CA)' },
        { id: 'C', text: 'Tokenization system' },
        { id: 'D', text: 'Security incident event manager' }
      ],
      correctOptionId: 'B',
      explanation: `CAs issue and validate digital certificates that underpin TLS/SSL trust.`
    },
    {
      id: 'ed5-q62',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A security analyst discovers that an external IP address has been repeatedly trying every possible combination of characters to gain access to the company’s VPN portal for the past two days. Which type of password attack is this MOST likely describing?`,
      options: [
        { id: 'A', text: 'Password Spraying' },
        { id: 'B', text: 'Dictionary Attack' },
        { id: 'C', text: 'Rainbow Table Attack' },
        { id: 'D', text: 'Brute Force Attack' }
      ],
      correctOptionId: 'D',
      explanation: `Trying all possible combinations for a login is a brute-force attack.`
    },
    {
      id: 'ed5-q63',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A graphic design company frequently works with large files such as videos and high-resolution images. These files are stored on a dedicated storage volume in their server. They want to secure this data without encrypting individual files. Which encryption approach is most appropriate for this scenario?`,
      options: [
        { id: 'A', text: 'File-level Encryption' },
        { id: 'B', text: 'Full-disk Encryption' },
        { id: 'C', text: 'Transport-layer Encryption' },
        { id: 'D', text: 'Volume-level Encryption' }
      ],
      correctOptionId: 'D',
      explanation: `Volume-level encryption secures all data on a specific logical volume in one shot.`
    },
    {
      id: 'ed5-q64',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Sarah is a project manager working on a document that she owns. She wants to grant specific permissions to certain team members, allowing some to edit and others only to view the document. Which of the following access control models would BEST allow Sarah to accomplish this?`,
      options: [
        { id: 'A', text: 'Mandatory Access Control (MAC)' },
        { id: 'B', text: 'Role-Based Access Control (RBAC)' },
        { id: 'C', text: 'Discretionary Access Control (DAC)' },
        { id: 'D', text: 'Attribute-Based Access Control (ABAC)' }
      ],
      correctOptionId: 'C',
      explanation: `DAC lets the resource owner decide who has what level of access to their resource.`
    },
    {
      id: 'ed5-q65',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `MegaCorp is transitioning to a cloud-based infrastructure and wants to allow its employees to access multiple cloud services without re-entering their credentials every time. They currently have an on-premises LDAP directory in place. Which approach should MegaCorp take to provide a seamless authentication experience?`,
      options: [
        { id: 'A', text: 'Abandon LDAP and create individual accounts for each cloud service' },
        { id: 'B', text: 'Integrate their LDAP with a Single Sign-On (SSO) solution that supports cloud services' },
        { id: 'C', text: 'Store passwords in a plaintext file for users to log in manually' },
        { id: 'D', text: 'Force users to change passwords every day' }
      ],
      correctOptionId: 'B',
      explanation: `LDAP + SSO integration allows centralized authentication across multiple cloud services.`
    },
    {
      id: 'ed5-q66',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A global manufacturing company wants to ensure its employees worldwide do not access websites promoting hate speech, gambling, or explicit content during working hours. To meet this requirement, which web filtering technique would be the most efficient?`,
      options: [
        { id: 'A', text: 'Deploy a centralized proxy with location-based filtering' },
        { id: 'B', text: 'Use a blacklist of specific URLs known to contain such content' },
        { id: 'C', text: 'Implement content categorization and block undesired categories' },
        { id: 'D', text: 'Monitor internet usage logs and reprimand violators' }
      ],
      correctOptionId: 'C',
      explanation: `Category-based filtering can block entire content types like gambling or adult content at scale.`
    },
    {
      id: 'ed5-q67',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `During an IT audit, a company’s encryption practices come under scrutiny. The IT auditor recommends increasing the encryption key length for certain applications to improve security. What is the PRIMARY reason to increase the encryption key length?`,
      options: [
        { id: 'A', text: 'To speed up encryption and decryption processes' },
        { id: 'B', text: 'To ensure compatibility with older systems' },
        { id: 'C', text: 'To reduce the possibility of a brute force attack' },
        { id: 'D', text: 'To reduce the key management overhead' }
      ],
      correctOptionId: 'C',
      explanation: `Longer keys exponentially increase the search space, making brute-force attacks far more difficult.`
    },
    {
      id: 'ed5-q68',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `PharmaCorp, a pharmaceutical company, wants to ensure that its researchers cannot transfer proprietary formulas and research data to external storage devices or cloud storage, while allowing other types of data transfers. What should they implement?`,
      options: [
        { id: 'A', text: 'Web Application Firewall (WAF)' },
        { id: 'B', text: 'Data Encryption Tool' },
        { id: 'C', text: 'Data Loss Prevention (DLP)' },
        { id: 'D', text: 'Virtual Private Network (VPN)' }
      ],
      correctOptionId: 'C',
      explanation: `DLP monitors and can block exfiltration of sensitive information to unauthorized destinations.`
    },
    {
      id: 'ed5-q69',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `An online banking platform wants to improve its customer verification process when users open a new account. Which of the following identity proofing methods would be the MOST secure for this purpose?`,
      options: [
        { id: 'A', text: 'Asking users to select a security question and answer' },
        { id: 'B', text: 'Requiring users to upload a photo of a government-issued ID and a selfie' },
        { id: 'C', text: 'Sending a verification code to the user’s email address' },
        { id: 'D', text: 'Prompting users to provide their favorite color' }
      ],
      correctOptionId: 'B',
      explanation: `Comparing a selfie to a government ID provides strong assurance of identity.`
    },
    {
      id: 'ed5-q70',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Sarah is working on a project where she needs to validate the integrity and authenticity of assets over time, without a centralized authority. Which technology would be most appropriate for this use case?`,
      options: [
        { id: 'A', text: 'Digital signature' },
        { id: 'B', text: 'Key escrow' },
        { id: 'C', text: 'Blockchain' },
        { id: 'D', text: 'Key management system' }
      ],
      correctOptionId: 'C',
      explanation: `Blockchain provides a decentralized, tamper-evident record over time.`
    },
    {
      id: 'ed5-q71',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `After a recent cyber attack on a corporation’s central database, the IT department has been tasked with enhancing the security of their network infrastructure. Which of the following would be the BEST technique to ensure that different departments, like HR and Finance, cannot access each other’s sensitive data?`,
      options: [
        { id: 'A', text: 'Implement network segmentation based on departments' },
        { id: 'B', text: 'Upgrade the bandwidth of the entire network' },
        { id: 'C', text: 'Use a single strong password for all departments' },
        { id: 'D', text: 'Move all department data to the cloud' }
      ],
      correctOptionId: 'A',
      explanation: `Segmentation isolates departmental networks, limiting lateral movement and data access.`
    },
    {
      id: 'ed5-q72',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A finance department employee, Maya, is transferred to the HR department. Which of the following actions aligns best with the principle of least privilege?`,
      options: [
        { id: 'A', text: "Retain Maya's access to the finance system and grant additional access to the HR system" },
        { id: 'B', text: 'Remove all previous access rights and provide her access solely to the HR system' },
        { id: 'C', text: 'Grant Maya administrative rights to ease her transition' },
        { id: 'D', text: "Limit Maya's access to read-only for both finance and HR systems" }
      ],
      correctOptionId: 'B',
      explanation: `She should only have the access necessary for her new HR role, not her old finance rights.`
    },
    {
      id: 'ed5-q73',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A financial institution, BankCorp, has recently experienced a surge in phishing attacks targeting its employees with URLs that look similar to legitimate ones but have slight variations. To reduce the risk of employees accidentally accessing these malicious sites, which measure should BankCorp implement?`,
      options: [
        { id: 'A', text: 'Implement a Domain Name System (DNS) firewall' },
        { id: 'B', text: 'Employ URL scanning to identify and block malicious URLs' },
        { id: 'C', text: 'Rely on manual reporting of suspicious URLs by employees' },
        { id: 'D', text: 'Use a VPN to redirect all employee web traffic' }
      ],
      correctOptionId: 'B',
      explanation: `URL scanning provides fine-grained inspection and blocking of suspicious or lookalike URLs.`
    },
    {
      id: 'ed5-q74',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT team at a manufacturing company is deploying an IoT-based monitoring system for their machinery. They want to ensure that these IoT devices, if compromised, cannot adversely affect their main corporate network. What should they implement to achieve this?`,
      options: [
        { id: 'A', text: 'Install antivirus software on all IoT devices' },
        { id: 'B', text: 'Regularly patch and update the IoT device firmware' },
        { id: 'C', text: 'Place the IoT devices on a dedicated VLAN' },
        { id: 'D', text: 'Enable multi-factor authentication for IoT devices' }
      ],
      correctOptionId: 'C',
      explanation: `A dedicated VLAN isolates IoT devices from the core corporate network, limiting blast radius.`
    },
    {
      id: 'ed5-q75',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The content filtering logs at a retail company display multiple instances of blocked access to a file download URL ending with “.exe”. The source IP address belongs to a point of sale (POS) terminal. What should be the primary concern for the security team?`,
      options: [
        { id: 'A', text: 'The POS terminal might have outdated software' },
        { id: 'B', text: "There's a possible misconfiguration in the content filtering rules" },
        { id: 'C', text: 'The POS terminal might be compromised and trying to download malicious executables' },
        { id: 'D', text: "The company's internet speed is too slow" }
      ],
      correctOptionId: 'C',
      explanation: `POS terminals should not be downloading executables; repeated attempts suggest compromise.`
    },
    {
      id: 'ed5-q76',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company wants to implement a solution that verifies the software integrity of remote servers before allowing them to connect to the primary network. Which of the following solutions BEST achieves this objective through attestation?`,
      options: [
        { id: 'A', text: 'Host-based firewall' },
        { id: 'B', text: 'Whitelisting application' },
        { id: 'C', text: 'Remote attestation' },
        { id: 'D', text: 'VPN tunneling' }
      ],
      correctOptionId: 'C',
      explanation: `Remote attestation lets a device prove its software state to a remote verifier before access.`
    },
    {
      id: 'ed5-q77',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `ABC Tech has a mixed environment with both Linux and Windows servers. They want to ensure that processes running on their Linux servers only have access to specific resources and are restricted from performing certain actions. Which of the following tools would be most appropriate for this task?`,
      options: [
        { id: 'A', text: 'Use Group Policy on Windows servers and apply it to Linux servers' },
        { id: 'B', text: 'Implement a strict user training regimen' },
        { id: 'C', text: 'Enable Security-Enhanced Linux (SELinux) in enforcing mode' },
        { id: 'D', text: 'Limit user access to Linux servers' }
      ],
      correctOptionId: 'C',
      explanation: `SELinux enforces mandatory access control policies that tightly restrict process capabilities.`
    },
    {
      id: 'ed5-q78',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Liam, a security analyst, is investigating a potential breach. He discovers that a malicious actor sent requests to the server by altering HTTP headers to impersonate another user, thereby gaining unauthorized access. Which type of application attack is this?`,
      options: [
        { id: 'A', text: 'Cross-Site Request Forgery (CSRF)' },
        { id: 'B', text: 'Cross-Site Scripting (XSS)' },
        { id: 'C', text: 'HTTP Header Forgery' },
        { id: 'D', text: 'Session Hijacking' }
      ],
      correctOptionId: 'C',
      explanation: `Tampering with HTTP headers to spoof identity or permissions is HTTP header forgery.`
    },
    {
      id: 'ed5-q79',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `ABC Corp has recently faced a security breach due to a contractor connecting an infected laptop to the corporate network. Management wants to implement a solution that would ensure any device connecting to the corporate network meets the company’s security standards, including up-to-date antivirus definitions. Which solution should ABC Corp consider?`,
      options: [
        { id: 'A', text: 'Intrusion Detection System (IDS)' },
        { id: 'B', text: 'Virtual Private Network (VPN)' },
        { id: 'C', text: 'Network Access Control (NAC)' },
        { id: 'D', text: 'Web Application Firewall (WAF)' }
      ],
      correctOptionId: 'C',
      explanation: `NAC enforces posture checks like AV status before granting network access.`
    },
    {
      id: 'ed5-q80',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `CyberFirm has been facing issues with phishing campaigns where attackers spoof their domain to send fraudulent emails. They already implemented DKIM but want to specify which mail servers are authorized to send emails for their domain. Which security measure should CyberFirm adopt?`,
      options: [
        { id: 'A', text: 'SPF' },
        { id: 'B', text: 'PGP' },
        { id: 'C', text: 'SSL certificate' },
        { id: 'D', text: 'IMAP' }
      ],
      correctOptionId: 'A',
      explanation: `SPF DNS records define which mail servers are allowed to send email for a domain.`
    },
    {
      id: 'ed5-q81',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A web application requires users to authenticate using a token sent to their email. Alex, a security analyst, observes that once logged in, if he presents the same token again, he is granted access without any restrictions. What type of vulnerability does this situation depict?`,
      options: [
        { id: 'A', text: 'Cross-Site Request Forgery (CSRF)' },
        { id: 'B', text: 'Replay Attack' },
        { id: 'C', text: 'Man-in-the-Middle (MitM) Attack' },
        { id: 'D', text: 'Cross-Site Scripting (XSS)' }
      ],
      correctOptionId: 'B',
      explanation: `Reusing an authentication token that remains valid is a replay attack scenario.`
    },
    {
      id: 'ed5-q82',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A large law firm has a centralized document repository where lawyers store client information, legal drafts, and other sensitive data. A new paralegal, Jenna, joins the firm and needs to be able to view client documents but should not be able to modify or delete them. Which type of permission should be granted to Jenna?`,
      options: [
        { id: 'A', text: 'Read-Only' },
        { id: 'B', text: 'Full Control' },
        { id: 'C', text: 'Modify' },
        { id: 'D', text: 'Execute' }
      ],
      correctOptionId: 'A',
      explanation: `Read-only access lets her view contents without altering or deleting files.`
    },
    {
      id: 'ed5-q83',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT department of a software development company wants to ensure that only company-approved development tools can be executed in their development environment, preventing any unauthorized or potentially harmful software from running. What should the IT department employ to achieve this?`,
      options: [
        { id: 'A', text: 'Implement network segmentation' },
        { id: 'B', text: 'Conduct regular vulnerability assessments' },
        { id: 'C', text: 'Install a stateful firewall' },
        { id: 'D', text: 'Establish an application allow list' }
      ],
      correctOptionId: 'D',
      explanation: `An allow list (whitelist) restricts execution to explicitly approved applications only.`
    },
    {
      id: 'ed5-q84',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A company is implementing a system to ensure that code released to production is both unaltered and approved by a specific team member. Which of the following cryptographic techniques should they implement?`,
      options: [
        { id: 'A', text: 'Symmetric encryption of the code' },
        { id: 'B', text: 'Hashing the code with SHA-256' },
        { id: 'C', text: "Encrypting the code with the team member's public key" },
        { id: 'D', text: 'Digital signature by the team member' }
      ],
      correctOptionId: 'D',
      explanation: `A digital signature provides integrity and non-repudiation, proving a specific person approved the code.`
    },
    {
      id: 'ed5-q85',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `During an organization’s security review, the cybersecurity analyst noticed that there were multiple failed login attempts for different user accounts, each with a few commonly used passwords. What type of password attack does this scenario BEST describe?`,
      options: [
        { id: 'A', text: 'Brute Force Attack' },
        { id: 'B', text: 'Dictionary Attack' },
        { id: 'C', text: 'Credential Stuffing' },
        { id: 'D', text: 'Password Spraying' }
      ],
      correctOptionId: 'D',
      explanation: `Password spraying tries a few common passwords across many accounts to avoid lockouts.`
    },
    {
      id: 'ed5-q86',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A project manager is working on a new product launch and has documents with sensitive financial projections on her local computer. She occasionally shares these documents with select board members via email and wants to encrypt only these files. Which encryption approach should she utilize?`,
      options: [
        { id: 'A', text: 'Full-disk Encryption' },
        { id: 'B', text: 'Transport-layer Encryption' },
        { id: 'C', text: 'File-level Encryption' },
        { id: 'D', text: 'Partition Encryption' }
      ],
      correctOptionId: 'C',
      explanation: `File-level encryption secures specific files without encrypting the entire drive.`
    },
    {
      id: 'ed5-q87',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A financial institution is looking to adopt an encryption algorithm for its transactions that is considered to be very secure due to its longer key length, compared to older standards. Which encryption algorithm best fits this description?`,
      options: [
        { id: 'A', text: 'DES' },
        { id: 'B', text: 'Blowfish' },
        { id: 'C', text: 'RSA' },
        { id: 'D', text: 'AES-256' }
      ],
      correctOptionId: 'D',
      explanation: `AES-256 uses a 256-bit key and is widely considered strong when properly implemented.`
    },
    {
      id: 'ed5-q88',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `The IT team of XYZ Corp received an alert that an employee’s account was used to access the company’s portal from Paris at 2:00 PM and then from Tokyo at 2:30 PM. The employee is currently on a business trip to Paris. What could this alert be indicating?`,
      options: [
        { id: 'A', text: 'The employee quickly traveled from Paris to Tokyo' },
        { id: 'B', text: "The company's time zone settings are misconfigured" },
        { id: 'C', text: "There's a possible VPN misconfiguration on the employee's computer" },
        { id: 'D', text: "The employee's account might have been compromised" }
      ],
      correctOptionId: 'D',
      explanation: `Impossible travel detection suggests that another party is using the employee's credentials.`
    },
    {
      id: 'ed5-q89',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `Global Corp received a report that some of its customers received phishing emails that seemed to originate from the company’s domain. SPF and DKIM are already correctly configured. What additional email security measure can Global Corp implement to provide clear policies on how emails should be treated if they don’t align with SPF and DKIM?`,
      options: [
        { id: 'A', text: 'Enabling TLS encryption' },
        { id: 'B', text: 'Implementing DMARC policies' },
        { id: 'C', text: 'Setting up a new SMTP server' },
        { id: 'D', text: 'Increasing email retention period' }
      ],
      correctOptionId: 'B',
      explanation: `DMARC tells receivers how to handle messages that fail SPF/DKIM checks (none, quarantine, reject).`
    },
    {
      id: 'ed5-q90',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A financial institution plans to provide access to its database for third-party developers to create new applications. However, they want to ensure that the developers do not see the actual data but instead work with a disguised version that retains the data’s original structure. What technique is the financial institution considering?`,
      options: [
        { id: 'A', text: 'Tokenization' },
        { id: 'B', text: 'Data masking' },
        { id: 'C', text: 'Encryption' },
        { id: 'D', text: 'Digital watermarking' }
      ],
      correctOptionId: 'B',
      explanation: `Data masking substitutes real values with fictitious but structurally similar data.`
    },
    {
      id: 'ed5-q91',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `While reviewing web server logs, Sarah, a security analyst, notices a pattern of requests containing “..%2F..” in the URLs. She suspects this might be an attempt to exploit a vulnerability. Which type of application attack is likely being attempted?`,
      options: [
        { id: 'A', text: 'Command Injection' },
        { id: 'B', text: 'Cross-Site Scripting (XSS)' },
        { id: 'C', text: 'Directory Traversal' },
        { id: 'D', text: 'Cross-Site Request Forgery (CSRF)' }
      ],
      correctOptionId: 'C',
      explanation: `The “..%2F..” sequence (../..) indicates attempts to traverse directories and access files outside the web root.`
    },
    {
      id: 'ed5-q92',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A financial firm outsources its payment processing to a third-party service provider. After fraudulent transactions, it was discovered that the service provider was not employing the latest encryption standards when transmitting data. Which vulnerability related to the supply chain does this scenario highlight?`,
      options: [
        { id: 'A', text: 'Inadequate vendor background checks' },
        { id: 'B', text: "Service provider's outdated security practices" },
        { id: 'C', text: 'Deficient hardware components from a supplier' },
        { id: 'D', text: 'Software with embedded backdoors' }
      ],
      correctOptionId: 'B',
      explanation: `This is a third-party risk where the provider's weak or outdated security affects the customer.`
    },
    {
      id: 'ed5-q93',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A security analyst is evaluating security enhancements for a series of laptops that will store highly confidential data. The analyst wants to ensure that stored data remains encrypted and the integrity of the boot process is maintained. Which of the following would BEST meet this requirement?`,
      options: [
        { id: 'A', text: 'Installing antivirus software on each laptop' },
        { id: 'B', text: 'Enabling a software-based full-disk encryption solution only' },
        { id: 'C', text: 'Implementing a BIOS password' },
        { id: 'D', text: 'Utilizing a Trusted Platform Module (TPM)' }
      ],
      correctOptionId: 'D',
      explanation: `A TPM provides hardware-backed key storage and secure boot features to protect both data and boot integrity.`
    },
    {
      id: 'ed5-q94',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `An organization is choosing a hash function for digital signatures. They want to ensure that it is resistant to scenarios where an attacker might produce two different messages having the same hash. Which type of attack are they trying to defend against?`,
      options: [
        { id: 'A', text: 'Side-channel Attack' },
        { id: 'B', text: 'Replay Attack' },
        { id: 'C', text: 'Birthday Attack' },
        { id: 'D', text: 'Ciphertext-only Attack' }
      ],
      correctOptionId: 'C',
      explanation: `Birthday attacks exploit the probability of hash collisions; strong hashes minimize this risk.`
    },
    {
      id: 'ed5-q95',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `At ExamsDigest, employees can access the company’s cloud-based storage system. However, access to certain files is determined by the employee’s department, job title, and years of service. For instance, senior managers in finance with more than five years of service can view financial forecasts. Which access control model is ExamsDigest using?`,
      options: [
        { id: 'A', text: 'Rule-Based Access Control (RAC)' },
        { id: 'B', text: 'Role-Based Access Control (RBAC)' },
        { id: 'C', text: 'Attribute-Based Access Control (ABAC)' },
        { id: 'D', text: 'Discretionary Access Control (DAC)' }
      ],
      correctOptionId: 'C',
      explanation: `ABAC evaluates multiple attributes (department, role, tenure) to decide access.`
    },
    {
      id: 'ed5-q96',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `After a recent system upgrade, CloudTech Corp. decided to validate the efficiency and reliability of its new data processing system by running it in parallel with the old one and comparing outcomes. What kind of testing is CloudTech Corp. utilizing?`,
      options: [
        { id: 'A', text: 'Load Testing' },
        { id: 'B', text: 'Failover Testing' },
        { id: 'C', text: 'Parallel Processing Testing' },
        { id: 'D', text: 'Simulation Testing' }
      ],
      correctOptionId: 'C',
      explanation: `Parallel processing testing compares new and old systems side by side on the same inputs.`
    },
    {
      id: 'ed5-q97',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `SecureNet Inc. recently upgraded their security infrastructure. To validate how the new system would respond in real-world scenarios without exposing it to actual risks, they decide to imitate certain cyber threats in a controlled environment. Which type of test is SecureNet Inc. planning to conduct?`,
      options: [
        { id: 'A', text: 'Penetration Testing' },
        { id: 'B', text: 'Simulation Testing' },
        { id: 'C', text: 'Vulnerability Assessment' },
        { id: 'D', text: 'Failover Testing' }
      ],
      correctOptionId: 'B',
      explanation: `Simulation testing models attacks and scenarios in a controlled, non-production environment.`
    },
    {
      id: 'ed5-q98',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A marketing team is collaborating on a new campaign and requires access to a shared folder. However, they shouldn’t be able to modify files created by others. How should permissions be set on this shared folder?`,
      options: [
        { id: 'A', text: 'Assign the marketing team full control' },
        { id: 'B', text: 'Allow the marketing team read-only access' },
        { id: 'C', text: 'Assign the marketing team write-only access' },
        { id: 'D', text: 'Assign the marketing team modify permission but deny the delete permission' }
      ],
      correctOptionId: 'D',
      explanation: `Denying delete while allowing modify lets users work without easily removing others’ files.`
    },
    {
      id: 'ed5-q99',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `An organization’s e-commerce platform experienced a data breach where attackers exploited a known vulnerability. A patch had been available for two months but was not applied. Which of the following would have been the MOST effective measure to prevent this breach?`,
      options: [
        { id: 'A', text: 'Implementing stronger user authentication methods' },
        { id: 'B', text: 'Increasing network monitoring for signs of malicious activity' },
        { id: 'C', text: 'Applying the available patch in a timely manner' },
        { id: 'D', text: 'Migrating to a different e-commerce platform' }
      ],
      correctOptionId: 'C',
      explanation: `Timely patch management closes known vulnerabilities before attackers can exploit them.`
    },
    {
      id: 'ed5-q100',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: `A security analyst is reviewing network logs and notices that an attacker positioned in between the user and the target website is intercepting and potentially modifying the user’s communications before passing them on to the intended destination, without either side being aware. What type of network attack is being described?`,
      options: [
        { id: 'A', text: 'Replay Attack' },
        { id: 'B', text: 'Smurf Attack' },
        { id: 'C', text: 'On-path Attack' },
        { id: 'D', text: 'Spoofing Attack' }
      ],
      correctOptionId: 'C',
      explanation: `An on-path (man-in-the-middle) attack involves surreptitiously intercepting and relaying communications.`
    }
  ],

  // Exam 6
    [
    {
      id: 'ed6-q501',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company’s website was temporarily defaced with a humorous meme, but no sensitive data was stolen or any significant damage done. The attacker left a message bragging about their first successful hack. Which type of threat actor is MOST likely responsible for this attack?",
      options: [
        { id: 'A', text: "Insider threat" },
        { id: 'B', text: "Advanced Persistent Threat (APT)" },
        { id: 'C', text: "Unskilled attacker" },
        { id: 'D', text: "Nation-state" }
      ],
      correctOptionId: 'C',
      explanation: "A script-kiddie or unskilled attacker often defaces sites for fun or bragging rights rather than causing serious damage."
    },
    {
      id: 'ed6-q502',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution has experienced an uptick in unauthorized transactions. They want to implement a control that will allow them to identify suspicious transactions in real time. Which of the following would be the BEST detective control for this scenario?",
      options: [
        { id: 'A', text: "Implementing a multi-factor authentication system for all users" },
        { id: 'B', text: "Establishing a Security Operations Center (SOC) to monitor network traffic" },
        { id: 'C', text: "Installing an Intrusion Detection System (IDS) on their network" },
        { id: 'D', text: "Restricting transaction capabilities to only a few trusted IP addresses" }
      ],
      correctOptionId: 'C',
      explanation: "An IDS is a detective control that monitors traffic and can be tuned to identify patterns related to unauthorized transactions."
    },
    {
      id: 'ed6-q503',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GammaTech has a new remote access policy for its employees. Whenever an employee attempts to access the corporate network from an unfamiliar location, the system requests additional verification before granting access. Which factor of authentication is being emphasized in this policy?",
      options: [
        { id: 'A', text: "Knowledge-based questions the employee answers" },
        { id: 'B', text: "A fingerprint scan from the employee" },
        { id: 'C', text: "The physical coordinates of the employee's access point" },
        { id: 'D', text: "An SMS code sent to the employee's phone" }
      ],
      correctOptionId: 'C',
      explanation: "“Somewhere you are” refers to geographic or location-based authentication, such as the coordinates of the access point."
    },
    {
      id: 'ed6-q504',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "The cybersecurity team of XYZ Corp. plans to assess their organization’s preparedness for a potential data breach. They aim to evaluate the effectiveness of their response strategy without performing any real actions. Which of the following methods would BEST help them achieve this goal?",
      options: [
        { id: 'A', text: "Live fire exercise" },
        { id: 'B', text: "System hardening test" },
        { id: 'C', text: "Red team/blue team exercise" },
        { id: 'D', text: "Tabletop exercise" }
      ],
      correctOptionId: 'D',
      explanation: "Tabletop exercises are discussion-based simulations of incidents that test plans and roles without impacting production systems."
    },
    {
      id: 'ed6-q505',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company is attempting to verify the legitimacy of an email sent from a senior executive to a number of employees. The email requests the recipients to click on a link and enter their credentials for a “system upgrade.” The security team wants to ascertain if the email genuinely came from the executive. Which of the following metadata from the email would be MOST beneficial in this investigation?",
      options: [
        { id: 'A', text: "The email's subject line" },
        { id: 'B', text: "The email's send time and date" },
        { id: 'C', text: "The originating IP address in the email headers" },
        { id: 'D', text: "The size of the email in bytes" }
      ],
      correctOptionId: 'C',
      explanation: "The originating IP in the headers helps verify whether the message originated from expected mail infrastructure or a suspicious source."
    },
    {
      id: 'ed6-q506',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An online banking website employs a system that automatically logs out users after 10 minutes of inactivity to ensure that if a user forgets to log out, no one else can alter the user’s banking details. Which principle of the CIA triad is the banking website MOST directly addressing?",
      options: [
        { id: 'A', text: "Confidentiality" },
        { id: 'B', text: "Availability" },
        { id: 'C', text: "Authentication" },
        { id: 'D', text: "Integrity" }
      ],
      correctOptionId: 'D',
      explanation: "Automatic logout reduces the chance of unauthorized changes to data, which directly supports data integrity."
    },
    {
      id: 'ed6-q507',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An IT department in a large corporation spends several hours each day manually deploying patches and updates to thousands of workstations. Which of the following solutions would BEST enhance the efficiency of this process and save time for the IT team?",
      options: [
        { id: 'A', text: "Disable automatic updates and conduct monthly patching sessions" },
        { id: 'B', text: "Implement an automated patch management system" },
        { id: 'C', text: "Designate a dedicated team for patching that operates in shifts" },
        { id: 'D', text: "Educate users to install updates on their own" }
      ],
      correctOptionId: 'B',
      explanation: "Automated patch management centralizes and streamlines patch deployment, saving time and improving consistency."
    },
    {
      id: 'ed6-q508',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Epsilon Inc. recently hired Jenny as a junior network administrator. To ensure security, they give Jenny only the access permissions necessary to complete her specific tasks, such as monitoring network traffic, but not modifying firewall rules. This approach of granting Jenny’s permissions aligns with which security principle?",
      options: [
        { id: 'A', text: "Mandatory Access Control (MAC)" },
        { id: 'B', text: "Role-Based Access Control (RBAC)" },
        { id: 'C', text: "Time-of-Day Restrictions" },
        { id: 'D', text: "Least Privilege" }
      ],
      correctOptionId: 'D',
      explanation: "Least privilege requires giving users only the minimal permissions they need to perform their duties."
    },
    {
      id: 'ed6-q509',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "As part of a cloud infrastructure project, AlphaTech plans to deploy multiple virtualized resources for its new application. The deployment includes databases, web servers, and load balancers. What is the PRIMARY benefit of using automation scripts in the resource provisioning process for this project?",
      options: [
        { id: 'A', text: "It enables AlphaTech to use a single operating system for all resources" },
        { id: 'B', text: "It guarantees 100% uptime for all virtualized resources" },
        { id: 'C', text: "It ensures standardized, repeatable, and rapid deployments across the infrastructure" },
        { id: 'D', text: "It prevents unauthorized users from accessing the cloud infrastructure" }
      ],
      correctOptionId: 'C',
      explanation: "Automation scripts make provisioning consistent, repeatable, and fast across many resources."
    },
    {
      id: 'ed6-q510',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "CyberSec Corp’s CISO wants to determine if there have been any anomalies in user behavior over the past month. Specifically, they’re concerned about unauthorized data transfers outside of regular business hours. Which of the following automated reports would be MOST useful in this investigation?",
      options: [
        { id: 'A', text: "After-hours network activity reports" },
        { id: 'B', text: "User password change frequency reports" },
        { id: 'C', text: "Hardware inventory audit reports" },
        { id: 'D', text: "Software licensing compliance reports" }
      ],
      correctOptionId: 'A',
      explanation: "Reports focused on after-hours activity directly highlight off-hours data transfers and anomalies."
    },
    {
      id: 'ed6-q511',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a review of IDS logs, a security specialist notices a series of alerts indicating that a single external IP has been sending payloads that exploit a known vulnerability. However, the internal system to which these payloads are sent is patched and is not vulnerable to the exploit. Which of the following describes this type of IDS alert?",
      options: [
        { id: 'A', text: "False positive" },
        { id: 'B', text: "False negative" },
        { id: 'C', text: "True positive" },
        { id: 'D', text: "True negative" }
      ],
      correctOptionId: 'C',
      explanation: "The traffic is actually malicious (the exploit is real), so the IDS correctly identified it as malicious, even though the target is patched."
    },
    {
      id: 'ed6-q512',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An organization recently experienced a malware infection on one of its workstations. A security analyst has been tasked with reviewing the endpoint logs of the infected system to gather more information about the incident. Which of the following entries in the endpoint logs would be MOST indicative of the initial malware infection point?",
      options: [
        { id: 'A', text: "Logs indicating successful user login and logout events" },
        { id: 'B', text: "Entries showing periodic system health-check status as \"OK\"" },
        { id: 'C', text: "Logs documenting a recently installed and executed unknown .exe file from a temporary directory" },
        { id: 'D', text: "Entries detailing network connectivity checks to the domain controller" }
      ],
      correctOptionId: 'C',
      explanation: "An unknown executable installed and run from a temp directory is a classic indicator of a malware dropper or infection source."
    },
    {
      id: 'ed6-q513',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security analyst is reviewing the IPS logs and discovers multiple alerts originating from a single IP address attempting to access various company servers. The analyst is trying to determine the type of attack. Which of the following log entries BEST indicates a port scanning activity?",
      options: [
        { id: 'A', text: "Multiple consecutive connection attempts to different ports on a single server in a short time frame" },
        { id: 'B', text: "Repeated connection attempts to port 80 of a web server every 3 seconds" },
        { id: 'C', text: "Numerous failed login attempts to an FTP server from the same IP address" },
        { id: 'D', text: "Consistent pings to the network gateway every 5 seconds" }
      ],
      correctOptionId: 'A',
      explanation: "Port scans are characterized by many rapid connection attempts to different ports to discover open services."
    },
    {
      id: 'ed6-q514',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A global financial company experiences sporadic cyber attacks on its infrastructure. The company notices that attacks that occur during non-business hours often result in more significant damage due to delayed responses. Which of the following measures would BEST decrease the reaction time to these off-hour attacks?",
      options: [
        { id: 'A', text: "Multiple consecutive connection attempts to different ports on a single server in a short time frame" },
        { id: 'B', text: "Repeated connection attempts to port 80 of a web server every 3 seconds" },
        { id: 'C', text: "Numerous failed login attempts to an FTP server from the same IP address" },
        { id: 'D', text: "Consistent pings to the network gateway every 5 seconds" }
      ],
      correctOptionId: 'A',
      explanation: "Note: The source text duplicates the port-scanning options and explanation here; in that text, option A is marked as correct. (You may want to correct this item in your own bank to something like 24/7 monitoring or an on-call SOC.)"
    },
    {
      id: 'ed6-q515',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "GreenTech, a data center company, is planning to expand its operations in a region known for frequent power outages. To maintain security posture and ensure continuity of operations, which of the following should be their PRIMARY consideration regarding power?",
      options: [
        { id: 'A', text: "Using power-efficient servers to reduce electricity costs" },
        { id: 'B', text: "Setting up solar panels to promote green energy" },
        { id: 'C', text: "Investing in redundant power supplies and uninterruptible power systems (UPS)" },
        { id: 'D', text: "Running operations only during peak daylight hours to ensure natural lighting" }
      ],
      correctOptionId: 'C',
      explanation: "Redundant power supplies and UPSs keep critical systems running through outages, protecting availability and integrity."
    },
    {
      id: 'ed6-q516',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A medium-sized enterprise is concerned about the security of its office workstations after a series of malware infections. As a security analyst, which of the following recommendations would BEST improve the security baseline of the workstations?",
      options: [
        { id: 'A', text: "Install multiple antivirus solutions to ensure maximum detection" },
        { id: 'B', text: "Set up screensavers with cyber hygiene tips to educate users" },
        { id: 'C', text: "Disable unnecessary services and ports on the workstations" },
        { id: 'D', text: "Frequently change the desktop wallpaper to prevent monotony" }
      ],
      correctOptionId: 'C',
      explanation: "Reducing exposed services and ports shrinks the attack surface and strengthens the baseline configuration."
    },
    {
      id: 'ed6-q517',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large financial institution is planning to upgrade its IT infrastructure to allow for a more efficient use of hardware resources, faster deployment of applications, and reduced server provisioning times. While evaluating different technologies, which of the following would directly address these needs?",
      options: [
        { id: 'A', text: "Network Segmentation" },
        { id: 'B', text: "Intrusion Detection System" },
        { id: 'C', text: "Virtualization" },
        { id: 'D', text: "Multi-Factor Authentication" }
      ],
      correctOptionId: 'C',
      explanation: "Virtualization lets multiple VMs share hardware, speeding provisioning and improving hardware utilization."
    },
    {
      id: 'ed6-q518',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "The security team of a multinational company deployed a network of honeypots globally, making it appear as an interconnected and realistic environment. They aim to study coordinated multi-stage attacks. This deceptive setup is known as:",
      options: [
        { id: 'A', text: "Firewall Cluster" },
        { id: 'B', text: "Virtual LAN (VLAN)" },
        { id: 'C', text: "Distributed Denial of Service (DDoS) Prevention" },
        { id: 'D', text: "Honeynet" }
      ],
      correctOptionId: 'D',
      explanation: "A honeynet is a network of honeypots that mimics a real environment for studying attacker behavior."
    },
    {
      id: 'ed6-q519',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sophia, the CFO of a medium-sized company, received a call from an individual claiming to be from the IT department. The caller requested her login details for a “critical system update.” Suspecting something wasn’t right, Sophia hung up and contacted her IT department, which confirmed no such call was made by them. Which type of attack did Sophia most likely experience?",
      options: [
        { id: 'A', text: "Vishing" },
        { id: 'B', text: "Phishing" },
        { id: 'C', text: "SQL Injection" },
        { id: 'D', text: "Cross-Site Request Forgery (CSRF)" }
      ],
      correctOptionId: 'A',
      explanation: "Vishing is voice-based phishing, where someone calls pretending to be a trusted party to obtain secrets."
    },
    {
      id: 'ed6-q520',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Sophia received an email from her bank asking her to urgently update her personal details due to a system upgrade. The email contains a link that redirects to a website that looks similar to her bank’s website. Which of the following should she do FIRST?",
      options: [
        { id: 'A', text: "Follow the link and promptly update her personal details to avoid any inconvenience" },
        { id: 'B', text: "Forward the email to her friends and family to ensure they are also aware of the bank's system upgrade" },
        { id: 'C', text: "Delete the email immediately without taking any action" },
        { id: 'D', text: "Contact her bank through official channels to verify the authenticity of the email" }
      ],
      correctOptionId: 'D',
      explanation: "The safest first step is to verify the message directly with the bank using official contact methods."
    },
    {
      id: 'ed6-q521',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Tech Enterprises is planning to release a new product. As part of the product’s creation, they’ve sourced components from various vendors. The security team is tasked with assessing risks linked to the supply chain. Which of the following is the MOST concerning risk when sourcing components from multiple vendors?",
      options: [
        { id: 'A', text: "Difficulty in tracking product warranty details from multiple vendors" },
        { id: 'B', text: "Increased product assembly time due to varied vendor delivery timelines" },
        { id: 'C', text: "Potential for introduction of insecure or compromised components" },
        { id: 'D', text: "The need for multiple purchase orders, leading to increased paperwork" }
      ],
      correctOptionId: 'C',
      explanation: "The biggest security concern is that a vendor could supply components with vulnerabilities or backdoors."
    },
    {
      id: 'ed6-q522',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "ThetaTech, a financial institution, wants to upgrade its authentication system for high-net-worth customers accessing their accounts online. Besides the traditional password, they want to include a method that captures unique physical or behavioral characteristics. Which type of authentication method should ThetaTech consider?",
      options: [
        { id: 'A', text: "Token-based authentication" },
        { id: 'B', text: "Geolocation tracking" },
        { id: 'C', text: "Biometrics" },
        { id: 'D', text: "Smart card" }
      ],
      correctOptionId: 'C',
      explanation: "Biometrics uses unique physical or behavioral traits such as fingerprints or voice for authentication."
    },
    {
      id: 'ed6-q523',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software development team in a large corporation decided to use an unauthorized cloud-based tool to host and manage their source code. The team believed it would increase their productivity, even though it was not approved by the IT department. A few weeks later, unauthorized access to their project data was detected. Which threat actor concept BEST describes the situation?",
      options: [
        { id: 'A', text: "Insider threat" },
        { id: 'B', text: "Hacktivist" },
        { id: 'C', text: "Shadow IT" },
        { id: 'D', text: "Organized crime syndicate" }
      ],
      correctOptionId: 'C',
      explanation: "Shadow IT is the use of systems or services without formal approval, which can introduce unvetted security risks."
    },
    {
      id: 'ed6-q524',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechHaus has recently experienced multiple security breaches where unauthorized personnel have managed to infiltrate their server rooms after hours. To enhance security measures, the company decided to deploy a new system. Which of the following options would BEST detect human intruders based on their body heat even in complete darkness?",
      options: [
        { id: 'A', text: "Installing CCTV cameras with LED lights" },
        { id: 'B', text: "Using ultrasonic motion sensors" },
        { id: 'C', text: "Deploying infrared (IR) sensors" },
        { id: 'D', text: "Implementing RFID badge readers at the entrance" }
      ],
      correctOptionId: 'C',
      explanation: "IR sensors detect infrared radiation such as body heat and can work in total darkness."
    },
    {
      id: 'ed6-q525',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a series of phishing attacks, the IT department of BetaTech Corp noticed that several employees were using easily guessable passwords. The security team decided to recommend the use of password managers to assist employees in creating and remembering strong passwords. Which of the following is a PRIMARY benefit of using password managers in this context?",
      options: [
        { id: 'A', text: "Password managers automatically update the operating system" },
        { id: 'B', text: "Password managers can generate and store complex passwords" },
        { id: 'C', text: "Password managers always prevent phishing attacks" },
        { id: 'D', text: "Password managers allow the reuse of strong passwords across multiple platforms" }
      ],
      correctOptionId: 'B',
      explanation: "Password managers make it easy for users to maintain long, complex, and unique passwords for many accounts."
    },
    {
      id: 'ed6-q526',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a routine scan, the security team at a graphic design firm discovers that an employee downloaded an image from an email and subsequently, unusual network traffic was detected originating from that employee’s workstation. The image appeared normal when opened. What type of attack might have been used in this situation?",
      options: [
        { id: 'A', text: "Image Steganography Malware" },
        { id: 'B', text: "Password Brute Force" },
        { id: 'C', text: "Phishing" },
        { id: 'D', text: "Port Scanning" }
      ],
      correctOptionId: 'A',
      explanation: "Steganography hides malicious code inside an image file that appears normal to the user."
    },
    {
      id: 'ed6-q527',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Acme Corp. is in the early stages of a potential lawsuit, and their legal department has just issued a notice for e-discovery related to email communications of a former executive. As an IT security professional, which of the following should be your FIRST action?",
      options: [
        { id: 'A', text: "Start a full backup of the company's email server" },
        { id: 'B', text: "Identify and isolate the email accounts related to the former executive" },
        { id: 'C', text: "Immediately delete all emails that are more than two years old" },
        { id: 'D', text: "Inform the media about the upcoming lawsuit" }
      ],
      correctOptionId: 'B',
      explanation: "Locating and preserving the relevant email data is the first priority in an e-discovery situation."
    },
    {
      id: 'ed6-q528',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A cloud-based e-commerce company wants to ensure that its inventory system automatically updates the stock levels on its website and third-party sales platforms whenever a sale occurs. What should the company leverage to achieve this real-time synchronization?",
      options: [
        { id: 'A', text: "Regularly backup the inventory system and restore it on the website and sales platforms" },
        { id: 'B', text: "Rely on customers to report discrepancies in stock levels" },
        { id: 'C', text: "Use Application Programming Interfaces (APIs) to integrate the inventory system with the website and third-party platforms" },
        { id: 'D', text: "Conduct daily stock audits and manually update all platforms" }
      ],
      correctOptionId: 'C',
      explanation: "APIs allow systems to communicate automatically and keep inventory synchronized in real time."
    },
    {
      id: 'ed6-q529',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial organization’s high-security data center has an authentication system for its main entry. If the system encounters an unexpected error, the organization wants to ensure that no one can gain access to the data center until the system is fixed. Which configuration should the authentication system be set to?",
      options: [
        { id: 'A', text: "Fail-open" },
        { id: 'B', text: "Fail-closed" },
        { id: 'C', text: "Fail-secure" },
        { id: 'D', text: "Fail-passive" }
      ],
      correctOptionId: 'B',
      explanation: "Fail-closed (fail-secure) denies access by default when an error occurs, which is preferred in high-security environments."
    },
    {
      id: 'ed6-q530',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Jane, a security analyst, receives a report about network slowdowns happening at specific times of the day. After investigating, she discovers that a device is flooding the network with traffic, causing legitimate requests to be dropped. Which type of attack is this device likely performing?",
      options: [
        { id: 'A', text: "Distributed Denial of Service (DDoS)" },
        { id: 'B', text: "ARP poisoning" },
        { id: 'C', text: "MAC flooding" },
        { id: 'D', text: "DNS amplification" }
      ],
      correctOptionId: 'C',
      explanation: "MAC flooding overwhelms a switch’s CAM table, causing it to behave like a hub and flood traffic, resulting in congestion."
    },
    {
      id: 'ed6-q531',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A medium-sized financial firm has noticed a series of unauthorized transactions moving funds from legitimate accounts to overseas locations. After investigating, it was found that a group was responsible for exploiting vulnerabilities in the firm’s transaction system. Which of the following motivations is most likely driving this group’s actions?",
      options: [
        { id: 'A', text: "Seeking notoriety within the hacker community" },
        { id: 'B', text: "Financial gain from unauthorized transactions" },
        { id: 'C', text: "Demonstrating political beliefs against financial institutions" },
        { id: 'D', text: "Espionage to uncover the firm's investment strategies" }
      ],
      correctOptionId: 'B',
      explanation: "Unauthorized fund transfers to overseas accounts clearly indicate a motive of financial gain."
    },
    {
      id: 'ed6-q532',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Country A and Country B are engaged in an ongoing territorial dispute. Suddenly, critical infrastructure facilities in Country B, such as power plants and transportation hubs, experience systematic cyberattacks. No ransom demand is made, and the attacks lead to significant disruption. What is the most probable motivation behind these cyberattacks?",
      options: [
        { id: 'A', text: "Financial gain from market disruptions" },
        { id: 'B', text: "Ethical hackers testing vulnerabilities" },
        { id: 'C', text: "Disruption due to philosophical disagreements with Country B's policies" },
        { id: 'D', text: "Acts of cyberwarfare to weaken Country B's position" }
      ],
      correctOptionId: 'D',
      explanation: "Targeting critical infrastructure in the context of a territorial dispute strongly suggests cyberwarfare."
    },
    {
      id: 'ed6-q533',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alex, an employee at XYZ Corp, noticed an unfamiliar USB drive lying in the company parking lot. Out of curiosity, Alex plugged the device into his workstation. Almost immediately, his antivirus program detected malicious software trying to execute. What type of attack did Alex likely encounter?",
      options: [
        { id: 'A', text: "Man-in-the-Middle Attack" },
        { id: 'B', text: "Evil Twin" },
        { id: 'C', text: "Spear Phishing" },
        { id: 'D', text: "USB Drop Attack" }
      ],
      correctOptionId: 'D',
      explanation: "USB drop attacks rely on curiosity to get victims to plug in infected removable media."
    },
    {
      id: 'ed6-q534',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company is setting up a secure communication channel between its headquarters and a remote branch office. To ensure that data transmitted over this channel originates from a legitimate system at the branch office, the company is considering using digital certificates. Which authentication method for systems is the company contemplating?",
      options: [
        { id: 'A', text: "Kerberos authentication" },
        { id: 'B', text: "Password-based authentication" },
        { id: 'C', text: "Certificate-based authentication" },
        { id: 'D', text: "Biometric-based authentication" }
      ],
      correctOptionId: 'C',
      explanation: "Certificate-based authentication uses digital certificates to verify the identity of systems or devices."
    },
    {
      id: 'ed6-q535',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "BioGen Inc., a biotechnology company, has implemented a layered security approach. They are considering adding a human element to their security measures for their research labs. Which of the following would best provide the ability to evaluate and respond to various security situations with human judgment?",
      options: [
        { id: 'A', text: "Installing biometric locks" },
        { id: 'B', text: "Employing security guards" },
        { id: 'C', text: "Implementing an access control vestibule" },
        { id: 'D', text: "Deploying AI-driven security cameras" }
      ],
      correctOptionId: 'B',
      explanation: "Security guards add human judgment and can interpret and respond to nuanced situations."
    },
    {
      id: 'ed6-q536',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An environmental NGO’s website was hacked and replaced with a message decrying their recent campaign against deforestation, claiming they are spreading misinformation. The website was left with a manifesto promoting responsible forestry and sustainable logging practices. Which type of threat actor is MOST likely behind this incident?",
      options: [
        { id: 'A', text: "Ransomware gang" },
        { id: 'B', text: "Organized crime syndicate" },
        { id: 'C', text: "Hacktivist" },
        { id: 'D', text: "Advanced Persistent Threat (APT)" }
      ],
      correctOptionId: 'C',
      explanation: "Hacktivists are driven by ideological or political causes and often deface websites to spread their message."
    },
    {
      id: 'ed6-q537',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a major data breach in XYZ Corporation, the management decided to understand the primary reason behind the incident to prevent such occurrences in the future. Which of the following approaches should the incident response team prioritize to determine the fundamental cause of the breach?",
      options: [
        { id: 'A', text: "Perform vulnerability scanning on all servers" },
        { id: 'B', text: "Review firewall logs for the past week" },
        { id: 'C', text: "Conduct a root cause analysis" },
        { id: 'D', text: "Upgrade all security software" }
      ],
      correctOptionId: 'C',
      explanation: "Root cause analysis systematically identifies the underlying cause so controls can be improved to prevent recurrence."
    },
    {
      id: 'ed6-q538',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaCorp is migrating to cloud infrastructure and wants to ensure all virtual machines (VMs) are securely configured from the onset. Before deploying multiple VM instances, what should AlphaCorp do to ensure each VM starts from a secure configuration?",
      options: [
        { id: 'A', text: "Use the default VM templates provided by the cloud provider" },
        { id: 'B', text: "Establish a secure baseline for VM configurations and use it for deployment" },
        { id: 'C', text: "Regularly backup all VMs" },
        { id: 'D', text: "Use multi-factor authentication for cloud access" }
      ],
      correctOptionId: 'B',
      explanation: "A hardened baseline image ensures every new VM starts from a known secure configuration."
    },
    {
      id: 'ed6-q539',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An employee receives a call from someone claiming to be from the IT department. The caller says there’s an urgent update required on the employee’s computer and asks for login credentials to perform the update remotely. The employee becomes suspicious because of which red flag regarding impersonation?",
      options: [
        { id: 'A', text: "The caller did not use technical jargon" },
        { id: 'B', text: "IT normally sends email notifications about updates" },
        { id: 'C', text: "The employee was not expecting any updates" },
        { id: 'D', text: "The caller's voice sounded unfamiliar" }
      ],
      correctOptionId: 'B',
      explanation: "A deviation from the organization’s normal process (IT using email for updates) is a strong indicator of impersonation."
    },
    {
      id: 'ed6-q540',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An organization with a single physical network infrastructure wants to separate the traffic of its finance department from that of the HR department. They do not want to set up entirely new physical networks but want to ensure that data packets from one department do not mix with the other’s. What should the organization implement?",
      options: [
        { id: 'A', text: "Air-gapped network" },
        { id: 'B', text: "DMZ (Demilitarized Zone)" },
        { id: 'C', text: "VLAN (Virtual Local Area Network)" },
        { id: 'D', text: "VPN (Virtual Private Network)" }
      ],
      correctOptionId: 'C',
      explanation: "VLANs allow logical segmentation of traffic over the same physical infrastructure, isolating departments."
    },
    {
      id: 'ed6-q541',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After detecting suspicious activity on a network, a digital forensic analyst is dispatched to acquire data from a potential compromised system. The analyst decides to capture an image of the affected system’s memory. This technique of capturing volatile data is particularly beneficial because:",
      options: [
        { id: 'A', text: "It helps identify deleted files" },
        { id: 'B', text: "It can capture data in real-time operations" },
        { id: 'C', text: "It provides information on patch levels" },
        { id: 'D', text: "It offers insights into firewall configurations" }
      ],
      correctOptionId: 'B',
      explanation: "Memory captures show real-time processes, connections, and other volatile data that would be lost on reboot."
    },
    {
      id: 'ed6-q542',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company has faced multiple instances of unauthorized individuals gaining access to their office premises. Which of the following preventive security controls would be MOST effective in preventing unauthorized physical access?",
      options: [
        { id: 'A', text: "Implementing a log monitoring solution for network traffic" },
        { id: 'B', text: "Installing video surveillance cameras at all entry and exit points" },
        { id: 'C', text: "Conducting regular security awareness training for employees" },
        { id: 'D', text: "Implementing a multi-factor authentication system for network access" }
      ],
      correctOptionId: 'B',
      explanation: "Visible surveillance cameras act as a preventive deterrent and help control and monitor physical access points."
    },
    {
      id: 'ed6-q543',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software development company is looking to migrate its legacy applications to a more modern infrastructure. They want to ensure the applications can be deployed consistently across multiple environments without the challenges of varying dependencies and configurations. Which approach would best achieve this goal?",
      options: [
        { id: 'A', text: "Virtual Machine Deployment" },
        { id: 'B', text: "Bare-Metal Deployment" },
        { id: 'C', text: "Containerization" },
        { id: 'D', text: "Serverless Computing" }
      ],
      correctOptionId: 'C',
      explanation: "Containers package the app and its dependencies together, providing consistent behavior across environments."
    },
    {
      id: 'ed6-q544',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "While conducting a security assessment, Lucy found that a specific application crashes when she inputs a string that is much longer than what the input field is designed to handle. This could potentially allow her to execute arbitrary code in the application’s context. What vulnerability is Lucy likely trying to exploit?",
      options: [
        { id: 'A', text: "SQL Injection" },
        { id: 'B', text: "Cross-Site Scripting (XSS)" },
        { id: 'C', text: "Buffer Overflow" },
        { id: 'D', text: "Directory Traversal" }
      ],
      correctOptionId: 'C',
      explanation: "Buffer overflow occurs when data exceeds a buffer’s size and overwrites adjacent memory, potentially enabling code execution."
    },
    {
      id: 'ed6-q545',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A major pharmaceutical company recently announced an increase in drug prices. Following the announcement, their website was taken offline by a DDoS attack, with a message posted online by a group claiming responsibility and demanding affordable healthcare for all. Which type of threat actor is MOST likely behind this attack?",
      options: [
        { id: 'A', text: "Unskilled attacker" },
        { id: 'B', text: "Insider threat" },
        { id: 'C', text: "Hacktivist" },
        { id: 'D', text: "Nation-state" }
      ],
      correctOptionId: 'C',
      explanation: "The ideological message tied to social policy (drug prices) is typical of hacktivist motivation."
    },
    {
      id: 'ed6-q546',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a security breach, Jake, a digital forensics investigator, arrives at the scene to collect a hard drive for examination. He labels the hard drive, records its serial number, photographs the scene, and ensures the hard drive is transported securely to the forensics lab. These steps are crucial to:",
      options: [
        { id: 'A', text: "Preserve the data's integrity on the hard drive" },
        { id: 'B', text: "Maintain the chain of custody" },
        { id: 'C', text: "Decrypt the data on the hard drive" },
        { id: 'D', text: "Implement a legal hold on the data" }
      ],
      correctOptionId: 'B',
      explanation: "Documenting handling of the evidence from collection through analysis is how you maintain chain of custody."
    },
    {
      id: 'ed6-q547',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A security analyst has been tasked with investigating a possible data breach. While reviewing the network logs, the analyst noticed an unusual increase in outbound traffic to an unfamiliar IP address during non-business hours. The traffic appears to be encrypted and is associated with a known server containing sensitive data. Which of the following is the MOST likely explanation for this behavior?",
      options: [
        { id: 'A', text: "The server is downloading patches" },
        { id: 'B', text: "An employee is accessing the server remotely" },
        { id: 'C', text: "A backup of the server is being performed" },
        { id: 'D', text: "Data exfiltration is occurring" }
      ],
      correctOptionId: 'D',
      explanation: "Encrypted outbound traffic from a sensitive server to an unknown external IP at odd hours strongly suggests data exfiltration."
    },
    {
      id: 'ed6-q548',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "XYZ Corporation recently faced a major power outage that affected their primary data center. During the incident, it was found that there was no clear guidance on the steps to maintain or quickly restore business operations. To address this, which of the following policies should XYZ Corporation prioritize implementing?",
      options: [
        { id: 'A', text: "Data Classification Policy" },
        { id: 'B', text: "Business Continuity Policy" },
        { id: 'C', text: "Acceptable Use Policy" },
        { id: 'D', text: "Network Segmentation Strategy" }
      ],
      correctOptionId: 'B',
      explanation: "A business continuity policy defines how to maintain and restore essential operations during and after disruptions."
    },
    {
      id: 'ed6-q549',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a suspected security incident involving unauthorized access to sensitive data, Jake, an IT administrator, immediately disconnected the affected server from the network. Later, a digital forensic expert criticized Jake’s action. Which of the following is the MOST likely reason for the criticism?",
      options: [
        { id: 'A', text: "Jake should have left the server connected to capture more evidence from the attacker" },
        { id: 'B', text: "Jake should have immediately informed the company's legal department" },
        { id: 'C', text: "Jake should have taken an image of the server's memory before disconnecting it" },
        { id: 'D', text: "Jake should have updated the server's software to prevent further unauthorized access" }
      ],
      correctOptionId: 'C',
      explanation: "Disconnecting the server without first capturing volatile memory caused loss of critical evidence in RAM."
    },
    {
      id: 'ed6-q550',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "ExamsDigest Corp, a technology company, recently conducted a security assessment to align with industry best practices. The company’s current security posture was compared to its desired future state, revealing discrepancies. Which of the following best describes the approach ExamsDigest Corp employed?",
      options: [
        { id: 'A', text: "Vulnerability Assessment" },
        { id: 'B', text: "Penetration Testing" },
        { id: 'C', text: "Gap Analysis" },
        { id: 'D', text: "Threat Modeling" }
      ],
      correctOptionId: 'C',
      explanation: "Gap analysis compares the current state to a desired future state to identify areas needing improvement."
    },
    {
      id: 'ed6-q551',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During an annual review, a company discovered that one of its critical systems had several unscheduled downtimes over the year. The CTO has recommended a move towards high availability architecture to address this. What is the PRIMARY concern when implementing high availability?",
      options: [
        { id: 'A', text: "Ensuring that there are no single points of failure" },
        { id: 'B', text: "Ensuring that the system is patched regularly" },
        { id: 'C', text: "Implementing multi-factor authentication" },
        { id: 'D', text: "Storing backups in multiple geographical locations" }
      ],
      correctOptionId: 'A',
      explanation: "High availability focuses on eliminating single points of failure with redundancy so services stay online."
    },
    {
      id: 'ed6-q552',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A government agency experienced a cyber incident where its communication platforms were breached. The intruders were not interested in extracting sensitive data or causing disruptions but were observed to be silently monitoring diplomatic communications for an extended period. What was the likely motivation of the attackers?",
      options: [
        { id: 'A', text: "To gain financial benefits from insider trading" },
        { id: 'B', text: "Espionage to understand and anticipate diplomatic moves" },
        { id: 'C', text: "Disgruntlement of an internal employee" },
        { id: 'D', text: "An attempt to expand their cybercriminal network" }
      ],
      correctOptionId: 'B',
      explanation: "Long-term, covert monitoring of diplomatic communications is classic espionage activity."
    },
    {
      id: 'ed6-q553',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech’s IT department is rolling out a new authentication protocol for remote workers. As part of the multifactor authentication process, employees are required to provide information that is memorized and cannot be physically taken from them. Which of the following represents this type of authentication factor?",
      options: [
        { id: 'A', text: "Fingerprint" },
        { id: 'B', text: "Smart card" },
        { id: 'C', text: "PIN" },
        { id: 'D', text: "USB security key" }
      ],
      correctOptionId: 'C',
      explanation: "A PIN is something you know and is a classic knowledge factor in MFA."
    },
    {
      id: 'ed6-q554',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An IT department in a large corporation spends several hours each day manually deploying patches and updates to thousands of workstations. Which of the following solutions would BEST enhance the efficiency of this process and save time for the IT team?",
      options: [
        { id: 'A', text: "Disable automatic updates and conduct monthly patching sessions" },
        { id: 'B', text: "Implement an automated patch management system" },
        { id: 'C', text: "Designate a dedicated team for patching that operates in shifts" },
        { id: 'D', text: "Educate users to install updates on their own" }
      ],
      correctOptionId: 'B',
      explanation: "Automation is the best way to manage patch deployment at large scale efficiently and consistently."
    },
    {
      id: 'ed6-q555',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large e-commerce platform is facing challenges during peak sale periods, where the influx of users causes slowdowns and occasional outages. Which of the following solutions would BEST improve scalability during these high-demand times?",
      options: [
        { id: 'A', text: "Implement a centralized logging system" },
        { id: 'B', text: "Employ auto-scaling cloud solutions" },
        { id: 'C', text: "Increase the frequency of data backups" },
        { id: 'D', text: "Mandate regular security training for employees" }
      ],
      correctOptionId: 'B',
      explanation: "Auto-scaling adds or removes resources automatically based on load, directly improving scalability."
    },
    {
      id: 'ed6-q556',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alex, a new intern at an IT company, wanted to access the internal company portal. Instead of typing “companyportal.com,” he accidentally typed “comapnyportal.com” and ended up on a site that looked identical but asked him to download a security certificate. This scenario best describes which type of attack?",
      options: [
        { id: 'A', text: "Spear Phishing" },
        { id: 'B', text: "Watering Hole Attack" },
        { id: 'C', text: "Typosquatting" },
        { id: 'D', text: "Man-in-the-Middle" }
      ],
      correctOptionId: 'C',
      explanation: "Typosquatting relies on common typing errors in URLs to lure users to malicious look-alike sites."
    },
    {
      id: 'ed6-q557',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A cloud infrastructure team frequently receives performance alerts from various resources in the environment. They want to ensure that relevant teams are immediately informed and can act upon any resource that crosses a performance threshold. What is the BEST way to accomplish this?",
      options: [
        { id: 'A', text: "Conduct a weekly meeting to review all performance alerts" },
        { id: 'B', text: "Automate ticket creation for any resource that crosses the performance threshold and assign it to the relevant team" },
        { id: 'C', text: "Send all performance alerts to the cloud infrastructure team's email for review" },
        { id: 'D', text: "Disable performance monitoring to reduce alert fatigue" }
      ],
      correctOptionId: 'B',
      explanation: "Automated ticketing ensures threshold breaches are immediately tracked and routed for action."
    },
    {
      id: 'ed6-q558',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large corporation is investigating a potential insider threat incident. A security analyst is tasked with examining the OS-specific security logs of a Windows server where sensitive documents are stored. Which of the following entries in the logs would MOST likely indicate unauthorized access attempts?",
      options: [
        { id: 'A', text: "Logs displaying Windows Update successful installations" },
        { id: 'B', text: "Entries showing a large number of failed login attempts followed by a successful login from a user outside of regular business hours" },
        { id: 'C', text: "Logs indicating scheduled disk defragmentation tasks" },
        { id: 'D', text: "Entries detailing successful printer connections and print jobs" }
      ],
      correctOptionId: 'B',
      explanation: "Many failed logins followed by success at odd hours is a classic sign of brute force or unauthorized access."
    },
    {
      id: 'ed6-q559',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company wants to ensure that security incidents are detected and addressed as quickly as possible by on-duty personnel. Which of the following operational security controls would be BEST to implement for this purpose?",
      options: [
        { id: 'A', text: "Deploying a Network Intrusion Prevention System (NIPS)" },
        { id: 'B', text: "Establishing a 24/7 Security Operations Center (SOC)" },
        { id: 'C', text: "Creating a company-wide security policy" },
        { id: 'D', text: "Implementing end-to-end data encryption" }
      ],
      correctOptionId: 'B',
      explanation: "A 24/7 SOC provides continuous monitoring and immediate response by on-duty staff."
    },
    {
      id: 'ed6-q560',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaCorp’s IT department is reviewing password policies and wants to adopt a strategy that enhances security. Which of the following password strategies would be the MOST secure?",
      options: [
        { id: 'A', text: "Passwords should be at least 6 characters long, with no other requirements" },
        { id: 'B', text: "Passwords should be at least 10 characters long and include both uppercase and lowercase letters" },
        { id: 'C', text: "Passwords should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters" },
        { id: 'D', text: "Passwords should be at least 4 characters long and include a mix of uppercase and lowercase letters" }
      ],
      correctOptionId: 'C',
      explanation: "Length plus complexity (upper, lower, digits, special) makes passwords far harder to brute force."
    },
    {
      id: 'ed6-q561',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureTech Corp, a company dealing with sensitive client data, is redesigning its main office entrance to enhance security. They want to ensure that only one person gains access at a time, even if multiple people try to enter using a single authorized access badge. Which of the following would best serve this purpose?",
      options: [
        { id: 'A', text: "CCTV Cameras" },
        { id: 'B', text: "Mantrap" },
        { id: 'C', text: "Biometric Scanners" },
        { id: 'D', text: "Motion Detectors" }
      ],
      correctOptionId: 'B',
      explanation: "A mantrap (access vestibule) only admits one person at a time, preventing tailgating."
    },
    {
      id: 'ed6-q562',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a recent incident of vandalism, a corporate building is considering implementing security controls that would dissuade potential perpetrators. Which of the following would serve BEST as a deterrent control?",
      options: [
        { id: 'A', text: "Encrypting all stored data" },
        { id: 'B', text: "Installing biometric access controls on all entrances" },
        { id: 'C', text: "Implementing regular data backups" },
        { id: 'D', text: "Placing visible security signage indicating 24/7 surveillance" }
      ],
      correctOptionId: 'D',
      explanation: "Visible signs about surveillance and security measures discourage would-be vandals from acting."
    },
    {
      id: 'ed6-q563',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After deploying a new version of your company’s internal application, several users reported issues with accessing specific features. To investigate the root cause, you decided to review the application logs. What entry in the logs would most directly indicate a software bug or error related to the recent deployment?",
      options: [
        { id: 'A', text: "Entries showing successful user authentication timestamps" },
        { id: 'B', text: "Entries detailing the number of transactions completed by the application" },
        { id: 'C', text: "Entries with \"ERROR\" or \"EXCEPTION\" related to the specific feature being accessed" },
        { id: 'D', text: "Entries showing routine data backup operations" }
      ],
      correctOptionId: 'C',
      explanation: "Error or exception log entries tied to the failing feature point directly to a software bug."
    },
    {
      id: 'ed6-q564',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "OmegaTech recently introduced an additional layer of security for its remote server access. Along with their usual passwords, employees now need to use a physical device they have with them to gain access. Which of the following represents this “something you have” factor in multifactor authentication?",
      options: [
        { id: 'A', text: "Password hint" },
        { id: 'B', text: "Facial recognition" },
        { id: 'C', text: "Hardware token" },
        { id: 'D', text: "Voice recognition" }
      ],
      correctOptionId: 'C',
      explanation: "A hardware token is a physical object in the user’s possession, which is a classic 'something you have' factor."
    },
    {
      id: 'ed6-q565',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A system administrator is setting up an authentication system for a new web application. Which of the following security controls falls under the technical category and ensures that users prove their identity before gaining access?",
      options: [
        { id: 'A', text: "Implementing a security awareness training program" },
        { id: 'B', text: "Conducting a background check for new employees" },
        { id: 'C', text: "Using multi-factor authentication" },
        { id: 'D', text: "Establishing a clean desk policy" }
      ],
      correctOptionId: 'C',
      explanation: "Multi-factor authentication is a technical control that enforces stronger identity verification."
    },
    {
      id: 'ed6-q566',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "BetaTech is implementing a new authentication mechanism for its data center technicians. Instead of using key cards, technicians will now have to look into a device that maps a specific pattern to authenticate their identity. Which of the following is BetaTech likely implementing?",
      options: [
        { id: 'A', text: "Password system" },
        { id: 'B', text: "Retina scanning" },
        { id: 'C', text: "Hardware token" },
        { id: 'D', text: "Knowledge-based questions" }
      ],
      correctOptionId: 'B',
      explanation: "Retina scans analyze patterns in the retina as a biometric 'something you are' factor."
    },
    {
      id: 'ed6-q567',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DataCenter Inc. is located in a region prone to protests and vandalism. They wish to enhance their perimeter security to deter potential intruders and make it visibly clear that unauthorized access is restricted. Which of the following physical security measures would be the most effective first line of defense for the company?",
      options: [
        { id: 'A', text: "Sliding Doors" },
        { id: 'B', text: "Security Cameras" },
        { id: 'C', text: "High-security Fencing" },
        { id: 'D', text: "Proximity Card Readers" }
      ],
      correctOptionId: 'C',
      explanation: "High-security fencing clearly marks the boundary and serves as a strong physical and visual deterrent."
    },
    {
      id: 'ed6-q568',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Alice wants to access a restricted online portal. The portal asks her to enter a unique username and a secret passphrase only she should know. This process helps the system ensure that Alice is who she claims to be. What security concept is the portal employing?",
      options: [
        { id: 'A', text: "Authorization" },
        { id: 'B', text: "Accounting" },
        { id: 'C', text: "Multifactor authentication" },
        { id: 'D', text: "Authentication" }
      ],
      correctOptionId: 'D',
      explanation: "Authentication verifies identity; the username and passphrase are used to confirm Alice is the user she claims to be."
    },
    {
      id: 'ed6-q569',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Employees at a renowned software development firm frequently visit an industry-related forum to discuss the latest trends and technologies. Over the past month, several employees reported malware infections shortly after accessing the forum. An investigation suggests the forum was compromised to target the company’s developers specifically. Which type of attack most accurately describes this scenario?",
      options: [
        { id: 'A', text: "Spear Phishing" },
        { id: 'B', text: "Watering Hole" },
        { id: 'C', text: "Drive-by Download" },
        { id: 'D', text: "Whaling" }
      ],
      correctOptionId: 'B',
      explanation: "In a watering hole attack, attackers compromise a site the victims frequently use to infect them."
    },
    {
      id: 'ed6-q570',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A cybersecurity analyst at XYZ Corp is looking to deploy a system that appears to be vulnerable and enticing to attackers. The main goal is to study the tactics, techniques, and procedures (TTPs) of potential adversaries, without them realizing that they’re interacting with a decoy. Which of the following would BEST meet this requirement?",
      options: [
        { id: 'A', text: "Intrusion Detection System (IDS)" },
        { id: 'B', text: "Firewall" },
        { id: 'C', text: "Honeypot" },
        { id: 'D', text: "VPN Concentrator" }
      ],
      correctOptionId: 'C',
      explanation: "A honeypot is a decoy system designed to lure attackers and record their activity for analysis."
    },
    {
      id: 'ed6-q571',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large financial organization wants to ensure that all employees understand the importance of cybersecurity and the role they play in safeguarding company assets. Which of the following managerial security controls will be MOST effective in achieving this?",
      options: [
        { id: 'A', text: "Installing a firewall at the network perimeter" },
        { id: 'B', text: "Regular security awareness training for employees" },
        { id: 'C', text: "Deploying an Intrusion Detection System (IDS)" },
        { id: 'D', text: "Encrypting all company data" }
      ],
      correctOptionId: 'B',
      explanation: "Security awareness training is a managerial control that educates employees on their security responsibilities."
    },
    {
      id: 'ed6-q572',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "You are an IT security professional for a large corporation. After receiving reports about some users being unable to access external websites, you decided to review the firewall logs. Which of the following would be a PRIMARY indicator in the logs that a rule is blocking outbound traffic?",
      options: [
        { id: 'A', text: "Multiple entries of the same external IP address being ALLOWED" },
        { id: 'B', text: "Timestamps showing large gaps between entries" },
        { id: 'C', text: "Entries showing DROP/REJECT action for outbound traffic to port 80 and 443" },
        { id: 'D', text: "Logs showing inbound traffic from multiple unknown external IP addresses" }
      ],
      correctOptionId: 'C',
      explanation: "DROP/REJECT actions on HTTP/HTTPS ports clearly show the firewall is blocking web traffic."
    },
    {
      id: 'ed6-q573',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A digital forensics investigator has just concluded an investigation regarding a potential insider threat. Before presenting the findings to the organization’s board, which of the following should the investigator ensure about the forensic report?",
      options: [
        { id: 'A', text: "The report includes technical jargon to showcase the depth of the investigation" },
        { id: 'B', text: "The report emphasizes the investigator's credentials and experience" },
        { id: 'C', text: "The report provides a clear, concise summary of findings without unnecessary technical details" },
        { id: 'D', text: "The report contains detailed logs of every action taken by the investigator" }
      ],
      correctOptionId: 'C',
      explanation: "Board-level reports should emphasize clear, concise findings, not low-level technical details."
    },
    {
      id: 'ed6-q574',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "The incident response team at XYZ Corp received a report that an attacker successfully exploited a vulnerable web application in their environment. To identify which server might have been compromised, the team decided to cross-reference recent vulnerability scan results. Which of the following information from the vulnerability scan would be MOST helpful in pinpointing the potentially compromised server?",
      options: [
        { id: 'A', text: "The timestamp of when the scan was conducted" },
        { id: 'B', text: "The software version of the scanning tool" },
        { id: 'C', text: "List of hosts with the specific vulnerability related to the exploit" },
        { id: 'D', text: "The total number of vulnerabilities identified during the scan" }
      ],
      correctOptionId: 'C',
      explanation: "The host list for the relevant vulnerability reveals which servers were exposed to that exploit."
    },
    {
      id: 'ed6-q575',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "During a regular review of system logs, Alex, a security analyst, noticed an unusual pattern of network traffic originating from a single IP address. Instead of waiting for an automated system to flag this as suspicious, he decides to manually dive deeper into the data to identify any potential threats. What is Alex engaging in?",
      options: [
        { id: 'A', text: "Incident management" },
        { id: 'B', text: "Threat modeling" },
        { id: 'C', text: "Threat hunting" },
        { id: 'D', text: "Security monitoring" }
      ],
      correctOptionId: 'C',
      explanation: "Threat hunting is a proactive, analyst-driven search for hidden threats based on hypotheses."
    },
    {
      id: 'ed6-q576',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "OmegaTech’s security team noticed an increase in account compromises. An internal investigation revealed that many employees have been using the same passwords across different company systems and applications. Which password best practice can OmegaTech enforce to mitigate this issue?",
      options: [
        { id: 'A', text: "Encouraging users to change their passwords every month" },
        { id: 'B', text: "Implementing an account lockout policy after three failed login attempts" },
        { id: 'C', text: "Prohibiting password reuse for at least the last five password changes" },
        { id: 'D', text: "Mandating that passwords contain only alphabetical characters for simplicity" }
      ],
      correctOptionId: 'C',
      explanation: "Preventing reuse of recent passwords discourages users from cycling the same passwords across systems."
    },
    {
      id: 'ed6-q577',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A medium-sized company suffered a data breach. Investigations revealed that an attacker from a rival firm had exploited a misconfigured firewall to gain unauthorized access to the company’s database. Based on the attributes of the actor, how would this threat actor be best described?",
      options: [
        { id: 'A', text: "Internal actor leveraging physical access" },
        { id: 'B', text: "Internal actor abusing privileges" },
        { id: 'C', text: "External actor using social engineering" },
        { id: 'D', text: "External actor exploiting technical vulnerabilities" }
      ],
      correctOptionId: 'D',
      explanation: "The attacker is from a rival firm (external) and exploited a technical misconfiguration (firewall)."
    },
    {
      id: 'ed6-q578',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "In a microservices architecture, each service should be designed with a specific principle to ensure it performs a specific task and interacts with other services through well-defined interfaces. What principle is this referring to?",
      options: [
        { id: 'A', text: "Principle of Least Privilege" },
        { id: 'B', text: "Single Responsibility Principle" },
        { id: 'C', text: "Open-Closed Principle" },
        { id: 'D', text: "Zero Trust Model" }
      ],
      correctOptionId: 'B',
      explanation: "Single Responsibility Principle states each component should have one well-defined responsibility."
    },
    {
      id: 'ed6-q579',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company’s online retail website faces DDoS attacks that cause significant downtime. Their current setup relies on manual verification of traffic spikes before mitigation efforts are deployed. What change could BEST enhance the company’s reaction time to such attacks in the future?",
      options: [
        { id: 'A', text: "Educate users to report slow website loading times" },
        { id: 'B', text: "Manually back up the website data every hour" },
        { id: 'C', text: "Deploy a web application firewall with automated DDoS mitigation features" },
        { id: 'D', text: "Increase the website's bandwidth to handle traffic spikes" }
      ],
      correctOptionId: 'C',
      explanation: "A WAF with automated DDoS mitigation can recognize and block attack traffic in real time."
    },
    {
      id: 'ed6-q580',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A large enterprise is deploying a new automation system that will allow various teams, including development, operations, and QA, to provision and configure their own environments. The security team is concerned about potential misconfigurations or excessive permissions being granted. Which solution can be used within the automation to ensure security standards are met without limiting the agility of the teams?",
      options: [
        { id: 'A', text: "Implementing a zero-trust model for all teams" },
        { id: 'B', text: "Manually reviewing all requests before provisioning" },
        { id: 'C', text: "Setting up guard rails within the automation scripts to define boundaries and prevent misconfigurations" },
        { id: 'D', text: "Disabling the automation system for all teams except the security team" }
      ],
      correctOptionId: 'C',
      explanation: "Guard rails enforce security constraints automatically while still allowing teams to self-service within safe bounds."
    },
    {
      id: 'ed6-q581',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "SecureNet, a cybersecurity firm, is implementing an Intrusion Detection System (IDS) for its enterprise client. Where should the IDS be placed for optimal detection of malicious activities?",
      options: [
        { id: 'A', text: "Before the perimeter firewall to capture all inbound traffic" },
        { id: 'B', text: "Between the perimeter firewall and the internal network to monitor the filtered traffic" },
        { id: 'C', text: "Inside the DMZ to monitor only external service requests" },
        { id: 'D', text: "Adjacent to each workstation for personalized security" }
      ],
      correctOptionId: 'B',
      explanation: "Placing the IDS behind the firewall lets it analyze traffic the firewall has already filtered, reducing noise and focusing on likely threats."
    },
    {
      id: 'ed6-q582',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "AlphaTech wants to ensure that its remote employees follow best security practices when working from home. The security team has been tasked with drafting a set of guidelines for remote work. What should be the primary focus of these guidelines?",
      options: [
        { id: 'A', text: "Outlining punitive measures for non-compliance" },
        { id: 'B', text: "Stating the company's legal position on remote work" },
        { id: 'C', text: "Recommending security measures for home networks and devices" },
        { id: 'D', text: "Dictating the exact software and hardware specifications for remote workers" }
      ],
      correctOptionId: 'C',
      explanation: "Guidelines should provide practical security recommendations to help employees protect home networks and devices."
    },
    {
      id: 'ed6-q583',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "The incident response team at XYZ Corp received a report that an attacker successfully exploited a vulnerable web application in their environment. To identify which server might have been compromised, the team decided to cross-reference recent vulnerability scan results. Which of the following information from the vulnerability scan would be MOST helpful in pinpointing the potentially compromised server?",
      options: [
        { id: 'A', text: "The timestamp of when the scan was conducted" },
        { id: 'B', text: "The software version of the scanning tool" },
        { id: 'C', text: "List of hosts with the specific vulnerability related to the exploit" },
        { id: 'D', text: "The total number of vulnerabilities identified during the scan" }
      ],
      correctOptionId: 'C',
      explanation: "The hosts flagged with the vulnerability that matches the exploit are your most likely compromised servers."
    },
    {
      id: 'ed6-q584',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "While conducting a routine security review, Jake, a security specialist, discovers an unexpected piece of data placed in the organization’s financial system. Upon asking, he learns that this piece of data is intentionally placed and monitored to see if any unauthorized user or system interacts with it. What is this deceptive piece of data known as?",
      options: [
        { id: 'A', text: "Honeystring" },
        { id: 'B', text: "Honeytoken" },
        { id: 'C', text: "Canary token" },
        { id: 'D', text: "Security marker" }
      ],
      correctOptionId: 'B',
      explanation: "A honeytoken is a bogus data item planted to detect unauthorized access when it is touched or used."
    },
    {
      id: 'ed6-q585',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DeltaCorp has a password policy in place which mandates users to change their passwords every 30 days. However, some users complain that this results in them choosing simpler passwords or writing them down to remember them. How can DeltaCorp maintain security while addressing these concerns?",
      options: [
        { id: 'A', text: "Reduce the password change frequency but introduce more complexity requirements" },
        { id: 'B', text: "Eliminate password changes and rely solely on two-factor authentication" },
        { id: 'C', text: "Ask users to change passwords every week to improve security" },
        { id: 'D', text: "Allow users to reuse any of their last three passwords to ease the transition" }
      ],
      correctOptionId: 'A',
      explanation: "Less frequent changes combined with strong complexity reduce user burden while maintaining security."
    },
    {
      id: 'ed6-q586',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A software company recently discovered a vulnerability in its popular application, which allowed unauthorized access to users’ data. Before the company could release a patch, a group of hackers exploited the vulnerability but only to notify the users about it. They did not misuse any data. What is the most probable motivation behind this group’s action?",
      options: [
        { id: 'A', text: "Financial gain by selling the data" },
        { id: 'B', text: "Political beliefs against the software company's operations" },
        { id: 'C', text: "Ethical concerns about user privacy and security" },
        { id: 'D', text: "Desire to disrupt the software company's services" }
      ],
      correctOptionId: 'C',
      explanation: "Their behavior matches 'ethical hacker' motives—exploiting the bug only to alert users without abusing the data."
    },
    {
      id: 'ed6-q587',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "In a routine security assessment, Claire found that a newly deployed database server within her organization is still using its default login credentials. Which of the following is the PRIMARY security risk associated with this finding?",
      options: [
        { id: 'A', text: "The database will not function optimally" },
        { id: 'B', text: "The server will need frequent patches" },
        { id: 'C', text: "Unauthorized individuals may easily gain access" },
        { id: 'D', text: "The server will consume more bandwidth" }
      ],
      correctOptionId: 'C',
      explanation: "Default credentials are widely known and easily guessed, making unauthorized access trivial."
    },
    {
      id: 'ed6-q588',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "DeltaTech, a progressive tech firm, is aiming to improve its security posture by eliminating the vulnerabilities associated with password use. They are considering deploying a passwordless authentication system. Which of the following represents the PRIMARY advantage of such a system?",
      options: [
        { id: 'A', text: "It allows users to choose any password complexity" },
        { id: 'B', text: "It eliminates the need for remembering passwords" },
        { id: 'C', text: "It guarantees protection against all cyber threats" },
        { id: 'D', text: "It ensures compatibility with all legacy systems" }
      ],
      correctOptionId: 'B',
      explanation: "Passwordless auth avoids password-related weaknesses by removing user memorization and reuse from the equation."
    },
    {
      id: 'ed6-q589',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution recently discovered that a large number of confidential customer records were being accessed and copied during off-business hours. Upon investigation, it was found that the access came from an authenticated user within the company, who had recently been passed over for a promotion. Which type of threat actor is MOST likely responsible for this security incident?",
      options: [
        { id: 'A', text: "Hacktivist" },
        { id: 'B', text: "Insider threat" },
        { id: 'C', text: "Nation-state" },
        { id: 'D', text: "Organized crime syndicate" }
      ],
      correctOptionId: 'B',
      explanation: "An authenticated employee with a personal grievance copying data fits an insider threat profile."
    },
    {
      id: 'ed6-q590',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A financial institution wants to ensure that customers are aware of the bank’s policies on information sharing and how their personal data is used. Which of the following security controls would BEST communicate this to customers?",
      options: [
        { id: 'A', text: "Implementing end-to-end encryption for online transactions" },
        { id: 'B', text: "Publishing a privacy policy on the bank's website" },
        { id: 'C', text: "Conducting annual cybersecurity awareness training for employees" },
        { id: 'D', text: "Using multi-factor authentication for online banking" }
      ],
      correctOptionId: 'B',
      explanation: "A published privacy policy explicitly informs customers how their data is used and shared."
    },
    {
      id: 'ed6-q591',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "OmegaHealth, a large healthcare provider, is integrating automation into its operations. When a new healthcare worker is hired, they require access to multiple systems. Why would OmegaHealth automate the user provisioning process across these systems?",
      options: [
        { id: 'A', text: "To enforce a uniform password for all healthcare workers." },
        { id: 'B', text: "To save time by ensuring consistent and simultaneous account creation across all necessary platforms" },
        { id: 'C', text: "To prevent the new hires from accessing any system until their probation period ends" },
        { id: 'D', text: "To reduce the software licenses needed by delaying account activation" }
      ],
      correctOptionId: 'B',
      explanation: "Automated provisioning speeds up onboarding and reduces errors by creating accounts consistently across systems."
    },
    {
      id: 'ed6-q592',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After detecting an unauthorized intrusion into their network, a financial institution wants to implement a control that will restore compromised systems to a known good state. Which of the following would be the MOST appropriate corrective control?",
      options: [
        { id: 'A', text: "Implementing Intrusion Detection Systems (IDS) across the network" },
        { id: 'B', text: "Frequently updating firewall rules" },
        { id: 'C', text: "Restoring systems from verified backups" },
        { id: 'D', text: "Enabling multi-factor authentication for users" }
      ],
      correctOptionId: 'C',
      explanation: "Restoring from verified backups returns systems to a known good state, which is the essence of a corrective control."
    },
    {
      id: 'ed6-q593',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Maria receives a text message on her phone from an unknown number, stating that she has won a gift card worth $500 from a popular online store. The message includes a link asking her to click on it to claim her prize. Maria is unsure about the authenticity of the message. Which of the following is the BEST course of action for Maria?",
      options: [
        { id: 'A', text: "Click the link to check if the website looks genuine" },
        { id: 'B', text: "Forward the message to her friends to verify if they received a similar message" },
        { id: 'C', text: "Delete the message without clicking on any links" },
        { id: 'D', text: "Respond to the sender asking for more details about the offer" }
      ],
      correctOptionId: 'C',
      explanation: "This is likely smishing; the safest action is to delete the message and avoid clicking any links."
    },
    {
      id: 'ed6-q594',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "In preparation for a potential lawsuit, Meg, a cybersecurity analyst, has been asked to ensure that specific digital evidence remains intact and is not altered or deleted. What measure should Meg implement to ensure this requirement?",
      options: [
        { id: 'A', text: "Encrypt the evidence" },
        { id: 'B', text: "Initiate a legal hold" },
        { id: 'C', text: "Perform a full disk wipe" },
        { id: 'D', text: "Conduct a vulnerability assessment" }
      ],
      correctOptionId: 'B',
      explanation: "A legal hold formally preserves potentially relevant data and prevents its alteration or deletion."
    },
    {
      id: 'ed6-q595',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "In an IaaS (Infrastructure as a Service) model, which of the following tasks is typically the responsibility of the cloud customer in a standard Cloud Responsibility Matrix?",
      options: [
        { id: 'A', text: "Physical security of data centers" },
        { id: 'B', text: "Patching of host operating systems" },
        { id: 'C', text: "Network infrastructure maintenance" },
        { id: 'D', text: "Patching of guest operating systems" }
      ],
      correctOptionId: 'D',
      explanation: "In IaaS, the customer manages the OS and applications on their VMs, including patching guest operating systems."
    },
    {
      id: 'ed6-q596',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A company detected a DDoS attack that lasted for several weeks. The attackers used a botnet of millions of infected devices and frequently rotated attack vectors to bypass mitigation efforts. This prolonged and resource-intensive attack suggests which kind of threat actor’s resources and funding?",
      options: [
        { id: 'A', text: "Amateur hacker with minimal resources" },
        { id: 'B', text: "Cybersecurity researcher testing vulnerabilities" },
        { id: 'C', text: "Nation-state actor with strategic interests" },
        { id: 'D', text: "Organized crime syndicate with substantial funding" }
      ],
      correctOptionId: 'D',
      explanation: "A massive, sustained DDoS campaign suggests well-funded actors like organized crime groups."
    },
    {
      id: 'ed6-q597',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "An art gallery wants to deploy a security solution to detect movement in an open courtyard that features several sculptures. This space has varying temperature conditions, which might cause false alarms in some motion detection technologies. Which type of sensor would be MOST appropriate to ensure consistent motion detection in such conditions?",
      options: [
        { id: 'A', text: "Thermal imaging sensors" },
        { id: 'B', text: "Pressure-sensitive mats" },
        { id: 'C', text: "Ultrasonic detectors" },
        { id: 'D', text: "Microwave motion detectors" }
      ],
      correctOptionId: 'D',
      explanation: "Microwave motion detectors are less affected by temperature changes and work well in open spaces."
    },
    {
      id: 'ed6-q598',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "TechBlitz Inc. recently underwent an IT audit, and one of the suggestions was to reduce the attack surface. Which of the following measures would be MOST effective in accomplishing this?",
      options: [
        { id: 'A', text: "Increasing the password length requirement for all users" },
        { id: 'B', text: "Implementing regular vulnerability assessments" },
        { id: 'C', text: "Deactivating unused services and ports on servers" },
        { id: 'D', text: "Implementing a strict BYOD (Bring Your Own Device) policy" }
      ],
      correctOptionId: 'C',
      explanation: "Turning off unused services and ports directly reduces the number of potential entry points for attackers."
    },
    {
      id: 'ed6-q599',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "A user receives an SMS claiming to be from her bank, alerting her of unauthorized activity on her account. The message instructs the user to immediately click on a provided link and verify her account details. The user hasn’t noticed any irregularities with her bank account. Which type of attack is this SMS most likely part of?",
      options: [
        { id: 'A', text: "Smishing" },
        { id: 'B', text: "Vishing" },
        { id: 'C', text: "Bluejacking" },
        { id: 'D', text: "Bluesnarfing" }
      ],
      correctOptionId: 'A',
      explanation: "Smishing is phishing done via SMS messages."
    },
    {
      id: 'ed6-q600',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "After a recent security breach, CyberCorp is reviewing its software vendors for their responsiveness to vulnerabilities. Which of the following metrics would BEST assist CyberCorp in determining the timeliness and efficiency of security patches from a vendor?",
      options: [
        { id: 'A', text: "The frequency of software updates released by the vendor" },
        { id: 'B', text: "The vendor's quarterly financial reports" },
        { id: 'C', text: "Time between vulnerability disclosure and patch release by the vendor" },
        { id: 'D', text: "The number of features added by the vendor in the last software update" }
      ],
      correctOptionId: 'C',
      explanation: "The patch release time after disclosure directly measures how quickly a vendor responds to vulnerabilities."
    }
  ]
];
