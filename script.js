"use strict";

const STORAGE_KEY = "maatriraksha-demo-records-v1";
const LANGUAGE_KEY = "maatriraksha-language-v1";

const facilities = [
  {
    id: "sample-community",
    name: { en: "Sample Community Health Centre", hi: "नमूना सामुदायिक स्वास्थ्य केंद्र", mr: "नमुना समुदाय आरोग्य केंद्र" },
    type: "CHC",
    address: { en: "Example block, sample district", hi: "उदाहरण ब्लॉक, नमूना जिला", mr: "उदाहरण तालुका, नमुना जिल्हा" },
    phone: "000-000-0000",
    information: { en: "Demonstration facility listing. Confirm local referral arrangements directly.", hi: "प्रदर्शन हेतु सुविधा सूची। स्थानीय रेफरल व्यवस्था की पुष्टि करें।", mr: "प्रात्यक्षिकासाठी सुविधा सूची. स्थानिक संदर्भ व्यवस्थेची खात्री करा." }
  },
  {
    id: "sample-subdistrict",
    name: { en: "Sample Sub-District Hospital", hi: "नमूना उप-जिला अस्पताल", mr: "नमुना उपजिल्हा रुग्णालय" },
    type: "SDH",
    address: { en: "Example town, sample district", hi: "उदाहरण नगर, नमूना जिला", mr: "उदाहरण शहर, नमुना जिल्हा" },
    phone: "000-000-0001",
    information: { en: "Demonstration facility listing. Services and contact details are not verified.", hi: "प्रदर्शन हेतु सुविधा सूची। सेवाओं और संपर्क विवरण की पुष्टि नहीं की गई है।", mr: "प्रात्यक्षिकासाठी सुविधा सूची. सेवा आणि संपर्क तपशील सत्यापित नाहीत." }
  },
  {
    id: "sample-district",
    name: { en: "Sample District Hospital", hi: "नमूना जिला अस्पताल", mr: "नमुना जिल्हा रुग्णालय" },
    type: "DH",
    address: { en: "Example district headquarters", hi: "उदाहरण जिला मुख्यालय", mr: "उदाहरण जिल्हा मुख्यालय" },
    phone: "",
    information: { en: "Demonstration facility listing. No real-time service or availability information.", hi: "प्रदर्शन हेतु सुविधा सूची। सेवा या उपलब्धता की वास्तविक समय जानकारी नहीं है।", mr: "प्रात्यक्षिकासाठी सुविधा सूची. सेवा किंवा उपलब्धतेची थेट माहिती नाही." }
  }
];

const questions = [
  { id: "bleeding", en: "Heavy vaginal bleeding", hi: "योनि से बहुत अधिक रक्तस्राव", mr: "योनीतून खूप जास्त रक्तस्राव" },
  { id: "headache", en: "Severe headache or blurred vision", hi: "तेज सिरदर्द या धुंधला दिखना", mr: "तीव्र डोकेदुखी किंवा धूसर दिसणे" },
  { id: "convulsions", en: "Convulsions or loss of consciousness", hi: "दौरे पड़ना या बेहोशी", mr: "आकडी येणे किंवा बेशुद्ध होणे" },
  { id: "breathing", en: "Difficulty breathing", hi: "सांस लेने में कठिनाई", mr: "श्वास घेण्यास त्रास" },
  { id: "abdominal-pain", en: "Severe abdominal pain", hi: "पेट में तेज दर्द", mr: "तीव्र पोटदुखी" }
];

const translations = {
  en: {
    tagline: "Recognize Early. Refer Early.", workspace: "WORKSPACE", mainNavigation: "Main navigation", openNavigation: "Open navigation", frontlineWorker: "Frontline health worker", navDashboard: "Dashboard", navCheck: "New maternal check", navFacilities: "Find referral facility", navTracking: "Referral tracking", navRecords: "Saved records", navSettings: "Settings & language", prototypeNote: "Academic prototype · Sample data only", prototype: "Prototype",
    dashboard: "Dashboard", checkTitle: "New maternal check", facilitiesTitle: "Find referral facility", trackingTitle: "Referral tracking", recordsTitle: "Saved records", settingsTitle: "Settings & language", language: "Language", online: "Online", offline: "Offline", footerPrototype: "Academic concept prototype · Not for clinical use", footerPrivacy: "No real patient information should be entered",
    welcome: "Welcome, frontline health worker", welcomeCopy: "A simple guide to notice listed warning signs and support a referral conversation.", startCheck: "Start maternal check", dashboardTitle: "Dashboard", dashboardSubtitle: "A quick view of your demonstration workspace.", savedReferrals: "Saved referrals", recordsSaved: "Saved records", urgentCases: "Urgent flags", noListedSigns: "No listed sign reported", recentActivity: "Sample referral activity", sampleData: "SAMPLE DATA", viewAll: "View all", sampleRef1: "Sample case · MR-DEMO-104", sampleRef2: "Sample case · MR-DEMO-108", sampleFacility: "Example Community Health Centre", prepared: "Referral prepared", acknowledged: "Facility acknowledged", supportNoteTitle: "A support tool, not a clinical decision", supportNote: "This prototype does not diagnose or replace clinical judgement. Follow local protocols and seek qualified clinical advice.", savedDemoTitle: "Your saved demonstration records", savedDemoCopy: "Records created on this device will appear here. No information is sent to a facility.", onlineMessage: "Online status only indicates this browser has a network connection. This prototype does not send referrals.",
    caseReference: "Case reference", casePlaceholder: "e.g. DEMO-001", caseHelp: "Use a fictional reference only. Do not enter a name or identifying information.", gestationalWeek: "Gestational week (optional)", gestationalPlaceholder: "e.g. 24", beginAssessment: "Begin assessment", question: "Question", of: "of", progress: "Progress", yes: "YES", no: "NO", unsure: "NOT SURE", selectAnswer: "Choose one response. If there may be an emergency, seek urgent professional help now; do not wait to finish this form.", back: "Back", next: "Next", reviewAnswers: "Review answers", reviewTitle: "Review this demonstration assessment", reviewCopy: "Check the entries. You can go back to change any answer.", editDetails: "Case details", edit: "Edit", submitAssessment: "View result", assessmentResult: "Assessment result", illustrative: "Illustrative prototype logic · Not clinically validated", emergencyTitle: "Emergency warning sign reported", emergencyCopy: "Seek urgent clinical assessment now and follow the local emergency referral protocol. Do not delay care to complete this prototype.", uncertainTitle: "A response is unclear", uncertainCopy: "Further assessment by a qualified provider is suggested. An unclear answer is not a negative answer. Follow local protocols.", clearTitle: "No listed warning sign reported in this sample assessment", clearCopy: "This does not confirm that the pregnancy is safe. Continue routine care and follow local guidance.", triggeredSigns: "Responses to discuss with a qualified provider", noTriggers: "No listed warning signs were answered YES in this sample.", nextSteps: "Next step", urgentNext: "Contact the appropriate local emergency/referral service and seek urgent professional assessment. This prototype cannot contact services for you.", unsureNext: "Ask a qualified health provider to assess the concern. Use local guidance; do not treat an unclear answer as safe.", clearNext: "Continue routine antenatal care and seek qualified advice if there is any concern or change.", findFacility: "Find a sample facility", startNew: "Start new assessment", viewTracking: "Referral tracking", riskRed: "Emergency flag", riskAmber: "Further assessment", riskGreen: "No listed sign reported", amberReference: "Amber: further assessment / follow-up should follow clinician-approved rules. No such rules are configured in this academic prototype.", greenReference: "Green does not confirm that the pregnancy is safe.", redReference: "Any reported listed warning sign is not labelled safe because other answers are negative.",
    facilityCopy: "Browse fictional facility listings for demonstration only. Confirm local referral pathways with qualified services.", facilityType: "Facility type", allTypes: "All facility types", searchFacility: "Search sample facilities", selectFacility: "Prepare demonstration referral", selectedFacility: "Selected", facilityInfo: "Referral information", phone: "Sample contact", address: "Sample location", typeCHC: "Community Health Centre (CHC)", typeSDH: "Sub-District Hospital (SDH)", typeDH: "District Hospital (DH)", noFacilities: "No sample facilities match your search.", noRealtime: "No real-time bed, ambulance, or travel-time information is available. These are fictional listings.", referralReady: "Demonstration referral prepared", referralNoNetwork: "This referral is saved only on this device and has not been sent to any facility.", referralOnlineNotice: "This is a local demonstration only. No referral is sent to a real facility.", selectToContinue: "Select a facility to prepare a referral record.", completeAssessmentFirst: "Complete a sample assessment before creating a referral.", goToFacilities: "Browse sample facilities",
    statusLabel: "Referral status", statusPrepared: "Referral prepared", statusSent: "Referral sent (demo)", statusAcknowledged: "Facility acknowledged (demo)", statusArrived: "Patient arrival recorded (demo)", statusFollowupPending: "Follow-up pending", statusFollowupComplete: "Follow-up completed", advanceStatus: "Update status", trackingDisclaimer: "All status changes are demonstrations stored locally. They are not messages to a hospital and do not confirm that a referral was received.", noTracking: "No demonstration referrals yet", noTrackingCopy: "After an assessment, select a sample facility to create a local referral record.", warningSigns: "Warning signs", riskFlag: "Risk flag", facility: "Facility", referralTime: "Referral date & time", delete: "Remove", deleteConfirm: "Remove this demonstration record from this device?", deleteRecord: "Remove record", savedRecords: "Saved records", savedRecordsCopy: "Fictional demonstration data saved in this browser only.", clearRecords: "Clear all records", clearConfirm: "Permanently remove all demonstration records stored on this device?", noRecords: "No saved records", noRecordsCopy: "Complete a sample assessment and prepare a referral to save a demonstration record.", resetAssessment: "Start over", resetConfirm: "Start a new assessment? Current unsaved answers will be cleared.",
    settingsCopy: "Choose your display language and review prototype limitations.", displayLanguage: "Display language", privacyTitle: "Privacy and demonstration data", privacyCopy: "Use fictional case references only. Do not enter names, phone numbers, Aadhaar numbers, or sensitive patient information. Data is stored in this browser’s localStorage and is not an adequate secure medical-record system.", offlineTitle: "Offline and synchronization", offlineCopy: "When offline, real-time communication is unavailable. Records remain on this device; no facility receives them. Actual synchronization would require a secure backend and verified connectivity.", clinicalTitle: "Clinical safety", clinicalCopy: "This academic concept is not clinically validated and is not for real medical use. Only clinician-approved assessment and referral rules may be used in a real deployment. The sample warning-sign logic is illustrative and does not diagnose.", clearSaved: "Delete all local demonstration records",
    errorCase: "Enter a fictional case reference to continue.", errorWeek: "Enter a gestational week from 1 to 45, or leave it blank.", errorAnswer: "Choose an answer before continuing.", errorFacility: "Choose a facility first.", errorStorage: "The browser could not save this record. Check local storage settings.", savedToast: "Demonstration referral saved on this device.", deletedToast: "Demonstration record removed.", clearedToast: "All local demonstration records removed.", statusToast: "Demonstration status updated.", offlineToast: "Offline: real-time communication is unavailable.", languageToast: "Language updated.", checkRequired: "Please review the required information.", unknown: "Not sure", yesLabel: "Yes", noLabel: "No", noSigns: "None reported", notProvided: "Not provided", sampleFacilityName: "Sample facility", statusPrompt: "Choose status", cancel: "Cancel"
  },
  hi: {
    tagline: "जल्दी पहचानें। जल्दी रेफर करें।", workspace: "कार्यस्थल", mainNavigation: "मुख्य नेविगेशन", openNavigation: "नेविगेशन खोलें", frontlineWorker: "फ्रंटलाइन स्वास्थ्य कार्यकर्ता", navDashboard: "डैशबोर्ड", navCheck: "नई मातृ जांच", navFacilities: "रेफरल सुविधा खोजें", navTracking: "रेफरल ट्रैकिंग", navRecords: "सहेजे रिकॉर्ड", navSettings: "सेटिंग और भाषा", prototypeNote: "शैक्षणिक प्रोटोटाइप · केवल नमूना डेटा", prototype: "प्रोटोटाइप",
    dashboard: "डैशबोर्ड", checkTitle: "नई मातृ जांच", facilitiesTitle: "रेफरल सुविधा खोजें", trackingTitle: "रेफरल ट्रैकिंग", recordsTitle: "सहेजे रिकॉर्ड", settingsTitle: "सेटिंग और भाषा", language: "भाषा", online: "ऑनलाइन", offline: "ऑफलाइन", footerPrototype: "शैक्षणिक अवधारणा प्रोटोटाइप · नैदानिक उपयोग के लिए नहीं", footerPrivacy: "वास्तविक मरीज की जानकारी दर्ज न करें",
    welcome: "स्वागत है, फ्रंटलाइन स्वास्थ्य कार्यकर्ता", welcomeCopy: "चेतावनी संकेत पहचानने और रेफरल बातचीत में सहायता के लिए एक सरल मार्गदर्शिका।", startCheck: "मातृ जांच शुरू करें", dashboardTitle: "डैशबोर्ड", dashboardSubtitle: "आपके प्रदर्शन कार्यक्षेत्र की एक झलक।", savedReferrals: "सहेजे रेफरल", recordsSaved: "सहेजे रिकॉर्ड", urgentCases: "आपात संकेत", noListedSigns: "कोई सूचीबद्ध संकेत नहीं", recentActivity: "नमूना रेफरल गतिविधि", sampleData: "नमूना डेटा", viewAll: "सभी देखें", sampleRef1: "नमूना मामला · MR-DEMO-104", sampleRef2: "नमूना मामला · MR-DEMO-108", sampleFacility: "उदाहरण सामुदायिक स्वास्थ्य केंद्र", prepared: "रेफरल तैयार", acknowledged: "सुविधा ने पुष्टि की", supportNoteTitle: "सहायक साधन, नैदानिक निर्णय नहीं", supportNote: "यह प्रोटोटाइप निदान नहीं करता और नैदानिक निर्णय का स्थान नहीं लेता। स्थानीय प्रोटोकॉल अपनाएं और योग्य चिकित्सकीय सलाह लें।", savedDemoTitle: "आपके सहेजे प्रदर्शन रिकॉर्ड", savedDemoCopy: "इस उपकरण पर बनाए रिकॉर्ड यहां दिखेंगे। कोई जानकारी सुविधा को नहीं भेजी जाती।", onlineMessage: "ऑनलाइन स्थिति केवल ब्राउज़र के नेटवर्क कनेक्शन को दिखाती है। यह प्रोटोटाइप रेफरल नहीं भेजता।",
    caseReference: "मामला संदर्भ", casePlaceholder: "जैसे DEMO-001", caseHelp: "केवल काल्पनिक संदर्भ लिखें। नाम या पहचान की जानकारी न लिखें।", gestationalWeek: "गर्भावस्था का सप्ताह (वैकल्पिक)", gestationalPlaceholder: "जैसे 24", beginAssessment: "जांच शुरू करें", question: "प्रश्न", of: "में से", progress: "प्रगति", yes: "हाँ", no: "नहीं", unsure: "पता नहीं", selectAnswer: "एक उत्तर चुनें। आपात स्थिति हो सकती है तो अभी तत्काल पेशेवर सहायता लें; इस फॉर्म को पूरा करने की प्रतीक्षा न करें।", back: "वापस", next: "आगे", reviewAnswers: "उत्तर की समीक्षा", reviewTitle: "इस प्रदर्शन जांच की समीक्षा करें", reviewCopy: "जानकारी जांचें। उत्तर बदलने के लिए वापस जा सकते हैं।", editDetails: "मामले का विवरण", edit: "बदलें", submitAssessment: "परिणाम देखें", assessmentResult: "जांच का परिणाम", illustrative: "केवल उदाहरण प्रोटोटाइप नियम · नैदानिक रूप से मान्य नहीं", emergencyTitle: "आपात चेतावनी संकेत बताया गया", emergencyCopy: "अभी तत्काल चिकित्सकीय जांच लें और स्थानीय आपात रेफरल प्रोटोकॉल अपनाएं। इस प्रोटोटाइप को पूरा करने के लिए देखभाल में देरी न करें।", uncertainTitle: "एक उत्तर स्पष्ट नहीं है", uncertainCopy: "योग्य स्वास्थ्य प्रदाता से आगे की जांच कराने का सुझाव है। अस्पष्ट उत्तर का अर्थ 'नहीं' नहीं है। स्थानीय प्रोटोकॉल अपनाएं।", clearTitle: "इस नमूना जांच में कोई सूचीबद्ध चेतावनी संकेत नहीं बताया गया", clearCopy: "इससे यह पुष्टि नहीं होती कि गर्भावस्था सुरक्षित है। नियमित देखभाल जारी रखें और स्थानीय मार्गदर्शन अपनाएं।", triggeredSigns: "योग्य स्वास्थ्य प्रदाता से चर्चा के उत्तर", noTriggers: "इस नमूने में किसी सूचीबद्ध चेतावनी संकेत का उत्तर 'हाँ' नहीं था।", nextSteps: "अगला कदम", urgentNext: "उचित स्थानीय आपात/रेफरल सेवा से संपर्क करें और तत्काल पेशेवर जांच लें। यह प्रोटोटाइप आपकी ओर से सेवाओं से संपर्क नहीं कर सकता।", unsureNext: "योग्य स्वास्थ्य प्रदाता से चिंता की जांच कराएं। स्थानीय मार्गदर्शन अपनाएं; अस्पष्ट उत्तर को सुरक्षित न मानें।", clearNext: "नियमित प्रसवपूर्व देखभाल जारी रखें। कोई चिंता या बदलाव हो तो योग्य सलाह लें।", findFacility: "नमूना सुविधा खोजें", startNew: "नई जांच शुरू करें", viewTracking: "रेफरल ट्रैकिंग", riskRed: "आपात संकेत", riskAmber: "आगे की जांच", riskGreen: "कोई सूचीबद्ध संकेत नहीं", amberReference: "पीला: आगे की जांच/अनुवर्ती कार्रवाई चिकित्सक-अनुमोदित नियमों के अनुसार होनी चाहिए। इस शैक्षणिक प्रोटोटाइप में ऐसे नियम नहीं हैं।", greenReference: "हरा होने से गर्भावस्था सुरक्षित होने की पुष्टि नहीं होती।", redReference: "अन्य उत्तर 'नहीं' होने पर भी किसी सूचीबद्ध संकेत को सुरक्षित नहीं माना जाता।",
    facilityCopy: "केवल प्रदर्शन हेतु काल्पनिक सुविधाएं देखें। योग्य सेवाओं से स्थानीय रेफरल मार्ग की पुष्टि करें।", facilityType: "सुविधा का प्रकार", allTypes: "सभी सुविधा प्रकार", searchFacility: "नमूना सुविधा खोजें", selectFacility: "प्रदर्शन रेफरल तैयार करें", selectedFacility: "चुना गया", facilityInfo: "रेफरल जानकारी", phone: "नमूना संपर्क", address: "नमूना स्थान", typeCHC: "सामुदायिक स्वास्थ्य केंद्र (CHC)", typeSDH: "उप-जिला अस्पताल (SDH)", typeDH: "जिला अस्पताल (DH)", noFacilities: "आपकी खोज से कोई नमूना सुविधा नहीं मिली।", noRealtime: "बिस्तर, एम्बुलेंस या यात्रा समय की वास्तविक जानकारी उपलब्ध नहीं है। ये काल्पनिक सूची हैं।", referralReady: "प्रदर्शन रेफरल तैयार", referralNoNetwork: "यह रेफरल केवल इस उपकरण पर सहेजा गया है और किसी सुविधा को नहीं भेजा गया।", referralOnlineNotice: "यह केवल स्थानीय प्रदर्शन है। किसी वास्तविक सुविधा को रेफरल नहीं भेजा गया।", selectToContinue: "स्थानीय रेफरल रिकॉर्ड बनाने के लिए सुविधा चुनें।", completeAssessmentFirst: "रेफरल बनाने से पहले नमूना जांच पूरी करें।", goToFacilities: "नमूना सुविधाएं देखें",
    statusLabel: "रेफरल स्थिति", statusPrepared: "रेफरल तैयार", statusSent: "रेफरल भेजा गया (डेमो)", statusAcknowledged: "सुविधा ने पुष्टि की (डेमो)", statusArrived: "मरीज के पहुंचने का रिकॉर्ड (डेमो)", statusFollowupPending: "अनुवर्ती कार्रवाई बाकी", statusFollowupComplete: "अनुवर्ती कार्रवाई पूरी", advanceStatus: "स्थिति अपडेट करें", trackingDisclaimer: "सभी स्थिति परिवर्तन स्थानीय रूप से सहेजे गए प्रदर्शन हैं। ये अस्पताल को संदेश नहीं हैं और रेफरल प्राप्त होने की पुष्टि नहीं करते।", noTracking: "अभी कोई प्रदर्शन रेफरल नहीं", noTrackingCopy: "जांच के बाद नमूना सुविधा चुनकर स्थानीय रेफरल रिकॉर्ड बनाएं।", warningSigns: "चेतावनी संकेत", riskFlag: "जोखिम संकेत", facility: "सुविधा", referralTime: "रेफरल तिथि और समय", delete: "हटाएं", deleteConfirm: "इस उपकरण से यह प्रदर्शन रिकॉर्ड हटाएं?", deleteRecord: "रिकॉर्ड हटाएं", savedRecords: "सहेजे रिकॉर्ड", savedRecordsCopy: "इस ब्राउज़र में सहेजा गया काल्पनिक प्रदर्शन डेटा।", clearRecords: "सभी रिकॉर्ड हटाएं", clearConfirm: "इस उपकरण पर सहेजे गए सभी प्रदर्शन रिकॉर्ड स्थायी रूप से हटाएं?", noRecords: "कोई सहेजा रिकॉर्ड नहीं", noRecordsCopy: "प्रदर्शन जांच पूरी करें और रेफरल रिकॉर्ड सहेजने के लिए सुविधा चुनें।", resetAssessment: "फिर से शुरू करें", resetConfirm: "नई जांच शुरू करें? वर्तमान असहेजे उत्तर हट जाएंगे।",
    settingsCopy: "दिखाने की भाषा चुनें और प्रोटोटाइप की सीमाएं देखें।", displayLanguage: "प्रदर्शन भाषा", privacyTitle: "गोपनीयता और प्रदर्शन डेटा", privacyCopy: "केवल काल्पनिक मामला संदर्भ उपयोग करें। नाम, फोन नंबर, आधार नंबर या संवेदनशील मरीज जानकारी दर्ज न करें। डेटा इस ब्राउज़र के localStorage में सहेजा जाता है; यह सुरक्षित चिकित्सा रिकॉर्ड प्रणाली नहीं है।", offlineTitle: "ऑफलाइन और सिंक्रनाइज़ेशन", offlineCopy: "ऑफलाइन होने पर वास्तविक समय संचार उपलब्ध नहीं है। रिकॉर्ड इसी उपकरण पर रहते हैं; किसी सुविधा को नहीं मिलते। वास्तविक सिंक्रनाइज़ेशन के लिए सुरक्षित बैकएंड और सत्यापित कनेक्टिविटी चाहिए।", clinicalTitle: "नैदानिक सुरक्षा", clinicalCopy: "यह शैक्षणिक अवधारणा नैदानिक रूप से मान्य नहीं है और वास्तविक चिकित्सा उपयोग के लिए नहीं है। वास्तविक उपयोग में केवल चिकित्सक-अनुमोदित जांच और रेफरल नियम इस्तेमाल किए जाने चाहिए। नमूना चेतावनी संकेत तर्क उदाहरण मात्र है और निदान नहीं करता।", clearSaved: "सभी स्थानीय प्रदर्शन रिकॉर्ड हटाएं",
    errorCase: "आगे बढ़ने के लिए काल्पनिक मामला संदर्भ लिखें।", errorWeek: "गर्भावस्था का सप्ताह 1 से 45 तक लिखें, या खाली छोड़ें।", errorAnswer: "आगे बढ़ने से पहले उत्तर चुनें।", errorFacility: "पहले सुविधा चुनें।", errorStorage: "ब्राउज़र यह रिकॉर्ड सहेज नहीं सका। स्थानीय स्टोरेज सेटिंग जांचें।", savedToast: "प्रदर्शन रेफरल इस उपकरण पर सहेजा गया।", deletedToast: "प्रदर्शन रिकॉर्ड हटाया गया।", clearedToast: "सभी स्थानीय प्रदर्शन रिकॉर्ड हटाए गए।", statusToast: "प्रदर्शन स्थिति अपडेट की गई।", offlineToast: "ऑफलाइन: वास्तविक समय संचार उपलब्ध नहीं है।", languageToast: "भाषा अपडेट की गई।", checkRequired: "कृपया आवश्यक जानकारी की समीक्षा करें।", unknown: "पता नहीं", yesLabel: "हाँ", noLabel: "नहीं", noSigns: "कोई संकेत नहीं", notProvided: "नहीं दिया गया", sampleFacilityName: "नमूना सुविधा", statusPrompt: "स्थिति चुनें", cancel: "रद्द करें"
  },
  mr: {
    tagline: "लवकर ओळखा. लवकर संदर्भित करा.", workspace: "कार्यस्थळ", mainNavigation: "मुख्य नेव्हिगेशन", openNavigation: "नेव्हिगेशन उघडा", frontlineWorker: "आरोग्यसेविका", navDashboard: "डॅशबोर्ड", navCheck: "नवी मातृ तपासणी", navFacilities: "संदर्भ सुविधा शोधा", navTracking: "संदर्भ ट्रॅकिंग", navRecords: "जतन केलेल्या नोंदी", navSettings: "सेटिंग्ज आणि भाषा", prototypeNote: "शैक्षणिक नमुना · फक्त नमुना डेटा", prototype: "नमुना",
    dashboard: "डॅशबोर्ड", checkTitle: "नवी मातृ तपासणी", facilitiesTitle: "संदर्भ सुविधा शोधा", trackingTitle: "संदर्भ ट्रॅकिंग", recordsTitle: "जतन केलेल्या नोंदी", settingsTitle: "सेटिंग्ज आणि भाषा", language: "भाषा", online: "ऑनलाइन", offline: "ऑफलाइन", footerPrototype: "शैक्षणिक संकल्पना नमुना · वैद्यकीय वापरासाठी नाही", footerPrivacy: "रुग्णाची खरी माहिती नोंदवू नका",
    welcome: "स्वागत आहे, आरोग्यसेविका", welcomeCopy: "धोक्याची चिन्हे ओळखण्यासाठी आणि संदर्भाबाबत चर्चा करण्यासाठी सोपे मार्गदर्शन.", startCheck: "मातृ तपासणी सुरू करा", dashboardTitle: "डॅशबोर्ड", dashboardSubtitle: "तुमच्या प्रात्यक्षिक कार्यक्षेत्राचा झटपट आढावा.", savedReferrals: "जतन केलेले संदर्भ", recordsSaved: "जतन नोंदी", urgentCases: "तातडीचे संकेत", noListedSigns: "सूचीतील संकेत नाही", recentActivity: "नमुना संदर्भ हालचाल", sampleData: "नमुना डेटा", viewAll: "सर्व पहा", sampleRef1: "नमुना प्रकरण · MR-DEMO-104", sampleRef2: "नमुना प्रकरण · MR-DEMO-108", sampleFacility: "उदाहरण समुदाय आरोग्य केंद्र", prepared: "संदर्भ तयार", acknowledged: "सुविधेने पोच दिली", supportNoteTitle: "सहाय्यक साधन, वैद्यकीय निर्णय नाही", supportNote: "हा नमुना निदान करत नाही किंवा वैद्यकीय निर्णयाची जागा घेत नाही. स्थानिक नियम पाळा आणि पात्र वैद्यकीय सल्ला घ्या.", savedDemoTitle: "तुमच्या जतन केलेल्या प्रात्यक्षिक नोंदी", savedDemoCopy: "या उपकरणावर तयार केलेल्या नोंदी येथे दिसतील. कोणतीही माहिती सुविधेला पाठवली जात नाही.", onlineMessage: "ऑनलाइन स्थिती फक्त ब्राउझरचे नेटवर्क कनेक्शन दाखवते. हा नमुना संदर्भ पाठवत नाही.",
    caseReference: "प्रकरण संदर्भ", casePlaceholder: "उदा. DEMO-001", caseHelp: "फक्त काल्पनिक संदर्भ वापरा. नाव किंवा ओळख पटवणारी माहिती देऊ नका.", gestationalWeek: "गर्भावस्थेचा आठवडा (ऐच्छिक)", gestationalPlaceholder: "उदा. 24", beginAssessment: "तपासणी सुरू करा", question: "प्रश्न", of: "पैकी", progress: "प्रगती", yes: "होय", no: "नाही", unsure: "निश्चित नाही", selectAnswer: "एक उत्तर निवडा. आपत्कालीन परिस्थिती असू शकते तर त्वरित व्यावसायिक मदत घ्या; हा फॉर्म पूर्ण होण्याची वाट पाहू नका.", back: "मागे", next: "पुढे", reviewAnswers: "उत्तरांचा आढावा", reviewTitle: "या प्रात्यक्षिक तपासणीचा आढावा घ्या", reviewCopy: "माहिती तपासा. उत्तर बदलण्यासाठी मागे जाऊ शकता.", editDetails: "प्रकरण तपशील", edit: "बदला", submitAssessment: "निकाल पहा", assessmentResult: "तपासणीचा निकाल", illustrative: "प्रात्यक्षिक नमुना नियम · वैद्यकीयदृष्ट्या प्रमाणित नाही", emergencyTitle: "आपत्कालीन धोक्याचे चिन्ह नोंदवले", emergencyCopy: "त्वरित वैद्यकीय तपासणी घ्या आणि स्थानिक आपत्कालीन संदर्भ नियम पाळा. हा नमुना पूर्ण करण्यासाठी उपचारास उशीर करू नका.", uncertainTitle: "एक उत्तर स्पष्ट नाही", uncertainCopy: "पात्र आरोग्यसेवकाकडून पुढील तपासणी करण्याचा सल्ला आहे. अस्पष्ट उत्तर म्हणजे 'नाही' नाही. स्थानिक नियम पाळा.", clearTitle: "या नमुना तपासणीत सूचीतील कोणतेही धोक्याचे चिन्ह नोंदवले नाही", clearCopy: "यामुळे गर्भधारणा सुरक्षित असल्याची खात्री होत नाही. नियमित काळजी सुरू ठेवा आणि स्थानिक मार्गदर्शन पाळा.", triggeredSigns: "पात्र आरोग्यसेवकाशी चर्चेसाठी उत्तरे", noTriggers: "या नमुन्यात सूचीतील कोणत्याही धोक्याच्या चिन्हाचे उत्तर 'होय' नव्हते.", nextSteps: "पुढील पाऊल", urgentNext: "योग्य स्थानिक आपत्कालीन/संदर्भ सेवेशी संपर्क करा आणि त्वरित व्यावसायिक तपासणी घ्या. हा नमुना तुमच्यासाठी सेवांशी संपर्क करू शकत नाही.", unsureNext: "पात्र आरोग्यसेवकाकडून चिंता तपासून घ्या. स्थानिक मार्गदर्शन पाळा; अस्पष्ट उत्तर सुरक्षित समजू नका.", clearNext: "नियमित प्रसूतीपूर्व काळजी सुरू ठेवा. चिंता किंवा बदल असल्यास पात्र सल्ला घ्या.", findFacility: "नमुना सुविधा शोधा", startNew: "नवी तपासणी सुरू करा", viewTracking: "संदर्भ ट्रॅकिंग", riskRed: "आपत्कालीन संकेत", riskAmber: "पुढील तपासणी", riskGreen: "सूचीतील संकेत नाही", amberReference: "पिवळा: पुढील तपासणी/पाठपुरावा डॉक्टरांनी मान्य केलेल्या नियमांनुसार हवा. या शैक्षणिक नमुन्यात असे नियम नाहीत.", greenReference: "हिरवा रंग गर्भधारणा सुरक्षित असल्याची खात्री देत नाही.", redReference: "इतर उत्तरे 'नाही' असली तरी नोंदवलेले सूचीतील चिन्ह सुरक्षित मानले जात नाही.",
    facilityCopy: "फक्त प्रात्यक्षिकासाठी काल्पनिक सुविधांची यादी पहा. पात्र सेवांकडून स्थानिक संदर्भ मार्गाची खात्री करा.", facilityType: "सुविधेचा प्रकार", allTypes: "सर्व सुविधा प्रकार", searchFacility: "नमुना सुविधा शोधा", selectFacility: "प्रात्यक्षिक संदर्भ तयार करा", selectedFacility: "निवडले", facilityInfo: "संदर्भ माहिती", phone: "नमुना संपर्क", address: "नमुना ठिकाण", typeCHC: "समुदाय आरोग्य केंद्र (CHC)", typeSDH: "उपजिल्हा रुग्णालय (SDH)", typeDH: "जिल्हा रुग्णालय (DH)", noFacilities: "तुमच्या शोधाशी जुळणारी नमुना सुविधा नाही.", noRealtime: "खाट, रुग्णवाहिका किंवा प्रवास वेळेची प्रत्यक्ष माहिती उपलब्ध नाही. या काल्पनिक नोंदी आहेत.", referralReady: "प्रात्यक्षिक संदर्भ तयार", referralNoNetwork: "हा संदर्भ फक्त या उपकरणावर जतन झाला असून कोणत्याही सुविधेला पाठवलेला नाही.", referralOnlineNotice: "हे फक्त स्थानिक प्रात्यक्षिक आहे. प्रत्यक्ष सुविधेला संदर्भ पाठवलेला नाही.", selectToContinue: "स्थानिक संदर्भ नोंद तयार करण्यासाठी सुविधा निवडा.", completeAssessmentFirst: "संदर्भ तयार करण्यापूर्वी नमुना तपासणी पूर्ण करा.", goToFacilities: "नमुना सुविधा पहा",
    statusLabel: "संदर्भ स्थिती", statusPrepared: "संदर्भ तयार", statusSent: "संदर्भ पाठवला (डेमो)", statusAcknowledged: "सुविधेने पोच दिली (डेमो)", statusArrived: "रुग्ण पोहोचल्याची नोंद (डेमो)", statusFollowupPending: "पाठपुरावा बाकी", statusFollowupComplete: "पाठपुरावा पूर्ण", advanceStatus: "स्थिती बदला", trackingDisclaimer: "स्थितीतील सर्व बदल स्थानिक प्रात्यक्षिक आहेत. हे रुग्णालयाला संदेश नाहीत आणि संदर्भ मिळाल्याची खात्री देत नाहीत.", noTracking: "अजून प्रात्यक्षिक संदर्भ नाहीत", noTrackingCopy: "तपासणीनंतर नमुना सुविधा निवडून स्थानिक संदर्भ नोंद तयार करा.", warningSigns: "धोक्याची चिन्हे", riskFlag: "जोखीम संकेत", facility: "सुविधा", referralTime: "संदर्भ दिनांक आणि वेळ", delete: "काढा", deleteConfirm: "या उपकरणावरून ही प्रात्यक्षिक नोंद काढायची?", deleteRecord: "नोंद काढा", savedRecords: "जतन केलेल्या नोंदी", savedRecordsCopy: "या ब्राउझरमध्ये जतन केलेला काल्पनिक प्रात्यक्षिक डेटा.", clearRecords: "सर्व नोंदी पुसा", clearConfirm: "या उपकरणावर साठवलेल्या सर्व प्रात्यक्षिक नोंदी कायमच्या पुसायच्या?", noRecords: "जतन केलेल्या नोंदी नाहीत", noRecordsCopy: "नमुना तपासणी पूर्ण करा आणि प्रात्यक्षिक नोंद जतन करण्यासाठी सुविधा निवडा.", resetAssessment: "पुन्हा सुरू करा", resetConfirm: "नवी तपासणी सुरू करायची? सध्याची न जतन केलेली उत्तरे पुसली जातील.",
    settingsCopy: "प्रदर्शन भाषा निवडा आणि नमुन्याच्या मर्यादा पहा.", displayLanguage: "प्रदर्शन भाषा", privacyTitle: "गोपनीयता आणि प्रात्यक्षिक डेटा", privacyCopy: "फक्त काल्पनिक प्रकरण संदर्भ वापरा. नाव, फोन, आधार क्रमांक किंवा संवेदनशील रुग्ण माहिती देऊ नका. डेटा या ब्राउझरच्या localStorage मध्ये साठतो; ही सुरक्षित वैद्यकीय नोंद प्रणाली नाही.", offlineTitle: "ऑफलाइन आणि समक्रमण", offlineCopy: "ऑफलाइन असताना प्रत्यक्ष संवाद उपलब्ध नाही. नोंदी या उपकरणावर राहतात; कोणत्याही सुविधेला मिळत नाहीत. प्रत्यक्ष समक्रमणासाठी सुरक्षित बॅकएंड आणि पडताळलेली जोडणी आवश्यक आहे.", clinicalTitle: "वैद्यकीय सुरक्षितता", clinicalCopy: "ही शैक्षणिक संकल्पना वैद्यकीयदृष्ट्या प्रमाणित नाही आणि प्रत्यक्ष वैद्यकीय वापरासाठी नाही. प्रत्यक्ष वापरात फक्त डॉक्टरांनी मान्य केलेले तपासणी आणि संदर्भ नियम वापरावेत. नमुना धोक्याची चिन्हे तर्क उदाहरण आहे; निदान नाही.", clearSaved: "सर्व स्थानिक प्रात्यक्षिक नोंदी पुसा",
    errorCase: "पुढे जाण्यासाठी काल्पनिक प्रकरण संदर्भ लिहा.", errorWeek: "गर्भावस्थेचा आठवडा 1 ते 45 लिहा किंवा रिकामा ठेवा.", errorAnswer: "पुढे जाण्यापूर्वी उत्तर निवडा.", errorFacility: "आधी सुविधा निवडा.", errorStorage: "ब्राउझर ही नोंद जतन करू शकला नाही. स्थानिक स्टोरेज सेटिंग तपासा.", savedToast: "प्रात्यक्षिक संदर्भ या उपकरणावर जतन झाला.", deletedToast: "प्रात्यक्षिक नोंद काढली.", clearedToast: "सर्व स्थानिक प्रात्यक्षिक नोंदी पुसल्या.", statusToast: "प्रात्यक्षिक स्थिती बदलली.", offlineToast: "ऑफलाइन: प्रत्यक्ष संवाद उपलब्ध नाही.", languageToast: "भाषा बदलली.", checkRequired: "कृपया आवश्यक माहिती तपासा.", unknown: "निश्चित नाही", yesLabel: "होय", noLabel: "नाही", noSigns: "चिन्हे नोंदवली नाहीत", notProvided: "दिलेली नाही", sampleFacilityName: "नमुना सुविधा", statusPrompt: "स्थिती निवडा", cancel: "रद्द करा"
  }
};

const statusKeys = ["statusPrepared", "statusSent", "statusAcknowledged", "statusArrived", "statusFollowupPending", "statusFollowupComplete"];
const statusValues = ["prepared", "sent-demo", "acknowledged-demo", "arrival-demo", "followup-pending", "followup-complete"];
const state = {
  lang: loadLanguage(),
  page: "dashboard",
  assessment: { phase: "details", caseRef: "", week: "", step: 0, answers: {} },
  resultRisk: null,
  selectedFacility: null,
  records: loadRecords(),
  search: "",
  typeFilter: "all"
};

function loadLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return saved && translations[saved] ? saved : "en";
  } catch (error) {
    console.warn("Language preference could not be loaded.", error);
    return "en";
  }
}

function loadRecords() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error("Saved records are not a list.");
    return parsed.filter(record => record && typeof record.id === "string" && typeof record.caseRef === "string" && statusValues.includes(record.status));
  } catch (error) {
    console.error("Saved demonstration records could not be loaded.", error);
    return [];
  }
}

function t(key) { return translations[state.lang][key] || translations.en[key] || key; }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function localized(item) { return item[state.lang] || item.en; }
function statusText(status) {
  const index = statusValues.indexOf(status);
  return t(statusKeys[index] || "statusPrepared");
}
function riskInfo(risk) {
  if (risk === "red") return { label: t("riskRed"), className: "red" };
  if (risk === "amber") return { label: t("riskAmber"), className: "amber" };
  return { label: t("riskGreen"), className: "green" };
}
function getRisk() {
  const values = Object.values(state.assessment.answers);
  if (values.includes("yes")) return "red";
  if (values.includes("unsure")) return "amber";
  return "green";
}
function saveRecords() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
    return true;
  } catch (error) {
    console.error("Demonstration records could not be saved.", error);
    toast(t("errorStorage"), true);
    return false;
  }
}
function setLanguage(language) {
  if (!translations[language]) return;
  state.lang = language;
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.warn("Language preference could not be saved.", error);
  }
  document.documentElement.lang = language;
  document.getElementById("language-select").value = language;
  render();
}
function toast(message, isError = false) {
  const region = document.getElementById("toast-region");
  const item = document.createElement("div");
  item.className = `toast${isError ? " error" : ""}`;
  item.textContent = message;
  region.append(item);
  window.setTimeout(() => item.remove(), 3800);
}
function goto(page) {
  const allowed = ["dashboard", "assessment", "facilities", "tracking", "records", "settings"];
  if (!allowed.includes(page)) return;
  state.page = page;
  history.replaceState(null, "", `#${page}`);
  closeMenu();
  render();
}
function startAssessment() {
  state.assessment = { phase: "details", caseRef: "", week: "", step: 0, answers: {} };
  state.resultRisk = null;
  state.selectedFacility = null;
  goto("assessment");
}
function closeMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-scrim").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
}
function heading(title, subtitle, eyebrow = "", action = "") {
  return `<div class="page-heading"><div>${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}<h1>${title}</h1>${subtitle ? `<p>${subtitle}</p>` : ""}</div>${action}</div>`;
}
function notice(title, copy, kind = "") {
  return `<div class="info-banner ${kind}"><span class="notice-icon" aria-hidden="true">${kind === "urgent" ? "!" : "i"}</span><div><strong>${title}</strong>${copy}</div></div>`;
}
function renderDashboard() {
  const urgentCount = state.records.filter(record => record.risk === "red").length;
  return `
    <section class="welcome-banner">
      <div><p class="eyebrow">${t("dashboardTitle")}</p><h1>${t("welcome")}</h1><p>${t("welcomeCopy")}</p><button class="button" data-action="start-assessment"><span aria-hidden="true">＋</span>${t("startCheck")}</button></div>
      <div class="welcome-symbol" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none"><path d="M32 56S8 43 8 24.5C8 15.4 14.4 9 22 9c4.8 0 8.2 2.7 10 6.4C33.8 11.7 37.2 9 42 9c7.6 0 14 6.4 14 15.5C56 43 32 56 32 56Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M20 31h8l4-9 6 19 4-10h7" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    </section>
    ${!navigator.onLine ? notice(t("offlineTitle"), t("offlineCopy"), "warning") : ""}
    <div class="stat-row">
      <div class="card stat-card"><span class="stat-icon">▤</span><div><strong>${state.records.length}</strong><small>${t("recordsSaved")}</small></div></div>
      <div class="card stat-card"><span class="stat-icon">↗</span><div><strong>${state.records.length}</strong><small>${t("savedReferrals")}</small></div></div>
      <div class="card stat-card"><span class="stat-icon">!</span><div><strong>${urgentCount}</strong><small>${t("urgentCases")}</small></div></div>
    </div>
    <div class="dashboard-grid">
      <div class="stack">
        <section class="card card-pad">
          <div class="card-title-row"><div><h2>${t("savedReferrals")}</h2><p>${t("savedDemoTitle")}</p></div><a class="section-link" href="#records" data-page="records">${t("viewAll")} →</a></div>
          ${state.records.length ? renderRecentRecords() : `<div class="empty-state"><span class="empty-icon">▤</span><strong>${t("noRecords")}</strong><span>${t("savedDemoCopy")}</span></div>`}
        </section>
        <section class="card card-pad">
          <div class="card-title-row"><div><h2>${t("recentActivity")}</h2></div><span class="sample-label">${t("sampleData")}</span></div>
          <div class="record-list">
            <div class="record-row"><div class="record-main"><strong>${t("sampleRef1")}</strong><small>${t("sampleFacility")}</small></div><span class="status-tag teal">${t("prepared")}</span></div>
            <div class="record-row"><div class="record-main"><strong>${t("sampleRef2")}</strong><small>${t("sampleFacility")}</small></div><span class="status-tag green">${t("acknowledged")}</span></div>
          </div>
        </section>
      </div>
      <div class="stack">
        ${notice(t("supportNoteTitle"), t("supportNote"))}
        <section class="card card-pad"><div class="card-title-row"><h2>${t("onlineMessage")}</h2></div><p style="margin:0;color:var(--muted);font-size:12px">${t("referralOnlineNotice")}</p></section>
      </div>
    </div>`;
}
function renderRecentRecords() {
  return `<div class="record-list">${state.records.slice(0, 3).map(record => `<div class="record-row"><div class="record-main"><strong>${escapeHTML(record.caseRef)}</strong><small>${escapeHTML(getFacility(record.facilityId)?.name[state.lang] || t("sampleFacilityName"))}</small></div><span class="status-tag ${riskInfo(record.risk).className}">${riskInfo(record.risk).label}</span></div>`).join("")}</div>`;
}
function renderAssessment() {
  const a = state.assessment;
  if (a.phase === "details") return `${heading(t("checkTitle"), t("caseHelp"), t("illustrative"))}
    <div class="two-col"><section class="card card-pad"><div class="card-title-row"><h2>${t("editDetails")}</h2></div>
      <form id="assessment-details-form" novalidate><div class="form-grid">
        <div class="field"><label for="case-ref">${t("caseReference")} *</label><input id="case-ref" name="caseRef" maxlength="40" autocomplete="off" placeholder="${t("casePlaceholder")}" value="${escapeHTML(a.caseRef)}" required><small>${t("caseHelp")}</small></div>
        <div class="field"><label for="gestational-week">${t("gestationalWeek")}</label><input id="gestational-week" name="week" type="number" min="1" max="45" inputmode="numeric" placeholder="${t("gestationalPlaceholder")}" value="${escapeHTML(a.week)}"></div>
      </div><div class="assessment-actions"><span></span><button class="button" type="submit">${t("beginAssessment")} →</button></div></form>
    </section><div class="stack">${notice(t("clinicalTitle"), t("clinicalCopy"), "warning")}${notice(t("privacyTitle"), t("privacyCopy"))}</div></div>`;
  if (a.phase === "questions") return renderQuestion();
  if (a.phase === "review") return renderReview();
  return renderResult();
}
function renderQuestion() {
  const a = state.assessment;
  const question = questions[a.step];
  const progress = Math.round(((a.step + 1) / questions.length) * 100);
  return `${heading(t("checkTitle"), `${t("caseReference")}: ${escapeHTML(a.caseRef)}`, t("illustrative"), `<button class="button button-secondary button-small" data-action="reset-assessment">${t("resetAssessment")}</button>`)}
    ${notice(t("selectAnswer"), "", "warning")}
    <section class="card card-pad" style="max-width:820px;margin:18px auto">
      <div class="assessment-progress"><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><span class="progress-copy">${t("question")} ${a.step + 1} ${t("of")} ${questions.length}</span></div>
      <div class="question-number">${t("question")} ${a.step + 1}</div><h2 class="question-title">${question[state.lang]}</h2><p class="question-hint">${t("selectAnswer")}</p>
      <div class="answer-grid" role="group" aria-label="${escapeHTML(question[state.lang])}">
        ${[["yes", "yes"], ["no", "no"], ["unsure", "unsure"]].map(([value, key]) => `<button type="button" class="answer-button${a.answers[question.id] === value ? " selected" : ""}" data-action="answer" data-answer="${value}" aria-pressed="${a.answers[question.id] === value}">${t(key)}</button>`).join("")}
      </div>
      <div class="assessment-actions"><button type="button" class="button button-secondary" data-action="assessment-back">${t("back")}</button><button type="button" class="button" data-action="assessment-next">${a.step === questions.length - 1 ? t("reviewAnswers") : t("next")} →</button></div>
    </section>
    <div style="max-width:820px;margin:0 auto">${notice(t("redReference"), "", "urgent")}</div>`;
}
function renderReview() {
  const a = state.assessment;
  return `${heading(t("reviewTitle"), t("reviewCopy"), t("illustrative"), `<button class="button button-secondary button-small" data-action="reset-assessment">${t("resetAssessment")}</button>`)}
    <section class="card card-pad" style="max-width:820px;margin:0 auto">
      <div class="card-title-row"><h2>${t("editDetails")}</h2><button class="button button-secondary button-small" data-action="edit-details">${t("edit")}</button></div>
      <div class="review-list"><div class="review-item"><span>${t("caseReference")}</span><strong>${escapeHTML(a.caseRef)}</strong></div>${a.week ? `<div class="review-item"><span>${t("gestationalWeek")}</span><strong>${escapeHTML(a.week)}</strong></div>` : ""}
      ${questions.map(question => `<div class="review-item"><span>${question[state.lang]}</span><strong>${answerText(a.answers[question.id])}</strong></div>`).join("")}</div>
      <div class="assessment-actions"><button class="button button-secondary" data-action="assessment-back">${t("back")}</button><button class="button" data-action="assessment-submit">${t("submitAssessment")} →</button></div>
    </section>`;
}
function answerText(answer) { return answer === "yes" ? t("yesLabel") : answer === "no" ? t("noLabel") : t("unknown"); }
function renderResult() {
  const risk = state.resultRisk || getRisk();
  const info = riskInfo(risk);
  const title = risk === "red" ? t("emergencyTitle") : risk === "amber" ? t("uncertainTitle") : t("clearTitle");
  const copy = risk === "red" ? t("emergencyCopy") : risk === "amber" ? t("uncertainCopy") : t("clearCopy");
  const next = risk === "red" ? t("urgentNext") : risk === "amber" ? t("unsureNext") : t("clearNext");
  const positives = questions.filter(question => state.assessment.answers[question.id] !== "no");
  return `${heading(t("assessmentResult"), `${t("caseReference")}: ${escapeHTML(state.assessment.caseRef)}`, t("illustrative"))}
    <div class="two-col"><div class="stack">
      <section class="card card-pad"><div class="result-header"><span class="result-symbol ${info.className}">${risk === "red" ? "!" : risk === "amber" ? "?" : "✓"}</span><div><span class="status-tag ${info.className}">${info.label}</span><h2 style="margin-top:8px">${title}</h2><p>${copy}</p></div></div>
        <h2>${t("triggeredSigns")}</h2><div class="answer-trigger-list">${positives.length ? positives.map(question => `<div class="trigger-item"><span class="trigger-mark">${state.assessment.answers[question.id] === "yes" ? "!" : "?"}</span><span>${question[state.lang]} — ${answerText(state.assessment.answers[question.id])}</span></div>`).join("") : `<div class="trigger-item"><span>${t("noTriggers")}</span></div>`}</div>
      </section>
      ${notice(t("nextSteps"), next, risk === "red" ? "urgent" : risk === "amber" ? "warning" : "")}
      ${risk === "red" ? notice(t("redReference"), "", "urgent") : risk === "amber" ? notice(t("amberReference"), "", "warning") : notice(t("greenReference"), "")}
    </div><div class="stack">
      ${notice(t("referralOnlineNotice"), t("referralNoNetwork"), "warning")}
      <section class="card card-pad"><div class="card-title-row"><h2>${t("findFacility")}</h2></div><p style="margin:0 0 15px;color:var(--muted);font-size:12px">${t("facilityCopy")}</p><button class="button button-wide" data-action="goto-facilities">${t("findFacility")} →</button></section>
      <button class="button button-secondary" data-action="start-assessment">${t("startNew")}</button>
    </div></div>`;
}
function getFacility(id) { return facilities.find(facility => facility.id === id); }
function renderFacilities() {
  let matches = facilities.filter(facility => (state.typeFilter === "all" || facility.type === state.typeFilter) && `${facility.name.en} ${localized(facility.name)} ${facility.address.en} ${localized(facility.address)} ${facility.type}`.toLowerCase().includes(state.search.toLowerCase()));
  return `${heading(t("facilitiesTitle"), t("facilityCopy"))}
    ${notice(t("noRealtime"), "", "warning")}
    <div class="facility-tools"><input class="search-input" id="facility-search" type="search" placeholder="${t("searchFacility")}" value="${escapeHTML(state.search)}" aria-label="${t("searchFacility")}">
      <select class="search-input" id="facility-type" aria-label="${t("facilityType")}"><option value="all">${t("allTypes")}</option><option value="CHC">${t("typeCHC")}</option><option value="SDH">${t("typeSDH")}</option><option value="DH">${t("typeDH")}</option></select>
    </div>
    ${state.selectedFacility ? notice(t("referralReady"), t("referralNoNetwork"), "warning") : ""}
    <div class="facility-grid" style="margin-top:15px">${matches.length ? matches.map(facility => renderFacilityCard(facility)).join("") : `<div class="card empty-state" style="grid-column:1/-1"><span class="empty-icon">⌖</span><strong>${t("noFacilities")}</strong></div>`}</div>`;
}
function renderFacilityCard(facility) {
  const selected = state.selectedFacility === facility.id;
  const canCreateReferral = state.assessment.phase === "result" && Boolean(state.assessment.caseRef);
  const typeLabel = facility.type === "CHC" ? t("typeCHC") : facility.type === "SDH" ? t("typeSDH") : t("typeDH");
  return `<article class="card facility-card${selected ? " selected" : ""}"><span class="sample-label">${t("sampleData")}</span><h2>${localized(facility.name)}</h2><p>${typeLabel}</p>
    <div class="facility-meta"><span><b>⌖</b> ${escapeHTML(localized(facility.address))}</span><span><b>☎</b> ${t("phone")}: ${facility.phone || t("notProvided")}</span><span><b>ⓘ</b> ${localized(facility.information)}</span></div>
    <div class="facility-actions">${selected ? `<span class="status-tag teal">${t("selectedFacility")}</span>` : `<button class="button button-small" data-action="select-facility" data-id="${facility.id}">${t("selectFacility")}</button>`}
    ${selected && canCreateReferral ? `<button class="button button-small" data-action="create-referral" data-id="${facility.id}">${t("selectFacility")} →</button>` : ""}
    ${selected && !canCreateReferral ? `<span style="color:var(--muted);font-size:11px">${t("completeAssessmentFirst")}</span>` : ""}</div></article>`;
}
function renderTracking() {
  const records = [...state.records].sort((a, b) => b.createdAt - a.createdAt);
  return `${heading(t("trackingTitle"), t("trackingDisclaimer"))}
    ${notice(t("trackingDisclaimer"), t("referralOnlineNotice"), "warning")}
    <div style="margin-top:16px">${records.length ? records.map(record => renderRecord(record, true)).join("") : `<section class="card empty-state"><span class="empty-icon">↗</span><strong>${t("noTracking")}</strong><span>${t("noTrackingCopy")}</span><button class="button button-small" data-action="goto-facilities">${t("goToFacilities")}</button></section>`}</div>`;
}
function renderRecords() {
  const records = [...state.records].sort((a, b) => b.createdAt - a.createdAt);
  return `${heading(t("recordsTitle"), t("savedRecordsCopy"))}
    <div class="card card-pad"><div class="card-title-row"><div><h2>${t("savedRecords")}</h2><p>${t("savedRecordsCopy")}</p></div>${records.length ? `<button class="button button-danger button-small" data-action="clear-records">${t("clearRecords")}</button>` : ""}</div>
    ${records.length ? records.map(record => renderRecord(record, false)).join("") : `<div class="empty-state"><span class="empty-icon">▤</span><strong>${t("noRecords")}</strong><span>${t("noRecordsCopy")}</span><button class="button button-small" data-action="start-assessment">${t("startCheck")}</button></div>`}</div>`;
}
function renderRecord(record, tracking) {
  const facility = getFacility(record.facilityId);
  const risk = riskInfo(record.risk);
  const signs = record.signs.length ? record.signs.map(id => {
    const question = questions.find(item => item.id === id);
    return question ? question[state.lang] : id;
  }).join(", ") : t("noSigns");
  const date = new Date(record.createdAt).toLocaleString(state.lang === "en" ? "en" : state.lang === "hi" ? "hi-IN" : "mr-IN", { dateStyle: "medium", timeStyle: "short" });
  const stepsMarkup = tracking ? `<div class="steps">${statusKeys.map((key, index) => `<div class="step-row${statusValues.indexOf(record.status) >= index ? " done" : ""}${statusValues.indexOf(record.status) === index ? " current" : ""}"><span class="step-indicator">${statusValues.indexOf(record.status) > index ? "✓" : index + 1}</span><span class="step-label">${t(key)}</span></div>`).join("")}</div>` : "";
  return `<article class="card record-card"><div class="record-card-top"><div><h2>${escapeHTML(record.caseRef)}</h2><span class="status-tag ${risk.className}">${risk.label}</span></div><button class="button button-danger button-small" data-action="delete-record" data-id="${record.id}">${t("delete")}</button></div>
    <div class="record-details"><div class="detail-pair"><small>${t("warningSigns")}</small><strong>${escapeHTML(signs)}</strong></div><div class="detail-pair"><small>${t("facility")}</small><strong>${escapeHTML(facility ? facility.name[state.lang] : t("sampleFacilityName"))}</strong></div><div class="detail-pair"><small>${t("referralTime")}</small><strong>${escapeHTML(date)}</strong></div>${record.week ? `<div class="detail-pair"><small>${t("gestationalWeek")}</small><strong>${escapeHTML(record.week)}</strong></div>` : ""}</div>
    ${tracking ? `${stepsMarkup}<div class="record-controls"><label>${t("statusLabel")}<select data-action="update-status" data-id="${record.id}" aria-label="${t("advanceStatus")}">${statusValues.map((status, index) => `<option value="${status}"${status === record.status ? " selected" : ""}>${t(statusKeys[index])}</option>`).join("")}</select></label><span class="sample-label">${t("sampleData")}</span></div>` : `<div class="record-controls"><span class="status-tag teal">${statusText(record.status)}</span></div>`}</article>`;
}
function renderSettings() {
  return `${heading(t("settingsTitle"), t("settingsCopy"))}<div class="two-col">
    <section class="card card-pad"><div class="card-title-row"><h2>${t("settingsTitle")}</h2></div>
      <div class="settings-row"><div><strong>${t("displayLanguage")}</strong><p>${t("language")}</p></div><select id="settings-language" aria-label="${t("displayLanguage")}"><option value="en">English</option><option value="hi">हिन्दी</option><option value="mr">मराठी</option></select></div>
      <div class="settings-row"><div><strong>${t("clearSaved")}</strong><p>${t("savedRecordsCopy")}</p></div><button class="button button-danger button-small" data-action="clear-records" ${state.records.length ? "" : "disabled"}>${t("clearRecords")}</button></div>
    </section><div class="stack">${notice(t("privacyTitle"), t("privacyCopy"), "warning")}${notice(t("offlineTitle"), t("offlineCopy"))}${notice(t("clinicalTitle"), t("clinicalCopy"), "urgent")}</div></div>`;
}
function render() {
  const pages = {
    dashboard: ["dashboard", renderDashboard],
    assessment: ["checkTitle", renderAssessment],
    facilities: ["facilitiesTitle", renderFacilities],
    tracking: ["trackingTitle", renderTracking],
    records: ["recordsTitle", renderRecords],
    settings: ["settingsTitle", renderSettings]
  };
  const [titleKey, pageRenderer] = pages[state.page] || pages.dashboard;
  document.getElementById("page-title").textContent = t(titleKey);
  document.getElementById("main-content").innerHTML = pageRenderer();
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-page]").forEach(link => link.classList.toggle("active", link.dataset.page === state.page));
  document.getElementById("tracking-count").textContent = String(state.records.length);
  document.getElementById("tracking-count").classList.toggle("visible", state.records.length > 0);
  document.getElementById("language-select").value = state.lang;
  const settingsLanguage = document.getElementById("settings-language");
  if (settingsLanguage) settingsLanguage.value = state.lang;
  document.getElementById("connection-status").classList.toggle("offline", !navigator.onLine);
  document.getElementById("connection-label").textContent = navigator.onLine ? t("online") : t("offline");
  document.getElementById("menu-toggle").setAttribute("aria-label", t("openNavigation"));
  document.getElementById("sidebar").setAttribute("aria-label", t("mainNavigation"));
  document.getElementById("language-select").setAttribute("aria-label", t("language"));
  document.querySelector(".worker-avatar").setAttribute("aria-label", t("frontlineWorker"));
  document.documentElement.lang = state.lang;
  const facilityType = document.getElementById("facility-type");
  if (facilityType) facilityType.value = state.typeFilter;
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "start-assessment") startAssessment();
  if (action === "reset-assessment") {
    if (window.confirm(t("resetConfirm"))) {
      state.assessment = { phase: "details", caseRef: "", week: "", step: 0, answers: {} };
      state.resultRisk = null;
      state.selectedFacility = null;
      render();
    }
  }
  if (action === "answer") {
    state.assessment.answers[questions[state.assessment.step].id] = target.dataset.answer;
    render();
  }
  if (action === "assessment-back") {
    if (state.assessment.phase === "review") state.assessment.phase = "questions";
    else if (state.assessment.step > 0) state.assessment.step -= 1;
    else state.assessment.phase = "details";
    render();
  }
  if (action === "assessment-next") {
    if (!state.assessment.answers[questions[state.assessment.step].id]) return toast(t("errorAnswer"), true);
    if (state.assessment.step < questions.length - 1) state.assessment.step += 1;
    else state.assessment.phase = "review";
    render();
  }
  if (action === "edit-details") {
    state.assessment.phase = "details";
    render();
  }
  if (action === "assessment-submit") {
    state.resultRisk = getRisk();
    state.assessment.phase = "result";
    render();
  }
  if (action === "goto-facilities") goto("facilities");
  if (action === "select-facility") {
    state.selectedFacility = target.dataset.id;
    render();
  }
  if (action === "create-referral") createReferral(target.dataset.id);
  if (action === "delete-record") removeRecord(target.dataset.id);
  if (action === "clear-records") clearRecords();
});

document.addEventListener("submit", event => {
  if (event.target.id !== "assessment-details-form") return;
  event.preventDefault();
  const form = new FormData(event.target);
  const caseRef = String(form.get("caseRef") || "").trim();
  const week = String(form.get("week") || "").trim();
  if (!caseRef) return toast(t("errorCase"), true);
  if (week && (!/^\d+$/.test(week) || Number(week) < 1 || Number(week) > 45)) return toast(t("errorWeek"), true);
  state.assessment.caseRef = caseRef;
  state.assessment.week = week;
  state.assessment.phase = "questions";
  render();
});

document.addEventListener("change", event => {
  if (event.target.id === "language-select" || event.target.id === "settings-language") setLanguage(event.target.value);
  if (event.target.id === "facility-type") {
    state.typeFilter = event.target.value;
    render();
  }
  if (event.target.matches('[data-action="update-status"]')) updateStatus(event.target.dataset.id, event.target.value);
});

document.addEventListener("input", event => {
  if (event.target.id === "facility-search") {
    const selection = event.target.selectionStart;
    state.search = event.target.value;
    const cursor = selection;
    render();
    const search = document.getElementById("facility-search");
    search.focus();
    search.setSelectionRange(cursor, cursor);
  }
});

function createReferral(facilityId) {
  const facility = getFacility(facilityId);
  if (!facility) return toast(t("errorFacility"), true);
  if (state.assessment.phase !== "result" || !state.assessment.caseRef) return toast(t("selectToContinue"), true);
  const record = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    caseRef: state.assessment.caseRef,
    week: state.assessment.week,
    signs: questions.filter(question => state.assessment.answers[question.id] !== "no").map(question => question.id),
    risk: state.resultRisk || getRisk(),
    facilityId,
    createdAt: Date.now(),
    status: "prepared"
  };
  state.records.unshift(record);
  if (!saveRecords()) {
    state.records.shift();
    return;
  }
  state.selectedFacility = facilityId;
  toast(t("savedToast"));
  goto("tracking");
}
function removeRecord(id) {
  if (!window.confirm(t("deleteConfirm"))) return;
  const previous = state.records;
  state.records = state.records.filter(record => record.id !== id);
  if (!saveRecords()) { state.records = previous; return; }
  toast(t("deletedToast"));
  render();
}
function clearRecords() {
  if (!state.records.length || !window.confirm(t("clearConfirm"))) return;
  const previous = state.records;
  state.records = [];
  if (!saveRecords()) { state.records = previous; return; }
  toast(t("clearedToast"));
  render();
}
function updateStatus(id, status) {
  if (!statusValues.includes(status)) return;
  const record = state.records.find(item => item.id === id);
  if (!record) return;
  const oldStatus = record.status;
  record.status = status;
  if (!saveRecords()) { record.status = oldStatus; render(); return; }
  toast(t("statusToast"));
  render();
}

document.getElementById("menu-toggle").addEventListener("click", () => {
  const open = document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("sidebar-scrim").classList.toggle("open", open);
  document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
});
document.getElementById("sidebar-scrim").addEventListener("click", closeMenu);
document.querySelectorAll("[data-page]").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  goto(link.dataset.page);
}));
document.getElementById("language-select").addEventListener("change", event => setLanguage(event.target.value));
window.addEventListener("online", () => { render(); toast(t("onlineMessage")); });
window.addEventListener("offline", () => { render(); toast(t("offlineToast"), true); });
window.addEventListener("hashchange", () => {
  const page = location.hash.slice(1);
  if (["dashboard", "assessment", "facilities", "tracking", "records", "settings"].includes(page) && page !== state.page) {
    state.page = page;
    render();
  }
});

const initialPage = location.hash.slice(1);
if (["dashboard", "assessment", "facilities", "tracking", "records", "settings"].includes(initialPage)) state.page = initialPage;
document.documentElement.lang = state.lang;
render();
