/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');



// DEFAULT HANDLERS ------------ 

const StartFAQsHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'LaunchRequest' || request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StartOverIntent');
  },
  handle(handlerInput) {

    const speechOutput = 'Hello Trojan! Helen of Troy welcomes you to USC Libraries FAQ. What would you like to know? ';

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'LaunchRequest' || request.type === 'IntentRequest' &&
      request.intent.name === 'AMAZON.HelpIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .withSimpleCard(SKILL_NAME, HELP_MESSAGE)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' &&
      (request.intent.name === 'AMAZON.CancelIntent' ||
        request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .withSimpleCard(SKILL_NAME, STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error must have occurred. Please ask any question... ')
      .withSimpleCard(SKILL_NAME, 'Sorry, an error must have occurred. Please ask any question... ')
      .reprompt('You can ask any question or say exit... ')
      .getResponse();
  },
};



// CUSTOM QUESTION HANDLERS ------------

const Q1Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'AlumniBooksIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_1 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_1 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q2Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'AlumniResourcesIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_2 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_2 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q3Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'USCCardMoneyIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_3 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_3 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q4Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'GrandLibraryLocationIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_4 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_4 +  "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q5Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'BestStudyPlacesIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_5 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_5 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q6Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LibraryBarcodeIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_6 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_6 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};


const Q7Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'IsUSCLibraryPublicIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_7 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_7 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};


const Q8Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LaptopCheckoutIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_8 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_8 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};


const Q9Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'ReturnBooksIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_9 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_9 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q10Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'AboutUSCIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_10 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_10 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q11Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'DohenyBooksIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_11 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_11 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q12Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LibraryHistoryIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_12 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_12 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q13Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'ElRodeoIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_13 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_13 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q14Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'WSJIntent');
  },
  handle(handlerInput) {

    const request = handlerInput.requestEnvelope.request;
    let journal_name = request.intent.slots.newspaperName.value;

    const ANS_14 = 'The USC Libraries does have access to the ' + journal_name +
      '. To find this, or any other newspaper,  First, Go to the USC Libraries main homepage;\
      Second, Select Journals below the main search box; Third, search for Wall Street Journal \
      or any other newspaper... ';

    return handlerInput.responseBuilder
      .speak(ANS_14 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_14 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q15Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'OpenHoursIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_15 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_15 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q16Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'PrivilegesIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_16 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_16 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q17Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LanguageIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_17 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_17 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q18Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'TextBooksIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_18 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_18 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q19Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'AudioBooksIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_19 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_19 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q20Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'FilmedOnCampusIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_20 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_20 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q21Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'FaxMachineIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_21 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_21 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q22Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'HoldsIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_22 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_22 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q23Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LostandFoundIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_23 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_23 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q24Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LostBookIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_24 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_24 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q25Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LocateBookIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_25 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_25 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q26Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'ShareCardIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_26 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_26 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q27Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'HerklotzIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_27 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_27 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q28Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'ObtainArticlesIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_28 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_28 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q29Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'LibraryComputersIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_29 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_29 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q30Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'InterlibraryLoanIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_30 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_30 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};

const Q31Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (request.type === 'IntentRequest' &&
      request.intent.name === 'RenewBooksIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(ANS_31 + HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, ANS_31 + "\n\n" + HELP_REPROMPT_2)
      .reprompt(HELP_REPROMPT_3)
      .getResponse();
  },
};





// CONSTANTS --------

const SKILL_NAME = 'USC Library FAQs ';
const GET_FACT_MESSAGE = 'Here\'s your answer: ';
const HELP_MESSAGE = 'You can ask me a USC Library FAQ and I may have a response!... How may I help you? ';
const HELP_REPROMPT = '<break time = "1s" /> What can I help you with ? Ask me any FAQ!';
const HELP_REPROMPT_2 = 'What can I help you with ? Ask me any FAQ!';
const HELP_REPROMPT_3 = 'You can ask me a USC Library FAQ or you can say exit..How may I help you?';
const STOP_MESSAGE = 'Thank you for your time. Goodbye and Fight on! ';
const BAD_ANS = 'Sorry, currently we don\'t have an answer for that. Anything else you would like to know? ';


// ANSWERS --------------

const ANS_1 = 'Graduating USC students retain their full library privileges until the beginning of the next semester. For example, if you graduate in May, you will continue to have full access to the libraries until the end of August. After that time, to obtain a USC Libraries borrowing card, alumni need to first receive a membership card from the USC Alumni Association; online or in person at the Tutor Center Room 305. Once their Alumni Association card is registered at the Doheny Library Circulation Desk, alumni will be able to check out up to 20 books in person from the library for 4 weeks... ';
const ANS_2 = 'In the Doheny Library, alumni can access electronic library materials from the guest computers.  Please request a guest log in at the Doheny Circulation desk. From off-campus, alumni who register with the USC Alumni Association can access a limited number of library databases including the ProQuest Research Library, JSTOR, Project MUSE and Gale Virtual Reference Library  through the Alumni Association web site... ';
const ANS_3 = 'There are 3 ways to add funds to your USC Card: 1, Go to USC Card services located in McCarthy Way Parking Structure and use a credit card or cash to put money on your USC Card. 2, Log into your account online. You can either charge to a credit card or charge to your student bill. Charging to a credit card is not an immediate transaction because it is manually processed during office hours. If you need money added immediately it is better to charge to your student bill. 3, Add cash to your card via the machine in the Leavey Library Lower Level... ';
const ANS_4 = 'Grand Depository refers to the Grand Avenue Library, located at 3434 South Grand Avenue. You can request items located in Grand via USC Libraries catalog.  They will be delivered to Leavey Library or the Science and Engineering Library. Here is the contact information for the Grand Avenue Library: email address is grandlib@usc dot edu and phone number is (213) 821 2045... ';
const ANS_5 = 'Each USC library has spaces for individual and group study and the best place to study is going to depend on your personal preference. Many libraries have rooms you can reserve for group study or other events. On USC Libraries gateways website, select “Locations and Services,” and then explore spaces in each of the libraries on campus... ';
const ANS_6 = 'Your library barcode is the 10 digit number on your USC ID card and the 4 digits on the back of your ID card. Before using your barcode for library transactions for the first time, you will need to activate it at a library circulations desk... ';
const ANS_7 = 'Yes. The public may use the libraries when resources are not in use by or reserved for members of the USC community. However, only USC students, faculty, staff, alumni and sponsored guests may be present in libraries open after 9:00 p.m. or before 7:00 a.m. All patrons will be asked to present their USCard or alternate form of ID to gain access to the Doheny Memorial Library, Leavey Library, and VKC Library during all hours of operation. For more information, view USC Libraries\' Usage Policies... ';
const ANS_8 = 'You can check out a Windows laptop from Leavey Library\'s Circulation Desk. These laptops have web browsers, Microsoft Office, and Adobe Acrobat Reader. They may be checked out for 8 hours with no renewal.USC Information Technology Services (ITS) also provides laptops for students to checkout from these USC Computer Centers: Ahmanson Information Commons at Leavey Library (Leavey Library, Basement Level). King Hall (room 206). Salvatori Computer Science Center (room 125). Waite Phillips Hall (room B34).For more information, consult the ITS Computing Center Laptop Loaner Program web page... ';
const ANS_9 = 'Books can be returned to any USC library during the times that they are open, regardless which library you originally checked out the books. Many USC libraries also have book return slots (or book bins) near their entrances for after-hours returns. Standard circulating materials may also be returned at one of two external locations: Doheny Book Return Bin, in the McCarthy Quad. Leavey Book Return Bin: behind the Leavey Library on  West 34th Street. Exception: Books borrowed through Interlibrary Loan must be returned directly to Leavey Library... ';
const ANS_10 = 'The University of Southern California is a private research university in Los Angeles, California. Founded in 1880, it is the oldest private research university in California. USC has historically educated a large number of the nation\'s business leaders and professionals ... ';
const ANS_11 = 'To find books in the Doheny Library stacks, you need to go behind the main circulation desk in the lobby. Simply, follow the sign that reads ENTRANCE TO BOOK STACKS to the right of the front circulation desk on the main floor. The stacks constitute 9 levels of shelving in the internal section of the library... ';
const ANS_12 = 'The Edward L Doheny Memorial Library was built in 1932... ';
const ANS_13 = 'Print copies of the USC yearbook also known as El Rodeo can be found in the Librarys Special Collections Department.... ';
// -- ans 14 inside handler -- 
const ANS_15 = 'During the regular academic year (except for certain University holidays) the Leavey Library is open 24 hours. Full details of their hours can be found on the USC Libraries home page...';
const ANS_16 = 'Borrowing privileges vary depending on the user. All current full time USC students, faculty, and staff have a check-out limit of 200 books. Alumni and retired staff or faculty typically have a limit of 20 books. Non-USC users may receive borrowing privileges if they fall into certain categories. Please email or call USC Libraries customer service for more information. The email address is:  dmlnotes@usc dot edu. The phone number is 213-740-2924... ';
const ANS_17 = 'The library does not have Rosetta Stone or other foreign language software programs. The best source for foreign language instruction material is the Los Angeles Public Library - the Central Library is at 630 West 5th Street in Downtown Los Angeles. You might also contact the USC Language Center, Taper Hall third floor.  They may have some helpful materials.;; ';
const ANS_18 = 'The Library does not typically purchase textbooks, although a professor may occasionally use one of our books as a textbook. Some USC professors do place textbooks on Reserve for their classes. NOTE: textbooks cannot be borrowed through interlibrary loan. Check the USC Libraries Online Catalog, via USC Libraries home page to see if a particular textbook title is available... ';
const ANS_19 = 'We have no audio books in USC Libraries.  However, the Los Angeles Public Library does.... ';
const ANS_20 = 'USC has been a location of choice for films, TV shows, commercials, print ads and public service announcements for more than 75 years.  The titles such as The Graduate, City Slickers II, and  How to Get Away with Murder are just a few examples.';
const ANS_21 = 'The library does not provide faxing services; however, faxing is available at the Mail Stop in the McCarthy Way Parking Structure, open Monday through Friday (Excluding University Holidays) from 9 a .m. to 5 p. m.';
const ANS_22 = 'We operate on a first-come/first-serve basis and do not page books that are currently available. You can only put books on hold when they are currently checked out to another user.  We refer to this as recalling books (from another user). Please check the USC Libraries Catalog, to see whether a book you need is on the shelf in one of the USC Libraries. If a due date appears in the Location field, the book is checked out. Follow these steps to place a hold/recall: 1, Go to the USC Libraries Catalog and pull up the record for the book that you want to check out. 2, Under Availability, click on the link labeled Request. 3, Select the library you want to pick the book up from. 4, In the section labeled Not Needed After, put in the date that you no longer need the book (if there is one.) 5, Click REQUEST.';
const ANS_23 = 'The Doheny Library lost-and-found is located at the librarys main Circulation Desk. The phone number is (213) 740 2924. 1, For the lost-and-found in other USC libraries, please contact the circulation desk of that library directly. 2, For campus lost-and-found, contact DPS at (213) 740 9759';
const ANS_24 = 'Please contact the USC Library from which you have checked out the book. A full-time staff member will explain the necessary procedures for replacement and any fees you may need to pay.';
const ANS_25 = 'When you cannot locate a book on the shelf, but the USC Libraries Catalog says it should be available, go to that librarys circulation desk and ask for assistance. A staff member will help you track down the book.';
const ANS_26 = 'No. Library privileges (including borrowing books) can never be transferred to another individual. Please see the library privileges and rules for USC students for more information... ';
const ANS_27 = 'The Herklotz room is in the Music Library, which is located on the ground floor of the Doheny Memorial Library...';
const ANS_28 = 'In most cases, you do not have to pay. If the USC Libraries does not have access to an article which you need, you can usually obtain the article at no charge by using the Libraries InterLibrary Loan service.  Fill out the on-line form to request the needed article and Document Delivery staff will email you a copy of it. Some materials (notably business reports) are often available only for a fee. Please see the example of getting reports from the IBISWorld business site for more information...';
const ANS_29 = 'Most computers within the campus libraries require a login and are restricted to current USC students, faculty, and staff members. However, Doheny Library does provide two public access computers for non-USC people (stand-up terminals only) to conduct academic research. In order to use one of these public access computers, you will need to ask at the circulation desk. As of July 17, 2017, you will need to provide a state or school issued ID in order to gain access to a public access computer. A library supervisor will then log you into the computer. Please note that the login expires automatically after 30 minutes. Patrons are limited to two logins total, per day...';
const ANS_30 = 'ILLIAD is the USC Libraries Interlibrary Loan and Document Delivery service: Interlibrary Loan (ILL) obtains articles, book chapters, and other documents not owned or otherwise not available from USC. Document Delivery provides articles, book chapters, and other documents that are owned by USC, scanned and delivered to you via a link in an email. Document Delivery is available to all current USC faculty, staff, and graduate students. ILLIAD is free to all current USC students, staff, and faculty at the University Park campus. For a complete list of Library policies concerning document delivery and interlibrary loan, consult the IDD research guide...';
const ANS_31 = 'You can renew items: 1. Online, using the USC Libraries\' Renew Books feature. 2. In person, at any USC library circulation desk. 3. By email at dmlnotes@usc.edu. 4. Over the phone, by contacting any USC library\'s circulation desk. Please note that most items may only be renewed no more than 10 times.';

const skillBuilder = Alexa.SkillBuilders.custom();


exports.handler = skillBuilder
  .addRequestHandlers(
    StartFAQsHandler,
    HelpHandler,
    ExitHandler,
    Q1Handler,
    Q2Handler,
    Q3Handler,
    Q4Handler,
    Q5Handler,
    Q6Handler,
    Q7Handler,
    Q8Handler,
    Q9Handler,
    Q10Handler,
    Q11Handler,
    Q12Handler,
    Q13Handler,
    Q14Handler,
    Q15Handler,
    Q16Handler,
    Q17Handler,
    Q18Handler,
    Q19Handler,
    Q20Handler,
    Q21Handler,
    Q22Handler,
    Q23Handler,
    Q24Handler,
    Q25Handler,
    Q26Handler,
    Q27Handler,
    Q28Handler,
    Q29Handler,
    Q30Handler,
    Q31Handler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
