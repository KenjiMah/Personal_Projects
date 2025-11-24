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
  [
    {
      id: 'ed2-q1',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 1 for Exams Digest Exam 2. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'C',
      explanation: "Example explanation for question 1."
    },
    {
      id: 'ed2-q2',
      domain: SecurityDomain.THREATS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 2 for Exams Digest Exam 2. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'D',
      explanation: "Example explanation for question 2."
    }
  ],

  // Exam 3
  [
    {
      id: 'ed3-q1',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 1 for Exams Digest Exam 3. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'A',
      explanation: "Example explanation for question 1."
    },
    {
      id: 'ed3-q2',
      domain: SecurityDomain.ARCHITECTURE,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 2 for Exams Digest Exam 3. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'B',
      explanation: "Example explanation for question 2."
    }
  ],

  // Exam 4
  [
    {
      id: 'ed4-q1',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 1 for Exams Digest Exam 4. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'C',
      explanation: "Example explanation for question 1."
    },
    {
      id: 'ed4-q2',
      domain: SecurityDomain.OPERATIONS,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 2 for Exams Digest Exam 4. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'D',
      explanation: "Example explanation for question 2."
    }
  ],

  // Exam 5
  [
    {
      id: 'ed5-q1',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 1 for Exams Digest Exam 5. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'A',
      explanation: "Example explanation for question 1."
    },
    {
      id: 'ed5-q2',
      domain: SecurityDomain.MANAGEMENT,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 2 for Exams Digest Exam 5. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'B',
      explanation: "Example explanation for question 2."
    }
  ],

  // Exam 6
  [
    {
      id: 'ed6-q1',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 1 for Exams Digest Exam 6. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'C',
      explanation: "Example explanation for question 1."
    },
    {
      id: 'ed6-q2',
      domain: SecurityDomain.GENERAL,
      type: QuestionType.MULTIPLE_CHOICE,
      text: "Example question 2 for Exams Digest Exam 6. This will be replaced with actual content.",
      options: [
        { id: 'A', text: "Option A" },
        { id: 'B', text: "Option B" },
        { id: 'C', text: "Option C" },
        { id: 'D', text: "Option D" }
      ],
      correctOptionId: 'D',
      explanation: "Example explanation for question 2."
    }
  ]
];

