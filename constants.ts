
import { Question, QuestionType, SecurityDomain } from './types';

export const DOMAINS = [
  { id: SecurityDomain.GENERAL, name: "General Security Concepts", weight: 12 },
  { id: SecurityDomain.THREATS, name: "Threats, Vulnerabilities, & Mitigations", weight: 22 },
  { id: SecurityDomain.ARCHITECTURE, name: "Security Architecture", weight: 18 },
  { id: SecurityDomain.OPERATIONS, name: "Security Operations", weight: 28 },
  { id: SecurityDomain.MANAGEMENT, name: "Program Management & Oversight", weight: 20 },
];

export const INITIAL_QUESTIONS: Question[] = [
  // --- EXISTING BANK (1-200) ---
  {
    id: 'q1',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A security analyst observes unusual traffic patterns originating from an HR workstation. The traffic consists of repeated outbound connection attempts to a known malicious IP address on port 443. The workstation user reports no performance issues. Which of the following is the MOST likely indicator?",
    options: [
      { id: 'A', text: "IoC (Indicator of Compromise)" },
      { id: 'B', text: "IoA (Indicator of Attack)" },
      { id: 'C', text: "DDoS Amplification" },
      { id: 'D', text: "Beaconing" }
    ],
    correctOptionId: 'D',
    explanation: "Beaconing is a specific type of traffic where an infected host attempts to check in with a Command and Control (C2) server at regular intervals."
  },
  {
    id: 'q2',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An organization implements a rule requiring two people to authorize the transfer of funds over $10,000. Which security control concept does this demonstrate?",
    options: [
      { id: 'A', text: "Least Privilege" },
      { id: 'B', text: "Separation of Duties" },
      { id: 'C', text: "Two-Person Integrity" },
      { id: 'D', text: "Dual-factor Authentication" }
    ],
    correctOptionId: 'C',
    explanation: "Two-Person Integrity specifically requires two individuals to act simultaneously to complete a single sensitive task."
  },
  {
    id: 'q3',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A company contract stipulates that the vendor must guarantee 99.99% uptime. Which document contains this specific metric?",
    options: [
      { id: 'A', text: "NDA" },
      { id: 'B', text: "SLA" },
      { id: 'C', text: "MOU" },
      { id: 'D', text: "ISA" }
    ],
    correctOptionId: 'B',
    explanation: "An SLA (Service Level Agreement) defines the level of service expected by a customer from a supplier, laying out metrics like uptime."
  },
  {
    id: 'q4',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which of the following physical security controls allows an authorized guard to visually inspect a driver before allowing them into a secure facility?",
    options: [
      { id: 'A', text: "Bollards" },
      { id: 'B', text: "Mantrap" },
      { id: 'C', text: "Access Control Vestibule" },
      { id: 'D', text: "Faraday Cage" }
    ],
    correctOptionId: 'C',
    explanation: "An access control vestibule controls entry and prevents tailgating. This is commonly referred to as a 'mantrap' in exam materials."
  },
  {
    id: 'q5',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Cryptographic non-repudiation is typically achieved using:",
    options: [
      { id: 'A', text: "Symmetric Keys" },
      { id: 'B', text: "Digital Signatures" },
      { id: 'C', text: "Hashing" },
      { id: 'D', text: "Salting" }
    ],
    correctOptionId: 'B',
    explanation: "Digital Signatures provide non-repudiation because they require the sender's private key, proving the origin of the message."
  },
  {
    id: 'q6',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Hashing algorithms are used primarily to ensure:",
    options: [
      { id: 'A', text: "Confidentiality" },
      { id: 'B', text: "Integrity" },
      { id: 'C', text: "Availability" },
      { id: 'D', text: "Accountability" }
    ],
    correctOptionId: 'B',
    explanation: "Hashing ensures Integrity by verifying that data has not been altered."
  },
  {
    id: 'q7',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The concept that information should only be accessible to those authorized to view it is:",
    options: [
      { id: 'A', text: "Confidentiality" },
      { id: 'B', text: "Integrity" },
      { id: 'C', text: "Availability" },
      { id: 'D', text: "Non-repudiation" }
    ],
    correctOptionId: 'A',
    explanation: "Confidentiality is the 'C' in the CIA triad, ensuring secrecy."
  },
  {
    id: 'q8',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Visible physical security controls like perimeter fences and motion-activated lighting are primarily considered:",
    options: [
      { id: 'A', text: "Administrative Controls" },
      { id: 'B', text: "Technical Controls" },
      { id: 'C', text: "Deterrent Controls" },
      { id: 'D', text: "Compensating Controls" }
    ],
    correctOptionId: 'C',
    explanation: "While they physically exist, their primary function in this context is to discourage intrusion (Deterrent)."
  },
  {
    id: 'q9',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Data that identifies a specific individual (e.g., SSN, Name) is classified as:",
    options: [
      { id: 'A', text: "IP (Intellectual Property)" },
      { id: 'B', text: "PII (Personally Identifiable Information)" },
      { id: 'C', text: "PHI (Protected Health Information)" },
      { id: 'D', text: "PCI" }
    ],
    correctOptionId: 'B',
    explanation: "PII identifies a person. PHI is health data. PCI is credit card data."
  },
  {
    id: 'q10',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which security control type attempts to fix a vulnerability after an event has occurred?",
    options: [
      { id: 'A', text: "Preventive" },
      { id: 'B', text: "Corrective" },
      { id: 'C', text: "Detective" },
      { id: 'D', text: "Deterrent" }
    ],
    correctOptionId: 'B',
    explanation: "Corrective controls (like restoring from backup) are designed to restore systems after an incident."
  },
  {
    id: 'q11',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A gap analysis reveals that a legacy system cannot support encryption. The team implements strict ACLs and network segmentation around it instead. This is a:",
    options: [
      { id: 'A', text: "Preventive Control" },
      { id: 'B', text: "Compensating Control" },
      { id: 'C', text: "Directive Control" },
      { id: 'D', text: "Physical Control" }
    ],
    correctOptionId: 'B',
    explanation: "Compensating controls are alternative measures implemented when the primary control is not feasible."
  },
  {
    id: 'q12',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which key management principle ensures that if a private key is compromised, past sessions encrypted with that key remain secure?",
    options: [
      { id: 'A', text: "Key Escrow" },
      { id: 'B', text: "Perfect Forward Secrecy (PFS)" },
      { id: 'C', text: "Certificate Pinning" },
      { id: 'D', text: "Key Stretching" }
    ],
    correctOptionId: 'B',
    explanation: "PFS ensures that session keys are not derived from the server's long-term private key."
  },
  {
    id: 'q13',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An organization has recently migrated to a hybrid cloud environment. A developer accidentally commits an API key to a public repository. Within minutes, a cryptocurrency miner is deployed on the organization's cloud instances. This is an example of:",
    options: [
      { id: 'A', text: "Insecure Direct Object Reference (IDOR)" },
      { id: 'B', text: "Misconfiguration" },
      { id: 'C', text: "Broken Access Control" },
      { id: 'D', text: "Supply Chain Attack" }
    ],
    correctOptionId: 'B',
    explanation: "This is a classic Cloud Misconfiguration (improper secrets management)."
  },
  {
    id: 'q14',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Users are reporting that they received an SMS message appearing to be from the CEO asking them to purchase gift cards immediately for a client event. The number is unknown. Which attack vector is being utilized?",
    options: [
      { id: 'A', text: "Vishing" },
      { id: 'B', text: "Pharming" },
      { id: 'C', text: "Smishing" },
      { id: 'D', text: "Whaling" }
    ],
    correctOptionId: 'C',
    explanation: "Smishing (SMS Phishing) involves the use of text messages to deceive users."
  },
  {
    id: 'q15',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker monitors the power consumption and electromagnetic emissions of a cryptographic hardware module to derive the private key. This is known as a:",
    options: [
      { id: 'A', text: "Brute Force Attack" },
      { id: 'B', text: "Side-Channel Attack" },
      { id: 'C', text: "Downgrade Attack" },
      { id: 'D', text: "Birthday Attack" }
    ],
    correctOptionId: 'B',
    explanation: "Side-channel attacks exploit physical implementation details (power, radiation) rather than algorithmic weaknesses."
  },
  {
    id: 'q16',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A finance employee receives an email appearing to be from the CEO requesting an immediate wire transfer to a 'new vendor' to secure a contract. The email uses a spoofed domain. This is an example of:",
    options: [
      { id: 'A', text: "Business Email Compromise (BEC)" },
      { id: 'B', text: "Typosquatting" },
      { id: 'C', text: "Pretexting" },
      { id: 'D', text: "Domain Hijacking" }
    ],
    correctOptionId: 'A',
    explanation: "BEC (Business Email Compromise) specifically targets employees with authority to transfer funds, aiming for financial fraud."
  },
  {
    id: 'q17',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A malicious actor discovers a vulnerability in a popular web browser that has no available patch. They immediately launch an exploit kit targeting this vulnerability. This is a:",
    options: [
      { id: 'A', text: "Zero-Day Exploit" },
      { id: 'B', text: "Logic Bomb" },
      { id: 'C', text: "Rootkit" },
      { id: 'D', text: "Dictionary Attack" }
    ],
    correctOptionId: 'A',
    explanation: "A Zero-Day exploit targets a vulnerability that is unknown to the vendor or has no patch."
  },
  {
    id: 'q18',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which of the following attacks relies on the attacker injecting a malicious script into a trusted website which is then executed by the victim's browser?",
    options: [
      { id: 'A', text: "SQL Injection" },
      { id: 'B', text: "Cross-Site Scripting (XSS)" },
      { id: 'C', text: "CSRF" },
      { id: 'D', text: "Buffer Overflow" }
    ],
    correctOptionId: 'B',
    explanation: "XSS (Cross-Site Scripting) involves injecting client-side scripts into web pages."
  },
  {
    id: 'q19',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker sends an email with a malicious attachment to the HR department, specifically crafting the email to look like a resume for an open position. This is:",
    options: [
      { id: 'A', text: "Spear Phishing" },
      { id: 'B', text: "Vishing" },
      { id: 'C', text: "Dumpster Diving" },
      { id: 'D', text: "Watering Hole Attack" }
    ],
    correctOptionId: 'A',
    explanation: "Spear Phishing is a targeted phishing attack aimed at a specific group or individual."
  },
  {
    id: 'q20',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A user attempts to access a file and receives an 'Access Denied' error. The administrator checks the DACL and sees the user is not listed. This is an example of:",
    options: [
      { id: 'A', text: "Implicit Deny" },
      { id: 'B', text: "Explicit Deny" },
      { id: 'C', text: "Rule-based Access Control" },
      { id: 'D', text: "Time-of-day Restriction" }
    ],
    correctOptionId: 'A',
    explanation: "Implicit Deny ensures that if a user is not explicitly granted access, they are denied by default."
  },
  {
    id: 'q21',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker intercepts a session token cookie over an unencrypted Wi-Fi network and uses it to access the user's bank account. This is:",
    options: [
      { id: 'A', text: "Session Hijacking" },
      { id: 'B', text: "Bluejacking" },
      { id: 'C', text: "Evil Twin" },
      { id: 'D', text: "Replay Attack" }
    ],
    correctOptionId: 'A',
    explanation: "Session Hijacking involves stealing a valid session ID to impersonate the user."
  },
  {
    id: 'q22',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker uses a program to try every possible combination of characters to guess a password. This is a:",
    options: [
      { id: 'A', text: "Dictionary Attack" },
      { id: 'B', text: "Brute Force Attack" },
      { id: 'C', text: "Rainbow Table Attack" },
      { id: 'D', text: "Spray Attack" }
    ],
    correctOptionId: 'B',
    explanation: "Brute Force attempts every combination."
  },
  {
    id: 'q23',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Malware that encrypts a user's files and demands payment for the decryption key is classified as:",
    options: [
      { id: 'A', text: "Spyware" },
      { id: 'B', text: "Ransomware" },
      { id: 'C', text: "Adware" },
      { id: 'D', text: "Worm" }
    ],
    correctOptionId: 'B',
    explanation: "Ransomware is defined by the extortion of payment in exchange for data."
  },
  {
    id: 'q24',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attack that downgrades the version of TLS used in a connection to a vulnerable version is called:",
    options: [
      { id: 'A', text: "POODLE" },
      { id: 'B', text: "Heartbleed" },
      { id: 'C', text: "Downgrade Attack" },
      { id: 'D', text: "Man-in-the-Middle" }
    ],
    correctOptionId: 'C',
    explanation: "A Downgrade Attack forces a system to abandon a high-quality mode for a lower one."
  },
  {
    id: 'q25',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Sending unsolicited messages via Bluetooth to nearby devices is known as:",
    options: [
      { id: 'A', text: "Bluesnarfing" },
      { id: 'B', text: "Bluejacking" },
      { id: 'C', text: "War Driving" },
      { id: 'D', text: "NFC Replay" }
    ],
    correctOptionId: 'B',
    explanation: "Bluejacking is sending messages. Bluesnarfing is stealing data."
  },
  {
    id: 'q26',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A supply chain attack where hardware is intercepted and modified before delivery is:",
    options: [
      { id: 'A', text: "Interdiction" },
      { id: 'B', text: "Trojaning" },
      { id: 'C', text: "Backdooring" },
      { id: 'D', text: "Fuzzing" }
    ],
    correctOptionId: 'A',
    explanation: "Interdiction involves physically intercepting shipments to tamper with them."
  },
  {
    id: 'q27',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An employee receives a phone call from someone claiming to be 'Help Desk' asking for their password to fix an account lockout. This is:",
    options: [
      { id: 'A', text: "Vishing" },
      { id: 'B', text: "Phishing" },
      { id: 'C', text: "Tailgating" },
      { id: 'D', text: "Shoulder Surfing" }
    ],
    correctOptionId: 'A',
    explanation: "Vishing is 'Voice Phishing', conducted over the phone."
  },
  {
    id: 'q28',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack type involves flooding a target network with traffic from a botnet to render it unavailable?",
    options: [
      { id: 'A', text: "DoS" },
      { id: 'B', text: "DDoS" },
      { id: 'C', text: "MAC Flooding" },
      { id: 'D', text: "ARP Poisoning" }
    ],
    correctOptionId: 'B',
    explanation: "DDoS (Distributed Denial of Service) uses multiple compromised systems (botnet)."
  },
  {
    id: 'q29',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A CISO wants to implement a security model that assumes no user or device is trusted by default, regardless of their location within or outside the corporate network. Which model should be adopted?",
    options: [
      { id: 'A', text: "Defense in Depth" },
      { id: 'B', text: "Zero Trust Architecture (ZTA)" },
      { id: 'C', text: "Network Access Control (NAC)" },
      { id: 'D', text: "VPN Concentrator" }
    ],
    correctOptionId: 'B',
    explanation: "Zero Trust Architecture (ZTA) is built on the principle of 'never trust, always verify'."
  },
  {
    id: 'q30',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which of the following components is responsible for generating and storing cryptographic keys securely in a hardware appliance to offload cryptographic processing?",
    options: [
      { id: 'A', text: "TPM (Trusted Platform Module)" },
      { id: 'B', text: "HSM (Hardware Security Module)" },
      { id: 'C', text: "SED (Self-Encrypting Drive)" },
      { id: 'D', text: "UEFI" }
    ],
    correctOptionId: 'B',
    explanation: "An HSM is a dedicated physical computing device that safeguards digital keys."
  },
  {
    id: 'q31',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An enterprise wants to enforce security policies on cloud-based services (SaaS) to ensure data protection and compliance. They need visibility into shadow IT. Which solution is BEST suited?",
    options: [
      { id: 'A', text: "CASB (Cloud Access Security Broker)" },
      { id: 'B', text: "SWG (Secure Web Gateway)" },
      { id: 'C', text: "NGFW (Next-Generation Firewall)" },
      { id: 'D', text: "WAF (Web Application Firewall)" }
    ],
    correctOptionId: 'A',
    explanation: "A CASB sits between cloud service users and cloud applications to enforce policies."
  },
  {
    id: 'q32',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An administrator wants to securely manage mobile devices, enforcing encryption, screen locks, and remote wipe. Which technology is required?",
    options: [
      { id: 'A', text: "MAM" },
      { id: 'B', text: "MDM" },
      { id: 'C', text: "UEM" },
      { id: 'D', text: "VDI" }
    ],
    correctOptionId: 'B',
    explanation: "MDM (Mobile Device Management) provides full device-level control."
  },
  {
    id: 'q33',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "To prevent data exfiltration, an organization disables USB ports and restricts cloud storage access on all endpoints. Which solution category does this fall under?",
    options: [
      { id: 'A', text: "DLP (Data Loss Prevention)" },
      { id: 'B', text: "EDR (Endpoint Detection and Response)" },
      { id: 'C', text: "IDS (Intrusion Detection System)" },
      { id: 'D', text: "HIPS (Host-based IPS)" }
    ],
    correctOptionId: 'A',
    explanation: "DLP focuses specifically on preventing sensitive data from leaving the organization."
  },
  {
    id: 'q34',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A developer is using a containerization strategy. They need to ensure that containers are immutable and that any changes require deploying a new image. This practice supports:",
    options: [
      { id: 'A', text: "Persistence" },
      { id: 'B', text: "Infrastructure as Code (IaC)" },
      { id: 'C', text: "Vendor Lock-in" },
      { id: 'D', text: "Data Sovereignty" }
    ],
    correctOptionId: 'B',
    explanation: "IaC concepts include immutability, where infrastructure is replaced rather than patched."
  },
  {
    id: 'q35',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which authentication factor relies on 'Something you are'?",
    options: [
      { id: 'A', text: "Smart Card" },
      { id: 'B', text: "Password" },
      { id: 'C', text: "Biometrics" },
      { id: 'D', text: "GPS Location" }
    ],
    correctOptionId: 'C',
    explanation: "Biometrics (fingerprint, iris scan) falls under 'Something you are'."
  },
  {
    id: 'q36',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which VPN protocol is commonly used to provide secure remote access via a standard web browser without requiring a specialized client?",
    options: [
      { id: 'A', text: "IPSec" },
      { id: 'B', text: "L2TP" },
      { id: 'C', text: "SSL/TLS" },
      { id: 'D', text: "PPTP" }
    ],
    correctOptionId: 'C',
    explanation: "SSL/TLS VPNs allow access via a browser."
  },
  {
    id: 'q37',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of firewall examines the context and state of active connections to make filtering decisions?",
    options: [
      { id: 'A', text: "Packet Filtering" },
      { id: 'B', text: "Stateful Inspection" },
      { id: 'C', text: "Circuit-level Gateway" },
      { id: 'D', text: "Stateless" }
    ],
    correctOptionId: 'B',
    explanation: "Stateful Inspection firewalls track the state of active connections."
  },
  {
    id: 'q38',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cloud model allows a customer to deploy and manage applications but not manage the underlying infrastructure (OS, Servers)?",
    options: [
      { id: 'A', text: "IaaS" },
      { id: 'B', text: "PaaS" },
      { id: 'C', text: "SaaS" },
      { id: 'D', text: "FaaS" }
    ],
    correctOptionId: 'B',
    explanation: "PaaS (Platform as a Service) provides the runtime environment."
  },
  {
    id: 'q39',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A network segmentation technique that logically separates traffic on the same physical switch is:",
    options: [
      { id: 'A', text: "Air Gap" },
      { id: 'B', text: "VLAN" },
      { id: 'C', text: "DMZ" },
      { id: 'D', text: "VPN" }
    ],
    correctOptionId: 'B',
    explanation: "VLANs segment traffic at Layer 2 on the same physical hardware."
  },
  {
    id: 'q40',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which RAID level provides disk mirroring for redundancy but no performance gain in writing?",
    options: [
      { id: 'A', text: "RAID 0" },
      { id: 'B', text: "RAID 1" },
      { id: 'C', text: "RAID 5" },
      { id: 'D', text: "RAID 10" }
    ],
    correctOptionId: 'B',
    explanation: "RAID 1 is simple mirroring."
  },
  {
    id: 'q41',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which wireless security standard replaced WEP and WPA, using AES encryption with CCMP?",
    options: [
      { id: 'A', text: "WPA2" },
      { id: 'B', text: "WPS" },
      { id: 'C', text: "WPA3" },
      { id: 'D', text: "EAP-TLS" }
    ],
    correctOptionId: 'A',
    explanation: "WPA2 introduced AES-CCMP as the standard."
  },
  {
    id: 'q42',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which technology aggregates logs from various security devices and provides correlation and alerting?",
    options: [
      { id: 'A', text: "SIEM" },
      { id: 'B', text: "SOAR" },
      { id: 'C', text: "XDR" },
      { id: 'D', text: "Syslog" }
    ],
    correctOptionId: 'A',
    explanation: "SIEM (Security Information and Event Management) aggregates and correlates logs."
  },
  {
    id: 'q43',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A network administrator wants to set up a trap to detect internal threats scanning the network. The system should simulate a vulnerable server. This is a:",
    options: [
      { id: 'A', text: "Honeytoken" },
      { id: 'B', text: "Honeypot" },
      { id: 'C', text: "Sandbox" },
      { id: 'D', text: "Jump Box" }
    ],
    correctOptionId: 'B',
    explanation: "A honeypot is a decoy system intended to lure attackers."
  },
  {
    id: 'q44',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which solution uses virtualization to create a separate, secure environment for running untrusted applications?",
    options: [
      { id: 'A', text: "Sandboxing" },
      { id: 'B', text: "Fuzzing" },
      { id: 'C', text: "Containerization" },
      { id: 'D', text: "Air Gapping" }
    ],
    correctOptionId: 'A',
    explanation: "Sandboxing isolates code execution to prevent it from affecting the host system."
  },
  {
    id: 'q45',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "During an incident response process, a security analyst has successfully isolated an infected server from the network to prevent lateral movement. What is the NEXT step in the incident response lifecycle?",
    options: [
      { id: 'A', text: "Preparation" },
      { id: 'B', text: "Eradication" },
      { id: 'C', text: "Recovery" },
      { id: 'D', text: "Lessons Learned" }
    ],
    correctOptionId: 'B',
    explanation: "After Containment (isolating), the next step is Eradication (removing the root cause)."
  },
  {
    id: 'q46',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A security team is reviewing logs and notices traffic on port 389 containing cleartext usernames. Which protocol should they migrate to?",
    options: [
      { id: 'A', text: "SFTP" },
      { id: 'B', text: "LDAPS" },
      { id: 'C', text: "SNMPv3" },
      { id: 'D', text: "SSH" }
    ],
    correctOptionId: 'B',
    explanation: "Port 389 is LDAP (cleartext). LDAPS (port 636) encrypts this traffic."
  },
  {
    id: 'q47',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which tool would be MOST effective for a penetration tester to identify operating systems and services on a remote host without logging in?",
    options: [
      { id: 'A', text: "Wireshark" },
      { id: 'B', text: "Nmap" },
      { id: 'C', text: "Autopsy" },
      { id: 'D', text: "dd" }
    ],
    correctOptionId: 'B',
    explanation: "Nmap is the standard for network discovery and OS fingerprinting."
  },
  {
    id: 'q48',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A web application validates input by ensuring only characters a-z and 0-9 are accepted. What type of security control is this?",
    options: [
      { id: 'A', text: "Blacklisting" },
      { id: 'B', text: "Input Sanitization" },
      { id: 'C', text: "Whitelisting" },
      { id: 'D', text: "Fuzzing" }
    ],
    correctOptionId: 'C',
    explanation: "Whitelisting (Allow-listing) strictly defines what is allowed."
  },
  {
    id: 'q49',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which log file would be MOST useful when investigating a suspected SQL injection attack against a web server?",
    options: [
      { id: 'A', text: "System Event Log" },
      { id: 'B', text: "Application Access Log" },
      { id: 'C', text: "Firewall Log" },
      { id: 'D', text: "DNS Query Log" }
    ],
    correctOptionId: 'B',
    explanation: "Web Access logs contain the URI strings/parameters showing SQL injection attempts."
  },
  {
    id: 'q50',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "To ensure the integrity of digital evidence gathered during a forensic investigation, what must be maintained?",
    options: [
      { id: 'A', text: "Order of Volatility" },
      { id: 'B', text: "Chain of Custody" },
      { id: 'C', text: "Right to Audit" },
      { id: 'D', text: "Non-repudiation" }
    ],
    correctOptionId: 'B',
    explanation: "Chain of Custody documents the handling history of evidence."
  },
  {
    id: 'q51',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A company uses a backup strategy where a full backup is performed on Sunday, and backups on Monday through Saturday contain only data changed since Sunday. This is:",
    options: [
      { id: 'A', text: "Differential Backup" },
      { id: 'B', text: "Incremental Backup" },
      { id: 'C', text: "Snapshot" },
      { id: 'D', text: "Mirroring" }
    ],
    correctOptionId: 'A',
    explanation: "Differential backups capture all changes since the last FULL backup."
  },
  {
    id: 'q52',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A SOC analyst wants to deploy a decoy server to attract attackers. What is this called?",
    options: [
      { id: 'A', text: "Honeypot" },
      { id: 'B', text: "Jump Server" },
      { id: 'C', text: "Proxy" },
      { id: 'D', text: "Sinkhole" }
    ],
    correctOptionId: 'A',
    explanation: "A Honeypot is a decoy system."
  },
  {
    id: 'q53',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which command line tool is used to query DNS records specifically?",
    options: [
      { id: 'A', text: "ping" },
      { id: 'B', text: "tracert" },
      { id: 'C', text: "dig" },
      { id: 'D', text: "netstat" }
    ],
    correctOptionId: 'C',
    explanation: "dig (Domain Information Groper) queries DNS servers."
  },
  {
    id: 'q54',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The process of obfuscating code to make it difficult for humans to read without changing its function is called:",
    options: [
      { id: 'A', text: "Encryption" },
      { id: 'B', text: "Obfuscation" },
      { id: 'C', text: "Tokenization" },
      { id: 'D', text: "Hashing" }
    ],
    correctOptionId: 'B',
    explanation: "Obfuscation confuses code to hinder reverse engineering."
  },
  {
    id: 'q55',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A solution that manages privileged accounts, logging all access and rotating passwords automatically, is a:",
    options: [
      { id: 'A', text: "PAM (Privileged Access Management)" },
      { id: 'B', text: "IAM (Identity and Access Management)" },
      { id: 'C', text: "SSO (Single Sign-On)" },
      { id: 'D', text: "MFA (Multi-Factor Authentication)" }
    ],
    correctOptionId: 'A',
    explanation: "PAM tools specifically target superuser accounts."
  },
  {
    id: 'q56',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which tool allows an analyst to capture and analyze network packets in real-time?",
    options: [
      { id: 'A', text: "Nessus" },
      { id: 'B', text: "Wireshark" },
      { id: 'C', text: "Metasploit" },
      { id: 'D', text: "Snort" }
    ],
    correctOptionId: 'B',
    explanation: "Wireshark is the standard protocol analyzer."
  },
  {
    id: 'q57',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which of the following provides the strongest protection for a password at rest?",
    options: [
      { id: 'A', text: "MD5 Hash" },
      { id: 'B', text: "SHA-1 Hash" },
      { id: 'C', text: "PBKDF2 with Salt" },
      { id: 'D', text: "Base64 Encoding" }
    ],
    correctOptionId: 'C',
    explanation: "PBKDF2 (Key stretching) with Salt makes brute force extremely slow."
  },
  {
    id: 'q58',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "In forensic analysis, which data source is considered MOST volatile and should be collected first?",
    options: [
      { id: 'A', text: "Hard Drive" },
      { id: 'B', text: "RAM" },
      { id: 'C', text: "Archival Tapes" },
      { id: 'D', text: "Remote Logs" }
    ],
    correctOptionId: 'B',
    explanation: "RAM is the most volatile; data is lost when power is cut."
  },
  {
    id: 'q59',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which exercise involves key personnel discussing simulated scenarios in an informal setting to assess plans?",
    options: [
      { id: 'A', text: "Full Interruption" },
      { id: 'B', text: "Tabletop Exercise" },
      { id: 'C', text: "Parallel Test" },
      { id: 'D', text: "Walk-through" }
    ],
    correctOptionId: 'B',
    explanation: "Tabletop exercises are discussion-based sessions."
  },
  {
    id: 'q60',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The risk manager multiplies the Single Loss Expectancy (SLE) by the Annualized Rate of Occurrence (ARO). What is the result?",
    options: [
      { id: 'A', text: "RPO" },
      { id: 'B', text: "ALE" },
      { id: 'C', text: "RTO" },
      { id: 'D', text: "ROI" }
    ],
    correctOptionId: 'B',
    explanation: "ALE (Annualized Loss Expectancy) = SLE × ARO."
  },
  {
    id: 'q61',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which role is primarily responsible for classifying data and determining the appropriate level of access required?",
    options: [
      { id: 'A', text: "Data Custodian" },
      { id: 'B', text: "Data Owner" },
      { id: 'C', text: "System Administrator" },
      { id: 'D', text: "Data Processor" }
    ],
    correctOptionId: 'B',
    explanation: "The Data Owner determines classification and access rights."
  },
  {
    id: 'q62',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An organization is moving data to the cloud but must ensure the cloud provider cannot access the data. They must hold the keys. This is called:",
    options: [
      { id: 'A', text: "Key Escrow" },
      { id: 'B', text: "BYOK (Bring Your Own Key)" },
      { id: 'C', text: "Tokenization" },
      { id: 'D', text: "Data Masking" }
    ],
    correctOptionId: 'B',
    explanation: "BYOK allows the customer to manage their own keys."
  },
  {
    id: 'q63',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which policy outlines the acceptable use of company resources and expects no privacy?",
    options: [
      { id: 'A', text: "AUP (Acceptable Use Policy)" },
      { id: 'B', text: "BYOD Policy" },
      { id: 'C', text: "Clean Desk Policy" },
      { id: 'D', text: "Retention Policy" }
    ],
    correctOptionId: 'A',
    explanation: "The AUP governs employee use of company systems."
  },
  {
    id: 'q64',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "During a disaster recovery test, which metric defines the maximum amount of time the business can tolerate being down?",
    options: [
      { id: 'A', text: "RPO" },
      { id: 'B', text: "RTO" },
      { id: 'C', text: "MTBF" },
      { id: 'D', text: "MTTR" }
    ],
    correctOptionId: 'B',
    explanation: "RTO (Recovery Time Objective) is the target time to restore operations."
  },
  {
    id: 'q65',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which regulation focuses specifically on the protection of personal data and privacy for individuals within the EU?",
    options: [
      { id: 'A', text: "HIPAA" },
      { id: 'B', text: "GDPR" },
      { id: 'C', text: "PCI DSS" },
      { id: 'D', text: "SOX" }
    ],
    correctOptionId: 'B',
    explanation: "GDPR is the EU data privacy regulation."
  },
  {
    id: 'q66',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A company hires an external team to simulate a cyberattack against their network. The internal team is not informed. This is a:",
    options: [
      { id: 'A', text: "White Box Test" },
      { id: 'B', text: "Red Team Exercise" },
      { id: 'C', text: "Tabletop Exercise" },
      { id: 'D', text: "Vulnerability Scan" }
    ],
    correctOptionId: 'B',
    explanation: "Red Team exercises involve an offensive team attacking to test defenders."
  },
  {
    id: 'q67',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which document is a non-binding agreement between two parties outlining terms, often a precursor to a contract?",
    options: [
      { id: 'A', text: "SLA" },
      { id: 'B', text: "BPA" },
      { id: 'C', text: "MOU" },
      { id: 'D', text: "ISA" }
    ],
    correctOptionId: 'C',
    explanation: "MOU (Memorandum of Understanding) expresses intent but is often non-binding."
  },
  {
    id: 'q68',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The detailed steps to recover a specific system after a failure are found in the:",
    options: [
      { id: 'A', text: "BCP (Business Continuity Plan)" },
      { id: 'B', text: "DRP (Disaster Recovery Plan)" },
      { id: 'C', text: "BIA (Business Impact Analysis)" },
      { id: 'D', text: "COOP" }
    ],
    correctOptionId: 'B',
    explanation: "The DRP contains the technical details to restore IT systems."
  },
  {
    id: 'q69',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The 'Right to be Forgotten' is a key component of:",
    options: [
      { id: 'A', text: "CCPA" },
      { id: 'B', text: "GDPR" },
      { id: 'C', text: "NIST 800-53" },
      { id: 'D', text: "ISO 27001" }
    ],
    correctOptionId: 'B',
    explanation: "GDPR Article 17 grants the Right to Erasure."
  },
  {
    id: 'q70',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which risk strategy involves purchasing insurance to cover potential losses?",
    options: [
      { id: 'A', text: "Risk Avoidance" },
      { id: 'B', text: "Risk Mitigation" },
      { id: 'C', text: "Risk Transference" },
      { id: 'D', text: "Risk Acceptance" }
    ],
    correctOptionId: 'C',
    explanation: "Risk Transference involves shifting the burden of loss to a third party (e.g., insurance)."
  },
  {
    id: 'q71',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A document that defines the data format and technical requirements for interconnection between two organizations is an:",
    options: [
      { id: 'A', text: "SLA" },
      { id: 'B', text: "ISA (Interconnection Security Agreement)" },
      { id: 'C', text: "MOU" },
      { id: 'D', text: "BPA" }
    ],
    correctOptionId: 'B',
    explanation: "ISA defines technical security requirements for connections."
  },
  // --- PREVIOUS BATCH (101-200) ---
  {
    id: 'q101',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker uses a legitimate Windows system tool like PowerShell to execute malicious code, avoiding detection by antivirus software. This technique is best described as:",
    options: [
      { id: 'A', text: "Rootkit" },
      { id: 'B', text: "Fileless Malware" },
      { id: 'C', text: "Buffer Overflow" },
      { id: 'D', text: "Logic Bomb" }
    ],
    correctOptionId: 'B',
    explanation: "Fileless malware operates in memory (RAM) using built-in tools (Living off the Land)."
  },
  {
    id: 'q102',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which encryption method allows operations to be performed on encrypted data without decrypting it first?",
    options: [
      { id: 'A', text: "Symmetric Encryption" },
      { id: 'B', text: "Asymmetric Encryption" },
      { id: 'C', text: "Homomorphic Encryption" },
      { id: 'D', text: "Elliptic Curve Cryptography" }
    ],
    correctOptionId: 'C',
    explanation: "Homomorphic encryption enables processing of data while it remains encrypted."
  },
  {
    id: 'q103',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A forensic analyst creates a bit-by-bit copy of a hard drive before analysis. What is this copy called?",
    options: [
      { id: 'A', text: "Snapshot" },
      { id: 'B', text: "Forensic Image" },
      { id: 'C', text: "Incremental Backup" },
      { id: 'D', text: "Shadow Copy" }
    ],
    correctOptionId: 'B',
    explanation: "A forensic image is an exact replica (bit-stream copy) used to preserve evidence."
  },
  {
    id: 'q104',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which document provides a high-level overview of an organization's security needs and is mandatory for all employees to follow?",
    options: [
      { id: 'A', text: "Guideline" },
      { id: 'B', text: "Standard" },
      { id: 'C', text: "Procedure" },
      { id: 'D', text: "Policy" }
    ],
    correctOptionId: 'D',
    explanation: "Policies are high-level, mandatory statements of management intent."
  },
  {
    id: 'q105',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which wireless protocol uses Simultaneous Authentication of Equals (SAE) to prevent offline dictionary attacks?",
    options: [
      { id: 'A', text: "WPA2-PSK" },
      { id: 'B', text: "WPA3" },
      { id: 'C', text: "WEP" },
      { id: 'D', text: "WPA-Enterprise" }
    ],
    correctOptionId: 'B',
    explanation: "WPA3 introduced SAE to replace the vulnerable 4-way handshake of WPA2."
  },
  {
    id: 'q106',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker exploits a race condition where they change a file between the time the system checks permissions and the time it executes the file. This is:",
    options: [
      { id: 'A', text: "TOC/TOU" },
      { id: 'B', text: "SQL Injection" },
      { id: 'C', text: "XSS" },
      { id: 'D', text: "CSRF" }
    ],
    correctOptionId: 'A',
    explanation: "Time of Check/Time of Use (TOC/TOU) is a race condition vulnerability."
  },
  {
    id: 'q107',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control type is a background check for new employees considered?",
    options: [
      { id: 'A', text: "Technical" },
      { id: 'B', text: "Physical" },
      { id: 'C', text: "Administrative/Managerial" },
      { id: 'D', text: "Corrective" }
    ],
    correctOptionId: 'C',
    explanation: "Background checks are administrative/managerial controls related to personnel security."
  },
  {
    id: 'q108',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cloud deployment model involves infrastructure shared by several organizations with specific shared concerns (e.g., regulatory requirements)?",
    options: [
      { id: 'A', text: "Public Cloud" },
      { id: 'B', text: "Private Cloud" },
      { id: 'C', text: "Community Cloud" },
      { id: 'D', text: "Hybrid Cloud" }
    ],
    correctOptionId: 'C',
    explanation: "Community clouds are shared by organizations with common interests/requirements."
  },
  {
    id: 'q109',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A security team implements a system that automatically blocks IP addresses after 5 failed login attempts. This is an example of:",
    options: [
      { id: 'A', text: "SOAR" },
      { id: 'B', text: "SIEM" },
      { id: 'C', text: "IPS (Intrusion Prevention System)" },
      { id: 'D', text: "Passive Monitoring" }
    ],
    correctOptionId: 'C',
    explanation: "IPS can take active measures (like blocking IPs) to prevent attacks."
  },
  {
    id: 'q110',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which social engineering technique specifically targets high-profile executives or senior management?",
    options: [
      { id: 'A', text: "Phishing" },
      { id: 'B', text: "Whaling" },
      { id: 'C', text: "Vishing" },
      { id: 'D', text: "Tailgating" }
    ],
    correctOptionId: 'B',
    explanation: "Whaling is a form of spear phishing targeting 'big fish' (executives)."
  },
  {
    id: 'q111',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which standard is used for exchanging authentication and authorization data between security domains, often for SSO?",
    options: [
      { id: 'A', text: "LDAP" },
      { id: 'B', text: "SAML" },
      { id: 'C', text: "RADIUS" },
      { id: 'D', text: "TACACS+" }
    ],
    correctOptionId: 'B',
    explanation: "SAML (Security Assertion Markup Language) is the standard for XML-based SSO."
  },
  {
    id: 'q112',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Ensuring that a system is accessible when needed falls under which leg of the CIA triad?",
    options: [
      { id: 'A', text: "Confidentiality" },
      { id: 'B', text: "Integrity" },
      { id: 'C', text: "Availability" },
      { id: 'D', text: "Authorization" }
    ],
    correctOptionId: 'C',
    explanation: "Availability ensures reliable access to data and resources."
  },
  {
    id: 'q113',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which vulnerability scanning type requires credentials to log into the target system for a more detailed assessment?",
    options: [
      { id: 'A', text: "Non-credentialed Scan" },
      { id: 'B', text: "Credentialed Scan" },
      { id: 'C', text: "Passive Scan" },
      { id: 'D', text: "Discovery Scan" }
    ],
    correctOptionId: 'B',
    explanation: "Credentialed scans authenticate to the system to see internal vulnerabilities."
  },
  {
    id: 'q114',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which concept refers to computing performed close to the source of data (e.g., IoT sensors) to reduce latency?",
    options: [
      { id: 'A', text: "Cloud Computing" },
      { id: 'B', text: "Edge Computing" },
      { id: 'C', text: "Mainframe Computing" },
      { id: 'D', text: "Grid Computing" }
    ],
    correctOptionId: 'B',
    explanation: "Edge computing processes data near the source (the 'edge' of the network)."
  },
  {
    id: 'q115',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which phase of the Incident Response lifecycle involves restoring systems to normal operation and hardening them against future attacks?",
    options: [
      { id: 'A', text: "Detection" },
      { id: 'B', text: "Containment" },
      { id: 'C', text: "Recovery" },
      { id: 'D', text: "Preparation" }
    ],
    correctOptionId: 'C',
    explanation: "Recovery involves restoring services and verifying they are clean."
  },
  {
    id: 'q116',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A user visits a website and their browser unknowingly executes a script that performs an action on another site where they are authenticated (e.g., changing a password). This is:",
    options: [
      { id: 'A', text: "XSS" },
      { id: 'B', text: "CSRF" },
      { id: 'C', text: "SQL Injection" },
      { id: 'D', text: "Clickjacking" }
    ],
    correctOptionId: 'B',
    explanation: "CSRF (Cross-Site Request Forgery) tricks the user's browser into sending a request."
  },
  {
    id: 'q117',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which API security standard uses tokens (like Bearer tokens) for authorization rather than sharing credentials?",
    options: [
      { id: 'A', text: "SOAP" },
      { id: 'B', text: "OAuth 2.0" },
      { id: 'C', text: "REST" },
      { id: 'D', text: "XML" }
    ],
    correctOptionId: 'B',
    explanation: "OAuth 2.0 is the industry standard for authorization delegation."
  },
  {
    id: 'q118',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term describes the distinct pieces of information that a system uses to determine if a user is who they say they are (e.g., Fingerprint, Password, Token)?",
    options: [
      { id: 'A', text: "Identification" },
      { id: 'B', text: "Attributes" },
      { id: 'C', text: "Authentication Factors" },
      { id: 'D', text: "Permissions" }
    ],
    correctOptionId: 'C',
    explanation: "Authentication factors (Something you know, have, are) verify identity."
  },
  {
    id: 'q119',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A manufacturing plant uses an isolated network for its industrial robots. This network has no connection to the internet or the corporate office. This is known as:",
    options: [
      { id: 'A', text: "DMZ" },
      { id: 'B', text: "Air Gap" },
      { id: 'C', text: "VPN" },
      { id: 'D', text: "VLAN" }
    ],
    correctOptionId: 'B',
    explanation: "An Air Gap is a physical separation between networks with no connecting cables."
  },
  {
    id: 'q120',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term refers to a set of malicious tools that are installed at the OS kernel level to hide their presence and maintain privileged access?",
    options: [
      { id: 'A', text: "Trojan" },
      { id: 'B', text: "Rootkit" },
      { id: 'C', text: "Worm" },
      { id: 'D', text: "Ransomware" }
    ],
    correctOptionId: 'B',
    explanation: "Rootkits operate at the kernel/OS level to subvert detection tools."
  },
  {
    id: 'q121',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which EAP method is considered the MOST secure because it requires client-side and server-side certificates?",
    options: [
      { id: 'A', text: "EAP-MD5" },
      { id: 'B', text: "PEAP" },
      { id: 'C', text: "EAP-TLS" },
      { id: 'D', text: "LEAP" }
    ],
    correctOptionId: 'C',
    explanation: "EAP-TLS requires mutual authentication using certificates on both ends."
  },
  {
    id: 'q122',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which privacy technique involves replacing sensitive data elements with non-sensitive equivalents (tokens) that have no extrinsic meaning?",
    options: [
      { id: 'A', text: "Encryption" },
      { id: 'B', text: "Tokenization" },
      { id: 'C', text: "Hashing" },
      { id: 'D', text: "Masking" }
    ],
    correctOptionId: 'B',
    explanation: "Tokenization replaces data with a random token; the actual data is stored in a secure vault."
  },
  {
    id: 'q123',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which protocol operates on port 69 and is often used for bootstrapping diskless workstations, but offers no security?",
    options: [
      { id: 'A', text: "FTP" },
      { id: 'B', text: "SFTP" },
      { id: 'C', text: "TFTP" },
      { id: 'D', text: "HTTP" }
    ],
    correctOptionId: 'C',
    explanation: "TFTP (Trivial File Transfer Protocol) uses port 69 and is unencrypted."
  },
  {
    id: 'q124',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "In a PKI environment, which entity is responsible for verifying the identity of a requestor before a certificate is issued?",
    options: [
      { id: 'A', text: "Certificate Authority (CA)" },
      { id: 'B', text: "Registration Authority (RA)" },
      { id: 'C', text: "CRL" },
      { id: 'D', text: "OCSP" }
    ],
    correctOptionId: 'B',
    explanation: "The RA (Registration Authority) handles identity verification and vetting."
  },
  {
    id: 'q125',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack specifically targets the DNS cache of a resolver to redirect users to a malicious site?",
    options: [
      { id: 'A', text: "DNS Poisoning" },
      { id: 'B', text: "Domain Hijacking" },
      { id: 'C', text: "URL Redirection" },
      { id: 'D', text: "XSS" }
    ],
    correctOptionId: 'A',
    explanation: "DNS Poisoning corrupts the cache with false IP-to-hostname mappings."
  },
  {
    id: 'q126',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term describes the principle that a user should only have the access rights necessary to perform their job function?",
    options: [
      { id: 'A', text: "Separation of Duties" },
      { id: 'B', text: "Least Privilege" },
      { id: 'C', text: "Need to Know" },
      { id: 'D', text: "Defense in Depth" }
    ],
    correctOptionId: 'B',
    explanation: "Least Privilege restricts access to the minimum required."
  },
  {
    id: 'q127',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which mobile device deployment model allows employees to use their personal devices for work, but the company installs a separate container for corporate data?",
    options: [
      { id: 'A', text: "COPE" },
      { id: 'B', text: "CYOD" },
      { id: 'C', text: "BYOD" },
      { id: 'D', text: "Corporate Owned" }
    ],
    correctOptionId: 'C',
    explanation: "BYOD (Bring Your Own Device) often uses containerization to separate personal and work data."
  },
  {
    id: 'q128',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A security analyst is reviewing a packet capture and sees a 3-way handshake. Which TCP flags are involved in order?",
    options: [
      { id: 'A', text: "SYN, ACK, SYN-ACK" },
      { id: 'B', text: "SYN, SYN-ACK, ACK" },
      { id: 'C', text: "FIN, ACK, RST" },
      { id: 'D', text: "URG, PSH, FIN" }
    ],
    correctOptionId: 'B',
    explanation: "The TCP handshake is SYN -> SYN-ACK -> ACK."
  },
  {
    id: 'q129',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which document details the specific hardware and software approved for use within an organization?",
    options: [
      { id: 'A', text: "Standard Operating Procedure" },
      { id: 'B', text: "Acceptable Use Policy" },
      { id: 'C', text: "Asset Inventory" },
      { id: 'D', text: "Standard/Baseline" }
    ],
    correctOptionId: 'D',
    explanation: "Standards or Baselines define specific approved technologies."
  },
  {
    id: 'q130',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of adversary is characterized by high sophistication, significant resources, and long-term persistence (often state-sponsored)?",
    options: [
      { id: 'A', text: "Script Kiddie" },
      { id: 'B', text: "Insider Threat" },
      { id: 'C', text: "APT (Advanced Persistent Threat)" },
      { id: 'D', text: "Hacktivist" }
    ],
    correctOptionId: 'C',
    explanation: "APT refers to sophisticated, often state-sponsored actors."
  },
  {
    id: 'q131',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which firewall type operates at Layer 7 of the OSI model and can filter traffic based on specific application commands (e.g., preventing SQL injection)?",
    options: [
      { id: 'A', text: "Packet Filter" },
      { id: 'B', text: "WAF (Web Application Firewall)" },
      { id: 'C', text: "Stateful Firewall" },
      { id: 'D', text: "Router ACL" }
    ],
    correctOptionId: 'B',
    explanation: "WAFs inspect HTTP/S traffic at the application layer."
  },
  {
    id: 'q132',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the primary purpose of a 'tabletop exercise' in incident response planning?",
    options: [
      { id: 'A', text: "To test technical controls" },
      { id: 'B', text: "To validate communication paths and decision making" },
      { id: 'C', text: "To stress test the network" },
      { id: 'D', text: "To restore backups" }
    ],
    correctOptionId: 'B',
    explanation: "Tabletop exercises validate human processes and plans without technical disruption."
  },
  {
    id: 'q133',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term describes a hidden feature or method of bypassing normal authentication, often left by developers for testing?",
    options: [
      { id: 'A', text: "Logic Bomb" },
      { id: 'B', text: "Backdoor" },
      { id: 'C', text: "Trojan" },
      { id: 'D', text: "Rootkit" }
    ],
    correctOptionId: 'B',
    explanation: "A backdoor provides secret access."
  },
  {
    id: 'q134',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of certificate is used to sign other certificates in a hierarchy?",
    options: [
      { id: 'A', text: "Leaf Certificate" },
      { id: 'B', text: "Root CA Certificate" },
      { id: 'C', text: "Self-Signed Certificate" },
      { id: 'D', text: "Wildcard Certificate" }
    ],
    correctOptionId: 'B',
    explanation: "Root CA (and Intermediate CA) certificates sign other certs."
  },
  {
    id: 'q135',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker uses a botnet to generate millions of requests to a target server, exhausting its resources. This is a:",
    options: [
      { id: 'A', text: "Buffer Overflow" },
      { id: 'B', text: "DDoS" },
      { id: 'C', text: "Memory Leak" },
      { id: 'D', text: "Race Condition" }
    ],
    correctOptionId: 'B',
    explanation: "DDoS is the exhaustion of resources via distributed traffic."
  },
  {
    id: 'q136',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which concept ensures that a user cannot deny having performed an action, provided by logging and digital signatures?",
    options: [
      { id: 'A', text: "Non-repudiation" },
      { id: 'B', text: "Obfuscation" },
      { id: 'C', text: "Authorization" },
      { id: 'D', text: "Authentication" }
    ],
    correctOptionId: 'A',
    explanation: "Non-repudiation proves origin/action."
  },
  {
    id: 'q137',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which solution involves managing the keys and encryption for a large number of mobile devices in an enterprise?",
    options: [
      { id: 'A', text: "MDM" },
      { id: 'B', text: "MAM" },
      { id: 'C', text: "HSM" },
      { id: 'D', text: "TPM" }
    ],
    correctOptionId: 'A',
    explanation: "MDM (Mobile Device Management) centrally manages device security policies, including enforcing and distributing encryption settings/keys."
  },
  {
    id: 'q138',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which Linux command allows a user to run programs with the security privileges of another user (usually root)?",
    options: [
      { id: 'A', text: "chmod" },
      { id: 'B', text: "chown" },
      { id: 'C', text: "sudo" },
      { id: 'D', text: "grep" }
    ],
    correctOptionId: 'C',
    explanation: "sudo (SuperUser DO) executes commands as root."
  },
  {
    id: 'q139',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of agreement is legally binding and defines the responsibilities and expectations between two business partners?",
    options: [
      { id: 'A', text: "MOU" },
      { id: 'B', text: "SLA" },
      { id: 'C', text: "BPA (Business Partnership Agreement)" },
      { id: 'D', text: "ISA" }
    ],
    correctOptionId: 'C',
    explanation: "A BPA is a legal agreement between partners."
  },
  {
    id: 'q140',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which web vulnerability allows an attacker to read files on the web server that should not be accessible (e.g., /etc/passwd)?",
    options: [
      { id: 'A', text: "XSS" },
      { id: 'B', text: "Directory Traversal" },
      { id: 'C', text: "CSRF" },
      { id: 'D', text: "Command Injection" }
    ],
    correctOptionId: 'B',
    explanation: "Directory Traversal (../) accesses files outside the web root."
  },
  {
    id: 'q141',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which secure protocol should be used to manage network devices (routers, switches) remotely?",
    options: [
      { id: 'A', text: "Telnet" },
      { id: 'B', text: "SSH" },
      { id: 'C', text: "HTTP" },
      { id: 'D', text: "SNMPv1" }
    ],
    correctOptionId: 'B',
    explanation: "SSH provides encrypted remote management."
  },
  {
    id: 'q142',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of site contains all the necessary equipment and data to resume operations immediately after a disaster?",
    options: [
      { id: 'A', text: "Cold Site" },
      { id: 'B', text: "Warm Site" },
      { id: 'C', text: "Hot Site" },
      { id: 'D', text: "Mobile Site" }
    ],
    correctOptionId: 'C',
    explanation: "Hot sites are fully mirrored and ready to go instantly."
  },
  {
    id: 'q143',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the main difference between a vulnerability scan and a penetration test?",
    options: [
      { id: 'A', text: "Vulnerability scans are active; Pen tests are passive." },
      { id: 'B', text: "Vulnerability scans identify weaknesses; Pen tests exploit them." },
      { id: 'C', text: "Vulnerability scans are manual; Pen tests are automated." },
      { id: 'D', text: "There is no difference." }
    ],
    correctOptionId: 'B',
    explanation: "Scanning finds flaws; Pen testing exploits them to prove risk."
  },
  {
    id: 'q144',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which concept involves adding random data to a password before hashing it to prevent rainbow table attacks?",
    options: [
      { id: 'A', text: "Peppering" },
      { id: 'B', text: "Salting" },
      { id: 'C', text: "Key Stretching" },
      { id: 'D', text: "Collision" }
    ],
    correctOptionId: 'B',
    explanation: "Salting adds unique random data to each password hash."
  },
  {
    id: 'q145',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker sends a malformed packet to a server that causes the application to crash or freeze. This is a:",
    options: [
      { id: 'A', text: "Privilege Escalation" },
      { id: 'B', text: "Denial of Service (DoS)" },
      { id: 'C', text: "Data Exfiltration" },
      { id: 'D', text: "Spoofing" }
    ],
    correctOptionId: 'B',
    explanation: "Crashing a service denies availability (DoS)."
  },
  {
    id: 'q146',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which backup type backs up all selected files but does NOT clear the archive bit (does not mark them as backed up)?",
    options: [
      { id: 'A', text: "Full" },
      { id: 'B', text: "Differential" },
      { id: 'C', text: "Incremental" },
      { id: 'D', text: "Copy" }
    ],
    correctOptionId: 'D',
    explanation: "A Copy backup is a full backup that doesn't update the archive bit."
  },
  {
    id: 'q147',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which role is responsible for implementing the security controls defined by the data owner?",
    options: [
      { id: 'A', text: "Data Steward" },
      { id: 'B', text: "Data Custodian" },
      { id: 'C', text: "Privacy Officer" },
      { id: 'D', text: "User" }
    ],
    correctOptionId: 'B',
    explanation: "The Custodian (often IT) implements the technical controls."
  },
  {
    id: 'q148',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which virtual networking technology allows a VM to connect directly to the physical network adapter, bypassing the virtual switch?",
    options: [
      { id: 'A', text: "NAT" },
      { id: 'B', text: "Bridged" },
      { id: 'C', text: "SR-IOV" },
      { id: 'D', text: "Host-Only" }
    ],
    correctOptionId: 'C',
    explanation: "SR-IOV (Single Root I/O Virtualization) allows direct hardware access."
  },
  {
    id: 'q149',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of phishing targets a specific group of people (e.g., employees of a specific company)?",
    options: [
      { id: 'A', text: "Vishing" },
      { id: 'B', text: "Spear Phishing" },
      { id: 'C', text: "Whaling" },
      { id: 'D', text: "Pharming" }
    ],
    correctOptionId: 'B',
    explanation: "Spear phishing is targeted."
  },
  {
    id: 'q150',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which security goal is violated if an unauthorized person modifies a file?",
    options: [
      { id: 'A', text: "Confidentiality" },
      { id: 'B', text: "Integrity" },
      { id: 'C', text: "Availability" },
      { id: 'D', text: "Authenticity" }
    ],
    correctOptionId: 'B',
    explanation: "Integrity prevents unauthorized modification."
  },
  {
    id: 'q151',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which protocol uses a 3-way handshake to establish a connection?",
    options: [
      { id: 'A', text: "UDP" },
      { id: 'B', text: "TCP" },
      { id: 'C', text: "ICMP" },
      { id: 'D', text: "IP" }
    ],
    correctOptionId: 'B',
    explanation: "TCP is connection-oriented and uses the 3-way handshake."
  },
  {
    id: 'q152',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which tool is primarily used for password cracking?",
    options: [
      { id: 'A', text: "John the Ripper" },
      { id: 'B', text: "Nmap" },
      { id: 'C', text: "Tcpdump" },
      { id: 'D', text: "Nessus" }
    ],
    correctOptionId: 'A',
    explanation: "John the Ripper is a famous password cracking tool."
  },
  {
    id: 'q153',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which metric represents the average time between failures of a repairable system?",
    options: [
      { id: 'A', text: "MTBF" },
      { id: 'B', text: "MTTF" },
      { id: 'C', text: "MTTR" },
      { id: 'D', text: "RPO" }
    ],
    correctOptionId: 'A',
    explanation: "MTBF (Mean Time Between Failures) is for repairable systems."
  },
  {
    id: 'q154',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker registers 'goog1e.com' to trick users. This is:",
    options: [
      { id: 'A', text: "Typosquatting" },
      { id: 'B', text: "DNS Poisoning" },
      { id: 'C', text: "Domain Hijacking" },
      { id: 'D', text: "Replay Attack" }
    ],
    correctOptionId: 'A',
    explanation: "Typosquatting relies on users mistyping URLs."
  },
  {
    id: 'q155',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of hypervisor runs directly on the hardware without a host OS?",
    options: [
      { id: 'A', text: "Type 1 (Bare Metal)" },
      { id: 'B', text: "Type 2 (Hosted)" },
      { id: 'C', text: "Container" },
      { id: 'D', text: "Sandbox" }
    ],
    correctOptionId: 'A',
    explanation: "Type 1 hypervisors run on bare metal."
  },
  {
    id: 'q156',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which activity involves actively searching for threats that have evaded existing security controls?",
    options: [
      { id: 'A', text: "Threat Hunting" },
      { id: 'B', text: "Penetration Testing" },
      { id: 'C', text: "Vulnerability Scanning" },
      { id: 'D', text: "Auditing" }
    ],
    correctOptionId: 'A',
    explanation: "Threat hunting is proactive searching for undetected threats."
  },
  {
    id: 'q157',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which regulation applies to credit card data?",
    options: [
      { id: 'A', text: "GDPR" },
      { id: 'B', text: "HIPAA" },
      { id: 'C', text: "PCI DSS" },
      { id: 'D', text: "FERPA" }
    ],
    correctOptionId: 'C',
    explanation: "PCI DSS governs payment card data."
  },
  {
    id: 'q158',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of malware demands payment?",
    options: [
      { id: 'A', text: "Ransomware" },
      { id: 'B', text: "Spyware" },
      { id: 'C', text: "Adware" },
      { id: 'D', text: "Worm" }
    ],
    correctOptionId: 'A',
    explanation: "Ransomware encrypts data for ransom."
  },
  {
    id: 'q159',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which wireless security protocol is considered deprecated and insecure due to IV weakness?",
    options: [
      { id: 'A', text: "WPA2" },
      { id: 'B', text: "WEP" },
      { id: 'C', text: "WPA3" },
      { id: 'D', text: "WPA" }
    ],
    correctOptionId: 'B',
    explanation: "WEP is highly insecure and easily cracked."
  },
  {
    id: 'q160',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the default port for HTTP?",
    options: [
      { id: 'A', text: "80" },
      { id: 'B', text: "443" },
      { id: 'C', text: "8080" },
      { id: 'D', text: "21" }
    ],
    correctOptionId: 'A',
    explanation: "Port 80 is standard HTTP."
  },
  {
    id: 'q161',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the default port for HTTPS?",
    options: [
      { id: 'A', text: "80" },
      { id: 'B', text: "443" },
      { id: 'C', text: "22" },
      { id: 'D', text: "25" }
    ],
    correctOptionId: 'B',
    explanation: "Port 443 is standard HTTPS."
  },
  {
    id: 'q162',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A user enters a quote ' OR '1'='1 into a login field and gains access. This is:",
    options: [
      { id: 'A', text: "SQL Injection" },
      { id: 'B', text: "XSS" },
      { id: 'C', text: "Buffer Overflow" },
      { id: 'D', text: "Command Injection" }
    ],
    correctOptionId: 'A',
    explanation: "The classic '1'='1' is a SQL injection tautology."
  },
  {
    id: 'q163',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which RAID level uses striping with parity (requiring at least 3 drives)?",
    options: [
      { id: 'A', text: "RAID 0" },
      { id: 'B', text: "RAID 1" },
      { id: 'C', text: "RAID 5" },
      { id: 'D', text: "RAID 10" }
    ],
    correctOptionId: 'C',
    explanation: "RAID 5 uses striping with distributed parity."
  },
  {
    id: 'q164',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which document defines the rules for behavior and use of resources?",
    options: [
      { id: 'A', text: "AUP" },
      { id: 'B', text: "SLA" },
      { id: 'C', text: "NDA" },
      { id: 'D', text: "MOU" }
    ],
    correctOptionId: 'A',
    explanation: "AUP (Acceptable Use Policy)."
  },
  {
    id: 'q165',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which command shows active network connections?",
    options: [
      { id: 'A', text: "ping" },
      { id: 'B', text: "netstat" },
      { id: 'C', text: "ifconfig" },
      { id: 'D', text: "nslookup" }
    ],
    correctOptionId: 'B',
    explanation: "netstat displays network connections and ports."
  },
  {
    id: 'q166',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack involves an attacker physically following an authorized user through a secure door?",
    options: [
      { id: 'A', text: "Tailgating" },
      { id: 'B', text: "Dumpster Diving" },
      { id: 'C', text: "Shoulder Surfing" },
      { id: 'D', text: "Replay" }
    ],
    correctOptionId: 'A',
    explanation: "Tailgating (or piggybacking) is unauthorized physical entry."
  },
  {
    id: 'q167',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which crypto algorithm is symmetric?",
    options: [
      { id: 'A', text: "RSA" },
      { id: 'B', text: "AES" },
      { id: 'C', text: "ECC" },
      { id: 'D', text: "Diffie-Hellman" }
    ],
    correctOptionId: 'B',
    explanation: "AES (Advanced Encryption Standard) is symmetric."
  },
  {
    id: 'q168',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which crypto algorithm is asymmetric?",
    options: [
      { id: 'A', text: "AES" },
      { id: 'B', text: "DES" },
      { id: 'C', text: "RSA" },
      { id: 'D', text: "3DES" }
    ],
    correctOptionId: 'C',
    explanation: "RSA is a public/private key (asymmetric) algorithm."
  },
  {
    id: 'q169',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What does SIEM stand for?",
    options: [
      { id: 'A', text: "Security Information and Event Management" },
      { id: 'B', text: "System Integration and Event Monitoring" },
      { id: 'C', text: "Secure Internet and Email Management" },
      { id: 'D', text: "Security Incident and Emergency Management" }
    ],
    correctOptionId: 'A',
    explanation: "SIEM: Security Information and Event Management."
  },
  {
    id: 'q170',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control prevents a user from denying they performed an action?",
    options: [
      { id: 'A', text: "Confidentiality" },
      { id: 'B', text: "Availability" },
      { id: 'C', text: "Non-repudiation" },
      { id: 'D', text: "Authorization" }
    ],
    correctOptionId: 'C',
    explanation: "Non-repudiation."
  },
  {
    id: 'q171',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which device connects two different networks (e.g., LAN and Internet)?",
    options: [
      { id: 'A', text: "Switch" },
      { id: 'B', text: "Hub" },
      { id: 'C', text: "Router" },
      { id: 'D', text: "Repeater" }
    ],
    correctOptionId: 'C',
    explanation: "Routers route traffic between different networks."
  },
  {
    id: 'q172',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which malware type propagates automatically over a network?",
    options: [
      { id: 'A', text: "Virus" },
      { id: 'B', text: "Worm" },
      { id: 'C', text: "Trojan" },
      { id: 'D', text: "Spyware" }
    ],
    correctOptionId: 'B',
    explanation: "Worms self-replicate over networks."
  },
  {
    id: 'q173',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which backup includes everything and clears the archive bit?",
    options: [
      { id: 'A', text: "Full" },
      { id: 'B', text: "Incremental" },
      { id: 'C', text: "Differential" },
      { id: 'D', text: "Copy" }
    ],
    correctOptionId: 'A',
    explanation: "Full backup resets the archive bit."
  },
  {
    id: 'q174',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which plan addresses restoring critical business functions after a disaster?",
    options: [
      { id: 'A', text: "BCP" },
      { id: 'B', text: "DRP" },
      { id: 'C', text: "AUP" },
      { id: 'D', text: "NDA" }
    ],
    correctOptionId: 'A',
    explanation: "BCP (Business Continuity Plan) focuses on business functions."
  },
  {
    id: 'q175',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is a DMZ?",
    options: [
      { id: 'A', text: "Demilitarized Zone" },
      { id: 'B', text: "Data Management Zone" },
      { id: 'C', text: "Direct Memory Zone" },
      { id: 'D', text: "Digital Monitoring Zone" }
    ],
    correctOptionId: 'A',
    explanation: "DMZ is a buffer zone between public and private networks."
  },
  {
    id: 'q176',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack exploits the trust a user has in a website?",
    options: [
      { id: 'A', text: "XSS" },
      { id: 'B', text: "CSRF" },
      { id: 'C', text: "SQLi" },
      { id: 'D', text: "DoS" }
    ],
    correctOptionId: 'A',
    explanation: "XSS exploits the user's trust in a site (by executing script)."
  },
  {
    id: 'q177',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack exploits the trust a website has in a user?",
    options: [
      { id: 'A', text: "XSS" },
      { id: 'B', text: "CSRF" },
      { id: 'C', text: "SQLi" },
      { id: 'D', text: "DoS" }
    ],
    correctOptionId: 'B',
    explanation: "CSRF exploits the site's trust in the user's browser."
  },
  {
    id: 'q178',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the port for DNS?",
    options: [
      { id: 'A', text: "53" },
      { id: 'B', text: "23" },
      { id: 'C', text: "80" },
      { id: 'D', text: "25" }
    ],
    correctOptionId: 'A',
    explanation: "Port 53 is DNS."
  },
  {
    id: 'q179',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the port for SMTP?",
    options: [
      { id: 'A', text: "25" },
      { id: 'B', text: "110" },
      { id: 'C', text: "143" },
      { id: 'D', text: "443" }
    ],
    correctOptionId: 'A',
    explanation: "Port 25 is SMTP (sending email)."
  },
  {
    id: 'q180',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the port for POP3?",
    options: [
      { id: 'A', text: "110" },
      { id: 'B', text: "25" },
      { id: 'C', text: "143" },
      { id: 'D', text: "993" }
    ],
    correctOptionId: 'A',
    explanation: "Port 110 is POP3."
  },
  {
    id: 'q181',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the port for IMAP?",
    options: [
      { id: 'A', text: "143" },
      { id: 'B', text: "110" },
      { id: 'C', text: "25" },
      { id: 'D', text: "995" }
    ],
    correctOptionId: 'A',
    explanation: "Port 143 is IMAP."
  },
  {
    id: 'q182',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of key is used to create a digital signature?",
    options: [
      { id: 'A', text: "Public Key" },
      { id: 'B', text: "Private Key" },
      { id: 'C', text: "Session Key" },
      { id: 'D', text: "Shared Key" }
    ],
    correctOptionId: 'B',
    explanation: "You sign with your Private Key."
  },
  {
    id: 'q183',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of key is used to verify a digital signature?",
    options: [
      { id: 'A', text: "Public Key" },
      { id: 'B', text: "Private Key" },
      { id: 'C', text: "Session Key" },
      { id: 'D', text: "Shared Key" }
    ],
    correctOptionId: 'A',
    explanation: "Others verify with your Public Key."
  },
  {
    id: 'q184',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which law protects student educational records?",
    options: [
      { id: 'A', text: "HIPAA" },
      { id: 'B', text: "FERPA" },
      { id: 'C', text: "GLBA" },
      { id: 'D', text: "SOX" }
    ],
    correctOptionId: 'B',
    explanation: "FERPA (Family Educational Rights and Privacy Act)."
  },
  {
    id: 'q185',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which law protects patient health information?",
    options: [
      { id: 'A', text: "HIPAA" },
      { id: 'B', text: "FERPA" },
      { id: 'C', text: "GLBA" },
      { id: 'D', text: "GDPR" }
    ],
    correctOptionId: 'A',
    explanation: "HIPAA (Health Insurance Portability and Accountability Act)."
  },
  {
    id: 'q186',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the formula for ALE?",
    options: [
      { id: 'A', text: "SLE x ARO" },
      { id: 'B', text: "SLE / ARO" },
      { id: 'C', text: "AV x EF" },
      { id: 'D', text: "ROI - TCO" }
    ],
    correctOptionId: 'A',
    explanation: "ALE = SLE * ARO."
  },
  {
    id: 'q187',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "What is the formula for SLE?",
    options: [
      { id: 'A', text: "AV x EF" },
      { id: 'B', text: "ALE / ARO" },
      { id: 'C', text: "Cost x Risk" },
      { id: 'D', text: "Impact + Likelihood" }
    ],
    correctOptionId: 'A',
    explanation: "SLE (Single Loss Expectancy) = Asset Value (AV) * Exposure Factor (EF)."
  },
  {
    id: 'q188',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack uses a pre-computed list of hashes?",
    options: [
      { id: 'A', text: "Rainbow Table" },
      { id: 'B', text: "Brute Force" },
      { id: 'C', text: "Dictionary" },
      { id: 'D', text: "Hybrid" }
    ],
    correctOptionId: 'A',
    explanation: "Rainbow Tables store pre-computed hashes."
  },
  {
    id: 'q189',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which wireless mode allows devices to connect without an AP?",
    options: [
      { id: 'A', text: "Infrastructure" },
      { id: 'B', text: "Ad-hoc" },
      { id: 'C', text: "Bridge" },
      { id: 'D', text: "Repeater" }
    ],
    correctOptionId: 'B',
    explanation: "Ad-hoc (IBSS) is device-to-device, also known as peer-to-peer mode."
  },
  {
    id: 'q190',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which authentication protocol uses tickets?",
    options: [
      { id: 'A', text: "Kerberos" },
      { id: 'B', text: "RADIUS" },
      { id: 'C', text: "TACACS+" },
      { id: 'D', text: "LDAP" }
    ],
    correctOptionId: 'A',
    explanation: "Kerberos uses Ticket Granting Tickets (TGT)."
  },
  {
    id: 'q191',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of evidence is testimony from a witness?",
    options: [
      { id: 'A', text: "Real Evidence" },
      { id: 'B', text: "Documentary Evidence" },
      { id: 'C', text: "Testimonial Evidence" },
      { id: 'D', text: "Demonstrative Evidence" }
    ],
    correctOptionId: 'C',
    explanation: "Testimonial evidence is spoken."
  },
  {
    id: 'q192',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term describes legitimate software that is used for malicious purposes?",
    options: [
      { id: 'A', text: "Grayware" },
      { id: 'B', text: "Bloatware" },
      { id: 'C', text: "Spyware" },
      { id: 'D', text: "Adware" }
    ],
    correctOptionId: 'A',
    explanation: "Grayware (or PUPs) falls between normal software and malware."
  },
  {
    id: 'q193',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which model uses labels (Secret, Top Secret) for access control?",
    options: [
      { id: 'A', text: "DAC" },
      { id: 'B', text: "MAC" },
      { id: 'C', text: "RBAC" },
      { id: 'D', text: "ABAC" }
    ],
    correctOptionId: 'B',
    explanation: "MAC (Mandatory Access Control) uses labels."
  },
  {
    id: 'q194',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which model uses roles (Manager, Clerk) for access control?",
    options: [
      { id: 'A', text: "DAC" },
      { id: 'B', text: "MAC" },
      { id: 'C', text: "RBAC" },
      { id: 'D', text: "Rule-BAC" }
    ],
    correctOptionId: 'C',
    explanation: "RBAC (Role-Based Access Control) uses roles."
  },
  {
    id: 'q195',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which protocol provides time synchronization?",
    options: [
      { id: 'A', text: "NTP" },
      { id: 'B', text: "SNMP" },
      { id: 'C', text: "SMTP" },
      { id: 'D', text: "FTP" }
    ],
    correctOptionId: 'A',
    explanation: "NTP (Network Time Protocol)."
  },
  {
    id: 'q196',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which protocol is used for network management/monitoring?",
    options: [
      { id: 'A', text: "NTP" },
      { id: 'B', text: "SNMP" },
      { id: 'C', text: "SSH" },
      { id: 'D', text: "RDP" }
    ],
    correctOptionId: 'B',
    explanation: "SNMP (Simple Network Management Protocol)."
  },
  {
    id: 'q197',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A vulnerability scan reports a flaw that exists in the software version but cannot be exploited due to existing compensating controls (e.g., WAF). How is this best classified?",
    options: [
      { id: 'A', text: "Low Severity / Informational" },
      { id: 'B', text: "False Positive" },
      { id: 'C', text: "False Negative" },
      { id: 'D', text: "True Negative" }
    ],
    correctOptionId: 'A',
    explanation: "Vulnerabilities that are not exploitable due to environmental factors or controls are often classified as Low Severity or Informational findings."
  },
  {
    id: 'q198',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control type is a warning sign?",
    options: [
      { id: 'A', text: "Preventive" },
      { id: 'B', text: "Detective" },
      { id: 'C', text: "Deterrent" },
      { id: 'D', text: "Corrective" }
    ],
    correctOptionId: 'C',
    explanation: "Signs deter intruders."
  },
  {
    id: 'q199',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control type is a security camera (CCTV)?",
    options: [
      { id: 'A', text: "Preventive" },
      { id: 'B', text: "Detective" },
      { id: 'C', text: "Corrective" },
      { id: 'D', text: "Compensating" }
    ],
    correctOptionId: 'B',
    explanation: "Cameras detect activity (recording)."
  },
  {
    id: 'q200',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control type is a fence?",
    options: [
      { id: 'A', text: "Preventive" },
      { id: 'B', text: "Detective" },
      { id: 'C', text: "Corrective" },
      { id: 'D', text: "Recovery" }
    ],
    correctOptionId: 'A',
    explanation: "Fences physically prevent access."
  },
  // --- NEW BATCH (201-300) ---
  {
    id: 'q201',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An organization wants to combine network security functions with WAN capabilities to support dynamic, secure access needs. Which model BEST fits this requirement?",
    options: [
      { id: 'A', text: "SD-WAN" },
      { id: 'B', text: "SASE (Secure Access Service Edge)" },
      { id: 'C', text: "VPN Concentrator" },
      { id: 'D', text: "MPLS" }
    ],
    correctOptionId: 'B',
    explanation: "SASE converges networking (SD-WAN) and security (SWG, CASB, ZTNA) into a single cloud service."
  },
  {
    id: 'q202',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker modifies an API request to change the ID of the object they are accessing (e.g., changing /user/123 to /user/456) and successfully views another user's data. This is:",
    options: [
      { id: 'A', text: "BOLA (Broken Object Level Authorization)" },
      { id: 'B', text: "SQL Injection" },
      { id: 'C', text: "Mass Assignment" },
      { id: 'D', text: "Improper Asset Management" }
    ],
    correctOptionId: 'A',
    explanation: "BOLA (formerly IDOR) occurs when an API doesn't validate that the user has permission to access the specific object ID requested."
  },
  {
    id: 'q203',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which process identifies the critical business functions and the potential impact of a disruption to those functions?",
    options: [
      { id: 'A', text: "Risk Assessment" },
      { id: 'B', text: "BIA (Business Impact Analysis)" },
      { id: 'C', text: "Vulnerability Assessment" },
      { id: 'D', text: "Penetration Testing" }
    ],
    correctOptionId: 'B',
    explanation: "The Business Impact Analysis (BIA) determines criticality and recovery priorities (RTO/RPO)."
  },
  {
    id: 'q204',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A network engineer needs to analyze traffic volume and flow patterns (source/dest IP, ports) without capturing the full packet payload. Which protocol is BEST?",
    options: [
      { id: 'A', text: "SNMP" },
      { id: 'B', text: "NetFlow/IPFIX" },
      { id: 'C', text: "PCAP" },
      { id: 'D', text: "Syslog" }
    ],
    correctOptionId: 'B',
    explanation: "NetFlow provides metadata about traffic flows rather than full packet contents."
  },
  {
    id: 'q205',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Relying solely on the fact that a system or protocol is unknown to attackers for its security is known as:",
    options: [
      { id: 'A', text: "Defense in Depth" },
      { id: 'B', text: "Security through Obscurity" },
      { id: 'C', text: "Least Privilege" },
      { id: 'D', text: "Zero Trust" }
    ],
    correctOptionId: 'B',
    explanation: "Security through Obscurity is considered a weak practice."
  },
  {
    id: 'q206',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A decentralized computing infrastructure where data, compute, storage, and applications are located somewhere between the data source and the cloud is called:",
    options: [
      { id: 'A', text: "Fog Computing" },
      { id: 'B', text: "Grid Computing" },
      { id: 'C', text: "Serverless" },
      { id: 'D', text: "Mainframe" }
    ],
    correctOptionId: 'A',
    explanation: "Fog computing acts as an intermediate layer between the Edge and the Cloud."
  },
  {
    id: 'q207',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker subtly modifies the training data of a machine learning model to cause it to make incorrect classifications. This is:",
    options: [
      { id: 'A', text: "Model Inversion" },
      { id: 'B', text: "Data Poisoning" },
      { id: 'C', text: "Cryptojacking" },
      { id: 'D', text: "Fuzzing" }
    ],
    correctOptionId: 'B',
    explanation: "Data Poisoning corrupts the training set to compromise the AI model."
  },
  {
    id: 'q208',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "In a SOAR platform, a linear workflow of automated actions executed in response to a specific incident type is called a:",
    options: [
      { id: 'A', text: "Runbook/Playbook" },
      { id: 'B', text: "Log" },
      { id: 'C', text: "Policy" },
      { id: 'D', text: "Rule" }
    ],
    correctOptionId: 'A',
    explanation: "Playbooks (or Runbooks) define the automated steps for incident response."
  },
  {
    id: 'q209',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which document tracks identified risks, their severity, and the status of mitigation efforts?",
    options: [
      { id: 'A', text: "Risk Register" },
      { id: 'B', text: "Asset Inventory" },
      { id: 'C', text: "BIA" },
      { id: 'D', text: "SLA" }
    ],
    correctOptionId: 'A',
    explanation: "A Risk Register is the central repository for all identified risks."
  },
  {
    id: 'q210',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which software architecture style structures an application as a collection of loosely coupled services?",
    options: [
      { id: 'A', text: "Monolithic" },
      { id: 'B', text: "Microservices" },
      { id: 'C', text: "Waterfall" },
      { id: 'D', text: "Agile" }
    ],
    correctOptionId: 'B',
    explanation: "Microservices break applications into small, independent services communicating via APIs."
  },
  {
    id: 'q211',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A type of malware that waits for a specific event or time to execute its malicious payload is a:",
    options: [
      { id: 'A', text: "Logic Bomb" },
      { id: 'B', text: "Worm" },
      { id: 'C', text: "Trojan" },
      { id: 'D', text: "Ransomware" }
    ],
    correctOptionId: 'A',
    explanation: "Logic bombs trigger on specific conditions (e.g., date, user action)."
  },
  {
    id: 'q212',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of error occurs when a biometric system incorrectly rejects an authorized user?",
    options: [
      { id: 'A', text: "Type I (False Rejection Rate - FRR)" },
      { id: 'B', text: "Type II (False Acceptance Rate - FAR)" },
      { id: 'C', text: "Crossover Error Rate (CER)" },
      { id: 'D', text: "Type III" }
    ],
    correctOptionId: 'A',
    explanation: "FRR (Type I) is rejecting a valid user (inconvenience)."
  },
  {
    id: 'q213',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of error occurs when a biometric system incorrectly accepts an unauthorized user?",
    options: [
      { id: 'A', text: "Type I (FRR)" },
      { id: 'B', text: "Type II (FAR)" },
      { id: 'C', text: "CER" },
      { id: 'D', text: "Calibration Error" }
    ],
    correctOptionId: 'B',
    explanation: "FAR (Type II) is accepting an imposter (security breach)."
  },
  {
    id: 'q214',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A data center uses a layout where the fronts of server racks face each other to optimize cooling. This is:",
    options: [
      { id: 'A', text: "Hot/Cold Aisle Containment" },
      { id: 'B', text: "Air Gapping" },
      { id: 'C', text: "HVAC Zoning" },
      { id: 'D', text: "Raised Floor" }
    ],
    correctOptionId: 'A',
    explanation: "Hot/Cold aisles manage airflow efficiency."
  },
  {
    id: 'q215',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which fire extinguisher class is designed for electrical fires?",
    options: [
      { id: 'A', text: "Class A" },
      { id: 'B', text: "Class B" },
      { id: 'C', text: "Class C" },
      { id: 'D', text: "Class K" }
    ],
    correctOptionId: 'C',
    explanation: "Class C is for electrical equipment."
  },
  {
    id: 'q216',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The concept that data is subject to the laws of the country in which it is physically located is:",
    options: [
      { id: 'A', text: "Data Sovereignty" },
      { id: 'B', text: "Data Classification" },
      { id: 'C', text: "Data Loss Prevention" },
      { id: 'D', text: "Digital Rights Management" }
    ],
    correctOptionId: 'A',
    explanation: "Data Sovereignty deals with jurisdiction and legal requirements based on location."
  },
  {
    id: 'q217',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which data destruction method involves using a strong magnetic field to erase data from magnetic media?",
    options: [
      { id: 'A', text: "Shredding" },
      { id: 'B', text: "Pulping" },
      { id: 'C', text: "Degaussing" },
      { id: 'D', text: "Formatting" }
    ],
    correctOptionId: 'C',
    explanation: "Degaussing destroys magnetic domains on HDDs and tapes."
  },
  {
    id: 'q218',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which security feature ensures that the boot loader signature is trusted by the hardware before loading the OS?",
    options: [
      { id: 'A', text: "Full Disk Encryption" },
      { id: 'B', text: "Secure Boot" },
      { id: 'C', text: "BIOS Password" },
      { id: 'D', text: "Remote Attestation" }
    ],
    correctOptionId: 'B',
    explanation: "Secure Boot (part of UEFI) validates digital signatures of bootloaders."
  },
  {
    id: 'q219',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which endpoint solution focuses on behavioral analysis to identify and block malicious activity rather than just signatures?",
    options: [
      { id: 'A', text: "Traditional Antivirus" },
      { id: 'B', text: "EDR (Endpoint Detection and Response)" },
      { id: 'C', text: "Host Firewall" },
      { id: 'D', text: "Disk Encryption" }
    ],
    correctOptionId: 'B',
    explanation: "EDR uses behavioral analysis to detect advanced threats."
  },
  {
    id: 'q220',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which network security solution redirects malicious traffic to a non-existent or monitored destination to protect the production network?",
    options: [
      { id: 'A', text: "Sinkhole" },
      { id: 'B', text: "Jump Server" },
      { id: 'C', text: "Load Balancer" },
      { id: 'D', text: "Forward Proxy" }
    ],
    correctOptionId: 'A',
    explanation: "Sinkholing routes traffic (often botnet C2 traffic) to a dead end."
  },
  {
    id: 'q221',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Hiding a secret message within the pixels of an image file is an example of:",
    options: [
      { id: 'A', text: "Encryption" },
      { id: 'B', text: "Steganography" },
      { id: 'C', text: "Hashing" },
      { id: 'D', text: "Obfuscation" }
    ],
    correctOptionId: 'B',
    explanation: "Steganography is the art of hiding data within other data."
  },
  {
    id: 'q222',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which emerging technology poses a significant threat to current public-key encryption algorithms (like RSA and ECC)?",
    options: [
      { id: 'A', text: "Blockchain" },
      { id: 'B', text: "Quantum Computing" },
      { id: 'C', text: "5G" },
      { id: 'D', text: "Edge Computing" }
    ],
    correctOptionId: 'B',
    explanation: "Quantum computers (using Shor's algorithm) could break current asymmetric crypto."
  },
  {
    id: 'q223',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cryptographic concept involves a decentralized, immutable ledger shared across a network?",
    options: [
      { id: 'A', text: "PKI" },
      { id: 'B', text: "Blockchain" },
      { id: 'C', text: "Tor" },
      { id: 'D', text: "Mesh Network" }
    ],
    correctOptionId: 'B',
    explanation: "Blockchain is a distributed ledger technology."
  },
  {
    id: 'q224',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which resiliency technique involves using two or more network interface cards (NICs) to increase bandwidth and provide redundancy?",
    options: [
      { id: 'A', text: "NIC Teaming" },
      { id: 'B', text: "Port Mirroring" },
      { id: 'C', text: "VLAN Tagging" },
      { id: 'D', text: "MAC Filtering" }
    ],
    correctOptionId: 'A',
    explanation: "NIC Teaming (bonding) aggregates links for speed and failover."
  },
  {
    id: 'q225',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which power device provides short-term battery backup to allow for graceful shutdown or transition to a generator?",
    options: [
      { id: 'A', text: "PDU" },
      { id: 'B', text: "UPS" },
      { id: 'C', text: "HVAC" },
      { id: 'D', text: "Line Conditioner" }
    ],
    correctOptionId: 'B',
    explanation: "UPS (Uninterruptible Power Supply) bridges short power gaps."
  },
  {
    id: 'q226',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A snapshot captures the state of a:",
    options: [
      { id: 'A', text: "Database transaction" },
      { id: 'B', text: "Virtual Machine" },
      { id: 'C', text: "Network flow" },
      { id: 'D', text: "Physical Switch" }
    ],
    correctOptionId: 'B',
    explanation: "Snapshots allow rolling back a VM to a specific point in time."
  },
  {
    id: 'q227',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which legal concept involves placing a suspension on the deletion of data that might be relevant to a lawsuit?",
    options: [
      { id: 'A', text: "Chain of Custody" },
      { id: 'B', text: "Legal Hold" },
      { id: 'C', text: "Data Sovereignty" },
      { id: 'D', text: "Due Diligence" }
    ],
    correctOptionId: 'B',
    explanation: "A Legal Hold preserves data for litigation."
  },
  {
    id: 'q228',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which clause in a cloud contract ensures the customer has permission to perform vulnerability scans and penetration tests?",
    options: [
      { id: 'A', text: "Right to Audit" },
      { id: 'B', text: "SLA" },
      { id: 'C', text: "Non-compete" },
      { id: 'D', text: "Indemnification" }
    ],
    correctOptionId: 'A',
    explanation: "Right to Audit allows verification of security controls."
  },
  {
    id: 'q229',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Software that is no longer supported by the vendor and receives no security updates is known as:",
    options: [
      { id: 'A', text: "Open Source" },
      { id: 'B', text: "EOL (End of Life)" },
      { id: 'C', text: "Beta" },
      { id: 'D', text: "Legacy (if supported)" }
    ],
    correctOptionId: 'B',
    explanation: "EOL software poses a high risk due to lack of patches."
  },
  {
    id: 'q230',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which protocol creates a trusted relationship between organizations, allowing a user to log in once and access resources across domains?",
    options: [
      { id: 'A', text: "Federation" },
      { id: 'B', text: "Segmentation" },
      { id: 'C', text: "Encapsulation" },
      { id: 'D', text: "Isolation" }
    ],
    correctOptionId: 'A',
    explanation: "Federation links identity management systems."
  },
  {
    id: 'q231',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which identity protocol uses JSON Web Tokens (JWT) and is often paired with OAuth 2.0?",
    options: [
      { id: 'A', text: "SAML" },
      { id: 'B', text: "OIDC (OpenID Connect)" },
      { id: 'C', text: "Kerberos" },
      { id: 'D', text: "LDAP" }
    ],
    correctOptionId: 'B',
    explanation: "OIDC builds on OAuth 2.0 to provide authentication using JSON."
  },
  {
    id: 'q232',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which legacy authentication protocol is vulnerable to Pass-the-Hash attacks?",
    options: [
      { id: 'A', text: "Kerberos" },
      { id: 'B', text: "NTLM" },
      { id: 'C', text: "OIDC" },
      { id: 'D', text: "SAML" }
    ],
    correctOptionId: 'B',
    explanation: "NTLM stores password hashes that can be replayed/passed."
  },
  {
    id: 'q233',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which access control model grants access based on environment variables like time, location, and device hygiene?",
    options: [
      { id: 'A', text: "RBAC" },
      { id: 'B', text: "ABAC (Attribute-Based Access Control)" },
      { id: 'C', text: "DAC" },
      { id: 'D', text: "MAC" }
    ],
    correctOptionId: 'B',
    explanation: "ABAC uses complex attributes and context."
  },
  {
    id: 'q234',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which security principle requires that privileges are granted only for the time they are needed and then revoked?",
    options: [
      { id: 'A', text: "Least Privilege" },
      { id: 'B', text: "Just-in-Time (JIT) Access" },
      { id: 'C', text: "Separation of Duties" },
      { id: 'D', text: "Defense in Depth" }
    ],
    correctOptionId: 'B',
    explanation: "JIT access minimizes the window of opportunity for attackers."
  },
  {
    id: 'q235',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker poisons the ARP cache of two devices to intercept traffic between them. This is a:",
    options: [
      { id: 'A', text: "On-path (Man-in-the-Middle) Attack" },
      { id: 'B', text: "DDoS" },
      { id: 'C', text: "Replay Attack" },
      { id: 'D', text: "Smurf Attack" }
    ],
    correctOptionId: 'A',
    explanation: "ARP poisoning allows an attacker to place themselves in the middle of the conversation."
  },
  {
    id: 'q236',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack involves an unauthorized access point connected to a secure network, bypassing security controls?",
    options: [
      { id: 'A', text: "Evil Twin" },
      { id: 'B', text: "Rogue Access Point" },
      { id: 'C', text: "Bluejacking" },
      { id: 'D', text: "Jamming" }
    ],
    correctOptionId: 'B',
    explanation: "A Rogue AP is an unauthorized device on the network."
  },
  {
    id: 'q237',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "An attacker sets up a Wi-Fi access point with the same SSID as a legitimate network to trick users into connecting. This is a:",
    options: [
      { id: 'A', text: "Rogue AP" },
      { id: 'B', text: "Evil Twin" },
      { id: 'C', text: "War Driving" },
      { id: 'D', text: "Disassociation Attack" }
    ],
    correctOptionId: 'B',
    explanation: "Evil Twin impersonates a legitimate network."
  },
  {
    id: 'q238',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Sending random, invalid, or unexpected data to an application to cause it to crash or behave unexpectedly is:",
    options: [
      { id: 'A', text: "Fuzzing" },
      { id: 'B', text: "Debugging" },
      { id: 'C', text: "Reverse Engineering" },
      { id: 'D', text: "Sandboxing" }
    ],
    correctOptionId: 'A',
    explanation: "Fuzzing is a dynamic analysis technique."
  },
  {
    id: 'q239',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cloud computing model runs code in response to events without provisioning servers (e.g., AWS Lambda)?",
    options: [
      { id: 'A', text: "IaaS" },
      { id: 'B', text: "Serverless / FaaS" },
      { id: 'C', text: "PaaS" },
      { id: 'D', text: "SaaS" }
    ],
    correctOptionId: 'B',
    explanation: "Function as a Service (FaaS) is serverless computing."
  },
  {
    id: 'q240',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "A cryptographic weakness where two different inputs produce the same hash output is a:",
    options: [
      { id: 'A', text: "Collision" },
      { id: 'B', text: "Pre-image" },
      { id: 'C', text: "Rainbow Table" },
      { id: 'D', text: "Salt" }
    ],
    correctOptionId: 'A',
    explanation: "Hash collisions compromise integrity."
  },
  {
    id: 'q241',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which physical security control is designed to block wireless signals?",
    options: [
      { id: 'A', text: "Bollard" },
      { id: 'B', text: "Faraday Cage" },
      { id: 'C', text: "Air Gap" },
      { id: 'D', text: "Screen Filter" }
    ],
    correctOptionId: 'B',
    explanation: "Faraday cages block EMF/RF signals."
  },
  {
    id: 'q242',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term describes the residual data left on a storage medium after deletion?",
    options: [
      { id: 'A', text: "Data Remanence" },
      { id: 'B', text: "Data Rot" },
      { id: 'C', text: "Slack Space" },
      { id: 'D', text: "Metadata" }
    ],
    correctOptionId: 'A',
    explanation: "Data remanence is the data remaining after an attempt to delete it."
  },
  {
    id: 'q243',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which protocol is used to discover the MAC address associated with a known IP address?",
    options: [
      { id: 'A', text: "DNS" },
      { id: 'B', text: "ARP" },
      { id: 'C', text: "DHCP" },
      { id: 'D', text: "RARP" }
    ],
    correctOptionId: 'B',
    explanation: "ARP (Address Resolution Protocol) resolves IP to MAC."
  },
  {
    id: 'q244',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term refers to legitimate emails being blocked by a spam filter?",
    options: [
      { id: 'A', text: "False Positive" },
      { id: 'B', text: "False Negative" },
      { id: 'C', text: "True Positive" },
      { id: 'D', text: "True Negative" }
    ],
    correctOptionId: 'A',
    explanation: "False Positive is blocking good traffic."
  },
  {
    id: 'q245',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which concept refers to an organization's ability to continue critical functions during a disruption?",
    options: [
      { id: 'A', text: "High Availability" },
      { id: 'B', text: "Business Continuity" },
      { id: 'C', text: "Disaster Recovery" },
      { id: 'D', text: "Fault Tolerance" }
    ],
    correctOptionId: 'B',
    explanation: "Business Continuity covers the broader organizational ability to persist."
  },
  {
    id: 'q246',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Using live Linux media to boot a system for forensic analysis without mounting the internal drive read-write ensures:",
    options: [
      { id: 'A', text: "Data Integrity" },
      { id: 'B', text: "Confidentiality" },
      { id: 'C', text: "Availability" },
      { id: 'D', text: "Obfuscation" }
    ],
    correctOptionId: 'A',
    explanation: "Prevents modification of evidence."
  },
  {
    id: 'q247',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which group approves changes to the IT environment to minimize risk?",
    options: [
      { id: 'A', text: "SOC" },
      { id: 'B', text: "CAB (Change Advisory Board)" },
      { id: 'C', text: "NOC" },
      { id: 'D', text: "HR" }
    ],
    correctOptionId: 'B',
    explanation: "The CAB reviews and approves changes."
  },
  {
    id: 'q248',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which specialized system controls industrial machinery and critical infrastructure?",
    options: [
      { id: 'A', text: "ICS/SCADA" },
      { id: 'B', text: "IoT" },
      { id: 'C', text: "SoC" },
      { id: 'D', text: "VoIP" }
    ],
    correctOptionId: 'A',
    explanation: "SCADA systems control industrial processes."
  },
  {
    id: 'q249',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which network device filters traffic based on MAC addresses at Layer 2?",
    options: [
      { id: 'A', text: "Hub" },
      { id: 'B', text: "Switch" },
      { id: 'C', text: "Router" },
      { id: 'D', text: "Load Balancer" }
    ],
    correctOptionId: 'B',
    explanation: "Switches operate primarily at Layer 2."
  },
  {
    id: 'q250',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Malware that records every keystroke a user makes is a:",
    options: [
      { id: 'A', text: "Keylogger" },
      { id: 'B', text: "Worm" },
      { id: 'C', text: "Adware" },
      { id: 'D', text: "Logic Bomb" }
    ],
    correctOptionId: 'A',
    explanation: "Keyloggers steal credentials and data."
  },
  {
    id: 'q251',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control ensures a user can access resources from 9am to 5pm only?",
    options: [
      { id: 'A', text: "Time-of-day Restriction" },
      { id: 'B', text: "Location-based Access" },
      { id: 'C', text: "Role-based Access" },
      { id: 'D', text: "Discretionary Access" }
    ],
    correctOptionId: 'A',
    explanation: "Time restrictions limit access windows."
  },
  {
    id: 'q252',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term describes a system that has no single point of failure?",
    options: [
      { id: 'A', text: "Fault Tolerant" },
      { id: 'B', text: "Scalable" },
      { id: 'C', text: "Elastic" },
      { id: 'D', text: "Integrity" }
    ],
    correctOptionId: 'A',
    explanation: "Fault tolerance allows operation to continue after a component failure."
  },
  {
    id: 'q253',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which solution acts as a gateway for IoT devices to process data before sending it to the cloud?",
    options: [
      { id: 'A', text: "Edge Gateway" },
      { id: 'B', text: "Cloud Broker" },
      { id: 'C', text: "Proxy" },
      { id: 'D', text: "Firewall" }
    ],
    correctOptionId: 'A',
    explanation: "Edge gateways aggregate and process IoT data locally."
  },
  {
    id: 'q254',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which protocol is used to securely upload files to a web server?",
    options: [
      { id: 'A', text: "FTP" },
      { id: 'B', text: "SFTP" },
      { id: 'C', text: "TFTP" },
      { id: 'D', text: "Telnet" }
    ],
    correctOptionId: 'B',
    explanation: "SFTP uses SSH for secure transfer."
  },
  {
    id: 'q255',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack exploits the fact that an operating system uses a temporary file to store data?",
    options: [
      { id: 'A', text: "Race Condition" },
      { id: 'B', text: "Buffer Overflow" },
      { id: 'C', text: "Integer Overflow" },
      { id: 'D', text: "SQL Injection" }
    ],
    correctOptionId: 'A',
    explanation: "Race conditions (TOC/TOU) often exploit temporary file handling."
  },
  {
    id: 'q256',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of proxy is used to protect a web server from internet traffic?",
    options: [
      { id: 'A', text: "Forward Proxy" },
      { id: 'B', text: "Reverse Proxy" },
      { id: 'C', text: "Open Proxy" },
      { id: 'D', text: "Transparent Proxy" }
    ],
    correctOptionId: 'B',
    explanation: "Reverse proxies sit in front of servers."
  },
  {
    id: 'q257',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which phase of the software development lifecycle involves scanning code for vulnerabilities?",
    options: [
      { id: 'A', text: "Testing" },
      { id: 'B', text: "Design" },
      { id: 'C', text: "Requirements" },
      { id: 'D', text: "Deployment" }
    ],
    correctOptionId: 'A',
    explanation: "Testing (SAST/DAST) happens before deployment."
  },
  {
    id: 'q258',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cloud service model provides the most control to the customer?",
    options: [
      { id: 'A', text: "IaaS" },
      { id: 'B', text: "PaaS" },
      { id: 'C', text: "SaaS" },
      { id: 'D', text: "DaaS" }
    ],
    correctOptionId: 'A',
    explanation: "IaaS provides OS/Infrastructure control."
  },
  {
    id: 'q259',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of password attack uses a pre-arranged list of likely passwords?",
    options: [
      { id: 'A', text: "Dictionary Attack" },
      { id: 'B', text: "Brute Force" },
      { id: 'C', text: "Rainbow Table" },
      { id: 'D', text: "Birthday Attack" }
    ],
    correctOptionId: 'A',
    explanation: "Dictionary attacks use wordlists."
  },
  {
    id: 'q260',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which wireless configuration prevents devices from communicating with each other on the same AP?",
    options: [
      { id: 'A', text: "SSID Isolation / Client Isolation" },
      { id: 'B', text: "MAC Filtering" },
      { id: 'C', text: "WPA2" },
      { id: 'D', text: "Geofencing" }
    ],
    correctOptionId: 'A',
    explanation: "Isolation prevents peer-to-peer traffic."
  },
  {
    id: 'q261',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which command verifies connectivity to a remote host?",
    options: [
      { id: 'A', text: "ping" },
      { id: 'B', text: "ipconfig" },
      { id: 'C', text: "route" },
      { id: 'D', text: "arp" }
    ],
    correctOptionId: 'A',
    explanation: "Ping checks connectivity."
  },
  {
    id: 'q262',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which plan details how to communicate with stakeholders during a crisis?",
    options: [
      { id: 'A', text: "Communication Plan" },
      { id: 'B', text: "BIA" },
      { id: 'C', text: "SLA" },
      { id: 'D', text: "NDA" }
    ],
    correctOptionId: 'A',
    explanation: "Crisis communication plans are essential."
  },
  {
    id: 'q263',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which solution creates a software-defined perimeter?",
    options: [
      { id: 'A', text: "SDP" },
      { id: 'B', text: "VPN" },
      { id: 'C', text: "VLAN" },
      { id: 'D', text: "NAT" }
    ],
    correctOptionId: 'A',
    explanation: "SDP hides infrastructure (Dark Cloud)."
  },
  {
    id: 'q264',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack exploits a buffer that cannot handle the amount of data sent to it?",
    options: [
      { id: 'A', text: "Buffer Overflow" },
      { id: 'B', text: "SQL Injection" },
      { id: 'C', text: "XSS" },
      { id: 'D', text: "CSRF" }
    ],
    correctOptionId: 'A',
    explanation: "Overwriting memory adjacent to the buffer."
  },
  {
    id: 'q265',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control type restores a system from backup?",
    options: [
      { id: 'A', text: "Corrective" },
      { id: 'B', text: "Preventive" },
      { id: 'C', text: "Detective" },
      { id: 'D', text: "Deterrent" }
    ],
    correctOptionId: 'A',
    explanation: "Restoration is a corrective action."
  },
  {
    id: 'q266',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which technology allows multiple operating systems to run on one physical server?",
    options: [
      { id: 'A', text: "Virtualization" },
      { id: 'B', text: "Encryption" },
      { id: 'C', text: "Hashing" },
      { id: 'D', text: "Clustering" }
    ],
    correctOptionId: 'A',
    explanation: "Virtualization (Hypervisor)."
  },
  {
    id: 'q267',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which log contains information about user logins and logouts?",
    options: [
      { id: 'A', text: "Security Log" },
      { id: 'B', text: "System Log" },
      { id: 'C', text: "Application Log" },
      { id: 'D', text: "DNS Log" }
    ],
    correctOptionId: 'A',
    explanation: "Security logs track auth events."
  },
  {
    id: 'q268',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack forces a user to view unwanted ads?",
    options: [
      { id: 'A', text: "Adware" },
      { id: 'B', text: "Spyware" },
      { id: 'C', text: "Ransomware" },
      { id: 'D', text: "Rootkit" }
    ],
    correctOptionId: 'A',
    explanation: "Adware displays advertisements."
  },
  {
    id: 'q269',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cryptography uses a shared secret key?",
    options: [
      { id: 'A', text: "Symmetric" },
      { id: 'B', text: "Asymmetric" },
      { id: 'C', text: "Hashing" },
      { id: 'D', text: "PKI" }
    ],
    correctOptionId: 'A',
    explanation: "Symmetric uses one key."
  },
  {
    id: 'q270',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cryptography uses a key pair?",
    options: [
      { id: 'A', text: "Asymmetric" },
      { id: 'B', text: "Symmetric" },
      { id: 'C', text: "Hashing" },
      { id: 'D', text: "AES" }
    ],
    correctOptionId: 'A',
    explanation: "Asymmetric uses Public/Private keys."
  },
  {
    id: 'q271',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which role is responsible for legal compliance?",
    options: [
      { id: 'A', text: "Compliance Officer" },
      { id: 'B', text: "System Admin" },
      { id: 'C', text: "Data Custodian" },
      { id: 'D', text: "User" }
    ],
    correctOptionId: 'A',
    explanation: "Compliance Officers ensure regulation adherence."
  },
  {
    id: 'q272',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which backup type is fastest to restore?",
    options: [
      { id: 'A', text: "Full" },
      { id: 'B', text: "Incremental" },
      { id: 'C', text: "Differential" },
      { id: 'D', text: "Tape" }
    ],
    correctOptionId: 'A',
    explanation: "Full backups require only one media set to restore."
  },
  {
    id: 'q273',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack uses a phone call to trick a user?",
    options: [
      { id: 'A', text: "Vishing" },
      { id: 'B', text: "Phishing" },
      { id: 'C', text: "Smishing" },
      { id: 'D', text: "Spim" }
    ],
    correctOptionId: 'A',
    explanation: "Voice Phishing."
  },
  {
    id: 'q274',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which device distributes network traffic across multiple servers?",
    options: [
      { id: 'A', text: "Load Balancer" },
      { id: 'B', text: "Router" },
      { id: 'C', text: "Switch" },
      { id: 'D', text: "Firewall" }
    ],
    correctOptionId: 'A',
    explanation: "Load balancers improve availability."
  },
  {
    id: 'q275',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which port is used for RDP?",
    options: [
      { id: 'A', text: "3389" },
      { id: 'B', text: "22" },
      { id: 'C', text: "443" },
      { id: 'D', text: "80" }
    ],
    correctOptionId: 'A',
    explanation: "3389 is Remote Desktop Protocol."
  },
  {
    id: 'q276',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which port is used for SSH?",
    options: [
      { id: 'A', text: "22" },
      { id: 'B', text: "23" },
      { id: 'C', text: "21" },
      { id: 'D', text: "80" }
    ],
    correctOptionId: 'A',
    explanation: "22 is SSH."
  },
  {
    id: 'q277',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which port is used for Telnet?",
    options: [
      { id: 'A', text: "23" },
      { id: 'B', text: "22" },
      { id: 'C', text: "21" },
      { id: 'D', text: "25" }
    ],
    correctOptionId: 'A',
    explanation: "23 is Telnet (Unsecure)."
  },
  {
    id: 'q278',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which port is used for FTP Control?",
    options: [
      { id: 'A', text: "21" },
      { id: 'B', text: "20" },
      { id: 'C', text: "22" },
      { id: 'D', text: "23" }
    ],
    correctOptionId: 'A',
    explanation: "21 is FTP command."
  },
  {
    id: 'q279',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack aims to steal intellectual property?",
    options: [
      { id: 'A', text: "Espionage" },
      { id: 'B', text: "DoS" },
      { id: 'C', text: "Defacement" },
      { id: 'D', text: "Pranking" }
    ],
    correctOptionId: 'A',
    explanation: "Espionage targets IP."
  },
  {
    id: 'q280',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control type is an audit log?",
    options: [
      { id: 'A', text: "Detective" },
      { id: 'B', text: "Preventive" },
      { id: 'C', text: "Corrective" },
      { id: 'D', text: "Directive" }
    ],
    correctOptionId: 'A',
    explanation: "Logs are for detection."
  },
  {
    id: 'q281',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of RAID provides no redundancy?",
    options: [
      { id: 'A', text: "RAID 0" },
      { id: 'B', text: "RAID 1" },
      { id: 'C', text: "RAID 5" },
      { id: 'D', text: "RAID 6" }
    ],
    correctOptionId: 'A',
    explanation: "RAID 0 is striping only."
  },
  {
    id: 'q282',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack uses SMS?",
    options: [
      { id: 'A', text: "Smishing" },
      { id: 'B', text: "Vishing" },
      { id: 'C', text: "Phishing" },
      { id: 'D', text: "Whaling" }
    ],
    correctOptionId: 'A',
    explanation: "SMS Phishing."
  },
  {
    id: 'q283',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which wireless standard is WiFi 6?",
    options: [
      { id: 'A', text: "802.11ax" },
      { id: 'B', text: "802.11ac" },
      { id: 'C', text: "802.11n" },
      { id: 'D', text: "802.11g" }
    ],
    correctOptionId: 'A',
    explanation: "802.11ax."
  },
  {
    id: 'q284',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which document defines how data should be destroyed?",
    options: [
      { id: 'A', text: "Disposal Policy" },
      { id: 'B', text: "Retention Policy" },
      { id: 'C', text: "Classification Policy" },
      { id: 'D', text: "AUP" }
    ],
    correctOptionId: 'A',
    explanation: "Sanitization/Disposal policies."
  },
  {
    id: 'q285',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which command displays the routing table?",
    options: [
      { id: 'A', text: "route" },
      { id: 'B', text: "ping" },
      { id: 'C', text: "ipconfig" },
      { id: 'D', text: "dig" }
    ],
    correctOptionId: 'A',
    explanation: "route print or netstat -r."
  },
  {
    id: 'q286',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack attempts to overflow a variable?",
    options: [
      { id: 'A', text: "Integer Overflow" },
      { id: 'B', text: "SQLi" },
      { id: 'C', text: "XSS" },
      { id: 'D', text: "CSRF" }
    ],
    correctOptionId: 'A',
    explanation: "Exceeding integer limits."
  },
  {
    id: 'q287',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which solution restricts network access based on health?",
    options: [
      { id: 'A', text: "NAC" },
      { id: 'B', text: "VPN" },
      { id: 'C', text: "Firewall" },
      { id: 'D', text: "IDS" }
    ],
    correctOptionId: 'A',
    explanation: "Network Access Control."
  },
  {
    id: 'q288',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term refers to the likelihood of a threat exploiting a vulnerability?",
    options: [
      { id: 'A', text: "Risk" },
      { id: 'B', text: "Impact" },
      { id: 'C', text: "Asset" },
      { id: 'D', text: "Control" }
    ],
    correctOptionId: 'A',
    explanation: "Risk = Probability x Impact."
  },
  {
    id: 'q289',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which port is used for SMB?",
    options: [
      { id: 'A', text: "445" },
      { id: 'B', text: "139" },
      { id: 'C', text: "22" },
      { id: 'D', text: "80" }
    ],
    correctOptionId: 'A',
    explanation: "445 is SMB over TCP."
  },
  {
    id: 'q290',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack uses bots?",
    options: [
      { id: 'A', text: "Botnet" },
      { id: 'B', text: "Worm" },
      { id: 'C', text: "Virus" },
      { id: 'D', text: "Trojan" }
    ],
    correctOptionId: 'A',
    explanation: "Botnets are networks of compromised zombies."
  },
  {
    id: 'q291',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which type of site has utilities but no equipment?",
    options: [
      { id: 'A', text: "Cold Site" },
      { id: 'B', text: "Warm Site" },
      { id: 'C', text: "Hot Site" },
      { id: 'D', text: "Mobile Site" }
    ],
    correctOptionId: 'A',
    explanation: "Cold sites are empty shells."
  },
  {
    id: 'q292',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which cloud model is exclusively for one org?",
    options: [
      { id: 'A', text: "Private" },
      { id: 'B', text: "Public" },
      { id: 'C', text: "Hybrid" },
      { id: 'D', text: "Community" }
    ],
    correctOptionId: 'A',
    explanation: "Private cloud."
  },
  {
    id: 'q293',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which tool captures traffic?",
    options: [
      { id: 'A', text: "Sniffer" },
      { id: 'B', text: "Scanner" },
      { id: 'C', text: "Fuzzer" },
      { id: 'D', text: "Cracker" }
    ],
    correctOptionId: 'A',
    explanation: "Packet sniffers capture data."
  },
  {
    id: 'q294',
    domain: SecurityDomain.MANAGEMENT,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which term describes the maximum data loss allowed?",
    options: [
      { id: 'A', text: "RPO" },
      { id: 'B', text: "RTO" },
      { id: 'C', text: "MTBF" },
      { id: 'D', text: "MTTR" }
    ],
    correctOptionId: 'A',
    explanation: "Recovery Point Objective."
  },
  {
    id: 'q295',
    domain: SecurityDomain.THREATS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which attack captures and replays authentication data?",
    options: [
      { id: 'A', text: "Replay" },
      { id: 'B', text: "Relay" },
      { id: 'C', text: "DoS" },
      { id: 'D', text: "Spoofing" }
    ],
    correctOptionId: 'A',
    explanation: "Replay attacks reuse valid data."
  },
  {
    id: 'q296',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which hash is 128 bits?",
    options: [
      { id: 'A', text: "MD5" },
      { id: 'B', text: "SHA-1" },
      { id: 'C', text: "SHA-256" },
      { id: 'D', text: "RIPEMD" }
    ],
    correctOptionId: 'A',
    explanation: "MD5."
  },
  {
    id: 'q297',
    domain: SecurityDomain.ARCHITECTURE,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which hash is 160 bits?",
    options: [
      { id: 'A', text: "SHA-1" },
      { id: 'B', text: "MD5" },
      { id: 'C', text: "SHA-256" },
      { id: 'D', text: "NTLM" }
    ],
    correctOptionId: 'A',
    explanation: "SHA-1."
  },
  {
    id: 'q298',
    domain: SecurityDomain.OPERATIONS,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which incident response phase involves lessons learned?",
    options: [
      { id: 'A', text: "Post-Incident Activity" },
      { id: 'B', text: "Preparation" },
      { id: 'C', text: "Detection" },
      { id: 'D', text: "Analysis" }
    ],
    correctOptionId: 'A',
    explanation: "Reviewing the incident."
  },
  {
    id: 'q299',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which control is a door lock?",
    options: [
      { id: 'A', text: "Preventive" },
      { id: 'B', text: "Detective" },
      { id: 'C', text: "Corrective" },
      { id: 'D', text: "Compensating" }
    ],
    correctOptionId: 'A',
    explanation: "Prevents entry."
  },
  {
    id: 'q300',
    domain: SecurityDomain.GENERAL,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "Which concept ensures data is accurate?",
    options: [
      { id: 'A', text: "Integrity" },
      { id: 'B', text: "Confidentiality" },
      { id: 'C', text: "Availability" },
      { id: 'D', text: "Privacy" }
    ],
    correctOptionId: 'A',
    explanation: "Integrity."
  }
];
