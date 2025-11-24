import { Question, QuestionType } from './types';


export const STUDY_GUIDE_QUESTIONS: Question[] = [
    {
      "id": "q1",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A client disputes having signed a digital contract. The service provider needs to prove that the signature was indeed from the client and hasn't been tampered with. Which of the following security concepts is the service provider relying on?",
      "options": [
        {
          "id": "A",
          "text": "Authentication"
        },
        {
          "id": "B",
          "text": "Confidentiality"
        },
        {
          "id": "C",
          "text": "Non-repudiation"
        },
        {
          "id": "D",
          "text": "Access Control"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Non-repudiation ensures that a party in a dispute cannot deny the authenticity of their actions. In this scenario, it would provide evidence that the client did sign the contract and that it hasn't been tampered with post-signature. [cite: 421]"
    },
    {
      "id": "q2",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Carlos, an IT consultant, advises a startup company on cybersecurity best practices. The company plans to launch several microsites under various subdomains. They want a solution that is cost-effective but also ensures that the sites are validated by a third-party. What type of certificate should Carlos recommend?",
      "options": [
        {
          "id": "A",
          "text": "A separate self-signed certificate for each microsite"
        },
        {
          "id": "B",
          "text": "An individual third-party certificate for each subdomain"
        },
        {
          "id": "C",
          "text": "A third-party wildcard certificate"
        },
        {
          "id": "D",
          "text": "An EV certificate issued by an internal CA"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A third-party wildcard certificate allows an organization to secure multiple subdomains with a single certificate. It's cost-effective as the company doesn't need to purchase and manage separate certificates for each subdomain, and because it's issued by a third-party Certificate Authority, it provides validation for external users. [cite: 426]"
    },
    {
      "id": "q3",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company wants to ensure that security incidents are detected and addressed as quickly as possible by on-duty personnel. Which of the following operational security controls would be BEST to implement for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Deploying a Network Intrusion Prevention System (NIPS)"
        },
        {
          "id": "B",
          "text": "Establishing a 24/7 Security Operations Center (SOC)"
        },
        {
          "id": "C",
          "text": "Creating a company-wide security policy"
        },
        {
          "id": "D",
          "text": "Implementing end-to-end data encryption"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Establishing a 24/7 Security Operations Center (SOC) is an operational control that provides real-time monitoring, detection, and response to security incidents. With a 24/7 SOC, the company ensures that there is always personnel available to handle security incidents as they occur. [cite: 430]"
    },
    {
      "id": "q4",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine check, the IT department discovered that several employees had left their computers on and unattended during lunch break. Which operational security control can help mitigate the risk associated with this behavior?",
      "options": [
        {
          "id": "A",
          "text": "Implementing biometric authentication"
        },
        {
          "id": "B",
          "text": "Enforcing a strict password policy"
        },
        {
          "id": "C",
          "text": "Deploying an automatic screen lock after inactivity"
        },
        {
          "id": "D",
          "text": "Implementing a secure coding practice"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Deploying an automatic screen lock after a certain period of inactivity is an operational control. It ensures that unattended devices are protected from unauthorized access, thereby mitigating risks associated with employees leaving their computers on and unattended. [cite: 435]"
    },
    {
      "id": "q5",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An art gallery wants to deploy a security solution to detect movement in an open courtyard that features several sculptures. This space has varying temperature conditions, which might cause false alarms in some motion detection technologies. Which type of sensor would be MOST appropriate to ensure consistent motion detection in such conditions?",
      "options": [
        {
          "id": "A",
          "text": "Thermal imaging sensors"
        },
        {
          "id": "B",
          "text": "Pressure-sensitive mats"
        },
        {
          "id": "C",
          "text": "Ultrasonic detectors"
        },
        {
          "id": "D",
          "text": "Microwave motion detectors"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Microwave motion detectors are suitable for open areas and are less affected by temperature changes. They emit microwave beams to create an invisible detection zone and can consistently detect motion when an object interrupts this zone, irrespective of the ambient temperature. [cite: 440]"
    },
    {
      "id": "q6",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company's primary security control for accessing secure server rooms is a biometric fingerprint scanner. However, the scanner occasionally malfunctions in high humidity. The security team is considering an alternative solution to grant access when the primary method fails. Which of the following would be the MOST appropriate compensating control?",
      "options": [
        {
          "id": "A",
          "text": "Implementing a security token-based authentication system"
        },
        {
          "id": "B",
          "text": "Employing security guards at the main entrance"
        },
        {
          "id": "C",
          "text": "Installing security cameras inside the server room"
        },
        {
          "id": "D",
          "text": "Conducting regular server room audits"
        }
      ],
      "correctOptionId": "A",
      "explanation": "A security token-based authentication system would act as an alternative method for verifying the identity of individuals when the primary control (biometric fingerprint scanner) fails. This serves as a direct compensating control for access. [cite: 445, 446]"
    },
    {
      "id": "q7",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution wants to ensure that customers are aware of the bank's policies on information sharing and how their personal data is used. Which of the following security controls would BEST communicate this to customers?",
      "options": [
        {
          "id": "A",
          "text": "Implementing end-to-end encryption for online transactions"
        },
        {
          "id": "B",
          "text": "Publishing a privacy policy on the bank's website"
        },
        {
          "id": "C",
          "text": "Conducting annual cybersecurity awareness training for employees"
        },
        {
          "id": "D",
          "text": "Using multi-factor authentication for online banking"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A privacy policy serves as a directive control as it informs customers about the bank's practices regarding the collection, use, and sharing of their personal data. By reading the policy, customers understand their rights and the bank's responsibilities. [cite: 449, 450]"
    },
    {
      "id": "q8",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large financial organization wants to ensure that all employees understand the importance of cybersecurity and the role they play in safeguarding company assets. Which of the following managerial security controls will be MOST effective in achieving this?",
      "options": [
        {
          "id": "A",
          "text": "Installing a firewall at the network perimeter"
        },
        {
          "id": "B",
          "text": "Regular security awareness training for employees"
        },
        {
          "id": "C",
          "text": "Deploying an Intrusion Detection System (IDS)"
        },
        {
          "id": "D",
          "text": "Encrypting all company data"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Regular security awareness training for employees is a managerial control aiming to educate employees about security risks and the necessary precautions they need to take. By regularly training employees, the organization ensures that all staff are aware of potential threats and their roles in cybersecurity. [cite: 455]"
    },
    {
      "id": "q9",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company has faced multiple instances of unauthorized individuals gaining access to their office premises. Which of the following preventive security controls would be MOST effective in preventing unauthorized physical access?",
      "options": [
        {
          "id": "A",
          "text": "Implementing a log monitoring solution for network traffic"
        },
        {
          "id": "B",
          "text": "Installing video surveillance cameras at all entry and exit points"
        },
        {
          "id": "C",
          "text": "Conducting regular security awareness training for employees"
        },
        {
          "id": "D",
          "text": "Implementing a multi-factor authentication system for network access."
        }
      ],
      "correctOptionId": "B",
      "explanation": "Installing video surveillance cameras at all entry and exit points acts as a preventive control by deterring unauthorized individuals from attempting to gain access, given the increased risk of detection and recording. [cite: 458]"
    },
    {
      "id": "q10",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechVault, a company specializing in secure storage solutions, recently had an unauthorized intrusion where a burglar managed to bypass their motion sensors. In a bid to prevent future breaches, they are considering deploying a system that can detect weight changes in a restricted floor area to alert any unauthorized access. Which of the following would be BEST for this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Ultrasonic motion detectors"
        },
        {
          "id": "B",
          "text": "Pressure-sensitive floor mats"
        },
        {
          "id": "C",
          "text": "CCTV cameras with facial recognition"
        },
        {
          "id": "D",
          "text": "Glass break sensors"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Pressure-sensitive floor mats are designed to detect weight changes or pressure when stepped on. This makes them an effective solution for monitoring restricted areas and alerting unauthorized access based on weight detection. [cite: 464]"
    },
    {
      "id": "q11",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A system administrator is setting up an authentication system for a new web application. Which of the following security controls falls under the technical category and ensures that users prove their identity before gaining access?",
      "options": [
        {
          "id": "A",
          "text": "Implementing a security awareness training program"
        },
        {
          "id": "B",
          "text": "Conducting a background check for new employees"
        },
        {
          "id": "C",
          "text": "Using multi-factor authentication"
        },
        {
          "id": "D",
          "text": "Establishing a clean desk policy"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Multi-factor authentication is a technical control that requires users to present two or more pieces of evidence (factors) before gaining access. It provides an additional layer of security to ensure that users are who they say they are. [cite: 468]"
    },
    {
      "id": "q12",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce company has experienced a Distributed Denial of Service (DDoS) attack, which caused its website to become inaccessible for several hours. To mitigate the impact of such attacks in the future, which of the following would be the BEST corrective control to implement?",
      "options": [
        {
          "id": "A",
          "text": "Displaying a seal for third-party security certifications on the website"
        },
        {
          "id": "B",
          "text": "Establishing a Web Application Firewall (WAF) with DDoS protection"
        },
        {
          "id": "C",
          "text": "Conducting routine vulnerability assessments on the website"
        },
        {
          "id": "D",
          "text": "Implementing strong password policies for website administrators"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A Web Application Firewall (WAF) with DDoS protection can identify and filter out malicious traffic associated with DDoS attacks. As a corrective control, it can help in mitigating the impact and restoring normal service during and after an attack. [cite: 472]"
    },
    {
      "id": "q13",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GreenTech Industries has a manufacturing facility located in a relatively secluded area. Recent incidents of theft and trespassing have alarmed the management. Which of the following would MOST effectively deter unauthorized nighttime access to the perimeter of the facility?",
      "options": [
        {
          "id": "A",
          "text": "Installing infrared sensors"
        },
        {
          "id": "B",
          "text": "Using bright perimeter lighting"
        },
        {
          "id": "C",
          "text": "Deploying additional security guards inside the facility"
        },
        {
          "id": "D",
          "text": "Increasing the height of the facility walls"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Bright perimeter lighting acts as a strong deterrent for unauthorized individuals, as it reduces hiding spots, makes surveillance cameras more effective, and can make it easier for security personnel to spot potential threats. In secluded areas, proper lighting is particularly essential to illuminate dark spots and deter potential intruders. [cite: 479]"
    },
    {
      "id": "q14",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "While conducting a routine security review, Jake, a security specialist, discovers an unexpected piece of data placed in the organization's financial system. Upon asking, he learns that this piece of data is intentionally placed and monitored to see if any unauthorized user or system interacts with it. What is this deceptive piece of data known as?",
      "options": [
        {
          "id": "A",
          "text": "Honeystring"
        },
        {
          "id": "B",
          "text": "Honeytoken"
        },
        {
          "id": "C",
          "text": "Canary token"
        },
        {
          "id": "D",
          "text": "Security marker"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Honeytokens are strategically placed deceptive pieces of data that have no actual value or real-world use but are closely monitored. Their sole purpose is to detect unauthorized interactions, as any access or use of a honeytoken is likely malicious or unauthorized. [cite: 485]"
    },
    {
      "id": "q15",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization is deploying new IoT devices in its smart office. To ensure that only authorized devices can connect to the corporate network, each device will be given a unique key pair. Which of the following best describes the system authentication approach the organization is using?",
      "options": [
        {
          "id": "A",
          "text": "Shared secret authentication"
        },
        {
          "id": "B",
          "text": "Public key infrastructure (PKI)"
        },
        {
          "id": "C",
          "text": "Token-based authentication"
        },
        {
          "id": "D",
          "text": "Username and password authentication"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Public key infrastructure (PKI) is a combination of hardware, software, policies, and standards that work together to provide a framework for secure communications. One of the primary features of PKI is the use of a pair of keys (public and private) to authenticate entities. In the scenario, each IoT device is given a unique key pair, indicating the use of PKI for system authentication. [cite: 490]"
    },
    {
      "id": "q16",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In the new branch of BankSecure, the management has decided to install a security system at the main entrance that forces visitors to go through two separate authorization checks before entering the main premises. Which physical security measure should they consider?",
      "options": [
        {
          "id": "A",
          "text": "Turnstiles"
        },
        {
          "id": "B",
          "text": "Security Guards"
        },
        {
          "id": "C",
          "text": "Access Control Vestibule"
        },
        {
          "id": "D",
          "text": "Keycard Readers"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An access control vestibule, often referred to as a mantrap, is a two-stage authentication system. It consists of two doors: a person enters the first door, undergoes an authorization check (like a badge reader or biometric scanner), and only after being approved can they proceed to the second door, where they undergo another authorization check before accessing the main premises. [cite: 496]"
    },
    {
      "id": "q17",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department wants to monitor network traffic in real time to detect any anomalies or malicious activities. Which of the following security controls can accomplish this?",
      "options": [
        {
          "id": "A",
          "text": "Security policy documentation"
        },
        {
          "id": "B",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "C",
          "text": "Employee code of conduct"
        },
        {
          "id": "D",
          "text": "Access Control Lists (ACL)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An Intrusion Detection System (IDS) is a technical control that monitors network traffic in real-time and alerts administrators to any suspicious or malicious activities based on predefined rules or heuristics. [cite: 500, 501]"
    },
    {
      "id": "q18",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jenna, a web administrator for a growing online retail business, is in the process of obtaining SSL certificates for the company's domain. The company uses several subdomains for different services, such as shop.example.com, blog.example.com, and support.example.com. Instead of obtaining individual certificates for each subdomain, Jenna wants to use one certificate. What type of certificate should Jenna pursue?",
      "options": [
        {
          "id": "A",
          "text": "Extended Validation Certificate"
        },
        {
          "id": "B",
          "text": "Wildcard Certificate"
        },
        {
          "id": "C",
          "text": "Certificate with Subject Alternative Names (SAN)"
        },
        {
          "id": "D",
          "text": "Code Signing Certificate"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A Wildcard Certificate is designed to secure a domain and its subdomains under the same top-level domain. For example, a wildcard certificate for *.example.com would secure shop.example.com, blog.example.com, and any other subdomain of example.com. [cite: 507, 508]"
    },
    {
      "id": "q19",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "At a newly established museum, management wants to install sensors in the exhibit rooms to detect any unauthorized movement after hours. The rooms are often filled with a mix of air conditioning and external noise from the city. Which sensor would be BEST suited to detect movement in such conditions without being affected by the noise?",
      "options": [
        {
          "id": "A",
          "text": "Acoustic sensors"
        },
        {
          "id": "B",
          "text": "Glass break detectors"
        },
        {
          "id": "C",
          "text": "Ultrasonic sensors"
        },
        {
          "id": "D",
          "text": "Thermal imaging cameras"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Ultrasonic sensors emit high-frequency sound waves to detect motion. These sound waves are beyond the range of human hearing and won't be affected by ambient noise, making them ideal for environments with varying noise conditions. When motion is detected, as indicated by changes in the reflected waves, an alarm is triggered. [cite: 513]"
    },
    {
      "id": "q20",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is setting up a secure communication channel between its headquarters and a remote branch office. To ensure that data transmitted over this channel originates from a legitimate system at the branch office, the company is considering using digital certificates. Which authentication method for systems is the company contemplating?",
      "options": [
        {
          "id": "A",
          "text": "Kerberos authentication"
        },
        {
          "id": "B",
          "text": "Password-based authentication"
        },
        {
          "id": "C",
          "text": "Certificate-based authentication"
        },
        {
          "id": "D",
          "text": "Biometric-based authentication"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Certificate-based authentication uses digital certificates to verify the identity of systems or individuals. In the given scenario, the company wants to verify that data transmitted over the communication channel originates from a legitimate system, making digital certificates an appropriate choice. [cite: 518]"
    },
    {
      "id": "q21",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution has experienced an uptick in unauthorized transactions. They want to implement a control that will allow them to identify suspicious transactions in real-time. Which of the following would be the BEST detective control for this scenario?",
      "options": [
        {
          "id": "A",
          "text": "Implementing a multi-factor authentication system for all users"
        },
        {
          "id": "B",
          "text": "Establishing a Security Operations Center (SOC) to monitor network traffic"
        },
        {
          "id": "C",
          "text": "Installing an Intrusion Detection System (IDS) on their network"
        },
        {
          "id": "D",
          "text": "Restricting transaction capabilities to only a few trusted IP addresses."
        }
      ],
      "correctOptionId": "C",
      "explanation": "An Intrusion Detection System (IDS) serves as a detective control by monitoring network traffic for suspicious activities and potential threats. In this context, it can be configured to detect patterns related to unauthorized transactions, thereby allowing timely intervention. [cite: 525, 526]"
    },
    {
      "id": "q22",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechHaus has recently experienced multiple security breaches where unauthorized personnel have managed to infiltrate their server rooms after hours. To enhance security measures, the company decided to deploy a new system. Which of the following options would BEST detect human intruders based on their body heat even in complete darkness?",
      "options": [
        {
          "id": "A",
          "text": "Installing CCTV cameras with LED lights"
        },
        {
          "id": "B",
          "text": "Using ultrasonic motion sensors"
        },
        {
          "id": "C",
          "text": "Deploying infrared (IR) sensors"
        },
        {
          "id": "D",
          "text": "Implementing RFID badge readers at the entrance"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Infrared (IR) sensors detect infrared radiation, such as the heat emitted by the human body. This makes them particularly effective in detecting human intruders, even in complete darkness, based on the body heat they emit. [cite: 532]"
    },
    {
      "id": "q23",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After detecting an unauthorized intrusion into their network, a financial institution wants to implement a control that will restore compromised systems to a known good state. Which of the following would be the MOST appropriate corrective control?",
      "options": [
        {
          "id": "A",
          "text": "Implementing Intrusion Detection Systems (IDS) across the network"
        },
        {
          "id": "B",
          "text": "Frequently updating firewall rules"
        },
        {
          "id": "C",
          "text": "Restoring systems from verified backups"
        },
        {
          "id": "D",
          "text": "Enabling multi-factor authentication for users"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Restoring systems from verified backups is a corrective control, as it can restore compromised systems to their last known good state. This action corrects the adverse effects of the intrusion and ensures that any malicious alterations are removed. [cite: 542]"
    },
    {
      "id": "q24",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent security breach, Sarah, a cybersecurity analyst, is implementing additional measures to detect unauthorized activities. She decides to embed specific values in the database that serve no real purpose but are monitored for any unauthorized access or usage. These values are designed to raise alerts if they are ever accessed or used. What are these specific values commonly referred to as?",
      "options": [
        {
          "id": "A",
          "text": "Security flags"
        },
        {
          "id": "B",
          "text": "Honeypots"
        },
        {
          "id": "C",
          "text": "Honeytokens"
        },
        {
          "id": "D",
          "text": "Audit trails"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Honeytokens are strategically placed deceptive pieces of data that have no actual value or real-world use but are closely monitored. Their sole purpose is to detect unauthorized interactions, as any access or use of a honeytoken is likely malicious or unauthorized. [cite: 485]"
    },
    {
      "id": "q25",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Bob receives an email prompting him to verify his identity by clicking on a link. The link directs him to a webpage where he has to provide his username, password, and answer a personal security question. What type of authentication method is being employed here?",
      "options": [
        {
          "id": "A",
          "text": "Biometric authentication"
        },
        {
          "id": "B",
          "text": "Token-based authentication"
        },
        {
          "id": "C",
          "text": "Two-factor authentication"
        },
        {
          "id": "D",
          "text": "Single sign-on"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Two-factor authentication (2FA) is a security process in which users provide two different authentication factors to verify their identity. In this scenario, Bob is providing something he knows (username and password) and also answering a personal security question, which is another form of \"something he knows.\" [cite: 547, 548]"
    },
    {
      "id": "q26",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In an effort to minimize data breaches from malware, a company is deciding on a control to prevent malicious software from being executed on company devices. Which of the following would be the BEST preventive control?",
      "options": [
        {
          "id": "A",
          "text": "Deploying a Network Intrusion Detection System (NIDS)"
        },
        {
          "id": "B",
          "text": "Regularly backing up critical data"
        },
        {
          "id": "C",
          "text": "Installing an antivirus software with real-time scanning"
        },
        {
          "id": "D",
          "text": "Performing a forensic analysis after a security incident"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Installing antivirus software with real-time scanning actively monitors for and prevents malicious software from being executed on a device, making it the best preventive control against malware. [cite: 551]"
    },
    {
      "id": "q27",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After undergoing a major infrastructure upgrade, GlobalMed Corp experienced several unanticipated security issues. In retrospect, the IT manager realized they skipped an essential step in their change management process which could have predicted and mitigated these issues. What step did they most likely overlook?",
      "options": [
        {
          "id": "A",
          "text": "Procurement of new hardware"
        },
        {
          "id": "B",
          "text": "Training of IT staff on the new systems"
        },
        {
          "id": "C",
          "text": "Impact analysis"
        },
        {
          "id": "D",
          "text": "Integration with legacy systems"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An impact analysis is vital in the change management process as it evaluates the potential ramifications of a proposed change. By conducting this analysis, organizations can anticipate potential security challenges and mitigate them before implementing the change. [cite: 557, 558]"
    },
    {
      "id": "q28",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "MegaCorp recently introduced a new web application for its customers. Before its release, the software underwent rigorous testing in a controlled environment. When the application was deployed in production, several security vulnerabilities were reported. Which of the following reasons can explain the mismatch between the test results and actual vulnerabilities?",
      "options": [
        {
          "id": "A",
          "text": "The testing environment was an exact replica of the production environment"
        },
        {
          "id": "B",
          "text": "Test results were not thoroughly reviewed"
        },
        {
          "id": "C",
          "text": "The software was not tested for zero-day vulnerabilities"
        },
        {
          "id": "D",
          "text": "Penetration testing was done post-production"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Even if an application is tested rigorously, it is crucial to thoroughly review and interpret the test results to identify any potential security vulnerabilities. Failing to review or misinterpreting these results can lead to vulnerabilities going unnoticed and unresolved. [cite: 562, 563]"
    },
    {
      "id": "q29",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An online banking website employs a system that automatically logs out users after 10 minutes of inactivity to ensure that if a user forgets to log out, no one else can alter the user's banking details. Which principle of the CIA triad is the banking website MOST directly addressing?",
      "options": [
        {
          "id": "A",
          "text": "Confidentiality"
        },
        {
          "id": "B",
          "text": "Availability"
        },
        {
          "id": "C",
          "text": "Authentication"
        },
        {
          "id": "D",
          "text": "Integrity"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The integrity pillar of the CIA triad ensures the accuracy and reliability of data. By logging out users after a period of inactivity, the banking website aims to prevent unauthorized modifications (potentially by someone else who might gain access to the unattended session) to the user's banking details, thereby maintaining the integrity of the data. [cite: 568]"
    },
    {
      "id": "q30",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is located in an area prone to natural disasters such as earthquakes and floods. Which of the following physical security controls would be MOST effective in ensuring the safety of the company's IT infrastructure?",
      "options": [
        {
          "id": "A",
          "text": "Using biometric authentication for server access"
        },
        {
          "id": "B",
          "text": "Deploying a firewall to protect against cyber threats"
        },
        {
          "id": "C",
          "text": "Establishing a raised floor system in the data center"
        },
        {
          "id": "D",
          "text": "Conducting penetration testing on a regular basis"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A raised floor system in a data center serves as a physical control by elevating equipment off the ground, helping to protect it from potential water damage in the event of flooding and providing some protection from other environmental risks. [cite: 572]"
    },
    {
      "id": "q31",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechBank has just opened a new branch in the city center. Due to its location, the management is concerned about potential vehicular attacks on the facility. Which of the following physical security measures can TechBank employ to specifically deter such attacks?",
      "options": [
        {
          "id": "A",
          "text": "Surveillance Cameras"
        },
        {
          "id": "B",
          "text": "Bollards"
        },
        {
          "id": "C",
          "text": "Access Badges"
        },
        {
          "id": "D",
          "text": "Security Guards"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Bollards are short, sturdy vertical posts that are typically used to control road traffic. In the context of physical security, they serve to prevent vehicles from entering areas where they are not allowed, thereby acting as a deterrent against potential vehicular attacks. [cite: 578]"
    },
    {
      "id": "q32",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a security assessment, Maria, a security consultant, identifies a self-signed certificate being used on a client's public-facing web server. What is the PRIMARY security concern related to this finding?",
      "options": [
        {
          "id": "A",
          "text": "The web server might be vulnerable to Distributed Denial of Service (DDoS) attacks"
        },
        {
          "id": "B",
          "text": "The certificate could be expired"
        },
        {
          "id": "C",
          "text": "Users cannot validate the authenticity of the website easily"
        },
        {
          "id": "D",
          "text": "The web server might not support modern encryption algorithms"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Self-signed certificates are not signed by a recognized Certificate Authority. As a result, when users connect to a website using a self-signed certificate, they typically receive a warning that the certificate is not trusted. This poses a risk as users cannot easily validate the authenticity of the website, making them more susceptible to man-in-the-middle attacks. [cite: 583, 584]"
    },
    {
      "id": "q33",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFin Bank is considering implementing a new software system for their transaction processing. Before rolling it out, the cybersecurity team insists on carrying out a specific type of analysis to understand how this change might affect the organization's security posture. What is the team referring to?",
      "options": [
        {
          "id": "A",
          "text": "Risk appetite assessment"
        },
        {
          "id": "B",
          "text": "Performance benchmarking"
        },
        {
          "id": "C",
          "text": "Impact analysis"
        },
        {
          "id": "D",
          "text": "Penetration testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An impact analysis assesses the potential consequences of a change within an organization. In the context of TechFin Bank, the cybersecurity team would use this analysis to understand how the new software system might introduce new vulnerabilities, affect existing security measures, or otherwise impact the bank's overall security. [cite: 588, 589]"
    },
    {
      "id": "q34",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "To discourage potential cybercriminals from targeting their online storefront, an e-commerce company is considering various security measures. Which of the following would act MOST effectively as a deterrent control?",
      "options": [
        {
          "id": "A",
          "text": "Displaying a seal for third-party security certifications on the website"
        },
        {
          "id": "B",
          "text": "Using a Web Application Firewall (WAF)"
        },
        {
          "id": "C",
          "text": "Conducting monthly vulnerability assessments"
        },
        {
          "id": "D",
          "text": "Storing customer data in encrypted databases"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Displaying a seal for third-party security certifications on the website serves as a deterrent control. It sends a message to potential attackers that the site is recognized for its security measures, which can discourage them from attempting an attack. [cite: 592, 594]"
    },
    {
      "id": "q35",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The security team of a multinational company deployed a network of honeypots globally, making it appear as an interconnected and realistic environment. They aim to study coordinated multi-stage attacks. This deceptive setup is known as:",
      "options": [
        {
          "id": "A",
          "text": "Firewall Cluster"
        },
        {
          "id": "B",
          "text": "Virtual LAN (VLAN)"
        },
        {
          "id": "C",
          "text": "Distributed Denial of Service (DDoS) Prevention"
        },
        {
          "id": "D",
          "text": "Honeynet"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A honeynet is essentially a network of honeypots. It is designed to be attractive to attackers, making them believe they are attacking a real network, while in reality, they are being observed, and their tactics and techniques are being analyzed. [cite: 598, 599]"
    },
    {
      "id": "q36",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ExamsDigest Corp, a technology company, recently conducted a security assessment to align with industry best practices. The company's current security posture was compared to its desired future state, revealing discrepancies. Which of the following best describes the approach ExamsDigest Corp employed?",
      "options": [
        {
          "id": "A",
          "text": "Vulnerability Assessment"
        },
        {
          "id": "B",
          "text": "Penetration Testing"
        },
        {
          "id": "C",
          "text": "Gap Analysis"
        },
        {
          "id": "D",
          "text": "Threat Modeling"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Gap analysis is a method of comparing the current state of something (such as security measures) with a future desired state to identify the discrepancies or \"gaps\". In the scenario, ExamsDigest Corp compared their current security posture to a desired future state, which is consistent with the process of gap analysis. [cite: 604]"
    },
    {
      "id": "q37",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A pharmaceutical company is concerned about competitors accessing their formula for a new drug. Which pillar of the CIA triad is MOST directly addressed by their concern?",
      "options": [
        {
          "id": "A",
          "text": "Availability"
        },
        {
          "id": "B",
          "text": "Confidentiality"
        },
        {
          "id": "C",
          "text": "Integrity"
        },
        {
          "id": "D",
          "text": "Non-repudiation"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The confidentiality pillar of the CIA triad ensures that information is accessible only to those with authorized access. In this scenario, the company wants to ensure that its drug formula remains secret and is not accessible to unauthorized individuals, particularly competitors. [cite: 609]"
    },
    {
      "id": "q38",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "FinCorp, a financial institution, has recently adopted a new security framework. In this framework, every device and user inside the organization's network is treated as if they were outside the perimeter, necessitating rigorous verification processes even for internal requests. Which security paradigm has FinCorp implemented?",
      "options": [
        {
          "id": "A",
          "text": "Demilitarized Zone (DMZ)"
        },
        {
          "id": "B",
          "text": "Network Segmentation"
        },
        {
          "id": "C",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "D",
          "text": "Zero Trust"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Zero Trust is a security model that treats every access request with skepticism, regardless of its origin, be it from within or outside the organization's traditional perimeter. It requires rigorous verification processes for every interaction. [cite: 615, 616]"
    },
    {
      "id": "q39",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Green Valley Mall, located in a busy urban area, has recently faced security concerns due to the proximity of its main entrance to a major road. Which physical security enhancement can the mall management implement to create a protective barrier between the road and the entrance, ensuring pedestrian safety and preventing unauthorized vehicular access?",
      "options": [
        {
          "id": "A",
          "text": "Reinforced Walls"
        },
        {
          "id": "B",
          "text": "Metal Detectors"
        },
        {
          "id": "C",
          "text": "Bollards"
        },
        {
          "id": "D",
          "text": "Perimeter Fencing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Bollards are robust vertical posts, usually made of steel or concrete, which can be placed at specific intervals to form a protective barrier. They can effectively prevent vehicles from accessing pedestrian areas or building entrances while allowing pedestrian movement. [cite: 622]"
    },
    {
      "id": "q40",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A tech company, InnovateTech, has recently faced multiple incidents of unauthorized personnel trying to access their R&D labs. They wish to monitor and record all activities near the entrance of this sensitive area. Which physical security measure would be most effective for this requirement?",
      "options": [
        {
          "id": "A",
          "text": "RFID Badge Readers"
        },
        {
          "id": "B",
          "text": "Biometric Scanners"
        },
        {
          "id": "C",
          "text": "Video Surveillance Cameras"
        },
        {
          "id": "D",
          "text": "Mantrap"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Video surveillance cameras provide a continuous visual monitoring capability and can record activities near specific areas. For the purpose of observing and recording incidents near the entrance of the R&D labs, video surveillance would be the most direct and effective solution. [cite: 627, 628]"
    },
    {
      "id": "q41",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cybersecurity analyst at XYZ Corp is looking to deploy a system that appears to be vulnerable and enticing to attackers. The main goal is to study the tactics, techniques, and procedures (TTPs) of potential adversaries, without them realizing that they're interacting with a decoy. Which of the following would BEST meet this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "B",
          "text": "Firewall"
        },
        {
          "id": "C",
          "text": "Honeypot"
        },
        {
          "id": "D",
          "text": "VPN Concentrator"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A honeypot is a security mechanism designed to lure attackers into interacting with a seemingly vulnerable system. Its primary purpose is not to block or prevent attacks but to log and study them. By analyzing the activities on the honeypot, security professionals can gain insights into the methods and motivations of the attackers. [cite: 633, 634]"
    },
    {
      "id": "q42",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational organization recently experienced a significant security breach. After investigating, it was determined that a change to the network infrastructure was made without undergoing the standard approval process. As a result, there was a misconfiguration which allowed unauthorized access. What security principle related to change management did the organization neglect?",
      "options": [
        {
          "id": "A",
          "text": "Configuration baseline reviews"
        },
        {
          "id": "B",
          "text": "Least privilege enforcement"
        },
        {
          "id": "C",
          "text": "Approval process adherence"
        },
        {
          "id": "D",
          "text": "Patch management"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The approval process is a critical aspect of change management. Before any changes are made, especially to critical systems like network infrastructure, they need to undergo a rigorous approval process. This ensures that multiple experts evaluate the change for potential vulnerabilities or issues. In this scenario, skipping the approval process led to a significant security breach. [cite: 638, 639]"
    },
    {
      "id": "q43",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a series of cyber-attacks on a company's infrastructure, the IT team decided to deploy a solution that would seem like a legitimate part of their network but is intentionally isolated and monitored. They intend to detect and analyze malicious activities in this isolated environment. What technology are they most likely implementing?",
      "options": [
        {
          "id": "A",
          "text": "Network segmentation"
        },
        {
          "id": "B",
          "text": "Honeypot"
        },
        {
          "id": "C",
          "text": "DMZ (Demilitarized Zone)"
        },
        {
          "id": "D",
          "text": "Sandboxing"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A honeypot is intentionally set up to appear as a legitimate part of a network, but it is isolated and closely monitored. Its purpose is to attract attackers and observe their actions, thereby providing insights into potential threats and the methods employed by adversaries. [cite: 644]"
    },
    {
      "id": "q44",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Liam, the CTO of a medium-sized enterprise, noticed that several software applications were not updated regularly, leading to potential security vulnerabilities. Upon investigation, he realized that no specific team or individual was assigned as the owner of these applications. To enhance security, what should Liam emphasize?",
      "options": [
        {
          "id": "A",
          "text": "Immediate decommissioning of all unowned applications"
        },
        {
          "id": "B",
          "text": "Assignment of clear ownership to all business applications"
        },
        {
          "id": "C",
          "text": "Conducting monthly vulnerability assessments on all applications"
        },
        {
          "id": "D",
          "text": "Outsourcing the management of these applications to third-party vendors"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Assigning clear ownership ensures that there's a designated team or individual responsible for the upkeep, updates, and security of an application. When there's clear ownership, the owner has the accountability to maintain and secure the application, reducing the risk of oversights like missing updates. [cite: 648, 649, 651]"
    },
    {
      "id": "q45",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechSoft Corp, a mid-sized software development firm, is relocating its main office to a new building. The management is concerned about potential threats after hours, particularly due to the increasing reports of cyber-espionage. They are evaluating different security measures. Which option would provide an immediate physical presence and deterrence during non-business hours?",
      "options": [
        {
          "id": "A",
          "text": "CCTV with motion detection"
        },
        {
          "id": "B",
          "text": "Retinal scan at all entrances"
        },
        {
          "id": "C",
          "text": "Security guard presence"
        },
        {
          "id": "D",
          "text": "Reinforced doors and windows"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A security guard provides a visible deterrent and immediate physical presence. This human element is invaluable in situations where an immediate response to threats, deterrence of potential intruders, or evaluation of suspicious activities is required, especially during non-business hours. [cite: 656]"
    },
    {
      "id": "q46",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alice, a system administrator for a startup, is preparing to deploy a new website for her company. To ensure secure communications between the users and the website, she plans to obtain a digital certificate for the site. Before doing so, which step must Alice first undertake to get a certificate from a Certificate Authority (CA)?",
      "options": [
        {
          "id": "A",
          "text": "Generate a public-private key pair"
        },
        {
          "id": "B",
          "text": "Submit her passport copy to the CA"
        },
        {
          "id": "C",
          "text": "Download the latest CA root certificate"
        },
        {
          "id": "D",
          "text": "Encrypt the website with symmetric encryption"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Before Alice can request a digital certificate from a CA, she must first generate a public-private key pair. Once this is done, she creates a Certificate Signing Request (CSR) containing her public key and some additional information. The CSR is then submitted to the CA for signing. [cite: 659, 661]"
    },
    {
      "id": "q47",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Julia, a security administrator, is concerned about potential unauthorized access to confidential project files stored on a company server. She decides to place a document within the project folders that seems enticing but is actually monitored for access. This strategy aims to detect if someone is accessing files without authorization. What is this document commonly known as?",
      "options": [
        {
          "id": "A",
          "text": "Salt file"
        },
        {
          "id": "B",
          "text": "Honeyfile"
        },
        {
          "id": "C",
          "text": "Log file"
        },
        {
          "id": "D",
          "text": "Backup file"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A honeyfile is a monitored file placed intentionally to act as a decoy. If accessed, it can provide an alert that someone might be accessing files without proper authorization, or it might be an indication of a potential insider threat. [cite: 666, 667]"
    },
    {
      "id": "q48",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent incident of vandalism, a corporate building is considering implementing security controls that would dissuade potential perpetrators. Which of the following would serve BEST as a deterrent control?",
      "options": [
        {
          "id": "A",
          "text": "Encrypting all stored data"
        },
        {
          "id": "B",
          "text": "Installing biometric access controls on all entrances"
        },
        {
          "id": "C",
          "text": "Implementing regular data backups"
        },
        {
          "id": "D",
          "text": "Placing visible security signage indicating 24/7 surveillance"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Visible security signage serves as a deterrent control as it discourages potential perpetrators by signaling the risk of detection and consequences, even if actual surveillance might not be active at all times. [cite: 669]"
    },
    {
      "id": "q49",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alice wants to access a restricted online portal. The portal asks her to enter a unique username and a secret passphrase only she should know. This process helps the system ensure that Alice is who she claims to be. What security concept is the portal employing?",
      "options": [
        {
          "id": "A",
          "text": "Authorization"
        },
        {
          "id": "B",
          "text": "Accounting"
        },
        {
          "id": "C",
          "text": "Multifactor authentication"
        },
        {
          "id": "D",
          "text": "Authentication"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Authentication is the process of verifying the identity of a user, system, or application. In the described scenario, Alice is proving her identity to the system by providing a unique username and a passphrase, which are credentials that supposedly only she possesses. [cite: 670]"
    },
    {
      "id": "q50",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sophia, the cybersecurity lead at XYZ Corp, is in the process of drafting a new security policy. During the drafting process, she primarily consults with her security team. However, upon implementation, several departments pushed back due to the policy interfering with their operations. Which best describes the misstep Sophia made during the policy creation process?",
      "options": [
        {
          "id": "A",
          "text": "Not using a standardized security framework"
        },
        {
          "id": "B",
          "text": "Over-reliance on automated security solutions"
        },
        {
          "id": "C",
          "text": "Not including key stakeholders in the policy drafting process"
        },
        {
          "id": "D",
          "text": "Focusing too much on external threats rather than internal ones"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Stakeholders from different departments provide crucial insights into how security measures can impact various operations and processes within an organization. By including them in the policy drafting process, Sophia would have received feedback that could have helped shape a policy that not only maintains security but also aligns with the needs of different departments. [cite: 670]"
    },
    {
      "id": "q51",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "BioGen Inc., a biotechnology company, has implemented a layered security approach. They are considering adding a human element to their security measures for their research labs. Which of the following would best provide the ability to evaluate and respond to various security situations with human judgment?",
      "options": [
        {
          "id": "A",
          "text": "Installing biometric locks"
        },
        {
          "id": "B",
          "text": "Employing security guards"
        },
        {
          "id": "C",
          "text": "Implementing an access control vestibule"
        },
        {
          "id": "D",
          "text": "Deploying AI-driven security cameras"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Security guards provide the advantage of human judgment and can evaluate, respond, and adapt to a wide variety of security situations, making them ideal for adding a human element to a layered security approach. [cite: 671]"
    },
    {
      "id": "q52",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "While analyzing server logs, Mike, an IT security analyst, noticed that an unfamiliar document was frequently accessed. Upon investigation, he realized that this document was deliberately placed by the security team and had no real data but was closely monitored. The purpose of this file is MOST likely:",
      "options": [
        {
          "id": "A",
          "text": "To serve as a redundancy copy in case of data loss"
        },
        {
          "id": "B",
          "text": "To act as a decoy to attract and detect unauthorized access"
        },
        {
          "id": "C",
          "text": "To maintain a record of all user activities for auditing"
        },
        {
          "id": "D",
          "text": "To be encrypted and sent to clients as a sample"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Honeyfiles serve as deceptive measures, attracting potential malicious actors or unauthorized users. If such files are accessed, it can be an indication of unauthorized or suspicious activities in the system. [cite: 672]"
    },
    {
      "id": "q53",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DataCenter Inc. is located in a region prone to protests and vandalism. They wish to enhance their perimeter security to deter potential intruders and make it visibly clear that unauthorized access is restricted. Which of the following physical security measures would be the most effective first line of defense for the company?",
      "options": [
        {
          "id": "A",
          "text": "Sliding Doors"
        },
        {
          "id": "B",
          "text": "Security Cameras"
        },
        {
          "id": "C",
          "text": "High-security Fencing"
        },
        {
          "id": "D",
          "text": "Proximity Card Readers"
        }
      ],
      "correctOptionId": "C",
      "explanation": "High-security fencing is a primary physical barrier that serves to deter, delay, and detect intrusions. It provides a clear visual indicator that delineates private property and can be equipped with additional deterrents such as barbed wire or sensors. Especially in areas prone to vandalism or protests, a robust fence acts as an immediate barrier to unauthorized access. [cite: 672]"
    },
    {
      "id": "q54",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureTech Corp, a company dealing with sensitive client data, is redesigning its main office entrance to enhance security. They want to ensure that only one person gains access at a time, even if multiple people try to enter using a single authorized access badge. Which of the following would best serve this purpose?",
      "options": [
        {
          "id": "A",
          "text": "CCTV Cameras"
        },
        {
          "id": "B",
          "text": "Mantrap"
        },
        {
          "id": "C",
          "text": "Biometric Scanners"
        },
        {
          "id": "D",
          "text": "Motion Detectors"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A mantrap, also known as an access control vestibule, is a physical security access control system comprising a small space with two sets of interlocking doors. The first door must close before the second door opens, ensuring that only one person can pass through at a time. This design prevents tailgating or piggybacking, where unauthorized individuals attempt to enter a secure area by following closely behind an authorized individual. [cite: 673]"
    },
    {
      "id": "q55",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "While setting up a new internal web application, Laura, a system administrator, decides to use a digital certificate for SSL/TLS encryption. Due to budget constraints, she can't procure a certificate from a commercial Certificate Authority (CA). Which of the following would be a viable option for Laura to secure the application?",
      "options": [
        {
          "id": "A",
          "text": "Rely on plaintext HTTP for the application"
        },
        {
          "id": "B",
          "text": "Obtain a certificate from a free Certificate Authority"
        },
        {
          "id": "C",
          "text": "Generate a self-signed certificate"
        },
        {
          "id": "D",
          "text": "Use a shared certificate from another application"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A self-signed certificate can be generated by Laura without the need for a Certificate Authority. While self-signed certificates can cause trust issues in public-facing applications (since they aren't signed by a recognized CA), they can be appropriate for internal applications where users can be informed and trust can be established manually. [cite: 674]"
    },
    {
      "id": "q56",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A network administrator has received a new security patch for a mission-critical application. Which of the following is the BEST action to take before applying this patch in the live environment?",
      "options": [
        {
          "id": "A",
          "text": "Apply the patch immediately to ensure system security"
        },
        {
          "id": "B",
          "text": "Notify all users about the upcoming downtime due to the patch"
        },
        {
          "id": "C",
          "text": "Test the patch in a separate testing environment"
        },
        {
          "id": "D",
          "text": "Take a backup of only the mission-critical application"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Testing any changes, including patches, in a separate environment before deploying them to production is essential to ensure there are no unintended technical implications. This is a key aspect of change management processes and helps prevent system outages or vulnerabilities from being introduced. [cite: 674]"
    },
    {
      "id": "q57",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After implementing a major security update to its database system, TechCo experienced unexpected downtime and system incompatibilities. The CISO wants to ensure that such incidents can be quickly addressed in the future. Which of the following should TechCo have had in place before deploying the update to mitigate the impact of these kinds of incidents?",
      "options": [
        {
          "id": "A",
          "text": "A comprehensive list of all updates"
        },
        {
          "id": "B",
          "text": "An automated system recovery tool"
        },
        {
          "id": "C",
          "text": "A backout plan"
        },
        {
          "id": "D",
          "text": "A detailed user manual for the update"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A backout plan is a pre-arranged strategy or set of procedures to reverse changes made to the system in case the changes have adverse effects. In scenarios like this, where a significant update causes unintended problems, a backout plan would allow the organization to revert the system to its previous stable state quickly. [cite: 675]"
    },
    {
      "id": "q58",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution processes thousands of credit card transactions daily. To ensure the security and integrity of these transactions, the security officer wants to employ a solution that will safely manage and store cryptographic keys. Which of the following would be the MOST suitable solution?",
      "options": [
        {
          "id": "A",
          "text": "Trusted Platform Module (TPM)"
        },
        {
          "id": "B",
          "text": "Full Disk Encryption (FDE)"
        },
        {
          "id": "C",
          "text": "Hardware Security Module (HSM)"
        },
        {
          "id": "D",
          "text": "Software Key Repository"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Hardware Security Modules (HSMs) are physical devices specifically designed to manage, process, and store cryptographic keys. They provide a high level of protection against both physical and logical attacks and are commonly used by financial institutions to ensure the security of high-value transactions. [cite: 676]"
    },
    {
      "id": "q59",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During the setup of a secure communication channel, Alice and Bob need to agree upon a shared secret key without sending the key directly to each other, as they fear eavesdropping. Which protocol would best facilitate this requirement?",
      "options": [
        {
          "id": "A",
          "text": "RSA"
        },
        {
          "id": "B",
          "text": "HMAC"
        },
        {
          "id": "C",
          "text": "Diffie-Hellman"
        },
        {
          "id": "D",
          "text": "AES"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The Diffie-Hellman key exchange protocol allows two parties to each generate public and private key pairs, exchange the public keys, and then derive a shared secret key. This secret key can then be used for symmetric encryption. The beauty of this protocol is that the shared secret can be derived without directly sending it over the communication channel, preventing eavesdroppers from obtaining the secret key directly. [cite: 676]"
    },
    {
      "id": "q60",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is developing a new video conferencing tool. They want to make sure that all video and audio data transmitted between participants are encrypted and protected from eavesdropping. Which type of encryption should the developers implement to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Endpoint Encryption"
        },
        {
          "id": "B",
          "text": "Transport-layer Encryption"
        },
        {
          "id": "C",
          "text": "Volume-level Encryption"
        },
        {
          "id": "D",
          "text": "Database-level EncryptionAccess Control"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Transport-layer Encryption is tailored for securing data while it's in transit. By implementing this encryption, the company ensures that all video and audio data during the video conference are confidential, maintaining the privacy of the participants. [cite: 677]"
    },
    {
      "id": "q61",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a significant cybersecurity incident, ABC Tech revamped its incident response procedures. However, the documentation was not updated to reflect these changes. During a subsequent minor incident, there was confusion regarding the steps to be followed. Which of the following is the MOST direct implication of not updating the incident response documentation?",
      "options": [
        {
          "id": "A",
          "text": "The company may have to invest in new cybersecurity tools"
        },
        {
          "id": "B",
          "text": "Stakeholders might lose trust in the company's ability to handle incidents"
        },
        {
          "id": "C",
          "text": "Incident response might be inconsistent and less effective"
        },
        {
          "id": "D",
          "text": "ABC Tech may have to hire external consultants for incident response"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Without up-to-date documentation reflecting the most recent incident response procedures, there’s a risk that the response will be inconsistent, leading to inefficiencies and potential oversights. [cite: 678]"
    },
    {
      "id": "q62",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial organization is considering implementing a system that allows all users to view all transactions, but once a transaction is recorded, it cannot be altered or deleted. They want this transparency to foster trust among their users. Which of the following would best meet this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Digital certificate"
        },
        {
          "id": "B",
          "text": "Open public ledger"
        },
        {
          "id": "C",
          "text": "Symmetric encryption"
        },
        {
          "id": "D",
          "text": "Secure file transfer protocol"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An open public ledger provides transparency by allowing all users to view all transactions. Moreover, once a transaction is added to the ledger, it becomes immutable, meaning it cannot be altered or deleted, ensuring data integrity and fostering trust among participants. [cite: 678]"
    },
    {
      "id": "q63",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is implementing a system to ensure that code released to production is both unaltered and approved by a specific team member. Which of the following cryptographic techniques should they implement?",
      "options": [
        {
          "id": "A",
          "text": "Symmetric encryption of the code"
        },
        {
          "id": "B",
          "text": "Hashing the code with SHA-256"
        },
        {
          "id": "C",
          "text": "Encrypting the code with the team member's public key"
        },
        {
          "id": "D",
          "text": "Digital signature by the team member"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Digital signatures provide both integrity and non-repudiation. By having the specific team member digitally sign the code, the company can ensure that the code has not been altered (integrity) and that it was approved by the designated individual (non-repudiation). [cite: 679]"
    },
    {
      "id": "q64",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Your company has recently deployed an update to its CRM application. Post-update, users are experiencing connectivity issues. As a security administrator, which of the following steps should you take FIRST to address the connectivity problem without causing data loss?",
      "options": [
        {
          "id": "A",
          "text": "Restart the application immediately"
        },
        {
          "id": "B",
          "text": "Disconnect all users and then restart the application"
        },
        {
          "id": "C",
          "text": "Validate the update's integrity and then restart the application"
        },
        {
          "id": "D",
          "text": "Reinstall the previous version of the CRM application"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Before making any changes, it’s essential to ensure the update’s integrity. This means confirming that the update was correctly applied and that there were no issues during its installation. Once the update’s integrity is confirmed, a restart can help apply any changes that may not have taken effect immediately. [cite: 680]"
    },
    {
      "id": "q65",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechDynamics, a growing tech startup, plans to scale its operations and serve a global clientele. Given that their client base operates in multiple time zones, when should TechDynamics schedule their system maintenance to ensure minimal disruption?",
      "options": [
        {
          "id": "A",
          "text": "During the busiest hours for their headquarters' local time"
        },
        {
          "id": "B",
          "text": "Staggered based on the peak hours of their global clients"
        },
        {
          "id": "C",
          "text": "Only when a system breakdown occurs"
        },
        {
          "id": "D",
          "text": "Establish a consistent maintenance window during off-peak hours for the majority of their clientele"
        }
      ],
      "correctOptionId": "D",
      "explanation": "When serving a global clientele operating in various time zones, it’s crucial to establish a maintenance window during hours when the majority of clients are least active. This minimizes disruptions and ensures smooth operations for most clients. [cite: 680]"
    },
    {
      "id": "q66",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During an IT audit, a company's encryption practices come under scrutiny. The IT auditor recommends increasing the encryption key length for certain applications to improve security. What is the PRIMARY reason to increase the encryption key length?",
      "options": [
        {
          "id": "A",
          "text": "To speed up encryption and decryption processes"
        },
        {
          "id": "B",
          "text": "To ensure compatibility with older systems"
        },
        {
          "id": "C",
          "text": "To reduce the possibility of a brute force attack"
        },
        {
          "id": "D",
          "text": "To reduce the key management overhead"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Increasing the encryption key length primarily enhances the security of the encryption by making it more resistant to brute-force attacks. A brute force attack involves trying all possible key combinations, and a longer key length means exponentially more possible combinations, making the attack vastly more time-consuming and difficult. [cite: 681, 682]"
    },
    {
      "id": "q67",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah is working on a project where she needs to validate the integrity and authenticity of assets over time, without a centralized authority. Which technology would be most appropriate for this use case?",
      "options": [
        {
          "id": "A",
          "text": "Digital signature"
        },
        {
          "id": "B",
          "text": "Key escrow"
        },
        {
          "id": "C",
          "text": "Blockchain"
        },
        {
          "id": "D",
          "text": "Key management system"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Blockchain technology allows for the validation of the integrity and authenticity of assets over time in a decentralized manner. Each transaction or asset is verified by the network’s participants and added to the chain, ensuring its authenticity and making it tamper-evident. [cite: 682]"
    },
    {
      "id": "q68",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A graphic design company frequently works with large files such as videos and high-resolution images. These files are stored on a dedicated storage volume in their server. While they need to secure this data, they don't want to encrypt individual files due to the volume of data and frequent access needs. Which encryption approach is most appropriate for this scenario?",
      "options": [
        {
          "id": "A",
          "text": "File-level Encryption"
        },
        {
          "id": "B",
          "text": "Full-disk Encryption"
        },
        {
          "id": "C",
          "text": "Transport-layer Encryption"
        },
        {
          "id": "D",
          "text": "Volume-level Encryption"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Volume-level Encryption allows the encryption of a specific volume or logical drive. In this case, it would allow the company to encrypt the entire volume where these large files are stored without having to encrypt individual files. This ensures the entire volume’s contents are encrypted while providing seamless access when required. [cite: 682, 683]"
    },
    {
      "id": "q69",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce company stores millions of customer transaction records in their primary database. They have decided to enhance their security posture by applying encryption to protect sensitive data. However, they don't want to encrypt the entire server storage, just the data within the database. Which encryption approach should the company adopt to meet their objective?",
      "options": [
        {
          "id": "A",
          "text": "Full-disk Encryption"
        },
        {
          "id": "B",
          "text": "File-level Encryption"
        },
        {
          "id": "C",
          "text": "Volume-level Encryption"
        },
        {
          "id": "D",
          "text": "Database-level Encryption"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Database-level Encryption provides encryption specifically for data within a database. It ensures that the data remains encrypted even when backed up, replicated, or moved. This approach is ideal for the e-commerce company as it focuses on encrypting the sensitive transaction records without affecting other data on the server. [cite: 683, 684]"
    },
    {
      "id": "q70",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Your organization plans to upgrade its database system. To maintain security during this process, which of the following actions should be RESTRICTED until the upgrade is validated?",
      "options": [
        {
          "id": "A",
          "text": "Monitoring the database for any anomalies"
        },
        {
          "id": "B",
          "text": "Allowing end-users to access the upgraded database"
        },
        {
          "id": "C",
          "text": "Making regular backups of the database"
        },
        {
          "id": "D",
          "text": "Reviewing the database system logs"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Until the upgraded system is validated and any potential issues are addressed, end-user access should be restricted. This ensures that any vulnerabilities or problems introduced by the upgrade don’t compromise data or allow unauthorized activities. [cite: 684]"
    },
    {
      "id": "q71",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A journalist wants to send a confidential message to her editor without raising suspicion. Instead of sending a coded or encrypted text, she embeds the message within a harmless-looking photograph. What method is she employing to keep the message concealed?",
      "options": [
        {
          "id": "A",
          "text": "Digital signature"
        },
        {
          "id": "B",
          "text": "Tunneling"
        },
        {
          "id": "C",
          "text": "Steganography"
        },
        {
          "id": "D",
          "text": "Chaining"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Steganography is a technique used to conceal data within another piece of data. In this scenario, the journalist is embedding a confidential message within a photograph, making it look harmless and unsuspicious. [cite: 684]"
    },
    {
      "id": "q72",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security administrator needs to apply a configuration change to a critical service, requiring a service restart. Before initiating the restart, which of the following steps is MOST important to ensure continuous service availability?",
      "options": [
        {
          "id": "A",
          "text": "Implement automatic service restart on failure"
        },
        {
          "id": "B",
          "text": "Announce the restart to all company employees"
        },
        {
          "id": "C",
          "text": "Schedule the restart during off-peak hours"
        },
        {
          "id": "D",
          "text": "Take a backup of the current service configuration"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Having an automatic service restart on failure ensures that if any issues arise after applying the configuration change, the service will attempt to restart itself, ensuring minimal interruption to its availability. [cite: 685]"
    },
    {
      "id": "q73",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst at DataCorp is tasked with preventing unauthorized external applications from connecting to their server. Which approach should the analyst primarily rely on to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Implement an allow list for approved applications"
        },
        {
          "id": "B",
          "text": "Monitor server CPU usage"
        },
        {
          "id": "C",
          "text": "Regularly patch server software"
        },
        {
          "id": "D",
          "text": "Encrypt data at rest on the server"
        }
      ],
      "correctOptionId": "A",
      "explanation": "By implementing an allow list, the analyst can specify which applications are authorized to connect to the server. Any application not on the list will be prevented from establishing a connection, effectively stopping unauthorized external applications. [cite: 686]"
    },
    {
      "id": "q74",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alice needs to provide proof of the authenticity of a digital document she's sending to Bob. Which of the following cryptographic elements should Alice use to accomplish this task and ensure Bob knows the document came from her?",
      "options": [
        {
          "id": "A",
          "text": "Encrypt the document with Bob's private key"
        },
        {
          "id": "B",
          "text": "Encrypt the document with her public key"
        },
        {
          "id": "C",
          "text": "Sign the document with her private key"
        },
        {
          "id": "D",
          "text": "Sign the document with Bob's public key"
        }
      ],
      "correctOptionId": "C",
      "explanation": "To prove authenticity, a digital signature is created using the sender’s private key. When Bob receives the document, he can verify the signature using Alice’s public key. This proves that the document was signed by Alice and has not been tampered with during transit. [cite: 686, 687]"
    },
    {
      "id": "q75",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Carla, a security analyst, receives an alert that one of the company's server certificates may have been exposed in a recent data breach. What is the most immediate action Carla should take to ensure that the exposed certificate cannot be used maliciously?",
      "options": [
        {
          "id": "A",
          "text": "Request a new certificate from the CA"
        },
        {
          "id": "B",
          "text": "Update the company firewall rules"
        },
        {
          "id": "C",
          "text": "Add the certificate to the Certificate revocation list (CRL)"
        },
        {
          "id": "D",
          "text": "Perform a vulnerability assessment on the server"
        }
      ],
      "correctOptionId": "C",
      "explanation": "If a certificate is believed to be compromised, the most immediate action is to revoke it. This is done by adding the certificate to the Certificate revocation list (CRL). Systems and applications that check the CRL before establishing secure communications will then know not to trust the compromised certificate. [cite: 687]"
    },
    {
      "id": "q76",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A database administrator is concerned about identical hashes being produced for users who select the same password. To mitigate this risk, what cryptographic technique should the administrator implement?",
      "options": [
        {
          "id": "A",
          "text": "Digital signature"
        },
        {
          "id": "B",
          "text": "Salting"
        },
        {
          "id": "C",
          "text": "Key stretching"
        },
        {
          "id": "D",
          "text": "Symmetric encryption"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Salting involves adding a random value to a password before hashing it. This ensures that even if two users have the same password, their hashes will be different because of the unique salts. This makes it difficult for attackers to use precomputed tables (like rainbow tables) to match hashes to possible plaintext passwords. [cite: 688]"
    },
    {
      "id": "q77",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An online retailer is considering various methods to protect its customers' credit card information. Instead of storing the actual credit card numbers in their database, they opt for a solution that replaces the numbers with unrelated, random values. What is this method called?",
      "options": [
        {
          "id": "A",
          "text": "Symmetric encryption"
        },
        {
          "id": "B",
          "text": "Digital watermarking"
        },
        {
          "id": "C",
          "text": "Hashing"
        },
        {
          "id": "D",
          "text": "Tokenization"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Tokenization is a method where sensitive data is replaced with non-sensitive substitutes, referred to as “tokens”. These tokens act as references to the original data but don’t contain the actual sensitive data, making it a preferred method for protecting credit card information in many retail environments. [cite: 688]"
    },
    {
      "id": "q78",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a scheduled maintenance window, a security administrator plans to apply a critical update to the company's firewall. Which of the following actions is MOST crucial to ensure minimized downtime during this process?",
      "options": [
        {
          "id": "A",
          "text": "Notifying the firewall vendor about the update"
        },
        {
          "id": "B",
          "text": "Disabling all firewall rules temporarily"
        },
        {
          "id": "C",
          "text": "Creating a rollback plan in case of update failure"
        },
        {
          "id": "D",
          "text": "Scheduling the update during peak business hours"
        }
      ],
      "correctOptionId": "C",
      "explanation": "In change management processes, having a rollback plan ensures that if there are issues with the applied update, the system can be reverted to its previous state, thereby minimizing downtime. [cite: 689]"
    },
    {
      "id": "q79",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security administrator is considering a cryptographic solution for protecting data in transit between two servers located in the same data center. The primary goal is to ensure speed and efficiency in encryption and decryption processes. Which type of encryption would best meet this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Asymmetric encryption using RSA"
        },
        {
          "id": "B",
          "text": "Symmetric encryption using AES"
        },
        {
          "id": "C",
          "text": "Hybrid encryption using a combination of RSA and AES"
        },
        {
          "id": "D",
          "text": "Asymmetric encryption using ECC"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Symmetric encryption, such as AES, is typically faster and requires less computational resources than asymmetric encryption. This makes it suitable for scenarios where high-speed encryption and decryption are essential, like for data in transit between servers in a data center. [cite: 690]"
    },
    {
      "id": "q80",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software developer wants to store user passwords in a way that even if the database is compromised, attackers would not be able to retrieve the original passwords. What technique should the developer use to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Symmetric encryption"
        },
        {
          "id": "B",
          "text": "Digital signing"
        },
        {
          "id": "C",
          "text": "Hashing"
        },
        {
          "id": "D",
          "text": "Steganography"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Hashing is a technique that takes an input (or ‘message’) and returns a fixed size string of bytes, usually in the form of a digest. The output should ideally be unique (within reason) for every different input. It’s often used for storing passwords because even a tiny change in input will produce a dramatically different output, and it’s computationally hard to reverse the process. [cite: 690]"
    },
    {
      "id": "q81",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software development company is working on a mobile banking application. They want to ensure that sensitive operations like cryptographic processes and biometric data validation are isolated from the main operating system to prevent potential tampering. Which tool should they consider implementing to achieve this objective?",
      "options": [
        {
          "id": "A",
          "text": "Hardware Security Module (HSM)"
        },
        {
          "id": "B",
          "text": "Key Management System (KMS)"
        },
        {
          "id": "C",
          "text": "Secure enclave"
        },
        {
          "id": "D",
          "text": "Trusted Platform Module (TPM)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A secure enclave is a hardware-based isolated environment often found in modern CPUs, especially in mobile devices. It’s designed to run specific operations such as cryptographic processes and biometric data validation, ensuring that this data is kept isolated from the main operating system, making it resilient to tampering. [cite: 691]"
    },
    {
      "id": "q82",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A web server hosting the company's e-commerce site is set for an OS upgrade. The upgrade is expected to last 30 minutes. What should be a primary consideration to minimize customer impact due to potential downtime?",
      "options": [
        {
          "id": "A",
          "text": "Implementing a load balancer"
        },
        {
          "id": "B",
          "text": "Taking a backup of the e-commerce site"
        },
        {
          "id": "C",
          "text": "Posting a maintenance notice a week in advance"
        },
        {
          "id": "D",
          "text": "Upgrading the server's hardware"
        }
      ],
      "correctOptionId": "A",
      "explanation": "A load balancer can redirect traffic to other servers while one is undergoing maintenance, ensuring that customers can still access the e-commerce site and minimizing the impact of downtime. Load balancers distribute incoming traffic across multiple servers, allowing one server to be taken offline without affecting the availability of the service. [cite: 692]"
    },
    {
      "id": "q83",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A project manager is working on a new product launch and has documents with sensitive financial projections on her local computer. She occasionally shares these documents with select board members via email. While she wants to keep the financial documents secure, she doesn't want to encrypt all the data on her computer. Which encryption approach should she utilize?",
      "options": [
        {
          "id": "A",
          "text": "Full-disk Encryption"
        },
        {
          "id": "B",
          "text": "Transport-layer Encryption"
        },
        {
          "id": "C",
          "text": "File-level Encryption"
        },
        {
          "id": "D",
          "text": "Partition Encryption"
        }
      ],
      "correctOptionId": "C",
      "explanation": "File-level Encryption allows individual files or folders to be encrypted. In this scenario, the project manager can encrypt only the sensitive financial documents, allowing her to securely share them while keeping the rest of her data unencrypted. [cite: 692]"
    },
    {
      "id": "q84",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst is evaluating security enhancements for a series of laptops that will store highly confidential data. The analyst wants to ensure that stored data remains encrypted and the integrity of the boot process is maintained. Which of the following would BEST meet this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Installing antivirus software on each laptop"
        },
        {
          "id": "B",
          "text": "Enabling a software-based full-disk encryption"
        },
        {
          "id": "C",
          "text": "Implementing a BIOS password"
        },
        {
          "id": "D",
          "text": "Utilizing a Trusted Platform Module (TPM)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A Trusted Platform Module (TPM) is a specialized chip on an endpoint device that stores RSA encryption keys specific to the host system. It provides hardware-based security to enhance the security of the device by enabling features like hardware-based encryption and ensuring the integrity of the boot process, among other things. [cite: 693]"
    },
    {
      "id": "q85",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large e-commerce company is deploying a new online payment system. The Chief Information Security Officer (CISO) is concerned about the security of cryptographic keys and wants to ensure they are protected from potential theft or compromise. Which tool should the CISO implement to provide the HIGHEST level of security for these keys?",
      "options": [
        {
          "id": "A",
          "text": "Password vault"
        },
        {
          "id": "B",
          "text": "Software-based key storage"
        },
        {
          "id": "C",
          "text": "Hardware Security Module (HSM)"
        },
        {
          "id": "D",
          "text": "Cloud-based encryption service"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A Hardware Security Module (HSM) is a specialized device specifically designed to manage, protect, and securely store cryptographic keys. It is built to be tamper resistant and provides a high level of security, making it suitable for environments where the protection of cryptographic keys is of paramount importance, such as in an e-commerce payment system. [cite: 694]"
    },
    {
      "id": "q86",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah, a security analyst, is concerned about potential man-in-the-middle attacks on the company's internal portal. To mitigate this risk, she recommends obtaining a digital certificate from a trusted entity. Which of the following is responsible for issuing such certificates?",
      "options": [
        {
          "id": "A",
          "text": "Key distribution center"
        },
        {
          "id": "B",
          "text": "Certificate authority (CA)"
        },
        {
          "id": "C",
          "text": "Tokenization system"
        },
        {
          "id": "D",
          "text": "Security incident event manager"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Certificate authorities (CAs) are trusted entities responsible for issuing, validating, and revoking digital certificates. These certificates are used to authenticate entities on the internet, such as websites, ensuring secure and authenticated communications, thus mitigating the risk of man-in-the-middle attacks. [cite: 694, 695]"
    },
    {
      "id": "q87",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution is looking to adopt an encryption algorithm for its transactions that is considered to be very secure due to its longer key length, compared to older standards. Which encryption algorithm best fits this description?",
      "options": [
        {
          "id": "A",
          "text": "DES"
        },
        {
          "id": "B",
          "text": "Blowfish"
        },
        {
          "id": "C",
          "text": "RSA"
        },
        {
          "id": "D",
          "text": "AES-256"
        }
      ],
      "correctOptionId": "D",
      "explanation": "AES-256, part of the Advanced Encryption Standard (AES) family, utilizes a 256-bit key length. This extended key length provides a higher degree of security and is considered resistant to all known practical attacks when used properly. [cite: 695]"
    },
    {
      "id": "q88",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alice receives an email from Bob with an attached document. She wants to verify both the authenticity of the sender and the integrity of the attached document. Which of the following should Bob have used before sending the email?",
      "options": [
        {
          "id": "A",
          "text": "Encrypt the document with his private key"
        },
        {
          "id": "B",
          "text": "Hash the document"
        },
        {
          "id": "C",
          "text": "Encrypt the document with Alice's public key"
        },
        {
          "id": "D",
          "text": "Sign the document with his private key"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Digital signatures are created by taking a hash of a message (or document) and then encrypting that hash with the sender’s private key. When Alice receives the email, she can decrypt the signature using Bob’s public key to retrieve the original hash and then compare it with her computed hash of the document. If they match, it confirms both the sender’s identity (authenticity) and that the document has not been altered (integrity). [cite: 696]"
    },
    {
      "id": "q89",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a critical financial quarter, GlobalFin Corp experienced unexpected outages during peak business hours due to system maintenance, impacting its operations significantly. To prevent such occurrences in the future, what should GlobalFin Corp implement regarding their maintenance activities?",
      "options": [
        {
          "id": "A",
          "text": "Conduct maintenance activities randomly to avoid predictability"
        },
        {
          "id": "B",
          "text": "Implement maintenance activities during peak business hours"
        },
        {
          "id": "C",
          "text": "Establish designated maintenance windows"
        },
        {
          "id": "D",
          "text": "Reduce the frequency of maintenance activities"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Maintenance windows are specific time frames designated for system maintenance, ensuring that disruptions due to updates, patches, or other maintenance activities don’t occur during critical business hours. By setting these windows, usually during off-peak times, businesses can minimize operational disruptions. [cite: 696]"
    },
    {
      "id": "q90",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution wants to securely transfer transaction data between its main office and a branch office. The data should be encrypted while in transit to prevent any interception and unauthorized access. Which encryption solution is most suitable for securing the data during transport?",
      "options": [
        {
          "id": "A",
          "text": "Database-level Encryption"
        },
        {
          "id": "B",
          "text": "Full-disk Encryption"
        },
        {
          "id": "C",
          "text": "Transport-layer Encryption"
        },
        {
          "id": "D",
          "text": "File-level Encryption"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Transport-layer Encryption is specifically designed to protect data while it is in transit over a network. It ensures that the data remains confidential and is not tampered with during transmission. For the financial institution, this approach would be most effective in securing the transaction data between offices. [cite: 697]"
    },
    {
      "id": "q91",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent software update, a company's intranet portal has been inaccessible to a few employees. The IT team suspects it could be due to network filtering rules. What should the IT team review to confirm their suspicions?",
      "options": [
        {
          "id": "A",
          "text": "The content filtering policies"
        },
        {
          "id": "B",
          "text": "The malware detection logs"
        },
        {
          "id": "C",
          "text": "The allow list/deny list configurations"
        },
        {
          "id": "D",
          "text": "The network bandwidth utilization graphs"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Network accessibility issues, especially after software or configuration changes, can often arise due to misconfigured allow lists or deny lists. Reviewing these configurations can help determine if specific IP addresses or domains have been incorrectly blocked or not allowed, causing the inaccessibility issues. [cite: 698]"
    },
    {
      "id": "q92",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A user wants to send a confidential email to their colleague and ensure that only the intended recipient can read it. The user also wants to provide assurance to the recipient that the email was indeed sent by them. Which encryption method should the user employ to accomplish this?",
      "options": [
        {
          "id": "A",
          "text": "Use symmetric encryption with a shared key"
        },
        {
          "id": "B",
          "text": "Use asymmetric encryption and encrypt the email with the recipient's public key"
        },
        {
          "id": "C",
          "text": "Use asymmetric encryption, encrypt the email with the user's private key"
        },
        {
          "id": "D",
          "text": "Use asymmetric encryption, first sign the email with the user's private key, then encrypt it with the recipient's public key"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Option D offers both **confidentiality** and **non-repudiation**. The email is encrypted with the recipient’s public key, ensuring only the recipient can decrypt it using their private key. Signing the email with the sender’s private key allows the recipient to verify the sender using the sender’s public key. [cite: 698]"
    },
    {
      "id": "q93",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A user, Amy, wants to securely send a confidential document to her colleague, Bob. Amy decides to encrypt the document to ensure its confidentiality. Which of the following should Amy use to encrypt the document, ensuring only Bob can decrypt it?",
      "options": [
        {
          "id": "A",
          "text": "Amy's private key"
        },
        {
          "id": "B",
          "text": "Amy's public key"
        },
        {
          "id": "C",
          "text": "Bob's private key"
        },
        {
          "id": "D",
          "text": "Bob's public key"
        }
      ],
      "correctOptionId": "D",
      "explanation": "In asymmetric encryption, if a message is encrypted with an individual’s **public key**, only the corresponding **private key** can decrypt it. Therefore, to ensure Bob is the only person who can decrypt the document, Amy should encrypt it using **Bob's public key**. [cite: 699]"
    },
    {
      "id": "q94",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cybersecurity analyst is investigating a suspicious image file received via email. Upon closer examination, the analyst suspects that the image might be carrying hidden data because the file size is unusually large. Which technique might the sender have used to embed secret information within the image?",
      "options": [
        {
          "id": "A",
          "text": "Symmetric encryption"
        },
        {
          "id": "B",
          "text": "Digital watermarking"
        },
        {
          "id": "C",
          "text": "Steganography"
        },
        {
          "id": "D",
          "text": "Hashing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Steganography is the practice of hiding information within another form of data. In this case, the analyst suspects that an image file is carrying hidden data due to its unusually large size, which is a common indicator of steganographic practices. [cite: 700]"
    },
    {
      "id": "q95",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is preparing to roll out a new infrastructure deployment for its internal network. They have a server that will store both highly confidential customer information and non-sensitive marketing material. The IT department wants to ensure that only the confidential data is encrypted, while the marketing data remains easily accessible. Which level of encryption would be most suitable for this scenario?",
      "options": [
        {
          "id": "A",
          "text": "File-level Encryption"
        },
        {
          "id": "B",
          "text": "Full-disk Encryption"
        },
        {
          "id": "C",
          "text": "Partition Encryption"
        },
        {
          "id": "D",
          "text": "Transport-layer Encryption"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Partition Encryption allows specific partitions or volumes of a storage drive to be encrypted. By encrypting only the partition that contains confidential data, the company can ensure the security of sensitive information while leaving other partitions, such as the one with marketing material, unencrypted for easy access. [cite: 700]"
    },
    {
      "id": "q96",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah, a cybersecurity analyst, receives a report that a company laptop was stolen from an employee's car. The laptop contained sensitive financial data. Sarah checked the company's security configurations and found that the laptop was equipped with full-disk encryption. How does this impact the potential data breach situation?",
      "options": [
        {
          "id": "A",
          "text": "The data remains easily accessible, as only the boot sector was encrypted"
        },
        {
          "id": "B",
          "text": "The data is protected, as the entire hard drive's contents are encrypted"
        },
        {
          "id": "C",
          "text": "The data is partially encrypted, with only the user directories protected"
        },
        {
          "id": "D",
          "text": "The data is vulnerable since full-disk encryption only applies when the laptop is connected to the company network"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Full-disk Encryption (FDE) encrypts the entirety of a hard drive, ensuring that all its contents, including system and user files, are unreadable without the appropriate decryption key or credentials. As such, even if the laptop is stolen, the data remains secured unless the attacker has the decryption key. [cite: 701]"
    },
    {
      "id": "q97",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A university's IT department provides access to its student records for training purposes to new hires. To protect student identities, they replace the real names and social security numbers with fictitious ones while maintaining the database's original format. Which technique is the IT department utilizing?",
      "options": [
        {
          "id": "A",
          "text": "Digital signing"
        },
        {
          "id": "B",
          "text": "Data masking"
        },
        {
          "id": "C",
          "text": "Steganography"
        },
        {
          "id": "D",
          "text": "Data deduplication"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Data masking protects the data subject’s data privacy by obscuring specific data within a database, making the data unreadable and unusable, especially in non-production environments. It is commonly used for testing and development purposes. [cite: 702]"
    },
    {
      "id": "q98",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is looking for a cryptographic solution that provides an immutable and transparent record of all transactions in a distributed ledger system. Which of the following would BEST meet this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Symmetric key algorithm"
        },
        {
          "id": "B",
          "text": "Public key infrastructure"
        },
        {
          "id": "C",
          "text": "Blockchain"
        },
        {
          "id": "D",
          "text": "Digital watermark"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Blockchain is a decentralized and distributed ledger technology that provides an immutable record of transactions. Each block contains a list of transactions and is linked to the previous block, creating a chain. The transparency and immutability of blockchain make it especially suitable for applications where an irrefutable record is essential. [cite: 702]"
    },
    {
      "id": "q99",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An IT manager is considering solutions to protect data stored on the laptops provided to remote employees. The primary concern is to ensure that the entire content of the laptop's storage drive is unreadable if a laptop is lost or stolen. Which encryption level would best address this concern?",
      "options": [
        {
          "id": "A",
          "text": "File-level Encryption"
        },
        {
          "id": "B",
          "text": "Transport-layer Encryption"
        },
        {
          "id": "C",
          "text": "Full-disk Encryption"
        },
        {
          "id": "D",
          "text": "Database-level Encryption"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Full-disk Encryption (FDE) encrypts the entire storage drive, making all data on the drive unreadable without the correct decryption key or credentials. This is especially useful for portable devices like laptops, which are more vulnerable to physical theft. [cite: 703]"
    },
    {
      "id": "q100",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The finance department at a large firm still relies on a legacy application for their quarterly reporting. This application is known to have some security flaws, but due to its critical nature, it cannot be easily replaced. How can the firm BEST mitigate the risks associated with this application?",
      "options": [
        {
          "id": "A",
          "text": "Train the finance team about the latest cybersecurity threats"
        },
        {
          "id": "B",
          "text": "Run the legacy application on the latest hardware to improve performance"
        },
        {
          "id": "C",
          "text": "Place the legacy application behind a web application firewall (WAF)"
        },
        {
          "id": "D",
          "text": "Frequently change the passwords of users who have access to the application"
        }
      ],
      "correctOptionId": "C",
      "explanation": "By placing the application behind a WAF, the firm can filter, monitor, and block malicious HTTP traffic targeting the application’s vulnerabilities, thereby offering a layer of protection against potential security flaws in the legacy application. [cite: 704]"
    },
    {
      "id": "q101",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational corporation is concerned about the possibility of losing access to encrypted data due to the loss or compromise of private keys. They've approached a third-party organization for a solution. Which of the following is a system that allows the third party to securely hold a copy of the corporation's cryptographic keys to ensure data recoverability?",
      "options": [
        {
          "id": "A",
          "text": "Public Key Repository"
        },
        {
          "id": "B",
          "text": "Key Generation Center"
        },
        {
          "id": "C",
          "text": "Key Escrow"
        },
        {
          "id": "D",
          "text": "Key Renewal Service"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Key escrow is a system in which cryptographic keys are securely stored with a third party, so they can be retrieved in cases where the original keys are lost or compromised. This ensures data recoverability while maintaining security. [cite: 704]"
    },
    {
      "id": "q102",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution plans to provide access to its database for third-party developers to create new applications. However, they want to ensure that the developers do not see the actual data but instead work with a disguised version that retains the data’s original structure. What technique is the financial institution considering?",
      "options": [
        {
          "id": "A",
          "text": "Tokenization"
        },
        {
          "id": "B",
          "text": "Data masking"
        },
        {
          "id": "C",
          "text": "Encryption"
        },
        {
          "id": "D",
          "text": "Digital watermarking"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Data masking is a technique that obscures specific data within a database, making the data unreadable and unusable. The method is often employed in non-production environments to protect the data subject’s data privacy and data security. [cite: 705]"
    },
    {
      "id": "q103",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "NexTech, a cloud-based software company, recently faced a security breach due to inconsistent practices among its system administrators. To avoid such inconsistencies in the future, what should NexTech emphasize in its operations?",
      "options": [
        {
          "id": "A",
          "text": "Rely on system administrators to develop their personal methods"
        },
        {
          "id": "B",
          "text": "Mandate frequent system reboots"
        },
        {
          "id": "C",
          "text": "Implement Standard Operating Procedures (SOPs) for all technical operations"
        },
        {
          "id": "D",
          "text": "Conduct random security audits without notifying administrators"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Standard Operating Procedures (SOPs) provide a consistent and documented process that employees can follow. By implementing SOPs, businesses ensure that tasks are performed uniformly, reducing the risk of errors and inconsistencies that might lead to security vulnerabilities. [cite: 706]"
    },
    {
      "id": "q104",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a series of system enhancements, a financial organization decided to use a manual method of documenting changes in separate files rather than implementing a version control system. During an audit, the cybersecurity team struggled to determine which version of a critical system file was the most recent and accurate. What is the PRIMARY risk of not implementing version control for such documentation?",
      "options": [
        {
          "id": "A",
          "text": "Increased storage requirements for multiple files"
        },
        {
          "id": "B",
          "text": "Difficulty in collaborating between team members"
        },
        {
          "id": "C",
          "text": "Lack of traceability and difficulty in reverting to a known stable state"
        },
        {
          "id": "D",
          "text": "Greater need for training staff on manual documentation"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Version control provides a clear history of changes, ensuring easy reversion to a known stable state, and identifying the latest version of a document or system file. In the absence of version control, identifying the most recent and accurate version can be challenging. [cite: 706]"
    },
    {
      "id": "q105",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a security audit, it was found that an application was using plain hashes for storing passwords. The security team recommended a method that involves using the original password along with a salt and then rehashing it multiple times. What is this method known as?",
      "options": [
        {
          "id": "A",
          "text": "Key clustering"
        },
        {
          "id": "B",
          "text": "Rainbow table prevention"
        },
        {
          "id": "C",
          "text": "Key rotation"
        },
        {
          "id": "D",
          "text": "Key stretching"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Key stretching refers to the process of taking a password and, usually in combination with a salt, hashing it multiple times. This repeated hashing process makes brute-force attacks more time-consuming and difficult because the attacker has to not only guess the password but also apply the hashing function the same number of times the original process used. [cite: 707]"
    },
    {
      "id": "q106",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine update, a web server application requires a restart. What should the administrator do FIRST to ensure client connections aren’t abruptly terminated during the restart?",
      "options": [
        {
          "id": "A",
          "text": "Redirect incoming traffic to a backup server"
        },
        {
          "id": "B",
          "text": "Increase the server's memory"
        },
        {
          "id": "C",
          "text": "Manually terminate all active client sessions"
        },
        {
          "id": "D",
          "text": "Check for available patches for the application"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Redirecting incoming traffic ensures that clients are not abruptly disconnected and instead can continue their activities on a backup server while the primary server undergoes a restart. [cite: 708]"
    },
    {
      "id": "q107",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Carlos is responsible for managing IT services for a university. The university has numerous departments, each with its subdomain, like arts.university.com, science.university.com, and sports.university.com. Carlos wants a solution that ensures HTTPS security while being cost-effective. However, he's wary of potential risks. What might be a drawback of using a Wildcard Certificate for the university's subdomains?",
      "options": [
        {
          "id": "A",
          "text": "It can secure only one subdomain"
        },
        {
          "id": "B",
          "text": "If compromised, all subdomains are at risk"
        },
        {
          "id": "C",
          "text": "It only validates the domain ownership, not the organization's identity"
        },
        {
          "id": "D",
          "text": "It's the most expensive certificate available"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The primary concern with a Wildcard Certificate is that if its private key is compromised, it jeopardizes the security of all associated subdomains. This poses a significant risk since the exposure of a single key could lead to potential attacks or misuse across all subdomains. [cite: 707, 708]"
    },
    {
      "id": "q108",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Your organization is preparing to upgrade a database server that supports an e-commerce application. A review of the change management documentation has revealed that multiple applications rely on this particular database server for various functionalities. Which of the following steps should be taken FIRST to ensure a smooth upgrade process without disruptions?",
      "options": [
        {
          "id": "A",
          "text": "Upgrade the database server immediately to benefit from new features"
        },
        {
          "id": "B",
          "text": "Perform a backup of the database server"
        },
        {
          "id": "C",
          "text": "Identify and test all applications that have dependencies on the database server"
        },
        {
          "id": "D",
          "text": "Inform users about potential downtime during the upgrade"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Before making changes, especially to systems with multiple dependencies, it’s crucial to understand the full scope of potential impacts. By identifying and testing all dependent applications, you ensure that the upgrade won’t inadvertently disrupt other services or functionalities. [cite: 709]"
    },
    {
      "id": "q109",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent data breach, a multinational corporation is evaluating its cryptographic practices. The Chief Security Officer (CSO) determines that the manual management of cryptographic keys has become too complex due to the scale of the operations. Which tool would BEST address the CSO’s concern while ensuring robust security practices?",
      "options": [
        {
          "id": "A",
          "text": "Password Management System"
        },
        {
          "id": "B",
          "text": "Secure File Transfer Protocol (SFTP)"
        },
        {
          "id": "C",
          "text": "Trusted Platform Module (TPM)"
        },
        {
          "id": "D",
          "text": "Key Management System (KMS)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A Key Management System (KMS) is specifically designed to handle the generation, distribution, rotation, and retirement of cryptographic keys in a centralized and automated manner. For large organizations, using a KMS streamlines and secures the complex task of key management. [cite: 710]"
    },
    {
      "id": "q110",
      "domain": "General Security Concepts",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a quarterly review, the IT team at a logistics company decided to change the configuration of their load balancers to better distribute traffic among their servers. After the change, a series of technical issues emerged, affecting customer-facing applications. When troubleshooting the issue, it was discovered that the network diagrams had not been updated to reflect the new changes. What is the MAJOR consequence of not having updated diagrams in such a scenario?",
      "options": [
        {
          "id": "A",
          "text": "The servers might need a hardware upgrade"
        },
        {
          "id": "B",
          "text": "The company might need to revert to the old load balancer configuration"
        },
        {
          "id": "C",
          "text": "It increases the time and complexity of troubleshooting"
        },
        {
          "id": "D",
          "text": "Customers might prefer other logistics companies"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Accurate and up-to-date documentation, including network diagrams, is crucial for effective troubleshooting. Without it, IT teams can spend unnecessary time trying to understand the current state of the system, delaying the resolution of the issue. [cite: 711]"
    },
    {
      "id": "q111",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medium-sized company suffered a data breach. Investigations revealed that an attacker from a rival firm had exploited a misconfigured firewall to gain unauthorized access to the company’s database. Based on the attributes of the actor, how would this threat actor be best described?",
      "options": [
        {
          "id": "A",
          "text": "Internal actor leveraging physical access"
        },
        {
          "id": "B",
          "text": "Internal actor abusing privileges"
        },
        {
          "id": "C",
          "text": "External actor using social engineering"
        },
        {
          "id": "D",
          "text": "External actor exploiting technical vulnerabilities"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The attacker originated from outside the victim organization (a rival firm) and exploited a technical issue (misconfigured firewall) to gain access. This categorizes them as an external actor exploiting technical vulnerabilities. [cite: 738]"
    },
    {
      "id": "q112",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sophia, the CFO of a medium-sized company, received a call from an individual claiming to be from the IT department. The caller requested her login details for a “critical system update.” Suspecting something wasn’t right, Sophia hung up and contacted her IT department, which confirmed no such call was made by them. Which type of attack did Sophia most likely experience?",
      "options": [
        {
          "id": "A",
          "text": "Vishing"
        },
        {
          "id": "B",
          "text": "Phishing"
        },
        {
          "id": "C",
          "text": "SQL Injection"
        },
        {
          "id": "D",
          "text": "Cross-Site Request Forgery (CSRF)"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Vishing, or voice phishing, is an attack where fraudsters use the telephone to mislead individuals into revealing personal information or login credentials. [cite: 738]"
    },
    {
      "id": "q113",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During an incident response, the IT team discovers malware that collects information about military projects. The malware sends the data to a server located in a foreign country. Which type of threat actor would MOST likely be involved in this type of cyber espionage?",
      "options": [
        {
          "id": "A",
          "text": "Disgruntled employee"
        },
        {
          "id": "B",
          "text": "Nation-state"
        },
        {
          "id": "C",
          "text": "Phishing scam artist"
        },
        {
          "id": "D",
          "text": "Hacktivist"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Malware that specifically targets information about military projects and sends data to a foreign server is indicative of cyber espionage, a tactic commonly employed by nation-states. They have the motivation to gather intelligence and potentially disrupt or gain advantages over other nations, particularly concerning military or defense-related data. [cite: 739]"
    },
    {
      "id": "q114",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company’s website was temporarily defaced with a humorous meme, but no sensitive data was stolen or any significant damage done. The attacker left a message bragging about their first successful hack. Which type of threat actor is MOST likely responsible for this attack?",
      "options": [
        {
          "id": "A",
          "text": "Insider threat"
        },
        {
          "id": "B",
          "text": "Advanced Persistent Threat (APT)"
        },
        {
          "id": "C",
          "text": "Unskilled attacker"
        },
        {
          "id": "D",
          "text": "Nation-state"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Unskilled attackers, often referred to as “script kiddies”, typically utilize pre-made tools or scripts to carry out basic attacks. Their motivations are often more about bragging rights or minor mischief, such as defacing a website for fun or to prove they can, rather than executing a sophisticated or damaging attack. [cite: 740]"
    },
    {
      "id": "q115",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A new technology firm recently launched a device that uses facial recognition for authentication. A cybersecurity researcher, without any malicious intent, demonstrated a method to bypass the facial recognition using a photograph. The researcher then approached the firm with the findings without publicizing it. What is the primary motivation behind the researcher’s action?",
      "options": [
        {
          "id": "A",
          "text": "Philosophical beliefs opposing facial recognition"
        },
        {
          "id": "B",
          "text": "Financial gain by blackmailing the firm"
        },
        {
          "id": "C",
          "text": "Ethical considerations for consumer security"
        },
        {
          "id": "D",
          "text": "Aiming to damage the firm's market reputation"
        }
      ],
      "correctOptionId": "C",
      "explanation": "By responsibly disclosing the vulnerability to the firm without any malicious intent or publicizing it, the researcher showcased ethical motivations, aiming to improve consumer security. [cite: 740, 741]"
    },
    {
      "id": "q116",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Mike, a network administrator, notices an unauthorized device connected directly to the company’s main network switch in the server room. This device is attempting to capture network traffic. What kind of attack is this unauthorized device likely conducting?",
      "options": [
        {
          "id": "A",
          "text": "Rogue access point"
        },
        {
          "id": "B",
          "text": "VLAN hopping"
        },
        {
          "id": "C",
          "text": "Port mirroring"
        },
        {
          "id": "D",
          "text": "ARP poisoning"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Port mirroring is a method used on a network switch to send a copy of network packets seen on one switch port (or an entire VLAN) to a network monitoring connection on another switch port. An attacker can use this method to capture and analyze the traffic without interfering with the flow of the original packets. [cite: 741]"
    },
    {
      "id": "q117",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alex, an employee at XYZ Corp, noticed an unfamiliar USB drive lying in the company parking lot. Out of curiosity, Alex plugged the device into his workstation. Almost immediately, his antivirus program detected malicious software trying to execute. What type of attack did Alex likely encounter?",
      "options": [
        {
          "id": "A",
          "text": "Man-in-the-Middle Attack"
        },
        {
          "id": "B",
          "text": "Evil Twin"
        },
        {
          "id": "C",
          "text": "Spear Phishing"
        },
        {
          "id": "D",
          "text": "USB Drop Attack"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A USB Drop Attack involves leaving malware-infected removable devices, such as USB drives, in places where they can be found and used by unsuspecting individuals. Once the device is plugged into a computer, it can potentially execute malicious software or scripts. [cite: 742]"
    },
    {
      "id": "q118",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company named TechFlow is planning to produce a new line of smart home devices. They have opted to use a single supplier for a crucial component in their devices. Which of the following represents the MOST significant security risk associated with this decision?",
      "options": [
        {
          "id": "A",
          "text": "It will be challenging to negotiate prices with just one supplier"
        },
        {
          "id": "B",
          "text": "If the supplier's delivery timeline is delayed, product launch might be postponed"
        },
        {
          "id": "C",
          "text": "A compromise at the supplier could lead to vulnerabilities in all devices"
        },
        {
          "id": "D",
          "text": "TechFlow will need to rely on the supplier's warranty and return policies"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Relying on a single supplier means that any security issues at that supplier’s end might translate directly into vulnerabilities in every device using that component. In a supply chain, the security of every entity is paramount. [cite: 743]"
    },
    {
      "id": "q119",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A high-profile executive received an email containing personal photos and a message threatening to release the images to the public unless a significant sum of money was transferred to a specific cryptocurrency address. What motivation is most evident behind this threat?",
      "options": [
        {
          "id": "A",
          "text": "Espionage to gather competitive intelligence"
        },
        {
          "id": "B",
          "text": "Service disruption to harm the reputation of the executive's company"
        },
        {
          "id": "C",
          "text": "Blackmail to extract money by leveraging sensitive information"
        },
        {
          "id": "D",
          "text": "Data exfiltration for selling on the dark web"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The direct threat of releasing personal photos in exchange for money is a classic indication of blackmail. The attacker is leveraging sensitive information (personal photos) to extort money. [cite: 744]"
    },
    {
      "id": "q120",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jane, an accountant in a multinational corporation, received an email from what seemed to be the company’s IT department. The email had the company’s logo, colors, and font and urged Jane to click on a link to reset her password due to “suspicious activity.” However, upon close inspection, Jane noticed a minor spelling error in the domain name of the sender’s email address. What type of attack does this scenario describe?",
      "options": [
        {
          "id": "A",
          "text": "Spear Phishing"
        },
        {
          "id": "B",
          "text": "Vishing"
        },
        {
          "id": "C",
          "text": "Baiting"
        },
        {
          "id": "D",
          "text": "Brand Impersonation"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Brand impersonation involves attackers mimicking or replicating the branding of a reputable company or organization in an attempt to trick users into thinking the communication is legitimate. [cite: 744]"
    },
    {
      "id": "q121",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine scan, the security team at a graphic design firm discovers that an employee downloaded an image from an email and subsequently, unusual network traffic was detected originating from that employee’s workstation. The image appeared normal when opened. What type of attack might have been used in this situation?",
      "options": [
        {
          "id": "A",
          "text": "Image Steganography Malware"
        },
        {
          "id": "B",
          "text": "Password Brute Force"
        },
        {
          "id": "C",
          "text": "Phishing"
        },
        {
          "id": "D",
          "text": "Port Scanning"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video. Image steganography specifically involves hiding malicious code within an image. When the image is downloaded or opened, the malicious code can be executed without the victim’s knowledge. [cite: 745]"
    },
    {
      "id": "q122",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Acme Corp, a large organization, has recently entered into a contract with Zenith MSP for IT management and support. The CISO of Acme Corp is concerned about the security risks associated with this new relationship. Which of the following is the PRIMARY security concern when utilizing managed service providers (MSPs) in a supply chain?",
      "options": [
        {
          "id": "A",
          "text": "Increased costs due to the integration of new technologies"
        },
        {
          "id": "B",
          "text": "Difficulty in ensuring consistent patch management"
        },
        {
          "id": "C",
          "text": "Potential for unauthorized access to company resources"
        },
        {
          "id": "D",
          "text": "Decreased IT staff morale due to outsourcing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Managed Service Providers usually have elevated privileges to provide their services, potentially making them a prime target for attackers. A breach at the MSP level can lead to unauthorized access to their client’s resources. [cite: 746]"
    },
    {
      "id": "q123",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Mike, an employee at a tech company, receives an instant message from a coworker named Jessica. The message contains a link and claims to showcase a hilarious video. However, Mike knows Jessica is on vacation. He suspects the message might not genuinely be from her. What type of threat is Mike most likely encountering?",
      "options": [
        {
          "id": "A",
          "text": "Watering Hole Attack"
        },
        {
          "id": "B",
          "text": "Man-in-the-Middle Attack"
        },
        {
          "id": "C",
          "text": "IM Spoofing"
        },
        {
          "id": "D",
          "text": "Side-channel Attack"
        }
      ],
      "correctOptionId": "C",
      "explanation": "IM Spoofing occurs when an attacker sends messages to a system that appear to come from a trusted source, typically a known contact. By pretending to be someone the victim knows, the attacker can deceive the victim into opening a malicious link or sharing confidential information. [cite: 746]"
    },
    {
      "id": "q124",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a political campaign, an anonymous group releases a series of articles containing fabricated data about a candidate’s past, intending to influence voters’ opinions. This is an example of:",
      "options": [
        {
          "id": "A",
          "text": "Impersonation"
        },
        {
          "id": "B",
          "text": "SSmishing"
        },
        {
          "id": "C",
          "text": "Disinformation"
        },
        {
          "id": "D",
          "text": "Baiting"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The spread of deliberately false information to deceive or harm, especially in sensitive areas like politics, is classified as disinformation. [cite: 747]"
    },
    {
      "id": "q125",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sophia received an email from her bank asking her to urgently update her personal details due to a system upgrade. The email contains a link that redirects to a website that looks similar to her bank’s website. Which of the following should she do FIRST?",
      "options": [
        {
          "id": "A",
          "text": "Follow the link and promptly update her personal details to avoid any inconvenience"
        },
        {
          "id": "B",
          "text": "Forward the email to her friends and family to ensure they are also aware of the bank's system upgrade"
        },
        {
          "id": "C",
          "text": "Delete the email immediately without taking any action"
        },
        {
          "id": "D",
          "text": "Contact her bank through official channels to verify the authenticity of the email"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Before taking action based on an unsolicited email, especially one that asks for personal information or credentials, it’s essential to verify its legitimacy directly with the institution or entity it claims to represent. [cite: 748, 749]"
    },
    {
      "id": "q126",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A user receives an SMS claiming to be from her bank, alerting her of unauthorized activity on her account. The message instructs the user to immediately click on a provided link and verify her account details. The user hasn’t noticed any irregularities with her bank account. Which type of attack is this SMS most likely part of?",
      "options": [
        {
          "id": "A",
          "text": "Smishing"
        },
        {
          "id": "B",
          "text": "Vishing"
        },
        {
          "id": "C",
          "text": "Bluejacking"
        },
        {
          "id": "D",
          "text": "Bluesnarfing"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Smishing is a type of phishing attack where malicious actors use SMS to deceive individuals into providing sensitive information, typically by impersonating trusted organizations or contacts. [cite: 748, 749]"
    },
    {
      "id": "q127",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce platform reported a series of breaches over the past month. With each breach, financial and personal data of thousands of users were exfiltrated. The perpetrators subsequently sold the data on the dark web. Which type of threat actor is MOST likely behind these breaches?",
      "options": [
        {
          "id": "A",
          "text": "Insider threat"
        },
        {
          "id": "B",
          "text": "Hacktivist"
        },
        {
          "id": "C",
          "text": "Organized crime syndicate"
        },
        {
          "id": "D",
          "text": "Nation-state"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Organized crime syndicates are primarily motivated by financial gains. The act of exfiltrating financial and personal data from an e-commerce platform, only to sell it on the dark web, aligns with the profit-driven motives of organized crime groups. [cite: 750]"
    },
    {
      "id": "q128",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alex, a new intern at an IT company, wanted to access the internal company portal. Instead of typing “companyportal.com,” he accidentally typed “comapnyportal.com” and ended up on a site that looked identical but asked him to download a security certificate. This scenario best describes which type of attack?",
      "options": [
        {
          "id": "A",
          "text": "Spear Phishing"
        },
        {
          "id": "B",
          "text": "Watering Hole Attack"
        },
        {
          "id": "C",
          "text": "Typosquatting"
        },
        {
          "id": "D",
          "text": "Man-in-the-Middle"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Typosquatting, also known as URL hijacking, involves attackers registering domains that are misspellings of popular websites. The attacker relies on typographical errors made by users when inputting a URL into a web browser, then potentially tries to exploit the user in some manner on the deceptive site. [cite: 750, 751]"
    },
    {
      "id": "q129",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A major pharmaceutical company recently announced an increase in drug prices. Following the announcement, their website was taken offline by a DDoS attack, with a message posted online by a group claiming responsibility and demanding affordable healthcare for all. Which type of threat actor is MOST likely behind this attack?",
      "options": [
        {
          "id": "A",
          "text": "Unskilled attacker"
        },
        {
          "id": "B",
          "text": "Insider threat"
        },
        {
          "id": "C",
          "text": "Hacktivist"
        },
        {
          "id": "D",
          "text": "Nation-state"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Hacktivists are typically driven by political, social, or ideological motives. They use cyber attacks as a means to promote or protest certain issues. In this scenario, the attack on the pharmaceutical company is a form of protest against their pricing policies, making it characteristic of hacktivist behavior. [cite: 751]"
    },
    {
      "id": "q130",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A government agency experienced a cyber incident where its communication platforms were breached. The intruders were not interested in extracting sensitive data or causing disruptions but were observed to be silently monitoring diplomatic communications for an extended period. What was the likely motivation of the attackers?",
      "options": [
        {
          "id": "A",
          "text": "To gain financial benefits from insider trading"
        },
        {
          "id": "B",
          "text": "Espionage to understand and anticipate diplomatic moves"
        },
        {
          "id": "C",
          "text": "Disgruntlement of an internal employee"
        },
        {
          "id": "D",
          "text": "An attempt to expand their cybercriminal network"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Silently monitoring diplomatic communications without exfiltrating data or causing disruptions indicates a motivation to understand, anticipate, and potentially manipulate governmental or diplomatic actions. This is a classic example of espionage. [cite: 752]"
    },
    {
      "id": "q131",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Employees at a renowned software development firm frequently visit an industry-related forum to discuss the latest trends and technologies. Over the past month, several employees reported malware infections shortly after accessing the forum. An investigation suggests the forum was compromised to target the company’s developers specifically. Which type of attack most accurately describes this scenario?",
      "options": [
        {
          "id": "A",
          "text": "Spear Phishing"
        },
        {
          "id": "B",
          "text": "Watering Hole"
        },
        {
          "id": "C",
          "text": "Drive-by Download"
        },
        {
          "id": "D",
          "text": "Whaling"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A watering hole attack involves compromising a website or online resource frequented by members of a particular group or organization. The attack focused on a particular site that employees at the targeted organization are known to visit, intending to compromise those specific individuals. [cite: 752, 753]"
    },
    {
      "id": "q132",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cybersecurity analyst has noticed a series of sophisticated attacks against critical infrastructure systems in their country. The attacks are highly coordinated, well-funded, and appear to have specific geopolitical objectives. Which type of threat actor is MOST likely responsible for these attacks?",
      "options": [
        {
          "id": "A",
          "text": "Organized crime syndicates"
        },
        {
          "id": "B",
          "text": "Script kiddies"
        },
        {
          "id": "C",
          "text": "Insider threat"
        },
        {
          "id": "D",
          "text": "Nation-state"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Sophisticated, coordinated, and well-funded attacks against national critical infrastructure with clear geopolitical objectives align most closely with the characteristics and motivations of nation-state actors. They often have vast resources and specific political or strategic motives. [cite: 753]"
    },
    {
      "id": "q133",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A small business detected unauthorized access to its website. The attacker used default login credentials to gain access. What level of sophistication and capability does this attack suggest about the threat actor?",
      "options": [
        {
          "id": "A",
          "text": "Script kiddie with basic skills"
        },
        {
          "id": "B",
          "text": "Expert attacker leveraging advanced techniques"
        },
        {
          "id": "C",
          "text": "Nation-state actor with strategic objectives"
        },
        {
          "id": "D",
          "text": "Organized crime syndicate targeting high-value assets"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Using default login credentials for unauthorized access typically indicates a low level of sophistication, as this method is basic and requires little to no technical skill. Such attackers, often termed “script kiddies,” usually exploit known vulnerabilities with pre-existing tools or scripts without fully understanding them. [cite: 754]"
    },
    {
      "id": "q134",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Tech Enterprises is planning to release a new product. As part of the product’s creation, they’ve sourced components from various vendors. The security team is tasked with assessing risks linked to the supply chain. Which of the following is the MOST concerning risk when sourcing components from multiple vendors?",
      "options": [
        {
          "id": "A",
          "text": "Difficulty in tracking product warranty details from multiple vendors"
        },
        {
          "id": "B",
          "text": "Increased product assembly time due to varied vendor delivery timelines"
        },
        {
          "id": "C",
          "text": "Potential for introduction of insecure or compromised components"
        },
        {
          "id": "D",
          "text": "The need for multiple purchase orders, leading to increased paperwork"
        }
      ],
      "correctOptionId": "C",
      "explanation": "When components are sourced from multiple vendors, there is a heightened risk that one or more components might have vulnerabilities or could be compromised, thus impacting the security of the overall product. [cite: 755]"
    },
    {
      "id": "q135",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An employee of XYZ Corp downloaded a seemingly benign PDF file from a vendor’s website. After opening the PDF, the company’s intrusion detection system (IDS) alerted the security team about suspicious activity originating from the employee’s computer. The PDF file most likely contained which of the following threats?",
      "options": [
        {
          "id": "A",
          "text": "Watering Hole Attack"
        },
        {
          "id": "B",
          "text": "Malicious Macro"
        },
        {
          "id": "C",
          "text": "SQL Injection"
        },
        {
          "id": "D",
          "text": "Credential Harvesting"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Many document types, including PDFs, can contain macros. A malicious macro can execute unwanted actions, such as downloading and installing malware, when the document is opened. [cite: 755, 756]"
    },
    {
      "id": "q136",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "John, a security analyst, noticed an increase in unauthorized devices connecting to the company’s wireless network. To identify the reason, he realized that the wireless access points were still using an old encryption standard. Which outdated encryption standard is likely in use that is known to be easily compromised?",
      "options": [
        {
          "id": "A",
          "text": "WPA3"
        },
        {
          "id": "B",
          "text": "WEP"
        },
        {
          "id": "C",
          "text": "WPA2-PSK"
        },
        {
          "id": "D",
          "text": "AES"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Wired Equivalent Privacy (WEP) is an old and outdated encryption protocol for wireless networks. It has several known vulnerabilities and is considered insecure, making it easier for attackers to compromise. [cite: 756]"
    },
    {
      "id": "q137",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Lucy, a security analyst, is informed that several employees have been receiving unauthorized file transfer requests via Bluetooth when they are in the company’s cafeteria. Which of the following attacks is MOST likely being attempted?",
      "options": [
        {
          "id": "A",
          "text": "Bluejacking"
        },
        {
          "id": "B",
          "text": "ARP poisoning"
        },
        {
          "id": "C",
          "text": "Bluesnarfing"
        },
        {
          "id": "D",
          "text": "Evil Twin"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Bluejacking is the sending of unsolicited messages or files over Bluetooth to Bluetooth-enabled devices such as mobile phones, laptops, or PDAs. It is often used as a prank or to advertise to nearby people. [cite: 757]"
    },
    {
      "id": "q138",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Country A and Country B are engaged in an ongoing territorial dispute. Suddenly, critical infrastructure facilities in Country B, such as power plants and transportation hubs, experience systematic cyberattacks. No ransom demand is made, and the attacks lead to significant disruption. What is the most probable motivation behind these cyberattacks?",
      "options": [
        {
          "id": "A",
          "text": "Financial gain from market disruptions"
        },
        {
          "id": "B",
          "text": "Ethical hackers testing vulnerabilities"
        },
        {
          "id": "C",
          "text": "Disruption due to philosophical disagreements with Country B's policies"
        },
        {
          "id": "D",
          "text": "Acts of cyberwarfare to weaken Country B's position"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Given the context of the territorial dispute and the specific targeting of critical infrastructures without any ransom demand, it’s highly likely that these attacks were intended as acts of cyberwarfare by Country A or its sympathizers to exert pressure on Country B. [cite: 758]"
    },
    {
      "id": "q139",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Maria receives a text message on her phone from an unknown number, stating that she has won a gift card worth $500 from a popular online store. The message includes a link asking her to click on it to claim her prize. Maria is unsure about the authenticity of the message. Which of the following is the BEST course of action for Maria?",
      "options": [
        {
          "id": "A",
          "text": "Click the link to check if the website looks genuine"
        },
        {
          "id": "B",
          "text": "Forward the message to her friends to verify if they received a similar message"
        },
        {
          "id": "C",
          "text": "Delete the message without clicking on any links"
        },
        {
          "id": "D",
          "text": "Respond to the sender asking for more details about the offer"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Messages from unknown sources, especially those that sound too good to be true, often signal a potential security threat. It’s safest to delete such messages without interacting with any links. Smishing is a type of phishing attack wherein attackers use SMS to deceive users into divulging personal information. [cite: 758, 759]"
    },
    {
      "id": "q140",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A retail company recently suffered a breach where attackers encrypted all point-of-sale systems, rendering them unusable. A ransom note was then received, demanding payment in cryptocurrency to decrypt the systems. What motivation is most evident behind this attack?",
      "options": [
        {
          "id": "A",
          "text": "Protesting against the company's environmental policies"
        },
        {
          "id": "B",
          "text": "Financial gain through ransom"
        },
        {
          "id": "C",
          "text": "Espionage to understand the company's supply chain"
        },
        {
          "id": "D",
          "text": "Seeking a reputation boost by showing off technical skills"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The attackers encrypted critical systems and then demanded a ransom to decrypt them. The primary motive in such ransomware attacks is to achieve financial gain by compelling the victim to pay to regain access to their systems. [cite: 759]"
    },
    {
      "id": "q141",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company detected a DDoS attack that lasted for several weeks. The attackers used a botnet of millions of infected devices and frequently rotated attack vectors to bypass mitigation efforts. This prolonged and resource-intensive attack suggests which kind of threat actor’s resources and funding?",
      "options": [
        {
          "id": "A",
          "text": "Amateur hacker with minimal resources"
        },
        {
          "id": "B",
          "text": "Cybersecurity researcher testing vulnerabilities"
        },
        {
          "id": "C",
          "text": "Nation-state actor with strategic interests"
        },
        {
          "id": "D",
          "text": "Organized crime syndicate with substantial funding"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The scale and duration of the DDoS attack, combined with the use of a massive botnet and frequent rotation of attack vectors, point to a threat actor with significant resources. While nation-states could conduct such attacks, DDoS campaigns are also a hallmark of well-funded organized crime syndicates, especially when financial or strategic extortion could be a motive. [cite: 760]"
    },
    {
      "id": "q142",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In a routine security assessment, Claire found that a newly deployed database server within her organization is still using its default login credentials. Which of the following is the PRIMARY security risk associated with this finding?",
      "options": [
        {
          "id": "A",
          "text": "The database will not function optimally"
        },
        {
          "id": "B",
          "text": "The server will need frequent patches"
        },
        {
          "id": "C",
          "text": "Unauthorized individuals may easily gain access"
        },
        {
          "id": "D",
          "text": "The server will consume more bandwidth"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Default credentials are often publicly known, and if they are not changed, malicious actors can easily use them to gain unauthorized access to systems. [cite: 760, 761]"
    },
    {
      "id": "q143",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a major sports event, a broadcasting company’s streaming services were taken offline by a sudden surge in traffic. The attack continued for the duration of the event and then subsided. What was the most probable motivation behind this attack?",
      "options": [
        {
          "id": "A",
          "text": "Espionage to intercept sensitive communications"
        },
        {
          "id": "B",
          "text": "To cause a service disruption during the sports event"
        },
        {
          "id": "C",
          "text": "Data exfiltration for future ransom demands"
        },
        {
          "id": "D",
          "text": "To gain unauthorized access and implant malware"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The surge in traffic specifically timed with the sports event and its subsequent subsiding after the event indicates a targeted intention to disrupt the service during the sports event. [cite: 761]"
    },
    {
      "id": "q144",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An employee receives a call from someone claiming to be from the IT department. The caller says there’s an urgent update required on the employee’s computer and asks for login credentials to perform the update remotely. The employee becomes suspicious because of which red flag regarding impersonation?",
      "options": [
        {
          "id": "A",
          "text": "The caller did not use technical jargon"
        },
        {
          "id": "B",
          "text": "IT normally sends email notifications about updates"
        },
        {
          "id": "C",
          "text": "The employee was not expecting any updates"
        },
        {
          "id": "D",
          "text": "The caller's voice sounded unfamiliar"
        }
      ],
      "correctOptionId": "B",
      "explanation": "If the organization’s standard procedure is to send email notifications about updates, an unsolicited call asking for credentials would be a clear red flag. Recognizing deviations from standard procedures can help identify impersonation attempts. [cite: 762]"
    },
    {
      "id": "q145",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During an e-commerce website audit, a security analyst discovers that if a user tries to purchase a product and simultaneously cancels the order, the product sometimes gets added to the user’s cart without deducting any funds. This vulnerability can potentially be exploited to obtain products for free. Which vulnerability type is the e-commerce website susceptible to?",
      "options": [
        {
          "id": "A",
          "text": "Directory Traversal"
        },
        {
          "id": "B",
          "text": "Insecure Direct Object References (IDOR)"
        },
        {
          "id": "C",
          "text": "Race Condition"
        },
        {
          "id": "D",
          "text": "Cross-Site Request Forgery (CSRF)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "When an application’s unintended behavior is due to the timing of concurrent events or operations, it indicates a race condition. If two operations, which aren’t meant to happen simultaneously, occur at the same time, it can lead to unpredictable and unintended outcomes. [cite: 762, 763]"
    },
    {
      "id": "q146",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Maria, a network administrator, receives a report detailing several open service ports on critical company servers. She wants to verify the accuracy of the report. Which of the following tools would be BEST for Maria to use to validate the findings?",
      "options": [
        {
          "id": "A",
          "text": "Password cracker"
        },
        {
          "id": "B",
          "text": "Port scanner"
        },
        {
          "id": "C",
          "text": "IDS (Intrusion Detection System)"
        },
        {
          "id": "D",
          "text": "Web application firewall"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A port scanner, such as Nmap, sends packets to specific ports on a network and then listens for responses. This allows the scanner to determine which ports are open and potentially identify the services running on those ports. [cite: 764]"
    },
    {
      "id": "q147",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "John, a senior executive at XYZ Corp., gets a call from someone claiming to be from the bank’s fraud department. The caller asks John to confirm certain transactions by providing the OTP sent to his registered mobile number. What form of social engineering attack is John likely facing?",
      "options": [
        {
          "id": "A",
          "text": "Baiting"
        },
        {
          "id": "B",
          "text": "Quizzing"
        },
        {
          "id": "C",
          "text": "Vishing"
        },
        {
          "id": "D",
          "text": "Pharming"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Vishing, short for voice phishing, is the act of using the telephone to scam the user into surrendering private information that will be used for identity theft. [cite: 764]"
    },
    {
      "id": "q148",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jane, a security analyst, receives a report about network slowdowns happening at specific times of the day. After investigating, she discovers that a device is flooding the network with traffic, causing legitimate requests to be dropped. Which type of attack is this device likely performing?",
      "options": [
        {
          "id": "A",
          "text": "Distributed Denial of Service (DDoS)"
        },
        {
          "id": "B",
          "text": "ARP poisoning"
        },
        {
          "id": "C",
          "text": "MAC flooding"
        },
        {
          "id": "D",
          "text": "DNS amplification"
        }
      ],
      "correctOptionId": "C",
      "explanation": "MAC flooding is an attack that aims to flood the switch’s MAC table with fake MAC addresses until the table overflows. Once it overflows, the switch acts as a hub broadcasting packets to all machines in the network. This can cause significant slowdowns and disruptions. [cite: 765]"
    },
    {
      "id": "q149",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software development team in a large corporation decided to use an unauthorized cloud-based tool to host and manage their source code. The team believed it would increase their productivity, even though it was not approved by the IT department. A few weeks later, unauthorized access to their project data was detected. Which threat actor concept BEST describes the situation?",
      "options": [
        {
          "id": "A",
          "text": "Insider threat"
        },
        {
          "id": "B",
          "text": "Hacktivist"
        },
        {
          "id": "C",
          "text": "Shadow IT"
        },
        {
          "id": "D",
          "text": "Organized crime syndicate"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Shadow IT refers to any IT systems or solutions used within an organization without organizational approval or oversight. The use of an unauthorized cloud-based tool by the development team exemplifies Shadow IT. [cite: 766]"
    },
    {
      "id": "q150",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software company recently discovered a vulnerability in its popular application, which allowed unauthorized access to users’ data. Before the company could release a patch, a group of hackers exploited the vulnerability but only to notify the users about it. They did not misuse any data. What is the most probable motivation behind this group’s action?",
      "options": [
        {
          "id": "A",
          "text": "Financial gain by selling the data"
        },
        {
          "id": "B",
          "text": "Political beliefs against the software company's operations"
        },
        {
          "id": "C",
          "text": "Ethical concerns about user privacy and security"
        },
        {
          "id": "D",
          "text": "Desire to disrupt the software company's services"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The hackers did not misuse the data but instead chose to inform the users about the vulnerability, suggesting their motivation was based on ethical considerations to ensure users are aware of potential threats to their privacy. [cite: 766, 767]"
    },
    {
      "id": "q151",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An environmental NGO’s website was hacked and replaced with a message decrying their recent campaign against deforestation, claiming they are spreading misinformation. The website was left with a manifesto promoting responsible forestry and sustainable logging practices. Which type of threat actor is MOST likely behind this incident?",
      "options": [
        {
          "id": "A",
          "text": "Ransomware gang"
        },
        {
          "id": "B",
          "text": "Organized crime syndicate"
        },
        {
          "id": "C",
          "text": "Hacktivist"
        },
        {
          "id": "D",
          "text": "Advanced Persistent Threat (APT)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The attack seems to be motivated by ideological differences regarding deforestation and sustainable logging. Hacktivists typically conduct cyber actions to make political or social statements. The replacement of the NGO’s website with a manifesto supports the idea that this is an ideologically motivated attack, typical of hacktivists. [cite: 767]"
    },
    {
      "id": "q152",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An IT security analyst at a multinational corporation receives an email from the “HR Department” requesting urgent verification of his personal details, including his home address and social security number. The email has the company’s logo but has several spelling errors. Which type of email-based threat is this email most likely representing?",
      "options": [
        {
          "id": "A",
          "text": "Business Email Compromise (BEC)"
        },
        {
          "id": "B",
          "text": "Email bombing"
        },
        {
          "id": "C",
          "text": "Email forwarding"
        },
        {
          "id": "D",
          "text": "Phishing"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Phishing emails aim to deceive recipients into sharing personal or sensitive data by impersonating a trusted source. The email’s dubious quality, such as spelling errors, combined with the request for personal details, is indicative of a typical phishing attempt. [cite: 768]"
    },
    {
      "id": "q153",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After being fired from his position as a senior network administrator at XYZ Corp, John discovered a backdoor into the company’s main server that he had previously set up. He then initiated a series of Distributed Denial of Service (DDoS) attacks over a month. What is the most probable motivation behind John’s actions?",
      "options": [
        {
          "id": "A",
          "text": "Ethical concerns about the company's data handling"
        },
        {
          "id": "B",
          "text": "Financial gain by selling access to the backdoor"
        },
        {
          "id": "C",
          "text": "Desire to research and find vulnerabilities for personal growth"
        },
        {
          "id": "D",
          "text": "Revenge against the company for his termination"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Given that John acted after being fired and initiated disruptive attacks, it’s evident that his actions were motivated by a desire for revenge against his former employer. [cite: 768, 769]"
    },
    {
      "id": "q154",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution recently discovered that a large number of confidential customer records were being accessed and copied during off-business hours. Upon investigation, it was found that the access came from an authenticated user within the company, who had recently been passed over for a promotion. Which type of threat actor is MOST likely responsible for this security incident?",
      "options": [
        {
          "id": "A",
          "text": "Hacktivist"
        },
        {
          "id": "B",
          "text": "Insider threat"
        },
        {
          "id": "C",
          "text": "Nation-state"
        },
        {
          "id": "D",
          "text": "Organized crime syndicate"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The evidence suggests the activities were conducted by an authenticated user within the organization, who might have a motive (having been passed over for a promotion). Insider threats are risks from individuals within the organization such as employees, contractors, or business associates, who have inside information concerning the organization’s security practices. [cite: 769, 770]"
    },
    {
      "id": "q155",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The finance department of a global corporation found a series of unauthorized transactions originating from an employee’s workstation. Investigations revealed that the employee had been bypassing company policies to make unauthorized investments using company funds. Based on the attributes of the actor, how can this threat actor be best categorized?",
      "options": [
        {
          "id": "A",
          "text": "External actor leveraging malware"
        },
        {
          "id": "B",
          "text": "External actor exploiting vulnerabilities"
        },
        {
          "id": "C",
          "text": "Internal actor with direct access"
        },
        {
          "id": "D",
          "text": "Internal actor with indirect access"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The threat originated from an employee’s workstation within the organization, making it an internal threat. Since the employee used their own workstation and credentials to make unauthorized transactions, they had direct access, categorizing them as an internal actor with direct access. [cite: 770]"
    },
    {
      "id": "q156",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "While conducting a security assessment, Lucy found that a specific application crashes when she inputs a string that is much longer than what the input field is designed to handle. This could potentially allow her to execute arbitrary code in the application’s context. What vulnerability is Lucy likely trying to exploit?",
      "options": [
        {
          "id": "A",
          "text": "SQL Injection"
        },
        {
          "id": "B",
          "text": "Cross-Site Scripting (XSS)"
        },
        {
          "id": "C",
          "text": "Buffer Overflow"
        },
        {
          "id": "D",
          "text": "Directory Traversal"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Buffer overflow vulnerabilities occur when data written to a buffer exceeds that buffer’s boundaries, potentially overwriting adjacent memory locations. If exploited successfully, it can lead to arbitrary code execution. [cite: 771]"
    },
    {
      "id": "q157",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corp is implementing a new vulnerability scanning solution. The security team wants a solution that does not require any software to be installed on the target machines but can still identify vulnerabilities. Which type of vulnerability scanning solution should they choose?",
      "options": [
        {
          "id": "A",
          "text": "Host-based Intrusion Detection System (HIDS)"
        },
        {
          "id": "B",
          "text": "Agentless Vulnerability Scanner"
        },
        {
          "id": "C",
          "text": "Client-based Vulnerability Scanner"
        },
        {
          "id": "D",
          "text": "Host-based Intrusion Prevention System (HIPS)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An agentless vulnerability scanner does not require any software (agent) to be installed on the target systems. Instead, it remotely scans the systems and identifies vulnerabilities by checking against a database of known vulnerabilities. [cite: 771, 772]"
    },
    {
      "id": "q158",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A healthcare institution suffered a breach where medical records of high-profile patients were extracted. The data was not sold or publicly disclosed. Instead, certain individuals were approached with their personal health information and were extorted for money. What is the primary motivation behind this cyber attack?",
      "options": [
        {
          "id": "A",
          "text": "Political activism to expose vulnerabilities in healthcare"
        },
        {
          "id": "B",
          "text": "Personal animosity targeting the healthcare institution"
        },
        {
          "id": "C",
          "text": "Financial gain through targeted extortion"
        },
        {
          "id": "D",
          "text": "Spreading malware and expanding the botnet"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Approaching specific individuals with their personal health data for the purpose of extortion indicates a clear motivation of financial gain. [cite: 772]"
    },
    {
      "id": "q159",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a major international sporting event, a group of unidentified hackers simultaneously launched cyberattacks against multiple infrastructures in the host city, including transportation networks, power grids, and telecommunication systems. There was no ransom demand or any clear financial motive behind the attacks. What is the most probable motivation behind these actions?",
      "options": [
        {
          "id": "A",
          "text": "Financial gain from selling stolen data"
        },
        {
          "id": "B",
          "text": "Ethical concerns about the environmental impact of the sporting event"
        },
        {
          "id": "C",
          "text": "Revenge against a particular athlete or team"
        },
        {
          "id": "D",
          "text": "Desire to create disruption and chaos during the event"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Given the wide array of targets and the timing of the attacks during a major event without a clear financial motive, it’s evident that the main goal of the hackers was to create widespread disruption and chaos. [cite: 773]"
    },
    {
      "id": "q160",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medium-sized financial firm has noticed a series of unauthorized transactions moving funds from legitimate accounts to overseas locations. After investigating, it was found that a group was responsible for exploiting vulnerabilities in the firm’s transaction system. Which of the following motivations is most likely driving this group’s actions?",
      "options": [
        {
          "id": "A",
          "text": "Seeking notoriety within the hacker community"
        },
        {
          "id": "B",
          "text": "Financial gain from unauthorized transactions"
        },
        {
          "id": "C",
          "text": "Demonstrating political beliefs against financial institutions"
        },
        {
          "id": "D",
          "text": "Espionage to uncover the firm's investment strategies"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The unauthorized transactions moving funds to overseas locations indicate a direct attempt to illicitly acquire funds, pointing towards a motivation of financial gain. [cite: 774]"
    },
    {
      "id": "q161",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization’s e-commerce platform experienced a data breach where attackers exploited a known vulnerability. Post-incident analysis revealed that a patch was available for this vulnerability two months before the breach but was not applied. Which of the following would have been the MOST effective measure to prevent this breach?",
      "options": [
        {
          "id": "A",
          "text": "Implementing stronger user authentication methods"
        },
        {
          "id": "B",
          "text": "Increasing network monitoring for signs of malicious activity"
        },
        {
          "id": "C",
          "text": "Applying the available patch in a timely manner"
        },
        {
          "id": "D",
          "text": "Migrating to a different e-commerce platform"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Patches are developed by software vendors to address known vulnerabilities in their software. Timely application of these patches is crucial to ensuring that systems are protected against known threats. In this scenario, applying the available patch would have directly addressed the vulnerability that was exploited. [cite: 774]"
    },
    {
      "id": "q162",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sophia, a network administrator, is reviewing the logs from the company’s Intrusion Detection System (IDS). She notices an increased amount of outbound traffic to an unfamiliar IP address. Upon deeper analysis, she found that the traffic consists of sensitive data being transferred. What type of malicious code might be responsible for this?",
      "options": [
        {
          "id": "A",
          "text": "Ransomware"
        },
        {
          "id": "B",
          "text": "Adware"
        },
        {
          "id": "C",
          "text": "Data Exfiltration Malware"
        },
        {
          "id": "D",
          "text": "Keylogger"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Data Exfiltration Malware is designed to extract and transfer sensitive data from the target system to a location controlled by the attacker. The fact that sensitive data is being transferred to an unfamiliar IP address points to this type of malicious code. [cite: 775]"
    },
    {
      "id": "q163",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a security assessment of an application, Ryan found that he was able to input larger-than-expected data into a field. Upon doing so, he noticed the application became unresponsive and eventually crashed. What type of vulnerability might Ryan have uncovered?",
      "options": [
        {
          "id": "A",
          "text": "Input Validation Error"
        },
        {
          "id": "B",
          "text": "Cross-Site Scripting (XSS)"
        },
        {
          "id": "C",
          "text": "Buffer Overflow"
        },
        {
          "id": "D",
          "text": "Insecure Direct Object Reference (IDOR)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Buffer overflow vulnerabilities occur when an application allows more input data than it can securely handle in its allocated buffer space, leading to overwritten adjacent memory. This can lead to application crashes, or potentially, arbitrary code execution by an attacker. [cite: 776]"
    },
    {
      "id": "q164",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jake recently ran an old game on his computer that he received from a friend. Shortly after, he discovered that some of his documents were duplicated with slight modifications, and his system’s performance was deteriorating. Which kind of malware most likely caused these issues?",
      "options": [
        {
          "id": "A",
          "text": "Adware"
        },
        {
          "id": "B",
          "text": "Trojan"
        },
        {
          "id": "C",
          "text": "Worm"
        },
        {
          "id": "D",
          "text": "Virus"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Viruses are malicious programs that attach to clean files and can replicate, leading to multiple instances of themselves. They can modify or corrupt these files and can degrade system performance as they propagate. [cite: 776, 777]"
    },
    {
      "id": "q165",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department of an e-commerce company is configuring access controls for a new online product inventory system. They want the sales team to update the inventory levels and product details but don’t want them to access financial data stored in the same system. Which access control principle is the IT department applying?",
      "options": [
        {
          "id": "A",
          "text": "Least Privilege"
        },
        {
          "id": "B",
          "text": "Role-Based Access Control (RBAC)"
        },
        {
          "id": "C",
          "text": "Mandatory Access Control (MAC)"
        },
        {
          "id": "D",
          "text": "User-Based Access Control (UBAC)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Role-Based Access Control (RBAC) assigns permissions based on roles within an organization. Individuals are then assigned roles, and the permissions associated with that role determine what they can and cannot access. [cite: 777]"
    },
    {
      "id": "q166",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT team at a manufacturing company is deploying an IoT-based monitoring system for their machinery. They want to ensure that these IoT devices, if compromised, cannot adversely affect their main corporate network. What should they implement to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Install antivirus software on all IoT devices"
        },
        {
          "id": "B",
          "text": "Regularly patch and update the IoT device firmware"
        },
        {
          "id": "C",
          "text": "Place the IoT devices on a dedicated VLAN"
        },
        {
          "id": "D",
          "text": "Enable multi-factor authentication for IoT devices"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Placing the IoT devices on a dedicated VLAN (Virtual Local Area Network) provides network isolation, ensuring that the devices are segregated from the main corporate network. This strategy ensures that if an IoT device is compromised, it doesn’t pose a direct threat to the core corporate network systems. [cite: 778]"
    },
    {
      "id": "q167",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cloud-based collaboration tool used by a company displays a warning to a user stating, “You are logged in from two locations.” However, the user has only one active session on their workstation. What should be the primary concern for the security team?",
      "options": [
        {
          "id": "A",
          "text": "The user might be using multiple devices"
        },
        {
          "id": "B",
          "text": "There's a potential misconfiguration in the tool's settings"
        },
        {
          "id": "C",
          "text": "The collaboration tool is facing an outage"
        },
        {
          "id": "D",
          "text": "There might be unauthorized access to the user's account"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Warnings of concurrent sessions, especially when the user is certain they’re using only one device, are red flags for potential unauthorized access. The security team should treat this as a priority and investigate for signs of a breach. [cite: 778, 779]"
    },
    {
      "id": "q168",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department of a software development company wants to ensure that only company-approved development tools can be executed in their development environment, preventing any unauthorized or potentially harmful software from running. What should the IT department employ to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Implement network segmentation"
        },
        {
          "id": "B",
          "text": "Conduct regular vulnerability assessments"
        },
        {
          "id": "C",
          "text": "Install a stateful firewall"
        },
        {
          "id": "D",
          "text": "Establish an application allow list"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Establishing an application allow list would ensure that only specific, pre-approved applications can run in the development environment. This would prevent any unauthorized or potentially malicious software from being executed. [cite: 779]"
    },
    {
      "id": "q169",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large law firm has a centralized document repository where lawyers store client information, legal drafts, and other sensitive data. A new paralegal, Jenna, joins the firm and needs to be able to view client documents but should not be able to modify or delete them. Which type of permission should be granted to Jenna?",
      "options": [
        {
          "id": "A",
          "text": "Read-Only"
        },
        {
          "id": "B",
          "text": "Full Control"
        },
        {
          "id": "C",
          "text": "Modify"
        },
        {
          "id": "D",
          "text": "Execute"
        }
      ],
      "correctOptionId": "A",
      "explanation": "The Read-Only permission allows users to view and open files or resources but does not allow them to modify, delete, or execute them. In this scenario, granting Jenna Read-Only access ensures she can view client documents without making any alterations or deletions. [cite: 780]"
    },
    {
      "id": "q170",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is developing a new web application that will be processing highly sensitive user data. They want to ensure that if the web server is compromised, attackers cannot directly access the database or other critical infrastructure. Which of the following is the BEST strategy to achieve this objective?",
      "options": [
        {
          "id": "A",
          "text": "Use strong authentication methods for the web application"
        },
        {
          "id": "B",
          "text": "Encrypt the user data at rest and in transit"
        },
        {
          "id": "C",
          "text": "Place the web server and the database server in separate network segments"
        },
        {
          "id": "D",
          "text": "Implement real-time monitoring of the web server"
        }
      ],
      "correctOptionId": "C",
      "explanation": "By placing the web server and the database server in separate network segments, the company can achieve isolation. This means that even if the web server is compromised, attackers would still have to breach additional security measures to access the database server or other critical parts of the infrastructure. [cite: 780]"
    },
    {
      "id": "q171",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An IT technician is performing a routine security audit of a company’s server room. She discovers a server with outdated firmware that hasn’t been updated for two years. What potential vulnerability does the outdated firmware expose the server to?",
      "options": [
        {
          "id": "A",
          "text": "SQL Injection"
        },
        {
          "id": "B",
          "text": "Physical tampering"
        },
        {
          "id": "C",
          "text": "Unpatched exploits"
        },
        {
          "id": "D",
          "text": "Credential stuffing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Firmware, like software, receives updates to fix known vulnerabilities. If firmware is outdated, it can leave systems susceptible to known vulnerabilities that attackers can exploit. [cite: 781]"
    },
    {
      "id": "q172",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department of a large organization receives reports from employees that they are unable to access certain resources on the network. Upon investigation, the IT department discovers that the Access Control List (ACL) settings have been recently modified. Which of the following would be the PRIMARY reason to review and modify the ACL settings?",
      "options": [
        {
          "id": "A",
          "text": "To balance the network load"
        },
        {
          "id": "B",
          "text": "To update the organization's firewall rules."
        },
        {
          "id": "C",
          "text": "To ensure appropriate access rights to resources"
        },
        {
          "id": "D",
          "text": "To update the organization's password policy"
        }
      ],
      "correctOptionId": "C",
      "explanation": "ACLs are essential tools in determining who has access to which resources within a network or system. Regularly reviewing and modifying the ACL settings ensures that users have the appropriate access rights, preventing unauthorized access and ensuring that authorized users can access the resources they need. [cite: 782]"
    },
    {
      "id": "q173",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "You are a security consultant for a company that uses a cloud-based infrastructure. During a security review, you discover that there are no boundaries defined between the company’s development, testing, and production environments in the cloud. This can lead to unintended interactions and data leaks. What kind of vulnerability is this scenario illustrating?",
      "options": [
        {
          "id": "A",
          "text": "Insecure API endpoints"
        },
        {
          "id": "B",
          "text": "Weak encryption methods"
        },
        {
          "id": "C",
          "text": "Lack of resource isolation"
        },
        {
          "id": "D",
          "text": "Insufficient backup strategies"
        }
      ],
      "correctOptionId": "C",
      "explanation": "In a cloud environment, not having boundaries or isolation between different environments like development, testing, and production can lead to vulnerabilities. This can lead to malicious code introduced in the development environment making its way to production or confidential production data being exposed in testing. [cite: 782, 783]"
    },
    {
      "id": "q174",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine security audit, a company discovered an unauthorized wireless access point using the same SSID as the company’s official wireless network. Additionally, this rogue access point was configured without any encryption. What type of wireless attack is this scenario most indicative of?",
      "options": [
        {
          "id": "A",
          "text": "War Driving"
        },
        {
          "id": "B",
          "text": "Wireless Phishing"
        },
        {
          "id": "C",
          "text": "Bluejacking"
        },
        {
          "id": "D",
          "text": "Evil Twin"
        }
      ],
      "correctOptionId": "D",
      "explanation": "An “Evil Twin” attack involves setting up a rogue wireless access point that mimics a legitimate access point. By doing so, an attacker can intercept, monitor, and manipulate the traffic of users who mistakenly connect to the rogue access point. [cite: 783, 784]"
    },
    {
      "id": "q175",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A system administrator notices that an unauthorized user was able to obtain elevated privileges on a server, even though the default account settings were configured correctly. Upon investigation, it was found that the server’s operating system had not been updated for several months. What type of vulnerability was likely exploited?",
      "options": [
        {
          "id": "A",
          "text": "Application Misconfiguration"
        },
        {
          "id": "B",
          "text": "OS Patch Management Issue"
        },
        {
          "id": "C",
          "text": "Weak Encryption Algorithm"
        },
        {
          "id": "D",
          "text": "Password Reuse Attack"
        }
      ],
      "correctOptionId": "B",
      "explanation": "When operating systems are not regularly updated, they become vulnerable to known exploits that have since been patched by vendors. An attacker can take advantage of these vulnerabilities to gain unauthorized elevated privileges. [cite: 784]"
    },
    {
      "id": "q176",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst discovers that an external IP address has been repeatedly trying every possible combination of characters to gain access to the company’s VPN portal for the past two days. Which type of password attack is this MOST likely describing?",
      "options": [
        {
          "id": "A",
          "text": "Password Spraying"
        },
        {
          "id": "B",
          "text": "Dictionary Attack"
        },
        {
          "id": "C",
          "text": "Rainbow Table Attack"
        },
        {
          "id": "D",
          "text": "Brute Force Attack"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A Brute Force Attack involves systematically trying every possible combination of characters until the correct one is found. The scenario specifies that every possible combination of characters is being tried on the VPN portal, indicating a brute force attack. [cite: 785]"
    },
    {
      "id": "q177",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jane, an employee at XYZ Corp, recently noticed that her browser homepage changed unexpectedly, and she’s receiving an increasing number of targeted advertisements. Additionally, there’s a new toolbar in her browser that she doesn’t remember installing. Based on these symptoms, which type of malware is most likely affecting Jane’s computer?",
      "options": [
        {
          "id": "A",
          "text": "Ransomware"
        },
        {
          "id": "B",
          "text": "Worm"
        },
        {
          "id": "C",
          "text": "Spyware"
        },
        {
          "id": "D",
          "text": "Botnet"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Spyware is a type of malware that covertly collects information from a user’s system. Changes to browser settings, such as a new homepage or a new toolbar, combined with targeted advertisements, are common indicators that spyware might be present on a system. [cite: 785, 786]"
    },
    {
      "id": "q178",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software developer at XYZ Corp included a piece of code in the company’s software that would corrupt the application’s databases if his name was ever removed from the list of contributors in the application credits. Months after he left the company, the application databases were corrupted after an update. What type of malware was responsible for this action?",
      "options": [
        {
          "id": "A",
          "text": "Trojan"
        },
        {
          "id": "B",
          "text": "Spyware"
        },
        {
          "id": "C",
          "text": "Adware"
        },
        {
          "id": "D",
          "text": "Logic bomb"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A logic bomb is a type of malware that is triggered by a specific event or condition. In this case, the software developer’s name being removed from the contributors triggered the malicious code. [cite: 786, 787]"
    },
    {
      "id": "q179",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A popular online shopping platform noticed that some product reviews contained a strange link which, when clicked, led users to a site that resembled the platform but harvested login credentials. What vulnerability in the review system might have allowed attackers to post such links?",
      "options": [
        {
          "id": "A",
          "text": "Session Hijacking"
        },
        {
          "id": "B",
          "text": "Cross-site scripting (XSS)"
        },
        {
          "id": "C",
          "text": "Password Spraying"
        },
        {
          "id": "D",
          "text": "Credential Stuffing"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Cross-site scripting (XSS) attacks exploit vulnerabilities in web applications to insert malicious scripts. In this case, the ability to post malicious links within product reviews is an indication of an XSS vulnerability. [cite: 787]"
    },
    {
      "id": "q180",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine security review, a security analyst discovers multiple failed login attempts to a secure server room’s electronic access control system, all within a short time span. The access logs show a sequential pattern of access codes being tried. What type of physical attack is likely being attempted?",
      "options": [
        {
          "id": "A",
          "text": "Tailgating"
        },
        {
          "id": "B",
          "text": "Phishing"
        },
        {
          "id": "C",
          "text": "Brute force"
        },
        {
          "id": "D",
          "text": "Social engineering"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A brute force attack involves trying every possible combination in an attempt to find the correct one. The sequential pattern of access codes being tried in the logs suggests that the attacker is systematically going through all potential combinations. [cite: 788]"
    },
    {
      "id": "q181",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational corporation communicates sensitive information between its branches using encryption. An internal audit reveals that the encryption algorithms being used are those that were deprecated several years ago. Which of the following cryptographic vulnerabilities is the organization most exposed to?",
      "options": [
        {
          "id": "A",
          "text": "Key generation flaw"
        },
        {
          "id": "B",
          "text": "Weak algorithms susceptible to attacks"
        },
        {
          "id": "C",
          "text": "Inadequate public key infrastructure"
        },
        {
          "id": "D",
          "text": "Mismanagement of cryptographic keys"
        }
      ],
      "correctOptionId": "B",
      "explanation": "When an organization is found to be using deprecated or older encryption algorithms, it means they are relying on cryptographic methods that might have known vulnerabilities or could be easier to break due to advancements in computing and cryptanalysis. [cite: 789]"
    },
    {
      "id": "q182",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine audit of the corporate servers, the system administrator discovers that a week’s worth of security logs are missing from one of the key application servers. Which of the following is the MOST likely reason for this occurrence?",
      "options": [
        {
          "id": "A",
          "text": "The logging service experienced a malfunction"
        },
        {
          "id": "B",
          "text": "There was insufficient storage space for the logs"
        },
        {
          "id": "C",
          "text": "A malware attack aimed to erase traces of intrusion"
        },
        {
          "id": "D",
          "text": "The time zone setting was incorrectly configured"
        }
      ],
      "correctOptionId": "C",
      "explanation": "One of the primary tactics attackers use after gaining unauthorized access is to cover their tracks. Deleting or altering logs is a common method used to avoid detection and prevent any trace of malicious activity. [cite: 789]"
    },
    {
      "id": "q183",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The content filtering logs at a retail company display multiple instances of blocked access to a file download URL ending with “.exe”. The source IP address belongs to a point of sale (POS) terminal. What should be the primary concern for the security team?",
      "options": [
        {
          "id": "A",
          "text": "The POS terminal might have outdated software"
        },
        {
          "id": "B",
          "text": "There's a possible misconfiguration in the content filtering rules"
        },
        {
          "id": "C",
          "text": "The POS terminal might be compromised and trying to download malicious executables"
        },
        {
          "id": "D",
          "text": "The company's internet speed is too slow"
        }
      ],
      "correctOptionId": "C",
      "explanation": "POS terminals shouldn’t be downloading executable files from the internet, especially without administrative oversight. Multiple attempts to download “.exe” files could indicate that the POS terminal is compromised and that malicious software is attempting to download further payloads. [cite: 790]"
    },
    {
      "id": "q184",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Kara, a financial analyst, began to notice unusual account activity tied to her credentials. She is sure she hasn’t initiated these transactions. Upon further investigation, IT discovered a program on her computer that was recording her keystrokes. What type of malware was found on Kara’s computer?",
      "options": [
        {
          "id": "A",
          "text": "Ransomware"
        },
        {
          "id": "B",
          "text": "Keylogger"
        },
        {
          "id": "C",
          "text": "Adware"
        },
        {
          "id": "D",
          "text": "Rootkit"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A keylogger is a type of malicious software designed to capture and record the keystrokes of a user without their knowledge, often leading to unauthorized access to sensitive information such as usernames, passwords, and other confidential details. [cite: 790]"
    },
    {
      "id": "q185",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A finance department employee, Maya, is transferred to the HR department. The IT department is considering her access requirements. Which of the following actions aligns best with the principle of least privilege?",
      "options": [
        {
          "id": "A",
          "text": "Retain Maya's access to the finance system and grant additional access to the HR system"
        },
        {
          "id": "B",
          "text": "Remove all previous access rights and provide her access solely to the HR system"
        },
        {
          "id": "C",
          "text": "Grant Maya administrative rights to ease her transition between departments"
        },
        {
          "id": "D",
          "text": "Limit Maya's access to read-only for both finance and HR systems for a transitional period"
        }
      ],
      "correctOptionId": "B",
      "explanation": "When an employee transitions from one department to another, their access requirements change. To uphold the principle of least privilege, it’s essential to re-evaluate and adjust access rights. Maya no longer requires access to the finance system and should only have access to the resources necessary for her new role in HR. [cite: 791]"
    },
    {
      "id": "q186",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a security audit, a company realized that a malicious actor was able to situate themselves on the network path, capturing TLS handshake messages between clients and the server. The attacker’s goal is to weaken the encryption by influencing the cipher suite negotiation process. What type of network attack does this scenario depict?",
      "options": [
        {
          "id": "A",
          "text": "ARP Poisoning"
        },
        {
          "id": "B",
          "text": "Downgrade Attack"
        },
        {
          "id": "C",
          "text": "SYN Flood"
        },
        {
          "id": "D",
          "text": "Ping of Death"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A Downgrade Attack occurs when an attacker interferes with the setup process (e.g., TLS handshake) to force two entities to settle on a less secure communication mode or encryption standard. [cite: 792]"
    },
    {
      "id": "q187",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A developer has implemented a new feature on a company’s website that allows users to search for products by their names. Within a few days, the IT team noticed abnormal activities where entire tables from the database were being dumped. Which vulnerability might the new feature have introduced?",
      "options": [
        {
          "id": "A",
          "text": "Cross-Site Scripting (XSS)"
        },
        {
          "id": "B",
          "text": "Distributed Denial-of-Service (DDoS)"
        },
        {
          "id": "C",
          "text": "Structured Query Language injection (SQLi)"
        },
        {
          "id": "D",
          "text": "Cross-Site Request Forgery (CSRF)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Structured Query Language injection, or SQLi, is a code injection technique that attackers use to run malicious SQL statements on a database. Given that entire tables from the database were dumped after implementing a search feature, it’s a clear indication that the feature did not properly sanitize user input, allowing for SQLi. [cite: 792, 793]"
    },
    {
      "id": "q188",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine security assessment, Jake, a penetration tester, discovers that by modifying a configuration file located in a public directory, he can assign himself administrative privileges in the application. What type of vulnerability is Jake exploiting?",
      "options": [
        {
          "id": "A",
          "text": "Cross-Site Scripting (XSS)"
        },
        {
          "id": "B",
          "text": "Privilege Escalation"
        },
        {
          "id": "C",
          "text": "SQL Injection"
        },
        {
          "id": "D",
          "text": "Insecure Direct Object Reference (IDOR)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Privilege escalation occurs when a user increases their privileges beyond what was originally granted to them, allowing them to perform actions that they should not be allowed to. [cite: 793]"
    },
    {
      "id": "q189",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization’s security team discovered that an attacker had gained unauthorized access to a server. Upon investigating, they found a software tool that allowed the attacker to mask processes, files, and system data, effectively remaining hidden while maintaining privileged access. What type of malware was implanted by the attacker?",
      "options": [
        {
          "id": "A",
          "text": "Trojan"
        },
        {
          "id": "B",
          "text": "Worm"
        },
        {
          "id": "C",
          "text": "Logic Bomb"
        },
        {
          "id": "D",
          "text": "Rootkit"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A rootkit is malware that provides stealthy access to a computer and hides its presence from standard detection methods. It can mask files, processes, and other system data. [cite: 794]"
    },
    {
      "id": "q190",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT team of XYZ Corp received an alert that an employee’s account was used to access the company’s portal from Paris at 2:00 PM and then from Tokyo at 2:30 PM. The employee is currently on a business trip to Paris. What could this alert be indicating?",
      "options": [
        {
          "id": "A",
          "text": "The employee quickly traveled from Paris to Tokyo"
        },
        {
          "id": "B",
          "text": "The company's time zone settings are misconfigured"
        },
        {
          "id": "C",
          "text": "There's a possible VPN misconfiguration on the employee's computer"
        },
        {
          "id": "D",
          "text": "The employee's account might have been compromised"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Impossible travel refers to the improbable nature of someone being in two distant geographical locations within a short time frame. Given the close time proximity of both access attempts, it’s highly improbable that the employee traveled from Paris to Tokyo in half an hour. This is a common indicator of account compromise. [cite: 794, 795]"
    },
    {
      "id": "q191",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization recently deployed a cloud-based database to support its new application. A few weeks later, unauthorized access to the database was detected. An investigation revealed that the database was accessible without a password. Which of the following misconfigurations is primarily responsible for the security breach?",
      "options": [
        {
          "id": "A",
          "text": "Default configurations left unchanged"
        },
        {
          "id": "B",
          "text": "Insufficient network segmentation"
        },
        {
          "id": "C",
          "text": "Encryption not enabled at rest"
        },
        {
          "id": "D",
          "text": "Lack of intrusion detection system"
        }
      ],
      "correctOptionId": "A",
      "explanation": "The scenario describes a situation where a cloud-based database was accessible without a password. This is a common oversight when default configurations, which may have no password or a widely known default password, are left unchanged upon deployment. [cite: 795, 796]"
    },
    {
      "id": "q192",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A user reports that whenever they try to visit their online banking website, they are redirected to a website that looks identical but has a slightly different URL. The fake website asks for additional personal details that the bank never requested before. Which type of DNS attack is the user likely encountering?",
      "options": [
        {
          "id": "A",
          "text": "DNS Tunneling"
        },
        {
          "id": "B",
          "text": "DNS Fast Flux"
        },
        {
          "id": "C",
          "text": "DNS Cache Poisoning"
        },
        {
          "id": "D",
          "text": "Domain Hijacking"
        }
      ],
      "correctOptionId": "C",
      "explanation": "DNS Cache Poisoning, also known as DNS spoofing, involves corrupting the DNS cache data in DNS resolvers to redirect users to malicious websites instead of the actual intended websites. [cite: 796]"
    },
    {
      "id": "q193",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alex recently purchased a new laptop. Upon first startup, he noticed multiple pre-installed software applications, most of which he didn’t recognize or find necessary. The laptop’s performance was slower than expected given its hardware specifications. Which type of software is most likely causing this performance degradation?",
      "options": [
        {
          "id": "A",
          "text": "Ransomware"
        },
        {
          "id": "B",
          "text": "Bloatware"
        },
        {
          "id": "C",
          "text": "Spyware"
        },
        {
          "id": "D",
          "text": "Adware"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Bloatware refers to unnecessary software applications that come pre-installed on new computers. These applications often consume system resources, leading to reduced performance. [cite: 797]"
    },
    {
      "id": "q194",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department of a large corporation is performing a vulnerability assessment on its virtualized infrastructure. They come across a potential threat where a user from within a VM can interact and possibly compromise the host system. What is this type of vulnerability commonly referred to as?",
      "options": [
        {
          "id": "A",
          "text": "VM cloning"
        },
        {
          "id": "B",
          "text": "VM snapshotting"
        },
        {
          "id": "C",
          "text": "VM escape"
        },
        {
          "id": "D",
          "text": "VM migration"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A VM escape occurs when an attacker runs code on a VM that allows them to break out of the VM’s isolated environment and gain access to the host system. [cite: 798]"
    },
    {
      "id": "q195",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A renowned technology company recently released a new line of routers. After a short period, security researchers discovered that some of these routers contain malicious chips embedded during the manufacturing process. This incident most likely represents a vulnerability related to which supply chain aspect?",
      "options": [
        {
          "id": "A",
          "text": "Outsourced software development risks"
        },
        {
          "id": "B",
          "text": "Service provider's outdated security practices"
        },
        {
          "id": "C",
          "text": "Hardware provider's embedded compromise"
        },
        {
          "id": "D",
          "text": "Inadequate vendor background checks"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Supply chain vulnerabilities in the context of hardware providers can involve the introduction of malicious components or chips during the manufacturing process. In this scenario, the presence of malicious chips in the routers is a direct reflection of a vulnerability due to a compromised hardware provider. [cite: 798]"
    },
    {
      "id": "q196",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large news website was rendered unavailable during a major news event. Network logs show an overwhelming amount of traffic from IoT devices. Which type of DDoS attack leveraged IoT devices is this indicative of?",
      "options": [
        {
          "id": "A",
          "text": "Reflected Attack"
        },
        {
          "id": "B",
          "text": "Botnet Attack"
        },
        {
          "id": "C",
          "text": "Amplification Attack"
        },
        {
          "id": "D",
          "text": "Teardrop Attack"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Botnets, which are networks of compromised devices (including IoT devices), are often used to conduct large-scale DDoS attacks by directing the combined bandwidth of the devices towards a target. [cite: 799]"
    },
    {
      "id": "q197",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A web application requires users to authenticate using a token sent to their email. Alex, a security analyst, observes that once logged in, if he presents the same token again, he is granted access without any restrictions. What type of vulnerability does this situation depict?",
      "options": [
        {
          "id": "A",
          "text": "Cross-Site Request Forgery (CSRF)"
        },
        {
          "id": "B",
          "text": "Replay Attack"
        },
        {
          "id": "C",
          "text": "Man-in-the-Middle (MitM) Attack"
        },
        {
          "id": "D",
          "text": "Cross-Site Scripting (XSS)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A replay attack, also known as playback attack, occurs when an attacker intercepts data and then retransmits it. In this scenario, Alex was able to reuse the authentication token to gain access, indicating that the system does not have mechanisms in place to prevent replayed tokens from being accepted multiple times. [cite: 800]"
    },
    {
      "id": "q198",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Liam, a security analyst, is investigating a potential breach. He discovers that a malicious actor sent requests to the server by altering HTTP headers to impersonate another user, thereby gaining unauthorized access. Which type of application attack is this?",
      "options": [
        {
          "id": "A",
          "text": "Cross-Site Request Forgery (CSRF)"
        },
        {
          "id": "B",
          "text": "Cross-Site Scripting (XSS)"
        },
        {
          "id": "C",
          "text": "HTTP Header Forgery"
        },
        {
          "id": "D",
          "text": "Session Hijacking"
        }
      ],
      "correctOptionId": "C",
      "explanation": "HTTP Header Forgery involves manipulating HTTP headers in a request to impersonate, spoof, or deceive systems, often for bypassing security controls or impersonating other users. In the described scenario, the malicious actor altered HTTP headers to impersonate another user, indicating an HTTP Header Forgery attack. [cite: 800, 801]"
    },
    {
      "id": "q199",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company’s network administrator notices that several switches in the network infrastructure are no longer receiving firmware updates from the manufacturer. These devices are no longer sold or supported. What vulnerability do these switches introduce to the network?",
      "options": [
        {
          "id": "A",
          "text": "Physical hardware tampering"
        },
        {
          "id": "B",
          "text": "Lack of redundancy"
        },
        {
          "id": "C",
          "text": "Increased susceptibility to new threats"
        },
        {
          "id": "D",
          "text": "Wireless interference"
        }
      ],
      "correctOptionId": "C",
      "explanation": "End-of-life (EOL) hardware refers to devices that are no longer supported by their manufacturers. This lack of support means that the devices won’t receive any further security updates, patches, or technical support. Consequently, these devices become more susceptible to new threats and vulnerabilities, posing a security risk to the network. [cite: 801]"
    },
    {
      "id": "q200",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "While reviewing web server logs, Sarah, a security analyst, notices a pattern of requests containing “..%2F..” in the URLs. She suspects this might be an attempt to exploit a vulnerability. Which type of application attack is likely being attempted?",
      "options": [
        {
          "id": "A",
          "text": "Command Injection"
        },
        {
          "id": "B",
          "text": "Cross-Site Scripting (XSS)"
        },
        {
          "id": "C",
          "text": "Directory Traversal"
        },
        {
          "id": "D",
          "text": "Cross-Site Request Forgery (CSRF)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Directory traversal (also known as path traversal) involves manipulating variables referencing files with “..” sequences and its variations (like “..%2F..”, which URL-decodes to “../..”) to navigate outside of the intended directory. The pattern Sarah observed in the logs indicates a directory traversal attack attempt. [cite: 802]"
    },
    {
      "id": "q201",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst is reviewing network logs and notices that an attacker positioned in between the user and the target website is intercepting and potentially modifying the user’s communications before passing them on to the intended destination. This malicious activity occurs transparently, with neither the user nor the target website being aware. What type of network attack is being described?",
      "options": [
        {
          "id": "A",
          "text": "Replay Attack"
        },
        {
          "id": "B",
          "text": "Smurf Attack"
        },
        {
          "id": "C",
          "text": "On-path Attack"
        },
        {
          "id": "D",
          "text": "Spoofing Attack"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An On-path Attack, also known as a Man-in-the-Middle (MitM) attack, involves an attacker intercepting communications between two parties, potentially modifying the communication, and then relaying it to the intended recipient. Both the source and the destination are unaware of the attacker’s presence. [cite: 802, 803]"
    },
    {
      "id": "q202",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial firm outsources its payment processing to a third-party service provider. After a series of fraudulent transactions, it was discovered that the service provider was not employing the latest encryption standards when transmitting data. Which vulnerability related to supply chain does this scenario highlight?",
      "options": [
        {
          "id": "A",
          "text": "Inadequate vendor background checks"
        },
        {
          "id": "B",
          "text": "Service provider's outdated security practices"
        },
        {
          "id": "C",
          "text": "Deficient hardware components from a supplier"
        },
        {
          "id": "D",
          "text": "Software with embedded backdoors"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Supply chain vulnerabilities encompass risks originating from third-party vendors and service providers. In this scenario, the third-party service provider’s failure to use current encryption standards for transmitting data exemplifies a vulnerability that arises due to outdated security practices by the service provider. [cite: 803]"
    },
    {
      "id": "q203",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Julia, a cybersecurity analyst, notices a recently installed application named “PhotoEditorPro.exe” on a corporate workstation. Upon further inspection, she identifies that this application is silently exfiltrating sensitive company data to an external IP address. Which type of malware is Julia most likely observing?",
      "options": [
        {
          "id": "A",
          "text": "Worm"
        },
        {
          "id": "B",
          "text": "Ransomware"
        },
        {
          "id": "C",
          "text": "Trojan"
        },
        {
          "id": "D",
          "text": "Adware"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A Trojan is a type of malware that disguises itself as a legitimate software or application. In this case, the “PhotoEditorPro.exe” appears to be a legitimate photo editing application but is actually being used to transmit sensitive data to an external source. [cite: 804]"
    },
    {
      "id": "q204",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company’s IT department notices a sharp increase in account lockouts over the past two days, especially during non-business hours. While some accounts are from various departments, a majority are from the finance team. Which of the following is the MOST plausible explanation for these lockouts?",
      "options": [
        {
          "id": "A",
          "text": "Scheduled maintenance by the IT department"
        },
        {
          "id": "B",
          "text": "Employees are sharing passwords within the finance team"
        },
        {
          "id": "C",
          "text": "An attacker is trying to gain unauthorized access"
        },
        {
          "id": "D",
          "text": "A recent password policy change requiring more frequent changes"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A sudden increase in account lockouts, especially during non-business hours, indicates suspicious activity. The targeted nature of the lockouts, especially on sensitive departments like finance, suggests an attacker might be attempting unauthorized access. [cite: 804]"
    },
    {
      "id": "q205",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah, a software developer at a tech company, decided to gain root access to her company-issued mobile device to customize its features. Soon after, the IT department detected unauthorized data transmissions from her device. Which mobile vulnerability is most likely associated with her actions?",
      "options": [
        {
          "id": "A",
          "text": "Side loading of applications"
        },
        {
          "id": "B",
          "text": "Inconsistent OS updates"
        },
        {
          "id": "C",
          "text": "Mobile device jailbreaking"
        },
        {
          "id": "D",
          "text": "Use of open Wi-Fi networks"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Jailbreaking is the process of removing the restrictions imposed by the manufacturer on certain devices, thereby allowing root access. Jailbreaking can expose the device to various security vulnerabilities, as indicated by unauthorized data transmissions. [cite: 805]"
    },
    {
      "id": "q206",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent cyber attack on a corporation’s central database, the IT department has been tasked with enhancing the security of their network infrastructure. Which of the following would be the BEST technique to ensure that different departments, like HR and Finance, cannot access each other’s sensitive data?",
      "options": [
        {
          "id": "A",
          "text": "Implement network segmentation based on departments"
        },
        {
          "id": "B",
          "text": "Upgrade the bandwidth of the entire network"
        },
        {
          "id": "C",
          "text": "Use a single strong password for all departments"
        },
        {
          "id": "D",
          "text": "Move all department data to the cloud"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Network segmentation divides a network into multiple segments or subnets, each acting as its own small network. This limits access between segments and can protect sensitive data by ensuring that only those within a segment can access its resources. [cite: 806]"
    },
    {
      "id": "q207",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During an organization’s security review, the cybersecurity analyst noticed that there were multiple failed login attempts for different user accounts, each with a few commonly used passwords. What type of password attack does this scenario BEST describe?",
      "options": [
        {
          "id": "A",
          "text": "Brute Force Attack"
        },
        {
          "id": "B",
          "text": "Dictionary Attack"
        },
        {
          "id": "C",
          "text": "Credential Stuffing"
        },
        {
          "id": "D",
          "text": "Password Spraying"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Password Spraying is an attack method where the attacker tries a few commonly used passwords against multiple user accounts, rather than trying many passwords against a single account. [cite: 807]"
    },
    {
      "id": "q208",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT team at TechnoCorp has noticed a consistent pattern over the last week where a particular server’s CPU usage spikes to 100% between 2:00 AM and 4:00 AM, a time when there’s typically minimal user activity. What could be the MOST probable reason for this?",
      "options": [
        {
          "id": "A",
          "text": "The server is automatically updating its software"
        },
        {
          "id": "B",
          "text": "An employee is running a heavy computational task"
        },
        {
          "id": "C",
          "text": "The server is undergoing a DDoS attack"
        },
        {
          "id": "D",
          "text": "Malware is performing cryptomining activities"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Cryptomining malware often causes significant resource consumption, especially CPU usage. Attackers frequently schedule such activities during off-peak hours to reduce the chance of detection. Given the consistent pattern of high CPU usage during off-hours, cryptomining malware is a probable cause. [cite: 807, 808]"
    },
    {
      "id": "q209",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization’s IT department noticed a rapid increase in network traffic over the past 24 hours. Simultaneously, many employees reported that their systems have been slow and that they received a file named “updatePatch.exe” from coworkers via email, even though the coworkers did not intentionally send any files. What type of malware is most likely responsible for this behavior?",
      "options": [
        {
          "id": "A",
          "text": "Trojan"
        },
        {
          "id": "B",
          "text": "Ransomware"
        },
        {
          "id": "C",
          "text": "Adware"
        },
        {
          "id": "D",
          "text": "Worm"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Worms are a type of malware that self-replicates and spreads to other devices. The rapid increase in network traffic and the distribution of a file to various users without the sender’s knowledge is characteristic of worm behavior. [cite: 809]"
    },
    {
      "id": "q210",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine check, an IT technician notices several files on a company server have been renamed with a “.locked” extension and there’s a new file named “README_TO_RECOVER_FILES.txt” present in the root directory. Based on these indicators, which type of malicious activity is most likely in progress?",
      "options": [
        {
          "id": "A",
          "text": "Worm propagation"
        },
        {
          "id": "B",
          "text": "Trojan horse execution"
        },
        {
          "id": "C",
          "text": "Ransomware attack"
        },
        {
          "id": "D",
          "text": "Logic bomb activation"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Ransomware is a type of malicious software that encrypts a victim’s files, rendering them inaccessible. The renaming of files with a specific extension (like “.locked”) and the presence of a ransom note (like “README_TO_RECOVER_FILES.txt”) are typical indicators of a ransomware attack. [cite: 809, 810]"
    },
    {
      "id": "q211",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization is choosing a hash function for digital signatures. They want to ensure that it is resistant to scenarios where an attacker might produce two different messages having the same hash. Which type of attack are they trying to defend against?",
      "options": [
        {
          "id": "A",
          "text": "Side-channel Attack"
        },
        {
          "id": "B",
          "text": "Replay Attack"
        },
        {
          "id": "C",
          "text": "Birthday Attack"
        },
        {
          "id": "D",
          "text": "Ciphertext-only Attack"
        }
      ],
      "correctOptionId": "C",
      "explanation": "In a Birthday Attack, attackers exploit the mathematics behind the birthday problem in probability theory, aiming to find two different inputs that produce the same output, or hash. When selecting a hash function for digital signatures, it’s crucial to pick one that is resistant to Birthday Attacks to maintain the integrity of the signatures. [cite: 810]"
    },
    {
      "id": "q212",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An IT security team received reports that a new, previously unknown vulnerability was being actively exploited in the wild. The software vendor has not yet provided a patch for the vulnerability. What is the most accurate term for this vulnerability?",
      "options": [
        {
          "id": "A",
          "text": "Legacy vulnerability"
        },
        {
          "id": "B",
          "text": "Zero-day vulnerability"
        },
        {
          "id": "C",
          "text": "Patched vulnerability"
        },
        {
          "id": "D",
          "text": "Known vulnerability"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A zero-day vulnerability refers to a flaw in software, hardware, or firmware that is unknown to the vendor. This type of vulnerability is a risk because there is no fix or patch for it at the time of discovery, and it may already be actively exploited by malicious actors. [cite: 812]"
    },
    {
      "id": "q213",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company has recently deployed a new e-commerce application. The security team wants to ensure they can detect any unauthorized or malicious activities on the application. Which of the following would be the MOST effective way to achieve this goal?",
      "options": [
        {
          "id": "A",
          "text": "Conduct a penetration test on the application"
        },
        {
          "id": "B",
          "text": "Install a firewall in front of the application"
        },
        {
          "id": "C",
          "text": "Implement continuous monitoring of the application's logs and activities"
        },
        {
          "id": "D",
          "text": "Provide training to users about secure browsing habits"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Continuous monitoring of an application’s logs and activities allows the security team to detect and respond to any suspicious or unauthorized behavior in real-time. [cite: 813]"
    },
    {
      "id": "q214",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Ella, a security analyst, is reviewing the logs of a web application and notices that an attacker attempted to use the following input in a login form: ' OR '1'='1' --. This input was used in an effort to manipulate the application’s backend database. What type of injection attack is this an example of?",
      "options": [
        {
          "id": "A",
          "text": "XML Injection"
        },
        {
          "id": "B",
          "text": "Command Injection"
        },
        {
          "id": "C",
          "text": "SQL Injection"
        },
        {
          "id": "D",
          "text": "LDAP Injection"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The input ' OR '1'='1' -- is a classic example of an SQL injection attack. Attackers use this technique to manipulate SQL queries in applications that do not properly validate user input, potentially allowing unauthorized access or data retrieval. [cite: 813, 814]"
    },
    {
      "id": "q215",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medium-sized company has just deployed a new file server for the HR department. They want to ensure that only HR employees can view and edit HR-specific documents, while the IT department should only be able to perform system maintenance tasks. What should the company implement to achieve this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Install a firewall between the HR and IT departments"
        },
        {
          "id": "B",
          "text": "Implement an Access Control List (ACL) for the file server"
        },
        {
          "id": "C",
          "text": "Enforce a strong password policy for the HR department"
        },
        {
          "id": "D",
          "text": "Enable full disk encryption on the file server"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Access Control Lists (ACLs) define who can access a resource and what they can do with it once accessed. By setting up an ACL for the file server, the company can precisely define the permissions for HR and IT departments, ensuring that only authorized users have the right level of access to the data. [cite: 815]"
    },
    {
      "id": "q216",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce website suddenly experiences a sharp increase in traffic, causing the website to become slow and occasionally inaccessible. The IT team observes that a large number of requests are originating from multiple IP addresses spread across various countries. What type of network attack is the e-commerce website likely experiencing?",
      "options": [
        {
          "id": "A",
          "text": "Man-in-the-middle attack"
        },
        {
          "id": "B",
          "text": "DNS spoofing"
        },
        {
          "id": "C",
          "text": "Distributed denial-of-service (DDoS) attack"
        },
        {
          "id": "D",
          "text": "ARP poisoning"
        }
      ],
      "correctOptionId": "C",
      "explanation": "In a DDoS attack, the attacker uses multiple systems, often compromised ones from different locations, to flood a target system with requests, making the target slow or inaccessible. [cite: 816]"
    },
    {
      "id": "q217",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security auditor found that a website’s login form returns detailed error messages like “Incorrect column name” or “Table not found.” Which type of vulnerability could attackers potentially exploit using this information?",
      "options": [
        {
          "id": "A",
          "text": "Brute Force Attack"
        },
        {
          "id": "B",
          "text": "Structured Query Language injection (SQLi)"
        },
        {
          "id": "C",
          "text": "Man-in-the-Middle Attack"
        },
        {
          "id": "D",
          "text": "Session Hijacking"
        }
      ],
      "correctOptionId": "B",
      "explanation": "When websites provide detailed database error messages, it can give attackers clues about the database structure, making it easier for them to craft successful SQL injection attacks. [cite: 817]"
    },
    {
      "id": "q218",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An employee at a large corporation has recently installed an app on his company-issued mobile device from a website instead of the approved app store. The app claimed to help boost productivity, but soon after, sensitive data from the mobile device was found to be transmitted to an unknown server. What mobile vulnerability was exploited?",
      "options": [
        {
          "id": "A",
          "text": "Inadequate password policies"
        },
        {
          "id": "B",
          "text": "Open Wi-Fi connection"
        },
        {
          "id": "C",
          "text": "Mobile device side loading"
        },
        {
          "id": "D",
          "text": "Lack of mobile device encryption"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Side loading refers to the practice of installing apps on a mobile device from sources other than the approved app store. This can expose the device to apps that have not been vetted for security, leading to potential data compromise. [cite: 818]"
    },
    {
      "id": "q219",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department of XYZ Corp noticed that server logs are recording user login attempts during non-business hours, specifically between 2:00 AM and 3:00 AM, a time when no scheduled tasks or backups are set to run. Which of the following is the MOST plausible explanation for this unusual activity?",
      "options": [
        {
          "id": "A",
          "text": "The company's employees are working overtime"
        },
        {
          "id": "B",
          "text": "There might be a time zone misconfiguration on the server"
        },
        {
          "id": "C",
          "text": "An unauthorized user is trying to gain access to the server"
        },
        {
          "id": "D",
          "text": "The server is automatically installing security patches"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Out-of-cycle logging that occurs during unusual hours, especially when no scheduled tasks are set, can be a significant indicator of malicious activity. In this scenario, the logging of user login attempts during non-business hours suggests an unauthorized user might be attempting access. [cite: 819]"
    },
    {
      "id": "q220",
      "domain": "Threats, Vulnerabilities, and Mitigations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An employee notices a stranger standing unusually close to her with an unfamiliar device while she uses her RFID badge to enter the office building. A few days later, her colleague’s badge suddenly stops working, even though it was not reported lost or damaged. What type of attack should the security team suspect?",
      "options": [
        {
          "id": "A",
          "text": "Brute force attack on the access control system"
        },
        {
          "id": "B",
          "text": "RFID cloning"
        },
        {
          "id": "C",
          "text": "Tailgating"
        },
        {
          "id": "D",
          "text": "RFID jamming"
        }
      ],
      "correctOptionId": "B",
      "explanation": "RFID cloning involves making an unauthorized copy of an RFID badge or tag by capturing its signal. The stranger standing unusually close with a device might have been capturing the RFID signal to clone it. [cite: 819, 820]"
    },
    {
      "id": "q221",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The networking team at SecureNet Corp. is setting up a new branch office. They want to ensure secure connectivity between the branch office and the main office. Which of the following would BEST provide this?",
      "options": [
        {
          "id": "A",
          "text": "Establishing a clear line of sight for wireless antennas between the two locations"
        },
        {
          "id": "B",
          "text": "Implementing a Virtual Private Network (VPN) between the two sites"
        },
        {
          "id": "C",
          "text": "Increasing bandwidth on the public internet connection at both locations"
        },
        {
          "id": "D",
          "text": "Using multi-factor authentication for all user accounts in both locations"
        }
      ],
      "correctOptionId": "B",
      "explanation": "VPNs provide secure, encrypted connections over potentially insecure networks, such as the internet, making them ideal for securely connecting remote locations. [cite: 838, 839]"
    },
    {
      "id": "q222",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A rapidly growing e-commerce company has recently experienced an increase in cross-site scripting (XSS) and SQL injection attacks. The company wants to deploy a solution that specifically protects against these threats at the application layer. Which type of firewall would be most appropriate?",
      "options": [
        {
          "id": "A",
          "text": "Stateful Packet Inspection Firewall"
        },
        {
          "id": "B",
          "text": "Proxy Firewall"
        },
        {
          "id": "C",
          "text": "Network Layer Firewall"
        },
        {
          "id": "D",
          "text": "Web Application Firewall (WAF)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A Web Application Firewall (WAF) is specifically designed to protect web applications by monitoring, filtering, and blocking potentially harmful HTTP traffic. This includes protection against threats like XSS and SQL injection attacks that are common against web applications. [cite: 817, 839]"
    },
    {
      "id": "q223",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureNet, a cybersecurity firm, is implementing an Intrusion Detection System (IDS) for its enterprise client. Where should the IDS be placed for optimal detection of malicious activities?",
      "options": [
        {
          "id": "A",
          "text": "Before the perimeter firewall to capture all inbound traffic"
        },
        {
          "id": "B",
          "text": "Between the perimeter firewall and the internal network to monitor the filtered traffic"
        },
        {
          "id": "C",
          "text": "Inside the DMZ to monitor only external service requests"
        },
        {
          "id": "D",
          "text": "Adjacent to each workstation for personalized security"
        }
      ],
      "correctOptionId": "B",
      "explanation": "By placing the IDS between the firewall and the internal network, it can monitor traffic that has passed through the firewall’s filters. This position provides a balance between capturing potential threats and reducing false positives from benign external traffic. [cite: 840]"
    },
    {
      "id": "q224",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An online gaming platform experiences latency issues during multiplayer sessions, affecting the gameplay experience of its users. The company wants to ensure real-time responsiveness for its players worldwide. Which of the following solutions would BEST mitigate these latency issues?",
      "options": [
        {
          "id": "A",
          "text": "Implementing a Content Delivery Network (CDN)"
        },
        {
          "id": "B",
          "text": "Introducing stricter user authentication methods"
        },
        {
          "id": "C",
          "text": "Deploying a centralized database server"
        },
        {
          "id": "D",
          "text": "Reducing the game's graphical fidelity"
        }
      ],
      "correctOptionId": "A",
      "explanation": "A CDN involves distributing the hosting of content to multiple locations around the world. For online gaming, this means players can connect to a server closer to their geographic location, thereby reducing latency and improving responsiveness. [cite: 840, 841]"
    },
    {
      "id": "q225",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The software development team at ABC Corp. has created a unique application that utilizes innovative algorithms. The company wants to ensure that competitors cannot legally copy or replicate their application’s functionality. Which of the following would be the MOST suitable method to protect this intellectual property?",
      "options": [
        {
          "id": "A",
          "text": "Copyright the user interface design"
        },
        {
          "id": "B",
          "text": "Apply for a patent for the innovative algorithms"
        },
        {
          "id": "C",
          "text": "Store the application code in an encrypted vault"
        },
        {
          "id": "D",
          "text": "Ensure all users sign an acceptable use policy (AUP)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Patents provide legal protection for inventions, allowing the inventor or patent holder the exclusive right to the patented process, design, or invention for a certain period. In this case, patenting the algorithms would prevent competitors from legally replicating the application’s unique functionality. [cite: 841, 842]"
    },
    {
      "id": "q226",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is evaluating its data storage options. They need a solution that provides them with the highest level of control over their hardware, software, and network configurations, allowing for customized security controls and measures. Which deployment model would best suit their needs?",
      "options": [
        {
          "id": "A",
          "text": "Cloud-based Infrastructure"
        },
        {
          "id": "B",
          "text": "Hybrid Infrastructure"
        },
        {
          "id": "C",
          "text": "On-premises Infrastructure"
        },
        {
          "id": "D",
          "text": "Community Cloud"
        }
      ],
      "correctOptionId": "C",
      "explanation": "On-premises infrastructure allows organizations to have complete control over their hardware, software, and network configurations. This gives them the freedom to customize security controls and measures tailored to their specific needs. [cite: 842]"
    },
    {
      "id": "q227",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization is evaluating different security solutions for their new branch office. They want to ensure that the chosen solution can be rapidly deployed with minimal configuration. Which of the following options BEST fulfills this requirement?",
      "options": [
        {
          "id": "A",
          "text": "A customized Intrusion Prevention System (IPS) tailored to the organization's unique needs"
        },
        {
          "id": "B",
          "text": "A zero-touch provisioning firewall"
        },
        {
          "id": "C",
          "text": "An open-source firewall with extensive manual settings"
        },
        {
          "id": "D",
          "text": "A security information and event management (SIEM) solution requiring manual log source integration"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Zero-touch provisioning allows devices to be provisioned and configured automatically, ensuring rapid deployment with minimal manual intervention. [cite: 843]"
    },
    {
      "id": "q228",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In a microservices architecture, each service should be designed with a specific principle to ensure it performs a specific task and interacts with other services through well-defined interfaces. What principle is this referring to?",
      "options": [
        {
          "id": "A",
          "text": "Principle of Least Privilege"
        },
        {
          "id": "B",
          "text": "Single Responsibility Principle"
        },
        {
          "id": "C",
          "text": "Open-Closed Principle"
        },
        {
          "id": "D",
          "text": "Zero Trust Model"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The Single Responsibility Principle dictates that a class or module (or in the context of microservices, a service) should have only one reason to change, meaning it should only have one job or responsibility. In microservices, this ensures that each service does one thing and does it well, and interacts with others through clear interfaces."
    },
    {
      "id": "q229",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization that processes classified information is implementing a network infrastructure to ensure the highest level of data security. The CISO recommends using a network configuration that ensures the system remains completely disconnected from unsecured networks and any external connections. Which of the following describes this type of configuration?",
      "options": [
        {
          "id": "A",
          "text": "DMZ (Demilitarized Zone)"
        },
        {
          "id": "B",
          "text": "VPN (Virtual Private Network)"
        },
        {
          "id": "C",
          "text": "VLAN (Virtual Local Area Network)"
        },
        {
          "id": "D",
          "text": "Air-gapped network"
        }
      ],
      "correctOptionId": "D",
      "explanation": "An air-gapped network is a network that is physically isolated from unsecured networks. Computers on an air-gapped network cannot communicate with non-air-gapped computers and aren’t connected to external networks or the internet, ensuring the highest level of data security."
    },
    {
      "id": "q230",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large financial institution is planning to upgrade its IT infrastructure to allow for a more efficient use of hardware resources, faster deployment of applications, and reduced server provisioning times. While evaluating different technologies, which of the following would directly address these needs?",
      "options": [
        {
          "id": "A",
          "text": "Network Segmentation"
        },
        {
          "id": "B",
          "text": "Intrusion Detection System"
        },
        {
          "id": "C",
          "text": "Virtualization"
        },
        {
          "id": "D",
          "text": "Multi-Factor Authentication"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Virtualization allows multiple virtual machines to run on a single physical host, maximizing the use of hardware resources. It enables rapid provisioning and deployment of new servers and applications, addressing the requirements of the financial institution."
    },
    {
      "id": "q231",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution wants to enhance the security of its wired network. The goal is to ensure that only authorized devices can connect to the network, and the authentication process should be based on credentials or digital certificates. Which of the following protocols would best serve this purpose?",
      "options": [
        {
          "id": "A",
          "text": "SNMPv3"
        },
        {
          "id": "B",
          "text": "SSL/TLS"
        },
        {
          "id": "C",
          "text": "802.1X EAP"
        },
        {
          "id": "D",
          "text": "DHCP"
        }
      ],
      "correctOptionId": "C",
      "explanation": "802.1X Extensible Authentication Protocol (EAP) provides port-based network access control and is used on wired networks to ensure that only authenticated devices can connect. It supports multiple authentication methods including credentials, digital certificates, and smart cards."
    },
    {
      "id": "q232",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechBlitz Inc. recently underwent an IT audit, and one of the suggestions was to reduce the attack surface. Which of the following measures would be MOST effective in accomplishing this?",
      "options": [
        {
          "id": "A",
          "text": "Increasing the password length requirement for all users"
        },
        {
          "id": "B",
          "text": "Implementing regular vulnerability assessments"
        },
        {
          "id": "C",
          "text": "Deactivating unused services and ports on servers"
        },
        {
          "id": "D",
          "text": "Implementing a strict BYOD (Bring Your Own Device) policy"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Reducing the number of active services and ports directly diminishes the number of potential entry points for attackers, thus reducing the attack surface. This is a fundamental security hardening technique."
    },
    {
      "id": "q233",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SafeMed, a medical facility, uses a life-saving medical device with embedded software. Recently, a security vulnerability was found in the software, but due to the device’s FDA regulatory status and the software’s design, it cannot be patched immediately. How should SafeMed address the security concerns related to this device?",
      "options": [
        {
          "id": "A",
          "text": "Disconnect the device from all networks and only use it in standalone mode"
        },
        {
          "id": "B",
          "text": "Inform patients about the vulnerability and let them decide whether to use the device"
        },
        {
          "id": "C",
          "text": "Implement network segmentation and strictly control access to the device"
        },
        {
          "id": "D",
          "text": "Return the device to the manufacturer for a full refund"
        }
      ],
      "correctOptionId": "C",
      "explanation": "By implementing network segmentation, SafeMed can isolate the vulnerable device from other parts of the network, reducing the risk of potential exploitation. Strictly controlling access ensures only authorized personnel can use or interact with the device."
    },
    {
      "id": "q234",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A smart city project is deploying various IoT sensors across the city to gather data on traffic patterns, weather, pollution levels, and more. Which of the following is the MOST critical security consideration when deploying these sensors?",
      "options": [
        {
          "id": "A",
          "text": "Ensuring high data transfer speeds to cater to the volume of data from the IoT sensors"
        },
        {
          "id": "B",
          "text": "Limiting the IoT devices to communicate only with specific, pre-defined servers"
        },
        {
          "id": "C",
          "text": "Installing physical locks on IoT devices to prevent theft"
        },
        {
          "id": "D",
          "text": "Allowing IoT devices to connect to any available network for data redundancy"
        }
      ],
      "correctOptionId": "B",
      "explanation": "By restricting IoT devices to communicate only with specific, trusted servers, unauthorized access and data tampering risks can be minimized. This measure ensures that data is only sent to and received from legitimate sources."
    },
    {
      "id": "q235",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational corporation is looking to replace its current firewalls at all its global branches. The IT director wants a solution that can perform stateful inspection of packets, application-level filtering, and integrate threat intelligence feeds for updated threat awareness. Which of the following would be the most suitable solution?",
      "options": [
        {
          "id": "A",
          "text": "Stateful Packet Inspection Firewall"
        },
        {
          "id": "B",
          "text": "Proxy Server"
        },
        {
          "id": "C",
          "text": "Web Application Firewall (WAF)"
        },
        {
          "id": "D",
          "text": "Next-Generation Firewall (NGFW)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Next-Generation Firewalls (NGFWs) are designed to offer traditional firewall capabilities such as stateful inspection but also come with advanced features like application-level filtering and the ability to integrate with threat intelligence feeds. This makes NGFWs suitable for modern, complex environments."
    },
    {
      "id": "q236",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational organization with multiple branch offices is looking to simplify their WAN connectivity and reduce costs while ensuring that their inter-office data transfers remain secure. Which technology would best fit their needs?",
      "options": [
        {
          "id": "A",
          "text": "VLAN"
        },
        {
          "id": "B",
          "text": "MPLS"
        },
        {
          "id": "C",
          "text": "SD-WAN"
        },
        {
          "id": "D",
          "text": "DMZ"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Software-Defined Wide Area Network (SD-WAN) offers enterprises the ability to leverage any combination of transport services, including MPLS, LTE, and broadband internet services, to securely connect users to applications. SD-WAN can reduce costs and simplify WAN management."
    },
    {
      "id": "q237",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial company wants to improve its web browsing security by intercepting and inspecting web traffic to prevent users from accessing malicious sites or downloading malware. They are looking for a solution that can act as an intermediary for requests from clients seeking resources from other servers. What should the company implement?",
      "options": [
        {
          "id": "A",
          "text": "Network IDS"
        },
        {
          "id": "B",
          "text": "VPN Concentrator"
        },
        {
          "id": "C",
          "text": "Proxy server"
        },
        {
          "id": "D",
          "text": "Jump server"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A Proxy server serves as an intermediary between the user’s computer and the internet. It intercepts web requests and can provide functions such as filtering web content, caching web requests, and inspecting traffic for security reasons."
    },
    {
      "id": "q238",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In an IaaS (Infrastructure as a Service) model, which of the following tasks is typically the responsibility of the cloud customer in a standard Cloud Responsibility Matrix?",
      "options": [
        {
          "id": "A",
          "text": "Physical security of data centers"
        },
        {
          "id": "B",
          "text": "Patching of host operating systems"
        },
        {
          "id": "C",
          "text": "Network infrastructure maintenance"
        },
        {
          "id": "D",
          "text": "Patching of guest operating systems"
        }
      ],
      "correctOptionId": "D",
      "explanation": "In an IaaS model, the customer is typically responsible for managing their own virtual machines, which includes patching the guest operating systems. The cloud provider is responsible for the underlying infrastructure and host OS."
    },
    {
      "id": "q239",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In a cloud environment, which of the following matrices defines the shared responsibilities between the cloud provider and the customer for specific cloud service models?",
      "options": [
        {
          "id": "A",
          "text": "Shared Accountability Matrix"
        },
        {
          "id": "B",
          "text": "Cloud Resource Allocation Table"
        },
        {
          "id": "C",
          "text": "Cloud Security Posture Matrix"
        },
        {
          "id": "D",
          "text": "Cloud Responsibility Matrix"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The Cloud Responsibility Matrix defines the shared responsibilities between the cloud provider and the customer in a cloud environment, delineating what security measures each party will handle."
    },
    {
      "id": "q240",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial organization collects and stores personally identifiable information (PII) of its customers. The company operates within jurisdictions that have strict regulations concerning the storage, transmission, and processing of such data. Which of the following strategies would be MOST appropriate for the company to ensure compliance with these regulations?",
      "options": [
        {
          "id": "A",
          "text": "Use open source encryption algorithms without validation"
        },
        {
          "id": "B",
          "text": "Only store customer data in physical, on-site servers"
        },
        {
          "id": "C",
          "text": "Implement data classification and labeling procedures"
        },
        {
          "id": "D",
          "text": "Limit the number of administrators with access to the data"
        }
      ],
      "correctOptionId": "C",
      "explanation": "By implementing data classification and labeling procedures, the organization can clearly identify which data is regulated, ensuring appropriate controls, access rights, and protective measures are in place. This aids in achieving compliance by setting clear guidelines on data handling based on the classification."
    },
    {
      "id": "q241",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During an annual review, a company discovered that one of its critical systems had several unscheduled downtimes over the year. The CTO has recommended a move towards high availability architecture to address this. What is the PRIMARY concern when implementing high availability?",
      "options": [
        {
          "id": "A",
          "text": "Ensuring that there are no single points of failure"
        },
        {
          "id": "B",
          "text": "Ensuring that the system is patched regularly"
        },
        {
          "id": "C",
          "text": "Implementing multi-factor authentication"
        },
        {
          "id": "D",
          "text": "Storing backups in multiple geographical locations"
        }
      ],
      "correctOptionId": "A",
      "explanation": "In a high availability (HA) system, eliminating single points of failure is of utmost importance. By ensuring redundancy at every potential failure point, the system can remain operational even if a component fails."
    },
    {
      "id": "q242",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent service outage, a hospital’s IT team is reviewing the availability of its patient record system. They want to ensure the system remains operational, even in the event of hardware failures. Which of the following considerations is MOST relevant to this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Implementing database mirroring"
        },
        {
          "id": "B",
          "text": "Regularly updating the system's antivirus definitions"
        },
        {
          "id": "C",
          "text": "Using strong encryption for data at rest"
        },
        {
          "id": "D",
          "text": "Conducting penetration testing on the system"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Database mirroring is a solution for increasing the availability of a SQL Server database. This ensures that in the event of a hardware failure, there’s a mirrored copy of the data available, directly addressing the need for operational resilience against hardware failures."
    },
    {
      "id": "q243",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An enterprise wants to configure its firewall so that if a malfunction occurs, the firewall should automatically allow traffic to ensure business continuity. Which failure mode should be implemented?",
      "options": [
        {
          "id": "A",
          "text": "Fail-safe"
        },
        {
          "id": "B",
          "text": "Fail-over"
        },
        {
          "id": "C",
          "text": "Fail-closed"
        },
        {
          "id": "D",
          "text": "Fail-open"
        }
      ],
      "correctOptionId": "D",
      "explanation": "In a fail-open mode, when the system or device fails, it defaults to an “open” state, allowing traffic to pass through. This mode prioritizes availability (business continuity) over strict security."
    },
    {
      "id": "q244",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization with a single physical network infrastructure wants to separate the traffic of its finance department from that of the HR department. They do not want to set up entirely new physical networks but want to ensure that data packets from one department do not mix with the other’s. What should the organization implement?",
      "options": [
        {
          "id": "A",
          "text": "Air-gapped network"
        },
        {
          "id": "B",
          "text": "DMZ (Demilitarized Zone)"
        },
        {
          "id": "C",
          "text": "VLAN (Virtual Local Area Network)"
        },
        {
          "id": "D",
          "text": "VPN (Virtual Private Network)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A VLAN allows a network administrator to create a logical network within a physical network. This logical segmentation can separate the traffic of different departments, ensuring that data packets from one VLAN do not mix with another, effectively isolating them without requiring new physical hardware."
    },
    {
      "id": "q245",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large organization is considering deploying a solution that will allow employees to securely access company resources remotely using their personal devices. The organization wants a solution that can provide strong authentication and ensure that the data remains confidential during transit. Which technology should be adopted?",
      "options": [
        {
          "id": "A",
          "text": "Kerberos"
        },
        {
          "id": "B",
          "text": "Remote Desktop Services (RDS)"
        },
        {
          "id": "C",
          "text": "Remote Access VPN"
        },
        {
          "id": "D",
          "text": "SNMP"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Remote Access VPN provides a secure, encrypted tunnel from a remote device over the public internet to an organization’s internal network, ensuring data confidentiality during transit and supporting strong authentication methods."
    },
    {
      "id": "q246",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce company wants to ensure that their customers’ credit card data remains confidential while in transit over the internet. They are seeking a protocol that can help in securing their website’s communication. Which protocol would best fit this requirement?",
      "options": [
        {
          "id": "A",
          "text": "IPSec"
        },
        {
          "id": "B",
          "text": "SSH"
        },
        {
          "id": "C",
          "text": "TLS"
        },
        {
          "id": "D",
          "text": "ICMP"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Transport Layer Security (TLS), and its predecessor SSL, is a cryptographic protocol that ensures data confidentiality and integrity over the internet. Websites use TLS (HTTPS) to secure all communications between their servers and web browsers."
    },
    {
      "id": "q247",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A rapidly growing e-commerce platform has been facing intermittent downtimes, especially during sale events. To ensure high availability and even distribution of traffic among servers, the company is considering deploying a specific type of network appliance. Which of the following should the company deploy?",
      "options": [
        {
          "id": "A",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "B",
          "text": "VPN concentrator"
        },
        {
          "id": "C",
          "text": "Load balancer"
        },
        {
          "id": "D",
          "text": "Proxy server"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A load balancer is designed to distribute incoming network traffic across multiple servers to ensure that no single server is overwhelmed with too much traffic. This helps in ensuring high availability and optimizing resource utilization."
    },
    {
      "id": "q248",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization is transitioning its IT infrastructure to be cloud-centric and aims to adopt a zero-trust network approach. They are looking for a solution that integrates cloud security, zero-trust access, and WAN capabilities, ensuring employees have consistent secure access regardless of their location. Which of the following best addresses their needs?",
      "options": [
        {
          "id": "A",
          "text": "Remote Desktop Services (RDS)"
        },
        {
          "id": "B",
          "text": "Secure access service edge (SASE)"
        },
        {
          "id": "C",
          "text": "Content Delivery Network (CDN)"
        },
        {
          "id": "D",
          "text": "Virtual Local Area Network (VLAN)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "SASE (Secure Access Service Edge) integrates network and security functions (like Zero Trust Network Access) into a single cloud-delivered service, providing consistent and secure access to resources regardless of where the user or resource is located, making it ideal for cloud-centric, zero-trust environments."
    },
    {
      "id": "q249",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medium-sized e-commerce company recently experienced a data breach due to an external attack. Post-incident analysis revealed that while there were indications of the attack in their network traffic, no alarms were raised at the time of the attack. The company now wants to implement a solution to actively monitor and take action against malicious network traffic. Which of the following should they deploy?",
      "options": [
        {
          "id": "A",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "B",
          "text": "Network Access Control (NAC)"
        },
        {
          "id": "C",
          "text": "Proxy server"
        },
        {
          "id": "D",
          "text": "Intrusion Prevention System (IPS)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "An Intrusion Prevention System (IPS) not only detects malicious network activities but also takes active steps to prevent or block them, which is ideal for a company looking to bolster its defenses against real-time threats and actively take action."
    },
    {
      "id": "q250",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GreenTech, a data center company, is planning to expand its operations in a region known for frequent power outages. To maintain security posture and ensure continuity of operations, which of the following should be their PRIMARY consideration regarding power?",
      "options": [
        {
          "id": "A",
          "text": "Using power-efficient servers to reduce electricity costs"
        },
        {
          "id": "B",
          "text": "Setting up solar panels to promote green energy"
        },
        {
          "id": "C",
          "text": "Investing in redundant power supplies and uninterruptible power systems (UPS)"
        },
        {
          "id": "D",
          "text": "Running operations only during peak daylight hours to ensure natural lighting"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Given the frequent power outages in the region, having redundant power supplies and UPS ensures that operations continue smoothly without abrupt interruptions, which can lead to system crashes, data corruption, or security breaches."
    },
    {
      "id": "q251",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A startup company anticipates rapid growth in its user base over the next year. They are considering an architectural model for their application that can handle the projected growth without performance issues. Which of the following would be the BEST design consideration for this situation?",
      "options": [
        {
          "id": "A",
          "text": "Implementing strict password policies"
        },
        {
          "id": "B",
          "text": "Using a monolithic application design"
        },
        {
          "id": "C",
          "text": "Integrating a DDoS protection mechanism"
        },
        {
          "id": "D",
          "text": "Adopting a microservices architecture"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Microservices architecture breaks down an application into small, independent services that run as separate processes. This allows for better scalability as each service can be scaled individually based on the demand, which is ideal for anticipated rapid growth."
    },
    {
      "id": "q252",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A healthcare provider is updating its network infrastructure. Due to the sensitive nature of the medical data they handle, they want to ensure that any anomalies or malicious activities in the network are immediately detected and alerted. Which system should they primarily consider?",
      "options": [
        {
          "id": "A",
          "text": "Intrusion Prevention System (IPS)"
        },
        {
          "id": "B",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "C",
          "text": "DHCP server"
        },
        {
          "id": "D",
          "text": "VPN concentrator"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An Intrusion Detection System (IDS) actively monitors network traffic for any signs of malicious activities or policy violations and alerts the administrators. It is suitable for organizations that want to ensure anomalies are promptly detected and alerted."
    },
    {
      "id": "q253",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT security team at a large corporation is evaluating monitoring tools for network traffic. They need a solution that can inspect network packets without introducing any potential latency or altering the network flow. Which type of device attribute should they consider?",
      "options": [
        {
          "id": "A",
          "text": "Active IDS"
        },
        {
          "id": "B",
          "text": "Passive firewall"
        },
        {
          "id": "C",
          "text": "Active firewall"
        },
        {
          "id": "D",
          "text": "Passive IDS"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Passive IDS (Intrusion Detection System) is designed to monitor and analyze network traffic without influencing the traffic flow or causing potential latency. It observes traffic in real-time but doesn’t take active actions on its own."
    },
    {
      "id": "q254",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A developer at your company is excited about the scalability benefits of serverless architecture and has deployed a new service using it. However, you notice an increased bill due to the service even when it’s not in use. Which of the following could be a contributing factor?",
      "options": [
        {
          "id": "A",
          "text": "The serverless functions are continuously triggered by unintended events"
        },
        {
          "id": "B",
          "text": "The server hardware is outdated"
        },
        {
          "id": "C",
          "text": "The load balancer is misconfigured"
        },
        {
          "id": "D",
          "text": "The organization lacks a Content Delivery Network (CDN)"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Serverless architectures charge based on the number of function invocations and the execution time. If there are unintended events, such as rogue requests or misconfigured triggers, continuously invoking the serverless functions, it could lead to unexpected costs."
    },
    {
      "id": "q255",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent security breach, CyberCorp is reviewing its software vendors for their responsiveness to vulnerabilities. Which of the following metrics would BEST assist CyberCorp in determining the timeliness and efficiency of security patches from a vendor?",
      "options": [
        {
          "id": "A",
          "text": "The frequency of software updates released by the vendor"
        },
        {
          "id": "B",
          "text": "The vendor's quarterly financial reports"
        },
        {
          "id": "C",
          "text": "Time between vulnerability disclosure and patch release by the vendor"
        },
        {
          "id": "D",
          "text": "The number of features added by the vendor in the last software update"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The time taken by a vendor to release a security patch after a vulnerability is disclosed is a direct measure of their responsiveness to security threats. A shorter duration indicates a higher prioritization of security concerns."
    },
    {
      "id": "q256",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corp. has recently developed a new manufacturing process that reduces production costs by 50%. This process is not yet patented and is considered a trade secret. The company wants to ensure that employees do not disclose this process to competitors. Which of the following would be the MOST effective strategy to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Providing employees with a bonus for keeping the process confidential"
        },
        {
          "id": "B",
          "text": "Conducting random checks of employee communications"
        },
        {
          "id": "C",
          "text": "Implementing a mandatory non-disclosure agreement (NDA) for all employees"
        },
        {
          "id": "D",
          "text": "Hosting quarterly seminars to educate employees about the value of the trade secret"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An NDA is a legally binding contract that prohibits employees from disclosing confidential information, like trade secrets. If an employee breaches the NDA, the company has legal grounds to seek damages or other remedies."
    },
    {
      "id": "q257",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large e-commerce platform is facing challenges during peak sale periods, where the influx of users causes slowdowns and occasional outages. Which of the following solutions would BEST improve scalability during these high-demand times?",
      "options": [
        {
          "id": "A",
          "text": "Implement a centralized logging system"
        },
        {
          "id": "B",
          "text": "Employ auto-scaling cloud solutions"
        },
        {
          "id": "C",
          "text": "Increase the frequency of data backups"
        },
        {
          "id": "D",
          "text": "Mandate regular security training for employees"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Auto-scaling in cloud solutions automatically adjusts the number of computational resources based on the actual demand. During peak periods, resources can be automatically increased to handle the demand, ensuring the system remains scalable and responsive."
    },
    {
      "id": "q258",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce company is preparing for an upcoming Black Friday sale, expecting a surge in web traffic. To ensure their systems remain responsive during the sale, which of the following would be the MOST effective strategy to implement?",
      "options": [
        {
          "id": "A",
          "text": "Increasing password complexity for all users"
        },
        {
          "id": "B",
          "text": "Limiting the number of products on sale"
        },
        {
          "id": "C",
          "text": "Implementing a content delivery network (CDN)"
        },
        {
          "id": "D",
          "text": "Conducting a yearly security audit"
        }
      ],
      "correctOptionId": "C",
      "explanation": "CDNs distribute the traffic load among multiple servers, often geographically dispersed. This not only speeds up content delivery to users but also helps in handling traffic surges, ensuring the system remains responsive during high-demand periods."
    },
    {
      "id": "q259",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational corporation has data centers located in different countries. Due to regulatory constraints, remote access to these data centers is highly restricted. The company’s IT administrators need a centralized way to access all data centers securely without directly accessing them from their workstations. Which solution should the company consider?",
      "options": [
        {
          "id": "A",
          "text": "Setting up a DMZ"
        },
        {
          "id": "B",
          "text": "Implementing a Jump server"
        },
        {
          "id": "C",
          "text": "Deploying an Active Directory"
        },
        {
          "id": "D",
          "text": "Using a local Proxy"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A Jump server, also known as a bastion host, acts as an intermediary server allowing users to connect to it before accessing another server or network. It provides a controlled and centralized means of access between two networks."
    },
    {
      "id": "q260",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Acme Corp is restructuring its internal network to improve its security posture. They aim to separate areas with different levels of trust. Which of the following approaches would BEST achieve this objective?",
      "options": [
        {
          "id": "A",
          "text": "Implementing VLANs based on organizational departments"
        },
        {
          "id": "B",
          "text": "Setting up a perimeter firewall to segment external and internal traffic"
        },
        {
          "id": "C",
          "text": "Designing network zones based on data sensitivity and access requirements"
        },
        {
          "id": "D",
          "text": "Using a single, flat network for simplicity"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Zoning based on data sensitivity and access requirements ensures that segments of the network with varying trust levels are isolated. This reduces the risk of a breach in one zone affecting another, which is the definition of achieving separation based on trust."
    },
    {
      "id": "q261",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Your organization is implementing Infrastructure as Code (IaC) to deploy and manage its cloud infrastructure. As part of a security review, what is a primary concern regarding the use of IaC scripts?",
      "options": [
        {
          "id": "A",
          "text": "Lack of graphical interface for infrastructure visualization"
        },
        {
          "id": "B",
          "text": "Hardcoding sensitive data within the scripts"
        },
        {
          "id": "C",
          "text": "Inability to scale the infrastructure dynamically"
        },
        {
          "id": "D",
          "text": "Incompatibility with non-cloud environments"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Infrastructure as Code (IaC) scripts are meant to automate infrastructure deployment. If sensitive data such as passwords or API keys are hardcoded into these scripts, they could be exposed, leading to potential security breaches."
    },
    {
      "id": "q262",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cloud-based SaaS company wants to ensure its infrastructure can handle a potential influx of a large number of users in the future. Which of the following approaches would BEST meet this scalability consideration?",
      "options": [
        {
          "id": "A",
          "text": "Implement a horizontal scaling strategy"
        },
        {
          "id": "B",
          "text": "Introduce multi-factor authentication"
        },
        {
          "id": "C",
          "text": "Deploy deep packet inspection tools"
        },
        {
          "id": "D",
          "text": "Implement a centralized logging system"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Horizontal scaling involves adding more machines or nodes to a system to handle increased load, which can be especially effective in a cloud environment. It allows the infrastructure to accommodate more users by distributing the load among multiple servers."
    },
    {
      "id": "q263",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software development company is looking to migrate its legacy applications to a more modern infrastructure. They want to ensure the applications can be deployed consistently across multiple environments without the challenges of varying dependencies and configurations. Which approach would best achieve this goal?",
      "options": [
        {
          "id": "A",
          "text": "Virtual Machine Deployment"
        },
        {
          "id": "B",
          "text": "Bare-Metal Deployment"
        },
        {
          "id": "C",
          "text": "Containerization"
        },
        {
          "id": "D",
          "text": "Serverless Computing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Containerization encapsulates an application and its dependencies into a ‘container.’ This allows the application to be consistently deployed across different environments regardless of variations in configurations or dependencies."
    },
    {
      "id": "q264",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large enterprise is considering a transition to a more flexible and programmable network architecture. They want to centralize the control plane, allowing for automated, programmable network configurations and rapid provisioning. Which network architecture model should they consider?",
      "options": [
        {
          "id": "A",
          "text": "VLAN (Virtual Local Area Network)"
        },
        {
          "id": "B",
          "text": "MPLS (Multiprotocol Label Switching)"
        },
        {
          "id": "C",
          "text": "VPN (Virtual Private Network)"
        },
        {
          "id": "D",
          "text": "SDN (Software-Defined Networking)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Software-Defined Networking (SDN) centralizes the control plane, decoupling it from the data plane. This allows for a more flexible and programmable network, enabling automated configurations, and rapid provisioning."
    },
    {
      "id": "q265",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A global corporation has undergone several IT incidents in the past year, including outages due to natural disasters and cyber attacks. The CEO wants to ensure the organization’s IT infrastructure can withstand or rapidly recover from disruptive events. Which of the following best encapsulates this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Adopting a Zero Trust Architecture"
        },
        {
          "id": "B",
          "text": "Implementing a strict password policy"
        },
        {
          "id": "C",
          "text": "Establishing a Business Continuity Plan (BCP) with emphasis on resilience"
        },
        {
          "id": "D",
          "text": "Regularly updating firewall rules"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A Business Continuity Plan (BCP) with emphasis on resilience addresses the organization's ability to withstand or rapidly recover and continue essential functions during and after major disruptive events, encompassing both natural disasters and cyber attacks."
    },
    {
      "id": "q266",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medical company has recently deployed a device to monitor patient heart rates in real time. This device uses a real-time operating system (RTOS) to guarantee immediate response times. The security team is concerned about potential risks. Which of the following would be a KEY recommendation to enhance the security of such devices?",
      "options": [
        {
          "id": "A",
          "text": "Ensure real-time data analysis capabilities"
        },
        {
          "id": "B",
          "text": "Integrate the device with the corporate cloud for backups"
        },
        {
          "id": "C",
          "text": "Implement strict network segmentation for the device"
        },
        {
          "id": "D",
          "text": "Increase the storage capacity of the device"
        }
      ],
      "correctOptionId": "C",
      "explanation": "To protect RTOS devices, which often prioritize performance over security, it’s crucial to minimize their exposure to potential threats. By segmenting the network, you can isolate the device from other systems and reduce the risk of a security incident."
    },
    {
      "id": "q267",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A small business wants to deploy a single network security device that can handle multiple security functions such as firewall protection, intrusion detection, anti-malware, and content filtering. Which of the following would be the most suitable solution?",
      "options": [
        {
          "id": "A",
          "text": "Network Intrusion Detection System (NIDS)"
        },
        {
          "id": "B",
          "text": "Web Application Firewall (WAF)"
        },
        {
          "id": "C",
          "text": "Unified Threat Management (UTM)"
        },
        {
          "id": "D",
          "text": "Proxy Server"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Unified Threat Management (UTM) devices are designed to combine multiple security features (firewall, IDS, anti-malware, etc.) into a single appliance, making them ideal for smaller organizations seeking comprehensive security management."
    },
    {
      "id": "q268",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce company is experiencing attacks that specifically target the shopping cart feature of its web application. They want to implement a firewall that can understand web application-specific commands and provide protection. Which type of firewall should they consider?",
      "options": [
        {
          "id": "A",
          "text": "Layer 4 Firewall"
        },
        {
          "id": "B",
          "text": "Layer 2 Firewall"
        },
        {
          "id": "C",
          "text": "Layer 7 Firewall"
        },
        {
          "id": "D",
          "text": "Packet Filtering Firewall"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Layer 7 firewalls, often known as Application Layer firewalls or Web Application Firewalls (WAF), can understand and filter traffic based on application-specific data, commands, or functions, providing protection against web application attacks like SQL injection or cross-site scripting."
    },
    {
      "id": "q269",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial organization’s high-security data center has an authentication system for its main entry. If the system encounters an unexpected error, the organization wants to ensure that no one can gain access to the data center until the system is fixed. Which configuration should the authentication system be set to?",
      "options": [
        {
          "id": "A",
          "text": "Fail-open"
        },
        {
          "id": "B",
          "text": "Fail-closed"
        },
        {
          "id": "C",
          "text": "Fail-secure"
        },
        {
          "id": "D",
          "text": "Fail-passive"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Fail-closed, also known as fail-secure, is a mode where if a system fails, it denies all requests by default, effectively “closing” access. In high-security environments, it’s often preferred to prevent any unauthorized access during system failures."
    },
    {
      "id": "q270",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational company wants to allow its remote employees to securely access the corporate intranet over the Internet. The company’s primary concern is to ensure data confidentiality and integrity during transit. Which solution should the company implement?",
      "options": [
        {
          "id": "A",
          "text": "VLAN"
        },
        {
          "id": "B",
          "text": "VPN"
        },
        {
          "id": "C",
          "text": "NAC"
        },
        {
          "id": "D",
          "text": "DMZ"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A Virtual Private Network (VPN) allows remote users to establish a secure connection to an organization’s internal network over the public internet. It encrypts the data in transit, ensuring both confidentiality and integrity."
    },
    {
      "id": "q271",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After conducting a business impact analysis, a local library determined that they could afford several days of downtime without a significant impact on their operations. They want a disaster recovery solution that offers a balance between cost and recovery capabilities. Which site consideration is the most suitable for the library’s needs?",
      "options": [
        {
          "id": "A",
          "text": "Mobile site with a full set of IT equipment"
        },
        {
          "id": "B",
          "text": "Hot site with daily data replication"
        },
        {
          "id": "C",
          "text": "Cold site"
        },
        {
          "id": "D",
          "text": "Warm site with weekly backups"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **cold site** is an offsite facility that is pre-configured to accept equipment and data backups but doesn’t have any of its own operational equipment. Given the library’s **tolerance for several days of downtime**, a cold site would be a cost-effective solution."
    },
    {
      "id": "q272",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An online payment gateway is evaluating methods to enhance the security of its payment processing system. They want a solution that replaces sensitive cardholder data with a unique identifier that has no intrinsic value by itself. Which method should they implement?",
      "options": [
        {
          "id": "A",
          "text": "Hashing the card data"
        },
        {
          "id": "B",
          "text": "Encrypting the card data"
        },
        {
          "id": "C",
          "text": "Masking the card data"
        },
        {
          "id": "D",
          "text": "Tokenizing the card data"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Tokenization involves replacing sensitive data with a non-sensitive equivalent, referred to as a token, that has no extrinsic or exploitable meaning or value. This is a preferred method for protecting credit card information."
    },
    {
      "id": "q273",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software company is developing a new cloud-based application where clients can store and manage their customer contact details. The stored data does not include financial or medical information but does contain phone numbers and email addresses. How should this information be classified?",
      "options": [
        {
          "id": "A",
          "text": "Public"
        },
        {
          "id": "B",
          "text": "Restricted"
        },
        {
          "id": "C",
          "text": "Sensitive"
        },
        {
          "id": "D",
          "text": "Classified"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Phone numbers and email addresses are considered Personally Identifiable Information (PII) and should be classified as **sensitive** since unauthorized access could lead to privacy violations or misuse, though they are generally less critical than Restricted/Confidential data."
    },
    {
      "id": "q274",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Cybertech Corp. is reviewing its backup protocols to enhance security. They decided that before transferring backups to an offsite location, the data should be rendered unreadable to unauthorized individuals. Which backup strategy will ensure this requirement is met?",
      "options": [
        {
          "id": "A",
          "text": "Use deduplication before storing backups"
        },
        {
          "id": "B",
          "text": "Store backups in proprietary formats"
        },
        {
          "id": "C",
          "text": "Encrypt backups before transfer"
        },
        {
          "id": "D",
          "text": "Compress backups using standard tools"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Encryption transforms data into a format that can only be read by someone who possesses the decryption key. By encrypting backups before transferring, the company ensures that even if unauthorized individuals access the backup data, they won’t be able to understand its contents."
    },
    {
      "id": "q275",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a major power outage, TechWave Corp. wants to ensure their primary data center’s operations can be swiftly and seamlessly shifted to another facility. The company wants this process to be automated and immediate to prevent any service interruption. What type of test should TechWave Corp. conduct to validate this functionality?",
      "options": [
        {
          "id": "A",
          "text": "Conduct a vulnerability assessment on both data centers"
        },
        {
          "id": "B",
          "text": "Execute a failover test"
        },
        {
          "id": "C",
          "text": "Engage in a tabletop exercise"
        },
        {
          "id": "D",
          "text": "Perform a routine backup test"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **failover test** involves simulating a failure in the primary system (or primary data center) to ensure that the backup system (or secondary facility) can seamlessly take over without any service interruption. This validates the business continuity functionality."
    },
    {
      "id": "q276",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A pharmaceutical company is working on a new drug formula that promises to revolutionize the treatment of a particular disease. The R&D team has detailed documentation on the components, procedures, and results of the drug trials. How should this documentation be classified to ensure that only the right people within the company have access?",
      "options": [
        {
          "id": "A",
          "text": "Unclassified"
        },
        {
          "id": "B",
          "text": "Public"
        },
        {
          "id": "C",
          "text": "Confidential"
        },
        {
          "id": "D",
          "text": "Sensitive"
        }
      ],
      "correctOptionId": "C",
      "explanation": "This drug formula and its documentation represent valuable intellectual property for the pharmaceutical company. To protect against theft, corporate espionage, or accidental disclosure, it should be classified as **confidential** to ensure limited, controlled access."
    },
    {
      "id": "q277",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software development company maintains a shared code repository. The company wants to ensure that only developers can make changes to the code, but testers should be able to view the code without modifying it. Which approach should be implemented?",
      "options": [
        {
          "id": "A",
          "text": "Assign all employees read-only permissions"
        },
        {
          "id": "B",
          "text": "Provide testers with administrative rights"
        },
        {
          "id": "C",
          "text": "Implement role-based access controls (RBAC)"
        },
        {
          "id": "D",
          "text": "Use data encryption on the repository"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Role-Based Access Control (RBAC) assigns permissions based on roles within an organization. Developers can be given a role that allows them to modify code, while testers are given a role that only allows them to read the code, effectively managing permissions based on job function."
    },
    {
      "id": "q278",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software development company has just expanded its team and wants to ensure that in the event of a disaster, they can resume operations within a day. However, they have a limited budget for disaster recovery. Which of the following disaster recovery site types would be the most suitable for the company’s needs?",
      "options": [
        {
          "id": "A",
          "text": "Hot site with hourly data replication"
        },
        {
          "id": "B",
          "text": "Cold site with monthly data backups"
        },
        {
          "id": "C",
          "text": "Warm site with daily backups"
        },
        {
          "id": "D",
          "text": "Offsite tape backups"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **warm site** is a middle ground that has some equipment and recent data backups, allowing operations to resume within a day (satisfying the RTO) while being more budget-friendly than a hot site."
    },
    {
      "id": "q279",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution wants to ensure that if a cyber attacker gains unauthorized access to one section of their network, the attacker cannot easily move laterally to more sensitive parts of the network. Which method can help achieve this objective?",
      "options": [
        {
          "id": "A",
          "text": "Deploying a honeypot in every segment"
        },
        {
          "id": "B",
          "text": "Implementing network segmentation"
        },
        {
          "id": "C",
          "text": "Applying encryption on all data traffic"
        },
        {
          "id": "D",
          "text": "Enabling two-factor authentication for all users"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Network segmentation divides a network into multiple segments or subnets. This limits access between segments and can restrict an attacker's ability to move laterally from a compromised, less sensitive segment to a more sensitive one."
    },
    {
      "id": "q280",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DataFin, a financial analytics firm, experienced a minor fire incident in one of its server rooms. Fortunately, they had backups stored in another wing of the building, allowing for quick data recovery. However, management realizes that in a major disaster, both primary and backup data might be destroyed. To address this, which backup strategy should DataFin consider?",
      "options": [
        {
          "id": "A",
          "text": "Mirror Backup"
        },
        {
          "id": "B",
          "text": "Local Storage Backup"
        },
        {
          "id": "C",
          "text": "Incremental Backup"
        },
        {
          "id": "D",
          "text": "Offsite Backup"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Offsite Backup involves storing backup data in a different geographical location from the primary data. This ensures that even if a major disaster impacts the primary location, the backup remains safe and can be used for recovery."
    },
    {
      "id": "q281",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A healthcare organization with patients worldwide is planning to set up a backup site for its medical data repository. They have been advised to consider geographic dispersion as part of their disaster recovery plan. Which of the following reasons is the LEAST valid for geographic dispersion in this scenario?",
      "options": [
        {
          "id": "A",
          "text": "Mitigate risks of regional natural disasters"
        },
        {
          "id": "B",
          "text": "Offer redundancy in case of local power outages"
        },
        {
          "id": "C",
          "text": "Benefit from varying peak load times in different regions"
        },
        {
          "id": "D",
          "text": "Ensure faster access speeds for global patients"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Geographic dispersion’s primary goal in a disaster recovery context is **resilience and redundancy** against widespread failures (A, B) or large-scale load issues (C), not necessarily optimizing individual end-user access speeds (D) from a backup site."
    },
    {
      "id": "q282",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational corporation is expanding its operations in various countries. The company has decided to restrict access to its internal network based on geolocation to ensure that only employees from specific countries can access certain data. Which of the following would be the MOST appropriate solution to implement this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Deploy a VPN with multi-factor authentication"
        },
        {
          "id": "B",
          "text": "Use MAC address filtering on all company devices"
        },
        {
          "id": "C",
          "text": "Implement a geolocation-based access control system"
        },
        {
          "id": "D",
          "text": "Set up region-specific SSIDs for the company's Wi-Fi network"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Geolocation-based access control systems determine users’ physical locations (via IP address lookup) and can grant or deny access based on predefined geographic boundaries, making it the most suitable solution for restricting access based on country-specific requirements."
    },
    {
      "id": "q283",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DigitalFront, an e-commerce company, is expecting a surge in traffic during their upcoming annual sale event. They want to ensure that their website and applications can handle the anticipated increase in user activity without any performance degradation. Which of the following steps is MOST relevant to achieving this goal?",
      "options": [
        {
          "id": "A",
          "text": "Increasing the frequency of security audits"
        },
        {
          "id": "B",
          "text": "Implementing capacity planning specifically focused on technology"
        },
        {
          "id": "C",
          "text": "Adopting multi-factor authentication for all users"
        },
        {
          "id": "D",
          "text": "Investing in advanced threat intelligence solutions"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Capacity planning with a focus on technology ensures that all technological resources, such as servers, bandwidth, storage, and software, are adequately prepared to handle the expected increase in load or traffic, ensuring smooth performance during peak periods."
    },
    {
      "id": "q284",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DeltaTech, a financial institution, operates its primary site on a UNIX-based platform. For disaster recovery purposes, they are considering setting up a backup site on a different platform. Which of the following is NOT a primary benefit of introducing platform diversity in this case?",
      "options": [
        {
          "id": "A",
          "text": "It reduces the organization's learning curve by using familiar technologies"
        },
        {
          "id": "B",
          "text": "It provides resilience against attacks targeting UNIX-based systems"
        },
        {
          "id": "C",
          "text": "It ensures that platform-specific outages don't affect both primary and backup sites"
        },
        {
          "id": "D",
          "text": "It diversifies the attack surface, reducing the impact of specific platform vulnerabilities"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Introducing a new platform usually **increases** the learning curve as staff need to be trained on the new system. The primary benefits of platform diversity are resilience, redundancy, and diversifying the attack surface."
    },
    {
      "id": "q285",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent system upgrade, CloudTech Corp. decided to validate the efficiency and reliability of its new data processing system. To do this, they run the new system alongside the old one and compare the outcomes. This way, they aim to ensure that the new system is both robust and capable of handling the current workload. What kind of testing is CloudTech Corp. utilizing?",
      "options": [
        {
          "id": "A",
          "text": "Load Testing"
        },
        {
          "id": "B",
          "text": "Failover Testing"
        },
        {
          "id": "C",
          "text": "Parallel Processing Testing"
        },
        {
          "id": "D",
          "text": "Simulation Testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Parallel Processing Testing involves running two systems simultaneously (typically the new one and the old one) to compare the outputs. This type of testing ensures that a new system is as effective and reliable as the previous one, checking for consistency and robustness."
    },
    {
      "id": "q286",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechSolutions Inc., a rapidly growing startup, is expanding its workforce to meet its customer demands. As part of this expansion, they need to ensure their IT infrastructure can accommodate the influx of new employees without compromising performance or security. Which of the following should be TechSolutions’ primary focus during this expansion phase?",
      "options": [
        {
          "id": "A",
          "text": "Adopting a Zero Trust Network Architecture"
        },
        {
          "id": "B",
          "text": "Increasing the frequency of vulnerability assessments"
        },
        {
          "id": "C",
          "text": "Implementing capacity planning"
        },
        {
          "id": "D",
          "text": "Deploying additional firewalls and intrusion detection systems"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Capacity planning ensures that an organization’s infrastructure, technology, and people are scaled appropriately to meet growth and performance needs. In the scenario, ensuring the IT infrastructure can handle the increased demand from new employees is a core function of capacity planning."
    },
    {
      "id": "q287",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "StreamNet, a popular online streaming service, is planning to launch in three new countries. They anticipate a substantial increase in users and concurrent streams. To ensure that the service remains uninterrupted and provides a seamless experience to new users, which action related to capacity planning should StreamNet prioritize?",
      "options": [
        {
          "id": "A",
          "text": "Investing in content encryption and DRM"
        },
        {
          "id": "B",
          "text": "Increasing marketing and promotional activities in the new countries"
        },
        {
          "id": "C",
          "text": "Implementing stronger user authentication methods"
        },
        {
          "id": "D",
          "text": "Expanding and optimizing their infrastructure to handle the projected growth"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Infrastructure capacity planning allows StreamNet to predict the necessary resources required and make the needed upgrades or adjustments to their servers, networks, storage, and other infrastructure components. This ensures a smooth user experience even with the influx of new users."
    },
    {
      "id": "q288",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GlobalTech is implementing a disaster recovery plan and wants to ensure continuous availability with no data loss. They have decided to use replication as a backup strategy. Which of the following replication techniques should GlobalTech implement to achieve their objective?",
      "options": [
        {
          "id": "A",
          "text": "Periodic replication scheduled daily"
        },
        {
          "id": "B",
          "text": "Asynchronous replication with hourly synchronization"
        },
        {
          "id": "C",
          "text": "Synchronous replication"
        },
        {
          "id": "D",
          "text": "Snapshot replication every 30 minutes"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Synchronous replication ensures that data is written to the primary and secondary locations simultaneously, ensuring no data loss and continuous availability (assuming the backup site is fully operational). This method is suitable for the objective of 'no data loss'."
    },
    {
      "id": "q289",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software company has developed a new product. They want to release a user manual that details how to use the software, its features, and basic troubleshooting steps. What should be the classification of this user manual?",
      "options": [
        {
          "id": "A",
          "text": "Confidential"
        },
        {
          "id": "B",
          "text": "Restricted"
        },
        {
          "id": "C",
          "text": "Public"
        },
        {
          "id": "D",
          "text": "Internal"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A user manual is intended for all users of the software and should be easily accessible. It does not contain sensitive or proprietary information about the software’s underlying code or algorithms. Hence, it should be classified as **Public**."
    },
    {
      "id": "q290",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A global finance firm has recently faced downtime due to unexpected disasters in its main operational region. The firm wishes to have a backup site that would allow them to continue their operations with minimal downtime and no data loss. Which type of backup site would be the most appropriate for the firm?",
      "options": [
        {
          "id": "A",
          "text": "Cold site"
        },
        {
          "id": "B",
          "text": "Warm site"
        },
        {
          "id": "C",
          "text": "Hot site"
        },
        {
          "id": "D",
          "text": "Mobile site"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **hot site** is a fully operational offsite data center configured and ready to continue operations immediately after a disaster. It has all the necessary equipment and up-to-date data backups, making it ideal for scenarios where minimal downtime and no data loss are essential."
    },
    {
      "id": "q291",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An international bank is setting up a new online portal for its customers to access their financial statements. Which measure should the bank implement to ensure that financial data in transit between the customer’s browser and the bank’s servers is kept confidential?",
      "options": [
        {
          "id": "A",
          "text": "Use file-level encryption for all financial statements"
        },
        {
          "id": "B",
          "text": "Implement a Web Application Firewall (WAF)"
        },
        {
          "id": "C",
          "text": "Use Secure Sockets Layer (SSL) or Transport Layer Security (TLS) for the portal"
        },
        {
          "id": "D",
          "text": "Store all financial data in an encrypted database"
        }
      ],
      "correctOptionId": "C",
      "explanation": "SSL/TLS (HTTPS) is designed to secure data in transit. By encrypting the data between the customer’s browser and the bank’s servers, it ensures the data’s confidentiality while in transit."
    },
    {
      "id": "q292",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A global e-commerce website wants to allow its customer service representatives to assist clients with order issues without exposing the full credit card details of the clients. Which method should the IT department employ to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Replace all digits of the credit card number with random characters"
        },
        {
          "id": "B",
          "text": "Display only the last four digits of the credit card number while masking the rest"
        },
        {
          "id": "C",
          "text": "Encrypt the credit card number with a symmetric key"
        },
        {
          "id": "D",
          "text": "Use a hash function to represent the credit card number"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Displaying only the last four digits and masking the rest ensures that customer service representatives have enough information to assist customers without being exposed to the entire credit card number, satisfying the requirement for partial disclosure."
    },
    {
      "id": "q293",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corp recently faced a ransomware attack that encrypted critical data files. The company’s IT team was unable to decrypt the files but had a recent backup available. However, when they tried to restore the data, they found out the backup was corrupted. Which of the following best practices would have helped XYZ Corp in ensuring the integrity of their backups?",
      "options": [
        {
          "id": "A",
          "text": "Regularly testing backup restoration processes"
        },
        {
          "id": "B",
          "text": "Storing backups in the same directory as original files"
        },
        {
          "id": "C",
          "text": "Increasing the frequency of backups to every hour"
        },
        {
          "id": "D",
          "text": "Encrypting backups with a strong encryption algorithm"
        }
      ],
      "correctOptionId": "A",
      "explanation": "By regularly testing the restoration process from backups, organizations can identify and correct any issues with the backup files or processes (like corruption or configuration errors) before they are needed in a critical recovery situation."
    },
    {
      "id": "q294",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution is updating its infrastructure to ensure that customer financial data is kept secure from both internal and external threats. Which of the following would be the MOST effective measure to protect customer financial data from being accessed by unauthorized internal users?",
      "options": [
        {
          "id": "A",
          "text": "Deploying perimeter firewalls around the institution's network"
        },
        {
          "id": "B",
          "text": "Implementing two-factor authentication (2FA) for all customer accounts"
        },
        {
          "id": "C",
          "text": "Enforcing strict access controls based on the principle of least privilege"
        },
        {
          "id": "D",
          "text": "Conducting yearly cybersecurity awareness training for all employees"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The principle of least privilege (PoLP) ensures that users are given only the permissions they need to perform their job functions, nothing more. By enforcing strict access controls using this principle, the financial institution can minimize the risk of unauthorized internal users accessing sensitive financial data."
    },
    {
      "id": "q295",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company’s proprietary algorithm is being targeted by competitors aiming to replicate its functionality. To safeguard its intellectual property without changing the algorithm’s behavior, the company wants a method that disguises the original code structure. What should they implement?",
      "options": [
        {
          "id": "A",
          "text": "Data masking on the algorithm’s output"
        },
        {
          "id": "B",
          "text": "Obfuscation on the algorithm's code"
        },
        {
          "id": "C",
          "text": "Encryption of the algorithm's storage location"
        },
        {
          "id": "D",
          "text": "Implementing a hashing mechanism within the algorithm"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Obfuscating the algorithm’s code will make it more challenging to understand, reverse engineer, or replicate, without altering its behavior or results. This is a common method for protecting intellectual property (IP) in software."
    },
    {
      "id": "q296",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational e-commerce company is expanding its infrastructure to handle increasing traffic. The primary goal is to distribute the incoming web traffic across multiple servers to ensure that no single server is overwhelmed. Which method should the company use?",
      "options": [
        {
          "id": "A",
          "text": "Deploy a web application firewall"
        },
        {
          "id": "B",
          "text": "Implement server clustering"
        },
        {
          "id": "C",
          "text": "Use hardware-based firewalls"
        },
        {
          "id": "D",
          "text": "Set up a load balancer"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Load balancers distribute incoming traffic across multiple servers to ensure that no single server is overwhelmed, which enhances the availability and fault tolerance of applications."
    },
    {
      "id": "q297",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A law firm is transitioning to a digital storage system and wants to ensure that client records and case files are protected from unauthorized access. Which of the following would be the BEST strategy to ensure the confidentiality of legal information stored digitally?",
      "options": [
        {
          "id": "A",
          "text": "Conducting regular penetration testing on the digital storage system"
        },
        {
          "id": "B",
          "text": "Encrypting the client records and case files"
        },
        {
          "id": "C",
          "text": "Applying watermarks to digital documents"
        },
        {
          "id": "D",
          "text": "Limiting physical access to the server room"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Encryption is the process of converting information into an unreadable format unless one has the appropriate decryption key. By encrypting legal documents, unauthorized individuals, even if they gain access to the storage system, won’t be able to comprehend the content of the documents."
    },
    {
      "id": "q298",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A healthcare provider stores vast amounts of patient data on its servers. While they have strong perimeter defenses, they want an additional layer of security to ensure patient data remains confidential even in the event of unauthorized access. Which of the following would be the MOST effective solution for this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Use hash algorithms on all patient data"
        },
        {
          "id": "B",
          "text": "Implement data deduplication techniques"
        },
        {
          "id": "C",
          "text": "Encrypt the stored patient data"
        },
        {
          "id": "D",
          "text": "Use a web application firewall (WAF)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Encrypting patient data ensures that even if malicious actors gain access to the data, they won’t be able to understand or utilize it without the proper decryption key, providing confidentiality for data at rest."
    },
    {
      "id": "q299",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a major outage, CloudTech Services is reviewing their disaster recovery strategy. The company found out that after restoring from backup, several applications did not function properly due to configuration discrepancies. What would be the best approach to ensure a successful recovery in the future?",
      "options": [
        {
          "id": "A",
          "text": "Prioritize applications for backup based on their importance"
        },
        {
          "id": "B",
          "text": "Implement differential backups in addition to full backups"
        },
        {
          "id": "C",
          "text": "Regularly conduct a full system recovery in a test environment"
        },
        {
          "id": "D",
          "text": "Use a third-party backup solution instead of an in-house solution"
        }
      ],
      "correctOptionId": "C",
      "explanation": "By regularly conducting a full system recovery in a test environment (a type of disaster recovery testing), the organization can simulate a real-world recovery scenario. This helps in identifying any discrepancies, configuration issues, or application dependencies that might be missed during regular backups, ensuring a successful recovery when it’s critically needed."
    },
    {
      "id": "q300",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution is implementing a system where customers can verify the integrity of their monthly statements without having access to the original data. Which of the following techniques would be MOST appropriate for this task?",
      "options": [
        {
          "id": "A",
          "text": "Encrypting the statements using AES"
        },
        {
          "id": "B",
          "text": "Compressing the statements to reduce file size"
        },
        {
          "id": "C",
          "text": "Hashing the statements and providing the hash value to the customers"
        },
        {
          "id": "D",
          "text": "Tokenizing sensitive data within the statements"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Hashing can be used to ensure data integrity. Customers can hash the statement they receive and compare it with the provided hash value to verify that the data hasn’t been altered (integrity) without needing access to the original data's content."
    },
    {
      "id": "q301",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization has decided to focus on securing its database servers where customer details and transaction records are stored. This data is not being actively accessed or processed. Which type of security measure would be MOST appropriate for this type of data?",
      "options": [
        {
          "id": "A",
          "text": "VLData Loss Prevention (DLP) for emailAN"
        },
        {
          "id": "B",
          "text": "Web Application Firewall (WAF)"
        },
        {
          "id": "C",
          "text": "Full Disk Encryption (FDE)"
        },
        {
          "id": "D",
          "text": "Intrusion Detection System (IDS) for network traffic"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Data at rest refers to data that is not actively moving through the network. Full Disk Encryption (FDE) is a security measure specifically designed to protect data at rest by encrypting the entire hard drive."
    },
    {
      "id": "q302",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational company is considering using a cloud storage provider based in a foreign country to store customer data. The company’s home country has strict data protection laws that require customer data to remain within its borders. Which of the following considerations is MOST critical for the company when choosing the cloud storage provider?",
      "options": [
        {
          "id": "A",
          "text": "The speed of data access from the foreign-based cloud storage"
        },
        {
          "id": "B",
          "text": "The encryption standards used by the foreign cloud provider"
        },
        {
          "id": "C",
          "text": "Whether the foreign cloud provider offers data storage exclusively within the company's home country"
        },
        {
          "id": "D",
          "text": "The reputation and customer reviews of the foreign cloud provider"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Data sovereignty refers to the concept that digital data is subject to the laws of the country in which it is located. If a company’s home country has regulations that require customer data to stay within its borders, ensuring the provider offers storage that complies with this requirement is the most critical consideration."
    },
    {
      "id": "q303",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After an annual review, BestTech Co. realized that their IT team was unfamiliar with the protocols to follow during a data breach. To ensure the team understands the steps and decision points without launching a live drill, what should the company implement?",
      "options": [
        {
          "id": "A",
          "text": "Upgrade their firewall systems"
        },
        {
          "id": "B",
          "text": "Engage in a tabletop exercise"
        },
        {
          "id": "C",
          "text": "Conduct a red team exercise"
        },
        {
          "id": "D",
          "text": "Implement multi-factor authentication for all users"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Tabletop exercises allow teams to discuss and review specific scenarios, such as a data breach, and ensure everyone understands their roles and the processes to follow. It’s a cost-effective way to familiarize the team with response procedures in a controlled, discussion-based format."
    },
    {
      "id": "q304",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureData Inc., a financial firm, recently experienced a system crash and needed to restore their database. While they had a full backup from the previous week, they realized that several days of transactions were missing. To prevent such data loss in the future, which backup strategy involving recording transactions can SecureData implement?",
      "options": [
        {
          "id": "A",
          "text": "Implement differential backups"
        },
        {
          "id": "B",
          "text": "Use snapshot backups every hour"
        },
        {
          "id": "C",
          "text": "Enable database journaling"
        },
        {
          "id": "D",
          "text": "Configure RAID 5 for their storage"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Journaling involves keeping a log or ‘journal’ of every transaction or change that happens. If there’s a crash, the system can be restored to the last backup and then use the journal to replay each transaction, thus preventing data loss."
    },
    {
      "id": "q305",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureNet Inc. recently upgraded their security infrastructure. To validate how the new system would respond in real-world scenarios without exposing it to actual risks, they decide to imitate certain cyber threats in a controlled environment. Which type of test is SecureNet Inc. planning to conduct?",
      "options": [
        {
          "id": "A",
          "text": "Penetration Testing"
        },
        {
          "id": "B",
          "text": "Simulation Testing"
        },
        {
          "id": "C",
          "text": "Vulnerability Assessment"
        },
        {
          "id": "D",
          "text": "Failover Testing."
        }
      ],
      "correctOptionId": "B",
      "explanation": "Simulation testing involves creating a model of the system under test and then stimulating it with virtual users or devices to understand its behavior under various conditions. In a cybersecurity context, this means imitating cyber threats in a controlled environment (a safe simulation) to assess the security infrastructure."
    },
    {
      "id": "q306",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ZenTech, a multinational corporation, recently adopted a multi-cloud strategy, deploying workloads across multiple cloud service providers. What is a primary security benefit of this approach?",
      "options": [
        {
          "id": "A",
          "text": "Centralized management of all cloud resources"
        },
        {
          "id": "B",
          "text": "Automatic encryption of data in transit between clouds"
        },
        {
          "id": "C",
          "text": "Mitigation against a single point of failure"
        },
        {
          "id": "D",
          "text": "Reduction in the cost of cloud storage solutions"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Using a multi-cloud strategy distributes workloads across various cloud providers, which reduces the risk associated with outages or security breaches in any one provider. This diversification ensures that a failure or compromise in one cloud environment doesn’t jeopardize the entire infrastructure."
    },
    {
      "id": "q307",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GlobalBank has implemented a backup strategy where only the changes made since the last full backup are recorded. Considering the need to optimize storage and reduce backup times, the IT team performs this type of backup every day. What backup frequency and type is GlobalBank utilizing?",
      "options": [
        {
          "id": "A",
          "text": "Incremental Backup daily"
        },
        {
          "id": "B",
          "text": "Differential Backup weekly"
        },
        {
          "id": "C",
          "text": "Full Backup bi-weekly"
        },
        {
          "id": "D",
          "text": "Snapshot Backup daily"
        }
      ],
      "correctOptionId": "A",
      "explanation": "An incremental backup captures only the data that has changed since the **last full backup** or **last incremental backup** (if scheduled incrementally). The key characteristic described—only the changes since the last full backup are recorded—defines the incremental type, and they perform it daily."
    },
    {
      "id": "q308",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A defense contractor is working on a new missile system. While the detailed schematics and operational details are classified, they have an overview document that only a select group of partners and stakeholders can view. How should this overview document be classified?",
      "options": [
        {
          "id": "A",
          "text": "Public"
        },
        {
          "id": "B",
          "text": "Restricted"
        },
        {
          "id": "C",
          "text": "Confidential"
        },
        {
          "id": "D",
          "text": "Top Secret"
        }
      ],
      "correctOptionId": "B",
      "explanation": "“Restricted” classification is used when access to the document or data needs to be limited to a particular group of individuals, like a select group of partners and stakeholders."
    },
    {
      "id": "q309",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A tech startup is developing a mobile application that offers exclusive content only to users within a specific country due to licensing agreements. Which method should the startup use to ensure that only users within that country can access the content?",
      "options": [
        {
          "id": "A",
          "text": "Integrate a time-based one-time password (TOTP) system"
        },
        {
          "id": "B",
          "text": "Use geolocation-based access controls"
        },
        {
          "id": "C",
          "text": "Enable biometric authentication"
        },
        {
          "id": "D",
          "text": "Implement IP whitelisting"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Geolocation-based access controls can identify a user’s geographic location (usually via IP address lookup) and allow or deny access based on predefined geographic boundaries, making it the most suitable solution for the requirement of restricting content to a specific country."
    },
    {
      "id": "q310",
      "domain": "Implementation",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "MetroTech recently experienced an incident where an employee mistakenly deleted a portion of their database. The IT team was able to restore the data using a backup snapshot taken 24 hours prior. However, some data loss still occurred. Which of the following recommendations would minimize data loss in a similar situation in the future?",
      "options": [
        {
          "id": "A",
          "text": "Configure backup snapshots to be taken on a weekly basis"
        },
        {
          "id": "B",
          "text": "Employ a differential backup solution in addition to snapshots"
        },
        {
          "id": "C",
          "text": "Increase the storage capacity for backups"
        },
        {
          "id": "D",
          "text": "Use an hourly snapshot backup schedule"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Increasing the frequency of snapshot backups, such as taking them every hour, will ensure that the maximum amount of data that can be lost (**Recovery Point Objective, RPO**) is limited to that hour’s worth. This minimizes the potential for data loss compared to a 24-hour window."
    },
    {
      "id": "q311",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution is shutting down one of its data centers. Given the highly sensitive nature of the data stored, the company wants to ensure that there is no possibility of data retrieval from the storage devices. Which of the following methods would be the MOST effective in guaranteeing the destruction of data?",
      "options": [
        {
          "id": "A",
          "text": "Overwriting with zeros"
        },
        {
          "id": "B",
          "text": "Standard Disk Format"
        },
        {
          "id": "C",
          "text": "Physical Destruction"
        },
        {
          "id": "D",
          "text": "Running a Disk Cleanup utility"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Physical destruction, such as shredding or incinerating the storage devices, ensures complete destruction of the media, making data retrieval impossible, regardless of the tools or techniques employed."
    },
    {
      "id": "q312",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial application allows users to transfer money to other accounts by entering the account number and the amount to transfer. During a security audit, it was observed that malicious users could enter SQL code into the account number field to manipulate the application’s database. Which security technique should the development team implement to address this vulnerability?",
      "options": [
        {
          "id": "A",
          "text": "Code obfuscation"
        },
        {
          "id": "B",
          "text": "Input validation"
        },
        {
          "id": "C",
          "text": "Encryption at rest"
        },
        {
          "id": "D",
          "text": "Session timeout"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Input validation ensures that only valid and expected data is accepted by an application. By validating and sanitizing user input, the application can prevent malicious data, such as SQL code, from being processed and executed, thus mitigating the risk of SQL injection attacks."
    },
    {
      "id": "q313",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a series of cyberattacks, BetaTech, a financial institution, decided to standardize the configurations across its entire server fleet. They’ve established a secure baseline configuration for their servers. What should be the NEXT step in ensuring the servers conform to this new baseline?",
      "options": [
        {
          "id": "A",
          "text": "Frequently conduct vulnerability scanning on all servers"
        },
        {
          "id": "B",
          "text": "Introduce biometric authentication for server access"
        },
        {
          "id": "C",
          "text": "Deploy the secure baseline across all servers"
        },
        {
          "id": "D",
          "text": "Monitor network traffic to detect anomalies"
        }
      ],
      "correctOptionId": "C",
      "explanation": "After establishing a secure baseline, the immediate next step is to deploy or apply this baseline to the servers. This ensures that all servers start from a standardized and secure configuration."
    },
    {
      "id": "q314",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An energy company is looking to enhance the security of its ICS/SCADA systems. They have realized that default configurations might have vulnerabilities. Which of the following is the BEST initial step to take in securing their ICS/SCADA systems?",
      "options": [
        {
          "id": "A",
          "text": "Connect the ICS/SCADA systems to the internet for remote monitoring"
        },
        {
          "id": "B",
          "text": "Use commercial off-the-shelf software to add a layer of security"
        },
        {
          "id": "C",
          "text": "Implement a secure baseline configuration tailored to the ICS/SCADA environment"
        },
        {
          "id": "D",
          "text": "Increase the number of users with administrative privileges to ensure rapid response to issues"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Implementing a secure baseline configuration tailored to ICS/SCADA systems ensures that unnecessary services and potential vulnerabilities are minimized, which is a fundamental and best practice for securing critical infrastructure."
    },
    {
      "id": "q315",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational company is planning to issue company-owned mobile devices to its executives. Given the sensitivity of the data the executives handle, what hardening measure would be MOST effective to ensure the security of these mobile devices?",
      "options": [
        {
          "id": "A",
          "text": "Regularly updating the company's social media profiles to mention the security measures taken"
        },
        {
          "id": "B",
          "text": "Implementing biometric authentication in addition to strong passcodes"
        },
        {
          "id": "C",
          "text": "Turning off Bluetooth and Wi-Fi when not in use"
        },
        {
          "id": "D",
          "text": "Setting the devices to display brighter screen colors"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Biometric authentication (like fingerprint or facial recognition) combined with strong passcodes provides a robust multi-factor authentication mechanism, making unauthorized access to the device significantly more challenging, which is a critical hardening measure."
    },
    {
      "id": "q316",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large e-commerce company wants to ensure that their newly developed application is free from any code vulnerabilities before it is deployed to the production environment. They want to catch any software flaws, especially those that might lead to potential security risks. Which of the following methodologies should they employ?",
      "options": [
        {
          "id": "A",
          "text": "Runtime application self-protection (RASP)"
        },
        {
          "id": "B",
          "text": "Penetration testing on the live application"
        },
        {
          "id": "C",
          "text": "Static code analysis"
        },
        {
          "id": "D",
          "text": "User acceptance testing (UAT)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Static code analysis involves analyzing the application’s code without executing it (non-runtime), focusing on detecting vulnerabilities, coding flaws, or other potential security threats, making it an appropriate methodology for the pre-deployment phase."
    },
    {
      "id": "q317",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jenny, the new CIO of a multinational firm, wants to ensure that every software and hardware asset in the organization has a clearly defined owner responsible for its security and maintenance. Which of the following is the MOST effective way to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Deploy an automated asset discovery tool and assign assets to departments based on their location"
        },
        {
          "id": "B",
          "text": "Mandate that every department head is the default owner of all assets within their department"
        },
        {
          "id": "C",
          "text": "Conduct regular audits and require individual users to claim ownership of their assets"
        },
        {
          "id": "D",
          "text": "Introduce an Asset Management System where assets are logged with defined ownership as they are procured or assigned"
        }
      ],
      "correctOptionId": "D",
      "explanation": "An Asset Management System provides a structured way to log, track, and manage assets throughout their lifecycle, including defining and recording asset ownership when they are first procured or assigned. This ensures clarity and accountability regarding asset responsibility."
    },
    {
      "id": "q318",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An audit report indicates that several network switches in a data center lack security configurations, making them potential targets for attackers. Which of the following hardening techniques would BEST reduce the risk associated with these switches?",
      "options": [
        {
          "id": "A",
          "text": "Configuring port mirroring to monitor network traffic"
        },
        {
          "id": "B",
          "text": "Disabling unused switch ports"
        },
        {
          "id": "C",
          "text": "Implementing load balancing across the switches"
        },
        {
          "id": "D",
          "text": "Increasing the MAC address table size for performance"
        }
      ],
      "correctOptionId": "B",
      "explanation": "By disabling unused switch ports, you minimize potential points of entry for unauthorized devices or attackers. This is a basic but highly effective step in network switch hardening to reduce the attack surface."
    },
    {
      "id": "q319",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DeltaSoft has released a new web application. The security team is tasked with observing the application’s behavior and responses when it is running to identify potential vulnerabilities. Which method is most appropriate for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Static Analysis"
        },
        {
          "id": "B",
          "text": "Fuzz Testing"
        },
        {
          "id": "C",
          "text": "Whitebox Testing"
        },
        {
          "id": "D",
          "text": "Dynamic Analysis"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Dynamic analysis focuses on examining an application during its execution, or **runtime**. By observing the application’s behavior and responses when it is actually running, security teams can identify vulnerabilities that manifest during real-world operation."
    },
    {
      "id": "q320",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst at ZetaTech is looking to gather information about emerging threats and vulnerabilities relevant to their industry. Which of the following would be the MOST suitable method to obtain real-time, continuously updated data on potential security issues?",
      "options": [
        {
          "id": "A",
          "text": "Relying solely on automated internal vulnerability scanners"
        },
        {
          "id": "B",
          "text": "Periodic manual penetration testing"
        },
        {
          "id": "C",
          "text": "Subscribing to an OSINT threat feed"
        },
        {
          "id": "D",
          "text": "Regularly checking the company's firewall logs"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An OSINT (Open-source intelligence) threat feed provides real-time, continuously updated information from external sources about emerging threats and vulnerabilities, making it suitable for proactive threat awareness."
    },
    {
      "id": "q321",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medium-sized enterprise is preparing to upgrade its office workstations. The IT department is considering purchasing devices from a lesser-known, but cheaper, vendor. Which of the following should be the PRIMARY consideration before finalizing the acquisition?",
      "options": [
        {
          "id": "A",
          "text": "Whether the vendor offers a longer warranty period"
        },
        {
          "id": "B",
          "text": "The aesthetics and design of the workstations"
        },
        {
          "id": "C",
          "text": "The vendor's adherence to industry security standards and practices"
        },
        {
          "id": "D",
          "text": "The amount of training required for IT staff to support the new devices"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Ensuring that the vendor adheres to industry security standards and practices is critical for maintaining a secure environment. Devices that don’t meet security standards (supply chain security) could introduce significant vulnerabilities into the organization."
    },
    {
      "id": "q322",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ClearView Industries wants to give their employees the flexibility to choose their own devices for work while retaining control over the device configurations and applications. Which deployment model would be the MOST appropriate for ClearView’s objectives?",
      "options": [
        {
          "id": "A",
          "text": "Bring Your Own Device (BYOD)"
        },
        {
          "id": "B",
          "text": "Choose Your Own Device (CYOD)"
        },
        {
          "id": "C",
          "text": "Corporate-owned, Personally Enabled (COPE)"
        },
        {
          "id": "D",
          "text": "Fixed Device Deployment (FDD)"
        }
      ],
      "correctOptionId": "B",
      "explanation": "In the **CYOD** model, employees are allowed to **choose a device** from a list of approved (pre-vetted) devices. The organization **retains control** over the device configurations and applications, ensuring a blend of user preference and corporate security."
    },
    {
      "id": "q323",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A recently hired security analyst at CyberTech Inc. wants to get a better understanding of the organization’s network infrastructure. Which of the following activities would provide a LIST of servers, workstations, printers, switches, and routers currently active in the network?",
      "options": [
        {
          "id": "A",
          "text": "Vulnerability Scanning"
        },
        {
          "id": "B",
          "text": "Intrusion Detection"
        },
        {
          "id": "C",
          "text": "Network Enumeration"
        },
        {
          "id": "D",
          "text": "Penetration Testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Network enumeration is the process of actively identifying and listing all devices (servers, workstations, etc.) currently present and active on a network."
    },
    {
      "id": "q324",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A network engineer is preparing a new batch of routers for deployment in a large organization. Which of the following steps should the engineer prioritize to ensure that the routers are securely configured from the start?",
      "options": [
        {
          "id": "A",
          "text": "Configure the routers to use DHCP to dynamically assign IP addresses to connected devices"
        },
        {
          "id": "B",
          "text": "Change the default administrative credentials on the routers"
        },
        {
          "id": "C",
          "text": "Update the routers' firmware to the latest, most feature-rich version, regardless of its security posture"
        },
        {
          "id": "D",
          "text": "Customize the routers' LED colors for easy identification in the server room"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Routers often come with default credentials that are widely known and can be easily exploited by attackers. Changing these credentials is the most fundamental step in securing and establishing a secure baseline for network devices."
    },
    {
      "id": "q325",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A university is looking to revamp its wireless network to provide secure access for students and faculty. The IT department wants an authentication method that leverages a centralized server to validate user credentials and can integrate with their existing directory service. Which authentication protocol should they consider?",
      "options": [
        {
          "id": "A",
          "text": "Pre-shared Key (PSK)"
        },
        {
          "id": "B",
          "text": "Lightweight Extensible Authentication Protocol (LEAP)"
        },
        {
          "id": "C",
          "text": "Extensible Authentication Protocol-Transport Layer Security (EAP-TLS)"
        },
        {
          "id": "D",
          "text": "Shared Secret Challenge"
        }
      ],
      "correctOptionId": "C",
      "explanation": "EAP-TLS, when used with WPA2/WPA3-Enterprise, provides strong security by using digital certificates to authenticate both the client and the server. It operates with a RADIUS server, allowing for centralized management of user credentials against an existing directory service."
    },
    {
      "id": "q326",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechHive Corp. is planning to sell some of its old servers. Before selling, they want to ensure that no retrievable personal or business data remains on the hard drives. Which of the following methods should TechHive use to ensure the drives are clean and the data cannot be recovered?",
      "options": [
        {
          "id": "A",
          "text": "Simple Format"
        },
        {
          "id": "B",
          "text": "Magnetic Wiping"
        },
        {
          "id": "C",
          "text": "Physical Destruction"
        },
        {
          "id": "D",
          "text": "Standard Defragmentation"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Magnetic wiping, also known as degaussing, uses a strong magnetic field to permanently erase data from traditional magnetic storage devices. This renders the data irretrievable while keeping the device physically intact for potential resale (unless it's an SSD, in which case crypto-erase or physical destruction might be necessary)."
    },
    {
      "id": "q327",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The network administrator of a rapidly growing tech firm is concerned about the potential vulnerabilities of the company’s switches. Which of the following measures is MOST effective in hardening these network switches against possible attacks?",
      "options": [
        {
          "id": "A",
          "text": "Assigning static IP addresses to all connected devices"
        },
        {
          "id": "B",
          "text": "Implementing strong password policies for switch access"
        },
        {
          "id": "C",
          "text": "Upgrading the switches to support 10Gbps for future expansion"
        },
        {
          "id": "D",
          "text": "Customizing the switch LED colors for easy identification"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Hardening switches involves reducing their vulnerability to unauthorized access and misuse. Implementing strong password policies ensures that only authorized personnel can access and configure the switches, which is a critical security step for any administrative interface."
    },
    {
      "id": "q328",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A robotics company is developing an autonomous vehicle that relies on a Real-Time Operating System (RTOS) to manage its operations. The development team wants to ensure that the vehicle’s RTOS has a solid security posture. What should the team prioritize when establishing a secure baseline for this RTOS?",
      "options": [
        {
          "id": "A",
          "text": "Installing a robust antivirus software"
        },
        {
          "id": "B",
          "text": "Enabling all features for maximum functionality"
        },
        {
          "id": "C",
          "text": "Regularly backing up the RTOS data to the cloud"
        },
        {
          "id": "D",
          "text": "Minimizing the number of services and open ports"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Reducing the number of services and open ports (minimizing the attack surface) is a fundamental principle of system hardening, especially crucial for embedded or Real-Time Operating Systems (RTOS) where performance and stability are paramount and unnecessary services are often a security risk."
    },
    {
      "id": "q329",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After deploying wireless access points in a large manufacturing facility, employees report inconsistent wireless connectivity in some areas. What tool would be most effective for the IT team to use to visualize areas of weak wireless signal strength?",
      "options": [
        {
          "id": "A",
          "text": "Network bandwidth monitor"
        },
        {
          "id": "B",
          "text": "Protocol analyzer"
        },
        {
          "id": "C",
          "text": "Heat map software"
        },
        {
          "id": "D",
          "text": "Intrusion detection system"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Heat map software creates a visual representation of wireless signal strength across a physical area, making it easy for IT teams to identify and address areas of weak or inconsistent wireless coverage."
    },
    {
      "id": "q330",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah, an end-user, downloads a software update from a website. Before installing, she wants to make sure the software hasn’t been modified maliciously and that it originates from a trusted source. What should Sarah check to validate this?",
      "options": [
        {
          "id": "A",
          "text": "The SSL certificate of the website"
        },
        {
          "id": "B",
          "text": "The application's code signing certificate"
        },
        {
          "id": "C",
          "text": "The application's open-source repositories"
        },
        {
          "id": "D",
          "text": "The software's user reviews"
        }
      ],
      "correctOptionId": "B",
      "explanation": "By checking the application’s **code signing certificate**, Sarah can validate that the software was indeed issued by a trusted entity (**authenticity**) and hasn’t been altered since it was signed (**integrity**)."
    },
    {
      "id": "q331",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A local coffee shop offers free Wi-Fi to its customers. Recently, there have been reports of man-in-the-middle attacks on the network. The owner decides to upgrade the wireless security and wants to implement a cryptographic protocol to secure data transmissions. Which protocol would provide a balance between security and performance for the public Wi-Fi users?",
      "options": [
        {
          "id": "A",
          "text": "Advanced Encryption Standard (AES)"
        },
        {
          "id": "B",
          "text": "Wired Equivalent Privacy (WEP)"
        },
        {
          "id": "C",
          "text": "RC4 Stream Cipher"
        },
        {
          "id": "D",
          "text": "Open Wireless"
        }
      ],
      "correctOptionId": "A",
      "explanation": "AES (Advanced Encryption Standard) is the most modern and secure symmetric encryption algorithm currently considered robust. It offers strong security without causing significant performance overhead, making it the best balance for wireless security."
    },
    {
      "id": "q332",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software development company has decided to host their applications in a multi-cloud environment. Before deploying, they are looking to enhance the security of their cloud-based resources. Which of the following is the BEST practice for hardening their cloud infrastructure?",
      "options": [
        {
          "id": "A",
          "text": "Ensure that all cloud storage buckets or containers are publicly accessible for easier data sharing"
        },
        {
          "id": "B",
          "text": "Apply consistent security configurations and policies across all cloud providers"
        },
        {
          "id": "C",
          "text": "Use the same SSH key pairs across all cloud instances for uniformity"
        },
        {
          "id": "D",
          "text": "Limit the use of Identity and Access Management (IAM) roles to senior staff only"
        }
      ],
      "correctOptionId": "B",
      "explanation": "In a multi-cloud environment, applying consistent security configurations and policies across all cloud providers prevents 'shadow IT' or unintended misconfigurations from creating a security weak link in one of the environments."
    },
    {
      "id": "q333",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After running a vulnerability scan on the company’s infrastructure, a security analyst notices a reported vulnerability on a server. However, after manual verification, the analyst determines that the vulnerability doesn’t actually exist on the server. What is this situation best described as?",
      "options": [
        {
          "id": "A",
          "text": "A false negative"
        },
        {
          "id": "B",
          "text": "A true positive"
        },
        {
          "id": "C",
          "text": "A false positive"
        },
        {
          "id": "D",
          "text": "A confirmation bias"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **false positive** (Type I error) occurs when a security system (like a vulnerability scanner) incorrectly flags a threat or vulnerability that isn’t truly present."
    },
    {
      "id": "q334",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce platform recently suffered a data breach where attackers exploited cookies to impersonate user sessions. A security analyst is tasked with recommending measures to secure user cookies. Which of the following measures will ensure that cookies are transmitted securely between the user’s browser and the server?",
      "options": [
        {
          "id": "A",
          "text": "Storing cookies in the database"
        },
        {
          "id": "B",
          "text": "Implementing the \"Secure\" attribute for cookies"
        },
        {
          "id": "C",
          "text": "Increasing the cookie expiration time"
        },
        {
          "id": "D",
          "text": "Base64 encoding the cookie content"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The **\"Secure\" attribute** ensures that a cookie is only sent over secure, encrypted **HTTPS** connections. By implementing this attribute, the cookie won’t be transmitted over unencrypted HTTP connections, reducing the risk of interception."
    },
    {
      "id": "q335",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst is reviewing a vulnerability report and sees a reference to CVE-2023-12345 with a CVSS score of 9.5. Which of the following conclusions can the analyst draw based on this information?",
      "options": [
        {
          "id": "A",
          "text": "The vulnerability was first identified in the year 2023"
        },
        {
          "id": "B",
          "text": "The vulnerability is of low severity"
        },
        {
          "id": "C",
          "text": "The vulnerability affects only software produced in 2023"
        },
        {
          "id": "D",
          "text": "CVE-2023-12345 is the software vendor's internal code for the vulnerability"
        }
      ],
      "correctOptionId": "A",
      "explanation": "The CVE (Common Vulnerabilities and Exposures) identifier's format begins with the year the vulnerability was made public, so CVE-**2023**-12345 indicates a vulnerability identified/published in 2023. A CVSS score of 9.5 indicates a Critical severity vulnerability."
    },
    {
      "id": "q336",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaTech is seeking a comprehensive source of intelligence about the latest cyber threats targeting its specific industry. While OSINT provides valuable data, the company is considering investing in a more specialized solution. Which of the following would best address AlphaTech’s needs?",
      "options": [
        {
          "id": "A",
          "text": "Implementing internal honeypots to trap attackers"
        },
        {
          "id": "B",
          "text": "Subscribing to a third-party threat intelligence feed"
        },
        {
          "id": "C",
          "text": "Regularly attending cyber security conferences"
        },
        {
          "id": "D",
          "text": "Using open-source vulnerability scanners"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A third-party threat intelligence feed, especially one tailored for a specific industry, provides specialized, often real-time information about cyber threats, offering insights beyond what’s available in the public domain (OSINT)."
    },
    {
      "id": "q337",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ABC Corp recently adopted a Bring Your Own Device (BYOD) policy. The IT department is concerned about the potential risks associated with personal devices accessing the corporate network. Which of the following solutions would be MOST effective for enforcing security policies on these personal mobile devices?",
      "options": [
        {
          "id": "A",
          "text": "Installing antivirus software on each device"
        },
        {
          "id": "B",
          "text": "Establishing a separate guest Wi-Fi network for mobile devices"
        },
        {
          "id": "C",
          "text": "Using Mobile Device Management (MDM) to enforce security policies"
        },
        {
          "id": "D",
          "text": "Mandating that employees use strong passwords on their personal devices"
        }
      ],
      "correctOptionId": "C",
      "explanation": "MDM (Mobile Device Management) solutions provide centralized control to enforce security policies (e.g., encryption, strong passwords, application whitelisting), manage device features, and ensure that personal devices meet the organization’s security standards before accessing corporate resources."
    },
    {
      "id": "q338",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "David, an IT administrator, noticed an unusually high data usage on several company-owned mobile devices even when they are connected to the corporate Wi-Fi. He suspects these devices might be using cellular data in the background. Which of the following solutions should David implement to ensure that company devices use only the corporate Wi-Fi for data transactions when they’re in the office?",
      "options": [
        {
          "id": "A",
          "text": "Enable Airplane mode on all devices"
        },
        {
          "id": "B",
          "text": "Set up a Wi-Fi whitelist"
        },
        {
          "id": "C",
          "text": "Implement a mobile device management (MDM) policy to prioritize Wi-Fi"
        },
        {
          "id": "D",
          "text": "Disable cellular antennas in the office area"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An MDM solution allows administrators to enforce policies on mobile devices. By implementing a policy that prioritizes Wi-Fi connections, David can ensure that company devices will use the corporate Wi-Fi network when available, reducing unnecessary cellular data usage."
    },
    {
      "id": "q339",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security team recently upgraded their intrusion detection system (IDS). Since the upgrade, the system hasn’t flagged any intrusions, even though intrusion attempts are a regular occurrence. What is this situation best characterized as?",
      "options": [
        {
          "id": "A",
          "text": "A true negative"
        },
        {
          "id": "B",
          "text": "A false negative"
        },
        {
          "id": "C",
          "text": "A true positive"
        },
        {
          "id": "D",
          "text": "A confirmation feedback"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **false negative** (Type II error) occurs when a security system fails to detect a threat or vulnerability that is actually present. In this scenario, the IDS isn't detecting real, regular intrusion attempts, which is a false negative."
    },
    {
      "id": "q340",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corporation is planning to deploy a new wireless infrastructure in their newly acquired office building. The IT manager wants to ensure optimal wireless coverage throughout the premises. Which of the following should the IT team prioritize before installing the wireless access points?",
      "options": [
        {
          "id": "A",
          "text": "Purchase the most expensive wireless access points to ensure maximum range"
        },
        {
          "id": "B",
          "text": "Conduct a site survey to determine the best locations for access points"
        },
        {
          "id": "C",
          "text": "Deploy all access points near windows to enhance signal strength"
        },
        {
          "id": "D",
          "text": "Ensure all users have 5GHz capable devices"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **site survey** involves testing wireless signal propagation throughout a building to determine the optimal placement and configuration (channels, power levels) for access points to achieve consistent and robust wireless coverage."
    },
    {
      "id": "q341",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Company uses MDM to manage company-owned and employee-owned mobile devices. An employee reported losing their personal phone over the weekend. What MDM feature should the IT department use to ensure that sensitive company data on the lost phone isn't accessed?",
      "options": [
        {
          "id": "A",
          "text": "Monitor the device's location"
        },
        {
          "id": "B",
          "text": "Force update the device's apps"
        },
        {
          "id": "C",
          "text": "Remote wipe the device"
        },
        {
          "id": "D",
          "text": "Change the user's email password"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Using the **remote wipe** feature, the IT department can remotely erase all data, including sensitive company data, from the lost device, ensuring that confidential information doesn’t fall into the wrong hands."
    },
    {
      "id": "q342",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a series of cyber incidents, AlphaTech Corp. wants to take proactive measures to identify vulnerabilities in their network. They aim to obtain a comprehensive report of potential weaknesses without exploiting them. Which of the following would best meet this objective?",
      "options": [
        {
          "id": "A",
          "text": "Penetration test"
        },
        {
          "id": "B",
          "text": "Vulnerability scan"
        },
        {
          "id": "C",
          "text": "Red team assessment"
        },
        {
          "id": "D",
          "text": "Port security"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **vulnerability scan** is designed to inspect systems, networks, and applications to identify potential weaknesses or vulnerabilities (missing patches, misconfigurations) and produce a report, but it does **not** attempt to exploit them."
    },
    {
      "id": "q343",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GammaTech is in the final stages of deploying a new application. Before the deployment, the security team wants to examine the application’s code without executing it to identify any potential vulnerabilities. Which vulnerability identification method should the team employ?",
      "options": [
        {
          "id": "A",
          "text": "Penetration Testing"
        },
        {
          "id": "B",
          "text": "Dynamic Analysis"
        },
        {
          "id": "C",
          "text": "Static Analysis"
        },
        {
          "id": "D",
          "text": "Fuzz Testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Static analysis (or Static Application Security Testing - SAST) involves examining an application’s code, bytecode, or binary code **without executing it** to identify vulnerabilities. This allows security teams to find potential security issues in the codebase before the application runs."
    },
    {
      "id": "q344",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a routine vulnerability assessment, TechInc discovers a weakness in their system that, if exploited, would allow an attacker to modify existing user accounts, including privileges. Which classification best describes this vulnerability?",
      "options": [
        {
          "id": "A",
          "text": "Elevation of privilege vulnerability"
        },
        {
          "id": "B",
          "text": "Disclosure vulnerability"
        },
        {
          "id": "C",
          "text": "Replay vulnerability"
        },
        {
          "id": "D",
          "text": "Remote code execution vulnerability"
        }
      ],
      "correctOptionId": "A",
      "explanation": "**Elevation of privilege** vulnerabilities allow attackers to increase their access level or permissions beyond what was originally granted. The ability to modify privileges directly aligns with this classification."
    },
    {
      "id": "q345",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A healthcare organization uses embedded systems in various medical devices. They are aware of the potential threats these systems can pose if not properly secured. Which of the following is NOT a recommended practice when hardening embedded systems in this context?",
      "options": [
        {
          "id": "A",
          "text": "Regularly patching and updating the firmware of the devices"
        },
        {
          "id": "B",
          "text": "Allowing unrestricted access to the devices for ease of use by the medical staff"
        },
        {
          "id": "C",
          "text": "Disabling unnecessary services and features not required for the device's primary function"
        },
        {
          "id": "D",
          "text": "Changing default credentials and using strong, unique passwords for device access"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Allowing unrestricted access to any system, especially an embedded medical device, compromises security by violating the principle of least privilege. This is a poor security practice that could lead to unintentional or deliberate misuse."
    },
    {
      "id": "q346",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechSoft Corp. is implementing a new asset tracking system to monitor its vast array of computing resources. Which of the following should be the PRIMARY reason for maintaining an up-to-date hardware and software inventory?",
      "options": [
        {
          "id": "A",
          "text": "To ensure software licenses are renewed on time"
        },
        {
          "id": "B",
          "text": "To identify and respond to unauthorized devices or software promptly"
        },
        {
          "id": "C",
          "text": "To aid in the procurement of new hardware and software"
        },
        {
          "id": "D",
          "text": "To provide employees with an understanding of available resources"
        }
      ],
      "correctOptionId": "B",
      "explanation": "From a security standpoint, maintaining an accurate inventory is critical for identifying and responding to unauthorized (rogue) devices or software, which represent significant and immediate threats to the network."
    },
    {
      "id": "q347",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An enterprise is deploying IoT-based security cameras across multiple office locations. As the lead security professional, what recommendation would you prioritize to establish a secure baseline for these devices?",
      "options": [
        {
          "id": "A",
          "text": "Setting the devices to public mode so all employees can access the feed for transparency"
        },
        {
          "id": "B",
          "text": "Regularly updating the device firmware to patch known vulnerabilities"
        },
        {
          "id": "C",
          "text": "Enabling Universal Plug and Play (UPnP) to ensure easy connectivity for all devices on the network"
        },
        {
          "id": "D",
          "text": "Using the same password for all cameras for ease of management"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Regular firmware updates ensure that the IoT devices are protected against identified vulnerabilities. This is a crucial and prioritized part of establishing a secure baseline for any network-connected device."
    },
    {
      "id": "q348",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medium-sized enterprise is concerned about the security of its office workstations after a series of malware infections. As a security analyst, which of the following recommendations would BEST improve the security baseline of the workstations?",
      "options": [
        {
          "id": "A",
          "text": "Install multiple antivirus solutions to ensure maximum detection"
        },
        {
          "id": "B",
          "text": "Set up screensavers with cyber hygiene tips to educate users"
        },
        {
          "id": "C",
          "text": "Disable unnecessary services and ports on the workstations"
        },
        {
          "id": "D",
          "text": "Frequently change the desktop wallpaper to prevent monotony"
        }
      ],
      "correctOptionId": "C",
      "explanation": "By disabling unnecessary services and ports, you reduce the number of potential attack vectors and vulnerabilities on the workstations (reducing the attack surface), which directly improves the security baseline."
    },
    {
      "id": "q349",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaCorp is migrating to cloud infrastructure and wants to ensure all virtual machines (VMs) are securely configured from the onset. Before deploying multiple VM instances, what should AlphaCorp do to ensure each VM starts from a secure configuration?",
      "options": [
        {
          "id": "A",
          "text": "Use the default VM templates provided by the cloud provider"
        },
        {
          "id": "B",
          "text": "Establish a secure baseline for VM configurations and use it for deployment"
        },
        {
          "id": "C",
          "text": "Regularly backup all VMs"
        },
        {
          "id": "D",
          "text": "Use multi-factor authentication for cloud access"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Establishing a secure baseline (a foundational security configuration) for VM configurations ensures that each VM is deployed with a set of standard security settings, minimizing vulnerabilities from the start."
    },
    {
      "id": "q350",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A multinational company is deploying a new set of servers in its data centers across various countries. Which of the following steps should be taken FIRST to ensure the servers are secured against potential threats?",
      "options": [
        {
          "id": "A",
          "text": "Set up a monitoring system to alert the IT team of any irregular activities"
        },
        {
          "id": "B",
          "text": "Deploy all the software applications the company might need in the future"
        },
        {
          "id": "C",
          "text": "Use the server's default configuration to ensure manufacturer's best practices are maintained"
        },
        {
          "id": "D",
          "text": "Disable any unused services and ports on the server"
        }
      ],
      "correctOptionId": "D",
      "explanation": "When setting up a new server, the absolute first step is to harden the system by disabling any unused services and ports. This immediately minimizes the attack surface, reducing potential vulnerabilities."
    },
    {
      "id": "q351",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "While analyzing a vulnerability in a company’s web application, the security team refers to a specific CVE to understand the vulnerability’s details. They further assess its CVSS score to decide on the remediation urgency. Which of the following best describes the purpose of the CVE and CVSS in this context?",
      "options": [
        {
          "id": "A",
          "text": "CVE provides a severity score, while CVSS gives a unique identifier for the vulnerability"
        },
        {
          "id": "B",
          "text": "CVE and CVSS both offer a scoring mechanism to rank vulnerabilities"
        },
        {
          "id": "C",
          "text": "CVE provides a unique identifier, while CVSS offers a standardized severity score"
        },
        {
          "id": "D",
          "text": "CVE and CVSS are regulatory requirements for all software applications"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**CVE** (Common Vulnerabilities and Exposures) provides a standardized, unique **identifier** for a vulnerability, and **CVSS** (Common Vulnerability Scoring System) offers a quantifiable, standardized **severity score** (0.0 to 10.0) for that vulnerability."
    },
    {
      "id": "q352",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The network administrator at a university wants to ensure that when students log onto the campus wireless network, their credentials are verified by the university’s central authentication server. Additionally, the administrator wants to make sure that the data between the wireless access point and the central server is encrypted. Which solution should the administrator implement?",
      "options": [
        {
          "id": "A",
          "text": "WPA3 with SAE"
        },
        {
          "id": "B",
          "text": "WPA2-Personal with AES"
        },
        {
          "id": "C",
          "text": "WPA2-Enterprise with RADIUS"
        },
        {
          "id": "D",
          "text": "Open wireless with VPN"
        }
      ],
      "correctOptionId": "C",
      "explanation": "WPA2-Enterprise provides per-user authentication suitable for a large campus network. It uses an external RADIUS server for central credential verification against a directory service. The connection between the Access Point (AP) and the RADIUS server is also encrypted, fulfilling both requirements."
    },
    {
      "id": "q353",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "As part of the company’s vulnerability management initiative, the security team has decided to conduct a series of penetration tests. Which of the following is the PRIMARY reason for incorporating penetration testing as a threat identification method?",
      "options": [
        {
          "id": "A",
          "text": "To ensure compliance with regulatory requirements"
        },
        {
          "id": "B",
          "text": "To validate the efficiency of security awareness training"
        },
        {
          "id": "C",
          "text": "To actively exploit vulnerabilities and assess potential impact"
        },
        {
          "id": "D",
          "text": "To identify misconfigurations in the SIEM system"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Penetration testing is a simulated attack used to actively exploit vulnerabilities. Its primary goal is to determine how an attacker might gain access and what the potential **impact** would be, thereby assessing the business risk more realistically than a simple scan."
    },
    {
      "id": "q354",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization has recently received a new software patch for its critical infrastructure. Before deploying it to production, the security team wants to understand its behavior and ensure it doesn’t contain any malicious code. Which of the following methods would be MOST effective for safely executing and observing the patch’s behavior?",
      "options": [
        {
          "id": "A",
          "text": "Deploying the patch during a maintenance window"
        },
        {
          "id": "B",
          "text": "Running the patch within a sandbox environment"
        },
        {
          "id": "C",
          "text": "Conducting a code review of the patch"
        },
        {
          "id": "D",
          "text": "Installing the patch on a virtual machine"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Running the patch within a **sandbox** environment (an isolated, controlled virtual space) allows the security team to execute and observe the software’s behavior, including any potentially malicious or unintended actions, without risking the production environment or the host system."
    },
    {
      "id": "q355",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GreenTech Inc. is selling a set of old servers to another company. Before the transaction, they want to ensure the data on these servers is irretrievable and they can prove that due diligence was performed. What should GreenTech seek to assure the buyer of proper data destruction?",
      "options": [
        {
          "id": "A",
          "text": "A receipt of sale for the servers"
        },
        {
          "id": "B",
          "text": "A detailed log of the server's usage"
        },
        {
          "id": "C",
          "text": "A certificate of data sanitization"
        },
        {
          "id": "D",
          "text": "A user manual of the servers"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **certificate of data sanitization** (or destruction) from a reputable entity provides formal, auditable proof that all data on the storage media was securely and completely wiped (sanitized), ensuring it is irretrievable."
    },
    {
      "id": "q356",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jane, the CISO at a financial institution, is overseeing the decommissioning of several old servers. She is aware that while some data must be destroyed, other data must be retained due to industry regulations. Which principle should Jane primarily focus on to ensure compliance?",
      "options": [
        {
          "id": "A",
          "text": "Minimum necessary principle"
        },
        {
          "id": "B",
          "text": "Principle of least privilege"
        },
        {
          "id": "C",
          "text": "Data retention policy"
        },
        {
          "id": "D",
          "text": "Mandatory vacation policy"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **data retention policy** defines how long data must be stored and when it must be discarded based on business needs, regulatory requirements, and other factors. Adhering to this policy is essential for compliance during server decommissioning."
    },
    {
      "id": "q357",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberFirm, a leading software development company, recently updated their server OS due to new features and patches. Given that they have already established and deployed a secure baseline in the past, what should CyberFirm do NEXT to ensure continued security?",
      "options": [
        {
          "id": "A",
          "text": "Conduct a complete system reboot for all servers"
        },
        {
          "id": "B",
          "text": "Re-deploy the same baseline without any modifications"
        },
        {
          "id": "C",
          "text": "Update the secure baseline to include new configurations and then deploy it"
        },
        {
          "id": "D",
          "text": "Implement a new firewall rule for the servers"
        }
      ],
      "correctOptionId": "C",
      "explanation": "When there are significant updates or changes (like an OS upgrade), the existing secure baseline must be **reviewed and updated** to account for any new features, configuration files, or vulnerabilities introduced by the update. Only then should the updated baseline be re-deployed for consistency."
    },
    {
      "id": "q358",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "MatrixCorp recently adopted a mobile strategy where employees are provided with company-owned devices. These devices are also allowed for personal use, but the organization retains the ability to manage and monitor them. Which deployment model is MatrixCorp using?",
      "options": [
        {
          "id": "A",
          "text": "Bring Your Own Device (BYOD)"
        },
        {
          "id": "B",
          "text": "Choose Your Own Device (CYOD)"
        },
        {
          "id": "C",
          "text": "Corporate-owned, Personally Enabled (COPE)"
        },
        {
          "id": "D",
          "text": "Public Device Deployment (PDD)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**COPE** (Corporate-Owned, Personally Enabled) describes a model where the company owns and manages the device, but the user is permitted to use it for personal activities. This matches the scenario where the company retains management/monitoring ability but allows personal use."
    },
    {
      "id": "q359",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company has recently upgraded its wireless infrastructure and wants to ensure that the data transmitted over its wireless network is protected using the most recent and secure encryption standards. Which of the following should the company configure on its wireless access points?",
      "options": [
        {
          "id": "A",
          "text": "WEP"
        },
        {
          "id": "B",
          "text": "WPA"
        },
        {
          "id": "C",
          "text": "WPA2"
        },
        {
          "id": "D",
          "text": "WPA3"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**WPA3** (Wi-Fi Protected Access 3) is the latest and most secure standard for wireless encryption, designed to improve upon WPA2 with enhanced protections against brute-force attacks and more robust encryption methods."
    },
    {
      "id": "q360",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst is exploring ways to proactively identify vulnerabilities within the organization’s infrastructure. Which of the following provides the BEST method for the analyst to receive real-time threat intelligence from the dark web?",
      "options": [
        {
          "id": "A",
          "text": "Utilizing a vulnerability scanner on the organization's internal network"
        },
        {
          "id": "B",
          "text": "Subscribing to a dark web threat intelligence feed"
        },
        {
          "id": "C",
          "text": "Conducting regular penetration tests on external-facing systems"
        },
        {
          "id": "D",
          "text": "Reviewing daily reports from the organization's SIEM system"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Threat intelligence feeds, especially those focusing on the dark web, aggregate information from clandestine sources to provide proactive, real-time data about emerging threats, vulnerabilities being sold, and other malicious activities relevant to the organization."
    },
    {
      "id": "q361",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corp is designing their new web application infrastructure. They want to ensure that all web traffic to and from their application is encrypted. In addition to selecting HTTPS as the protocol, which default port should they configure for this encrypted traffic?",
      "options": [
        {
          "id": "A",
          "text": "21"
        },
        {
          "id": "B",
          "text": "80"
        },
        {
          "id": "C",
          "text": "443"
        },
        {
          "id": "D",
          "text": "25"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Port **443** is the standard, default port used for **HTTPS** (Hypertext Transfer Protocol Secure) traffic, which uses SSL/TLS for encryption."
    },
    {
      "id": "q362",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechWorld Corp is concerned about cybercriminals sending emails that appear to come from its domain to deceive its clients. The company wants to implement a solution that would allow receiving email servers to validate that an email claiming to come from TechWorld Corp’s domain indeed originates from an approved server. Which of the following should the company implement?",
      "options": [
        {
          "id": "A",
          "text": "SMTP authentication"
        },
        {
          "id": "B",
          "text": "DKIM"
        },
        {
          "id": "C",
          "text": "POP3 over SSL"
        },
        {
          "id": "D",
          "text": "S/MIME"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**DKIM** (DomainKeys Identified Mail) is a method used to authenticate the origin and integrity of an email. With DKIM, a digital signature is added to the headers of outgoing emails. Receiving servers then use this signature to validate the email by checking it against the sending domain’s public key, which is published in the DNS records."
    },
    {
      "id": "q363",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a security incident, a forensic investigation revealed that a compromised internal workstation was communicating with a known malicious IP address. To prevent further communication, the security team decided to take immediate action. Which of the following is the BEST immediate action to ensure the workstation cannot communicate with that IP?",
      "options": [
        {
          "id": "A",
          "text": "Implement a block rule on the web filter for the IP address"
        },
        {
          "id": "B",
          "text": "Disable the network port of the compromised workstation"
        },
        {
          "id": "C",
          "text": "Use a honeypot to divert the traffic from the malicious"
        },
        {
          "id": "D",
          "text": "Update the firewall's firmware"
        }
      ],
      "correctOptionId": "A",
      "explanation": "By implementing a **block rule** specifically for the known malicious IP address on the firewall or web filter, any attempt to communicate with that external IP would be stopped, effectively preventing further malicious communications without fully isolating the workstation."
    },
    {
      "id": "q364",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Amy, a network administrator, is researching tools to assist with automating the evaluation of her organization’s systems against a specific security baseline. She comes across SCAP and wants to implement it. Which of the following BEST describes the primary function of the Security Content Automation Protocol (SCAP)?",
      "options": [
        {
          "id": "A",
          "text": "To facilitate the real-time transfer of threat intelligence feeds"
        },
        {
          "id": "B",
          "text": "To provide an interface for user authentication against Active Directory"
        },
        {
          "id": "C",
          "text": "To allow for automated vulnerability management and policy compliance evaluation"
        },
        {
          "id": "D",
          "text": "To offer encrypted communication channels for remote system management"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**SCAP** (Security Content Automation Protocol) is a suite of open standards that enhances the ability of organizations to **automate vulnerability management**, measurement, and **policy compliance evaluation** on systems against specific security baselines."
    },
    {
      "id": "q365",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution, BankCorp, has recently experienced a surge in phishing attacks targeting its employees. These attacks often involve URLs that look similar to legitimate ones but have slight variations. To reduce the risk of employees accidentally accessing these malicious sites, which measure should BankCorp implement?",
      "options": [
        {
          "id": "A",
          "text": "Implement a Domain Name System (DNS) firewall"
        },
        {
          "id": "B",
          "text": "Employ URL scanning to identify and block malicious URLs"
        },
        {
          "id": "C",
          "text": "Rely on manual reporting of suspicious URLs by employees"
        },
        {
          "id": "D",
          "text": "Use a Virtual Private Network (VPN) to redirect all employee web traffic"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Employing **URL scanning** (typically part of web filtering or a Web Application Firewall/WAF) allows the system to examine the full URL, including subtle variations (typosquatting, etc.), and compare it against known malicious lists or patterns to proactively block access."
    },
    {
      "id": "q366",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution wants to ensure that any unauthorized access to customer data triggers an immediate alert to the security team. Which of the following approaches would be the MOST effective in achieving this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Configure alerts for any modification to database records"
        },
        {
          "id": "B",
          "text": "Set up alerts for successful logins during off-business hours"
        },
        {
          "id": "C",
          "text": "Establish alerting thresholds based on anomalous user behavior"
        },
        {
          "id": "D",
          "text": "Send daily reports of all access attempts to the security team for review"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Establishing alerting thresholds based on **anomalous user behavior** (User and Entity Behavior Analytics - UEBA) is the most effective approach as it can detect access that is technically authorized but statistically unusual (e.g., a person accessing thousands of records or logging in from a strange location), which often signals unauthorized activity."
    },
    {
      "id": "q367",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A marketing team is collaborating on a new campaign and requires access to a shared folder. However, they shouldn’t be able to modify files created by others. How should permissions be set on this shared folder?",
      "options": [
        {
          "id": "A",
          "text": "Assign the marketing team full control"
        },
        {
          "id": "B",
          "text": "Allow the marketing team read-only access"
        },
        {
          "id": "C",
          "text": "Assign the marketing team write-only access"
        },
        {
          "id": "D",
          "text": "Assign the marketing team modify permission but deny the delete permission"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Granting **Modify** permission allows users to **create and edit** (including their own files). By specifically **denying Delete**, they cannot remove files created by others, satisfying the requirement to collaborate while protecting existing assets."
    },
    {
      "id": "q368",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Alice, a cybersecurity analyst, is tasked with identifying potential weaknesses in a newly deployed web application’s infrastructure before it goes live. She wants a tool that can proactively discover and report on system vulnerabilities, missing patches, and misconfigurations. Which of the following should Alice utilize for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "B",
          "text": "Network sniffer"
        },
        {
          "id": "C",
          "text": "Vulnerability scanner"
        },
        {
          "id": "D",
          "text": "Security Information and Event Management (SIEM) system"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **vulnerability scanner** is specifically designed to proactively check a system against a database of known flaws to discover and report on potential vulnerabilities, missing patches, and misconfigurations."
    },
    {
      "id": "q369",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Globex Industries is expanding its data centers across multiple geographic locations. The IT team wants to have a centralized system to get real-time status, outages, and metrics of all data center infrastructures. Which of the following solutions would be the MOST effective for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Data Loss Prevention (DLP) tools"
        },
        {
          "id": "B",
          "text": "Distributed Denial of Service (DDoS) protection"
        },
        {
          "id": "C",
          "text": "Security Information and Event Management (SIEM)"
        },
        {
          "id": "D",
          "text": "Infrastructure Management Platform (IMP)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "An **Infrastructure Management Platform (IMP)** is designed to provide centralized control and monitoring for physical and virtual infrastructure across multiple sites. It delivers real-time insights into infrastructure health, outages, and operational metrics."
    },
    {
      "id": "q370",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department of XYZ Corp is keen on preventing users from changing specific system settings, such as altering the firewall configurations. The majority of their infrastructure is based on Windows operating systems. Which of the following would be the most effective way to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Use SELinux to enforce strict access controls"
        },
        {
          "id": "B",
          "text": "Utilize Group Policy to set and enforce policies related to system settings"
        },
        {
          "id": "C",
          "text": "Deploy a third-party software solution to lock system settings"
        },
        {
          "id": "D",
          "text": "Implement a user training program to guide users on system settings best practices"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**Group Policy** provides centralized management and configuration of operating systems, applications, and users’ settings in a Windows Active Directory environment. This can be used to set and **enforce** specific, non-alterable policies related to system settings."
    },
    {
      "id": "q371",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company plans to upgrade its email server to ensure that email transmission between their mail server and client applications is encrypted. Which of the following protocols would be the most appropriate for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "HTTP"
        },
        {
          "id": "B",
          "text": "FTP"
        },
        {
          "id": "C",
          "text": "IMAP over SSL/TLS"
        },
        {
          "id": "D",
          "text": "SNMP"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**IMAP over SSL/TLS** (often referred to as IMAPS) is a protocol used by email clients to retrieve messages from a mail server over a secure channel. The use of SSL/TLS provides encryption for the transmitted data, ensuring confidentiality."
    },
    {
      "id": "q372",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Lisa, a security administrator, is using a popular benchmark to ensure the web servers in her organization are configured securely. She wants to make sure that unnecessary services are disabled, and appropriate permissions are set. Which of the following organizations is MOST likely the source of the benchmark she is using?",
      "options": [
        {
          "id": "A",
          "text": "PCI DSS"
        },
        {
          "id": "B",
          "text": "OWASP"
        },
        {
          "id": "C",
          "text": "CIS"
        },
        {
          "id": "D",
          "text": "GDPR"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Center for Internet Security (CIS)** is renowned for its **CIS Benchmarks**, which provide detailed, prescriptive guidance for securely configuring various IT systems and products, including disabling unnecessary services and setting permissions."
    },
    {
      "id": "q373",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department at TechCorp Ltd has been instructed to ensure that critical system files remain unchanged to avoid potential security breaches. They want to implement a system that can provide alerts whenever there is an unauthorized change to these files. Which of the following would best serve this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Data Loss Prevention (DLP)"
        },
        {
          "id": "B",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "C",
          "text": "File Integrity Monitoring (FIM)"
        },
        {
          "id": "D",
          "text": "Remote Monitoring and Management (RMM)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**File Integrity Monitoring (FIM)** tools monitor and detect changes in files and system configurations by comparing the current state (often a cryptographic hash) with a known baseline. They are specifically designed to alert on unauthorized or unexpected file modifications."
    },
    {
      "id": "q374",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ABC Tech has a mixed environment with both Linux and Windows servers. They want to ensure that processes running on their Linux servers only have access to specific resources and are restricted from performing certain actions. Which of the following tools would be most appropriate for this task?",
      "options": [
        {
          "id": "A",
          "text": "Use Group Policy on their Windows servers and apply it to Linux servers"
        },
        {
          "id": "B",
          "text": "Implement a strict user training regimen to inform users about security best practices"
        },
        {
          "id": "C",
          "text": "Enable Security-Enhanced Linux (SELinux) in enforcing mode"
        },
        {
          "id": "D",
          "text": "Limit user access to Linux servers"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**SELinux** (Security-Enhanced Linux) provides **Mandatory Access Controls (MAC)** by enforcing security policies that limit the actions a process can perform (even for privileged users). By running in enforcing mode, it restricts processes to only those defined in their security policy."
    },
    {
      "id": "q375",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah, a security administrator, is implementing a monitoring solution for her organization’s server infrastructure. She wants a solution that does not require any additional software to be installed on the servers themselves. Which type of monitoring approach should Sarah choose?",
      "options": [
        {
          "id": "A",
          "text": "Agent-based monitoring"
        },
        {
          "id": "B",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "C",
          "text": "Agentless monitoring"
        },
        {
          "id": "D",
          "text": "Network-based Application Performance Monitoring (APM)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Agentless monitoring** solutions do not require any software agents to be installed on the servers they monitor. They typically rely on standard network protocols (like SNMP or WMI) and interfaces to remotely collect performance and other data."
    },
    {
      "id": "q376",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "PharmaCorp, a pharmaceutical company, wants to ensure that its researchers cannot transfer proprietary formulas and research data to external storage devices or cloud storage. The company needs a solution to prevent such transfers while allowing other types of data to be transferred. What should they implement?",
      "options": [
        {
          "id": "A",
          "text": "Web Application Firewall (WAF)"
        },
        {
          "id": "B",
          "text": "Data Encryption Tool"
        },
        {
          "id": "C",
          "text": "Data Loss Prevention (DLP)"
        },
        {
          "id": "D",
          "text": "Virtual Private Network (VPN)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Data Loss Prevention (DLP)** is designed to identify sensitive data (like proprietary formulas) and prevent the unauthorized transfer or exfiltration of that specific data type to external destinations (e.g., USB drives, cloud storage, external email), while allowing other non-sensitive data transfers."
    },
    {
      "id": "q377",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberFirm has been facing issues with phishing campaigns where attackers spoof their domain to send fraudulent emails. They already implemented DKIM to sign their emails but want an additional measure to specify which mail servers are authorized to send emails on behalf of their domain. Which security measure should CyberFirm adopt?",
      "options": [
        {
          "id": "A",
          "text": "SPF"
        },
        {
          "id": "B",
          "text": "PGP"
        },
        {
          "id": "C",
          "text": "SSL certificate"
        },
        {
          "id": "D",
          "text": "IMAP"
        }
      ],
      "correctOptionId": "A",
      "explanation": "**SPF** (Sender Policy Framework) is designed to prevent email spoofing by allowing domain owners to specify, via a DNS record, which mail servers are **authorized to send emails** on behalf of their domain. Receiving servers check the sender's IP against this record."
    },
    {
      "id": "q378",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A school wants to prevent its students from accessing inappropriate websites during class hours. The IT department decides to implement a solution that blocks requests to specific domain names associated with inappropriate content. Which of the following security solutions would best address this need?",
      "options": [
        {
          "id": "A",
          "text": "Firewall filtering based on IP addresses"
        },
        {
          "id": "B",
          "text": "Intrusion Detection System monitoring"
        },
        {
          "id": "C",
          "text": "Virtual Private Network (VPN) enforcement"
        },
        {
          "id": "D",
          "text": "DNS filtering with a blacklist"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**DNS filtering** redirects or blocks name resolution for domains listed on a blacklist of unwanted sites (content filtering). This is a highly effective way to prevent access to specific websites by blocking their domain names."
    },
    {
      "id": "q379",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large financial institution recently experienced a security breach where an attacker was able to bypass its intrusion detection system (IDS). Upon investigation, the security team found out that the attacker utilized a zero-day exploit. In the aftermath, what should the institution do to enhance the capability of its IDS?",
      "options": [
        {
          "id": "A",
          "text": "Switch from a signature-based IDS to a behavior-based IDS"
        },
        {
          "id": "B",
          "text": "Disable the IDS and rely solely on firewall rules"
        },
        {
          "id": "C",
          "text": "Update the IDS with the latest threat intelligence feeds and signatures"
        },
        {
          "id": "D",
          "text": "Reduce the frequency of IDS signature updates"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Signature-based IDS fails against zero-day exploits because a signature doesn't exist yet. **Behavior-based** (or anomaly-based) IDS monitors traffic and compares it against an established baseline of normal activity, allowing it to potentially detect novel attacks based on anomalous behavior, making it better suited for catching zero-days."
    },
    {
      "id": "q380",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst at CyberSecure Corp. reviews a vulnerability report concerning an application that could allow attackers to upload malicious scripts. Once these scripts are executed, they can grant attackers complete control over the application. How should this vulnerability be primarily classified?",
      "options": [
        {
          "id": "A",
          "text": "Integrity vulnerability"
        },
        {
          "id": "B",
          "text": "Availability vulnerability"
        },
        {
          "id": "C",
          "text": "Remote code execution vulnerability"
        },
        {
          "id": "D",
          "text": "Disclosure vulnerability"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Remote Code Execution (RCE) vulnerabilities allow an attacker to run arbitrary commands or scripts on a targeted machine. The ability to upload and execute malicious scripts and gain complete control aligns directly with the definition of RCE."
    },
    {
      "id": "q381",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent security incident in the organization, the IT team noticed that several legitimate activities were being flagged by the intrusion detection system, resulting in a high number of false positives. What is the MOST appropriate action to improve the system’s accuracy and reduce unnecessary alerts?",
      "options": [
        {
          "id": "A",
          "text": "Disable the intrusion detection system for a week to observe regular network traffic patterns"
        },
        {
          "id": "B",
          "text": "Set up a stricter firewall rule to block all external traffic"
        },
        {
          "id": "C",
          "text": "Implement alert tuning to refine the system's detection criteria"
        },
        {
          "id": "D",
          "text": "Encourage employees to reduce their internet usage"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Alert tuning** involves adjusting, refining, or modifying the detection rules (signatures, thresholds, correlation logic) of a security system to reduce the number of false positives or false negatives."
    },
    {
      "id": "q382",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ABC Corp has recently faced a security breach due to a contractor connecting an infected laptop to the corporate network. Management wants to implement a solution that would ensure that any device connecting to the corporate network meets the company’s security standards, including up-to-date antivirus definitions. Which solution should ABC Corp consider?",
      "options": [
        {
          "id": "A",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "B",
          "text": "Virtual Private Network (VPN)"
        },
        {
          "id": "C",
          "text": "Network Access Control (NAC)"
        },
        {
          "id": "D",
          "text": "Web Application Firewall (WAF)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Network Access Control (NAC)** is designed to enforce policies on devices attempting to connect to the network. NAC can assess the security posture of a device (checking for up-to-date antivirus, patches, etc.) before granting access or placing it into a restricted remediation VLAN."
    },
    {
      "id": "q383",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Global Corp received a report that some of its customers received phishing emails that seemed to originate from the company’s domain. The IT team checked and confirmed that SPF and DKIM configurations were correctly set. What additional email security measure can Global Corp implement to provide clear policies on how the emails should be treated if they don’t align with SPF and DKIM?",
      "options": [
        {
          "id": "A",
          "text": "Enabling TLS encryption"
        },
        {
          "id": "B",
          "text": "Implementing DMARC policies"
        },
        {
          "id": "C",
          "text": "Setting up a new SMTP server"
        },
        {
          "id": "D",
          "text": "Increasing email retention period"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**DMARC** (Domain-based Message Authentication, Reporting, and Conformance) policies build upon SPF and DKIM by defining how email receivers should treat emails that fail both authentication checks (e.g., quarantine, reject) and providing reporting feedback to the domain owner."
    },
    {
      "id": "q384",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial firm has just experienced a cyber attack, and the IT team identified a piece of malware that evaded their traditional antivirus solutions. The CISO now wants to not only detect but also be able to analyze and respond to such advanced threats in real-time. Which solution should the firm consider implementing?",
      "options": [
        {
          "id": "A",
          "text": "Vulnerability Scanner"
        },
        {
          "id": "B",
          "text": "Intrusion Prevention System (IPS)"
        },
        {
          "id": "C",
          "text": "Endpoint Detection and Response (EDR)"
        },
        {
          "id": "D",
          "text": "Patch Management System"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**EDR** (Endpoint Detection and Response) provides real-time monitoring, deep analysis, and automated response capabilities at the endpoint level, which is necessary to catch and remediate advanced threats (like fileless malware) that evade traditional signature-based antivirus solutions."
    },
    {
      "id": "q385",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After the recent cyber-attack on Acme Corp, the IT security team decided to enhance their proactive defense mechanism. They want to start with identifying unpatched and vulnerable systems on their network. Which of the following scanning activities would BEST assist them in this endeavor?",
      "options": [
        {
          "id": "A",
          "text": "Conducting a passive scan during business hours"
        },
        {
          "id": "B",
          "text": "Implementing a full open port scan on all systems"
        },
        {
          "id": "C",
          "text": "Running a credentialed vulnerability scan on their network"
        },
        {
          "id": "D",
          "text": "Scanning the external perimeter for domain name resolutions"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **credentialed vulnerability scan** uses administrative access to look deeply inside a system, enabling it to accurately inventory software, patches, and configurations to identify missing patches and local vulnerabilities far more effectively than an uncredentialed scan."
    },
    {
      "id": "q386",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software developer in a company notices that a legitimate software tool they use is repeatedly flagged and quarantined by the company’s security solution. Which of the following is the BEST action the cybersecurity team can take to address this without compromising security?",
      "options": [
        {
          "id": "A",
          "text": "Turn off the antivirus solution"
        },
        {
          "id": "B",
          "text": "Whitelist the software tool in the antivirus settings"
        },
        {
          "id": "C",
          "text": "Decrease the security level of the antivirus"
        },
        {
          "id": "D",
          "text": "Install a different antivirus solution"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Whitelisting allows the cybersecurity team to explicitly specify software or applications that are known to be safe and should not be flagged or quarantined by the security solution. This fixes the false positive without lowering overall security protection."
    },
    {
      "id": "q387",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaTech, a growing SaaS company, has multiple applications deployed across different cloud providers. The security team struggles to manage and analyze logs from these disparate sources. Which solution would BEST help AlphaTech centralize their logs for a more streamlined analysis?",
      "options": [
        {
          "id": "A",
          "text": "Network Intrusion Detection System (NIDS)"
        },
        {
          "id": "B",
          "text": "Log Aggregation Tool"
        },
        {
          "id": "C",
          "text": "Data Loss Prevention (DLP) software"
        },
        {
          "id": "D",
          "text": "Vulnerability Scanner"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **Log Aggregation Tool** (often part of a SIEM system) is specifically designed to gather, centralize, and normalize logs from various sources (including multiple cloud providers) into a single location for easier management and analysis."
    },
    {
      "id": "q388",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "BetaTech, a tech manufacturing firm, wants to ensure that a potential compromise of its IoT devices will not endanger its primary manufacturing control systems. Which of the following approaches would be most effective in achieving this?",
      "options": [
        {
          "id": "A",
          "text": "Using a single robust firewall for the entire network"
        },
        {
          "id": "B",
          "text": "Periodic password changes for IoT devices"
        },
        {
          "id": "C",
          "text": "Segmenting the IoT devices from the manufacturing control systems"
        },
        {
          "id": "D",
          "text": "Enabling automatic updates for all IoT devices"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Network segmentation (separating networks via VLANs, firewalls, etc.) ensures that a compromise in one segment (IoT) cannot easily spread to a critical segment (manufacturing control systems), thereby preventing lateral movement and containing the damage."
    },
    {
      "id": "q389",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A global manufacturing company wants to ensure its employees worldwide do not access websites promoting hate speech, gambling, or explicit content during working hours. To meet this requirement, which web filtering technique would be the most efficient?",
      "options": [
        {
          "id": "A",
          "text": "Deploy a centralized proxy with location-based filtering"
        },
        {
          "id": "B",
          "text": "Use a blacklist of specific URLs known to contain such content"
        },
        {
          "id": "C",
          "text": "Implement content categorization and block undesired categories"
        },
        {
          "id": "D",
          "text": "Monitor internet usage logs and reprimand violators"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Content categorization** (or category-based filtering) is the most efficient method for blocking broad classes of inappropriate content (e.g., \"Gambling,\" \"Pornography,\" \"Hate Speech\") without having to manually manage an exhaustive list of individual URLs or IPs."
    },
    {
      "id": "q390",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechCo, a medium-sized enterprise, is planning to implement a solution to monitor, control, and restrict web access for its employees to improve productivity and enhance security. They also want to cache frequently accessed web content to reduce bandwidth consumption. Which solution would BEST fit TechCo’s requirements?",
      "options": [
        {
          "id": "A",
          "text": "Deploy a decentralized proxy on each departmental network"
        },
        {
          "id": "B",
          "text": "Set up a DNS-based filtering service"
        },
        {
          "id": "C",
          "text": "Use a centralized proxy with caching capabilities"
        },
        {
          "id": "D",
          "text": "Recommend browser extensions for web filtering to all employees"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **centralized proxy server** is best suited to meet all requirements: it monitors/controls web access centrally, enforces security policies, and uses its caching capabilities to reduce bandwidth usage for frequently accessed content."
    },
    {
      "id": "q391",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization is planning to deploy a new web application that will be accessible from both the internal network and the internet. The application will communicate exclusively over HTTPS. The security administrator is asked to configure the firewall to allow the necessary traffic. Which of the following should the administrator configure?",
      "options": [
        {
          "id": "A",
          "text": "Allow port 21 and block all others"
        },
        {
          "id": "B",
          "text": "Allow port 443 and block all others"
        },
        {
          "id": "C",
          "text": "Allow port 80 and block all others"
        },
        {
          "id": "D",
          "text": "Allow port 23 and block all others"
        }
      ],
      "correctOptionId": "B",
      "explanation": "HTTPS (Hypertext Transfer Protocol Secure), the encrypted protocol required, uses default port **443**. The principle of least privilege, especially on a public-facing server, requires blocking all other non-essential ports."
    },
    {
      "id": "q392",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The company’s security administrator observes that there are multiple unauthorized access attempts originating from IP addresses in a specific range. The administrator wants to prevent these IP addresses from accessing the corporate network temporarily. Which of the following firewall configurations would BEST address this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Configure an implicit deny rule for the specific IP range"
        },
        {
          "id": "B",
          "text": "Set up a honeypot for the specific IP range"
        },
        {
          "id": "C",
          "text": "Allow the IP range but set a bandwidth limit"
        },
        {
          "id": "D",
          "text": "Add the IP range to a whitelist"
        }
      ],
      "correctOptionId": "A",
      "explanation": "The most direct way to stop traffic from a specific range is to configure an **explicit deny rule** for that range on the firewall. The implicit deny rule is the default action for all traffic not explicitly permitted, but here, the specific rule would explicitly deny the malicious traffic."
    },
    {
      "id": "q393",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The IT department of Globex Corp is concerned about the increasing number of malicious websites being accessed from company laptops while employees are working remotely. They want to ensure that the web filter policies set in the corporate network are enforced even when devices are offsite. What would be the BEST solution to address this concern?",
      "options": [
        {
          "id": "A",
          "text": "Implement a cloud-based web filtering solution"
        },
        {
          "id": "B",
          "text": "Use a VPN to force all remote traffic through the corporate network"
        },
        {
          "id": "C",
          "text": "Deploy an agent-based web filter on all company laptops"
        },
        {
          "id": "D",
          "text": "Periodically send reminders to employees about acceptable web usage"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An **agent-based web filter** installs software (an agent) directly on the company laptops. This agent enforces the corporate web filtering policies locally and consistently, regardless of whether the device is on the corporate network, connected via VPN, or fully offsite."
    },
    {
      "id": "q394",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Lisa, a cybersecurity analyst, is setting up a centralized system to correlate logs from multiple sources, detect malicious activities in real-time, and produce comprehensive security reports. Which tool should Lisa consider for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Network Intrusion Detection System (NIDS)"
        },
        {
          "id": "B",
          "text": "Web Application Firewall (WAF)"
        },
        {
          "id": "C",
          "text": "Vulnerability Scanner"
        },
        {
          "id": "D",
          "text": "Security Information and Event Management (SIEM)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A **SIEM** (Security Information and Event Management) system is specifically designed to **aggregate, correlate, and analyze logs** and events from various sources in real-time to detect malicious activities and generate security reports."
    },
    {
      "id": "q395",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Lucy, the IT security manager of a financial company, receives an automated alert that an employee attempted to email a document containing social security numbers to an external email address. Which of the following tools most likely generated this alert?",
      "options": [
        {
          "id": "A",
          "text": "Network Intrusion Detection System (NIDS)"
        },
        {
          "id": "B",
          "text": "Data Loss Prevention (DLP) solution"
        },
        {
          "id": "C",
          "text": "Vulnerability Scanner"
        },
        {
          "id": "D",
          "text": "Packet Analyzer"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**DLP** (Data Loss Prevention) solutions are designed to monitor and control data transfers. They are configured to identify specific sensitive content (like social security numbers) and prevent or alert on their unauthorized transfer to external destinations (like external email addresses)."
    },
    {
      "id": "q396",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An online banking platform wants to improve its customer verification process when users open a new account. Which of the following identity proofing methods would be the MOST secure for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Asking users to select a security question and answer from a list"
        },
        {
          "id": "B",
          "text": "Requiring users to upload a photo of a government-issued ID and a selfie"
        },
        {
          "id": "C",
          "text": "Sending a verification code to the user's email address"
        },
        {
          "id": "D",
          "text": "Prompting users to provide their favorite color"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Requiring a photo of a government-issued ID and a selfie (a live image) provides the highest level of assurance by combining a **possession** factor (the ID) with a **biometric** factor (the user's physical presence verified against the photo on the ID), ensuring the person is who they claim to be."
    },
    {
      "id": "q397",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company has recently noticed an increased number of employees accessing social media sites during work hours, leading to decreased productivity. To counter this, the security administrator decides to limit access to these websites during peak working hours. Which firewall rule modification should the administrator make?",
      "options": [
        {
          "id": "A",
          "text": "Implement an Intrusion Prevention System (IPS) rule to block social media content"
        },
        {
          "id": "B",
          "text": "Change the firewall rule to deny access to known social media IP addresses between 9 AM and 5 PM"
        },
        {
          "id": "C",
          "text": "Use the firewall's URL filtering capability to blacklist social media URLs"
        },
        {
          "id": "D",
          "text": "Increase the firewall's bandwidth to accommodate the excess traffic"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Implementing a **time-based rule** that denies access to the sites (via their IP addresses or domains) **only during specified working hours** (e.g., 9 AM and 5 PM) is the correct approach to limit access during peak productivity times."
    },
    {
      "id": "q398",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company wants to host a public-facing website but ensure that even if the website gets compromised, attackers cannot gain access to sensitive internal data. Which of the following is the BEST configuration to achieve this?",
      "options": [
        {
          "id": "A",
          "text": "Place the web server on the internal network and strictly monitor the traffic"
        },
        {
          "id": "B",
          "text": "Place the web server in the DMZ with a firewall in front of it and another firewall between the DMZ and the internal network"
        },
        {
          "id": "C",
          "text": "Directly connect the web server to the internet without a firewall and move sensitive data off the server"
        },
        {
          "id": "D",
          "text": "Place the web server in the DMZ and connect it directly to the internal network without a firewall"
        }
      ],
      "correctOptionId": "B",
      "explanation": "This configuration uses a **DMZ** (Demilitarized Zone) to isolate the public-facing server from the internal network. The use of a **second firewall** between the DMZ and the internal network creates a strong layer of defense-in-depth, ensuring that even if the DMZ server is compromised, the internal network is protected."
    },
    {
      "id": "q399",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A Security Analyst at BetaTech is reviewing the monitoring tools deployed across the organization. She wants to ensure that every tool can detect unauthorized changes made to system files and configurations. Which of the following tools is BEST suited for this purpose?",
      "options": [
        {
          "id": "A",
          "text": "Network protocol analyzer"
        },
        {
          "id": "B",
          "text": "File integrity monitoring (FIM) system"
        },
        {
          "id": "C",
          "text": "Bandwidth monitoring tool"
        },
        {
          "id": "D",
          "text": "Passive vulnerability scanner"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**FIM** (File Integrity Monitoring) systems are specifically designed to calculate and monitor cryptographic hashes of critical system files and configurations. Any unauthorized change immediately alters the hash, triggering an alert."
    },
    {
      "id": "q400",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company has noticed an increase in malware infections over the past month. After investigating, it was determined that the infections were caused by employees visiting websites that were newly registered but had malicious intent. Which of the following would be the BEST approach to mitigate this threat?",
      "options": [
        {
          "id": "A",
          "text": "Implement a block rule to deny access to all websites"
        },
        {
          "id": "B",
          "text": "Use a web filter that incorporates domain reputation checks and blocks domains registered recently"
        },
        {
          "id": "C",
          "text": "Set the web filter to block all websites not categorized as \"Business\""
        },
        {
          "id": "D",
          "text": "Enforce multi-factor authentication for all internet-based applications"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Malicious actors frequently use newly registered domains for short-lived attacks like phishing or malware distribution. A web filter that leverages domain reputation and automatically blocks or warns against **recently registered domains** is the most direct and effective mitigation against this specific threat vector."
    },
    {
      "id": "q401",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "At AlphaTech, the security team is assessing vulnerabilities in a newly deployed cloud infrastructure. While analyzing potential risks, they consider factors such as the physical location of data centers, local laws and regulations, and natural disaster frequencies. What are these considerations known as in the context of vulnerability management?",
      "options": [
        {
          "id": "A",
          "text": "Asset valuation factors"
        },
        {
          "id": "B",
          "text": "Risk response variables"
        },
        {
          "id": "C",
          "text": "Threat intelligence variables"
        },
        {
          "id": "D",
          "text": "Environmental variables"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**Environmental variables** in risk and vulnerability management refer to external factors that can influence or affect the security posture of an organization, such as geopolitical risks (local laws), physical risks (data center location), and disaster risks (natural disaster frequencies)."
    },
    {
      "id": "q402",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Caroline, a security analyst, receives an alert that an unfamiliar file has been detected on a mission-critical server. She suspects it might be malware. What is the BEST immediate action Caroline should take regarding this potential threat?",
      "options": [
        {
          "id": "A",
          "text": "Delete the file immediately to prevent further damage"
        },
        {
          "id": "B",
          "text": "Quarantine the file to prevent it from executing or spreading"
        },
        {
          "id": "C",
          "text": "Make a copy of the file for further analysis"
        },
        {
          "id": "D",
          "text": "Notify all employees about the suspicious file"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The primary immediate goal when suspicious malware is detected is **containment**. **Quarantining** the file isolates it, preventing potential execution, spread, or further damage while preserving the file for subsequent forensic analysis."
    },
    {
      "id": "q403",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Jennifer, an IT administrator, is asked to onboard a new remote employee for a sales role. Which of the following is the BEST approach for provisioning the user account?",
      "options": [
        {
          "id": "A",
          "text": "Assign the new user the same access privileges as the CEO because they might require all resources"
        },
        {
          "id": "B",
          "text": "Provide the new user with administrative rights to ensure they can install and configure any needed software"
        },
        {
          "id": "C",
          "text": "Use the access privileges from a template of a salesperson to provide the required resources"
        },
        {
          "id": "D",
          "text": "Allow the new user to decide and self-select the necessary access based on their job role"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Using a role-based template (like one for a salesperson) is the best approach, as it ensures the user receives only the privileges and resources necessary for their job, which aligns with the security principle of **least privilege** and ensures consistency."
    },
    {
      "id": "q404",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaTech, a leading IT company, recently identified a critical vulnerability in its primary software product. They have developed a patch to address the vulnerability. Before distributing the patch to its customers, which of the following should AlphaTech ideally perform?",
      "options": [
        {
          "id": "A",
          "text": "Deploy the patch on all company systems"
        },
        {
          "id": "B",
          "text": "Notify the media about the vulnerability"
        },
        {
          "id": "C",
          "text": "Test the patch in a controlled environment"
        },
        {
          "id": "D",
          "text": "Offer compensation to affected customers"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Before distributing any patch, especially one addressing a critical vulnerability, it’s essential to **test the patch in a controlled environment** (staging or test lab). This ensures the patch effectively closes the vulnerability without introducing new flaws or breaking existing functionality."
    },
    {
      "id": "q405",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a major security incident, DeltaTech implemented several security patches to address vulnerabilities in their infrastructure. To ensure the effectiveness of these patches, what should be DeltaTech’s primary next step?",
      "options": [
        {
          "id": "A",
          "text": "Deploy additional firewalls at the network perimeter"
        },
        {
          "id": "B",
          "text": "Provide cybersecurity training to all employees"
        },
        {
          "id": "C",
          "text": "Rescan the systems to check if vulnerabilities are effectively addressed"
        },
        {
          "id": "D",
          "text": "Change all user passwords across the organization"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The primary step after deploying a patch is to **verify the patch's efficacy**. This is done by running another vulnerability scan (**rescan**) to confirm that the reported vulnerabilities have been properly remediated and no longer exist."
    },
    {
      "id": "q406",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce company is rolling out a new web application to facilitate online payments. The IT department wants to be immediately notified of any application errors or unauthorized modifications to the application’s codebase. Which of the following tools should they implement?",
      "options": [
        {
          "id": "A",
          "text": "Web Application Firewall (WAF)"
        },
        {
          "id": "B",
          "text": "Application Performance Monitoring (APM)"
        },
        {
          "id": "C",
          "text": "Domain Name System (DNS) monitoring tool"
        },
        {
          "id": "D",
          "text": "Network flow analyzer"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**APM** (Application Performance Monitoring) tools are designed to monitor an application's performance, stability, and runtime behavior, including detecting and immediately notifying administrators of application errors, crashes, and performance degradation which may signal unauthorized activity or code changes."
    },
    {
      "id": "q407",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Paul, a network administrator, has configured various networking devices in his organization to send alerts in the event of specific failures. After a switch experienced a power supply failure, Paul received an immediate notification. Which of the following did Paul most likely utilize to receive this notification?",
      "options": [
        {
          "id": "A",
          "text": "Syslog server"
        },
        {
          "id": "B",
          "text": "Simple Network Management Protocol (SNMP) traps"
        },
        {
          "id": "C",
          "text": "Packet sniffer"
        },
        {
          "id": "D",
          "text": "Firewall logs"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**SNMP traps** are asynchronous, unsolicited alert messages sent immediately by a monitored device (like a switch) to a central management station to notify it of a significant event (like a power supply failure)."
    },
    {
      "id": "q408",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DeltaCorp, a retail company, has assessed that a security breach might result in a loss of $1 million in sales. The company has determined that they can tolerate a loss of up to $500,000, but anything beyond that would severely impact operations. To cover the potential financial loss beyond their tolerance level, they decide to purchase cybersecurity insurance. Which of the following terms best describes the $500,000 figure?",
      "options": [
        {
          "id": "A",
          "text": "Risk appetite"
        },
        {
          "id": "B",
          "text": "Risk threshold"
        },
        {
          "id": "C",
          "text": "Risk capacity"
        },
        {
          "id": "D",
          "text": "Risk assessment"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The **risk threshold** is the specific level or point (in this case, $500,000) that an organization is willing to tolerate before taking action or incurring significant consequences. Risks exceeding this level often trigger escalation."
    },
    {
      "id": "q409",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Samantha, a security analyst, has been tasked with creating a monthly report for senior management detailing the security posture of the company. Which of the following is the MOST important element to include to ensure the report effectively communicates the company’s current security status?",
      "options": [
        {
          "id": "A",
          "text": "Detailed technical logs of all security incidents"
        },
        {
          "id": "B",
          "text": "Graphical representation of incidents by category"
        },
        {
          "id": "C",
          "text": "A complete list of all users and their access levels"
        },
        {
          "id": "D",
          "text": "Copies of recent phishing emails for demonstration"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Senior management typically requires a high-level, easily digestible overview. A **graphical representation of incidents by category** provides key performance indicators (KPIs) and allows management to quickly understand trends, risks, and resource allocation needs without getting bogged down in technical logs."
    },
    {
      "id": "q410",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent security incident, Sarah, a network security analyst, wants to analyze the flow data of network traffic to identify patterns and potential threats. She wants to collect metadata about IP traffic flow and gather details like IP addresses, ports, and protocols used. Which tool should Sarah employ to obtain this information?",
      "options": [
        {
          "id": "A",
          "text": "Intrusion Detection System (IDS)"
        },
        {
          "id": "B",
          "text": "Syslog server"
        },
        {
          "id": "C",
          "text": "NetFlow collector"
        },
        {
          "id": "D",
          "text": "Simple Network Management Protocol (SNMP) traps"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **NetFlow collector** (or similar flow protocol collectors like sFlow/IPFIX) is specifically designed to collect and analyze metadata about network traffic flow (source/destination IP, ports, protocols, timestamps, data volume), which is exactly the information required to identify traffic patterns and anomalies."
    },
    {
      "id": "q411",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst has been tasked with investigating a possible data breach. While reviewing the network logs, the analyst noticed an unusual increase in outbound traffic to an unfamiliar IP address during non-business hours. The traffic appears to be encrypted and is associated with a known server containing sensitive data. Which of the following is the MOST likely explanation for this behavior?",
      "options": [
        {
          "id": "A",
          "text": "The server is downloading patches"
        },
        {
          "id": "B",
          "text": "An employee is accessing the server remotely"
        },
        {
          "id": "C",
          "text": "A backup of the server is being performed"
        },
        {
          "id": "D",
          "text": "Data exfiltration is occurring"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The combination of **unusual outbound traffic**, encrypted payload, sensitive data source, and odd timing (**non-business hours**) strongly points to **data exfiltration**, where unauthorized data is being secretly transferred out of the network."
    },
    {
      "id": "q412",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ExamsDigest Enterprises wants to streamline their permission assignments. They decide that rather than assigning permissions to each user individually, they will group users based on departmental roles and then assign permissions to these groups. For example, all members of the “Marketing” role would have access to the marketing database. Which access control method is ExamsDigest Enterprises employing?",
      "options": [
        {
          "id": "A",
          "text": "Rule-based access control"
        },
        {
          "id": "B",
          "text": "Mandatory Access Control (MAC)"
        },
        {
          "id": "C",
          "text": "Discretionary Access Control (DAC)"
        },
        {
          "id": "D",
          "text": "Role-Based Access Control (RBAC)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**RBAC** (Role-Based Access Control) involves assigning permissions based on the user's defined **role** (e.g., Marketing, Finance) within an organization, which is the exact scenario described for streamlining permissions."
    },
    {
      "id": "q413",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "BetaTech is implementing a new authentication mechanism for its data center technicians. Instead of using key cards, technicians will now have to look into a device that maps a specific pattern to authenticate their identity. Which of the following is BetaTech likely implementing?",
      "options": [
        {
          "id": "A",
          "text": "Password system"
        },
        {
          "id": "B",
          "text": "Retina scanning"
        },
        {
          "id": "C",
          "text": "Hardware token"
        },
        {
          "id": "D",
          "text": "Knowledge-based questions"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Retina scanning (mapping a specific pattern in the eye) is a form of **biometric** authentication, which falls under the **'something you are'** factor. It identifies an individual based on their unique physical characteristics."
    },
    {
      "id": "q414",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A global financial company experiences sporadic cyber attacks on its infrastructure. The company notices that attacks that occur during non-business hours often result in more significant damage due to delayed responses. Which of the following measures would BEST decrease the reaction time to these off-hour attacks?",
      "options": [
        {
          "id": "A",
          "text": "Train the security staff to handle larger volumes of incidents during business hours"
        },
        {
          "id": "B",
          "text": "Implement an automated intrusion detection and response system"
        },
        {
          "id": "C",
          "text": "Increase the number of security staff during non-business hours"
        },
        {
          "id": "D",
          "text": "Send email notifications to security personnel when attacks are detected"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Implementing an **automated intrusion detection and response system (IDR or SOAR)** is the best way to decrease reaction time because it detects and takes immediate action (like blocking traffic or isolating a host) without human intervention, regardless of the time of day."
    },
    {
      "id": "q415",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A digital forensics investigator has just concluded an investigation regarding a potential insider threat. Before presenting the findings to the organization’s board, which of the following should the investigator ensure about the forensic report?",
      "options": [
        {
          "id": "A",
          "text": "The report includes technical jargon to showcase the depth of the investigation"
        },
        {
          "id": "B",
          "text": "The report emphasizes the investigator's credentials and experience"
        },
        {
          "id": "C",
          "text": "The report provides a clear, concise summary of findings without unnecessary technical details"
        },
        {
          "id": "D",
          "text": "The report contains detailed logs of every action taken by the investigator"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A forensic report for the board (non-technical stakeholders) must be easily understandable. Providing a **clear, concise summary of findings** that focuses on the business impact and implications, without overwhelming detail, is essential for effective communication."
    },
    {
      "id": "q416",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "MegaCorp is transitioning to a cloud-based infrastructure and wants to allow its employees to access multiple cloud services without re-entering their credentials every time. They currently have an on-premises LDAP directory in place. Which approach should MegaCorp take to provide a seamless authentication experience?",
      "options": [
        {
          "id": "A",
          "text": "MegaCorp should abandon their LDAP directory and create individual accounts for each cloud service"
        },
        {
          "id": "B",
          "text": "Integrate their LDAP with a Single Sign-On (SSO) solution that supports cloud services"
        },
        {
          "id": "C",
          "text": "Store passwords in a plaintext file for users to access and login to cloud services manually"
        },
        {
          "id": "D",
          "text": "Force users to change passwords every day to enhance security across all cloud platforms"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The most seamless and secure solution is to integrate the existing LDAP user directory with an **SSO (Single Sign-On) solution**. This allows users to authenticate once using their existing credentials (from LDAP) and gain access to multiple cloud services without re-entering credentials."
    },
    {
      "id": "q417",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "At ExamsDigest, employees can access the company’s cloud-based storage system. However, access to certain files within the storage is determined by the employee’s department, job title, and years of service. For instance, senior managers in the finance department with more than five years of service can view the company’s financial forecasts. Which access control model is ExamsDigest using?",
      "options": [
        {
          "id": "A",
          "text": "Rule-Based Access Control (RAC)"
        },
        {
          "id": "B",
          "text": "Role-Based Access Control (RBAC)"
        },
        {
          "id": "C",
          "text": "Attribute-Based Access Control (ABAC)"
        },
        {
          "id": "D",
          "text": "Discretionary Access Control (DAC)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**ABAC** (Attribute-Based Access Control) determines access based on a combination of different **attributes** related to the user (e.g., department, title, years of service), the resource (e.g., file classification), and the environment. This is a more granular approach than simple role-based access."
    },
    {
      "id": "q418",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "You are an IT security professional for a large corporation. After receiving reports about some users being unable to access external websites, you decided to review the firewall logs. Which of the following would be a PRIMARY indicator in the logs that a rule is blocking outbound traffic?",
      "options": [
        {
          "id": "A",
          "text": "Multiple entries of the same external IP address being ALLOWED"
        },
        {
          "id": "B",
          "text": "Timestamps showing large gaps between entries"
        },
        {
          "id": "C",
          "text": "Entries showing DROP/REJECT action for outbound traffic to port 80 and 443"
        },
        {
          "id": "D",
          "text": "Logs showing inbound traffic from multiple unknown external IP addresses"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Web browsing relies on standard ports 80 (HTTP) and 443 (HTTPS). Firewall log entries explicitly showing a **DROP/REJECT** action for **outbound** traffic trying to use these ports would be the clearest sign that an intentionally or accidentally configured rule is blocking website access."
    },
    {
      "id": "q419",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DeltaCorp has a password policy in place which mandates users to change their passwords every 30 days. However, some users complain that this results in them choosing simpler passwords or writing them down to remember them. How can DeltaCorp maintain security while addressing these concerns?",
      "options": [
        {
          "id": "A",
          "text": "Reduce the password change frequency but introduce more complexity requirements"
        },
        {
          "id": "B",
          "text": "Eliminate password changes and rely solely on two-factor authentication"
        },
        {
          "id": "C",
          "text": "Ask users to change passwords every week to improve security"
        },
        {
          "id": "D",
          "text": "Allow users to reuse any of their last three passwords to ease the transition"
        }
      ],
      "correctOptionId": "A",
      "explanation": "Frequent mandated password changes can lead to 'password fatigue' where users choose weak, easily guessable, or written-down passwords. The recommended best practice is to **reduce the frequency** of required changes while ensuring the remaining passwords are **highly complex** and long."
    },
    {
      "id": "q420",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a review of IDS logs, a security specialist notices a series of alerts indicating that a single external IP has been sending payloads that exploit a known vulnerability. However, the internal system to which these payloads are sent is patched and is not vulnerable to the exploit. Which of the following describes this type of IDS alert?",
      "options": [
        {
          "id": "A",
          "text": "False positive"
        },
        {
          "id": "B",
          "text": "False negative"
        },
        {
          "id": "C",
          "text": "True positive"
        },
        {
          "id": "D",
          "text": "True negative"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **True Positive** means the security tool correctly identified the activity/event as malicious. In this case, the **traffic payload itself is genuinely malicious** (a known exploit), and the IDS correctly flagged it. The fact that the target is patched only means the *exploit failed*, not that the *alert* was incorrect."
    },
    {
      "id": "q421",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A popular social media platform allows third-party applications to access user data and post on behalf of users. To avoid sharing user passwords with third-party applications and provide limited, scoped access, which authentication method should the platform use?",
      "options": [
        {
          "id": "A",
          "text": "Embed user passwords in the application's code"
        },
        {
          "id": "B",
          "text": "Use basic authentication with username and password for every request"
        },
        {
          "id": "C",
          "text": "Implement Single Sign-On (SSO) using OAuth to provide token-based access"
        },
        {
          "id": "D",
          "text": "Rely solely on CAPTCHA for third-party app authentication"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**OAuth** is the industry standard for authorization (not authentication, though often used with SSO). It allows users to grant third-party applications **scoped access** to their resources via an expiring **token** without ever sharing their actual password."
    },
    {
      "id": "q422",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An IT department in a large corporation spends several hours each day manually deploying patches and updates to thousands of workstations. Which of the following solutions would BEST enhance the efficiency of this process and save time for the IT team?",
      "options": [
        {
          "id": "A",
          "text": "Disable automatic updates and conduct monthly patching sessions"
        },
        {
          "id": "B",
          "text": "Implement an automated patch management system"
        },
        {
          "id": "C",
          "text": "Designate a dedicated team for patching that operates in shifts"
        },
        {
          "id": "D",
          "text": "Educate users to install updates on their own"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An **automated patch management system** centralizes and streamlines the process of deploying patches and updates across thousands of devices, which drastically reduces manual effort and enhances overall efficiency and security compliance."
    },
    {
      "id": "q423",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An international company, GlobalTech, is using several web applications hosted by different vendors. To ensure their employees can access these applications without having to remember multiple sets of credentials, they want to implement a solution that can securely exchange user authentication information between the company and the service providers. What should GlobalTech implement?",
      "options": [
        {
          "id": "A",
          "text": "Integrate each application with an independent LDAP server"
        },
        {
          "id": "B",
          "text": "Implement SSO using Security Assertions Markup Language (SAML)"
        },
        {
          "id": "C",
          "text": "Embed encrypted user credentials within the URL of each application"
        },
        {
          "id": "D",
          "text": "Rely on public API keys shared between the company and each vendor"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**SAML** (Security Assertions Markup Language) is an XML-based standard specifically designed to enable **Single Sign-On (SSO)** by securely exchanging authentication and authorization data between an identity provider (GlobalTech) and service providers (vendors)."
    },
    {
      "id": "q424",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company wants to implement a solution that verifies the software integrity of remote servers before allowing them to connect to the primary network. Which of the following solutions BEST achieves this objective through attestation?",
      "options": [
        {
          "id": "A",
          "text": "Host-based firewall"
        },
        {
          "id": "B",
          "text": "Whitelisting application"
        },
        {
          "id": "C",
          "text": "Remote attestation"
        },
        {
          "id": "D",
          "text": "VPN tunneling"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Remote attestation** is a process that verifies the integrity and configuration (software state) of a remote computing device (like a server) before granting it access to a network, often leveraging a Trusted Platform Module (TPM) chip for cryptographic proof."
    },
    {
      "id": "q425",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechCorp is collaborating with SoftTech, a business partner. To streamline collaboration without managing multiple accounts, TechCorp wants its employees to use their existing credentials to access SoftTech’s online project management system. Which of the following approaches would BEST enable this functionality?",
      "options": [
        {
          "id": "A",
          "text": "TechCorp should create new accounts for its employees on SoftTech's system"
        },
        {
          "id": "B",
          "text": "SoftTech should allow anonymous access for TechCorp's employees"
        },
        {
          "id": "C",
          "text": "TechCorp should implement federation between its identity provider and SoftTech's service provider"
        },
        {
          "id": "D",
          "text": "SoftTech should reset all passwords and provide them to TechCorp's employees"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Federation** (often using SAML or OAuth) establishes a trust relationship between two identity management systems (TechCorp's ID provider and SoftTech's service provider). This allows employees to authenticate once using their TechCorp credentials and seamlessly access SoftTech's systems."
    },
    {
      "id": "q426",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization recently experienced a malware infection on one of its workstations. A security analyst has been tasked with reviewing the endpoint logs of the infected system to gather more information about the incident. Which of the following entries in the endpoint logs would be MOST indicative of the initial malware infection point?",
      "options": [
        {
          "id": "A",
          "text": "Logs indicating successful user login and logout events"
        },
        {
          "id": "B",
          "text": "Entries showing periodic system health-check status as \"OK\""
        },
        {
          "id": "C",
          "text": "Logs documenting a recently installed and executed unknown .exe file from a temporary directory"
        },
        {
          "id": "D",
          "text": "Entries detailing network connectivity checks to the domain controller"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Endpoint logs that document the installation and execution of an **unknown .exe file**, especially from a suspicious location like a **temporary directory**, are strong indicators of potentially malicious activity and pinpoint the initial infection point of malware."
    },
    {
      "id": "q427",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GammaTech has a new remote access policy for its employees. Whenever an employee attempts to access the corporate network from an unfamiliar location, the system requests additional verification before granting access. Which factor of authentication is being emphasized in this policy?",
      "options": [
        {
          "id": "A",
          "text": "Knowledge-based questions the employee answers"
        },
        {
          "id": "B",
          "text": "A fingerprint scan from the employee"
        },
        {
          "id": "C",
          "text": "The physical coordinates of the employee's access point"
        },
        {
          "id": "D",
          "text": "An SMS code sent to the employee's phone"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Verifying the location or physical coordinates of an access point falls under the **'something you are/somewhere you are'** factor in authentication (specifically, location-based authentication) as it relies on the context of the user's position."
    },
    {
      "id": "q428",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaTech’s IT department is rolling out a new authentication protocol for remote workers. As part of the multifactor authentication process, employees are required to provide information that is memorized and cannot be physically taken from them. Which of the following represents this type of authentication factor?",
      "options": [
        {
          "id": "A",
          "text": "Fingerprint"
        },
        {
          "id": "B",
          "text": "Smart card"
        },
        {
          "id": "C",
          "text": "PIN"
        },
        {
          "id": "D",
          "text": "USB security key"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **PIN** (Personal Identification Number) is a secret number **memorized** by the user (something you **know**) and cannot be physically taken like a token or card."
    },
    {
      "id": "q429",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company has set up its firewall to allow web traffic through port 80 and port 443, while denying all other traffic by default. This setup is an example of which type of access control?",
      "options": [
        {
          "id": "A",
          "text": "Role-Based Access Control (RBAC)"
        },
        {
          "id": "B",
          "text": "Mandatory Access Control (MAC)"
        },
        {
          "id": "C",
          "text": "Discretionary Access Control (DAC)"
        },
        {
          "id": "D",
          "text": "Rule-Based Access Control (RAC)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**Rule-Based Access Control (RAC)** is typically implemented in network devices (like firewalls) where access decisions are made based on predefined technical rules such as IP addresses, ports (80, 443), and protocols."
    },
    {
      "id": "q430",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The security team at WidgetCorp is trying to identify potential insider threats. They have set up a SIEM solution with a custom dashboard showing unusual activities. Which of the following dashboard views would be MOST effective for quickly identifying an employee uploading large amounts of proprietary data to an external cloud storage service?",
      "options": [
        {
          "id": "A",
          "text": "Display of users who logged in during off-hours"
        },
        {
          "id": "B",
          "text": "Graph of highest network bandwidth users"
        },
        {
          "id": "C",
          "text": "List of most frequently used applications"
        },
        {
          "id": "D",
          "text": "Visualization of failed login attempts"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Data exfiltration (uploading large amounts of data externally) typically results in a significant spike in **outbound network bandwidth** usage for a particular user. Monitoring the highest bandwidth users is the most direct way to spot this anomaly."
    },
    {
      "id": "q431",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah is a project manager and is working on a document that she owns. She wants to grant specific permissions to certain team members, allowing some to edit and others only to view the document. Which of the following access control models would BEST allow Sarah to accomplish this?",
      "options": [
        {
          "id": "A",
          "text": "Mandatory Access Control (MAC)"
        },
        {
          "id": "B",
          "text": "Role-Based Access Control (RBAC)"
        },
        {
          "id": "C",
          "text": "Discretionary Access Control (DAC)"
        },
        {
          "id": "D",
          "text": "Attribute-Based Access Control (ABAC)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**DAC** (Discretionary Access Control) allows the owner of the resource (Sarah) to specify and assign permissions (read, edit, etc.) to individual users or groups at their **discretion**. This fits the requirement of the owner granting specific permissions to specific team members."
    },
    {
      "id": "q432",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberSec Corp’s CISO wants to determine if there have been any anomalies in user behavior over the past month. Specifically, they’re concerned about unauthorized data transfers outside of regular business hours. Which of the following automated reports would be MOST useful in this investigation?",
      "options": [
        {
          "id": "A",
          "text": "After-hours network activity reports"
        },
        {
          "id": "B",
          "text": "User password change frequency reports"
        },
        {
          "id": "C",
          "text": "Hardware inventory audit reports"
        },
        {
          "id": "D",
          "text": "Software licensing compliance reports"
        }
      ],
      "correctOptionId": "A",
      "explanation": "An **After-hours network activity report** is directly relevant to the CISO's concern, as it would specifically highlight traffic anomalies, including data transfers, that occur outside the typical operating window, a common indicator of malicious or unauthorized activity."
    },
    {
      "id": "q433",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After detecting suspicious activity on a network, a digital forensic analyst is dispatched to acquire data from a potential compromised system. The analyst decides to capture an image of the affected system’s memory. This technique of capturing volatile data is particularly beneficial because:",
      "options": [
        {
          "id": "A",
          "text": "It helps identify deleted files"
        },
        {
          "id": "B",
          "text": "It can capture data in real-time operations"
        },
        {
          "id": "C",
          "text": "It provides information on patch levels"
        },
        {
          "id": "D",
          "text": "It offers insights into firewall configurations"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Memory acquisition (capturing RAM) captures **volatile data** (data that is lost when power is removed), which includes currently running processes, network connections, memory-resident malware, and encryption keys related to **real-time operations**. This is critical evidence in a live compromise."
    },
    {
      "id": "q434",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a suspected security incident involving unauthorized access to sensitive data, Jake, an IT administrator, immediately disconnected the affected server from the network. Later, a digital forensic expert criticized Jake’s action. Which of the following is the MOST likely reason for the criticism?",
      "options": [
        {
          "id": "A",
          "text": "Jake should have left the server connected to capture more evidence from the attacker"
        },
        {
          "id": "B",
          "text": "Jake should have immediately informed the company's legal department"
        },
        {
          "id": "C",
          "text": "Jake should have taken an image of the server's memory before disconnecting it"
        },
        {
          "id": "D",
          "text": "Jake should have updated the server's software to prevent further unauthorized access"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Disconnecting a live system from the network is a common mistake (called 'pulling the plug') because it immediately destroys all **volatile evidence** residing in the system's memory (RAM). The forensic expert's criticism is that Jake should have prioritized capturing the memory image before disrupting the system."
    },
    {
      "id": "q435",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large enterprise is deploying a new automation system that will allow various teams, including development, operations, and QA, to provision and configure their own environments. The security team is concerned about potential misconfigurations or excessive permissions being granted. Which solution can be used within the automation to ensure security standards are met without limiting the agility of the teams?",
      "options": [
        {
          "id": "A",
          "text": "Implementing a zero-trust model for all teams"
        },
        {
          "id": "B",
          "text": "Manually reviewing all requests before provisioning"
        },
        {
          "id": "C",
          "text": "Setting up guard rails within the automation scripts to define boundaries and prevent misconfigurations"
        },
        {
          "id": "D",
          "text": "Disabling the automation system for all teams except the security team"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Setting up **guard rails** (automated policy checks and constraints) within the automation system ensures that provisioning actions are automatically checked and blocked if they violate predefined security standards (e.g., creating a publicly exposed database), thus maintaining security without requiring manual intervention that limits agility."
    },
    {
      "id": "q436",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a security breach, Jake, a digital forensics investigator, arrives at the scene to collect a hard drive for examination. He labels the hard drive, records its serial number, photographs the scene, and ensures the hard drive is transported securely to the forensics lab. These steps are crucial to:",
      "options": [
        {
          "id": "A",
          "text": "Preserve the data's integrity on the hard drive"
        },
        {
          "id": "B",
          "text": "Maintain the chain of custody"
        },
        {
          "id": "C",
          "text": "Decrypt the data on the hard drive"
        },
        {
          "id": "D",
          "text": "Implement a legal hold on the data"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Maintaining a **chain of custody** is the process of documenting the sequence of possession, transfer, and handling of evidence from the moment it is collected. Labeling, documenting serial numbers, and ensuring secure transport are core steps in this process to validate the evidence's integrity for legal purposes."
    },
    {
      "id": "q437",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After deploying a new version of your company’s internal application, several users reported issues with accessing specific features. To investigate the root cause, you decided to review the application logs. What entry in the logs would most directly indicate a software bug or error related to the recent deployment?",
      "options": [
        {
          "id": "A",
          "text": "Entries showing successful user authentication timestamps"
        },
        {
          "id": "B",
          "text": "Entries detailing the number of transactions completed by the application"
        },
        {
          "id": "C",
          "text": "Entries with \"ERROR\" or \"EXCEPTION\" related to the specific feature being accessed"
        },
        {
          "id": "D",
          "text": "Entries showing routine data backup operations"
        }
      ],
      "correctOptionId": "C",
      "explanation": "In application logs, entries labeled as **'ERROR'** or **'EXCEPTION'** directly indicate that the application encountered a failure or bug during processing. If these occur when a specific feature is accessed, they directly point to the root cause of the deployment issue."
    },
    {
      "id": "q438",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a major data breach in XYZ Corporation, the management decided to understand the primary reason behind the incident to prevent such occurrences in the future. Which of the following approaches should the incident response team prioritize to determine the fundamental cause of the breach?",
      "options": [
        {
          "id": "A",
          "text": "Perform vulnerability scanning on all servers"
        },
        {
          "id": "B",
          "text": "Review firewall logs for the past week"
        },
        {
          "id": "C",
          "text": "Conduct a root cause analysis"
        },
        {
          "id": "D",
          "text": "Upgrade all security software"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Root Cause Analysis (RCA)** is a systematic process for identifying the **fundamental reason** (the underlying cause) for a problem, rather than just treating the immediate symptoms. This is the necessary step to prevent future recurrences of the breach."
    },
    {
      "id": "q439",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cloud infrastructure team frequently receives performance alerts from various resources in the environment. They want to ensure that relevant teams are immediately informed and can act upon any resource that crosses a performance threshold. What is the BEST way to accomplish this?",
      "options": [
        {
          "id": "A",
          "text": "Conduct a weekly meeting to review all performance alerts"
        },
        {
          "id": "B",
          "text": "Automate ticket creation for any resource that crosses the performance threshold and assign it to the relevant team"
        },
        {
          "id": "C",
          "text": "Send all performance alerts to the cloud infrastructure team's email for review"
        },
        {
          "id": "D",
          "text": "Disable performance monitoring to reduce alert fatigue"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The most effective method for immediate action is **automation**. Automatically generating a ticket and assigning it to the specific support team streamlines the process, ensures immediate notification, accountability, and prevents critical alerts from being missed due to manual review backlog or 'alert fatigue'."
    },
    {
      "id": "q440",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A development team is working on a mission critical application for a financial institution. The team wants to ensure that any code changes do not introduce vulnerabilities or break existing functionalities. What is the BEST automation approach to achieve this objective?",
      "options": [
        {
          "id": "A",
          "text": "Manually review the code changes once a month"
        },
        {
          "id": "B",
          "text": "Use continuous integration tools to automatically compile and test code changes against known vulnerabilities and functional tests"
        },
        {
          "id": "C",
          "text": "Rely on users to report any issues after the application is deployed"
        },
        {
          "id": "D",
          "text": "Implement a firewall to block potential attacks on the application"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**Continuous Integration (CI)** tools automate the build and testing of code immediately upon submission. By integrating security testing (SAST/DAST) and functional tests into the CI pipeline, the team can automatically catch new vulnerabilities or broken functionalities early and consistently."
    },
    {
      "id": "q441",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Acme Corp. is in the early stages of a potential lawsuit, and their legal department has just issued a notice for e-discovery related to email communications of a former executive. As an IT security professional, which of the following should be your FIRST action?",
      "options": [
        {
          "id": "A",
          "text": "Start a full backup of the company's email server"
        },
        {
          "id": "B",
          "text": "Identify and isolate the email accounts related to the former executive"
        },
        {
          "id": "C",
          "text": "Immediately delete all emails that are more than two years old"
        },
        {
          "id": "D",
          "text": "Inform the media about the upcoming lawsuit"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The first step after receiving a notice for e-discovery is to ensure the preservation of relevant data (Electronically Stored Information - ESI). This is done by initiating a **legal hold**, which requires immediately identifying and isolating the specific data sources (like email accounts) to prevent their alteration or deletion."
    },
    {
      "id": "q442",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "OmegaHealth, a large healthcare provider, is integrating automation into its operations. When a new healthcare worker is hired, they require access to multiple systems. Why would OmegaHealth automate the user provisioning process across these systems?",
      "options": [
        {
          "id": "A",
          "text": "To enforce a uniform password for all healthcare workers."
        },
        {
          "id": "B",
          "text": "To save time by ensuring consistent and simultaneous account creation across all necessary platforms"
        },
        {
          "id": "C",
          "text": "To prevent the new hires from accessing any system until their probation period ends"
        },
        {
          "id": "D",
          "text": "To reduce the software licenses needed by delaying account activation"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Automating user provisioning streamlines the onboarding process across multiple platforms. The primary benefits are **efficiency (saving time)**, **consistency** (ensuring correct permissions are set based on role), and **simultaneous creation** across all required systems."
    },
    {
      "id": "q443",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a regular review of system logs, Alex, a security analyst, noticed an unusual pattern of network traffic originating from a single IP address. Instead of waiting for an automated system to flag this as suspicious, he decides to manually dive deeper into the data to identify any potential threats. What is Alex engaging in?",
      "options": [
        {
          "id": "A",
          "text": "Incident management"
        },
        {
          "id": "B",
          "text": "Threat modeling"
        },
        {
          "id": "C",
          "text": "Threat hunting"
        },
        {
          "id": "D",
          "text": "Security monitoring"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Threat hunting** is a proactive and often manual process where security analysts actively search through network logs and data for subtle signs of malicious activity that traditional automated tools (like an IDS) may have missed."
    },
    {
      "id": "q444",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "OmegaTech’s security team noticed an increase in account compromises. An internal investigation revealed that many employees have been using the same passwords across different company systems and applications. Which password best practice can OmegaTech enforce to mitigate this issue?",
      "options": [
        {
          "id": "A",
          "text": "Encouraging users to change their passwords every month"
        },
        {
          "id": "B",
          "text": "Implementing an account lockout policy after three failed login attempts"
        },
        {
          "id": "C",
          "text": "Prohibiting password reuse for at least the last five password changes"
        },
        {
          "id": "D",
          "text": "Mandating that passwords contain only alphabetical characters for simplicity"
        }
      ],
      "correctOptionId": "C",
      "explanation": "To mitigate password reuse, organizations should enforce a policy of **password history retention** (e.g., prohibiting reuse of the last 5-10 passwords). This forces users to create unique passwords upon reset and discourages cycling through a small set of old passwords."
    },
    {
      "id": "q445",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaCorp’s IT department is reviewing password policies and wants to adopt a strategy that enhances security. Which of the following password strategies would be the MOST secure?",
      "options": [
        {
          "id": "A",
          "text": "Passwords should be at least 6 characters long, with no other requirements"
        },
        {
          "id": "B",
          "text": "Passwords should be at least 10 characters long and include both uppercase and lowercase letters"
        },
        {
          "id": "C",
          "text": "Passwords should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters"
        },
        {
          "id": "D",
          "text": "Passwords should be at least 4 characters long and include a mix of uppercase and lowercase letters"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The combination of adequate **length** (8+ characters) and **complexity** (mixed case, numbers, special characters) creates the largest possible keyspace, making the password the most secure against brute-force and dictionary attacks."
    },
    {
      "id": "q446",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A security analyst is reviewing the IPS logs and discovers multiple alerts originating from a single IP address attempting to access various company servers. The analyst is trying to determine the type of attack. Which of the following log entries BEST indicates a port scanning activity?",
      "options": [
        {
          "id": "A",
          "text": "Multiple consecutive connection attempts to different ports on a single server in a short time frame"
        },
        {
          "id": "B",
          "text": "Repeated connection attempts to port 80 of a web server every 3 seconds"
        },
        {
          "id": "C",
          "text": "Numerous failed login attempts to an FTP server from the same IP address"
        },
        {
          "id": "D",
          "text": "Consistent pings to the network gateway every 5 seconds"
        }
      ],
      "correctOptionId": "A",
      "explanation": "**Port scanning** involves systematically probing a host by sending connection attempts to **multiple, different ports** in rapid succession to determine which services are listening, which is exactly what option A describes."
    },
    {
      "id": "q447",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "As part of a cloud infrastructure project, AlphaTech plans to deploy multiple virtualized resources for its new application. The deployment includes databases, web servers, and load balancers. What is the PRIMARY benefit of using automation scripts in the resource provisioning process for this project?",
      "options": [
        {
          "id": "A",
          "text": "It enables AlphaTech to use a single operating system for all resources"
        },
        {
          "id": "B",
          "text": "It guarantees 100% uptime for all virtualized resources"
        },
        {
          "id": "C",
          "text": "It ensures standardized, repeatable, and rapid deployments across the infrastructure"
        },
        {
          "id": "D",
          "text": "It prevents unauthorized users from accessing the cloud infrastructure"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The primary benefit of using automation scripts for provisioning is consistency and speed. It ensures configurations are **standardized** (no human error in setup), **repeatable** (easy to clone environments), and **rapidly deployed** (increased agility)."
    },
    {
      "id": "q448",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DeltaTech, a progressive tech firm, is aiming to improve its security posture by eliminating the vulnerabilities associated with password use. They are considering deploying a passwordless authentication system. Which of the following represents the PRIMARY advantage of such a system?",
      "options": [
        {
          "id": "A",
          "text": "It allows users to choose any password complexity"
        },
        {
          "id": "B",
          "text": "It eliminates the need for remembering passwords"
        },
        {
          "id": "C",
          "text": "It guarantees protection against all cyber threats"
        },
        {
          "id": "D",
          "text": "It ensures compatibility with all legacy systems"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The primary advantage of passwordless authentication is that it **eliminates the need for traditional passwords**, thereby mitigating the risks associated with weak passwords, password reuse, and phishing attacks."
    },
    {
      "id": "q449",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "OmegaTech recently introduced an additional layer of security for its remote server access. Along with their usual passwords, employees now need to use a physical device they have with them to gain access. Which of the following represents this “something you have” factor in multifactor authentication?",
      "options": [
        {
          "id": "A",
          "text": "Password hint"
        },
        {
          "id": "B",
          "text": "Facial recognition"
        },
        {
          "id": "C",
          "text": "Hardware token"
        },
        {
          "id": "D",
          "text": "Voice recognition"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The 'something you have' factor in multi-factor authentication refers to a physical item in the user's possession. A **hardware token** (or mobile phone receiving an SMS code) is a common example."
    },
    {
      "id": "q450",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A large corporation is investigating a potential insider threat incident. A security analyst is tasked with examining the OS-specific security logs of a Windows server where sensitive documents are stored. Which of the following entries in the logs would MOST likely indicate unauthorized access attempts?",
      "options": [
        {
          "id": "A",
          "text": "Logs displaying Windows Update successful installations"
        },
        {
          "id": "B",
          "text": "Entries showing a large number of failed login attempts followed by a successful login from a user outside of regular business hours"
        },
        {
          "id": "C",
          "text": "Logs indicating scheduled disk defragmentation tasks"
        },
        {
          "id": "D",
          "text": "Entries detailing successful printer connections and print jobs"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A sequence of failed login attempts (suggesting a brute-force or guessing attack) followed by a successful login, especially during suspicious hours, is a strong indicator of an **unauthorized access attempt** and should be immediately investigated as a potential insider or external threat."
    },
    {
      "id": "q451",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "ThetaTech, a financial institution, wants to upgrade its authentication system for high-net-worth customers accessing their accounts online. Besides the traditional password, they want to include a method that captures unique physical or behavioral characteristics. Which type of authentication method should ThetaTech consider?",
      "options": [
        {
          "id": "A",
          "text": "Token-based authentication"
        },
        {
          "id": "B",
          "text": "Geolocation tracking"
        },
        {
          "id": "C",
          "text": "Biometrics"
        },
        {
          "id": "D",
          "text": "Smart card"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Biometrics** captures unique physical (e.g., fingerprint, retina) or behavioral (e.g., voice, keystroke dynamics) characteristics. This falls under the 'something you are' factor and is the best fit for the description."
    },
    {
      "id": "q452",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The cybersecurity team of XYZ Corp. plans to assess their organization’s preparedness for a potential data breach. They aim to evaluate the effectiveness of their response strategy without performing any real actions. Which of the following methods would BEST help them achieve this goal?",
      "options": [
        {
          "id": "A",
          "text": "Live fire exercise"
        },
        {
          "id": "B",
          "text": "System hardening test"
        },
        {
          "id": "C",
          "text": "Red team/blue team exercise"
        },
        {
          "id": "D",
          "text": "Tabletop exercise"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A **tabletop exercise** is a discussion-based session where team members review and discuss their roles, processes, and planned responses to a hypothetical scenario (like a data breach). It evaluates the strategy without performing any real technical actions."
    },
    {
      "id": "q453",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In preparation for a potential lawsuit, Meg, a cybersecurity analyst, has been asked to ensure that specific digital evidence remains intact and is not altered or deleted. What measure should Meg implement to ensure this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Encrypt the evidence"
        },
        {
          "id": "B",
          "text": "Initiate a legal hold"
        },
        {
          "id": "C",
          "text": "Perform a full disk wipe"
        },
        {
          "id": "D",
          "text": "Conduct a vulnerability assessment"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **legal hold** (or preservation order) is a process used in e-discovery that suspends the normal disposition or processing of records to ensure that specific data (digital evidence) is preserved for a potential legal case and is not altered or deleted."
    },
    {
      "id": "q454",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial company is designing a new system that needs to ensure data is accessed based on classifications and clearance levels of the users. Which of the following access control models BEST fits this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Role-Based Access Control (RBAC)"
        },
        {
          "id": "B",
          "text": "Discretionary Access Control (DAC)"
        },
        {
          "id": "C",
          "text": "Mandatory Access Control (MAC)"
        },
        {
          "id": "D",
          "text": "Attribute-Based Access Control (ABAC)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**MAC** (Mandatory Access Control) is strictly enforced by the operating system or system kernel. It bases access decisions on the comparison of the data's **classification** (sensitivity level) and the user's **clearance** level, which exactly matches the requirement."
    },
    {
      "id": "q455",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "The incident response team at XYZ Corp received a report that an attacker successfully exploited a vulnerable web application in their environment. To identify which server might have been compromised, the team decided to cross-reference recent vulnerability scan results. Which of the following information from the vulnerability scan would be MOST helpful in pinpointing the potentially compromised server?",
      "options": [
        {
          "id": "A",
          "text": "The timestamp of when the scan was conducted"
        },
        {
          "id": "B",
          "text": "The software version of the scanning tool"
        },
        {
          "id": "C",
          "text": "List of hosts with the specific vulnerability related to the exploit"
        },
        {
          "id": "D",
          "text": "The total number of vulnerabilities identified during the scan"
        }
      ],
      "correctOptionId": "C",
      "explanation": "To pinpoint the compromised server, the team must find the server that was vulnerable to the exact exploit used by the attacker. Therefore, the **list of hosts with the specific vulnerability** that was exploited is the most critical piece of information from the scan."
    },
    {
      "id": "q456",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Epsilon Inc. recently hired Jenny as a junior network administrator. To ensure security, they give Jenny only the access permissions necessary to complete her specific tasks, such as monitoring network traffic, but not modifying firewall rules. This approach of granting Jenny’s permissions aligns with which security principle?",
      "options": [
        {
          "id": "A",
          "text": "Mandatory Access Control (MAC)"
        },
        {
          "id": "B",
          "text": "Role-Based Access Control (RBAC)"
        },
        {
          "id": "C",
          "text": "Time-of-Day Restrictions"
        },
        {
          "id": "D",
          "text": "Least Privilege"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The principle of **Least Privilege** dictates that users (or subjects) should be granted only the minimum levels of access or permissions necessary to complete their job functions and nothing more. This directly aligns with restricting Jenny from modifying rules while allowing her to monitor traffic."
    },
    {
      "id": "q457",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company is attempting to verify the legitimacy of an email sent from a senior executive to a number of employees. The email requests the recipients to click on a link and enter their credentials for a “system upgrade.” The security team wants to ascertain if the email genuinely came from the executive. Which of the following metadata from the email would be MOST beneficial in this investigation?",
      "options": [
        {
          "id": "A",
          "text": "The email's subject line"
        },
        {
          "id": "B",
          "text": "The email's send time and date"
        },
        {
          "id": "C",
          "text": "The originating IP address in the email headers"
        },
        {
          "id": "D",
          "text": "The size of the email in bytes"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **originating IP address** (found in the email headers) can be checked against a list of the company's approved mail servers. If the IP address does not match an expected corporate server, it is a strong indicator that the email was spoofed/phished."
    },
    {
      "id": "q458",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cloud-based e-commerce company wants to ensure that its inventory system automatically updates the stock levels on its website and third-party sales platforms whenever a sale occurs. What should the company leverage to achieve this real-time synchronization?",
      "options": [
        {
          "id": "A",
          "text": "Regularly backup the inventory system and restore it on the website and sales platforms"
        },
        {
          "id": "B",
          "text": "Rely on customers to report discrepancies in stock levels"
        },
        {
          "id": "C",
          "text": "Use Application Programming Interfaces (APIs) to integrate the inventory system with the website and third-party platforms"
        },
        {
          "id": "D",
          "text": "Conduct daily stock audits and manually update all platforms"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**APIs** (Application Programming Interfaces) are the best method for enabling real-time, automated, and programmatic data exchange between disparate software systems (the inventory system, the website, and external sales platforms)."
    },
    {
      "id": "q459",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a series of phishing attacks, the IT department of BetaTech Corp noticed that several employees were using easily guessable passwords. The security team decided to recommend the use of password managers to assist employees in creating and remembering strong passwords. Which of the following is a PRIMARY benefit of using password managers in this context?",
      "options": [
        {
          "id": "A",
          "text": "Password managers automatically update the operating system"
        },
        {
          "id": "B",
          "text": "Password managers can generate and store complex passwords"
        },
        {
          "id": "C",
          "text": "Password managers always prevent phishing attacks"
        },
        {
          "id": "D",
          "text": "Password managers allow the reuse of strong passwords across multiple platforms"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The core function and primary benefit of a password manager is the ability to automatically **generate and securely store complex, unique passwords** for every service, eliminating the need for users to remember them or resort to weak, guessable ones."
    },
    {
      "id": "q460",
      "domain": "Security Operations",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A company’s online retail website faces DDoS attacks that cause significant downtime. Their current setup relies on manual verification of traffic spikes before mitigation efforts are deployed. What change could BEST enhance the company’s reaction time to such attacks in the future?",
      "options": [
        {
          "id": "A",
          "text": "Educate users to report slow website loading times"
        },
        {
          "id": "B",
          "text": "Manually back up the website data every hour"
        },
        {
          "id": "C",
          "text": "Deploy a web application firewall with automated DDoS mitigation features"
        },
        {
          "id": "D",
          "text": "Increase the website's bandwidth to handle traffic spikes"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Relying on manual verification introduces unacceptable latency during a DDoS attack. Deploying a WAF (or similar cloud DDoS mitigation service) with **automated** features allows immediate detection and filtering of malicious traffic, drastically enhancing the reaction time."
    },
    {
      "id": "q461",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "RedFlare Solutions, a financial firm, is storing sensitive client data in a database. The Chief Information Security Officer (CISO) insists that the data should be unreadable even if it’s intercepted during transmission or if the storage is compromised. Which encryption standard would best serve this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Symmetric encryption using a shared key"
        },
        {
          "id": "B",
          "text": "Hashing the data with a one-way function"
        },
        {
          "id": "C",
          "text": "Encrypting the entire database using transparent data encryption"
        },
        {
          "id": "D",
          "text": "Storing the data in a proprietary format"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Transparent Data Encryption (TDE)** encrypts the entire database, ensuring that data is encrypted both **at rest** (storage is compromised) and often during intermediate memory/disk operations. While TLS/VPN handles in-transit encryption, TDE addresses the stored data requirement."
    },
    {
      "id": "q462",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GlobalTech, a software development company, is entering into a partnership with WebSolutions, a web hosting provider. They aim to create a standard set of terms governing their ongoing business transactions, including payment terms, delivery protocols, and warranties. Which type of agreement is most suitable for establishing these foundational terms for future transactions?",
      "options": [
        {
          "id": "A",
          "text": "Memorandum of understanding (MOU)"
        },
        {
          "id": "B",
          "text": "Non-disclosure agreement (NDA)"
        },
        {
          "id": "C",
          "text": "Licensing agreement"
        },
        {
          "id": "D",
          "text": "Master service agreement (MSA)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A **Master Service Agreement (MSA)** is designed to define a broad framework covering the foundational terms and conditions of business transactions between parties (like payment, protocols, and warranties). It sets general terms so that specific details of individual jobs can be negotiated in subsequent work orders (WOs) or Statements of Work (SOWs)."
    },
    {
      "id": "q463",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechCorp is implementing a new cloud-based solution. The security team has been tasked with analyzing the risks associated with this project. They’ve decided to categorize the risks based on their potential impact levels: Low, Medium, High, and Critical. Which type of risk analysis is TechCorp’s security team employing?",
      "options": [
        {
          "id": "A",
          "text": "Quantitative"
        },
        {
          "id": "B",
          "text": "Statistical"
        },
        {
          "id": "C",
          "text": "Qualitative"
        },
        {
          "id": "D",
          "text": "Financial"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Qualitative risk analysis** involves assessing risks based on descriptive categories or rankings, such as Low, Medium, High, and Critical, instead of using numerical or monetary values."
    },
    {
      "id": "q464",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureBank is in the process of selecting a vendor for their new online transaction system. The bank is keen on ensuring the selected vendor has robust security measures and a track record of maintaining those measures. As part of the vendor selection process, which of the following steps is the most relevant to the bank’s concerns?",
      "options": [
        {
          "id": "A",
          "text": "Checking the vendor's sales growth over the last five years"
        },
        {
          "id": "B",
          "text": "Conducting due diligence regarding the vendor's security practices"
        },
        {
          "id": "C",
          "text": "Comparing the visual appeal of the vendor's user interface to competitors"
        },
        {
          "id": "D",
          "text": "Evaluating the vendor's marketing strategies"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Conducting **due diligence** (or vendor risk assessment) regarding the vendor’s security practices is the step specifically designed to gather information, vet, and verify the robustness and track record of a potential third party's security posture."
    },
    {
      "id": "q465",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "MegaTech Inc. is in the process of outlining a strategy to ensure that after any disaster, critical applications can be restored to a working state within 4 hours. The organization also wants to make sure that the data loss does not exceed 1 hour. Which of the following policies is most relevant to achieving this objective?",
      "options": [
        {
          "id": "A",
          "text": "Data Retention Policy"
        },
        {
          "id": "B",
          "text": "Incident Response Policy"
        },
        {
          "id": "C",
          "text": "Disaster Recovery Policy"
        },
        {
          "id": "D",
          "text": "Password Policy"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The requirement focuses on recovery timelines and data loss tolerance after a major disruption. This involves defining the **Recovery Time Objective (RTO)** (4 hours) and **Recovery Point Objective (RPO)** (1 hour), which are core components of a **Disaster Recovery Policy**."
    },
    {
      "id": "q466",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberSecure Inc. is evaluating the financial impact of a potential security breach on its main server. The company has estimated that a breach of this server would lead to a direct financial loss of $500,000 due to data recovery, legal fees, and fines. Which of the following best represents this estimation?",
      "options": [
        {
          "id": "A",
          "text": "Annual Rate of Occurrence (ARO)"
        },
        {
          "id": "B",
          "text": "Total Cost of Ownership (TCO)"
        },
        {
          "id": "C",
          "text": "Single Loss Expectancy (SLE)"
        },
        {
          "id": "D",
          "text": "Annualized Loss Expectancy (ALE)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Single Loss Expectancy (SLE)** represents the expected monetary loss every time a single risk event (the breach) occurs. It is calculated as Asset Value (AV) multiplied by the Exposure Factor (EF)."
    },
    {
      "id": "q467",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureWeb LLC, a web hosting company, has experienced two server breaches over the past five years. They are currently analyzing the risks associated with their infrastructure. Which of the following best represents the Annualized Rate of Occurrence (ARO) for the server breaches?",
      "options": [
        {
          "id": "A",
          "text": "0.2"
        },
        {
          "id": "B",
          "text": "0.4"
        },
        {
          "id": "C",
          "text": "2"
        },
        {
          "id": "D",
          "text": "5"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The **Annualized Rate of Occurrence (ARO)** is the expected frequency of a specific event occurring over a one-year period. ARO = (Number of occurrences) / (Number of years). In this case, ARO = 2 / 5 = 0.4."
    },
    {
      "id": "q468",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An e-commerce company recently faced a DDoS attack that rendered its website unavailable for several hours. While reflecting on the incident, the CISO emphasized the importance of having a detailed plan that includes identification, containment, eradication, recovery, and lessons learned. Which policy primarily encompasses these stages for handling security incidents?",
      "options": [
        {
          "id": "A",
          "text": "Change Management Policy"
        },
        {
          "id": "B",
          "text": "Incident Response Policy"
        },
        {
          "id": "C",
          "text": "Disaster Recovery Policy"
        },
        {
          "id": "D",
          "text": "Remote Access Policy"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The phases mentioned (identification, containment, eradication, recovery, lessons learned) are the core steps defined in a formal **Incident Response Policy (IRP)** or Incident Response Plan, which focuses on managing security events like a DDoS attack."
    },
    {
      "id": "q469",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaCorp is in the final stages of selecting a cybersecurity consultant. One of the shortlisted firms, SecureWorld, recently hired AlphaCorp’s former CISO as a senior consultant. Given this situation, what should be AlphaCorp’s immediate concern during vendor selection?",
      "options": [
        {
          "id": "A",
          "text": "The expertise the former CISO brings to SecureWorld"
        },
        {
          "id": "B",
          "text": "The possibility that SecureWorld could offer a discounted price"
        },
        {
          "id": "C",
          "text": "Potential conflict of interest due to prior associations"
        },
        {
          "id": "D",
          "text": "SecureWorld's global presence and reputation"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **potential conflict of interest** is the immediate concern. The former CISO has confidential knowledge of AlphaCorp's systems and risks, which could bias SecureWorld's assessment or give them an unfair advantage, thus compromising the integrity of the selection process."
    },
    {
      "id": "q470",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "WebServ Corp., a web hosting company, has been analyzing the reliability of its servers. They found that one of their server models, on average, tends to fail once every 2000 hours and then gets promptly repaired. Which of the following metrics is WebServ Corp. evaluating?",
      "options": [
        {
          "id": "A",
          "text": "Recovery Time Objective (RTO)"
        },
        {
          "id": "B",
          "text": "Mean Time To Repair (MTTR)"
        },
        {
          "id": "C",
          "text": "Mean Time Between Failures (MTBF)"
        },
        {
          "id": "D",
          "text": "Recovery Point Objective (RPO)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Mean Time Between Failures (MTBF)** is a measure of a system's **reliability**, representing the predicted elapsed time between inherent failures of a mechanical or electronic system during normal operation. The 2000 hours between failures is the MTBF."
    },
    {
      "id": "q471",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFusion Inc. is a well-established technology company that has been in the market for over 15 years. Recently, the board of directors decided that the company will pursue aggressive growth strategies by entering new, untested markets and launching cutting-edge products, even if these strategies come with significant risks. How would you classify TechFusion Inc.’s risk appetite?",
      "options": [
        {
          "id": "A",
          "text": "Conservative"
        },
        {
          "id": "B",
          "text": "Expansionary"
        },
        {
          "id": "C",
          "text": "Neutral"
        },
        {
          "id": "D",
          "text": "Risk-averse"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An **Expansionary** risk appetite is characterized by an entity's willingness to accept a higher level of risk in pursuit of higher potential rewards, which aligns with the strategy of aggressively entering new, untested markets."
    },
    {
      "id": "q472",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a significant merger between two large corporations, a comprehensive risk assessment was conducted to identify potential security gaps within the combined infrastructure. This assessment was exclusive to the merger and was not planned to be repeated in the future. What type of risk assessment was this?",
      "options": [
        {
          "id": "A",
          "text": "Recurring"
        },
        {
          "id": "B",
          "text": "Continuous"
        },
        {
          "id": "C",
          "text": "One-time"
        },
        {
          "id": "D",
          "text": "Dynamic"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **One-time** risk assessment is performed for a specific, non-repeating event (such as a merger, acquisition, or major system launch) and is not part of a regularly scheduled or continuous program."
    },
    {
      "id": "q473",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AcmeTech, a software development firm, recently experienced a major data breach that was traced back to a vulnerability in their custom-built application. Post-incident analysis revealed that the vulnerability had been introduced during the coding phase and was never detected during testing. To avoid such vulnerabilities in the future, which policy should AcmeTech emphasize to ensure secure practices are maintained throughout the development process?",
      "options": [
        {
          "id": "A",
          "text": "Incident Response Policy"
        },
        {
          "id": "B",
          "text": "Change Management Policy"
        },
        {
          "id": "C",
          "text": "Business Continuity Policy"
        },
        {
          "id": "D",
          "text": "Software Development Lifecycle (SDLC) Policy"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The **SDLC (Software Development Lifecycle) Policy** is the overarching framework that governs the entire process of application creation, including the coding and testing phases. By emphasizing secure practices throughout the SDLC, the company can catch vulnerabilities earlier in the process."
    },
    {
      "id": "q474",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "An organization is conducting a risk assessment for its cloud infrastructure. The assessment has determined that the likelihood of a data breach through an insecure API is “High.” What factors may have contributed to this likelihood rating?",
      "options": [
        {
          "id": "A",
          "text": "The API has been thoroughly tested and has a known secure configuration"
        },
        {
          "id": "B",
          "text": "There are few records of this kind of breach in the industry"
        },
        {
          "id": "C",
          "text": "The API is publicly accessible and has had several vulnerabilities reported in the past six months"
        },
        {
          "id": "D",
          "text": "The cloud provider offers a guaranteed SLA against any form of security breach"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Factors that **increase likelihood** are known weaknesses and accessibility. A **publicly accessible** API with a recent history of **reported vulnerabilities** presents an active and available target, which directly leads to a 'High' likelihood rating."
    },
    {
      "id": "q475",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureNet Ltd. wants to protect user accounts from brute force attacks. They want to implement a measure where, after a certain number of failed login attempts, the account would become temporarily inaccessible. Which standard best suits this requirement?",
      "options": [
        {
          "id": "A",
          "text": "Password minimum length"
        },
        {
          "id": "B",
          "text": "Account lockout threshold"
        },
        {
          "id": "C",
          "text": "Mandatory password resets"
        },
        {
          "id": "D",
          "text": "Two-factor authentication"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The **Account Lockout Threshold** defines the number of consecutive failed login attempts after which a user account is automatically disabled or locked out for a specified duration, effectively stopping automated brute force attacks."
    },
    {
      "id": "q476",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a recent security breach, CyberSolutions Inc. evaluated their response metrics and determined that, on average, it took 4 hours from identifying a security breach to having it completely resolved. Which metric best describes this 4-hour timeframe?",
      "options": [
        {
          "id": "A",
          "text": "Recovery Time Objective (RTO)"
        },
        {
          "id": "B",
          "text": "Recovery Point Objective (RPO)"
        },
        {
          "id": "C",
          "text": "Mean Time Between Failures (MTBF)"
        },
        {
          "id": "D",
          "text": "Mean Time To Repair (MTTR)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**Mean Time To Repair (MTTR)** represents the average time required to repair a failed component, often measured from the moment the failure or breach is identified until the system is fully operational and resolved. The term is sometimes also used to describe the Mean Time To Recover."
    },
    {
      "id": "q477",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SecureCom, a telecommunications company, is planning to expand its infrastructure across Country A. The nation recently updated its telecommunications regulations and mandates strict guidelines for all external communications. Which of the following should be SecureCom’s primary focus as it begins its expansion?",
      "options": [
        {
          "id": "A",
          "text": "Increasing advertising budget to gain a stronger market presence in Country A"
        },
        {
          "id": "B",
          "text": "Ensuring its infrastructure meets the national standards for secure and encrypted communications"
        },
        {
          "id": "C",
          "text": "Collaborating with local tech companies to better understand the culture of Country A"
        },
        {
          "id": "D",
          "text": "Launching new products tailored to the preferences of Country A's residents"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Compliance with the **national telecommunications regulations and mandated strict guidelines** is the paramount concern when expanding operations in a new country. Failure to comply with security mandates can result in severe legal and financial penalties, making this the primary focus."
    },
    {
      "id": "q478",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During an audit review at NetSecure Corp., the external auditors observed that the company is willing to take risks that can potentially result in a 10% decrease in their annual profits, but no more than that. The auditors want to document this finding in their report. Which term should they use to describe NetSecure Corp.’s stance?",
      "options": [
        {
          "id": "A",
          "text": "Risk Avoidance"
        },
        {
          "id": "B",
          "text": "Risk Transfer"
        },
        {
          "id": "C",
          "text": "Risk Tolerance"
        },
        {
          "id": "D",
          "text": "Risk Assessment"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Risk Tolerance** represents the maximum amount of risk an entity is willing to accept or tolerate. NetSecure Corp.'s acceptance of risks up to a 10% decrease in annual profits defines their tolerance level."
    },
    {
      "id": "q479",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechGuard Corp. conducts a risk assessment every six months to identify new vulnerabilities and ensure that previous risk-mitigation strategies remain effective. This type of risk assessment is best described as:",
      "options": [
        {
          "id": "A",
          "text": "Periodic"
        },
        {
          "id": "B",
          "text": "Ad hoc"
        },
        {
          "id": "C",
          "text": "Continuous"
        },
        {
          "id": "D",
          "text": "Recurring"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**Recurring** risk assessments are those that are formally scheduled and conducted at regular, defined intervals (like every six months) to maintain an updated risk posture and test mitigations."
    },
    {
      "id": "q480",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberFleet Inc., a software development company, has just heard of a newly discovered vulnerability in a third-party library they heavily rely upon. The security team quickly gathers to understand and analyze the potential risks associated with this vulnerability. This spontaneous assessment is best described as:",
      "options": [
        {
          "id": "A",
          "text": "Routine"
        },
        {
          "id": "B",
          "text": "Ad hoc"
        },
        {
          "id": "C",
          "text": "Scheduled"
        },
        {
          "id": "D",
          "text": "Benchmark"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An **Ad hoc** risk assessment is performed outside of a regular schedule, typically in response to a sudden, specific event or situation, such as the discovery of a new vulnerability (often a zero-day) that affects the organization."
    },
    {
      "id": "q481",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFlow Corp. is undergoing a risk analysis for its online platform. If a critical vulnerability were exploited, the company would have to pay $10,000 in repair costs, $5,000 in compensation to customers, and a $15,000 fine to regulatory bodies. What would be the Single Loss Expectancy (SLE) for this vulnerability?",
      "options": [
        {
          "id": "A",
          "text": "$10,000"
        },
        {
          "id": "B",
          "text": "$20,000"
        },
        {
          "id": "C",
          "text": "$30,000"
        },
        {
          "id": "D",
          "text": "$50,000"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Single Loss Expectancy (SLE)** is the total estimated monetary loss for a **single occurrence** of a specific threat being realized. SLE = $10,000 (Repair) + $5,000 (Compensation) + $15,000 (Fines) = $30,000."
    },
    {
      "id": "q482",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GlobalTech, a multinational corporation, is negotiating a cloud storage contract with CloudCorp. GlobalTech wants to ensure that data retrieval times remain under 2 seconds 99.9% of the time. Which component should be explicitly defined in their agreement to set this expectation?",
      "options": [
        {
          "id": "A",
          "text": "Pricing model"
        },
        {
          "id": "B",
          "text": "Data sovereignty clauses"
        },
        {
          "id": "C",
          "text": "Service-level agreement (SLA)"
        },
        {
          "id": "D",
          "text": "Termination clauses"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **Service-Level Agreement (SLA)** is the part of a contract that defines specific, quantifiable metrics (like data retrieval time and percentage of uptime) that the service provider (CloudCorp) is obligated to meet, along with penalties if they fail to do so."
    },
    {
      "id": "q483",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A software development company is evaluating the risks associated with a newly discovered vulnerability in its application. After reviewing logs and simulating potential attacks, the security team estimates that there is a 0.25 probability of the vulnerability being exploited in the next year. What does this probability indicate?",
      "options": [
        {
          "id": "A",
          "text": "The vulnerability has a 1 in 4 chance of being exploited in the next year"
        },
        {
          "id": "B",
          "text": "The vulnerability will certainly be exploited four times in the next year"
        },
        {
          "id": "C",
          "text": "The vulnerability has been exploited 25 times in the past year"
        },
        {
          "id": "D",
          "text": "Every fourth customer will exploit the vulnerability."
        }
      ],
      "correctOptionId": "A",
      "explanation": "A probability of 0.25 is mathematically equivalent to a **25% chance or a 1 in 4 likelihood** of the event (the exploitation) occurring in the specified period (the next year)."
    },
    {
      "id": "q484",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A global e-commerce company maintains a risk register to keep track of identified risks and to monitor specific metrics that might indicate an increased risk level. Recently, there has been a 20% increase in abandoned shopping carts on their platform. How should this metric be categorized in the context of the risk register?",
      "options": [
        {
          "id": "A",
          "text": "Risk Appetite"
        },
        {
          "id": "B",
          "text": "Risk Mitigation Strategy"
        },
        {
          "id": "C",
          "text": "Key Risk Indicator (KRI)"
        },
        {
          "id": "D",
          "text": "Risk Tolerance Threshold"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **Key Risk Indicator (KRI)** is a metric used to monitor and provide an early signal of increasing risk exposure. An unexpected rise in abandoned carts could signal underlying security issues (e.g., payment failure, slow loading time) that increase the risk of lost revenue."
    },
    {
      "id": "q485",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A financial institution has reported that they experience an average of 3 phishing attacks every year that attempt to compromise their user data. Based on this data, what is the Annualized Rate of Occurrence (ARO) for these phishing attacks?",
      "options": [
        {
          "id": "A",
          "text": "0.33"
        },
        {
          "id": "B",
          "text": "1"
        },
        {
          "id": "C",
          "text": "3"
        },
        {
          "id": "D",
          "text": "12"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Annualized Rate of Occurrence (ARO)** is the expected frequency of a specific event occurring over a one-year period. Since the attacks occur an average of 3 times per year, the ARO is 3."
    },
    {
      "id": "q486",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a board meeting at DataFlow Corp., the CEO emphasizes that while they are willing to take certain risks for innovation, there’s a limit to the amount of risk they are willing to take, especially concerning potential financial losses. To ensure that risks stay below this level, what should be defined in the risk register?",
      "options": [
        {
          "id": "A",
          "text": "Risk Owner Assignment"
        },
        {
          "id": "B",
          "text": "Key Risk Indicator (KRI)"
        },
        {
          "id": "C",
          "text": "Risk Impact Analysis"
        },
        {
          "id": "D",
          "text": "Risk Threshold"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The **Risk Threshold** indicates the maximum level of risk the organization is willing to tolerate before a risk is categorized as unacceptable or before mandatory mitigation actions are triggered. It defines the 'limit' the CEO mentioned."
    },
    {
      "id": "q487",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corporation recently implemented a security solution that constantly evaluates the company’s threat landscape, monitoring for emerging risks and immediately alerting the security team of any changes. This assessment model allows the team to rapidly adapt their security posture in response to live threats. What type of risk assessment is XYZ Corporation utilizing?",
      "options": [
        {
          "id": "A",
          "text": "One-time"
        },
        {
          "id": "B",
          "text": "Periodic"
        },
        {
          "id": "C",
          "text": "Dynamic"
        },
        {
          "id": "D",
          "text": "Continuous"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**Continuous** risk assessment involves ongoing and real-time monitoring of threats and vulnerabilities, enabling immediate alerts and rapid adaptation of the security posture in response to live changes in the threat landscape."
    },
    {
      "id": "q488",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Your organization is considering a partnership with TechVendor Inc., a software solution provider. Before finalizing the agreement, you wish to ensure their application’s security. What would be the most direct method to assess the robustness of their system against potential cyber threats?",
      "options": [
        {
          "id": "A",
          "text": "Conducting an internal security awareness training"
        },
        {
          "id": "B",
          "text": "Reviewing their past audit reports"
        },
        {
          "id": "C",
          "text": "Implementing strict firewall rules"
        },
        {
          "id": "D",
          "text": "Performing a penetration test on their application."
        }
      ],
      "correctOptionId": "D",
      "explanation": "Performing a **penetration test** is the most direct and realistic way to assess the robustness of a live system because it actively attempts to find and **exploit vulnerabilities** to determine the actual security risk posed by cyber threats."
    },
    {
      "id": "q489",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "MedGuard, a health tech company, has developed an AI-driven software that predicts potential health risks based on patient data. Before launching in the U.S. market, which of the following industry external considerations should be the company’s primary focus?",
      "options": [
        {
          "id": "A",
          "text": "Integrating with popular fitness tracking apps in the U.S."
        },
        {
          "id": "B",
          "text": "Ensuring compliance with the Health Insurance Portability and Accountability Act (HIPAA)"
        },
        {
          "id": "C",
          "text": "Surveying U.S. doctors about software interface preferences"
        },
        {
          "id": "D",
          "text": "Collaborating with U.S. pharmaceutical companies for promotional deals"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**HIPAA** is the core U.S. regulation that governs the security and privacy of electronic protected health information (ePHI). Since MedGuard's software predicts health risks based on **patient data**, ensuring HIPAA compliance is paramount before operating in the U.S. market."
    },
    {
      "id": "q490",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "During a company’s onboarding process, new employees are required to read and acknowledge understanding of various company policies. The HR department wants to ensure that employees are aware of their responsibilities when it comes to the use of company devices and internet resources. Which policy should be included in the onboarding packet to address this?",
      "options": [
        {
          "id": "A",
          "text": "Password Complexity Policy"
        },
        {
          "id": "B",
          "text": "Data Classification Policy"
        },
        {
          "id": "C",
          "text": "Acceptable Use Policy (AUP)"
        },
        {
          "id": "D",
          "text": "Vendor Management Policy"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Acceptable Use Policy (AUP)** outlines the organization's rules and restrictions regarding the acceptable use of company-owned devices, computers, network, and internet resources by employees."
    },
    {
      "id": "q491",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corp is in the process of defining clear roles and responsibilities for their IT assets. During a meeting, the team discussed the primary individual who will have the responsibility for the data within a specific IT system and also be the main point of contact for any decisions related to it. Which of the following roles best describes this individual?",
      "options": [
        {
          "id": "A",
          "text": "System administrator"
        },
        {
          "id": "B",
          "text": "Data custodian"
        },
        {
          "id": "C",
          "text": "System owner"
        },
        {
          "id": "D",
          "text": "End-user"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **System Owner** (or Data Owner) is the individual with ultimate accountability and responsibility for the data (its protection, privacy, and integrity) within a specific IT system and is the primary decision-maker concerning that data."
    },
    {
      "id": "q492",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "As the Chief Security Officer (CSO) of AlphaTech, you are in the process of finalizing a partnership agreement with a third-party provider. To ensure ongoing security compliance and transparency, you want to reserve the right for your organization to inspect the vendor’s operations and security measures in the future. Which clause should you ensure is included in the contract?",
      "options": [
        {
          "id": "A",
          "text": "Non-disclosure agreement (NDA)"
        },
        {
          "id": "B",
          "text": "Service level agreement (SLA)"
        },
        {
          "id": "C",
          "text": "Termination clause"
        },
        {
          "id": "D",
          "text": "Right-to-audit clause"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The **Right-to-Audit clause** reserves the legal right for AlphaTech to inspect, audit, and review the vendor’s systems, operations, and security controls, ensuring ongoing compliance and transparency over the life of the agreement."
    },
    {
      "id": "q493",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberGuard LLC, a cybersecurity firm, is in a stable position in its industry with consistent returns. The leadership decides not to pursue aggressive growth strategies but instead chooses to maintain its current market share and operational scale. They are open to minor risks but avoid major disruptions. How can one best describe CyberGuard LLC’s risk appetite?",
      "options": [
        {
          "id": "A",
          "text": "Expansionary"
        },
        {
          "id": "B",
          "text": "Neutral"
        },
        {
          "id": "C",
          "text": "Conservative"
        },
        {
          "id": "D",
          "text": "Aggressive"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **Neutral** risk appetite means an organization is focused on maintaining its current position and will take risks only when necessary, neither aggressively seeking high rewards nor strictly avoiding all risks (they accept minor risks, but avoid major disruptions)."
    },
    {
      "id": "q494",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Two university research departments, UniAlpha and UniBeta, decide to collaborate on a project exploring quantum computing’s security implications. They need an agreement to express mutual intentions without enforcing legally binding obligations. Which document is most suitable for their needs?",
      "options": [
        {
          "id": "A",
          "text": "Service-level agreement (SLA)"
        },
        {
          "id": "B",
          "text": "Non-disclosure agreement (NDA)"
        },
        {
          "id": "C",
          "text": "Memorandum of understanding (MOU)"
        },
        {
          "id": "D",
          "text": "Licensing agreement"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **Memorandum of Understanding (MOU)** is a formal agreement between two or more parties to signal their mutual intent and shared goals for collaboration. It is generally not legally binding and is suitable for exploratory research projects."
    },
    {
      "id": "q495",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFirm is preparing to embark on a new project with a client, focusing on implementing a cybersecurity infrastructure overhaul. They wish to lay out the specific tasks, deliverables, timelines, and resources required for this project. Which type of agreement would best capture these details?",
      "options": [
        {
          "id": "A",
          "text": "Memorandum of understanding (MOU)"
        },
        {
          "id": "B",
          "text": "Joint venture agreement"
        },
        {
          "id": "C",
          "text": "Master service agreement (MSA)"
        },
        {
          "id": "D",
          "text": "Work order (WO)/statement of work (SOW)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "A **Statement of Work (SOW)** or **Work Order (WO)** is the component of a business contract that details the project-specific tasks, deliverables, timelines, acceptance criteria, and resources, making it the best fit for an individual project's specifics."
    },
    {
      "id": "q496",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AcmeBank recently performed a business impact analysis for its online banking system. The result indicated that the bank could tolerate a maximum downtime of 4 hours for the system before incurring significant financial losses and customer dissatisfaction. Which concept best describes this 4-hour period?",
      "options": [
        {
          "id": "A",
          "text": "Recovery Point Objective (RPO)"
        },
        {
          "id": "B",
          "text": "Maximum Tolerable Downtime (MTD)"
        },
        {
          "id": "C",
          "text": "Recovery Time Objective (RTO)"
        },
        {
          "id": "D",
          "text": "Time To Restore (TTR)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Recovery Time Objective (RTO)** is the targeted duration of time within which a business process or system must be restored to a specified service level after a disruption to avoid unacceptable consequences. The maximum downtime of 4 hours defines this objective."
    },
    {
      "id": "q497",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DigitalZone Corp, a marketing company, collects personal data from users and determines how and why that data will be processed. At the same time, they engage an external company, CloudSolutions, to store and manage this data. In this scenario, what role does DigitalZone Corp play in relation to data protection regulations?",
      "options": [
        {
          "id": "A",
          "text": "Processor"
        },
        {
          "id": "B",
          "text": "Data subject"
        },
        {
          "id": "C",
          "text": "Controller"
        },
        {
          "id": "D",
          "text": "Third-party provider"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Controller** is the entity that determines the **purpose and means** of processing personal data. Since DigitalZone Corp decides how and why the data is processed, they are the Controller. CloudSolutions, which stores and manages data on their behalf, is the Processor."
    },
    {
      "id": "q498",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFirm Inc. has decided to engage in a new business venture. Before they move forward, the security team conducts several brainstorming sessions, interviews, and reviews historical data to generate a list of potential security threats that the new venture could face. This activity is a primary component of which step in the risk management process?",
      "options": [
        {
          "id": "A",
          "text": "Risk assessment"
        },
        {
          "id": "B",
          "text": "Risk response"
        },
        {
          "id": "C",
          "text": "Risk monitoring"
        },
        {
          "id": "D",
          "text": "Risk identification"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**Risk identification** is the initial step in the risk management process, involving the systematic detection and description of potential risks (threats, vulnerabilities) that could impact objectives. Brainstorming threats and reviewing historical data are key activities in this phase."
    },
    {
      "id": "q499",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A healthcare organization uses a software platform to manage patient records. A recent vulnerability assessment identified a potential exploit where an unauthorized individual might gain access to 30% of stored patient data. Which of the following BEST describes this scenario?",
      "options": [
        {
          "id": "A",
          "text": "The threat likelihood is 30%"
        },
        {
          "id": "B",
          "text": "The vulnerability has a 30% rate of occurrence"
        },
        {
          "id": "C",
          "text": "The exposure factor of the vulnerability is 30%"
        },
        {
          "id": "D",
          "text": "30% of the patients have been impacted"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Exposure Factor (EF)** is the percentage of asset value (the data) that is likely to be lost or compromised if a specific threat successfully exploits a vulnerability. Gaining access to 30% of the data means the EF is 30%."
    },
    {
      "id": "q500",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corporation recently faced a major power outage that affected their primary data center. During the incident, it was found that there was no clear guidance on the steps to maintain or quickly restore business operations. To address this, which of the following policies should XYZ Corporation prioritize implementing?",
      "options": [
        {
          "id": "A",
          "text": "Data Classification Policy"
        },
        {
          "id": "B",
          "text": "Business Continuity Policy"
        },
        {
          "id": "C",
          "text": "Acceptable Use Policy"
        },
        {
          "id": "D",
          "text": "Network Segmentation Strategy"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **Business Continuity Policy (BCP)** outlines the processes and procedures an organization should follow to ensure that essential functions can **continue during and after a disaster** (like a power outage). This policy provides the necessary guidance for restoring business operations."
    },
    {
      "id": "q501",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaTech wants to ensure that its remote employees follow best security practices when working from home. The security team has been tasked with drafting a set of guidelines for remote work. What should be the primary focus of these guidelines?",
      "options": [
        {
          "id": "A",
          "text": "Outlining punitive measures for non-compliance"
        },
        {
          "id": "B",
          "text": "Stating the company's legal position on remote work"
        },
        {
          "id": "C",
          "text": "Recommending security measures for home networks and devices"
        },
        {
          "id": "D",
          "text": "Dictating the exact software and hardware specifications for remote workers"
        }
      ],
      "correctOptionId": "C",
      "explanation": "Guidelines are typically advisory and intended to suggest best practices. For remote employees, the primary focus is to give practical advice on **securing their working environment (home networks and personal devices)** to protect corporate assets."
    },
    {
      "id": "q502",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Lisa, a security manager, is reviewing the company’s existing policies and realizes that there isn’t a comprehensive document detailing the organization’s stance, expectations, and commitment to protecting its information assets. Which of the following should Lisa prioritize creating to address this gap?",
      "options": [
        {
          "id": "A",
          "text": "Incident Response Plan"
        },
        {
          "id": "B",
          "text": "Information Security Policy"
        },
        {
          "id": "C",
          "text": "Acceptable Use Policy"
        },
        {
          "id": "D",
          "text": "Data Backup Strategy"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An **Information Security Policy** is the foundational, high-level document that sets the organization’s strategic stance, expectations, objectives, and overall commitment regarding the protection of its information assets. All other documents flow from this policy."
    },
    {
      "id": "q503",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFusion and CodeRush, two independent software development companies, are collaborating on a project that is expected to define industry standards for a new coding language. While both parties have an understanding of shared responsibilities, they have not yet established legally binding obligations. Which type of agreement best suits their current collaborative understanding?",
      "options": [
        {
          "id": "A",
          "text": "Service-level agreement (SLA)"
        },
        {
          "id": "B",
          "text": "Non-disclosure agreement (NDA)"
        },
        {
          "id": "C",
          "text": "Memorandum of agreement (MOA)"
        },
        {
          "id": "D",
          "text": "Licensing agreement"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **Memorandum of Agreement (MOA)** or Memorandum of Understanding (MOU) is a formal document that outlines mutual understandings and responsibilities. It is generally used to signal agreement or consensus when the parties **do not yet wish to establish legally binding obligations**."
    },
    {
      "id": "q504",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "As part of improving their security posture, TechHive Inc. decided to review their existing password policies. The current policy requires employees to use at least one uppercase letter, one number, and one special character. However, they found that users mostly only make minimal changes to their passwords during resets. Which standard should be integrated into their policy to ensure passwords are more complex and unique over time?",
      "options": [
        {
          "id": "A",
          "text": "Password history retention"
        },
        {
          "id": "B",
          "text": "Password expiration period"
        },
        {
          "id": "C",
          "text": "Account lockout duration"
        },
        {
          "id": "D",
          "text": "Maximum password age"
        }
      ],
      "correctOptionId": "A",
      "explanation": "**Password history retention** tracks the user's previous passwords and prevents their reuse (e.g., cannot reuse the last 5 passwords). This directly addresses the problem of users making only minimal changes to their old passwords upon reset."
    },
    {
      "id": "q505",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberTech Inc., a cybersecurity consulting company, is in discussions with a potential client, MedCorp, to assist in developing a new secure medical records system. MedCorp will be sharing sensitive patient data with CyberTech as part of the process. Which agreement should be in place before the sharing of such information to ensure confidentiality?",
      "options": [
        {
          "id": "A",
          "text": "Memorandum of understanding (MOU)"
        },
        {
          "id": "B",
          "text": "Service-level agreement (SLA)"
        },
        {
          "id": "C",
          "text": "Non-disclosure agreement (NDA)"
        },
        {
          "id": "D",
          "text": "Work order (WO)/statement of work (SOW)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **Non-Disclosure Agreement (NDA)** is the required legal contract to ensure that one party (CyberTech) receiving confidential information (sensitive patient data) from another party (MedCorp) agrees not to disclose or misuse it."
    },
    {
      "id": "q506",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaTech is conducting a risk analysis on their new online payment gateway. They’ve calculated the Annual Rate of Occurrence (ARO) for a specific vulnerability as 2, and the Single Loss Expectancy (SLE) as $50,000. How much should AlphaTech anticipate losing annually due to this vulnerability?",
      "options": [
        {
          "id": "A",
          "text": "$10,000"
        },
        {
          "id": "B",
          "text": "$100,000"
        },
        {
          "id": "C",
          "text": "$25,000"
        },
        {
          "id": "D",
          "text": "$1,000,000"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The **Annualized Loss Expectancy (ALE)** is calculated as **ALE = ARO × SLE**. In this case: ALE = 2 × $50,000 = $100,000."
    },
    {
      "id": "q507",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "WhiteCape Healthcare, an international healthcare provider, has a large patient database that includes many EU citizens. They’re about to implement a new system to improve data access for physicians. Which of the following regulatory requirements should they pay particular attention to when granting physicians access to EU patient data?",
      "options": [
        {
          "id": "A",
          "text": "Ensure data is only accessed for tax reporting purposes"
        },
        {
          "id": "B",
          "text": "Acquire explicit consent from patients before sharing data"
        },
        {
          "id": "C",
          "text": "Encrypt all data using a proprietary algorithm"
        },
        {
          "id": "D",
          "text": "Store data in a physical server located within the EU"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Under the GDPR (the key regulation for EU citizens' data), organizations must acquire **explicit consent** from the individual before processing or sharing their sensitive personal data (like health information)."
    },
    {
      "id": "q508",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "WebFlix, a popular online movie streaming service, experienced a data center outage due to a natural disaster. They had backups in place and restored their systems using data from 6 hours prior to the outage. This resulted in the loss of some user interactions, like ratings and watchlists from the last 6 hours. What term describes the 6-hour gap between the last backup and the time of the outage?",
      "options": [
        {
          "id": "A",
          "text": "Recovery Time Objective (RTO)"
        },
        {
          "id": "B",
          "text": "Maximum Tolerable Downtime (MTD)"
        },
        {
          "id": "C",
          "text": "Recovery Duration Period (RDP)"
        },
        {
          "id": "D",
          "text": "Recovery Point Objective (RPO)"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The **Recovery Point Objective (RPO)** is the maximum acceptable amount of data loss, measured in time. The 6-hour gap represents the data lost (from the outage back to the last good backup) and is therefore the RPO."
    },
    {
      "id": "q509",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "As a security consultant, you are hired by a multinational corporation to assess the security posture of their potential vendors. One of the vendors appears promising, but your client wants to ensure that the vendor periodically examines and strengthens its own internal procedures and security controls. What should you advise your client to request from this vendor?",
      "options": [
        {
          "id": "A",
          "text": "The vendor's business continuity plan"
        },
        {
          "id": "B",
          "text": "A list of the vendor's clients"
        },
        {
          "id": "C",
          "text": "Evidence of internal audits"
        },
        {
          "id": "D",
          "text": "The vendor's company mission statement"
        }
      ],
      "correctOptionId": "C",
      "explanation": "To confirm that the vendor is continually examining and strengthening its procedures, the client should request **evidence of internal audits** (and third-party audit reports). These reports directly validate that the vendor's controls and policies are being checked for effectiveness on a regular basis."
    },
    {
      "id": "q510",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "GlobalFin, a fintech company, has developed a new mobile banking application. To avoid any legal complications, which of the following legal external considerations should GlobalFin pay the most attention to before launching the application worldwide?",
      "options": [
        {
          "id": "A",
          "text": "Ensuring the app meets global data privacy laws"
        },
        {
          "id": "B",
          "text": "Confirming the color scheme aligns with branding regulations in all countries"
        },
        {
          "id": "C",
          "text": "Securing copyrights for all images used in the app"
        },
        {
          "id": "D",
          "text": "Making sure the app's name isn't offensive in any language"
        }
      ],
      "correctOptionId": "A",
      "explanation": "For a mobile banking application operating worldwide, ensuring compliance with **global data privacy laws** (such as GDPR, CCPA, etc.) is the most critical legal external consideration, given the sensitive nature of financial and personal user data being handled."
    },
    {
      "id": "q511",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "MedTech, a medical device manufacturer, did not adhere to the required standards for device security and patient data protection. Which of the following repercussions might be the MOST critical for MedTech’s ongoing operations?",
      "options": [
        {
          "id": "A",
          "text": "Increased public relations campaigns"
        },
        {
          "id": "B",
          "text": "Short-term stock price fluctuations"
        },
        {
          "id": "C",
          "text": "Offering discounts on their devices"
        },
        {
          "id": "D",
          "text": "Loss of license to manufacture and distribute"
        }
      ],
      "correctOptionId": "D",
      "explanation": "For a medical device manufacturer, the **loss of a license** (or regulatory approval) is the most critical repercussion, as it immediately prevents them from legally manufacturing, distributing, or selling their devices, halting their ongoing operations entirely."
    },
    {
      "id": "q512",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Your organization has been repeatedly ignoring the security guidelines set forth by a global standards organization, despite having pledged adherence. Given the repetitive nature of these violations, the organization is now facing disciplinary measures. Which of the following is the MOST likely immediate consequence of these actions?",
      "options": [
        {
          "id": "A",
          "text": "Immediate revocation of business licenses"
        },
        {
          "id": "B",
          "text": "Sanctions imposed by the global standards organization"
        },
        {
          "id": "C",
          "text": "Forcible shutdown of all online operations for a determined period"
        },
        {
          "id": "D",
          "text": "Mandatory public apology to stakeholders"
        }
      ],
      "correctOptionId": "B",
      "explanation": "A **global standards organization** (as opposed to a governmental regulator) would typically respond to a violation of their guidelines or certifications by imposing **sanctions**, which may include revocation of certification, public warnings, or loss of membership privileges."
    },
    {
      "id": "q513",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "HealthCareNow, a large hospital chain, wants to ensure its newly implemented electronic health record (EHR) system adheres to national standards. Which type of audit would be most appropriate to confirm that HealthCareNow is in compliance with national regulations regarding patient data?",
      "options": [
        {
          "id": "A",
          "text": "Self-assessment using internal standards"
        },
        {
          "id": "B",
          "text": "Third-party risk assessment"
        },
        {
          "id": "C",
          "text": "External regulatory audit"
        },
        {
          "id": "D",
          "text": "Informal peer review"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An **External Regulatory Audit** is a formal, independent assessment conducted by an external entity (often a government body or appointed firm) to confirm that the organization's system and practices adhere to **national standards and regulations** (like HIPAA/HITECH in the US)."
    },
    {
      "id": "q514",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "In preparation for an upcoming audit, AlphaTech Corporation hires a team to evaluate their security measures. The team is spotted attempting to bypass security barriers, unlock doors without keys, and trying to access restricted floors by pretending to be maintenance staff. What type of testing is AlphaTech Corporation undergoing?",
      "options": [
        {
          "id": "A",
          "text": "Network vulnerability scanning"
        },
        {
          "id": "B",
          "text": "Physical penetration testing"
        },
        {
          "id": "C",
          "text": "OS fingerprinting"
        },
        {
          "id": "D",
          "text": "Source code review"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**Physical penetration testing** involves actively testing and attempting to breach the organization's physical security controls (locks, barriers, identity verification, access control systems) to assess their effectiveness. Pretending to be staff (social engineering) is a common tactic in this type of testing."
    },
    {
      "id": "q515",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Emily, a cybersecurity analyst, has been tasked with gathering preliminary information about a target organization without directly interacting with its systems. She decides to collect data from third-party sources, search engines, public records, and other online platforms without sending any packets to the target. Which phase of penetration testing is Emily currently engaged in?",
      "options": [
        {
          "id": "A",
          "text": "Active reconnaissance"
        },
        {
          "id": "B",
          "text": "Passive reconnaissance"
        },
        {
          "id": "C",
          "text": "Vulnerability scanning"
        },
        {
          "id": "D",
          "text": "Threat hunting"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**Passive reconnaissance** is the initial phase of information gathering where the tester avoids direct interaction with the target's systems (no sent packets). Instead, they gather data from publicly available sources (search engines, public records, social media, etc.)."
    },
    {
      "id": "q516",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "As part of an initial penetration testing phase, Jackson is using tools that directly probe and interact with the target system’s network to discover open ports, services, and other potential access points. While this approach is more direct and could be detected by the target’s security systems, it provides detailed and actionable insights. Which type of reconnaissance is Jackson performing?",
      "options": [
        {
          "id": "A",
          "text": "Threat analysis"
        },
        {
          "id": "B",
          "text": "Passive reconnaissance"
        },
        {
          "id": "C",
          "text": "Active reconnaissance"
        },
        {
          "id": "D",
          "text": "Social engineering"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Active reconnaissance** involves directly engaging and probing the target system's network (e.g., port scanning, ping sweeps) to gather detailed information. This interaction carries a risk of detection by the target's security tools."
    },
    {
      "id": "q517",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFirm, a leading technology conglomerate, recently conducted a security exercise. The goal was for the internal security team to defend against a series of simulated attacks from an external red team. While the red team launched attacks, the internal team’s objective was to detect, respond, and mitigate those threats. What type of penetration testing is TechFirm employing for its internal security team?",
      "options": [
        {
          "id": "A",
          "text": "Offensive penetration testing"
        },
        {
          "id": "B",
          "text": "Passive penetration testing"
        },
        {
          "id": "C",
          "text": "Defensive penetration testing"
        },
        {
          "id": "D",
          "text": "Black box testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Defensive penetration testing** (often associated with blue team activities) focuses on evaluating the effectiveness of the organization's defensive and response capabilities (detection, response, mitigation) against simulated attacks from an offensive team (red team)."
    },
    {
      "id": "q518",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Emily, an executive assistant, receives a phone call from an individual claiming to be a new employee in the IT department. The caller says they’re conducting a routine check and needs Emily to confirm her username and password for system verification. How should Emily respond?",
      "options": [
        {
          "id": "A",
          "text": "Politely decline and report the call to the IT department"
        },
        {
          "id": "B",
          "text": "Provide the caller with the username but not the password"
        },
        {
          "id": "C",
          "text": "Ask the caller to email the request, so there's a written record"
        },
        {
          "id": "D",
          "text": "Hang up without saying anything"
        }
      ],
      "correctOptionId": "A",
      "explanation": "This is a **vishing** (voice phishing) attack. The best practice is to **never provide sensitive information** in an unsolicited call, politely decline the request, and **report the incident** to the internal IT or security department so they can investigate and warn others."
    },
    {
      "id": "q519",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corp, a manufacturer of smart home devices, failed to implement standard security practices in their products. A popular tech review site publishes an in-depth review detailing these vulnerabilities. Which of the following outcomes is XYZ Corp MOST likely to face as an immediate result?",
      "options": [
        {
          "id": "A",
          "text": "An award for innovation in smart home technologies"
        },
        {
          "id": "B",
          "text": "Reputational damage leading to decreased sales"
        },
        {
          "id": "C",
          "text": "An increased partnership with tech retailers"
        },
        {
          "id": "D",
          "text": "A surge in the employee recruitment rate"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Publicized failures in security practices, especially in consumer devices, destroy customer trust. The most likely immediate outcome is **reputational damage** which directly leads to **decreased sales**."
    },
    {
      "id": "q520",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SoftTech Inc., a software company, is considering expanding its operations to Europe. They will be collecting and processing personal data of EU citizens. Which of the following legal implications is MOST critical for SoftTech Inc. to consider?",
      "options": [
        {
          "id": "A",
          "text": "The need to register with each country's software association"
        },
        {
          "id": "B",
          "text": "Compliance with the General Data Protection Regulation (GDPR)"
        },
        {
          "id": "C",
          "text": "Ensuring software patent rights in each European country"
        },
        {
          "id": "D",
          "text": "The European standard for software coding"
        }
      ],
      "correctOptionId": "B",
      "explanation": "When collecting and processing the **personal data of EU citizens**, compliance with the **General Data Protection Regulation (GDPR)** is the single most critical legal requirement, as non-compliance can result in severe financial penalties."
    },
    {
      "id": "q521",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "DataGuard Corp. operates in the European Union and has recently suffered a major data breach affecting the personal data of thousands of users. They failed to comply with some key provisions of the General Data Protection Regulation (GDPR). Which of the following is the MOST likely immediate consequence of their non-compliance?",
      "options": [
        {
          "id": "A",
          "text": "They will be forced to shut down operations until compliance is achieved"
        },
        {
          "id": "B",
          "text": "DataGuard's executive team will face immediate imprisonment"
        },
        {
          "id": "C",
          "text": "The company will be required to issue a public apology"
        },
        {
          "id": "D",
          "text": "DataGuard Corp. will face substantial fines for their non-compliance"
        }
      ],
      "correctOptionId": "D",
      "explanation": "The most significant and highly publicized consequence of non-compliance with the GDPR following a data breach is the imposition of **substantial financial fines**, which can reach up to 4% of the company's annual global turnover or €20 million, whichever is higher."
    },
    {
      "id": "q522",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SafeNet, a financial institution, decided to undertake a comprehensive security assessment. They brought together their internal security team and an external group of ethical hackers. Their objective was for these teams to collaboratively assess vulnerabilities, perform real-time attack simulations, and evaluate defense mechanisms. What form of penetration testing is SafeNet utilizing?",
      "options": [
        {
          "id": "A",
          "text": "Black box testing"
        },
        {
          "id": "B",
          "text": "Integrated penetration testing"
        },
        {
          "id": "C",
          "text": "Defensive penetration testing"
        },
        {
          "id": "D",
          "text": "Red team assessment"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**Integrated penetration testing** (or Purple Teaming) involves the joint effort and collaboration of an offensive team (ethical hackers) and a defensive team (internal security team) to perform real-time attack simulations and evaluate defensive capabilities in a coordinated manner."
    },
    {
      "id": "q523",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "AlphaTech, a leading tech manufacturer, is considering a penetration test to identify vulnerabilities in their new product’s firmware. They provide the testers with firmware source code, architecture diagrams, and other internal details to ensure a thorough evaluation. What kind of penetration test is AlphaTech commissioning?",
      "options": [
        {
          "id": "A",
          "text": "Zero-knowledge testing"
        },
        {
          "id": "B",
          "text": "Open box testing"
        },
        {
          "id": "C",
          "text": "Opaque testing"
        },
        {
          "id": "D",
          "text": "Blind testing"
        }
      ],
      "correctOptionId": "B",
      "explanation": "**Open box testing** (also known as white box testing) is a method where testers are given full and complete knowledge of the target system's internals, including source code and documentation, to allow for the most thorough evaluation possible."
    },
    {
      "id": "q524",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "John, a citizen of a country that strictly follows the General Data Protection Regulation (GDPR), used a global online shopping platform for a year. He decided to stop using the platform and requested the deletion of all his personal data. What is the online platform’s primary obligation concerning John’s request under the “Right to be Forgotten” principle?",
      "options": [
        {
          "id": "A",
          "text": "Retain the data but ensure that John's data is never used for marketing purposes"
        },
        {
          "id": "B",
          "text": "Delete all personal data about John unless there's a legal reason to keep it"
        },
        {
          "id": "C",
          "text": "Anonymize John's data and notify him of the completion"
        },
        {
          "id": "D",
          "text": "Move John's data to a secure, encrypted server where it won't be accessed"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The 'Right to be Forgotten' (or Right to Erasure) under GDPR mandates the controller to **delete all personal data** without undue delay when a request is received, unless there are overriding legal obligations (e.g., financial retention laws) that require the data to be kept."
    },
    {
      "id": "q525",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "WebMasters LLC, a popular web hosting company, wants to ensure the robust security of their hosted websites. They initiate a security challenge, inviting ethical hackers worldwide to find vulnerabilities without giving any details about their servers, databases, or applications. Which penetration testing method is WebMasters LLC utilizing?",
      "options": [
        {
          "id": "A",
          "text": "External testing"
        },
        {
          "id": "B",
          "text": "Grey box testing"
        },
        {
          "id": "C",
          "text": "Active testing"
        },
        {
          "id": "D",
          "text": "Black box testing"
        }
      ],
      "correctOptionId": "D",
      "explanation": "**Black box testing** (or zero-knowledge testing) is performed without providing the testers any prior knowledge of the internal details (architecture, source code, credentials) of the target system, simulating an outside attacker."
    },
    {
      "id": "q526",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "After a series of high-profile data breaches in the industry, OnlineRetail Corp., an e-commerce platform, wishes to undergo an external review to validate the security of its operations and provide a comprehensive report to its shareholders. Which type of assessment will provide a detailed and formalized examination of their security posture?",
      "options": [
        {
          "id": "A",
          "text": "External examination of IT controls and operations"
        },
        {
          "id": "B",
          "text": "Internal review of security protocols"
        },
        {
          "id": "C",
          "text": "External regulatory audit on financial statements"
        },
        {
          "id": "D",
          "text": "Informal feedback from industry peers"
        }
      ],
      "correctOptionId": "A",
      "explanation": "An **External Examination of IT Controls and Operations** (often referred to as a third-party security audit or certification audit) is a detailed and formalized assessment performed by an independent external party to validate the organization's security posture and controls, the results of which are comprehensive and suitable for shareholders."
    },
    {
      "id": "q527",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "WebFirm, a web development company, did not comply with the data handling and protection clauses outlined in their contract with RetailMax, an e-commerce company. As a result, RetailMax’s customer data was exposed in a data breach. Which of the following is the MOST probable contractual impact on WebFirm due to this incident?",
      "options": [
        {
          "id": "A",
          "text": "WebFirm will receive bonuses for early project completion"
        },
        {
          "id": "B",
          "text": "WebFirm will be required to provide additional services at no cost"
        },
        {
          "id": "C",
          "text": "RetailMax will terminate the contract and may seek damages"
        },
        {
          "id": "D",
          "text": "RetailMax will extend the project timeline"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A data breach resulting from the vendor's (WebFirm) non-compliance with contractual obligations (data handling/protection clauses) is a serious breach of contract. The most severe and probable contractual consequence is the termination of the agreement and the client's (RetailMax) pursuit of **legal damages**."
    },
    {
      "id": "q528",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SafeNet Banking Corporation is keen on gaining a competitive edge in the market by demonstrating its commitment to cybersecurity. They want an official attestation that their cybersecurity measures are robust and compliant with industry standards. What should SafeNet opt for to obtain this attestation?",
      "options": [
        {
          "id": "A",
          "text": "Feedback from customers on the bank's app security"
        },
        {
          "id": "B",
          "text": "Internal IT team's report on cybersecurity practices"
        },
        {
          "id": "C",
          "text": "External independent third-party audit"
        },
        {
          "id": "D",
          "text": "Informal evaluation by a cybersecurity consultancy"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An **External Independent Third-Party Audit** (e.g., SOC 2, ISO 27001) results in a formal, official attestation (a certification or report) that verifies the organization's compliance and robustness of controls, which is necessary to demonstrate commitment to external stakeholders and gain a competitive edge."
    },
    {
      "id": "q529",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Corp., a multinational company, recently underwent a security audit. The Chief Information Security Officer (CISO) needs to report the findings of the audit to the company’s internal stakeholders as well as to a governmental regulatory agency. Which of the following represents the correct type of compliance reporting for each recipient?",
      "options": [
        {
          "id": "A",
          "text": "Internal report for the regulatory agency and external report for internal stakeholders"
        },
        {
          "id": "B",
          "text": "External report for both the regulatory agency and internal stakeholders"
        },
        {
          "id": "C",
          "text": "Internal report for internal stakeholders and external report for the regulatory agency"
        },
        {
          "id": "D",
          "text": "No report is required for internal stakeholders, only an external report for the regulatory agency"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Internal** compliance reports contain detailed, sensitive information suitable for internal decision-making (internal stakeholders). **External** compliance reports are formal, summarized versions intended for external parties (governmental regulatory agency) that need assurance of compliance but not proprietary technical details."
    },
    {
      "id": "q530",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "SoftTech Solutions is a software development company that has decided to conduct a penetration test on their new web application. The testers are provided with user credentials, network topology diagrams, and some proprietary software code snippets. Which type of penetration testing is SoftTech Solutions employing?",
      "options": [
        {
          "id": "A",
          "text": "Black box testing"
        },
        {
          "id": "B",
          "text": "Double-blind testing"
        },
        {
          "id": "C",
          "text": "Known environment testing"
        },
        {
          "id": "D",
          "text": "Zero-knowledge testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Known Environment Testing** (also called crystal box or white box testing) involves providing the testers with full knowledge of the target system's environment, such as credentials, diagrams, and source code. This allows for a deep, comprehensive assessment."
    },
    {
      "id": "q531",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A medium-sized organization recently had a third-party auditor review their information security controls. After the review, the auditor provided a formal statement that verified the effectiveness of the controls in place. What is this formal statement referred to as?",
      "options": [
        {
          "id": "A",
          "text": "Certification"
        },
        {
          "id": "B",
          "text": "Accreditation"
        },
        {
          "id": "C",
          "text": "Attestation"
        },
        {
          "id": "D",
          "text": "Assurance"
        }
      ],
      "correctOptionId": "C",
      "explanation": "An **attestation** is a formal statement or declaration by an independent, authorized party (the auditor) that confirms or certifies the truthfulness and accuracy of specific facts, such as the effectiveness of security controls."
    },
    {
      "id": "q532",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "CyberLock Inc. is assessing the security postures of its third-party vendors to determine potential risks. The cybersecurity team wants to gather foundational security information from each vendor to evaluate their security maturity and practices. What would be the most cost-effective and efficient way to collect this data from a large number of vendors?",
      "options": [
        {
          "id": "A",
          "text": "Conduct a penetration test for each vendor"
        },
        {
          "id": "B",
          "text": "Send out security questionnaires to each vendor"
        },
        {
          "id": "C",
          "text": "Visit each vendor's site for an in-person assessment"
        },
        {
          "id": "D",
          "text": "Review the annual financial reports of each vendor"
        }
      ],
      "correctOptionId": "B",
      "explanation": "Sending out **security questionnaires** (often standardized formats like SIG) is the most **cost-effective and efficient** method for gathering foundational, qualitative data on the security practices and maturity of a large number of third-party vendors."
    },
    {
      "id": "q533",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechGuard Inc. and CloudSecure are two cybersecurity firms that are considering a collaboration on a new cloud security project. Both companies have proprietary technologies and methodologies they will bring into the partnership. Before embarking on the collaborative venture, which agreement should they finalize to define the terms of their partnership, roles, and shared responsibilities?",
      "options": [
        {
          "id": "A",
          "text": "Non-disclosure agreement (NDA)"
        },
        {
          "id": "B",
          "text": "Service-level agreement (SLA)"
        },
        {
          "id": "C",
          "text": "Business partners agreement (BPA)"
        },
        {
          "id": "D",
          "text": "Memorandum of understanding (MOU)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "A **Business Partners Agreement (BPA)** is the formal document that defines the specific legal, financial, and operational terms (including roles and responsibilities) of a joint collaborative venture or partnership between two organizations."
    },
    {
      "id": "q534",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "XYZ Ltd. wants to evaluate if their current security measures are consistent with industry-specific regulations they are required to follow. The evaluation should be done by their own IT department before inviting external auditors. Which approach should XYZ Ltd. adopt?",
      "options": [
        {
          "id": "A",
          "text": "Third-party vulnerability scanning"
        },
        {
          "id": "B",
          "text": "Internal compliance assessment"
        },
        {
          "id": "C",
          "text": "External attestation"
        },
        {
          "id": "D",
          "text": "Vendor risk assessment"
        }
      ],
      "correctOptionId": "B",
      "explanation": "An **Internal compliance assessment** (or self-audit) is performed by the organization’s internal teams (IT department) to check systems and policies against the required industry regulations before external auditors are brought in."
    },
    {
      "id": "q535",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A cybersecurity firm has been hired by TechGiant Corp. to perform penetration testing on their infrastructure. Before the testing begins, the CEO of TechGiant Corp. wants to ensure that certain critical systems are not targeted, and that the testing will not disrupt their ongoing operations. What should be established to define the scope and boundaries of the test?",
      "options": [
        {
          "id": "A",
          "text": "Service-level agreement (SLA)"
        },
        {
          "id": "B",
          "text": "Non-disclosure agreement (NDA)"
        },
        {
          "id": "C",
          "text": "Rules of engagement (ROE)"
        },
        {
          "id": "D",
          "text": "Memorandum of understanding (MOU)"
        }
      ],
      "correctOptionId": "C",
      "explanation": "The **Rules of Engagement (ROE)** is the mandatory document that defines the explicit **scope and boundaries** of a penetration test, including allowed techniques, systems excluded from testing (critical systems), contact information, and procedures for dealing with service disruption."
    },
    {
      "id": "q536",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "As part of the annual security training, the IT department of XYZ Corp decides to launch a simulated phishing campaign. The aim is to assess employees’ ability to identify and report phishing emails. Which of the following would be the MOST effective first step in ensuring the success of this campaign?",
      "options": [
        {
          "id": "A",
          "text": "Informing all employees about the campaign a week prior"
        },
        {
          "id": "B",
          "text": "Creating a realistic phishing email that closely resembles common threats"
        },
        {
          "id": "C",
          "text": "Offering rewards to employees who click on the simulated phishing links"
        },
        {
          "id": "D",
          "text": "Reviewing the results of the previous year’s campaign"
        }
      ],
      "correctOptionId": "B",
      "explanation": "For the simulated phishing campaign to be successful (i.e., provide an accurate measure of employee vulnerability), it must be highly convincing. **Creating a realistic phishing email** that closely resembles actual common threats is the most important step to effectively test the employees' awareness."
    },
    {
      "id": "q537",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "A healthcare provider wants to evaluate the security of their patient portal. They inform the penetration testers about the technologies used, such as the programming languages and databases. However, specifics about the security measures in place, including intrusion detection systems, are kept secret. What kind of penetration test are they aiming for?",
      "options": [
        {
          "id": "A",
          "text": "White box testing"
        },
        {
          "id": "B",
          "text": "External testing"
        },
        {
          "id": "C",
          "text": "Grey box testing"
        },
        {
          "id": "D",
          "text": "Active testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Grey box testing** involves providing the tester with partial knowledge of the system (e.g., technologies used, standard user credentials) but intentionally holding back critical details (e.g., security controls, administrator access). This simulates an insider threat or an attacker who has performed some reconnaissance."
    },
    {
      "id": "q538",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "TechFirm Inc. collects personal data from its users and decides on the purposes and means of processing this data. They also outsource data storage to CloudData, a third-party company. In the context of data privacy regulations, how would TechFirm and CloudData be classified respectively?",
      "options": [
        {
          "id": "A",
          "text": "TechFirm: Processor; CloudData: Controller"
        },
        {
          "id": "B",
          "text": "TechFirm: Controller; CloudData: Processor"
        },
        {
          "id": "C",
          "text": "Both TechFirm and CloudData: Processors"
        },
        {
          "id": "D",
          "text": "Both TechFirm and CloudData: Controllers"
        }
      ],
      "correctOptionId": "B",
      "explanation": "The entity that **decides on the purposes and means** of processing data (**TechFirm**) is the **Controller**. The entity that **processes data on the Controller's behalf** (**CloudData**) is the **Processor**."
    },
    {
      "id": "q539",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "Sarah, a sales manager at TechWorld Inc., receives an email from her bank urging her to update her account details due to a recent security breach. The email provides a link to a website that looks almost identical to her bank’s official site. However, she notices a slight misspelling in the URL. What should Sarah do next?",
      "options": [
        {
          "id": "A",
          "text": "Forward the email to her colleagues as a warning"
        },
        {
          "id": "B",
          "text": "Click the link and update her details as the bank's site is probably just undergoing updates"
        },
        {
          "id": "C",
          "text": "Delete the email without taking any action"
        },
        {
          "id": "D",
          "text": "Report the email to her company's IT department and avoid clicking any links"
        }
      ],
      "correctOptionId": "D",
      "explanation": "Sarah correctly identified a phishing attempt (misspelled URL). The best course of action is to immediately **report the suspicious email** to the internal IT/security team so they can investigate and implement protective measures (like blocking the URL) for the entire organization, while ensuring she **avoids clicking any malicious links**."
    },
    {
      "id": "q540",
      "domain": "Security Program Management and Oversight",
      "type": QuestionType.MULTIPLE_CHOICE,
      "text": "WebSoft Inc., a leading software company, recently launched a new web application. Before making it live, they engaged a security firm to challenge the application, find vulnerabilities, and exploit them as real hackers would. This aggressive testing is done to ensure maximum security. What kind of penetration testing is WebSoft Inc. opting for?",
      "options": [
        {
          "id": "A",
          "text": "White box testing"
        },
        {
          "id": "B",
          "text": "Defensive penetration testing"
        },
        {
          "id": "C",
          "text": "Offensive penetration testing"
        },
        {
          "id": "D",
          "text": "Gray box testing"
        }
      ],
      "correctOptionId": "C",
      "explanation": "**Offensive penetration testing** is the practice of actively testing and **exploiting** vulnerabilities to demonstrate potential business impact, simulating the aggressive tactics of a real attacker. This is done to ensure maximum security by challenging the system's defenses."
    }
    ]