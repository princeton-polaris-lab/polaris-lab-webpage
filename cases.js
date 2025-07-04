
/* -------------------- DATA -------------------- */
/*  AI-Hallucination / Ghost-Citation cases  */
const hallucinationCases = [
  {
    "name": "Washington v. State Farm Fire and Casualty Company, No. 2025-CA-0047 (La. App. 4th Cir. June 12 2025)",
    "court": "Court of Appeal of Louisiana, Fourth Circuit, USA",
    "state": "LA",
    "filer": "Pro se",
    "judge": "Judge Rachael D. Johnson",
    "date": "2025-06-12",
    "order_date": "2025-06-12",
    "filing_date": "unknown",
    "outcome": "No explicit action on fabricated citation, but the court found the plaintiff's argument without merit due to lack of supporting evidence",
    "outcomeClass": "warning",
    "desc": "“Ms. Washington cites Burke v. Baton Rouge Metro. Airport, 940 So. 2d 120, 124 (La. 2006) in support of her arguments. However, this case does not exist... With no supporting evidence and no arguments or case law to show that there was manifest injustice in the district court’s judgement, we find Ms. Washington’s argument without merit.”",
    "links": {
      "Opinion": "https://cases.justia.com/louisiana/fourth-circuit-court-of-appeal/2025-2025-ca-0047.pdf"
    }
  },
  {
    "name": "Commonwealth v. Deleon, No. 1103 MDA 2024 (Pa. Super. Ct. June 16 2025)",
    "court": "Superior Court of Pennsylvania, USA",
    "state": "PA",
    "filer": "Lawyer",
    "judge": "Judge Mary Jane Bowes",
    "date": "2025-06-16",
    "order_date": "2025-06-16",
    "filing_date": null,
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "“PCRA counsel provided invalid citations for both cases, listing an incorrect initial page number for Gomez and referring to Batson as Boston. We admonish counsel to exercise greater care in drafting his briefs, lest similar errors leave a future court unable to uncover the case he meant to cite and lead it to conclude that they were artificial intelligence hallucinations.”",
    "links": {
      "Opinion": "https://scholar.google.com/scholar_case?case=15267404793381339693"
    }
  },
  {
    "name": "Miller v. Kansas Department of Children and Families, No. 25-2145-KHV (D. Kan. Jun. 20 2025)",
    "court": "U.S. District Court, District of Kansas, USA",
    "state": "KS",
    "filer": "Pro se",
    "judge": "Senior District Judge Kathryn H. Vratil",
    "date": "2025-06-20",
    "order_date": "2025-06-20",
    "filing_date": null,
    "outcome": "Mandated disclosure of AI use",
    "outcomeClass": "warning",
    "desc": "“On April 4, 2025, for punitive reasons, Judge O'Grady imposed a selective Artificial Intelligence (\"AI\") certification rule, which mandated that plaintiff disclose her use of AI in pleadings. Plaintiff alleges that the AI certification rule obstructed her access to the courts.”",
    "links": {
    "Opinion": "https://scholar.google.com/scholar_case?case=6108113596586623700"
    }
    },
  {
    "name": "United States v. Brown, No. 19-cr-60181-ALTMAN (S.D. Fla. Jun. 23 2025)",
    "court": "U.S. District Court, Southern District of Florida, USA",
    "state": "FL",
    "filer": "Pro se",
    "judge": "District Judge Roy K. Altman",
    "date": "2025-06-23",
    "order_date": "2025-06-23",
    "filing_date": "",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "“One last thing: the Defendant seems to have used ChatGPT or some other generative AI assistant to draft the Motion … the only two cases he cites—‘United States v. Liriano, 70 F.3d 79 (1st Cir. 1995),’ and ‘United States v. Hardin, 2018 WL 3659342 (S.D. Fla. 2018)’—seem to have been ‘hallucinated’ by the machine...We won't penalize the Defendant for submitting fictitious cases this time, but he may not continue to do so in the future.”",
    "links": {
      "Opinion": "https://scholar.google.com/scholar_case?case=14684301401158197078"
    }
  },
  {
    "name": "Angelo v. Allen, 2025 MT 135N, No. DA 24-0574 (Mont. Jun. 24 2025)",
    "court": "Supreme Court of Montana",
    "state": "MT",
    "filer": "Pro se",
    "judge": "Justice James Jeremiah Shea",
    "date": "2025-06-24",
    "order_date": "2025-06-24",
    "filing_date": "2025-08-28",
    "outcome": "Court declines to consider arguments supported only by non-existent case law",
    "outcomeClass": "sanction",
    "desc": "“Allen's brief cites a number of cases in support of her argument which might be persuasive if they existed—but they do not. It appears that Allen's brief may have been written with assistance from artificial intelligence (‘AI’). Although our current rules do not prohibit the use of AI in drafting briefs, we do require that a party provide accurate citations in support of their arguments. While we consistently make accommodations for self-represented litigants by relaxing the technical and substantive requirements of litigating in this Court, it is reasonable to expect all litigants—including those representing themselves—to adhere to the procedural rules that ensure a fair judicial process. Cox v. Magers, 2018 MT 21, ¶ 15, 390 Mont. 224, 411 P.3d 1271 (citation omitted). We have consistently held that when a party fails to support their arguments with sufficient citation to existing authority, we will not develop their analysis for them. McCulley v. Am. Land Title Co., 2013 MT 89, ¶ 20, 369 Mont. 433, 300 P.3d 679. Because Allen fails to sufficiently support her arguments on appeal with citations to existing authority, we decline to consider them.”",
    "links": {
      "Opinion": "https://caselaw.findlaw.com/court/mt-supreme-court/117415617.html"
    }
  },
  {
    "name": "Nelson v. Washington Board of Industrial Appeals, No. 3:25-cv-05551-DGE (W.D. Wash. June 26 2025)",
    "court": "U.S. District Court, Western District of Washington, Tacoma, USA",
    "state": "WA",
    "filer": "Pro se",
    "judge": "U.S. District Judge David G. Estudillo",
    "date": "2025-06-26",
    "order_date": "2025-06-26",
    "filing_date": null,
    "outcome": "Court allows plaintiff to use AI but warns of sanctions for fabricated citations",
    "outcomeClass": "warning",
    "desc": "“Plaintiff is also admonished not to rely on the AI program’s legal analysis as AI programs are known to ‘hallucinate’ by identifying citations that do not exist. In fact, Plaintiff has already submitted at least one brief containing a citation that does not exist… If Plaintiff submits inaccurate or ‘hallucinated’ citations, Plaintiff will be subject to sanctions pursuant to Federal Rule of Civil Procedure 11(c)...In short, the Court at present finds no basis to prohibit Plaintiff from utilizing any computer program that may assist him in filing documents with the Court. The Court also offers no opinion at this time whether an AI program, such as Athena AI, is an “auxiliary aid” for purposes of Title II of the American with Disabilities Act.”",
    "links": {
      "Opinion": "https://cases.justia.com/federal/district-courts/washington/wawdce/3%3A2025cv05551/349668/17/0.pdf"
    }
  },
  {
    "name": "Khlafa v. Oregon Health and Science University, Case No. 3:23-cv-01013-SI (D. Or. Nov. 1 2024)",
    "court": "U.S. District Court, District of Oregon, USA",
    "state": "OR",
    "filer": "Pro se",
    "judge": "District Judge Michael H. Simon",
    "date": "2024-11-01",
    "order_date": "2024-11-01",
    "filing_date": "2024-07-31",
    "outcome": "Court flagged multiple non-existent or mis-described cases cited by the pro-se plaintiff but deferred any decision on sanctions to a later order.",
    "outcomeClass": "pending",
    "desc": "“Several of these cited cases, however, do not appear to exist; others do exist, but Plaintiff grossly misstates the facts, analyses, and holdings of these cases. In a separate Order, the Court will address these bogus citations and case descriptions.”",
    "links": {
      "Opinion": "https://www.govinfo.gov/content/pkg/USCOURTS-ord-3_23-cv-01013/pdf/USCOURTS-ord-3_23-cv-01013-1.pdf",
      "Filing": "https://www.courtlistener.com/docket/67599657/khlafa-v-oregon-health-and-science-university/#entry-52"
    }
  },  
  {
    "name": "Alcock v. Doe, C.A. No. 25-11589-WGY (D. Mass. Jun. 5 2025)",
    "court": "U.S. District Court, District of Massachusetts, USA",
    "state": "MA",
    "filer": "Pro se",
    "judge": "District Judge William G. Young",
    "date": "2025-06-05",
    "order_date": "2025-06-05",
    "outcome": "Sanctions in original case, TRO denied",
    "outcomeClass": "sanctions",
    "desc": "“The civil rights complaint is brought pursuant to 42 U.S.C. § 1983 seeking multiple forms of declaratory and injunctive relief against two Massachusetts state court judges identified as John Doe 1 and John Doe 2.[1] The claims stem from what Alcock alleges were unconstitutional actions taken in a lawsuit that he had filed against his parents and others seeking to recover financial losses due, in part, to unauthorized financial transactions. . . . As to John Doe 1, Alcock states that he issued an order on December 19, 2024 that \"selectively presented evidence to Plaintiff's prejudice\" and on May 8, 2025 issued an order that imposed \"monetary sanctions on Plaintiff primarily due to alleged AI-generated citation errors, and who subsequently issued the final Order dismissing the MA State Court Action on May 15, 2025.\"",
    "links": {
      "Opinion": "https://scholar.google.com/scholar_case?case=9044344629826775098"
    }
  },
  {
    "name": "Cordero Romero v. Goldman Sachs Bank USA, No. 1:25-cv-2857-GHW (S.D.N.Y. Jun. 25 2025)",
    "court": "U.S. District Court, Southern District of New York, USA",
    "state": "NY",
    "filer": "Pro se",
    "judge": "District Judge Gregory H. Woods",
    "date": "2025-06-25",
    "order_date": "2025-06-25",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "“Second, Plaintiff’s citation to Beckford v. City of New York, No. 12-cv-9231, 2015 WL 5521435 … appears to be completely fictitious....The Court is not making a finding at this time that Plaintiff presented fake citations to the Court as the result of the use of generative artificial intelligence. Plaintiff is representing himself in this action pro se in this case, and, as such, the Court affords him special solicitude. As a result, the Court is not taking action at this time as a result of Plaintiff's presentation of fictitious citations to the Court.”",
    "links": {
      "Opinion": "https://scholar.google.com/scholar_case?case=17705707023637124604"
    }
  },
  {
    "name": "Carter v. UZGlobal LLC, No. 1:23-cv-01013-MV-JHR (D.N.M. Jun. 27 2025)",
    "court": "U.S. District Court, District of New Mexico, USA",
    "state": "NM",
    "filer": "Lawyer",
    "judge": "United States Magistrate Judge Jerry H. Ritter",
    "date": "2025-06-27",
    "order_date": "2025-06-27",
    "filing_date": null,
    "outcome": "Order to show cause",
    "outcomeClass": "pending",
    "desc": "“Plaintiffs’ Response to Defendant Amazon.com, Inc.’s Motion for Protective Order and Alternative Motion for Sharing Provision [Doc. 85] … contained incorrect citations including at least one citation to a case that does not exist.”",
    "links": {
      "Opinion": "https://app.midpage.ai/document/carter-v-uzglobal-llc-11085685"
    }
  },
  {
    "name": "Ravel Ferrera Parra v. United States, No. 25-cv-431 (Fed. Cl. Jun. 27 2025)",
    "court": "United States Court of Federal Claims",
    "state": "DC",
    "filer": "Pro se",
    "judge": "Judge Eleni M. Roumel",
    "date": "2025-06-27",
    "order_date": "2025-06-27",
    "filing_date": null,
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "“The citation of fake, AI-created cases in briefing is ‘an abuse of the adversary system’ and unacceptable...Here, too, a warning will suffice, as the Court lacks jurisdiction over Plaintiff’s claims and Defendant has not requested sanctions. Plaintiff, however, is now on notice of the risks associated with using AI. Accordingly, Plaintiff is advised that he may be subject to sanctions, should he file additional pleadings in this or other courts referencing fictional AI-generated legal authority.”",
    "links": {
      "Opinion": "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_25-cv-00431/pdf/USCOURTS-cofc-1_25-cv-00431-0.pdf"
    }
  },
  {
    "name": "Jakes v. Youngblood, No. 2:24-cv-01608-WSS (W.D. Pa. Jun. 26 2025)",
    "court": "U.S. District Court, Western District of Pennsylvania, USA",
    "state": "PA",
    "filer": "Lawyer",
    "judge": "District Judge William S. Stickman IV",
    "date": "2025-06-26",
    "order_date": "2025-06-26",
    "filing_date": "2025-05-05",
    "outcome": "Motion to dismiss and reply brief were stricken; counsel ordered to show cause why Rule 11 and Pa. RPC 3.3 sanctions should not issue",
    "outcomeClass": "action_taken",
    "desc": "“The Court presumes that Youngblood’s briefs were constructed by generative artificial intelligence used by Blackburn, rather than an effort by Blackburn to personally construct false and misleading briefs. It does not matter...”",
    "links": {
    "Filing": "https://storage.courtlistener.com/recap/gov.uscourts.pawd.314851/gov.uscourts.pawd.314851.43.0.pdf",
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.pawd.314851/gov.uscourts.pawd.314851.53.0.pdf"
    }
  },
  {
    "name": "Auto Test Ltd. v. Ministry of Transport & Road Safety et al., Admin. Petition 25536-04-25 (Tel Aviv-Jaffa Admin. Ct. June 25 2025)",
    "court": "Administrative Court of Tel Aviv-Jaffa, Israel",
    "state": "IL",
    "filer": "Lawyer",
    "judge": "Judge Kobi Vardi",
    "date": "2025-06-25",
    "order_date": "2025-06-25",
    "filing_date": "2025-04-25",
    "outcome": "The court declined to award costs to the petitioner and imposed no sanctions despite the fabricated citations.",
    "outcomeClass": "no_action",
    "desc": "As to the petitioner: its counsel (who apologised) acted improperly by using artificial-intelligence tools that injected non-existent or erroneous case-law citations into the petition and its supplements. Under Supreme Court precedent, the petition could have been summarily dismissed; I refrained from doing so because of the State’s conduct and the importance of issuing the tender. Given this misconduct—and the fact that the petition sought numerous remedies, some beyond this Court’s jurisdiction—no costs are awarded to the petitioner. (Warning: translation using ChatGPT, may contain errors.)",
    "links": {
      "Opinion": "https://www.law.co.il/media/computer-law/auto_test.pdf"
    }
  },
  {
    "name": "Sullivan v. Wisnovsky, No. 1:21-cv-00157-CL (D. Or. Jun. 16 2025)",
    "court": "U.S. District Court, District of Oregon, Medford Division, USA",
    "state": "OR",
    "filer": "Lawyer",
    "judge": "Magistrate Judge Mark D. Clarke",
    "date": "2025-06-16",
    "order_date": "2025-06-16",
    "filing_date": "",
    "outcome": "Order to show cause issued",
    "outcomeClass": "pending",
    "desc": "“Across these three briefs Plaintiffs cite to fifteen non-existent cases and misrepresent quotations from seven real cases.”",
    "links": {
      "Docket": "opinion_pdfs/Sullivan_v._Wisnovsky_Oregon_USA_14_June_2025-1.pdf"
    }
  },
  {
    "name": "Northbound Processing (Pty) Ltd v. South African Diamond and Precious Metals Regulator, Case No. 2025-072038 (Gauteng Div., Johannesburg, 30 June 2025)",
    "court": "High Court of South Africa, Gauteng Division, Johannesburg",
    "state": "ZA",
    "filer": "Lawyer",
    "judge": "Acting Judge DJ Smit",
    "date": "2025-06-30",
    "order_date": "2025-06-30",
    "filing_date": "2025-05-20",
    "outcome": "counsel referred to the Legal Practice Council",
    "outcomeClass": "referral",
    "desc": "“two cases cited in Northbound’s heads of argument for key propositions on the mandamus, that could have been dispositive of this matter if they applied, do not exist....there was no deliberate attempt to mislead the court in relation to the use of incorrect case citations in the heads of argument. Their apologies are acknowledged.”",
    "links": {
      "Opinion": "https://lawlibrary.org.za/akn/za-gp/judgment/zagpjhc/2025/538/eng@2025-06-30"
    }
  },
  {
    "name": "Doe v. Noem, No. 1:25-cv-01352 (D.D.C. Jul. 1 2025)",
    "court": "U.S. District Court, District of Columbia, USA",
    "state": "DC",
    "filer": "Lawyer",
    "judge": "District Judge Amit P. Mehta",
    "date": "2025-07-01",
    "order_date": "2025-07-01",
    "filing_date": "2025-06-20",
    "outcome": "Show-cause order issued regarding fabricated citation",
    "outcomeClass": "no_action",
    "desc": "“Counsel for Plaintiff shall show cause ... for citing Moms Against Poverty v. Department of State, 2022 WL 17951329 (D.D.C. Dec. 23, 2022), a seemingly non-existent authority … The court has found no such case on Westlaw or in the court's electronic docketing system.”",
    "links": {
      "Order": "https://www.courtlistener.com/docket/70119596/doe-v-noem/#minute-entry-430139754",
      "Filing": "https://www.courtlistener.com/recap/gov.uscourts.dcd.280229/gov.uscourts.dcd.280229.22.0.pdf"
    }
  },  
  {
    "name": "Murray on behalf of the Wamba Wemba Native Title Claim Group v State of Victoria, [2025] FCA 731, VID 14 of 2022 (FCA Apr. 22 2025)",
    "court": "Federal Court of Australia, Victoria Registry",
    "state": "VIC",
    "filer": "Lawyer",
    "judge": "Justice Murphy",
    "date": "2025-04-22",
    "order_date": "2025-04-22",
    "outcome": "Solicitors ordered to personally pay respondents’ costs on an indemnity basis for using AI-generated citations",
    "outcomeClass": "sanctions",
    "desc": "“The solicitors for the applicants... shall personally pay the costs of the respondents, on an indemnity basis, incurred through the firm’s use of artificial intelligence in the preparation of documents served on the respondents…”",
    "links": {
      "Opinion": "https://www.judgments.fedcourt.gov.au/judgments/Judgments/fca/single/2025/2025fca0731"
    }
  },  
  {
    "name": "Shahid v. Esaam, No. A25A0196 (Ga. Ct. App. Jun. 30 2025)",
    "court": "Court of Appeals of Georgia, USA",
    "state": "GA",
    "filer": "Judge, Lawyer",
    "judge": "Judge Jeffrey Watkins",
    "date": "2025-06-30",
    "order_date": "2025-06-30",
    "filing_date": "unknown",
    "outcome": "Order vacated and remanded",
    "outcomeClass": "vacated",
    "desc": "“We are troubled by the citation of bogus cases in the trial court's order...” \"We are deeply troubled, however, that Lynch submitted to this Court an Appellee's Brief, completely ignoring the second of two arguments that Wife raised in her Appellant's Brief and Application for Discretionary Review (wherein Wife pointed out the two fictitious cases in the trial court's order),14 and provided 11 bogus case citations 15 out of 15 total,16 one of which was in support of a frivolous request for attorney fees.\"",
    "links": {
      "Opinion": "https://caselaw.findlaw.com/court/ga-court-of-appeals/117442275.html"
    }
  },
  {
    "name": "LaPointe v. Chief Animal Welfare Inspector, Nos. 16430, 16507, 16514, 16515, 16558, 16559 & 16602/ACRB (Animal Care Review Board Jun. 30 2025)",
    "court": "Animal Care Review Board, Tribunals Ontario, Canada",
    "state": "ON",
    "filer": "Pro se",
    "judge": "Vice-Chair Anxhela (Angela) Peco",
    "date": "2025-06-30",
    "order_date": "2025-06-30",
    "outcome": "Non-compliant submissions struck from evidence",
    "outcomeClass": "limited_action",
    "desc": "“Mr. LaPointe’s use of artificial intelligence tools has produced false or misleading information. This information includes veterinary opinions that are likely fabricated and citations to non-existent cases or cases that do not stand for the legal principles for which he relies on them.”",
    "links": {
      "Opinion": "https://canlii.ca/t/kcz4p"
    }
  },
  {
    "name": "Hussein v. Canada (Immigration, Refugees and Citizenship), 2025 FC 1138 (F.C. June 24 2025)",
    "court": "Federal Court of Canada",
    "state": "ON",
    "filer": "Lawyer",
    "judge": "Associate Judge Catharine Moore",
    "date": "2025-06-24",
    "order_date": "2025-06-24",
    "filing_date": "unknown",
    "outcome": "Costs awarded ($100)",
    "outcomeClass": "costs",
    "desc": "“Several cases were relied upon by Applicant’s counsel which did not exist and, further, that four directions of the Court were required before Applicant’s counsel admitted that generative AI had been used and had resulted in the error.”",
    "links": {
      "Opinion": "https://www.canlii.org/en/ca/fct/doc/2025/2025fc1138/2025fc1138.html"
    }
  },
  {
    "name": "J.R.V. v. N.L.V., 2025 BCSC 1137 (Supreme Court of British Columbia June 19 2025)",
    "court": "Supreme Court of British Columbia, Canada",
    "state": "BC",
    "filer": "Pro se",
    "judge": "The Honourable Justice Loo",
    "date": "2025-06-19",
    "order_date": "2025-06-19",
    "outcome": "Costs adjusted",
    "outcomeClass": "costs",
    "desc": "\"The specific issue regarding costs that must be addressed concerns the use by the respondent of a generative artificial intelligence (“generative AI”) computer program to prepare parts of her written argument. Because of the respondent’s use of this program, her argument contained citations to non-existent cases which have become known as “hallucinations.” The claimant seeks an order for costs in the amount of $500 for having to research and respond to the legal basis section of the respondent’s notice of application, in light of the respondent’s citation of non-existent case law. . . Citing fake cases in court filings and other materials handed up to the court is an abuse of process and is tantamount to making a false statement to the court. Unchecked, it can lead to a miscarriage of justice. . . In this case, the respondent was not represented by counsel. She apologized to the Court and advised that she only became aware that generative AI is capable of providing non-existent case citations after receiving the claimant’s written submissions. The respondent did not rely on any non-existent case citations during the hearing. Further complicating the matter, the claimant’s allegations were not wholly correct: in at least two instances, claimant’s counsel accused the respondent of citing non-existent cases although the cases were real.\"",
    "links": {
      "Opinion": "https://www.canlii.org/en/bc/bcsc/doc/2025/2025bcsc1137/2025bcsc1137.html"
    }
  },
  {
    "name": "Jefferson v. Sam's East, Inc. d/b/a Sam's Club et al, No. 6:24-cv-324-JDK-JDL (E.D. Tex. Jun. 13 2025)",
    "court": "U.S. District Court, Eastern District of Texas, USA",
    "state": "TX",
    "filer": "Pro se",
    "judge": "District Judge Jeremy D. Kernodle",
    "date": "2025-06-13",
    "order_date": "2025-06-13",
    "outcome": "Denied leave to amend after repeated warnings",
    "outcomeClass": "sanction",
    "desc": "“Nor did the Magistrate Judge clearly err in denying leave because Jefferson failed to comply with the Court’s order and local rules despite multiple opportunities and because he used generative artificial intelligence to cite phantom cases and inapplicable law.”",
    "links": {
      "Opinion": "https://cases.justia.com/federal/district-courts/texas/txedce/6:2024cv00324/232705/56/0.pdf"
    }
  },
  {
    "name": "Huntington National Bank v. M/Y Something About Meri, et al., No. 25-61018-CIV-Dimitrouleas/Hunt (S.D. Fla. June 11 2025)",
    "court": "U.S. District Court, Southern District of Florida, Fort Lauderdale Division, USA",
    "state": "FL",
    "filer": "Pro se",
    "judge": "U.S. Magistrate Judge Patrick M. Hunt",
    "date": "2025-06-11",
    "order_date": "2025-06-11",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "“There are many reasons why pro se litigants should be careful that anything they sign their name to is their own work product, and not something created by another or generated by artificial intelligence. Although the undersigned declines to find that any such potential malfeasance has occurred in this case, there are nonetheless credible allegations that the pleadings filed thus far are not entirely Defendant’s own. Further, the undersigned observes many of Dr. Kalish’s motions are difficult to follow and contain overlapping allegations and requests for relief.... Given the circumstances, the undersigned would recommend all of Dr. Kalish’s motions be denied without prejudice and that he be allowed to file a single, consolidated motion, written by either legal counsel or Dr. Kalish himself, containing clearly articulated requests for relief along with the circumstances justifying said relief.”",
    "links": {
      "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.flsd.690286/gov.uscourts.flsd.690286.52.0.pdf"
    }
  },  
  {
    "name": "Frymier v. Aid to Victims of Domestic Abuse & Stalder, No. 4:25-cv-00442 (S.D. Tex. May 13 2025)",
    "court": "United States District Court for the Southern District of Texas, Houston Division",
    "state": "TX",
    "filer": "Pro se",
    "judge": "Magistrate Judge Yvonne Y. Ho",
    "date": "2025-05-13",
    "order_date": "2025-05-13",
    "filing_date": "2025-03-31",
    "outcome": "Warning only, but may have impacted the outcome of the case due to poor arguments",
    "outcomeClass": "warning",
    "desc": "“Two cases Frymier cites repeatedly to support his negligent-supervision claim—one of which Stalder also cites—do not exist. … The Court cautions Mr. Frymier and Ms. Stalder that parties must carefully review their filings and ensure that they are supported by existing law, based on a reasonable inquiry. Citing fabricated case law falls short of that standard.”",
    "links": {
      "Memorandum": "https://storage.courtlistener.com/recap/gov.uscourts.txsd.1990426/gov.uscourts.txsd.1990426.24.0.pdf"
    }
  },  
  {
    "name": "In re Chapman, No. 24-60759 (Bankr. N.D. Ohio Jun. 6 2025)",
    "court": "United States Bankruptcy Court for the Northern District of Ohio, Eastern Division",
    "state": "OH",
    "filer": "Pro se",
    "judge": "Bankruptcy Judge John P. Gustafson",
    "date": "2025-06-06",
    "order_date": "2025-06-06",
    "filing_date": "2025-05-02",
    "outcome": "Stricken without prejudice; warning",
    "outcomeClass": "warning",
    "desc": "“ ‘In re Brunsman’ is a fictitious case. It does not exist as an actual court decision. There is a decision at the cited location in the Bankruptcy Reporter, *In re Mims*—but it is not an Ohio bankruptcy court decision.”",
    "links": {
      "Tentative Ruling": "https://storage.courtlistener.com/recap/gov.uscourts.ohnb.1124038/gov.uscourts.ohnb.1124038.208.0.pdf"
    }
  },  
  {
    "name": "Marasco v. Swift, No. 2:25-cv-14067 (S.D. Fla. Jun. 13 2025)",
    "court": "United States District Court for the Southern District of Florida, Fort Pierce Division",
    "state": "FL",
    "filer": "Pro se",
    "judge": "District Judge Aileen M. Cannon",
    "date": "2025-06-13",
    "order_date": "",
    "filing_date": "",
    "outcome": "Pending allegation",
    "outcomeClass": "motion",
    "desc": "“Plaintiff continues to rely on a nonexistent case to support her due diligence arguments even though she was previously advised as much. Compare [ECF 33 (citing *Seward v. Iacono*, 252 So. 3d 360, 362 (Fla. 4th DCA 2018)), with ECF 28 at 9 n.6 (advising that this case ‘does not appear to exist.’)].”",
    "links": {
      "Opposition": "https://storage.courtlistener.com/recap/gov.uscourts.flsd.684880/gov.uscourts.flsd.684880.41.0.pdf"
    }
  },
  {
    "name": "In re Valsartan, Losartan & Irbesartan Prods. Liab. Litig., No. 19-md-02875, Doc. 3060-1 (D.N.J. May 22 2025)",
    "court": "United States District Court for the District of New Jersey, USA",
    "state": "NJ",
    "filer": "Expert",
    "judge": "District Judge Renée Marie Bumb",
    "date": "2025-05-22",
    "order_date": "",
    "filing_date": "",
    "outcome": "Pending allegation",
    "outcomeClass": "motion",
    "desc": "The memorandum asserts that Dr. Sawyer’s expert report cites numerous fabricated journal articles—apparently produced by an AI tool—and that Sawyer falsely testified he had reviewed those sources. Invoking the 2023 amendments to Rule 702 and cases such as *Kohls v. Ellison*, defendants argue these false citations “shatter” Sawyer’s credibility and require wholesale exclusion of his causation opinions on NDMA-contaminated valsartan and liver cancer. The brief further criticizes his Bradford-Hill analysis and dose-extrapolation calculations as speculative and unsupported. The court issued a warning for the fabricated citations.",
    "links": {
      "Memorandum": "https://storage.courtlistener.com/recap/gov.uscourts.njd.397935/gov.uscourts.njd.397935.3060.1.pdf"
    }
  },
  {
    "name": "Jacobs v. Payward, Inc. et al., No. 3:25-cv-00567-SVN (D. Conn. May 12 2025)",
    "court": "United States District Court for the District of Connecticut",
    "state": "CT",
    "filer": "Pro se",
    "judge": "District Judge Sarala V. Nagala",
    "date": "2025-05-12",
    "order_date": "",
    "filing_date": "",
    "outcome": "Pending allegation",
    "outcomeClass": "motion",
    "desc": "In this 28-page memorandum, the defendants identify seven non-existent decisions, complete with fabricated quotations, that appear in plaintiffs' filings, labeling the citations an abuse of the adversary system and requesting cost-shifting under *Park v. Kim*.",
    "links": {
      "Memorandum": "https://storage.courtlistener.com/recap/gov.uscourts.ctd.164452/gov.uscourts.ctd.164452.45.0.pdf"
    }
  },
  {
    "name": "Homony v. Rembrandt 3D Holding Ltd., No. 25-00138 (Bankr. E.D. Pa. Jun. 4 2025)",
    "court": "United States Bankruptcy Court for the Eastern District of Pennsylvania, USA",
    "state": "PA",
    "filer": "Pro se",
    "judge": "Judge Derek J. Baker",
    "date": "2025-06-04",
    "order_date": "2025-06-04",
    "filing_date": "2025-05-07",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "\"The Motion contains an asserted quote of legal authority that the Court is unable to verify. Rajan cites Chambers v. NASCO, Inc., 501 U.S. 32 (1991) and Jones v. Bank of Santa Fe, 40 F. Supp. 2d 1001 (D.N.M. 1999) [sic] for the following quoted language: “A party cannot shield itself from sanctions-related discovery simply by refusing to cooperate under the pretext of timing.” While certainly a useful statement to the movant, it does not appear in the cited authority. Even more worrisome, the Bank of Santa Fe citation is at best inaccurate and at worst a complete fabrication. The opinion at that citation is unrelated to this matter, and while an opinion with that case name does exist, it was authored five (5) years earlier in the Tenth Circuit—not the District of New Mexico. See In re Courtesy Inns, Ltd., Inc., 40 F.3d 1084 (10th Cir. 1994). When submitting a filing to the Court, an attorney is verifying that the information contained within is true and any legal contentions made are warranted by existing law. See Fed. R. Civ. P. 11(b). An attorney is charged with inquiring into the credibility and application of any case citations in their filings. See Bunce v. Visual Tech. Innovations, Inc., 2025 WL 662398, at *3 (E.D. Pa. Feb. 27, 2025) (finding an attorney in violation of Rule 11(b)(2) meriting sanctions under Rule 11(c) for relying on an artificial intelligence program to draft filings and submitting those briefs to the court containing fake case citations without verifying the authenticity and veracity of those citations). Mr. Rajan purports to be acting pro se; however, Mr. Rajan is an attorney admitted to the bar of this court and holds ECF filing privileges. As such, he is acting as, and will be treated as, an attorney for all purposes here. Moving forward, I encourage the parties to remember the importance of candor to the court, compliance with the Federal Rules, and adherence to the ethical standards of the legal profession.\"",
      "links": {
      "Order PDF": "https://storage.courtlistener.com/recap/gov.uscourts.paeb.517460/gov.uscourts.paeb.517460.22.0.pdf"
    }
  },
  /* —— NEW ENTRY —— */
  /* —— NEW ENTRY —— */
{
  "name": "Tribunale di Firenze, Sez. Imprese – Ordinanza n. 11053/2024 R.G. (Mar. 14 2025)",
  "court": "Tribunale delle Imprese di Firenze",
  "state": "IT",
  "filer": "Lawyer",
  "judge": "Presiding Judge (unnamed)",
  "date": "2025-03-14",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "In a commercial-law urgent application, counsel’s assistant relied on ChatGPT and cited multiple nonexistent Supreme Court precedents.  The court labeled these AI-generated errors “allucinazioni,” refused to apply aggravated process sanctions under art. 96 C.P.C. for lack of bad faith, but cautioned that unverified AI output risks future discipline.",
  "links": {
    "Opinion": "https://www.diritto.it/wp-content/uploads/2025/03/1743072902354.pdf"
  }
},
{
  "name": "Acuerdo de la Sala Primera del Tribunal Constitucional (Demanda de amparo) (Sept. 19 2024)",
  "court": "Tribunal Constitucional, Sala Primera",
  "state": "ES",
  "filer": "Lawyer",
  "judge": "Magistrados de la Sala Primera",
  "date": "2024-09-19",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "In an amparo petition, counsel included the supposedly literal citation of passages of 19 Constitutional Court rulings as quotations when it turns out that none of them was real. The Tribunal though chose a less stringent sanction,given the lack of a record of the lawyer's conduct, and because the seriousness of his conduct is tempered by the impossibility that the unreal quotations could affect the admission and estimation of the application for amparo.",
  "links": {
    "Opinion": "https://www.tribunalconstitucional.es/NotasDePrensaDocumentos/NP_2024_090/NOTA%20INFORMATIVA%20N%C2%BA%2090-2024.pdf",
    "Coverage": "https://elderecho.com/sancion-a-un-abogado-por-incluir-citas-falsas-de-sentencias-del-tc"
  }
},
/* —— NEW ENTRIES —— */

/* India – high-court referral of a *trial-court judge* */
{
  "name": "Sammaan Capital Ltd. & Sammaan Finserve Ltd. v. Mantri Infrastructure Pvt. Ltd. & ors., CRP 49/2025 (Karnataka High Court Mar. 26 2025)",
  "court": "Karnataka High Court (Bengaluru), India",
  "state": "IN-KA",
  "filer": "Judge",
  "judge": "Justice R. Devdas",
  "date": "2025-03-26",
  "outcome": "Probe initiated",
  "outcomeClass": "referral",
  "desc": "While reviewing a city-civil order, the High Court found the lower-court judge had relied on non-existent precedents.",
  "links": {
    "Order": "https://www.verdictum.in/pdf_upload/kahc0100347720251-593059watermark-1699430.pdf",
    "Coverage": "https://www.verdictum.in/court-updates/high-courts/karnataka-high-court/sammaan-capital-limited-others-vs-mantri-infrastructure-pvt-ltd-probe-into-judge-citing-non-existent-supreme-court-decision-1572491"
  }
},
/* :contentReference[oaicite:0]{index=0} */

{
  "name": "Keaau Development Partnership LLC v. Lawrence, No. CAAP-24-0000494 (Haw. Ct. App. May 12 2025)",
  "court": "Haw. Intermediate Ct. App., Hawaii, USA",
  "state": "HI",
  "filer": "Lawyer",
  "judge": "Acting C.J. Leonard; Judges Hiraoka & McCullen",
  "date": "2025-05-12",
  "outcome": "$100 sanction",
  "outcomeClass": "sanction",
  "desc": "Attorney’s motion to dismiss cited a nonexistent Hawai‘i case. The court found the use of a fabricated authority violated HRCP 11(b)(2), ordered attorney to pay $100 personally, and required a declaration of payment—warning that reliance on AI-generated ‘fake opinions’ abuses the adversary system.",
  "links": {
    "Opinion": "https://caselaw.findlaw.com/court/hi-intermediate-court-of-appeals/117260405.html"
  }
},
{
  "name": "Buckeye Trust v. PCIT, ITA No. 1051/Bang/2024 (ITA Bengaluru Bench Dec. 30 2024)",
  "court": "Income Tax Appellate Tribunal (Bengaluru Bench), India",
  "state": "India",
  "filer": "Judge",
  "judge": "Vice President Prashant Maharishi & Judicial Member Prakash Chand Yadav",
  "date": "2024-12-30",
  "outcome": "Order recalled",
  "outcomeClass": "pending",
  "desc": "The ITAT’s December 2024 order non-existent precedents.  Within a week, the tribunal recalled the order and scheduled a fresh hearing.",
  "links": {
    "Withdrawn Order": "https://itat.gov.in/public/files/upload/1735624480-urq7dV-1-TO.pdf",
    "Coverage": "https://counselvise.com/blogs/ai-hallucination-itat-buckeye-trust"
  }
},

/* —— NEW ENTRY —— */
{
  "name": "Valu v. Minister for Immigration & Multicultural Affairs (No 2), [2025] FedCFamC2G 95 (Fed. Cir. & Fam. Ct. Div. 2 Jan. 31 2025)",
  "court": "Federal Circuit & Family Court of Australia (Div. 2)",
  "state": "AU",
  "filer": "Lawyer",
  "judge": "Justice Rania Skaros",
  "date": "2025-01-31",
  "outcome": "Referral to NSW Legal Services Commissioner",
  "outcomeClass": "referral",
  "desc": "In an immigration-appeal filing, the applicant’s outline and amended application included multiple “hallucinated” citations and quotes from the tribunal’s decision.",
  "links": {
    "Opinion": "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC2G/2025/95.html",
    "Coverage": "https://hearsay.org.au/senior-practitioner-referred-to-regulator-for-incorporating-fake-ai-generated-decisions-in-submissions/"
  }
},
{
  "name": "Commissions for HM Revenue & Customs v. Harber, [2023] UKFTT 1007 (TC) (Dec. 4 2023)",
  "court": "First-tier Tribunal (Tax Chamber), UK",
  "state": "UK",
  "filer": "Pro se",
  "judge": "Tribunal Judge",
  "date": "2023-12-04",
  "outcome": "Costs awarded; referral to SRA",
  "outcomeClass": "sanction",
  "desc": "Appellant’s submissions cited decisions that could not be found anywhere. The Tribunal held they were “hallucinations” generated by ChatGPT, ordered to pay HMRC’s costs for responding to the bogus citations, and referred her to the Solicitors Regulation Authority.",
  "links": {
    "Opinion": "https://www.bailii.org/uk/cases/UKFTT/TC/2023/TC09010.html"
  }
},
{
  "name": "Parker v Forsyth NNO and Others, (1585/20) [2023] ZAGPRD 1 (Reg. Ct. Gauteng Div. June 29 2023)",
  "court": "Regional Court of South Africa, Gauteng Div., South Africa",
  "state": "South Africa",
  "filer": "Lawyer",
  "judge": "Chaitram, RM",
  "date": "2023-06-29",
  "outcome": "Costs order",
  "outcomeClass": "costs",
  "desc": "Plaintiff’s attorneys used ChatGPT to assemble a list of purported precedents which didn't exist. When challenged, they admitted they had never sourced or read the cases.  The court branded the citations “hallucinated” and ordered the plaintiff to pay the defendants’ costs in responding to the fabricated authorities.",
  "links": {
    "Opinion": "https://lawlibrary.org.za/akn/za-gp/judgment/zagprd/2023/1/eng@2023-06-29"
  }
},
/* —— NEW ENTRY —— */

{
  "name": "Moales v. Land Rover Cherry Hill, No. 3:25-cv-544 (D. Conn. Apr. 30 2025)",
  "court": "D. Conn., USA",
  "state": "CT",
  "filer": "Pro se",
  "judge": "District Judge Vernon D. Oliver",
  "date": "2025-04-30",
  "outcome": "Warning only",
  "outcomeClass": "dismissal",
  "desc": "The court dismissed the complaint under Rule 12(h)(3) and, in a lengthy footnote, noted that many citations were “misstatements of the law” and likely generated by AI.  Judge cautioned that future filings must contain only verified authorities and that un-checked AI output could lead to Rule 11 sanctions.",
  "links": {
    "Opinion": "https://www.casemine.com/judgement/us/6819ae59dc2f884d962147d0"
  }
},
{
  "name": "Mavundla v. MEC: Department of Co-Operative Government & Traditional Affairs KwaZulu-Natal & Others, (7940/2024P) [2025] ZAKZPHC 2 (8 Jan 2025)",
  "court": "Pietermaritzburg High Court (Kwazulu-Natal Div.), South Africa",
  "state": "South Africa",
  "filer": "Lawyer",
  "judge": "Judge E. Bezuidenhout",
  "date": "2025-01-08",
  "outcome": "Cost reallocation; referral to Legal Practice Council",
  "outcomeClass": "sanction",
  "desc": "The supplementary notice of appeal cited nonexistent authorities.  Judge referred the matter to the Legal Practice Council for disciplinary review and allocated cost.",
  "links": {
    "Opinion": "https://www.saflii.org/za/cases/ZAKZPHC/2025/2.html"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Rubio v. District of Columbia Dept. of Human Services, No. 1:23-cv-00719 (D.D.C. Dec. 3 2024)",
  "court": "D.D.C., USA",
  "state": "DC",
  "filer": "Pro se",
  "judge": "District Judge Randolph D. Moss",
  "date": "2024-12-03",
  "outcome": "Warning only",
  "outcomeClass": "dismissal",
  "desc": "In denying leave to file a second amended complaint and dismissing the case, the court observed that 'many of the cases that Plaintiff cites appear to have been invented by artificial intelligence,' noting the brief’s ‘hallmarks of an AI response’ and rejecting the fabricated authorities as incapable of supporting the claims or satisfying Rule 11 duties.",
  "links": {
    "Opinion": "https://cases.justia.com/federal/district-courts/district-of-columbia/dcdce/1%3A2023cv00719/253276/88/0.pdf",
    "Docket": "https://dockets.justia.com/docket/district-of-columbia/dcdce/1%3A2023cv00719/253276"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "O’Brien v. Flick, No. 24-61529-CIV-DAMIAN (S.D. Fla. Jan. 10 2025)",
  "court": "S.D. Fla., USA",
  "state": "FL",
  "filer": "Pro se",
  "judge": "District Judge Melissa Damian",
  "date": "2025-01-10",
  "outcome": "Warning; arguments stricken",
  "outcomeClass": "warning",
  "desc": "Omnibus order dismissed the case after plaintiff’s response brief cited two non-existent Florida appellate decisions. Finding the citations likely came from a generative-AI tool and that the litigant acted in bad faith, the court deemed dismissal the appropriate sanction and warned that fabricated authorities ‘abuse the adversary system.’",
  "links": {
    "Opinion": "https://www.beankinney.com/wp-content/uploads/2025/04/O_Brien-v.-Flick_2025-U.S.-Dist.-LEXIS-10625-2.pdf",
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Gordon v. Wells Fargo Bank N.A. Inc., No. 5:24-cv-388 (M.D. Ga. Apr. 8 2025)",
  "court": "M.D. Ga., USA",
  "state": "GA",
  "filer": "Pro se",
  "judge": "Senior District Judge C. Ashley Royal",
  "date": "2025-04-08",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "While ruling on a flurry of non-dispositive motions, the court found several citations in the pro-se plaintiff’s filings that “appear to be fake” and likely generated by AI.  Judge Royal warned that submitting unverified authorities violates Rule 11 and could lead to a substantial penalty—including fees or dismissal—if repeated.  The order directed the plaintiff to halt further motion practice until the pending motion to dismiss is resolved and to withdraw meritless claims.",
  "links": {
    "Opinion": "https://www.casemine.com/judgement/us/67f91cad21647c6cabcad68a",
    "Westlaw": "2025 WL 1057211"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Thomas v. Pangburn, No. CV423-046 (S.D. Ga. Oct. 6 2023)",
  "court": "S.D. Ga. (Savannah Div.), USA",
  "state": "GA",
  "filer": "Pro se",
  "judge": "Mag. Judge Christopher L. Ray (R&R); Dist. Judge William T. Moore Jr. (adopted Jan 29 2024)",
  "date": "2023-10-06",
  "outcome": "Dismissal with prejudice as Rule 11 sanction",
  "outcomeClass": "dismissal",
  "desc": "Several citations that looked valid but pointed to opinions that simply did not exist. Concluding the misuse was deceptive and wasted the court’s time, Judge dismissed the case as a sanction.",
  "links": {
    "R&R (Oct 6 2023)": "https://www.courtlistener.com/docket/67565382/59/thomas-v-pangburn/"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Secura Insurance v. Thompson, No. 5:23-cv-00066-BJB-LLK (W.D. Ky. Aug. 21 2024)",
  "court": "W.D. Ky. (Paducah Div.), USA",
  "state": "KY",
  "filer": "Pro se",
  "judge": "Magistrate Judge Lanny King",
  "date": "2024-08-21",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "In a motion to quash a third-party subpoena, the pro-se litigant cited a precedent the court could not locate.  Judge denied the motion and reminded the litigant that preparing filings “includes confirming that all cases or orders cited to the Court exist.",
  "links": {
    "Order": "https://www.courtlistener.com/docket/67359179/104/secura-insurance-a-mutual-company-v-thompson/"
    }
},
/* —— NEW ENTRY —— */
{
  "name": "Mescall v. Renaissance at Antiquity, No. 3:23-cv-00332 (W.D.N.C. Nov. 13 2023)",
  "court": "W.D. N.C. (Charlotte Div.), USA",
  "state": "NC",
  "filer": "Pro se",
  "judge": "District Judge Robert J. Conrad Jr.; Mag. Judge Susan C. Rodriguez",
  "date": "2023-11-13",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "In a footnote to an order on service and briefing, the court remarked that Mescall’s response \"appears to have been partially written with the aid of artificial intelligence,\" cautioned that such use \"creates challenges, raises ethical issues, and may result in sanctions or penalties when used inappropriately,\" and directed the pro-se plaintiff to comply with Rule 11 going forward.",
  "links": {
    "Opinion": "https://www.courtlistener.com/docket/67468113/21/mescall-v-renaissance-at-antiquity/"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Strong v. Rushmore Loan Management Services, LLC, No. 8:24-cv-00352 (D. Neb. Jan. 15 2025)",
  "court": "D. Neb., USA",
  "state": "NE",
  "filer": "Pro se",
  "judge": "Senior District Judge John M. Gerrard",
  "date": "2025-01-15",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The court dismissed the complaint. It did so noting multiple fictitious citations likely generated by AI, though part of larger potential misconduct.",
  "links": {
    "Order": "https://www.courtlistener.com/docket/69140239/24/strong-v-rushmore-loan-management-services/"
  }
},
/* —— END NEW ENTRY —— */

{
    "name": "People v. Zachariah C. Crabill, No. 23PDJ067 (Colo. O.P.D.J.)",
    "court": "Colo. O.P.D.J., USA",
    "state": "CO",
    "filer": "Lawyer",
    "judge": "Presiding Disciplinary Judge Bryon M. Large",
    "date": "2023-11-22",
    "outcome": "Suspension 1 yr + 1 day (90 days served) + 2 yrs probation",
    "outcomeClass": "sanction",
    "desc": "Attorney filed a ChatGPT-written motion with fictitious precedents, then blamed a legal intern.  CO disciplinary tribunal imposed a year-and-a-day suspension (all but 90 days stayed) for violating Colo. RPC 1.1, 3.3 & 8.4(c).",
    "links": {
      "Order": "https://www.coloradolegalregulation.com/wp-content/uploads/PDJ/Decisions/Crabill,%20Stipulation%20to%20Discipline,%2023PDJ067,%2011-22-23.pdf",
      "Coverage": "https://reason.com/volokh/2023/11/23/90-day-suspension-of-colorado-lawyer-who-filed-chatgpt-written-motion-with-hallucinated-cases/"
    }
  },  /* :contentReference[oaicite:0]{index=0} */

  {
    "name": "Park v. Kim, 91 F.4th 610 (2d Cir. 2024)",
    "court": "2d Cir., USA",
    "state": "NY",
    "filer": "Lawyer",
    "judge": "Circuit Judges Parker, Nathan & Merriam (per curiam)",
    "date": "2024-01-30",
    "outcome": "Referral to Grievance Panel",
    "outcomeClass": "referral",
    "desc": "Reply brief cited a nonexistent case; court found Rule 11(b)(2) violation and referred attorney to disciplinary authorities, ordering a copy of the decision served on the client.",
    "links": {
      "Opinion": "https://www.law.nyu.edu/sites/default/files/Park%20v.%20Kim%2C%20No.%2022-2057%20%282024%29.pdf",
      "Coverage": "https://reason.com/volokh/2024/01/30/second-circuit-refers-lawyer-for-disciplinary-proceedings-based-on-ai-hallucinated-case-in-brief/",
      "Order Denying TRO on Grievance Panel Hearing" : "https://cases.justia.com/federal/district-courts/new-york/nysdce/1%3A2025cv00789/635802/36/0.pdf"
    }
  },  /* :contentReference[oaicite:1]{index=1} */
  /* —— NEW ENTRY —— */
{
  "name": "Kruglyak v. Home Depot U.S.A., Inc., No. 1:22-cv-00024 (W.D. Va. Mar. 25 2025)",
  "court": "W.D. Va., USA",
  "state": "VA",
  "filer": "Pro se",
  "judge": "Senior District Judge Michael F. Urbanski",
  "date": "2025-03-25",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Responding to briefs that quoted several nonexistent precedents—authorities the court could not locate in any reporter—Judge noted the likelihood that plaintiff relied on an AI tool, rejected the arguments as unsupported, and cautioned that any further submission containing fabricated citations would expose the plaintiff to Rule 11 penalties. Given Kruglyak’s pro-se status, the court declined to impose a fine.",
  "links": {
    "Opinion" : "https://www.courtlistener.com/docket/63360080/142/kruglyak-v-home-depot-usa-inc/"
  }
},
/* —— END NEW ENTRY —— */

  {
    "name": "Ex parte Lee, No. 10-23-00126-CR (Tex. App.—Waco July 20 2023)",
    "court": "Tex. 10th Ct. App., USA",
    "state": "TX",
    "filer": "Lawyer",
    "judge": "Chief Justice Tom Gray",
    "date": "2023-07-20",
    "outcome": "Arguments disregarded; no sanction",
    "outcomeClass": "warning",
    "desc": "Bail-reduction brrief had hallucinated or misquoted cases.Court flagged likely AI drafting, declined sanctions but treated the issue as inadequately briefed and overruled the appeal.",
    "links": {
      "Opinion": "https://law.justia.com/cases/texas/tenth-court-of-appeals/2023/10-22-00281-cr.html",
      "Coverage": "https://reason.com/volokh/2023/07/27/court-notes-apparently-nonexistent-precedents-cited-in-brief-suggests-brief-may-have-been-partly-ai-written/"
    }
  },  /* :contentReference[oaicite:2]{index=2} */

  {
    "name": "Matter of Samuel, 82 Misc. 3d 616 (Sur. Ct. Kings Cty. 2024)",
    "court": "Sur. Ct. Kings Cty., USA",
    "state": "NY",
    "filer": "Lawyer",
    "judge": "",
    "date": "2024-01-11",
    "outcome": "Strike Pleading; Sanctions TBD",
    "outcomeClass": "sanction",
    "desc": "Reply papers opposing summary judgment relied on fake cases in probate proceeding. Court held counsel’s conduct frivolous and imposed costs, stressing lawyers—not AI—must verify authorities.",
    "links": {
      "Opinion": "https://law.justia.com/cases/new-york/other-courts/2024/2024-ny-slip-op-24014.html",
      "Coverage": "https://www.nyestatelitigationblog.com/2024/01/articles/uncategorized/matter-of-samuel-artificial-intelligence-hallucinates/"
    }
  },  /* :contentReference[oaicite:3]{index=3} */

  {
    "name": "Dukuray v. Experian Info. Sols., No. 23-cv-9043 (S.D.N.Y. July 26 2024)",
    "court": "S.D.N.Y., USA",
    "state": "NY",
    "filer": "Pro se",
    "judge": "Magistrate Judge Gary Stein",
    "date": "2024-07-26",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Pro se filer quoted several nonexistent opinions. Court noted risk of ChatGPT hallucinations, cautioned that repeat misconduct could result in dismissal or monetary penalties.",
    "links": {
      "Opinion": "https://caselaw.findlaw.com/court/us-dis-crt-sd-new-yor/116482791.html",
    }
  },  /* :contentReference[oaicite:4]{index=4} */

  {
    "name": "Transamerica Life Ins. Co. v. Williams, No. CV-24-00379 (D. Ariz. Sept 6 2024)",
    "court": "D. Ariz., USA",
    "state": "AZ",
    "filer": "Pro se",
    "judge": "District Judge G. Murray Snow",
    "date": "2024-09-06",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Order observed briefs were “replete with citations to nonexistent caselaw,” inferred ChatGPT use, and warned any future fake authorities would trigger dismissal or other sanctions.",
    "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.azd.1364532/gov.uscourts.azd.1364532.62.0.pdf"
    }
  },  /* :contentReference[oaicite:5]{index=5} */
  {
  "name": "An v. Archblock, Inc., C.A. No. 2024-0102-LWW (Del. Ch. Apr. 4 2025)",
  "court": "Del. Ch., USA",
  "state": "DE",
  "filer": "Pro se",
  "judge": "Vice Chancellor Lori W. Will",
  "date": "2025-04-04",
  "outcome": "Motion denied; formal warning + future GenAI-use certification required",
  "outcomeClass": "warning",
  "desc": "Vice Chancellor denied a motion to compel that relied on multiple AI-invented quotations and authorities. Calling the misconduct 'sanctionable,' they warned the petitioner that any repeat will trigger monetary or dismissal sanctions and directed future filings to include a certification disclosing any GenAI assistance.",
  "links": {
    "Letter Opinion": "https://courts.delaware.gov/Opinions/Download.aspx?id=377750"
  }
},
  {
    "name": "Al-Hamim v. Star Hearthstone, LLC, 2024 COA 128 (Colo. Ct. App. Dec 5 2024)",
    "court": "Colo. Ct. App., USA",
    "state": "CO",
    "filer": "Pro se",
    "judge": "Judge Christina Finzel Gomez (panel)",
    "date": "2024-12-05",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Opening brief mixed real and fake citations generated with a GAI tool. Court affirmed dismissal and put litigants on notice that any future ‘hallucinations’ will draw sanctions.",
    "links": {
      "Opinion": "https://law.justia.com/cases/colorado/court-of-appeals/2024/24ca0190.html"
    }
  },  /* :contentReference[oaicite:6]{index=6} */

  {
    "name": "Morgan v. Community Against Violence, No. 1:23-cv-353 (D.N.M. Jan 19 2024)",
    "court": "D. N.M., USA",
    "state": "NM",
    "filer": "Pro se",
    "judge": "Chief Judge William P. Johnson",
    "date": "2024-01-19",
    "outcome": "Warning, then dismissal with prejudice",
    "outcomeClass": "dismissal",
    "desc": "Dismissal order noted plaintiff had cited several fake or nonexistent opinions, combined with other conduct, that led to dismissal with prejudice.",
    "links": {
      "Opinion": "https://cases.justia.com/federal/district-courts/new-mexico/nmdce/1%3A2023cv00353/487231/35/0.pdf"    }
  },  /* :contentReference[oaicite:7]{index=7} */

  {
    "name": "Sanders v. United States, No. 24-1301 (Fed. Cl. Mar 31 2025)",
    "court": "U.S. Ct. of Fed. Claims, USA",
    "state": "DC",
    "filer": "Pro se",
    "judge": "Judge Richard A. Hertling",
    "date": "2025-03-31",
    "outcome": "Warning only, then dismissal",
    "outcomeClass": "dismissal",
    "desc": "Court dismissed $1 B unjust-enrichment claim, finding plaintiff was “misled by fake cases made up by an AI program.”",
    "links": {
      "Opinion": "https://www.casemine.com/judgement/us/680623e02e3a69d2585ee087"
    }
  },  /* :contentReference[oaicite:8]{index=8} */
/* —— NEW CASE —— */
{
  "name": "Zhang v. Chen, 2024 BCSC 285 (B.C. Sup. Ct.)",
  "court": "Supreme Court of British Columbia, Canada",
  "state": "Canada-BC",
  "filer": "Lawyer",
  "judge": "Justice D. Masuhara",
  "date": "2024-02-20",
  "outcome": "Reimbursement of 4.5 days of party-and-party tariff",
  "outcomeClass": "costs",
  "desc": "Family-law application relied on two ChatGPT-invented cases. After opposing counsel proved the authorities didn’t exist. Ordered the responsible lawyer to pay the ordinary (party-and-party) costs of the application herself and warned that citing fake authorities is an abuse of process tantamount to making a false statement to the court.",
  "links": {
    "Decision": "https://www.canlii.org/en/bc/bcsc/doc/2024/2024bcsc285/2024bcsc285.html",
    "Coverage": "https://www.fasken.com/en/knowledge/2024/03/cautionary-tales-of-using-ai-chatbots-the-courts-weigh-in-on-ai-hallucinations"
  }
},
  {
    "name": "Ko v. Li, 2025 ONSC 2766 (Ont. Sup. Ct. May 6 2025)",
    "court": "Ont. Sup. Ct. (SCJ), Canada",
    "state": "Canada-ON",
    "filer": "Lawyer",
    "judge": "Justice Fred Myers",
    "date": "2025-05-06",
    "outcome": "Pending",
    "outcomeClass": "pending",
    "desc": "Family-law factum relied on multiple non-existent cases. Court ordered counsel to show cause why she should not be cited for contempt and reminded bar of duty to vet AI output.",
    "links": {
      "Decision": "https://canlii.ca/t/kbzwn",
        "Coverage": "https://www.canadianlawyermag.com/news/general/superior-court-says-family-law-case-factum-may-have-fake-legal-citations-due-to-ai-hallucinations/392433"
    }
  },  /* :contentReference[oaicite:9]{index=9} */
  {
    "name": "R. v. Chand, 2025 ONCJ 282 (Ont. Ct. J. May 26 2025)",
    "court": "Ontario Court of Justice, Canada",
    "state": "ON",
    "filer": "Lawyer",
    "judge": "Justice Joseph F. Kenkel",
    "date": "2025-05-26",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "The court found “one of the cases cited appears to be fictitious” and that “the errors are numerous and substantial.”  It therefore directed counsel to resubmit the brief and specified that “generative AI or commercial legal software that uses GenAI must not be used for legal research for these submissions.”",
    "links": {
      "Opinion": "https://www.canlii.org/en/on/oncj/doc/2025/2025oncj282/2025oncj282.html"
    }
  },
  {
    "name": "St. Michaels Investment Group Canada Inc. v. Department of Public Works and Government Services, File PR-2023-042, 2024 CanLII 140109 (CA CITT Apr. 11 2024)",
    "court": "Canadian International Trade Tribunal, Canada",
    "state": "Canada-ON",
    "filer": "Lawyer",
    "judge": "Presiding Member Randolph W. Heggart",
    "date": "2024-04-11",
    "outcome": "Warning only (but may have affected outcome of complaint); Tribunal awarded PWGSC $1,150 in costs",
    "outcomeClass": "warning",
    "desc": "When the Tribunal asked the complainant to supply copies of several cited authorities, it found that “St. Michaels was not able to provide a copy of these alleged cases. … In the Tribunal’s view, there is only one plausible explanation: these alleged cases are fictional and do not exist.”  While emphasizing that “Parties must ensure that any submissions, legal references or any other content filed with the Tribunal are accurate,” the Tribunal concluded that the procurement was proper, declared the complaint “not valid,” and awarded costs to the government institution.",
    "links": {
      "Opinion": "https://canlii.ca/t/k9v5l"
    }
  },
  {
    "name": "Simpson v. Hung Long Enterprises Inc., 2025 BCCRT 525 (CanLII) (B.C. Civil Resolution Tribunal Apr. 25 2025)",
    "court": "Civil Resolution Tribunal, British Columbia, Canada",
    "state": "Canada-BC",
    "filer": "Pro se",
    "judge": "Vice Chair Eric Regehr",
    "date": "2025-04-25",
    "outcome": "Claims dismissed; applicant ordered to pay respondent $500 for costs",
    "outcomeClass": "sanction",
    "desc": "The Tribunal noted that plaintiff “referred to a non-existent CRT case to support a patently incorrect legal position. She also referred to three Supreme Court of Canada cases that do not exist… These are all common features of submissions generated by artificial intelligence.”  It added that “The first [extraordinary circumstance] is [plaintiff]'s use of artificial intelligence.  It takes little time to have a large language model create lengthy submissions with many case citations. It takes considerably more effort for the other party to wade through those submissions to determine which cases are real, and for those that are, whether they actually say what [plaintiff] purported they did.”",
    "links": {
      "Opinion": "https://canlii.ca/t/kbrh9"
    }
  },
  {
    "name": "Vechtel et al. v. Gershoni, Civ. Case No. 16667-08-23 (Mag. Ct. Rishon LeZion May 25 2025)",
    "court": "Magistrates’ Court, Rishon LeZion, Israel",
    "state": "Israel",
    "filer": "Lawyer",
    "judge": "Judge Sarit Avdiyan",
    "date": "2025-05-25",
    "outcome": "Warning (but may have affected outcome of motion); plaintiffs ordered to pay ₪900 costs for filing motion",
    "outcomeClass": "warning",
    "desc": "The decision observed that the motion contains what purports to be a quotation from a judgment issued by this Court, attributing to it legal determinations. That quotation does not appear in the judgment, and in fact the judgment does not address the issue of amending pleadings. This raises the suspicion that parts of the motion were drafted by artificial intelligence.",
    "links": {
      "Opinion": "https://www.law.co.il/media/computer-law/vechtel.pdf"
    }
  },
  {
    "name": "Re Nicholson, 2025 ONSC 1069 (Ont. S.C.J. Feb. 18 2025)",
    "court": "Ontario Superior Court of Justice (Bankruptcy & Insolvency), Canada",
    "state": "Canada-ON",
    "filer": "Pro se",
    "judge": "Associate Justice Ilchenko (Registrar in Bankruptcy)",
    "date": "2025-02-18",
    "outcome": "Partial indemnity scale took into account use of fictitious cases",
    "outcomeClass": "sanction",
    "desc": "The court observed that several of the \"cases cited by the Bankrupt [do not] appear to exist in CanLII … It is unclear where the Bankrupt got these non-existent cases and citations, or whether the Bankrupt used Chat GPT or other AI program to generate his fictitious legal submissions.”  In determining the partial indemnity scale, the court took into account the conduct of the Bankrupt, in particular in relation to putting forward apparently fictitious legal authorities.",
    "links": {
      "Opinion": "https://www.canlii.org/en/on/onsc/doc/2025/2025onsc1069/2025onsc1069.pdf"
    }
  },  
  {
    "name": "SQBox Solutions Ltd. v. Oak, 2025 BCCRT 408 (CanLII) (B.C. Civil Resolution Tribunal Mar. 31 2025)",
    "court": "Civil Resolution Tribunal, British Columbia, Canada",
    "state": "Canada-BC",
    "filer": "Pro se",
    "judge": "Tribunal Member Douglas Merchant",
    "date": "2025-03-31",
    "outcome": "Took into account use of AI in determining outcome",
    "outcomeClass": "no_sanction",
    "desc": "The tribunal wrote: “I presume that Mr. Oak’s submissions were partly or mostly drafted by an Artificial Intelligence (AI) platform. … The submissions quote 5 sections of the Employment Standards Act and all of them are incorrectly quoted. Four of the cases relied upon do not stand for the proposition described … [and] one of the cases does not exist at all... By relying on inaccurate and false AI submissions, Mr. Oak hurts his own case. I understand that Mr. Oak himself might not be aware that the submissions are misleading, but they are his submissions and he is responsible for them.”",
    "links": {
      "Opinion": "https://www.canlii.org/en/bc/bccrt/doc/2025/2025bccrt408/2025bccrt408.pdf"
    }
  },  
  {
    "name": "R (Ayinde) v. London Borough of Haringey, [2025] EWHC 1040 (Admin)",
    "court": "High Court (Admin.), UK",
    "state": "UK-ENG",
    "filer": "Lawyer",
    "judge": "Justice Ritchie",
    "date": "2025-04-03",
    "outcome": "£4,000 wasted costs order, reduce allowable attorneys' fees by £7,000",
    "outcomeClass": "sanction",
    "desc": "Defendant exposed five wholly fabricated authorities in claimant’s submissions. Court branded conduct ‘professional misconduct,’ ordered wasted costs, and referred matter to regulators.",
    "links": {
      "Judgment": "https://www.judiciary.uk/wp-content/uploads/2025/05/Ayinde-v-LB-Haringey-Judgment-Ritchie-J-03.04.25-HD-2.pdf",
      "Coverage": "https://www.lexology.com/library/detail.aspx?g=49d3af34-c4df-4184-8c6b-8d0330aa4e97"
    }
  },
  {
    "name": "Alharoun v. Qatar National Bank Q.P.S.C. and QNB Capital LLC",
    "court": "High Court of Justice (UK), UK",
    "state": "UK-ENG",
    "filer": "Lawyer",
    "judge": "Justice Ritchie",
    "date": "2025-05-09",
    "outcome": "Pending",
    "outcomeClass": "pending",
    "desc": "\"it appears from the Order of Mrs Justice Dias that correspondence was sent to the court, and witness statements were filed, citing authorities that do not exist and claiming that other authorities contained passages that they do not contain.\"",
    "links": {
      "Order": "https://www.judiciary.uk/judgments/alharoun-v-qatar-national-bank-and-ayinde-v-london-borough-of-hackney-order/"
    }
  },
{
  "name": "Ramirez v. Humala, No. 1:24-cv-00242 (E.D.N.Y.)",
  "court": "E.D.N.Y., USA",
  "state": "NY",
  "filer": "Lawyer",
  "judge": "District Judge Rachel P. Kovner; Magistrate Judge Joseph A. Marutollo",
  "date": "2025-05-13",
  "outcome": "$1,000 sanctions",
  "outcomeClass": "sanction",
  "desc": "Plaintiff’s response letter quoted fictitious precedents. Counsel admitted the citations came from a paralegal’s unverified AI research. Judge Kovner held the conduct violated Fed. R. Civ. P. 11 and ordered monetary sanctions and client notice.",
  "links": {
    "Decision": "https://storage.courtlistener.com/recap/gov.uscourts.nyed.508684/gov.uscourts.nyed.508684.49.0.pdf",
    "Docket": "https://www.courtlistener.com/docket/68152794/ramirez-v-el-tri-mx-restaurant-bar-corp/?filed_after=&filed_before=&entry_gte=&entry_lte=&order_by=desc",
    "Coverage": "https://reason.com/volokh/2025/05/14/ai-hallucination-case-stemming-from-use-of-a-paralegals-ai-based-research/"
  }
},
{
  "name": "LMN v. STC, [2025] NZEmpC 46 (EmpC Mar. 17 2025)",
  "court": "Employment Court of New Zealand, New Zealand",
  "state": "NZ",
  "filer": "Pro se",
  "judge": "Judge M S King",
  "date": "2025-03-17",
  "outcome": "Warning only; but poor arguments also led to costs being awarded of $500 NZD",
  "outcomeClass": "warning",
  "desc": "After the plaintiff cited a non-existent authority—“Fowlie v Stonex (No 2) [2015] NZEmpC 94”—the Court warned that “information provided by generative artificial intelligence ought to be checked before being relied on in documents filed in court proceedings.”",
  "links": {
    "Opinion": "https://www.justice.govt.nz/assets/Documents/Decisions/2025-NZEmpC-46-LMN-v-STC-Interlocutory-No-2.pdf"
  }
},
{
  "name": "Coomer v. Lindell, No. 1:22-cv-01129-NYW-SBP (D. Colo.)",
  "court": "D. Colo., USA",
  "state": "CO",
  "filer": "Lawyer",
  "judge": "District Judge Nina Y. Wang; Magistrate Judge Susan B. Prose",
  "date": "2025-04-23",
  "outcome": "Pending order to show cause",
  "outcomeClass": "pending",
  "desc": "Judge Wang found nearly 30 misquotes, misattributions and entirely fictitious cases in the defendants’ brief opposing a motion in limine—errors the court traced to un-checked generative-AI research. She ordered defense counsel to explain, under oath, why they relied on AI and why they shouldn’t be sanctioned or referred to bar authorities, and required counsel to certify personal notice to client Mike Lindell.",
  "links": {
    "Order to Show Cause": "https://cases.justia.com/federal/district-courts/colorado/codce/1%3A2022cv01129/215068/309/0.pdf",
    "Response": "https://storage.courtlistener.com/recap/gov.uscourts.cod.215068/gov.uscourts.cod.215068.311.0.pdf",
    "Docket": "https://www.courtlistener.com/docket/63296393/coomer-v-lindell/",
    "Coverage": "https://reason.com/volokh/2025/04/25/apparent-ai-hallucinations-in-defense-filing-in-coomer-v-lindell-my-pillow-election-related-libel-suit/"
  }
},
{
  "name": "State of Israel v. Ibrahim Mahajne",
  "court": "Hadera Magistrate’s Court, Israel",
  "state": "Israel",
  "filer": "Lawyer",
  "judge": "Judge Ehud Kaplan",
  "date": "2025-05-07",
  "outcome": "Pending",
  "outcomeClass": "pending",
  "desc": "Police cited AI-invented statutory clauses in a filing opposing return of a seized phone. Police opened an internal investigation.",
  "links": {
    "Decision": "https://www.verdicts.co.il/הת-חדרה-26853-02-25-אברהים-מחאגנה-נ-ילפ-מרחב-מנשה/?pdf=578894",
    "Coverage": "https://www.timesofisrael.com/judge-slams-police-for-using-ai-to-write-legal-argument-citing-nonexistent-laws/"
  }
},
  {
    name: "Concord Music Group, Inc., et al. v. Anthropic PBC, No. 5:24-cv-03811-EKL (N.D. Cal.)",
    court: "N.D. Cal., USA",
    state: "CA",
    filer: "Lawyer",
    judge: "District Judge Eumi K. Lee; Magistrate Judge Susan van Keulen",
    date: "2025-05-13",
    outcome: "Strikes paragraph; notes for the record that this issue undermines the overall credibility of expert's written declaration, a factor in the Court’s conclusion.",
    outcomeClass: "warning",
    desc: "Publishers allege Claude infringes song-lyric copyrights. Plaintiffs moved to strike an Anthropic data-scientist declaration after discovering a potential hallucinated citation; the dispute is ongoing. Attorneys for Anthropic admitted that the declaration was modified by attorneys using Claude to format citations, which introduced the hallucinated citation. The Court struck a paragraph from the declaration and noted that the issue undermines the overall credibility of the expert's written declaration, a factor in the Court’s conclusion.",
    links: {
      Docket: "https://www.courtlistener.com/docket/68889092/concord-music-group-inc-v-anthropic-pbc/",
      Filing: "https://chatgptiseatingtheworld.com/wp-content/uploads/2025/05/Olivia-Chen-sampling-protocol.pdf",
      Coverage: "https://www.reuters.com/legal/litigation/anthropic-expert-accused-using-ai-fabricated-source-copyright-case-2025-05-13/",
      Update: "https://www.reuters.com/legal/legalindustry/anthropics-lawyers-take-blame-ai-hallucination-music-publishers-lawsuit-2025-05-15/",
      "Court Order": "https://websitedc.s3.amazonaws.com/documents/Concord_v._Anthropic_N.D._California_USA_May_23_2025.pdf"
    }
  },
  {
    name: "Lacey v. State Farm Gen. Ins. Co., No. 2:24-cv-05205-FMO-MAA (C.D. Cal.)",
    court: "C.D. Cal., USA",
    state: "CA",
    filer: "Lawyers",
    judge: "Special Master Hon. Michael R. Wilner (Ret.); District Judge Fernando M. Olguin",
    date: "2025-05-06",
    outcome: "Fee-shifting Sanction $31,100 + briefs stricken",
    outcomeClass: "sanction",
    desc: "Plaintiffs' 10-page brief contained nine bogus authorities. Judge Wilner struck the briefs and ordered both plaintiff firms to reimburse State Farm $31,100 in special-master and defense fees.",
    links: {
      Order: "https://storage.courtlistener.com/recap/gov.uscourts.cacd.930490/gov.uscourts.cacd.930490.119.0.pdf"
    }
  },
  {
    "name": "HC 5001175-27.2025.8.24.0000 (5ª Câmara Criminal, TJ-SC Feb. 6 2025)",
    "court": "Santa Catarina Court of Justice – Fifth Criminal Chamber, Brazil",
    "state": "BR-SC",
    "filer": "Lawyer",
    "judge": "Des. Cinthia Beatriz da Silva Bittencourt Schaefer (rel.)",
    "date": "2025-02-06",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Habeas corpus to lift domestic-violence protective orders was denied after the chamber found the petition, drafted with AI, cited non-existent precedents to mislead the court; a written warning was entered against counsel.",
    "links": {
      "Coverage (Screenshot ofOpinion Included)": "https://www.migalhas.com.br/quentes/424313/tj-sc-adverte-advogado-por-hc-feito-por-ia-com-jurisprudencia-falsa"
    }
  },  
  {
    "name": "(confidential style) – Apelação civil (6ª Câmara Cível, TJ-SC Feb. 18 2025)",
    "court": "Tribunal de Justiça de Santa Catarina – 6ª Câmara Cível, Brazil",
    "state": "BR-SC",
    "filer": "Lawyer",
    "judge": "Des. relator (name suppressed)",
    "date": "2025-02-18",
    "outcome": "10% of the case's current value as sanction; bar referral",
    "outcomeClass": "sanction",
    "desc": "A Santa Catarina appellate court fined a lawyer 10% of the case’s value for filing an appeal that cited entirely fictitious cases and legal doctrines—apparently generated by ChatGPT. Citing non-existent authorities was deemed a breach of the duty of candor, warranting both a monetary penalty and referral to the state bar for potential discipline.",
    "links": {
      "Press release": "https://www.tjsc.jus.br/web/imprensa/-/tjsc-multa-autor-de-recurso-por-jurisprudencia-falsa-gerada-por-ia"
    }
  },
  
  /* Brazil – national electoral court fine */
  {
    "name": "AIJE 0600814-85.2022.6.00.0000 (TSE Apr. 14 2023)",
    "court": "Tribunal Superior Eleitoral, Brazil",
    "state": "BR-DF",
    "filer": "Lawyer",
    "judge": "Min. Benedito Gonçalves (Corregedor-Geral)",
    "date": "2023-04-14",
    "outcome": "R$ 2,604 fine",
    "outcomeClass": "sanction",
    "desc": "Amicus curiae petition was likely drafted via ChatGPT and violated the duty of candor. The minister denied the intervention of the amicus curiae, imposed a fine of two minimum wages (R$ 2,604)—to double if repeated—and referred the lawyer to OAB/SC for discipline.",
    "links": {
      "Decision": "https://www.migalhas.com.br/arquivos/2023/4/96482C8B855BCD_decisao-tse-advogado-chatgpt.pdf",
      "Coverage": "https://www.migalhas.com.br/quentes/385080/advogado-usa-chatgpt-em-peticao-e-e-multado-pelo-tse--fabula"
    }
  },  
  {
    name: "Mata v. Avianca, Inc., 678 F. Supp. 3d 443 (S.D.N.Y. 2023)",
    court: "S.D.N.Y., USA",
    state: "NY",
    filer: "Lawyers",
    judge: "District Judge P. Kevin Castel",
    date: "2023-06-22",
    outcome: "$5,000 Sanction + CLE",
    outcomeClass: "sanction",
    desc: "Opposition brief cited fictitious court opinions generated by ChatGPT; court fined counsel $5 k, required CLE on AI ethics, and ordered service of the order on affected judges who were attributed to the fictitious cases.",
    links: {
      Order: "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/55/",
      Coverage: "https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/"
    }
  },
  {
    name: "Gauthier v. Goodyear Tire & Rubber Co., 2024 WL 4882651 (E.D. Tex. Nov. 25 2024)",
    court: "E.D. Tex., USA",
    state: "TX",
    filer: "Lawyer",
    judge: "District Judge Marcia A. Crone",
    date: "2024-11-25",
    outcome: "$2,000 Sanction + AI-ethics CLE",
    outcomeClass: "sanction",
    desc: "Plaintiff's response brief quoted two nonexistent cases and mis-quoted seven more; court fined counsel $2 k and ordered a generative-AI CLE.",
    links: {
      Order: "https://www.courthousenews.com/wp-content/uploads/2024/11/attorney-sanctioned-for-using-ai-hallucinations.pdf",
      Coverage: "https://www.reuters.com/legal/government/texas-lawyer-fined-ai-use-latest-sanction-over-fake-citations-2024-11-26/"
    }
  },
  {
    name: "Kruse v. Karlen, 692 S.W.3d 43 (Mo. Ct. App. E.D. 2024)",
    court: "Mo. Ct. App. E.D., USA",
    state: "MO",
    filer: "Pro se",
    judge: "Judge Kurt S. Odenwald (panel with Judges Gardner & Hardin-Tammons)",
    date: "2024-02-13",
    outcome: "Appeal Dismissed + $10,000",
    outcomeClass: "sanction",
    desc: "Pro-se appellant's brief used 22 fabricated authorities; court dismissed the appeal as frivolous and awarded $10 k damages to respondent.",
    links: {
      Opinion: "https://www.courts.mo.gov/file.jsp?id=205455",
      Coverage: "https://reason.com/volokh/2024/02/14/14th-court-case-ive-seen-in-which-ai-hallucinated-citations-appeared/"
    }
  },
  {
    name: "Wadsworth v. Walmart Inc., 2025 WL 608073 (D. Wyo. Feb. 24 2025)",
    court: "D. Wyo., USA",
    state: "WY",
    filer: "Lawyers",
    judge: "Chief District Judge Kelly H. Rankin",
    date: "2025-02-24",
    outcome: "$5,000 Sanction ( $3 k lead; $1 k each other two ) + pro-hac vice revoked",
    outcomeClass: "sanction",
    desc: "Eight of nine cases in plaintiffs' motions in limine were fake; court fined counsel and revoked the lead lawyer's pro-hac vice status.",
    links: {
      Order: "https://news.justia.com/wp-content/uploads/2025/02/Order-on-Sanctions-in-Wadsworth-v.-Walmart-Inc-et-al.pdf",
      Coverage: "https://www.reuters.com/legal/government/judge-fines-lawyers-walmart-lawsuit-over-fake-ai-generated-cases-2025-02-25/"
    }
  },
  {
    name: "Kohls v. Ellison, No. 0:24-cv-03754-LMP-DLM (D. Minn. Jan. 10 2025)",
    court: "D. Minn., USA",
    state: "MN",
    filer: "Expert",
    judge: "District Judge Laura M. Provinzino",
    date: "2025-01-10",
    outcome: "Expert Declaration Stricken",
    outcomeClass: "evidence",
    desc: "Professor's declaration relied on AI-generated journal citations; the court excluded his testimony and struck the declaration.",
    links: {
      Order: "https://storage.courtlistener.com/recap/gov.uscourts.mnd.220348/gov.uscourts.mnd.220348.46.0.pdf",
      Coverage: "https://www.reuters.com/legal/government/judge-rebukes-minnesota-over-ai-errors-deepfakes-lawsuit-2025-01-13/"
    }
  },
  {
    name: "United States v. Hayes, 2025 WL 235531 (E.D. Cal. Jan. 17 2025)",
    court: "E.D. Cal., USA",
    state: "CA",
    filer: "Defense Counsel",
    judge: "District Judge Daniel J. Calabretta",
    date: "2025-01-17",
    outcome: "$1,500 Sanction",
    outcomeClass: "sanction",
    desc: "Motion to unseal relied on a fictitious precedent; court fined appointed counsel $1,500 and ordered the order served on bar authorities and all judges in the district.",
    links: {
      Order: "https://www.courtlistener.com/docket/69248764/62/united-states-v-hayes/",
      Coverage: "https://www.fd.org/news/court-sanctions-defense-attorney-whose-brief-cited-nonexistent-case"
    }
  },
  {
    name: "Nguyen v. Savage Enters., 2025 WL 679024 (E.D. Ark. Mar. 3 2025)",
    court: "E.D. Ark., USA",
    state: "AR",
    filer: "Lawyer",
    judge: "District Judge Brian S. Miller",
    date: "2025-03-03",
    outcome: "$1,000 Sanction",
    outcomeClass: "sanction",
    desc: "Opposition brief cited four non-existent cases; court imposed a $1,000 Rule 11 sanction and warned counsel about future AI use.",
    links: {
      Order: "https://www.courtlistener.com/docket/69194097/nguyen-v-savage-enterprises/",
      Coverage: "https://library.law.uic.edu/news-stories/siren-songs-of-ai-a-legal-briefing-dilemma/"
    }
  },
  {
    name: "Mid Central Operating Eng'rs Health & Welfare Fund v. Hoosiervac LLC, 2025 U.S. Dist. LEXIS 31073 (S.D. Ind. Feb. 21 2025)",
    court: "S.D. Ind., USA",
    state: "IN",
    filer: "Lawyer",
    judge: "Magistrate Judge Mark J. Dinsmore",
    date: "2025-02-21", 
    filing_date: "2024-10-29",
    outcome: "$15,000 Sanction Recommended in R&R; $6,000 Sanction adopted",
    outcomeClass: "recommendation",
    desc: "After three briefs containing AI-fabricated cases, the magistrate recommended a $15 k Rule 11 sanction and referral for discipline.",
    links: {
      "Report & Recommendation (Feb. 21, 2025)": "https://cases.justia.com/federal/district-courts/indiana/insdce/2:2024cv00326/215482/99/0.pdf",
      "Order (May 28, 2025)": "https://www.westlaw.com/Document/I628592c03bf611f08bf8d350012e3990/View/FullText.html?transitionType=Default&contextData=(sc.Default)&VR=3.0&RS=cblt1.0",
      Coverage: "https://www.lawnext.com/2024/02/not-again-two-more-cases-just-this-week-of-hallucinated-citations-in-court-filings-leading-to-sanctions.html"
    }
  },
  {
    "name": "Brick v. Gallatin County, et al., No. CV 2:24-00174-BMM (D. Mont. May 27 2025)",
    "court": "U.S. District Court, District of Montana, Butte Division, USA",
    "state": "MT",
    "filer": "Pro se",
    "judge": "Chief Judge Brian Morris",
    "date": "2025-05-27",
    "order_date": "2025-05-27",
    "filing_date": "2025-02-21",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "“Brick's filings frequently exceed page limits, disregard procedural requirements, and cite to non-existent cases to support Brick's legal contentions.” The court dismissed with leave to amend and gave a warning.",
    "links": {
      // "Filing Containing Non-Existent Cases": "https://storage.courtlistener.com/recap/gov.uscourts.mtd.78773/gov.uscourts.mtd.78773.70.0.pdf",
      "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.mtd.78773/gov.uscourts.mtd.78773.137.0.pdf"
    }
  },
  {
    "name": "United States v. Cohen, No. 18-cr-602 (S.D.N.Y. Mar. 20 2024)",
    "court": "S.D.N.Y., USA",
    "state": "NY",
    "filer": "Lawyer",
    "judge": "District Judge Jesse M. Furman",
    "date": "2024-03-20",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Motion to end Michael Cohen’s supervised release cited AI-invented 2d Circuit precedents. Judge Furman refused Rule 11 sanctions but stressed that lawyers must independently verify any generative-AI research.",
    "links": {
      "Opinion": "https://www.nysd.uscourts.gov/sites/default/files/2024-03/18cr602%20Cohen%20Opinion.pdf",
      "Coverage": "https://www.reuters.com/legal/michael-cohen-wont-face-sanctions-after-generating-fake-cases-with-ai-2024-03-20/"
    }
  },
{
  "name": "Smith v. Farwell, Civ. A. No. 2282CV01197 (Mass. Super. Ct. Feb. 12 2024)",
  "court": "Mass. Super. Ct., USA",
  "state": "MA",
  "filer": "Lawyer",
  "judge": "Justice Brian A. Davis",
  "date": "2024-02-12",
  "outcome": "$2,000 monetary sanction",
  "outcomeClass": "sanction",
  "desc": "Plaintiff’s counsel filed memoranda that relied on fictitious authorities generated by an unidentified AI tool. Finding multiple Mass. R. Prof. C. violations, the court fined counsel $2,000.’",
  "links": {
    "Order": "https://masslawyersweekly.com/wp-content/blogs.dir/1/files/2024/02/12-007-24.pdf",
    "Coverage": "https://reason.com/volokh/2024/02/16/2000-sanction-in-another-ai-hallucinated-citation-case/"
  }
},
{
  "name": "Iovino v. Michael Stapleton Assocs. Ltd., No. 5:21-cv-00064 (W.D. Va. Oct. 9 2024)",
  "court": "W.D. Va., USA",
  "state": "VA",
  "filer": "Lawyer",
  "judge": "District Judge Thomas T. Cullen",
  "date": "2024-10-09",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "After a brief opposing discovery cited non-existent cases and misquoted real ones, the court ordered lead counsel to explain reliance on AI. Concluding the errors were negligent, not intentional, Judge declined sanctions but forwarded the hearing transcript to the Virginia and Oregon bars.",
  "links": {
    "Order/Transcript": "https://www.lawnext.com/wp-content/uploads/2025/03/W.D.-Va.-21-cv-00064-dckt-000204_000-filed-2024-10-30.pdf",
    "Coverage": "https://www.reuters.com/legal/legalindustry/judge-weighs-sanctioning-lawyers-over-fictitious-case-citations-2024-07-25/",
  }
},
/* —— NEW ENTRIES —— */
{
  "name": "Dehghani v. Castro, No. 2:25-cv-00052-MIS-DLM (D.N.M. Apr. 2 2025)",
  "court": "D. N.M., USA",
  "state": "NM",
  "filer": "Lawyer (Felipe D. J. Millan)",
  "judge": "Magistrate Judge Damian L. Martinez (sanctions); District Judge Margaret I. Strickland (affirmed)",
  "date": "2025-04-02",
  "outcome": "$1,500 fine + 1-hour AI/ethics CLE + mandatory self-reports to NM & TX bars + referral of freelance ghost-writer",
  "outcomeClass": "sanction",
  "desc": "Counsel’s habeas brief quoted 20+ nonexistent precedents generated by an outsourced LAWCLERK attorney. The magistrate imposed a $1,500 Rule 11 fine, ordered a CLE on AI ethics, required the lawyer to self-report to two state bars, and to report the ghost-writer to New York’s bar. The district judge overruled objections and affirmed the sanctions.",
  "links": {
    "Order on Sanctions": "https://storage.courtlistener.com/recap/gov.uscourts.nmd.511942/gov.uscourts.nmd.511942.28.0.pdf",
    "Affirmance": "https://law.justia.com/cases/federal/district-courts/new-mexico/nmdce/2:2025cv00052/511942/35/"
  }
},
{
  "name": "Bevins v. Colgate-Palmolive Co., No. 25-576 (E.D. Pa. Apr. 10 2025)",
  "court": "E.D. Pa., USA",
  "state": "PA",
  "filer": "Lawyer (Vincenzo M. Palazzo)",
  "judge": "District Judge Michael M. Baylson",
  "date": "2025-04-10",
  "outcome": "Appearance stricken; referral to state & district bar; client-notice requirement",
  "outcomeClass": "sanction",
  "desc": "Plaintiff’s opposition briefs relied on two AI 'hallucinated' Pennsylvania cases that combined mismatched names, numbers, and cites. After counsel failed to supply the opinions, Judge struck his appearance, ordered the opinion served on the Pennsylvania bar and the court’s own bar, and required counsel to inform the client she must hire new representation before refiling.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.paed.633040/gov.uscourts.paed.633040.28.0.pdf"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Ferris v. Amazon.com Services, LLC, No. 3:24-cv-304-MPM-JMV (N.D. Miss. Apr. 16 2025)",
  "court": "N.D. Miss., USA",
  "state": "MS",
  "filer": "Pro se",
  "judge": "District Judge Michael P. Mills",
  "date": "2025-04-16",
  "outcome": "Plaintiff to pay Amazon’s costs (amount TBD) after bill of costs filed",
  "outcomeClass": "costs",
  "desc": "Pro se plaintiff’s briefs quoted AI-invented cases. Condemning litigants who cite “false cases” as “avatars of a post-truth world,” the court found a Rule 11 violation and ordered Ferris to reimburse Amazon for the attorney fees and expenses traceable to the fake citations.",
  "links": {
    "Order": "https://caselaw.findlaw.com/court/us-dis-crt-n-d-mis-oxf-div/117175540.html"
  }
},
/* —— NEW ENTRIES —— */
{
  "name": "Benjamin v. Costco Wholesale Corporation, No. 2:24-cv-7399 (E.D.N.Y. Apr. 24 2025)",
  "court": "E.D.N.Y., USA",
  "state": "NY",
  "filer": "Lawyer (Victoria Hovsepyan)",
  "judge": "Magistrate Judge Lee G. Dunst",
  "date": "2025-04-24",
  "outcome": "$1,000 sanction + client-notice requirement",
  "outcomeClass": "sanction",
  "desc": "Reply in support of a motion to remand cited multiple ChatOn-generated phantom cases. Finding the conduct “subjective bad faith,” the court fined counsel $1,000, ordered payment within 14 days, and required service of the order on the client.",
  "links": {
    "Order": "https://caselaw.findlaw.com/court/us-dis-crt-ed-new-yor/117206693.html"
  }
},
{
  "name": "Bunce v. Visual Technology Innovations, Inc., No. 2:23-cv-01740 (E.D. Pa. Feb. 27 2025)",
  "court": "E.D. Pa., USA",
  "state": "PA",
  "filer": "Lawyer (Raja G. Rajan)",
  "judge": "District Judge Kai N. Scott",
  "date": "2025-02-27",
  "outcome": "$2,500 sanction + 1-hour AI-ethics CLE",
  "outcomeClass": "sanction",
  "desc": "Defense counsel’s motions relied on two nonexistent and several vacated or inapposite cases generated by ChatGPT. The court held the lawyer flouted Rule 11(b)(2), imposed a $2,500 penalty, and ordered completion of an AI/ethics CLE.",
  "links": {
    "Memorandum": "https://www.ropesgray.com/-/media/ropes-post-pilot/microsites/ai/pdfs/2025/bunce-v-visual-tech-innovations-inc-2025-us-dist.pdf",
    "Coverage": "https://www.lawnext.com/2025/03/my-dear-miss-glory-the-robots-are-not-people-says-judge-in-yet-another-hallucinations-case.html"
  }
},
{
    "name": "Herigodt v. La. Dep’t of Transportation & Development, No. 2024-CA-0580 (La. App. 4 Cir. Mar. 7 2025)",
    "court": "La. Ct. App. 4th Cir., USA",
    "state": "LA",
    "filer": "Pro se",
    "judge": "Judges Belsome, Ledet & Herman (per curiam)",
    "date": "2025-03-07",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "DOTD showed appellant’s brief quoted multiple AI-hallucinated authorities.  Plaintiffs apologized; the panel reversed on other grounds yet stressed the duty of candor and warned that even pro se filers must verify AI output.",
    "links": {
      "Opinion": "https://cases.justia.com/louisiana/fourth-circuit-court-of-appeal/2025-2024-ca-0580.pdf",
      "Coverage": "https://law.justia.com/cases/louisiana/fourth-circuit-court-of-appeal/2025/2024-ca-0580.html"
    }
  }, 

  {
    "name": "Saxena v. Martinez-Hernandez, No. 2:22-cv-02126-CDS-BNW, 2025 WL 522234 (D. Nev. Feb. 18 2025)",
    "court": "D. Nev., USA",
    "state": "NV",
    "filer": "Pro se",
    "judge": "District Judge Cristina D. Silva",
    "date": "2025-02-18",
    "outcome": "Complaint dismissed with prejudice; warning re fake citations",
    "outcomeClass": "dismissal",
    "desc": "Court dismissed the action after plaintiff’s filings cited non-existent cases and quoted mis-stated precedent.  Judge held the misuse violated Rule 11, noted the risk of ChatGPT ‘hallucinations,’ and warned future misuse could trigger monetary sanctions.",
    "links": {
      "Opinion": "https://cases.justia.com/federal/district-courts/nevada/nvdce/2%3A2022cv02126/160032/98/0.pdf",
      "Coverage": "https://www.linkedin.com/posts/matuszakm_a-self-described-law-student-in-the-united-activity-7298156403876085762-UMDN"
    }
  },  

  {
    "name": "Greenflight Venture Corp. v. Google LLC, No. 24-cv-80395 (S.D. Fla. Feb. 4 2025)",
    "court": "S.D. Fla., USA",
    "state": "FL",
    "filer": "Pro se",
    "judge": "District Judge Robin L. Rosenberg",
    "date": "2025-02-04",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Motion to remand relied on fabricated cases, court ignored the claims but did not issue sanctions.",
    "links": {
      "OSC": "https://www.courtlistener.com/docket/68397500/65/isaacs-v-google-llc/"
    }
  },  

  {
    "name": "Benshoof v. Ferguson, 2:24-cv-00808, (W.D. Wash. May 15, 2025) ECF No. 121",
    "court": "W.D. Wash., USA",
    "state": "WA",
    "filer": "Pro se",
    "judge": "District Judge John H. Chun",
    "date": "2025-05-15",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Plaintiffs’ ‘emergency’ motions included citations that did not exist in any reporter.",
    "links": {
      "Order": "https://www.courtlistener.com/docket/68839037/121/benshoof-v-ferguson/"
    }
  },
/* —— END NEW ENTRIES —— */

/* —— END NEW ENTRY —— */

/* —— NEW ENTRIES 3/18/2025 —— */

/* —— NEW ENTRY —— */
{
  "name": "Crypto Open Patent Alliance v. Wright, [2024] EWHC 3135 (Ch) (Dec. 6 2024)",
  "court": "High Court (Chancery Division), UK",
  "state": "UK-ENG",
  "filer": "Pro se",
  "judge": "Mr Justice Mellor",
  "date": "2024-12-06",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Litigant's submissions quoted authorities that contained none of the passages he relied on; likely ChatGPT hallucinations. The court disregarded the false citations but imposed no penalty.",
  "links": {
    "Judgment": "https://caselaw.nationalarchives.gov.uk/ewhc/ch/2024/3135",
    "Coverage": "https://naturalandartificiallaw.com/remote-attendance-at-committal-hearings-vulnerable-witnesses-and-ai-hallucinations-by-chatgpt/"
  }
},
{
  "name": "Crypto Open Patent Alliance v. Wright, Nos. IL-2021-000019 & IL-2022-000069, [2025] EWHC 1139 (Ch) (UK High Ct. May 12 2025) (second case)",
  "court": "High Court of Justice, Business & Property Courts (ChD), UK",
  "state": "UK",
  "filer": "Pro Se",
  "judge": "Mr Justice Mellor",
  "date": "2025-05-12",
  "outcome": "General Civil Restraint Order issued for three years against litigant; case referred to the Attorney General; ordered to pay £100,000 in indemnity costs",
  "outcomeClass": "sanction",
  "desc": "In a second case involving the same litigants: “The evidence before the Court was, once again, overwhelming: all three considerations pointed overwhelmingly in favour of the grant of a GCRO against Dr Wright… I was completely satisfied that an ECRO would not provide adequate protection… and concluded that a GCRO was warranted and appropriate.”",
  "links": {
    "Opinion": "https://www.bailii.org/ew/cases/EWHC/Ch/2025/1139.html"
  }
},

/* —— NEW ENTRY —— */
{
  "name": "Matter of Vanguard Constr. & Dev. Co. v. 400 Times Square Assoc., LLC, 2025 NY Slip Op 01781 (App. Div. 1st Dep’t Mar. 25 2025)",
  "court": "N.Y. Appellate Division, First Department, USA",
  "state": "NY",
  "filer": "Lawyer",
  "judge": "Per curiam panel",
  "date": "2025-03-25",
  "outcome": "Counsel rebuked for unfounded AI allegation, but citations stricken",
  "outcomeClass": "warning",
  "desc": "The panel admonished counsel for insinuating—without evidence—that opposing counsel had “used ChatGPT to write [his] brief.” Unsupported allegations, it warned, undermine professional integrity; a stray record citation was stricken.",
  "links": {
    "Opinion": "https://caselaw.findlaw.com/court/ny-supreme-court-appellate-division/117090479.html"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Bandla v. Solicitors Regulation Authority, [2025] EWHC 1167 (Admin) (May 13 2025)",
  "court": "High Court (Administrative Court), UK",
  "state": "UK-ENG",
  "filer": "Pro se",
  "judge": "Fordham J.",
  "date": "2025-05-13",
  "outcome": "Appeal struck out as abuse of process",
  "outcomeClass": "dismissal",
  "desc": "Several authorities cited in the appeal did not exist. Holding that the appeal was an abuse of process, the court refused permission and emphasised the duty to verify any AI-assisted research.",
  "links": {
    "Judgment": "https://www.bailii.org/ew/cases/EWHC/Admin/2025/1167.html"
  }
},
/* —— NEW ENTRY —— */
/* —— NEW ENTRY —— */
{
  "name": "Mortazavi v. Booz Allen Hamilton, Inc., No. 2:24-cv-07189-SB-RAO (C.D. Cal. Sept. 26 2024)",
  "court": "C.D. Cal., USA",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "District Judge Stanley Blumenfeld Jr.",
  "date": "2024-10-30",
  "outcome": "$2,500 sanction",
  "outcomeClass": "referral",
  "desc": "A motion to remand cited a nonexistent case and was drafted with AI without the declaration the court’s standing order requires. The judge issued an OSC directing counsel to explain why sanctions should not be imposed, ultimately imposing a $2,500 sanction and ordering attorney to notify the California State Bar.",
  "links": {
    "Order to Show Cause": "https://cases.justia.com/federal/district-courts/california/cacdce/2%3A2024cv07189/938427/27/0.pdf",
    "Order on Sanctions": "https://www.courtlistener.com/docket/69078157/48/mehrnaz-mortazavi-v-booz-allen-hamilton-inc/"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Nexgen Pathology Servs. Ltd. v. Darceuil Duncan, CV2023-04039 (Trin. & Tobago High Ct. Apr. 30 2025)",
  "court": "High Court of Trinidad & Tobago, Trinidad & Tobago",
  "state": "TT",
  "filer": "Lawyer",
  "judge": "Justice Westmin R. James",
  "date": "2025-04-30",
  "outcome": "Authorities struck; disciplinary referral",
  "outcomeClass": "referral",
  "desc": "Counsel cited multiple Industrial Court ‘decisions’ that proved fictitious—likely hallucinations. Court emphasizes that citing non-existent cases, even inadvertently, constitutes a serious abuse of process and professionalism and condemns \"irresponsible use of internet sources or generative AI tools.\" Referred matter to Disciplinary Committee.",
  "links": {
    "Opinion": "https://webopac.ttlawcourts.org/LibraryJud/Judgments/HC/james/2023/cv_23_04039DD30Apr2025.pdf",
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Reclamação 78.890 (STF Apr. 25 2025)",
  "court": "Supremo Tribunal Federal, Brazil",
  "state": "BR",
  "filer": "Lawyer",
  "judge": "Min. Cristiano Zanin",
  "date": "2025-04-25",
  "outcome": "Monetary sanction (twice the filing costs); bar referral",
  "outcomeClass": "sanction",
  "desc": "A constitutional complaint drafted with AI quoted a string of nonexistent STF and STJ precedents. Citing litigational bad faith, the minister dismissed the filing, imposed a penalty under CPC art. 81 of twice the filing costs, and forwarded the matter to national and state bar councils.",
  "links": {
    "Coverage": "https://www.migalhas.com.br/quentes/430465/zanin-ve-ma-fe-e-rejeita-peticao-feita-por-ia-com-falsos-precedentes",
    "Docket" : "https://portal.stf.jus.br/processos/detalhe.asp?incidente=7240744"
  }
},
{
  "name": "Attaway v. Illinois Department of Corrections, No. 23-cv-2091-DWD (S.D. Ill. Apr. 14 2025)",
  "court": "S.D. Ill., USA",
  "state": "IL",
  "filer": "Pro se",
  "judge": "District Judge David W. Dugan",
  "date": "2025-04-14",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Plaintiff’s post-judgment motions cited several nonexistent authorities that may have been copied from a generative-AI tool.  Judge cautioned that any future reliance on fake caselaw would trigger Rule 11 monetary sanctions.",
  "links": {
    "Order": "https://www.casemine.com/judgement/us/68022da00e0adcc9305db4e9"
  }
},
/* —— CORRECTED ENTRY —— */
{
  "name": "Nichols v. Walmart Inc., No. CV 124-236 (S.D. Ga. Apr. 23 2025)",
  "court": "S.D. Ga. (Augusta Div.), USA",
  "state": "GA",
  "filer": "Pro se",
  "judge": "District Judge J. Randal Hall (adopting M.J. Brian K. Epps)",
  "date": "2025-04-23",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Overruling objections and dismissing for lack of jurisdiction, the Court also addressed Nichols’s motion that relied on fictitious authorities, stressing that even pro-se litigants receive no leeway for citing “fake, nonexistent, misleading” cases and warning that Rule 11 sanctions would follow any repeat.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.gasd.106188/gov.uscourts.gasd.106188.60.0.pdf"
  }
},
{
  "name": "Ford v. Bank of New York Mellon, No. 24-50053 (5th Cir. Apr. 4 2025)",
  "court": "5th Cir., USA",
  "state": "LA-TX (appellate)",
  "filer": "Pro se",
  "judge": "Per curiam panel",
  "date": "2025-04-04",
  "outcome": "Arguments disregarded; no sanction",
  "outcomeClass": "warning",
  "desc": "A per-curiam opinion affirming dismissal noted in a footnote that Ford’s brief cited authorities that do not exist — an issue the panel attributed to generative-AI research.  The court disregarded the fake cases and reminded litigants that Rule 11 applies equally on appeal.",
  "links": {
    "Opinion": "https://law.justia.com/cases/federal/appellate-courts/ca5/24-50053/24-50053-2025-04-04.html"
  }
},
/* —— CORRECTED ENTRY —— */
{
  "name": "McKeown v. Paycom Payroll LLC, No. CIV-24-301-PRW (W.D. Okla. Mar. 31 2025)",
  "court": "W.D. Okla., USA",
  "state": "OK",
  "filer": "Pro se",
  "judge": "District Judge Patrick R. Wyrick",
  "date": "2025-03-31",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Granting in part Paycom’s motion to strike, the Court found McKeown had twice relied on nonexistent caselaw—“repeated use of falsified legal authority.” ",
  "links": {
    "Order": "https://cases.justia.com/federal/district-courts/oklahoma/okwdce/5%3A2024cv00301/126292/30/0.pdf"
  }
},
{
  "name": "Johnson v. Dunn, No. 2:21-cv-01701-AMM (N.D. Ala. May 19 2025)",
  "court": "N.D. Ala., USA",
  "state": "AL",
  "filer": "Lawyer",
  "judge": "District Judge Ann M. Manasco",
  "date": "2025-05-19",
  "outcome": "Response to order to show cause; sanctions pending",
  "outcomeClass": "pending",
  "desc": "In a response to the Court’s show-cause order, lawfirm admitted that its attorneys used ChatGPT to add nonexistent case citations to prior motions, acknowledged the citations were AI “hallucinations,” and apologized to the Court and opposing counsel.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.alnd.179677/gov.uscourts.alnd.179677.195.0.pdf"
  }
},
{
  "name": "Thomas v. Commissioner of Internal Revenue, Docket No. 10795-22 (U.S. Tax Ct. Oct. 23 2024)",
  "court": "United States Tax Court, USA",
  "state": "USA",
  "filer": "Lawyer",
  "judge": "Judge Ronald L. Buch",
  "date": "2024-10-23",
  "outcome": "Pretrial Memorandum deemed stricken; warning",
  "outcomeClass": "no_sanction",
  "desc": "Finding that several cases cited in petitioner’s Pretrial Memorandum “did not exist, evidencing possible AI hallucinations,” the Court held that counsel’s signature failed to satisfy Tax Court Rule 33 and therefore “**petitioner’s Pretrial Memorandum … is deemed stricken.**” The Court warned that large-language-model tools can generate fictitious authorities and emphasized counsel’s duty to verify any AI-assisted work.",
  "links": {
    "Order": "/opinion_pdfs/Thomas_v_IRS.pdf"
  }
},
{
  "name": "Bauche v. Commissioner of Internal Revenue, T.C. Memo 2025-66 (U.S. Tax Ct. May 20 2025)",
  "court": "U.S. Tax Court, USA",
  "state": "USA",
  "filer": "Pro se",
  "judge": "Judge Guy",
  "date": "2025-05-20",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Petitioner’s brief opposing deficiencies cited two decisions the Court could not find anywhere.  The Tax Court declined to sanction the pro-se litigant.",
  "links": {
    "Opinion": "/opinion_pdfs/Bauche_v_US_Tax_Court_2025-05-20.pdf"
  }
},

{
  "name": "Versant Funding LLC v. Teras Breakbulk Ocean Navigation Enters., No. 23-cv-81494 (S.D. Fla. May 20 2025)",
  "court": "S.D. Fla., USA",
  "state": "FL",
  "filer": "Lawyer",
  "judge": "Mag. Judge William Matthewman",
  "date": "2025-05-20",
  "outcome": "$1,500 costs",
  "outcomeClass": "sanction",
  "desc": "Two defense lawyers filed a response brief containing a Delaware privilege case that never existed.  The court awarded plaintiff its fees for ferreting out the fake cite, fined lead counsel $1,000 and local counsel $500, and required both to complete CLE on generative-AI ethics.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.flsd.514535/gov.uscourts.flsd.514535.384.0.pdf"   
  }
},

{
  "name": "Beenshoof v. Chin, No. 2:24-cv-00808 (W.D. Wash. May 15 2025)",
  "court": "W.D. Wash., USA",
  "state": "WA", 
  "filer": "Pro se",
  "judge": "District Judge John H. Chun",
  "date": "2025-05-15",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Plaintiff’s reply cited a supposed Oregon district-court opinion that does not exist.  The court struck the citation, reminded plaintiff that Rule 11 applies equally to pro-se litigants, and warned sanctions would follow any repeat.",
  "links": {
    "Order": "https://www.courtlistener.com/docket/68839037/121/benshoof-v-ferguson/"
  }
},
{
  "name": "Newbern v. DeSoto Cnty. Sch. Dist., No. 3:23-cv-113 (N.D. Miss. May 12 2025)",
  "court": "N.D. Miss., USA",
  "state": "MS",
  "filer": "Pro se",
  "judge": "District Judge Sharion Aycock",
  "date": "2025-05-12",
  "outcome": "Partioal dismissal as sanction",
  "outcomeClass": "dismissal",
  "ai_used": "Unidentified (implied use)",
  "desc": "Several key authorities offered were fabricated.  Treating the fake cases against the officer, the court dismissed all § 1983 claims but allowed limited state-law discovery to proceed.",
  "links": {
    "Opinion": "https://caselaw.findlaw.com/court/us-dis-crt-n-d-mis-oxf-div/117261206.html"
    }
},
{
  "name": "Qamar v. Bd. of Trs. of Governors State Univ., No. 24-cv-1987 (N.D. Ill. May 6 2025)",
  "court": "N.D. Ill., USA",
  "state": "IL",
  "filer": "Pro se",
  "judge": "District Judge Manish S. Shah",
  "date": "2025-05-06",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Plaintiff relied on a non-existent precedent.  The court accepted the filing but cautioned that continued citations to non-existent caselaw would violate Rule 11 and could merit sanctions.",
  "links": {
    "Opinion": "https://cases.justia.com/federal/district-courts/illinois/ilndce/1:2024cv13245/470262/28/0.pdf?ts=1746611749"
  }
},
{
  "name": "Harris v. Take-Two Interactive Software, Inc., No. 1:24-cv-00947 (D. Colo. May 6 2025)",
  "court": "D. Colo., USA",
  "state": "CO",
  "filer": "Pro se",
  "judge": "Mag. Judge Gordon P. Gallagher",
  "date": "2025-05-06",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Judge warned pro se client about citing non-existent cases.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.cod.234471/gov.uscourts.cod.234471.205.0.pdf"
  }
},
{
  "name": "Rotonde v. Stewart Title Ins. Co., 2025 NY Slip Op 50728(U) (Sup. Ct. Westchester Cty. May 6 2025)",
  "court": "N.Y. Sup. Ct. (Westchester Cty.), USA",
  "state": "NY",
  "filer": "Pro se",
  "judge": "Justice Linda S. Jamieson",
  "date": "2025-05-06",
  "outcome": "Claims dismissed; formal warning",
  "outcomeClass": "warning",
  "desc": "In footnote, court observed that several cases cited in opposition papers 'do not exist' and warned plaintiff that any future reliance on fake authority would result in sanctions.",
  "links": {
    "Opinion": "https://law.justia.com/cases/new-york/other-courts/2025/2025-ny-slip-op-50728-u.html"
  }
},
{
  "name": "In re Thomas Grant Neusom, No. 8:24-mc-00015 (M.D. Fla. May 8 2025)",
  "court": "M.D. Fla., USA",
  "state": "FL",
  "filer": "Lawyer",
  "judge": "Chief Judge Timothy J. Corrigan (adopting Grievance-Cmte.)",
  "date": "2025-03-08",
  "outcome": "One-year federal bar suspension",
  "outcomeClass": "sanction",
  "desc": "Disciplinary inquiry showed multiple filings with invented opinions and quotations.  Court suspended attorney from the Middle District for one year and imposed compliance reporting conditions.",
  "links": {
    "Order": "https://www.courtlistener.com/docket/68209128/6/in-re-thomas-grant-neusom/",
    "Grievance Committee Recommendation" : "https://www.courtlistener.com/docket/68209128/3/in-re-thomas-grant-neusom/"
  }
},
{
  "name": "Raven Investigations & Security Consulting, B-422880.4 (Gov’t Accountability Office May 7 2025)",
  "court": "U.S. GAO Bid-Protest, USA",
  "state": "USA",
  "filer": "Non-lawyer representative",
  "judge": "GAO (Procurement Law Division)",
  "date": "2025-05-07",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Bid-protest submissions included citations to GAO decisions that never existed.  GAO dismissed the protest on other grounds but warned that future reliance on fabricated authority could lead to cost-shifting or dismissal with prejudice.",
  "links": {
    "Decision": "https://www.gao.gov/products/b-423447"
  }
},
{
  "name": "Fox v. Assum",
  "court": "Tel Aviv District Court, Israel",
  "state": "Israel",
  "filer": "Lawyer",
  "judge": "Judge Limor Biber Shitrit",
  "date": "2025-05-14",
  "outcome": "₪1,200 costs; explanation required",
  "outcomeClass": "costs",
  "desc": "Defense notice relied on a judgment that does not exist.",
  "links": {
    "Decision": "https://websitedc.s3.amazonaws.com/documents/Fox_v._Assum_May_24_2025.pdf"
  }
},
{
  "name": "Case No. 72079-11-24 (Nazareth Mag. Ct. May 12 2025)",
  "court": "Israel Magistrate Court, Israel",
  "state": "Israel",
  "filer": "Lawyer",
  "judge": "Judge Itay Katz",
  "date": "2025-05-12",
  "outcome": "Referred for possible bar discipline",
  "outcomeClass": "referral",
  "desc": "Civil motion cited multiple non-existent Israeli rulings.  While sparing immediate sanctions, the judge forwarded the matter to the judiciary’s Legal Department to consider referral to the Israel Bar Ethics Committee.",
  "links": {
    "Order": "https://websitedc.s3.amazonaws.com/documents/X_v._Y_Israel_May_12_2025.pdf"
  }
},
{
  "name": "Jamisson Roriz de Santana Andrade v. TST, RCC 60.487 (Sup. Fed. Ct. Brazil May 12 2025)",
  "court": "Supremo Tribunal Federal, Brazil",
  "state": "Brazil",
  "filer": "Lawyer",
  "judge": "Min. Dias Toffoli",
  "date": "2025-05-12",
  "outcome": "Double filing-fee penalty; bar referral",
  "outcomeClass": "sanction",
  "desc": "‘Constitutional complaint’ potentially drafted with MobiOffice AI cited nonexistent STF precedents.  STF summarily rejected the case, fined counsel twice the filing costs under CPC art. 81, and notified the OAB.",
  "links": {
    "Decision": "https://static.poder360.com.br/2025/05/STF-oficia-OAB-sobre-uso-de-IA-em-peticao.pdf"
  }
},
{
  "name": "Brown v. Patel, No. 4:24-cv-05036 (S.D. Tex. Apr 22 2025)",
  "court": "S.D. Tex., USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Mag. Judge Peter Bray",
  "date": "2025-04-22",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Five nonexistent cases and misrepresentations of three others appeared in plaintiff’s amended complaint.  Court warned that continued misuse of AI-generated authority would lead to sanction.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.txsd.1985734/gov.uscourts.txsd.1985734.21.0.pdf"
  }
},

{
  "name": "Sims v. Souily-Lefave, No. 2:24-cv-00831-CDS-EJY (D. Nev. Apr 15 2025)",
  "court": "D. Nev., USA",
  "state": "NV",
  "filer": "Lawyer",
  "judge": "District Judge Cristina D. Silva",
  "date": "2025-04-15",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Screening order noted at least two fabricated authorities and cautioned plaintiff that future filings containing AI 'hallucinations' could trigger sanctions.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.nvd.168422/gov.uscourts.nvd.168422.127.0.pdf"
  }
},


{
  "name": "Gustafson v. Amazon.com Inc., No. CV-24-01834-PHX-SHD (D. Ariz. Apr 30 2025)",
  "court": "D. Ariz., USA",
  "state": "AZ",
  "filer": "Pro se",
  "judge": "District Judge G. Murray Snow",
  "date": "2025-04-30",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Motion contained citations to non-existent cases.  Court warned plaintiff that they may be subject to sanctions.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.azd.1390331/gov.uscourts.azd.1390331.69.0.pdf"
  }
},
{
  "name": "Arajuo v. Wedelstadt, No. 23-C-1190 (E.D. Wis. Jan. 22 2025)",
  "court": "United States District Court for the Eastern District of Wisconsin",
  "state": "WI",
  "filer": "Lawyer",
  "judge": "District Judge William C. Griesbach",
  "date": "2025-01-22",
  "order_date": "2025-01-22",
  "filing_date": "2024-12-29",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The court addressed the use of fictitious authorities in defendants’ brief—counsel admitted employing a “new legal research medium,” likely an AI tool, which produced non-existent cases. Citing Rule 11 and Park v. Kim, the judge deemed such conduct “unacceptable” and issued a caution that repeat offenses could lead to sanctions.",
  "links": {
    "Order PDF": "https://storage.courtlistener.com/recap/gov.uscourts.wied.104945/gov.uscourts.wied.104945.38.0.pdf"
  }
},
{
  "name": "Arnaoudoff v. Tivity Health Inc., No. 2:23-cv-01510-DJH (D. Ariz. Mar 11 2025)",
  "court": "D. Ariz., USA",
  "state": "AZ",
  "filer": "Pro se",
  "judge": "District Judge Susan R. Bolton",
  "date": "2025-03-11",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Plaintiff admitted drafting with ChatGPT.  The court disregarded two phantom cases but granted a motion to correct the record instead of imposing sanctions, citing plaintiff being up front about their use of AI.",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.azd.1341963/gov.uscourts.azd.1341963.69.0.pdf"
  }
},

{
  "name": "210S LLC v. Di Wu, No. CAAP-24-0000817 (Haw. Ct. App. Mar 11 2025)",
  "court": "Haw. Intermediate Ct. App., USA",
  "state": "HI",
  "filer": "Pro se",
  "judge": "Per curiam panel",
  "date": "2025-03-11",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Court warned 'cautioned that all parties, including self-represented litigants, shall not cite fictitious cases or misrepresent the holdings of a case.'",
  "links": {
    "Order": "https://www.casemine.com/judgement/us/67d25fd13db7ac2e2c1d5b31"
  }
},

{
  "name": "Alkuda v. McDonald Hopkins Co., L.P.A., No. 1:24-cv-01103-BM (N.D. Ohio Mar 18 2025)",
  "court": "N.D. Ohio, USA",
  "state": "OH",
  "filer": "Pro se",
  "judge": "District Judge J. Philip Calabrese",
  "date": "2025-03-18",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "In a footnote, the court warned that \"submitting fictitious legal citations is  not permitted, whether submitted by a pro se litigant or a licensed attorney. [Litigant] is now on  notice that any further submissions of fictitious legal citations to a court may result in dismissal  or other sanctions, including monetary penalties, as deemed appropriate by the Court.\"",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.ohnd.307896/gov.uscourts.ohnd.307896.17.0.pdf"
  }
},
{
  "name": "Stevens v. BJC Health System, No. ED 112759 (Mo. Ct. App. Mar 18 2025)",
  "court": "Missouri Court of Appeals, Eastern District, USA",
  "state": "MO",
  "filer": "Pro se",
  "judge": "Judge Renée D. Hardin-Tammons (panel)",
  "date": "2025-03-18",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "In a footnote, the court noted that the appellant's brief contained citations to six cases that the Court was unable to locate. \"These citations to fictitious legal authorities suggest the use of artificial intelligence in the drafting of Appellant's brief… we warn litigants that using artificial intelligence to draft a legal document may lead to sanctions if the user fails to perform a critical review of the end-product to ensure that fictitious legal authorities or citations do not appear in filings with this Court or any other court.\"",
  "links": {
    "Opinion": "https://caselaw.findlaw.com/court/mis-crt-app-eas-dis-div-thr/117060624.html"
  }
},
{
  "name": "Buckner v. Hilton Global, Civil Action No. 3:24-cv-00375-RGJ (W.D. Ky. Jun. 20 2025)",
  "court": "U.S. District Court, Western District of Kentucky, USA",
  "state": "KY",
  "filer": "Pro se",
  "judge": "District Judge Rebecca Grady Jennings",
  "date": "2025-03-21",
  "order_date": "2025-03-21",
  "filing_date": "2025-01-26",
  "outcome": "Motion for recusal denied, and the court took no further action on the fabricated citations",
  "outcomeClass": "no_action",
  "desc": "In a first opinion the court denied a motion to dismiss, noting that, “Quite obviously, many harms flow from such deception—including wasting the opposing party’s time and money, the Court’s time and resources, and reputational harms to the legal system (to name a few)... Although the Court recognizes that Buckner is pro se, his status will not be tolerated as an excuse for citing nonexistent case law. Thus, the use of citations to nonexistent cases may result in sanctions such as the pleading being stricken, filing restrictions imposed, or the case being dismissed.” (cleaned up) However, pro se plaintiff followed up, this time asking for judicial recusal. The court noted that, \"Buckner’s motion also chastises the Court for commenting on Buckner’s citation to nonexistent case law. He asserts this has a chilling effect on litigation. While a chilling effect on litigation is certainly not the intended effect, the Court cannot permit litigants to file false or misleading briefs with the Court regardless of whether these falsehoods are made using artificial intelligence (“AI”) or are simply made-up wholesale.... In similar fashion, the use of artificial intelligence to effectively “ghostwrite” briefs, can allow for violation of the spirit of Rule 11 and creates serious concerns for maintaining candor to the Court. Such concerns were directly on display in Buckner’s brief, in the citation to nonexistant cases. The citation to nonexistant case law in support of Buckner’s arguments directly violates his duty of candor to the Court. . . As stated previously, while the Court recognizes that Buckner is pro se, his status will not be tolerated as an excuse for citing nonexistent case law or violating his duty of candor to the court. . . This Court’s opinion pointing out Buckner’s citation to nonexistent case law, along with its implications, is an issue for appeal and not a valid basis for recusal\"",
  "links": {
    "Opinion 2": "https://storage.courtlistener.com/recap/gov.uscourts.kywd.135307/gov.uscourts.kywd.135307.45.0.pdf",
    "Opinion 1": "https://storage.courtlistener.com/recap/gov.uscourts.kywd.135307/gov.uscourts.kywd.135307.36.0.pdf",
  }
},
{
  "name": "Williams v. Capital One Bank (USA) N.A., No. 1:24-cv-2032 (D.D.C. Mar 18 2025)",
  "court": "D.D.C., USA",
  "state": "DC",
  "filer": "Pro se",
  "judge": "District Judge Rudolph Contreras",
  "date": "2025-03-18",
  "outcome": "Warning only",
  "outcomeClass": "dismissal",
  "desc": "\"Courts have recently seen increasing reliance on artificial intelligence… Williams cites to cases that do not exist and may either be from his imagination or represent hallucinations of artificial intelligence… The Court strongly warns Williams against filing briefs with fabricated case citations in this Court or any other.\"",
  "links": {
    "Opinion": "https://www.govinfo.gov/content/pkg/USCOURTS-dcd-1_24-cv-02032/pdf/USCOURTS-dcd-1_24-cv-02032-0.pdf"
  }
},
{
  "name": "Sheets v. Presseller, No. 2:24-cv-00495 (M.D. Fla. Mar 11 2025)",
  "court": "M.D. Fla. (Fort Myers Div.), USA",
  "state": "FL",
  "filer": "Pro se",
  "judge": "Magistrate Judge Kyle C. Dudek",
  "date": "2025-03-11",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "\"Finally, the City claims that Sheets relied on generative AI to draft discovery, emails, and pleadings … If Sheets relies on any non-existent cases moving forward, the Court may consider sanctions.\"",
  "links": {
    "Order": "https://ecf.flmd.uscourts.gov/cgi-bin/show_public_doc?2024-00495-110-2-cv",
    "Filing Containing Hallucinated Citations": "https://storage.courtlistener.com/recap/gov.uscourts.flmd.428254/gov.uscourts.flmd.428254.102.0.pdf"    // Pl.’s motion to compel (Doc. 102) – cited by the court as containing the bad citations
  }
},
{
  "name": "Plonit v. Sharia Court of Appeals, HCJ 38379/12-24 (Isr. High Ct. Just. Feb 23 2025)",
  "court": "High Court of Justice (Israel), Israel",
  "state": "Israel",
  "filer": "Lawyer",
  "judge": "Justice Gila Canfy-Steinitz (panel)",
  "date": "2025-02-23",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The petition relied on fictitious precedents apparently generated by an AI service.  The Court dismissed the case and warned that lawyers remain professionally responsible for verifying AI output.",
  "links": {
    "Decision (PDF)": "https://supremedecisions.court.gov.il/home/Download?path=NetVerdicts/2025/3/2/2025-1-23602-5-2&fileName=52977a5595010000090037f6ad0e9015&type=4",
    "Coverage": "https://www.jewishpress.com/news/the-courts/israels-high-court-rejects-plea-written-by-ai-that-cited-fake-rulings/2025/02/24/"

  }
},
{
  "name": "Dog Rights Ass’n v. Ministry of Agriculture, HCJ 1868/25 (Isr. Sup. Ct. Feb 28 2025)",
  "court": "Supreme Court, Israel",
  "state": "Israel",
  "filer": "Lawyer",
  "judge": "Justice Noam Sohlberg (panel)",
  "date": "2025-02-28",
  "outcome": "Petition dismissed as sanction; ₪7,000 costs and warning",
  "outcomeClass": "costs",
  "desc": "The public-interest petition was riddled with invented precedents.  The Court dismissed it, imposed ₪7,000 costs, and cautioned that future AI-generated fabrications will attract harsher sanctions.",
  "quote": "״זוהי הבעיה הגדולה של העתירה הנוכחית, ובעטיה נחרץ דינה לשבט״, כתב השופט נעם סולברג, והוסיף כי \"עורך דין אשר מגיש כתבי-טענות כאמור, חוטא ב'חטא מרובע'.\"",
  "links": {
    "Article": "https://www.law.co.il/media/computer-law/dogs_rights_advancement_association.pdf"
  }
},
{
    "name": "LYJ v. Occupational Therapy Board of Australia [2025] QCAT 68 (26 Mar 2025)",
    "court": "Queensland Civil and Administrative Tribunal (QCAT), Australia",
    "state": "Australia-QLD",
    "filer": "Pro se",
    "judge": "Member Ann Fitzpatrick",
    "date": "2025-03-26",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "Stay granted but Tribunal warned that quoting a non-existent Court of Appeal authority—generated by ChatGPT—undermines credibility and wastes public resources.",
    // "quote": "“Citing a judgment ‘found’ by ChatGPT that is not in any authorised series weakens your submission and diverts the Tribunal’s time.”",
    "links": {
      "Decision": "https://www.queenslandjudgments.com.au/caselaw/qcat/2025/96",
    }
  },
{
  "name": "Reddan v. An Bord Pleanála, [2025] IEHC 197 (Ir. High Ct. Mar 13 2025)",
  "court": "High Court, Ireland",
  "state": "Ireland",
  "filer": "Pro se",
  "judge": "Justice Richard Nolan",
  "date": "2025-03-13",
  "outcome": "Warning only",
  "outcomeClass": "dismissal",
  "desc": "Application accusing a golf-club trusteeship of constitutional wrongs relied on AI-generated pseudo-legal concepts.  Court refused leave for judicial review and sharply criticized the misuse of AI hallucinations.",
  "links": {
    "Judgment": "https://www.courts.ie/view/Judgments/b323bfc6-665d-4dde-970f-50feb065f0a8/9413138c-64cf-41a8-858c-a1fb3bad2b72/2025_IEHC_172.pdf/pdf"
  }
},
{
  "name": "Hamdon v. National Insurance Institute, TA 10743-12-24 (Jerusalem Dist. Ct. Dec 12 2024)",
  "court": "Jerusalem District Court, Israel",
  "state": "Israel",
  "filer": "Lawyer",
  "judge": "Judge Raphael Saharai",
  "date": "2024-12-12",
  "outcome": "Petition dismissed; ₪1,000 costs",
  "outcomeClass": "costs",
  "desc": "Bankruptcy petition cited ten non-existent Israeli precedents.  Court dismissed the case and ordered counsel to pay ₪1,000 for procedural abuse.",
  "links": {
    "Decision": "https://www.law.co.il/media/computer-law/hamdan.pdf"
  }
},
{
  "name": "Strike 3 Holdings LLC v. Doe, No. 2:24-CV-8183-TJH (SPX) (C.D. Cal. Jan 22 2025)",
  "court": "C.D. Cal., USA",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "Mag. Judge Sheri Pym",
  "date": "2025-01-22",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Early-discovery motion relied on three wholly fictitious cases.  Court denied relief and reiterated that AI does not lighten counsel’s duty of reasonable inquiry.",
  "links": {
    "Order": "https://websitedc.s3.amazonaws.com/documents/Strike_3_Holdings_LLC_v_Doe_C.D._California_January_22_2025.pdf"
  }
},
{
"name": "Gonzalez-Ayala v. United States, 3:05-cv-01291, (D.P.R. Dec 02, 2009) ECF No. 8",
"court": "D.P.R., USA",
"state": "PR",
"filer": "Pro se",
"judge": "District Judge David C. Norton",
"date": "2009-12-02",
"outcome": "Warning only",
"outcomeClass": "warning",
"desc": "Petitioner cited a non-existent case, given the date, it is unlikely that it was generated by AI.  The court largely ignored the citation.",
"links": {
  "Order": "https://www.courtlistener.com/docket/5342922/8/gonzalez-ayala-v-united-states/"
}
},
{
  "name": "United States v. Burke, No. 8:24-cr-00068 (M.D. Fla. May 20 2025)",
  "court": "M.D. Fla., USA",
  "state": "FL",
  "filer": "Lawyer",
  "judge": "District Judge Kathryn Kimball Mizelle",
  "date": "2025-05-20",
  "outcome": "Motion stricken; written explanation ordered; warning",
  "outcomeClass": "warning",
  "ai_tools_used": ["Westlaw's AI tools", "ChatGPT 4.5"],
  "desc": "A motion to dismiss in the Tim Burke ‘Fox News videos’ prosecution quoted **nine nonexistent passages and mis-stated multiple precedents** produced with Westlaw’s AI tools and ChatGPT 4.5.  Judge Mizelle struck the filing from the docket, required counsel to file a supplementary explanation detailing how the errors occurred.",
  "links": {
    "Coverage (Tampa Bay Times)": "https://www.tampabay.com/news/crime/2025/05/20/tim-burke-fox-news-tampa-lawyers-ai-artificial-intelligence/",
    "Coverage (Law360)": "https://www.law360.com/pulse/small-law/articles/2342825",
    "Filing Containing Hallucinated Citations": "https://www.courtlistener.com/docket/68273753/124/united-states-v-burke/",
    "Order" : "https://www.courtlistener.com/docket/68273753/124/united-states-v-burke/",
    "Supplemental Explanation" : "https://storage.courtlistener.com/recap/gov.uscourts.flmd.424437/gov.uscourts.flmd.424437.126.0.pdf"
  }
},
{
  "name": "Gakuba v. Hollywood Video LLC, No. 2:15-cv-00630-MCE-AC (E.D. Cal. Apr. 6 2015)",
  "court": "E.D. Cal., USA",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "Mag. Judge Allison Claire (screening order for Dist. Judge Morrison C. England, Jr.)",
  "date": "2015-04-06",
  "outcome": "No action",
  "outcomeClass": "warning",
  "desc": "In a pre-ChatGPT case, this order writes in a footnote that Plaintiff’s complaint “cites a number of cases using incorrect or **non-existent case numbers**, including ‘Gakuba v. Johnson, 14-1080,’ ‘Gakuba v. Karner … 14-1150,’ and ‘Gakuba v. Kapala, 14-2985.’” But did not intervene with sanctions.",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.caed.279269/gov.uscourts.caed.279269.6.0.pdf"
  }
},
{
  "name": "Mahala Association v. Clalit Health Services et al., Class Action Motion No. 30537-11-24 (Tel-Aviv-Jaffa Dist. Ct. May 26 2025)",
  "court": "Tel-Aviv-Jaffa District Court, Israel",
  "state": "Israel",
  "filer": "Lawyer",
  "judge": "Judge Ilan Daphdi",
  "date": "2025-05-26",
  "outcome": "Motion dismissed; counsel declared unfit; applicant ordered to pay NIS 40,000 costs and counsel personally NIS 10,000",
  "ai_tools_used": ["Takdin-AI"],
  "outcomeClass": "dismissed-sanction",
  "desc": "The Court found that the applicant repeatedly violated page-limit orders and relied on fabricated judicial citations generated by an AI tool. Treating this as an abuse of process, it struck the third-amended certification motion, barred advocate from acting as class counsel, and imposed substantial costs on the applicant and personal costs on counsel.",
  "links": {
    "Opinion": "/opinion_pdfs/Mahala_Association_v._Clalit_Health_Services_et_al._Israel_May_22_2025.pdf"
  }
},
{
  "name": "Holtz v. Brnovich, No. CV-17-02562-PHX-JAT (D. Ariz. Apr. 14 2020)",
  "court": "D. Ariz., USA",
  "state": "AZ",
  "filer": "Pro se",
  "judge": "Senior District Judge James A. Teilborg",
  "date": "2020-04-14",
  "outcome": "No action",
  "outcomeClass": "dismissal",
  "desc": "In pre-ChatGPT recommendation to deny habeas relief, the Court noted without action that \" Petitioner objects to any use of the presentence report. (Doc. 60 at 4 (citing a seemingly non-existent case)).\"",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.azd.1046468/gov.uscourts.azd.1046468.72.0.pdf"
  }
},
{
  "name": "Martin v. Taylor County, No. 1:23-cv-00052-H-BU (N.D. Tex. Mar. 6 2024)",
  "court": "N.D. Tex., USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Dist. Judge James Wesley Hendrix (adopting Mag. Judge John R. Parker)",
  "date": "2024-03-06",
  "outcome": "Case dismissed with prejudice; leave to amend denied",
  "outcomeClass": "dismissal",
  "desc": "Adopting the magistrate’s FCR, the Court dismissed all claims, describing them as “patently deficient” and rooted in a “seriously flawed understanding of child-support laws.” It noted that the pro se litigant cited a “non-existent passage from a Supreme Court case” and warned that such fictitious citations “might potentially warrant sanctions” under Rule 11, although none were imposed in light of the dismissal and pro se status of the litigant.",
  "links": {
    "Opinion": "https://websitedc.s3.amazonaws.com/documents/Martin_v._Taylor_County_N.D._Texas_USA_March_6_2024.pdf"
  }
},
{
  "name": "Holtz v. Brnovich, No. CV-17-02562-PHX-JAT (D. Ariz. Apr. 14 2020)",
  "court": "D. Ariz., USA",
  "state": "AZ",
  "filer": "Pro se prisoner",
  "judge": "Senior District Judge James A. Teilborg",
  "date": "2020-04-14",
  "outcome": "Habeas petition denied; case dismissed with prejudice",
  "outcomeClass": "dismissal",
  "desc": "In adopting the magistrate judge’s recommendation to deny habeas relief, the Court noted that Holtz relied on authority that “does not exist in any reporter,” citing his brief at Doc. 60 p. 4 as an example of a **non-existent case citation**.  Although the erroneous citation did not alone warrant sanctions, the Court cautioned that any future filings must adhere to Rule 11 and refrain from fabricating authority.",
  "links": {
    "Opinion": "https://cases.justia.com/federal/district-courts/arizona/azdce/2:2017cv02562/1046468/82/0.pdf"
  }
},
{
  "name": "Florence v. Board of Chosen Freeholders of the County of Burlington, 1:05-cv-03619, (D.N.J. Feb 04, 2009) ECF No. 161",
  "court": "D.N.J., USA",
  "state": "NJ",
  "filer": "Lawyer",
  "judge": "District Joseph H. Rodriguez",
  "date": "2009-02-04",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "In a pre-AI case, Defendants cite non-existent case. Judge largely ignores it. \"Defendants also rely on a case called Gerber v. City of Burlington. Defendants contend that the district court there upheld a search procedure similar to the one here. (Def. Br. p. 4.) For whatever reason, however, an opinion in that case does not exist. Plaintiffs’ counsel certifies that the case resulted in “a summary order disposing of a defendant that resulted not on the merits but because opposition was never filed.” (Pl. Opp’n Br. p.2.) Plaintiff subsequently contends that Defendants’ reliance on the case is “patently false” and done in “bad faith”. Plaintiff asks for an Order of Contempt, along with reasonable expenses and attorney’s fees “incurred as a result of their false filing”, pursuant to Federal Rule of Civil Procedure 56 (g). While Defendants’ apparent reliance on a non-existent case is troublesome, this request must be denied. Defendants’ submitted affidavits, (see Aff. of Def. Counsel, filed September 25, 2008), coupled with the statements on the record during oral argument, (see Oral Arg. Tr. at 40:15-25, 41:1-17, Nov. 10, 2008), sufficiently show that Defendants’ reliance was not done in bad faith.\"",
  "links": {
    "Order": "https://www.courtlistener.com/docket/4308863/161/florence-v-board-of-chosen-freeholders-of-the-county-of-burlington/"
  }
},
{
  "name": "Bunker v. McCormick, No. 2:24-cv-01491-PHX-DWL (D. Ariz. Jan. 14 2025)",
  "court": "D. Ariz., USA",
  "state": "AZ",
  "filer": "Pro se",
  "judge": "District Judge Dominic W. Lanza",
  "date": "2025-01-14",
  "outcome": "Dismissal without leave to amend",
  "outcomeClass": "dismissal",
  "desc": "In a 16-page order the Court dismissed the case for lack of personal jurisdiction and other threshold defects. Footnote 1 highlights that Plaintiffs’ jurisdiction theory relied on a decision the Court states \"does not appear to exist.\" The Court concluded that the plethora of issues here, potentially including citing such non-existent authority, demonstrated bad-faith litigation tactics warranting dismissal without leave to amend.",
  "links": {
    "Opinion": "https://www.govinfo.gov/content/pkg/USCOURTS-azd-2_24-cv-01491/pdf/USCOURTS-azd-2_24-cv-01491-1.pdf"
  }
},
  /* 1 ― Utah Court of Appeals monetary sanction */
  {
    "name": "Garner v. Kadince, Inc., 2025 UT App 80 (Utah Ct. App. May 22 2025)",
    "court": "Utah Court of Appeals, USA",
    "state": "UT",
    "filer": "Lawyer",
    "judge": "Presiding Judge Mortensen",
    "date": "2025-05-22",
    "outcome": "$1,000 donation to \"and Justice for all\"; attorneys fees and refund of fees",
    "outcomeClass": "sanction",
    "ai_tools_used": ["ChatGPT 4.5"],
    "desc": "Petition for permission to appeal included references to nonexistent opinions.  The court struck the brief, ordered a $1,000 charitable payment, refund of fees to client, and to pay attorneys fees to opposing counsel for time spent on the hallucinated citations.",
    "links": {
      "Order": "https://cases.justia.com/utah/court-of-appeals-published/2025-20250188-ca.pdf"
    }
  },


  /* 3 ― South-Carolina Administrative Law Court (warning) */
  {
    "name": "Bischoff v. S.C. Dep’t of Education, Docket 23-ALJ-30-0123 (S.C. ALC Apr 10 2025)",
    "court": "S.C. Administrative Law Court, USA",
    "state": "SC",
    "filer": "Pro se",
    "judge": "Chief Judge Ralph K. Anderson III",
    "date": "2025-04-10",
    "outcome": "Warning only",
    "outcomeClass": "warning",
    "desc": "\"It is likely that Appellant employed argument generated by an artificial intelligence (AI) program which contained the fictitious case citation and cautions Appellant that many harms flow from the use of non-existent case citations and fake legal authority generated by AI programs, including but not limited to the waste of judicial resources and time and waste of resources and time of the opposing party. Were courts to unknowingly rely upon fictitious citations, citizens and future litigants might question the validity of court decisions and the reputation of judges. If, alternatively, Appellant’s use of a fictitious case was not the result of using an AI program, but was instead a conscious act of the Appellant, Appellant’s action could be deemed a fraud on the Court. Appellant is hereby expressly warned that submission of fictitious case authorities may subject Appellant to sanctions under the S.C. Frivolous Proceedings Act, S.C. Code Ann. ⸹ 15-36-10(Supp. 2024).\"",
    "links": {
      "Order": "/opinion_pdfs/2025-04-10_Bischoff_v_SCDE_order.pdf",
      "Coverage": "https://sclawyersweekly.com/news/2025/04/18/generative-ai-use-it-but-do-so-with-utmost-care/"
    }
  },
  /* —— NEW ENTRY —— */
{
  "name": "Ehrlich v. Israel National Academy of Sciences et al., HCJ 37942/05-25 (Isr. Sup. Ct. May 18 2025)",
  "court": "High Court of Justice (Israel Supreme Court), Israel",
  "state": "Israel",
  "filer": "Pro se",
  "judge": "Dep.-President Justice Noam Sohlberg (single-justice motion)",
  "date": "2025-05-18",
  "outcome": "₪500 costs",
  "outcomeClass": "costs",
  "desc": "A self-represented petitioner asked the Court to force the Academy to let him lecture at its AI-conference. His filing cited numerous ‘judgments’ that do not exist—classic generative-AI hallucinations.  Justice Sohlberg dismissed the petition, warned that litigants remain responsible for verifying AI output, and ordered the petitioner to pay ₪500 in costs.",
  "links": {
    "Decision (PDF)": "https://websitedc.s3.amazonaws.com/documents/Ehrlich_v._Israel_National_Academy_of_Sciences_et_al_Israel_May_18_2025.pdf"
  }
},
/* —— END NEW ENTRY —— */
/* —— NEW ENTRIES  (add after the last item in your array) —— */
{
  "name": "Puerto Rico Soccer League NFP v. Federación Puertorriqueña de Fútbol, No. 3:23-cv-01203 (D.P.R. Apr. 10 2025)",
  "court": "U.S. Dist. Ct. – D. P.R., USA",
  "state": "PR",
  "filer": "Lawyer",
  "judge": "Judge Raúl M. Arias-Marxuach",
  "date": "2025-04-10",
  "outcome": "No action",
  "outcomeClass": "pending",
  "desc": "The Court notes that Plaintiffs’ Response in Opposition relied heavily on (a) citations to cases that were nonexistent; to quotes that were not in the body of the case cited, or that were otherwise inaccurate. Nevertheless, the Court reviews Defendants’ Motion on the merits.",
  "links": {
    "Opinion" : "https://cases.justia.com/federal/district-courts/puerto-rico/prdce/3:2023cv01203/176710/207/0.pdf?ts=1744372656"   /*  */
  }
},
{
  "name": "Crespo v. Pabón-Charneco, No. 3:25-cv-01016-JAW, 2025 WL 1384446 (D.P.R. Mar. 17 2025)",
  "court": "U.S. District Court, D. P.R., USA",
  "state": "PR",
  "filer": "Pro se",
  "judge": "District Judge John A. Woodcock Jr.",
  "date": "2025-03-17",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "“His eight-page motion for reconsideration contains numerous citation errors and fabricated quotations… The Court strongly suspects that Mr. Crespo’s motion… was authored not by him but by some type of Artificial Intelligence (AI) platform. … Mr. Crespo has wasted the Court’s time by requiring it to check his false and misleading citations...The Court warns Mr. Crespo that such filing restrictions may be in the offing if he continues to file such erroneous and misleading documents with the Court. In the context of his motion for reconsideration, the Court reiterates that it finds wholly unconvincing a submission riddled with such egregious errors.”",
  "links": {
    "Opinion": "https://www.casemine.com/judgement/us/67da4853bc5f3e372e36bbda"
  }
},
{
  "name": "Jones v. Simploy, Inc., 698 S.W.3d 480 (Mo. Ct. App. E.D. Sept. 24 2024)",
  "court": "Missouri Court of Appeals, Eastern District, USA",
  "state": "MO",
  "filer": "Pro se",
  "judge": "Judge Kelly C. Broniec (panel)",
  "date": "2024-09-24",
  "outcome": "Appeal decided on merits; no sanction, but caution issued",
  "outcomeClass": "warning",
  "desc": "“Particularly concerning is Claimant’s citation to cases that do not exist… Giving Claimant the benefit of the doubt, we suspect such citations were generated by artificial intelligence… Litigants who use generative AI to draft their briefs should not rely on our continued magnanimity.”",
  "links": {
    "Opinion": "https://caselaw.findlaw.com/court/mis-crt-app-eas-dis-div-one/116593661.html"
  }
},
/* —— END NEW ENTRIES —— */
{
  "name": "Re Mr Dayal, Dayal [2024] FedCFamC2F 1166",
  "court": "Federal Circuit and Family Court of Australia (Division 2), Australia",
  "state": "Australia",
  "filer": "Solicitor",
  "judge": "Judge A. Humphreys",
  "date": "2024-08-27",
  "ai_tools_used": ["AI tool within the LEAP Practice Management Software"],
  "outcome": "Referall to Victorian Legal Services Board and Commissioner; warning regarding AI-generated research.",
  "outcomeClass": "warning",
  "desc": "\"solicitor appearing as agent tendered a list and summary of authorities which are acknowledged by the solicitor not to exist\"; \"list and summary generated using software relying on artificial intelligence (AI)\"; \"accuracy of the document produced was not verified by the solicitor\"; \"unconditional apology offered by the solicitor for what is acknowledged to be a breach of the professional standards expected of a solicitor in this court\"; \"referral made to the Office of the Victorian Legal Services Board and Commissioner, being the statutory body and officer responsible for the maintenance of professional standards of solicitors in Victoria\"; \"decision for referral not intended to be punitive\"; \"responsible use of AI tools in litigation an issue of public interest\"",
  "links": {
    "Opinion": "opinion_pdfs/In_Re_Dayal_Australia_August_27_2024.pdf"
  }
},
{
  "name": "N.E.W. Credit Union v. Mehlhorn, No. 2023AP2187 (Wis. Ct. App. Dist. III Aug. 13 2024)",
  "court": "Wisconsin Court of Appeals, Dist. III, USA",
  "state": "WI",
  "filer": "Pro se",
  "judge": "Stark, P.J., Hruz and Gill, JJ. (panel)",
  "date": "2024-08-13",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "“In her brief-in-chief, Mehlhorn provides what appear to be citations to six cases. Based on our research, however, it appears that only one of those cases actually exists... We strongly admonish Mehlhorn for her violations of the Rules of Appellate procedure, and particularly for her citations to what appear to be fictitious cases. Although Mehlhorn is self-represented, pro se appellants “are bound by the same rules that apply to attorneys on appeal.” See Waushara County v. Graf, 166 Wis. 2d 442, 452, 480 N.W.2d 16 (1992). We could summarily dismiss this appeal as a sanction for Mehlhorn’s multiple and egregious rule violations. See WIS. STAT. RULE 809.83(2). Nevertheless, we choose to address the merits of Mehlhorn’s arguments as best as we are able, given the deficiencies in her briefing.",
  "links": {
    "Opinion": "https://www.wicourts.gov/ca/smd/DisplayDocument.pdf?content=pdf&seqNo=837468"
  }
},
{
  "name": "Valu v Minister for Immigration and Multicultural Affairs (No 2) [2025] FedCFamC2G 95",
  "court": "Federal Circuit and Family Court of Australia (Division 2), Australia",
  "state": "Australia",
  "filer": "Lawyer",
  "judge": "Judge Skaros",
  "date": "2025-01-31",
  "outcome": "Referall to Office of the NSW Legal Services Commissioner; no further sanction imposed.",
  "outcomeClass": "warning",
  "desc": "After noting non-existent citations, the \"Court expressed its concern about the ALR’s conduct and his failure to check the accuracy of what had been filed with the Court, noting that a considerable amount time had been spent by the Court and my Associates checking the citations and attempting to find the purported authorities.\"; \"The conduct of the ALR, in filing an application and submissions which contained citations to Federal Court of Australia cases which do not exist and alleged quotes from the Tribunal's decision which do not exist, falls short of the standard of competence and diligence that the applicant in the substantive proceedings was entitled to expect from his legal representative.\"; \" the Court considers it in the public interest to refer the ALR’s conduct to the OLSC and will so direct that the Principal Registrar of this Court to refer the matter accordingly\"",
  "links": {
    "Opinion": "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FedCFamC2G/2025/95.html"
  }
},
{
  "name": "Rasmussen v. Rasmussen, No. 24CV02293 (Cal. Super. Ct. Sonoma Cty. Aug. 23 2024)",
  "court": "Cal. Superior Court, Sonoma County, USA",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "Hon. Christopher M. Honigsberg",
  "date": "2024-08-23",
  "outcome": "Order to show cause",
  "outcomeClass": "pending",
  "desc": "“Defendant has cited to a number of cases for propositions they do not support, and to a number of other cases that simply do not exist at all.”  “The Court does not know where Defendant got these citations, but cannot help noticing their resemblance to the nonexistent case law cited in the well-publicized case Mata v. Avianca… That is exactly the sort of error to which large-language-model artificial intelligence software is prone.”  “Despite the fact that Defendant is representing herself in this matter, she is a licensed attorney.”  Filing such citations “demonstrates a marked lack of integrity” and “violates California Rules of Professional Conduct, rules 3.3(a)(2)… and 8.4(c).”  “Defendant is ordered to appear in person in Department 18 on October 11, 2024 at 8:30 a.m. to show cause why the Court should not impose any or all of the following sanctions… A report to the State Bar for a violation(s) of the Rules of Professional Conduct.”",
  "links": {
    "Tentative Ruling": "https://sonoma.courts.ca.gov/system/files/tentative-rulings/8-23-24-lm.pdf"
  }
},
{
  "name": "Grant v. City of Long Beach, 96 F.4th 1255 (9th Cir. Mar. 22 2024)",
  "court": "U.S. Court of Appeals for the Ninth Circuit, USA",
  "state": "CA-app",
  "filer": "Pro se",
  "judge": "Desai, Thomas & Márquez, JJ. (per opinion by Desai, J.)",
  "date": "2024-03-22",
  "outcome": "Brief struck as sanction; appeal dismissed",
  "outcomeClass": "dismissal",
  "desc": [
    "“Appellants filed an opening brief **replete with misrepresentations and fabricated case law**.”",
    "The brief “**cite[d] two cases that do not appear to exist**.”",
    "Because the brief “**represents a material failure to comply with our rules, we strike the brief in its entirety … and dismiss this appeal.**”"
  ],
  "links": {
    "Opinion": "https://law.justia.com/cases/federal/appellate-courts/ca9/22-56121/22-56121-2024-03-22.html"
  }
},
{
  "name": "Rule v. Braiman, No. 1:23-cv-01218 (N.D.N.Y. Sept. 4 2024)",
  "court": "U.S. District Court, N.D.N.Y., USA",
  "state": "NY",
  "filer": "Pro se",
  "judge": "Chief Judge Brenda K. Sannes",
  "date": "2024-09-04",
  "outcome": "Filing stricken; warning",
  "outcomeClass": "warning",
  "desc": "The Court observed that “**other cases Plaintiff cited in her submissions that the defense counsel or the Court were unable to locate or verify**” included a long list of titles, and cautioned: “The Court notes that **‘ChatGPT and similar AI programs are capable of generating fake case citations and other misstatements of law.’** … **Plaintiff is warned that any future filings ‘with citations to nonexistent cases may result in sanctions, such as her submissions being stricken, filing restrictions or monetary penalties being imposed, or the case being dismissed.’**”",
  "links": {
    "Order": "https://www.casemine.com/judgement/us/66da8554c312b31e38e4d56e"
  }
},
{
  "name": "Anonymous v. N.Y.C. Dep’t of Education, No. 1:24-cv-04232 (S.D.N.Y. July 18 2024)",
  "court": "U.S. District Court, S.D.N.Y., USA",
  "state": "NY",
  "filer": "Pro se",
  "judge": "District Judge Jennifer L. Rochon",
  "date": "2024-07-18",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The Court noted that Plaintiff “cit[es] to and reli[es] on what appears to be non-existent legal authority” and, after searching, was “likewise unable to locate them.”  It stressed that “it is improper and unacceptable for litigants – including pro se litigants – to submit ‘non-existent judicial opinions with fake quotes and citations.’ … Sanctions may be imposed for submitting false and nonexistent legal authority to the Court,” but “declines to sanction Plaintiff at this time and instead warns Plaintiff that the Court will not look kindly on similar infractions in the future.”",
  "links": {
    "Opinion": "https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2024cv04232/622538/36/"
  }
},
{
  "name": "Plumbers & Gasfitters Union Local 75 Health Fund v. Morris Plumbing, LLC, No. 23-cv-616-JPS (E.D. Wis. Apr. 18 2024)",
  "court": "U.S. District Court, E.D. Wisconsin, USA",
  "state": "WI",
  "filer": "Lawyer",
  "judge": "District Judge J. P. Stadtmueller",
  "date": "2024-04-18",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "\"Although it does not ultimately affect the Court’s analysis or disposition, Plaintiffs in their reply cite to a case that none of the Court’s staff were able to locate. . . The citation goes to a case of a different name, from a different year, and from a different circuit. Court staff also could not locate the case by searching, either on Google or in legal databases, the case name provided in conjunction with the purported publication year. If this is, as the Court suspects, an instance of provision of falsified case authority derived from artificial intelligence, Plaintiffs’ counsel is on notice that any future instance of the presentation of nonexistent case authority will result in sanctions.\"",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.wied.103652/gov.uscourts.wied.103652.33.0.pdf",
    "Coverage": "https://evan.law/2024/04/22/footnote-in-opinion-warns-counsel-not-to-cite-ai-generated-fake-cases-again/"
  }
}, 
{
  "name": "Dowlah v. Professional Staff Congress CUNY, 2024 NY Slip Op 02980 (App. Div. 1st Dep’t May 30 2024)",
  "court": "N.Y. Appellate Division, First Department, USA",
  "state": "NY",
  "filer": "Pro se",
  "judge": "Moulton, J.P.; Scarpulla, Shulman, Higgitt & O’Neill Levy, JJ.",
  "date": "2024-05-30",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The Court wrote: “**Plaintiff cites several nonexistent cases in his initial memorandum of law. In his reply brief he acknowledges that these citations were the result of research using ‘legal software applications’ that deploy artificial intelligence.**”  He “**apologizes for the fictitious precedents. We caution plaintiff that his pro se status does not excuse his failure to check the legal citations that he offers to a court.**”",
  "links": {
    "Opinion": "https://law.justia.com/cases/new-york/appellate-division-first-department/2024/index-no-151561-22-appeal-no-2412-case-no-2023-06121.html"
  }
},

{
  "name": "Lillard v. Offit Kurman, P.A., 2025 WL 800833 (Del. Super. Ct. Mar. 12 2025)",
  "court": "Delaware Superior Court (New Castle Cty.), USA",
  "state": "DE",
  "filer": "Pro se",
  "judge": "Judge Danielle J. Brennan",
  "date": "2025-03-12",
  "outcome": "Certification order; warnings re future sanctions",
  "outcomeClass": "warning",
  "desc": "• “Going forward, **any filing in this case by either party must contain a certification page if Generative Artificial Intelligence was used** in the creation of said filing.”\n• The court’s review “**revealed a number of mis-cited and incorrect cases** cited in Plaintiff’s papers,” including quotes the court “**cannot find**.”\n• “While one example was given on the record to Plaintiff, **the following additional issues were found by the Court**:” followed by three bullet-pointed nonexistent or misquoted authorities.\n• “The Court’s review of the filings in this case **revealed a number of mis-cited and incorrect cases** … Plaintiff acknowledged that **Generative AI was used** in preparation of his legal filings.”\n• “The Motion to Dismiss is **DENIED WITHOUT PREJUDICE** … The petitioner should consider himself **warned**.”",
  "links": {
    "Order": "https://law.justia.com/cases/delaware/superior-court/2025/n24c-10-001-djb.html"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Evans v. Robertson, No. 2:24-cv-13435 (E.D. Mich. May 21 2025)",
  "court": "U.S. District Court, E.D. Mich., USA",
  "state": "MI",
  "filer": "Pro se",
  "judge": "District Judge Judith E. Levy",
  "date": "2025-05-21",
  "outcome": "Filings stricken; warning",
  "outcomeClass": "warning",
  "desc": "“Doe’s objections will be stricken...” “Doe’s objections cite to nonexistent, seemingly AI-generated authority.” “This non-existent case has ‘the hallmarks of cases generated by AI found in other courts.’.... The Court warns Doe, **and all other litigants, that they may be subject to sanctions if they violate Rule 11, including by citing nonexistent cases.” Court order requires any corrected filing to include “a certification that he has checked all citations and ensured that the content is correct.”",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.mied.372289/gov.uscourts.mied.372289.58.0.pdf"
  }
},
{
  "name": "Ruggirello v. Lancaster, No. 4:22-cv-12010-SDK-EAS (E.D. Mich. Sept. 11 2023)",
  "court": "U.S. District Court, E.D. Michigan, USA",
  "state": "MI",
  "filer": "Pro se",
  "judge": "District Judge Nancy G. Edmunds",
  "date": "2023-09-11",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "\"Lancaster cites “Bazzi v. Sentinel Ins. Co., 961 F.3d 734 (6th Cir. 2020),” which appears to be a mutant citation blending the case name of an existing Michigan state-court case (Bazzi v. Sentinel Ins. Co., 919 N.W.2d 20 (Mich. 2018)) with the reporter citation to an existing Fifth Circuit case (Hewlett-Packard Co. v. Quanta Storage, Inc., 961 F.3d 731, 734 (5th Cir. 2020)). ECF No. 15, PageID.244. Lancaster similarly cites two other cases which do not exist; as a result, the majority of the cases cited in his objections are nonexistent. See id. at PageID.242, 244 (citing “Maldonado v. Ford Motor Co., 720 F.3d 760 (5th Cir. 2013)” and “Malliaras & Poulos, P.C. v. City of Center Line, 788 F.3d 876 (6th Cir. 2015)”). These and other fabrications within Lancaster’s objections may be from Lancaster’s imagination, a generative artificial-intelligence tool’s hallucination, both, or something else entirely. The Court need not speculate. At bottom, Lancaster wasted the Court’s and plaintiff’s time and resources, as well as his chance to bring legitimate objections. Although he is pro se, the Court warns Lancaster that conduct such as citing made-up law may result in significant sanctions imposed by either this Court, or upon remand, another court observing the same conduct.\"",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.mied.364169/gov.uscourts.mied.364169.25.0.pdf"
  }
},
{
  "name": "In the Matter of Anthony Matos, Proceeding No. D2025-13 (USPTO March 6, 2025)",
  "court": "U.S. Patent & Trademark Office, Office of Enrollment & Discipline, USA",
  "state": "USA",
  "filer": "Lawyer",
  "judge": "",
  "date": "2025-03-06",
  "outcome": "Public reprimand; two CLEs on AI",
  "outcomeClass": "sanction",
  "desc": "TTAB found seven instances where respondent “*improperly cited cases in a brief*,” including “*three purported TTAB decisions **which did not exist***.” OED issued a public reprimand and required two CLEs on AI as sanctions.",
  "links": {
    "Final Order": "https://www.uspto.gov/sites/default/files/documents/STEPPETHICSAPR2025.pdf#page=21"
  }
},

{
  "name": "Nexgen Pathology Services Ltd v. Darceuil Duncan, CV2023-04039 (High Ct. TT Apr. 30 2025)",
  "court": "High Court of Justice, Republic of Trinidad & Tobago",
  "state": "Trinidad & Tobago",
  "filer": "Lawyer",
  "judge": "Justice Westmin R. A. James",
  "date": "2025-04-30",
  "outcome": "Referred to the Disciplinary Committee of the Law Association",
  "outcomeClass": "referral",
  "desc": "“The Court is compelled to address a matter of grave concern arising from the Claimant’s written submissions—specifically, the citation of non-existent legal authorities …”  “Legitimate court judgments do not simply disappear from online repositories without a trace.”  “Irresponsible use of internet sources or generative AI tools undermines not only individual cases but also the credibility of the legal system as a whole.”  “Accordingly … the Court … directs the Registrar … to refer the matter to the Disciplinary Committee … for investigation as to whether there has been a breach of the Code of Ethics.”",
  "links": {
    "Judgment": "https://webopac.ttlawcourts.org/LibraryJud/Judgments/HC/james/2023/cv_23_04039DD30Apr2025.pdf"
  }
},
{
  "name": "Willis v. U.S. Bank Nat’l Ass’n (Trustee), No. 3:25-cv-00516-BN (N.D. Tex. Apr. 28 2025)",
  "court": "N.D. Tex. (Dallas Div.), USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Magistrate Judge David L. Horan",
  "date": "2025-04-28",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The Court explains that “there are sound reasons for requiring this disclosure, including that ‘[i]t is no secret that generative AI programs are known to “hallucinate” nonexistent cases, and … both counsel and pro se litigants have cited such fake, hallucinated cases in their briefs.’ … The citation contains hallmarks of a nonexistent case generated by AI,” and “a litigant’s using AI and then failing to verify the accuracy of the results it yields violates the litigant’s Federal Rule … 11 obligations.” Nonetheless court chooses to warn.",
  "links": {
    "Order": "https://law.justia.com/cases/federal/district-courts/texas/txndce/3:2025cv00516/400650/42/"
  }
},
{
  "name": "Rochon-Eidsvig & Hafer v. JGB Collateral, LLC, No. 05-24-00123-CV (Tex. App.—Dallas Apr. 10 2025)",
  "court": "Court of Appeals, Fifth District of Texas, USA",
  "state": "TX",
  "filer": "Lawyer",
  "judge": "Presiding Justice Nancy Kennedy",
  "date": "2025-04-10",
  "outcome": "Order to supply copies of missing cases; possible further action",
  "outcomeClass": "warning",
  "desc": "The order notes: “After reviewing the parties’ briefs, we note that Appellants’ May 16, 2024 Brief cites the following cases, none of which could be located by Appellee or this Court.” It then directs counsel to file copies of the four phantom authorities and cure other rule defects within ten days, signaling that sanctions may follow if the cases cannot be produced. ",
  "links": {
    "Order": "https://600commerce.com/wp-content/uploads/2025/04/0D5.pdf",
    "Leagle": "https://www.leagle.com/decision/intxco20250411577"
  }
},
{
  "name": "In re Tariq Farooq, No. 05-25-00431-CV (Tex. App.—Dallas Apr. 16 2025)",
  "court": "Court of Appeals, Fifth District of Texas, USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Justices Garcia, Clinton & Rossini",
  "date": "2025-04-16",
  "outcome": "Filing stricken; dismissal",
  "outcomeClass": "warning",
  "desc": "The panel writes: “After reviewing the relator’s brief, we note that it cites the following cases, none of which could be located by this Court.” Order requires relator to file copies within ten days. In response relator admitted that the cases did not exist and he cited them in error. Court strike the petition of writ of mandamus, dismissing the case.",
  "links": {
    "Order to file copies of missing cases": "https://www.casemine.com/judgement/us/68118697b71a0cd10129f3f1",
    "Order" : "https://law.justia.com/cases/texas/fifth-court-of-appeals/2025/05-25-00431-cv.html"
  }
},
{
  "name": "Letts v. Avidien Technologies, Inc., No. 5:24-cv-00402-M-BM (E.D.N.C. Dec. 16 2024)",
  "court": "E.D.N.C., USA",
  "state": "NC",
  "filer": "Pro se",
  "judge": "Mag. Judge Brian S. Meyers (M&R)",
  "date": "2024-12-16",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "After plaintiff cited three opinions the court could not locate, the M&R noted “**an apparent increased use of artificial-intelligence technologies has given rise to citations to non-existent cases** … Many harms flow from such deception.” It warned that future false cites could trigger Rule 11 sanctions.",
  "links": {
    "Opinion": "https://websitedc.s3.amazonaws.com/documents/Letts_v._Avidien_Technologies_E.D._North_Carolina_USA_December_16_2025.pdf"
  }
},
{
  "name": "Jones v. Experian Information Solutions, Inc., 1:25-cv-01535 (S.D.N.Y. Mar. 26 2025)",
  "court": "S.D.N.Y., USA",
  "state": "NY",
  "filer": "Lawyer",
  "judge": "Mag. Judge Sarah L. Cave",
  "date": "2025-03-26",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "\"In support of his criticisms, Mr. Jones cites one non-xistent case,4 erroneously cites another non-precedential case from outside the Second Circuit,5 and cites a third that is irrelevant... Mr. Jones' counsel should thus consider themselves reminded of their obligations under Federal Rule of Civil Procedure 11(b) and warned that the Court will not countenance in the future any motions or other tactics that contravene the need “to secure the just, speedy, and inexpensive determination” of this action.\"",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.637416/gov.uscourts.nysd.637416.24.0.pdf"
  }
},
{
  "name": "Leslie v. IQ Data International, Inc., No. 1:22-cv-02304-VMC (N.D. Ga. June 5 2024)",
  "court": "N.D. Ga., USA",
  "state": "GA",
  "filer": "Pro se",
  "judge": "Mag. Judge Russell G. Vineyard (R&R)",
  "date": "2024-06-05",
  "outcome": "Dismissal with prejudice as sanction",
  "outcomeClass": "dismissal",
  "desc": "The Court has already ordered Plaintiff to produce these documents 3 times over 13 months. . . And instead of complying with this Court's orders and producing the documents, Plaintiff has resorted to citing nonexistent authority. As Defendant states, “Enough is enough.” (Doc. 83 at 4). Defendant's motion for sanctions should be GRANTED and this case should be DISMISSED WITH PREJUDICE. Given the recommendation for the most drastic sanction of all—dismissal with prejudice—the undersigned declines to also recommend monetary sanctions. While a court may order the payment of the opposing side's expenses in addition to dismissal, the undersigned finds that Plaintiff's circumstances—as noted during the undersigned's most recent teleconference—would make an award of expenses unjust.",
  "links": {
    "R&R": "/opinion_pdfs/Leslie_EQ_decision.pdf"
  }
},
{
  "name": "Gutierrez v. Gutierrez, Nos. 3D24-1014 & 3D24-1087 (Fla. 3d DCA Dec. 4 2024)",
  "court": "Fla. 3d DCA, USA",
  "state": "FL",
  "filer": "Pro se",
  "judge": "Judge Fleur J. Lobree (panel: Lobree, Bokor & Gooden)",
  "date": "2024-12-04",
  "outcome": "Dismissed with prejudice as sanction; barred from future pro se filings related to underlying probate issues",
  "outcomeClass": "sanction",
  "desc": "“Alarmingly, the bulk of the cases cited by Gutierrez do not in fact exist in the body of Florida case law, and therefore constitute fake or ‘phantom case law.’ … We find Gutierrez’s failure to comply with rule 9.210(b) and submission of fictitious case law to this court sufficient to warrant the imposition of sanctions.”",
  "links": {
    "Opinion": "https://cases.justia.com/florida/third-district-court-of-appeal/2024-3d24-1087.pdf?ts=1733329128"
  }
},
{
  "name": "Luther v. Oklahoma Department of Human Services, No. 5:25-cv-00317-J (W.D. Okla. May 23 2025)",
  "court": "W.D. Okla., USA",
  "state": "OK",
  "filer": "Pro se",
  "judge": "Mag. Judge Chris M. Stephens (referral from Dist. Judge Bernard M. Jones)",
  "date": "2025-05-23",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The Court has serious reason to believe that Plaintiff used artificial intelligence tools to assist in drafting her objection. While the use of such tools is not prohibited, artificial intelligence often cites to legal authorities, like Cabrera, that do not exist. Continuing to cite to non-existent cases will result in sanctions up to and including dismissal.”",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.okwd.130468/gov.uscourts.okwd.130468.11.0.pdf"
  }
},
{
  "name": "Robinson v. JPMorgan Chase Bank, N.A., No. 4:24-cv-00170 (N.D. Fla. Apr. 16 2024)",
  "court": "N.D. Fla., USA",
  "state": "FL",
  "filer": "Pro se",
  "judge": "Mag. Judge Martin A. Fitzpatrick (referral from Dist. Judge Allen C. Winsor)",
  "date": "2024-04-16",
  "outcome": "Arguments rejected as erroneous",
  "outcomeClass": "warning",
  "desc": "“Today, the Clerk's Office has notified the Court that the pro se Plaintiff has submitted five documents... which had not yet been entered on the docket when the Court reviewed the notice of removal... and Plaintiff's notice... which sought to refute Defendant's contention that there was complete diversity of citizenship and the amount in controversy... Plaintiff's arguments made in that filing were rejected as erroneous because he cited to non-existent cases and orders.”",
  "links": {
    "Opinion": "/opinion_pdfs/Robinson_JP_Bank_decision.pdf"
  }
},
{
  "name": "Salyer v. Salyer, No. 2024-CA-0623-MR (Ky. Ct. App. Mar. 28 2025)",
  "court": "Ky. Ct. App., USA",
  "state": "KY",
  "filer": "Counsel",
  "judge": "Judge Donna L. Cetrulo (panel: Caldwell, Cetrulo & A. Jones)",
  "date": "2025-03-28",
  "outcome": "Appeal affirmed; show-cause warning issued",
  "outcomeClass": "warning",
  "desc": "“Clinton’s legal counsel appeared to cite **two non-existent cases**... This Court issued a show-cause order** suspecting that artificial intelligence was used to obtain case citations that do not exist... counsel’s response did not fully alleviate our serious concerns. Furthermore, we have previously warned this counsel that failure to follow briefing requirements could result in sanctions in future appeals... As we stated in 2020, we have “grown weary” of the increasing number of attorneys failing to follow the rules of appellate procedure. Clark v. Workman, 604 S.W.3d 616 (Ky. App. 2020). Nonetheless, we have elected to proceed with this decision without further delay in light of the many failures and delay already evident in this case. The appellee’s motion to amend the brief, to which appellant objected, is denied by this Order”",
  "links": {
    "Opinion": "https://cases.justia.com/kentucky/court-of-appeals/2025-2024-ca-0623-mr.pdf?ts=1743170812"
  }
},
{
  "name": "Devaughn v. McDonell, No. 5:15-cv-00577-TJH (C.D. Cal. Sept. 26 2017)",
  "court": "C.D. Cal., USA",
  "state": "CA",
  "filer": "Pro se",
  "judge": "Mag. Judge Gail J. Standish (R&R), adopted by Dist. Judge Terry J. Hatter Jr.",
  "date": "2017-09-26",
  "outcome": "No action",
  "outcomeClass": "dismissal",
  "desc": "In recommending dismissal for a pre-ChatGPT case, the magistrate judge wrote of a habeas petitioner that, \"**Petitioner cites a non-existent case** (Motion at 22, citing *People v. Rhodes* (1972) 6 Cal. ___).\"",
  "links": {
    "Order (Westlaw)": "https://www.westlaw.com/Document/I55012890c47011e7bf23e096364180a5/View/FullText.html?transitionType=Default&contextData=(sc.Default)&VR=3.0&RS=cblt1.0"
  }
},
{
  "name": "Lee v. Delta Air Lines, Inc., No. 2:20-cv-01705-WFK-LGD (E.D.N.Y. Mar. 22 2024)",
  "court": "E.D.N.Y., USA",
  "state": "NY",
  "filer": "Pro se",
  "judge": "District Judge William F. Kuntz II (magistrate referral to Judge Lee G. Dunst)",
  "date": "2024-03-22",
  "outcome": "No action",
  "outcomeClass": "dismissal",
  "desc": "The Court wrote: “The Court maintains serious concern that at least one of Plaintiff’s cited cases is non-existent and may have been a hallucinated product of generative artificial intelligence, particularly given Plaintiff’s recent history of similar conduct before the Second Circuit.” (Pro se plaintiff here is the attorney in Park v. Kim which also contained hallucinated citations leading to disciplinary proceedings.) The Court nevertheless resolved the merits and dismissed the action, taking no explicit action on the issue of the phantom citation.",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.nyed.447025/gov.uscourts.nyed.447025.79.0.pdf"
  }
},
{
  "name": "Black & Veatch Corp. v. Modesto Irrigation District, No. 1:11-cv-00695-LJO-SKO (E.D. Cal. Oct. 28 2011)",
  "court": "E.D. Cal., USA",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "Chief U.S. District Judge Lawrence J. O’Neill",
  "date": "2011-10-28",
  "outcome": "No action",
  "outcomeClass": "warning",
  "desc": "In a pre-ChatGPT era case, the Court observed: “BBC erroneously cites a non-existent case for this proposition.”   The Court’s own research uncovered no authority standing for the rule advanced.",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.caed.223086/gov.uscourts.caed.223086.58.0.pdf"
  }
},
{
  "name": "Chapman v. Horace Mann Property and Casualty Insurance Company, No. 2:24-cv-10546 (C.D. Cal. Apr. 23 2025)",
  "court": "C.D. Cal., USA",
  "state": "CA",
  "filer": "Pro se",
  "judge": "District Judge Michael W. Fitzgerald",
  "date": "2025-04-23",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "\"Defendant took issue with the untimeliness of the filings and Plaintiff’s distortion of and citation to nonexistent case law…\" \"Plaintiff is warned... that any future non-compliance with the Local Rules or this Court’s procedures may not be similarly entertained.\"",
  "links": {
    "Opinion": "https://cases.justia.com/federal/district-courts/california/cacdce/2%3A2024cv10546/950604/40/0.pdf"
  }
},
{
  "name": "Gropp v. Stevens, No. 58983-4-II (Wash. Ct. App. Div. II Apr. 22 2025)",
  "court": "Wash. Ct. App. Div. II, USA",
  "state": "WA",
  "filer": "Pro se",
  "judge": "Judge Glasgow (panel: Glasgow, Maxa & Veljacic)",
  "date": "2025-04-22",
  "outcome": "No action",
  "outcomeClass": "dismissal",
  "desc": "The panel affirmed dismissal on statute-of-limitations grounds, noting: “**She has also cited nonexistent cases in her briefing.** … *We decline to award attorney fees to Stevens.*”",
  "links": {
    "Opinion": "https://cases.justia.com/washington/court-of-appeals-division-ii/2025-58983-4.pdf?ts=1745345570"
  },
  "other_information" : ["Pro se status verified at https://www.courts.wa.gov/appellate_trial_courts/appellatedockets/index.cfm?fa=appellatedockets.showDocket&folder=a02&year=2025&file=20250321"]
},
{
  "name": "Esquivel v. Kendrick, No. 22-50979 (5th Cir. Aug. 29 2023)",
  "court": "5th Cir., USA",
  "state": "LA",
  "filer": "Pro se",
  "judge": "Per Curiam (King, Haynes & Graves, JJ.)",
  "date": "2023-08-29",
  "outcome": "No action",
  "outcomeClass": "warning",
  "desc": "\"The one case cited by Esquivel to support his argument is nonexistent.\"... \"First, citing nonexistent cases, Esquivel argues that the City of San Antonio waived immunity from suit by purchasing liability insurance for its police officers.\" The panel affirmed across the board but highlighted the reliance on phantom authorities—serving as a clear caution that further use of fictitious citations would not be countenanced.",
  "links": {
    "Opinion": "https://www.ca5.uscourts.gov/opinions/unpub/22/22-50979.0.pdf"
  }
},
{
  "name": "Albelbaisi v. Mustang Materials, LLC, No. 05-24-00617-CV (Tex. App.—Dallas May 13 2025)",
  "court": "Tex. App.—Dallas, USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Justice Garcia (panel: Garcia, Breedlove & Jackson)",
  "date": "2025-05-13",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "The court affirmed summary judgment and, addressing briefing defects, observed: “Moreover, citation of nonexistent cases that appear to have been generated by AI is unacceptable. The failure to provide substantive analysis of an issue or cite appropriate authority waives a complaint on appeal... We have liberally construed Albelbaisi’s brief in an effort to address the issues he seeks to raise. To the extent our understanding of Albelbaisi’s presentation of an issue or subpoint is incorrect, it is waived for inadequate briefing.",
  "links": {
    "Opinion": "https://cases.justia.com/texas/fifth-court-of-appeals/2025-05-24-00617-cv.pdf?ts=1747228392"
  }
},
{
  "name": "Grant v. Nationwide Mutual Insurance Company, No. 1:24-cv-00247-DAE (W.D. Tex. Apr. 4 2025)",
  "court": "W.D. Tex., USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Sr. Dist. Judge David A. Ezra (adopting R&R of Mag. Judge Susan Hightower)",
  "date": "2025-04-04",
  "outcome": "Claims dismissed with prejudice; monetary sanctions imposed",
  "outcomeClass": "sanction",
  "desc": "Judge adopted the magistrate judge’s recommendation and “DISMISSES WITH PREJUDICE” all claims under Rules 37(b)(2)(A)(v) and 41(b), ordering Plaintiffs to pay Nationwide’s expenses and attorneys’ fees.  Earlier, the court had warned that the docket was clogged with “*borderline frivolous and/or harassing filings*” and cautioned that “*future frivolous, harassing, or unconsolidated filings will result in sanctions.*” (Dkt. 144, quoted in the order).  The magistrate judge’s R&R also noted that Plaintiffs’ motions were “*replete with citations to nonexistent cases and quotes*.” Though the nonexistent citations were not directly addressed this overall led to dismissal with prejudice of claims.",
  "links": {
    "R&R (WestLaw)": "https://www.westlaw.com/Document/Ifecfc7e01d2911f081f78a83f19781c1/View/FullText.html?transitionType=Default&contextData=(sc.Default)&VR=3.0&RS=cblt1.0",
    "Adopting R&R": "https://cases.justia.com/federal/district-courts/texas/txwdce/1%3A2024cv00247/1172777859/184/0.pdf"
  }
},
{
  "name": "Estrada v. San Francisco Fire Department, 698, No. 4:25-cv-00216-JSW (N.D. Cal. Apr. 18 2025)",
  "court": "N.D. Cal., USA",
  "state": "CA",
  "filer": "Pro se",
  "judge": "District Judge Jeffrey S. White",
  "date": "2025-04-18",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "“First, Plaintiff presents a mixture of real and fake court decisions to the Court.  See, e.g., *Davis v. Chicago Fire Dep’t*, 598 F.3d 325 (7th Cir. 2010) (**non-existent case**); *Johnson v. Alameda Cnty. Fire Dep’t*, 714 F.3d 1091 (9th Cir. 2013) (**same**).  Plaintiff also fabricates quotes from existing cases … Plaintiff cited these same cases in his late-filed opposition. These false citations are misrepresentations to the Court and will not be permitted. The Court warns that it may impose sanctions for misrepresentations, up to and including dismissal of the action with prejudice.\"",
  "links": {
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.cand.442446/gov.uscourts.cand.442446.18.0.pdf"
  }
},
{
  "name": "Idehen v. Stoute-Phillip, Index No. LT-305376-23/QU (N.Y. Civ. Ct. Queens Cty. May 21 2025)",
  "court": "N.Y. City Civ. Ct., Queens Cty., Housing Part O, USA",
  "state": "NY",
  "filer": "Lawyer",
  "judge": "Hon. Kimon C. Thermos, J.H.C.",
  "date": "2025-05-21",
  "outcome": "Order to show cause",
  "outcomeClass": "pending",
  "desc": "“The Court looked up these seven cases on LexisNexis, Westlaw, and the New York State Reporting Bureau … None of the citations provided link to the cases cited,” observing that “Petitioners' counsel cited seven cases that do not appear to exist.”",
  "links": {
    "Opinion": "opinion_pdfs/HAPPINESS-IDEHEN_v_STOUTE-PHILLIP.pdf"
  }
},
{
  "name": "Flowz Digital LLC v. Dalal, No. 2:25-cv-00709-SB-PVC (C.D. Cal. May 5 2025)",
  "court": "U.S. District Court, Central District of California, USA",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "Judge Stanley Blumenfeld, Jr.",
  "date": "2025-05-05",
  "outcome": "Order to show cause",
  "outcomeClass": "pending",
  "desc": "“The Court’s Civil Standing Order requires a party who uses generative artificial intelligence (AI) in drafting any portion of a filing to provide ‘a separate declaration disclosing the use of artificial intelligence and certifying that the filer has reviewed the source material and verified that the artificially generated content is accurate and complies with the filer’s Rule 11 obligations.’ … The Court is unable to locate Shell Petroleum N.V. v. Republic of Costa Rica, 608 F. Supp. 2d 269 (S.D.N.Y. 2009)...Plaintiff is ordered to show cause, in writing, by May 12, 2025, why it and its counsel should not be sanctioned under: (1) Rule 16(f) for violating the Court’s Standing Order; and (2) Rule 11 for filing an opposition without performing a reasonable inquiry into whether its legal contentions are supported.”",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.cacd.955326/gov.uscourts.cacd.955326.30.0.pdf"
  }
},
{
  "name": "Byrd v. The Villages of Woodland Springs Homeowners Association, Inc., No. 02-23-00078-CV (Tex. App.—Fort Worth Jul. 25 2024)",
  "court": "Tex. App.—Fort Worth (2d Dist.), USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Justice Mike Wallach (panel: Sudderth, C.J.; Wallach & Walker, JJ.)",
  "date": "2024-07-25",
  "outcome": "Trial court’s judgment affirmed; no issues preserved or adequately briefed; no sanctions imposed despite deficient citations",
  "outcomeClass": "no_sanction",
  "desc": "After noting numerous briefing defects, the court observed: “We cannot tell from Byrd’s brief if he used ChatGPT or another artificial intelligence (AI) source to attempt to develop his legal citations.”  The opinion characterized the appeal as “yet another … cautionary tale” of pro-se litigants’ “critical mistakes of form and substance.”",
  "links": {
    "Opinion": "https://law.justia.com/cases/texas/second-court-of-appeals/2024/02-23-00078-cv.html"
  }
},
{
  "name": "AQ v. BT, 2025 BCCRT 398 (CanLII) (B.C. Civil Resolution Tribunal Mar. 28 2025)",
  "court": "Civil Resolution Tribunal, British Columbia, Canada",
  "state": "BC",
  "filer": "Pro se",
  "judge": "Vice Chair Eric Regehr",
  "date": "2025-03-28",
  "outcome": "Reduction in award since compensation is based on time, took into account use of AI",
  "outcomeClass": "no_sanction",
  "desc": "The Tribunal found that the applicant’s brief “bear[s] the two hallmarks of artificially created submissions: they are very long and repetitive, and … confidently cite irrelevant rules, incorrect sections of statutes, and court cases that … do not exist at all.”  It emphasized that “The citation of plausible-looking but non-existent cases, in particular, is similar to other cases involving artificial intelligence-generated submissions.”",
  "links": {
    "Opinion": "https://www.canlii.org/en/bc/bccrt/doc/2025/2025bccrt398/2025bccrt398.pdf"
  }
},
{
  "name": "Delano Crossing 2016, LLC v. County of Wright, Ct. File No. 86-CV-23-2147, 2025 WL 1539250 (Minn. Tax Ct. May 29 2025)",
  "court": "Minnesota Tax Court, Regular Division (en banc), USA",
  "state": "MN",
  "filer": "Lawyer",
  "judge": "Chief Judge Jane N. Bowman; Judges Bradford S. Delapena & Beverly J. Luther Quast",
  "date": "2025-05-29",
  "ai_tools_used": ["Unknown"],
  "order_date": "2025-05-29",
  "filing_date": "2025-05-29",
  "outcome": "Referal to Minnesota Lawyers Professional Responsibility Board",
  "outcomeClass": "referral",
  "desc": "“The five case citations contained in Wright County’s memorandum in support of its motion for summary judgment were generated by artificial intelligence; none of the five citations referred to an actual judicial decision.… We conclude that using AI to generate a brief with fake case citations, and then filing that brief without satisfying Rule 11’s affirmative duty to investigate … is a violation of Rule 11. Calling the inclusion of fake case citations a “mistake” in this matter is not objectively reasonable.”",
  "links": {
    "Order on Sanctions": "https://mn.gov/tax-court-stat/published%20orders/2025/Delano%20v.%20Wright%20County%2005-29-25%20Order%20on%20Sanctions.pdf"
  }
},
{
  "name": "Calgary Masonic Temple Ltd. v. City of Calgary, 2024 ABCGYARB 2188903 (Calgary Assessment Review Board Nov. 7 2024)",
  "court": "Calgary Assessment Review Board, Canada",
  "state": "AB",
  "filer": "Lawyer",
  "judge": "Presiding Officer B. Bickford (panel: Bickford, Rocker & Okhiria)",
  "date": "2024-11-07",
  "outcome": "Warning; referral to Board’s General Chair",
  "outcomeClass": "warning",
  "desc": "Responding to three authorities that \"could not be found using standard case research sources,\" the Board observed that “the issue of the potential submission of AI generated false legal citations is of grave concern, and that the issue would be referred to the General Chair of the Board to consider what actions may be appropriate to prevent this type of incident from recurring.”  It further “reminds the parties that it does not currently accept ChatGPT as a reliable research resource, especially with respect to legal authorities.”",
  "links": {
    "Opinion": "https://www.canlii.org/en/ab/abcgyarb/doc/2024/2024abcgyarb2188903/2024abcgyarb2188903.pdf"
  }
},
{
  "name": "R. L. v. Canada Employment Insurance Commission, 2025 SST 85 (S.S.T. Appeal Div. Feb. 5 2025)",
  "court": "Social Security Tribunal of Canada, Appeal Division, Canada",
  "state": "CA-ON",
  "filer": "Pro se",
  "judge": "Tribunal Member Janet Lew",
  "date": "2025-02-05",
  "outcome": "No action",
  "outcomeClass": "no_action",
  "desc": "While seeking permission to appeal a denial of Employment-Insurance family-caregiver benefits, the claimant argued—citing advice generated by ChatGPT—that weeks in which she had received sickness benefits should count as insurable hours. The Tribunal rejected that contention, stressing that “**the information the Claimant received from her research on ChatGPT is no substitute for the Employment Insurance Act**,” and found no arguable error in the lower decision. Note: This case is also included in the AI in Court section since the claimant explicitly referenced and cited ChatGPT as a source of law. However, this is also clearly a case of AI hallucinatoins since ChatGPT misrepresented the law to the claimant.",
  "links": {
    "Decision": "https://www.canlii.org/en/ca/sst/doc/2025/2025sst85/2025sst85.pdf"
  }
},
{
  "name": "Lozano González v. Roberge, 2025 QCTAL 15786 (T.A.L. May 1 2025)",
  "court": "Tribunal administratif du logement (Montréal), Canada",
  "state": "QC",
  "filer": "Pro se",
  "judge": "Administrative Judge Annie Guillemette",
  "date": "2025-05-01",
  "outcome": "Suggestion to rely on more reliable sources next time",
  "outcomeClass": "no_action",
  "desc": "At the hearing on a landlord’s bid to repossess an apartment, the Tribunal learned that the landlord had relied on ChatGPT to translate Québec Civil-Code articles governing notice periods: The landlord used the ChatGPT artificial-intelligence tool … The translation obtained rewrote the articles in full and gave them a scope and meaning completely different from the actual text. Because the notice date was therefore incorrect, the Tribunal dismissed the repossession request. It refused tenants’ plea for abuse damages but observed that the landlord had been misled by the use of artificial intelligence, inviting the landlord to find reliable sources if he wanted a more successful outcome. Note: This case is also included in the AI in Court section since the landlord explicitly referenced and cited ChatGPT as a source of law with incorrect outputs. However, this is also clearly a case of AI hallucinations since ChatGPT misrepresented the law to the landlord.",
  "links": {
    "Decision": "https://www.canlii.org/fr/qc/qctal/doc/2025/2025qctal15786/2025qctal15786.pdf"  // same PDF at CanLII
  }
},
{
  "name": "Standard Chartered Bank (Hong Kong) Ltd. v. John, DCCJ 5479/2021, [2025] HKDC 728 (Hong Kong Dist. Ct. May 6 2025)",
  "court": "Hong Kong District Court, Hong Kong",
  "state": "HK",
  "filer": "Pro se",
  "judge": "Her Honour Judge G. Chow",
  "date": "2025-05-06",
  "outcome": "Cited authorities disregarded, but defendant loses appeal as a result of deficient filing",
  "outcomeClass": "no_sanction",
  "desc": "The Court recorded that the defendant “had obtained these authorities using Microsoft Co-Pilot, DeepSeek and Ask AI chatbot assistant” and was “unable to provide the authorities cited by him,” so any authorities not produced would be “ignored.”",
  "links": {
    "Opinion": "https://legalref.judiciary.hk/lrs/common/ju/loadPdf.jsp?url=https://legalref.judiciary.hk/doc/judg/word/vetted/other/en/2021/DCCJ005479A_2021.docx&mobile=N"
  }
},
{
  "name": "Yu v. Centaline Property Agency Ltd., HCLA 33/2024, [2025] HKCFI 808 (HK CFI Feb. 26 2025)",
  "court": "High Court of Hong Kong, Court of First Instance, Hong Kong",
  "state": "HK",
  "filer": "Pro se",
  "judge": "Deputy High Court Judge S. U. Lee",
  "date": "2025-02-26",
  "outcome": "No action, but appeal denied as a result of deficient filing",
  "outcomeClass": "no_sanction",
  "desc": "Judge noted that the Claimant confirmed that no lawyer or legally-trained person drafted the application; instead, he compiled it himself by using artificial intelligence to search the internet and amalgamate the results. The Court considers that the Claimant’s serious allegations in Ground 3 are entirely unfounded; these so-called grounds of appeal were “piled together” with artificial-intelligence software and are nothing but fanciful stories unsupported by real evidence. An addendum filed in English (after most of the original trial was in Chinese), cited Canadian cases inapplicable in Hong Kong.",
  "links": {
    "Opinion": "https://legalref.judiciary.hk/lrs/common/ju/loadPdf.jsp?url=https://legalref.judiciary.hk/doc/judg/word/vetted/other/ch/2024/HCLA000033_2024.doc&mobile=N"
  }
},
{
  "name": "GNX v. Children’s Guardian, [2025] NSWCATAD 117 (NSW CAT AD May 27 2025)",
  "court": "NSW Civil and Administrative Tribunal, Administrative & Equal Opportunity Division, Australia",
  "state": "NSW",
  "filer": "Pro se",
  "judge": "Senior Member J. Smith",
  "date": "2025-05-27",
  "outcome": "Warning that Applicant should not rely on ChatGPT for legal advice; poor quality claims led to dismissal",
  "outcomeClass": "warning",
  "ai_tools_used": ["ChatGPT"],
  "order_date": "2025-05-27",
  "filing_date": "2024-08-02",
  "desc": "“At the commencement of the hearing, the Tribunal asked all parties if they had used Generative AI … The Applicant stated that he had used ChatGPT to prepare his documents...The Tribunal cautioned the Applicant on relying on ChatGPT for legal advice and suggested that the Applicant may wish to seek legal advice from a lawyer about his application... The Tribunal notes at this point, the risk in relying on ChatGPT and Generative AI for legal advice. The Applicant’s description of the decision in this case in his submissions, for which he used ChatGPT to prepare, is clearly wrong. ” and the Tribunal ultimately “dismisses the proceedings as the Tribunal considers that the proceedings are misconceived and lacking in substance.”",
  "links": {
    "Opinion": "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/nsw/NSWCATAD/2025/117.html"
  }
},
{
  "name": "Stenner v. Stenner, 2025 BCSC 978 (CanLII) (B.C. S.C. May 28 2025)",
  "court": "Supreme Court of British Columbia, Canada",
  "state": "BC",
  "filer": "Lawyer",
  "judge": "Mr. Justice Ball",
  "date": "2025-05-28",
  "outcome": "No action, though generated arguments weren't convincing to the court",
  "outcomeClass": "no_action",
  "ai_tools_used": ["Unknown"],
  "order_date": "2025-05-28",
  "filing_date": "2025-03-17",
  "desc": "“Mr. Stenner advised he used artificial intelligence to prepare the Recusal Application, a 55 page submission.”",
  "links": {
    "Opinion": "https://canlii.ca/t/kcbqb"
  }
},
{
  "name": "Andersen v. Olympus at Daybreak, No. 2:25-cv-00178-RJS-JCB (D. Utah May 30 2025)",
  "court": "U.S. District Court, District of Utah, USA",
  "state": "UT",
  "filer": "Pro se",
  "judge": "Magistrate Judge Jared C. Bennett",
  "date": "2025-05-30",
  "order_date": "2025-05-30",
  "filing_date": "2025-03-24",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "ai_tools_used": ["Unknown"],
  "desc": "“The court is unable to locate the cases that [litigant] has cited, which calls into question his compliance with Fed. R. Civ. P. 11 … any further instances of such conduct will result in sanctions under Rule 11.”",
  "links": {
    "Opinion": "https://law.justia.com/cases/federal/district-courts/utah/utdce/2:2025cv00178/154869/20/"
  }
},
{
  "name": "Byoplanet International, LLC v. Knecht, No. 0:25-cv-60646-LEIBOWITZ (S.D. Fla. May 29 2025)",
  "court": "U.S. District Court, Southern District of Florida, USA",
  "state": "FL",
  "filer": "Lawyer",
  "judge": "David S. Leibowitz",
  "date": "2025-05-29",
  "order_date": "2025-05-29",
  "filing_date": "2025-05-15",
  "outcome": "Order to Show Cause; Pending outcome",
  "outcomeClass": "pending",
  "desc": "The court found that “many quotes from cited cases are fabricated entirely, and at least one case which Plaintiff cites does not exist,” and therefore directed Plaintiff’s counsel to “show cause in writing whether he intentionally made misrepresentations to the Court.”",
  "links": {
    "Order to Show Cause": "https://storage.courtlistener.com/recap/gov.uscourts.flsd.687084/gov.uscourts.flsd.687084.13.0.pdf"
  }
},
{
  "name": "Powhatan County School Board v. Skinger & Lucas, No. 3:24-cv-874 (E.D. Va. Jun. 2 2025)",
  "court": "U.S. District Court, Eastern District of Virginia (Richmond Div.), USA",
  "state": "VA",
  "filer": "Pro se",
  "judge": "Senior U.S. District Judge Robert E. Payne",
  "date": "2025-06-02",
  "order_date": "2025-06-02",
  "ai_tools_used": ["ChatGPT"],
  "outcome": "Strike filings with leave to re-file",
  "outcomeClass": "no_action",
  "desc": "“[T]he Court has found at least fourty-two (42) citations to authority by [litigant]... that do not exist.” “[Litigant] repeatedly has cited cases that do not exist. … The pervasive misrepresentations of the law in [litigant's] filings cannot be tolerated. It serves to make a mockery of the judicial process. It causes an enormous waste of judicial resources to try to find cited cases that do not exist and to determine whether a cited authority is relevant or binding, only to determine that most are neither.”",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.vaed.564853/gov.uscourts.vaed.564853.170.0.pdf"
  }
},
{
  "name": "Gjovik v. Apple Inc., No. 3:23-cv-04597-EMC (N.D. Cal. May 19 2025)",
  "court": "U.S. District Court, Northern District of California, USA",
  "state": "CA",
  "filer": "Pro se",
  "judge": "Judge Edward M. Chen",
  "date": "2025-05-19",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "ai_tools_used": ["Unknown"],
  "desc": "The Court “forewarns [litigant] that … she is responsible for verifying the accuracy of AI-generated or AI-provided information … and that … failure to do so may lead to sanctions.”",
  "links": {
    "Opinion": "https://www.courtlistener.com/docket/67772913/215/gjovik-v-apple-inc/"
  }
},
{
  "name": "Wilt v. Department of the Navy & Defense Finance and Accounting Service, No. 6:24-cv-213-JDK-KNM (E.D. Tex. May 2 2025)",
  "court": "U.S. District Court, Eastern District of Texas, Tyler Division, USA",
  "state": "TX",
  "filer": "Pro se",
  "judge": "Judge Jeremy D. Kernodle",
  "date": "2025-05-02",
  "order_date": "2025-05-02",
  "filing_date": "2025-04-14",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "“Plaintiff's citation to hallucinatory cases likely generated via AI violates this Court’s Local Rule CV-11(g) … The Court cautions Plaintiff that fabricated citations will not be tolerated.”",
  "links": {
    "Opinion": "https://scholar.google.com/scholar_case?case=3519138082593363287"
  }
},
{
  "name": "United States v. Ortiz-Acosta, Nos. 22-cr-00167-RM-1 & 25-cv-00561-RM (D. Colo. Apr. 30 2025)",
  "court": "U.S. District Court, District of Colorado, USA",
  "state": "CO",
  "filer": "Pro se",
  "judge": "Senior District Judge Raymond P. Moore",
  "date": "2025-04-30",
  "order_date": "2025-04-30",
  "filing_date": "2025-02-19",
  "outcome": "Motion denied, but no explicit action on fabricated citations",
  "outcomeClass": "no_action",
  "desc": "“Whether Ortiz-Acosta is using artificial intelligence, copying the pleadings of others, bad at research or just making up case law, the cases he cites do not come close to supporting his claim.”",
  "links": {
    "Opinion": "https://scholar.google.com/scholar_case?case=15302887190655116376"
  }
},
{
  "name": "Wyderka v. Energy Transfer Co. d/b/a Sunoco Logistics, OALJ No. 2023-PSI-00001 (USDOL OALJ Feb. 11 2025)",
  "court": "U.S. Department of Labor, Office of Administrative Law Judges (Cincinnati, OH), USA",
  "state": "OH",
  "filer": "Pro se",
  "judge": "ALJ Willow Eden Fort",
  "date": "2025-02-11",
  "outcome": "No action",
  "outcomeClass": "no_action",
  "desc": "Noting that Complainant’s late-filed brief appeared to be AI-generated, the ALJ warned: “Complainant’s Opposition looks to have been prepared with the assistance of a large language model, such as Chat GPT; it is largely incomprehensible. … A party using such assistance has a duty to ensure that the result generated is sensical.”",
  "links": {
    "Opinion": "https://oalj.dol.gov/DECISIONS/ALJ/PSI/2023/Wyderka_v_Energy_Transfer_dba__2023PSI00001_(FEB_11_2025)_080503_ORDER_PD.PDF"
  }
},
{
  "name": "Jon H. v. Lydia M., No. 24-ICA-396 (W. Va. Int. Ct. App. Jun. 6 2025)",
  "court": "W. Va. Intermediate Court of Appeals, USA",
  "state": "WV",
  "filer": "Lawyer",
  "judge": "Chief Judge Charles O. Lorensen (panel: Lorensen, Greear & White)",
  "date": "2025-06-06",
  "order_date": "2025-06-06",
  "filing_date": "2024-06-24",
  "outcome": "No action due to timely disclosure",
  "outcomeClass": "no_action",
  "desc": "At the hearing, “Mother's counsel informed the court that she had just been made aware that her staff used artificial intelligence to draft the motion to set aside.”  The ICA held that, while the family court “ordered her to issue a disclosure, and she timely complied,” it acted within its discretion in declining to impose any sanctions. NOTE: It is unclear whether the AI-drafted motion actually contained errors. This entry is nonetheless included due to the motion to sanction and the AI drafting disclosure.",
  "links": {
    "Order": "https://www.westlaw.com/Document/Ia68a9820435411f0aa8de192197a00d0/View/FullText.html?transitionType=Default&contextData=(sc.Default)&VR=3.0&RS=cblt1.0"
  }
},
{
  "name": "Goins v. Father Flanagan’s Boys’ Home, No. 8:23-cv-477 (D. Neb. Jun. 5 2025)",
  "court": "U.S. District Court, District of Nebraska, USA",
  "state": "NE",
  "filer": "Pro se",
  "judge": "Senior Judge John M. Gerrard",
  "date": "2025-06-05",
  "outcome": "Warning only",
  "order_date": "2025-06-05",
  "filing_date": "2025-01-10",
  "outcomeClass": "warning",
  "desc": "Noting that some citations in the pro-se brief appeared to be “hallucinatory” and likely generated by AI, the Court observed that “Generative artificial intelligence is known to result in the sort of fictional or ‘hallucinatory’ citations the plaintiff provides,” and noted, \"The Court agrees that the plaintiff made no substantive misrepresentations of law, so striking the brief is not the appropriate remedy. However, the plaintiff should take notice of the fact that such conduct, if repeated, could subject him to sanctions, even as a pro se litigant.\"",
  "links": {
    "Opinion": "https://cases.justia.com/federal/district-courts/nebraska/nedce/8:2023cv00477/101384/29/0.pdf"
  }
},
{
  "name": "Shanmugavelandy v. AbbVie Inc., No. 22-cv-02975 (N.D. Ill. Jun. 2 2025)",
  "court": "U.S. District Court, Northern District of Illinois, Eastern Division, USA",
  "state": "IL",
  "filer": "Pro se",
  "judge": "Judge Sharon Johnson Coleman",
  "date": "2025-06-02",
  "order_date": "2025-06-06",
  "filing_date": "2025-02-24",
  "outcome": "Influenced decision to grant summary judgment against plaintiff",
  "outcomeClass": "warning",
  "desc": "“During oral arguments, Plaintiff admitted to the use of artificial intelligence technologies, in violation of the Court’s standing order, in drafting his pleadings … the Court cannot turn a blind eye to this behavior and must take this violation, as well as Plaintiff’s lack of relevant or accurate case law into consideration in resolving these motions.”",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.ilnd.415806/gov.uscourts.ilnd.415806.264.0_1.pdf"
  }
},
{
  "name": "Lipe v. Albuquerque Public Schools, No. 1:23-cv-00899-GBW-JMR (D.N.M. Jun. 4 2025)",
  "court": "U.S. District Court, District of New Mexico, USA",
  "state": "NM",
  "filer": "Lawyer",
  "judge": "Magistrate Judge Jennifer M. Rozzoni (consent case: Chief Magistrate Judge Gregory B. Wormuth)",
  "date": "2025-06-04",
  "order_date": "2025-06-04",
  "filing_date": "2025-05-16",
  "outcome": "Struck briefs; Warning given already pending order to show cause",
  "outcomeClass": "warning",
  "desc": "The Court found that plaintiff’s May 16 2025 reply “is potentially sanctionable” and “continues to include fabricated citations,” noting that counsel’s conduct is “extremely concerning” and may lead to future sanctions or referral if it persists.",
  "links": {
    "Filing containing fabricated citations": "https://storage.courtlistener.com/recap/gov.uscourts.nmd.493855/gov.uscourts.nmd.493855.107.0.pdf",
    "Order": "https://storage.courtlistener.com/recap/gov.uscourts.nmd.493855/gov.uscourts.nmd.493855.113.0.pdf"
  }
},
{
  "name": "Anita Krishnakumar et al. v. Eichler Swim and Tennis Club, No. 24CV432638",
  "court": "Superior Court of California, Santa Clara County, USA",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "Honorable Frederick S. Chung",
  "date": "2025-05-29",
  "order_date": "2025-05-29",
  "filing_date": null,
  "outcome": "Warning of potential sanctions; affected decision resulting in loss on merits",
  "outcomeClass": "warning",
  "desc": "The court found that the defendant's 'principal citation' in their opposition brief appeared to be 'completely made up: “Ortiz v. Ford Motor Co. (2020) 50 Cal.App.5th 665.”' After spending an 'inordinate amount of time searching for this case,' the court concluded 'it is nowhere to be found.' The court noted that the plaintiff's suggestion that the citation was '“generated by an AI tool”' is 'the most benign explanation.' It warned that an 'intentional deception... would be a violation of Rule 3.3 of the California Rules of Professional Conduct.'",
  "links": {
    "Order": "/opinion_pdfs/Anita_Krishnakumar_et_al._v._Eichler_Swim_and_Tennis_Club_CA_SC_USA_29_May_2025.pdf"
  }
},
{
  "name": "Ploni v. Wasserman & Hillel Yaffe Medical Center, T״Q 8794-01-25 (Small Claims Ct. Hadera Jun. 1 2025)",
  "court": "Small Claims Court, Hadera, Israel",
  "state": "Israel",
  "filer": "Pro se",
  "judge": "Judge Yaniv Heller",
  "date": "2025-06-01",
  "order_date": "2025-06-01",
  "filing_date": "2025-01-01",
  "outcome": "₪250 as sanctions",
  "outcomeClass": "sanction",
  "desc": "Frustrated by “חיפושים חובבניים במערכות בינה מלאכותית” (amateur AI searches), the judge found that the plaintiff had cited two authorities “שלא עלה בידי לאתרן, ומסופקני אם הן קיימות” (“which I could not locate and doubt even exist”) and ruled: “אני מורה כי התובעת תשלם לאוצר המדינה 250 ₪ בתוך 30 יום.” (I order that the plaintiff pay the State Treasury 250 NIS within 30 days.)",
  "links": {
    "Opinion": "https://www.law.co.il/media/computer-law/plonit48.pdf"
  }
},
{
  "name": "Chagas v. Coutinho, No. 0001082-77.2024.8.16.0075 (Court of Justice of Paraná – 18th Civil Chamber, Jun. 6 2025)",
  "court": "Court of Justice of the State of Paraná, 18th Civil Chamber, Brazil",
  "state": "PR",
  "filer": "Lawyer",
  "judge": "Reporting Judge Marcelo Gobbo Dalla Déa; panel Judges Péricles Bellusci de Batista Pereira and Vitor Roberto Silva",
  "date": "2025-06-06",
  "order_date": "2025-06-06",
  "filing_date": "unknown",
  "outcome": "Sanction of 1% on the amount in controversy",
  "outcomeClass": "sanction",
  "desc": "The appellant’s counsel filed an objection invoking supposedly on-point precedents, but the cited decision number was unrelated and later admitted to be generated by an AI search tool without verification. Under Civil Procedure Code article 80... such reckless use of non-existent case law—risking judicial error—constitutes temerity and bad-faith conduct. Consequently, the appellant is fined 1 % of the amount in controversy pursuant to article 81 CPC. ",
  "links": {
    "Appellate decision": "opinion_pdfs/Rodney_Chagas_v._Fabricio_Petinelli_Vieira_Coutinho_Brazil_9_June_2025.pdf"
  }
},
{
  "name": "Zahariev v. Zaharieva, No. E70308 (BCSC Jun. 9 2025)",
  "court": "Supreme Court of British Columbia, Canada",
  "state": "BC",
  "filer": "Pro se",
  "judge": "Justice Norell",
  "date": "2025-06-09",
  "order_date": "2025-06-09",
  "filing_date": "unknown",
  "outcome": "Petitioner ordered to pay respondent’s costs at the ordinary scale under the SCFR",
  "outcomeClass": "sanctions",
  "desc": "\"The petitioner is self-represented\" and the judge stated, \"I suspect that the petitioner may have relied on internet searches, and possibly artificial intelligence programs,\" but accepted that \"this was not intentional on his part\" and decided, \"Any errors do not affect my conclusion on costs.\" The first citation, \"Thomson v. Thomson, [1994] 3 S.C.R. 551, 1994 CanLII 26 (S.C.C.),\" is indeed a Convention case, yet the court was \"unable to locate the proposition cited by the petitioner in that decision.\" As for \"Kovacs v. Kovacs, 2012 BCSC 1400,\" \"D.A.M. v. M.A.K., 2009 ONCJ 405,\" and \"C.A. v. G.T., 2012 NBQB 282,\" each neutral citation \"exists, but not for those named parties, and it is not a Convention case,\" and for two of them \"neither my law clerk nor I have been able to locate this case by party name.\""
  ,
  "links": {
    "Order PDF": "https://www.canlii.org/en/bc/bcsc/doc/2025/2025bcsc1057/2025bcsc1057.pdf"
  }
},
{
  "name": "Rochon-Eidsvig & Rochon Hafer v. JGB Collateral, LLC, No. 05-24-00123-CV (Tex. App.—Dallas Jun. 12 2025)",
  "court": "Court of Appeals, Fifth District of Texas at Dallas",
  "state": "TX",
  "filer": "Lawyer",
  "judge": "Justice Nancy Kennedy",
  "date": "2025-06-12",
  "order_date": "2025-06-12",
  "filing_date": "unknown",
  "outcome": "Ordered to complete 3 hours of ethics CLE, 5 hours of technology CLE, and to pay $2,500 in attorney’s fees to appellee as a sanction",
  "outcomeClass": "sanctions",
  "desc": "The Court found that appellants’ opening brief cited four non-existent cases and lacked required certifications and a signature. Although counsel did not act with intent to deceive, the panel held that failing to verify citations violated duties of competence and candor. As a remedial sanction, the Court ordered counsel to complete specified CLE hours and pay $2,500 in fees, emphasizing that technology (including AI) cannot substitute for an attorney’s ethical responsibilities.",
  "links": {
    "Order PDF": "opinion_pdfs/Rochon_Eidsvig__Rochon_Hafer_v._JGB_Collateral_Texas_CA_12_June_2025.pdf"
  }
},
{
  "name": "Churchill Funding I LLC v. 732 Indiana, LLC, No. 24SMCV03940 (Cal. Super. Ct. Oct. 31 2024)",
  "court": "Superior Court of California, County of Los Angeles (Santa Monica Courthouse)",
  "state": "CA",
  "filer": "Lawyer",
  "judge": "Judge Elaine W. Mandel",
  "date": "2024-10-31",
  "order_date": "2024-10-31",
  "filing_date": "unknown",
  "outcome": "Order to show cause",
  "outcomeClass": "warning",
  "desc": "\"The court notes defendants submitted a CMC status statement on 10/24/2024 in preparation for an informal meet and confer regarding the application, including authorities supposedely supporting their argument that plaintiff could not elect to pursue judicial and then non-judicial foreclosure simultaneously. See CMC Statement 10/24/2024 ex. F. The authority “California Federal Bank v. Kwong (1991) 231 Cal.App.3d 1467, 1472” does not exist. The authority \“Security Pacific National Bank v. Wozab 231 Cal.App.3d at 1472-1473” was reported at 51 Cal.3d 991. The court will set an OSC re filing false pleadings with the court.\"",
  "links": {
    "Order PDF": "opinion_pdfs/CHURCHILL FUNDING I LLC, A DELAWARE LIMITED LIABILITY COMPANY vs. 732 INDIANA, LLC, A CALIFORNIA LIMITED LIABILITY COMPANY, ET AL., Docket No. 24SMCV03940 (Cal. Super. Ct. Aug 14, 2024), Court Docket.pdf"
  }
}

];


const aiInCourtNoHallucinations = [
{
"name": "Pegnatori v. Pure Sports Techs. LLC, 2:23-cv-01424-DCN (D.S.C. Oct. 11, 2023)",
"court": "D.S.C.",
"state": "SC",
"filer": "Text Interpretation",
"judge": "District Judge David C. Norton",
"date": "2023-10-11",
// "outcome": "",
// "outcomeClass": "injunction_denied",
"desc": "In this patent dispute over softball-bat technology, the court rejected plaintiffs’ request for a preliminary injunction after finding they had not shown a likelihood of success on infringement; it also criticized defendant’s reliance on a ChatGPT-generated definition of “foam,” remarking that the tool’s “batting average in legal briefs leaves something to be desired.”",
"links": {
"Opinion": "https://cases.justia.com/federal/district-courts/south-carolina/scdce/2%3A2023cv01424/279239/25/0.pdf?ts=1697125221"}
},
{
  "name": "Mr D Rollo v. Marstons Trading Ltd, Case No. 1600833/2022 (Emp. Trib. Manchester Aug. 1 2024)",
  "court": "Employment Tribunal (Manchester)",
  "state": "UK-ENG",
  "filer": "AI as Expert or By Expert",
  "judge": "Employment Judge S Moore",
  "date": "2024-08-01",
  "outcome": "Evidence excluded; application dismissed",
  "outcomeClass": "evidence",
  "desc": "The Tribunal recorded that “**The claimant also sought to rely on Chat GPT statements**.” When the claimant pressed the point: “**The claimant sought to rely on a conversation with ChatGPT as expert evidence that the respondent’s explanation regarding the difficulty and time involved in extracting the data was false. He had been informed by REJ Davies on 11 June 2024 that he did not have permission to adduce AI generated documents.**” “**I would add that even if there had been, a record of a ChatGPT discussion would not in my judgment be evidence that could sensibly be described as expert evidence nor could it be deemed reliable.**”",
  "links": {
    "Judgment & Reasons": "https://assets.publishing.service.gov.uk/media/66b5f74bce1fd0da7b59358a/Mr_D_Rollo_-v-_Marstons_Trading_Ltd_1600833.2022_-_Judgment_with_Reasons.pdf"
  }
},
{
  "name": "Matter of Weber, 2024 NY Slip Op 24258 (Sur. Ct. Saratoga Cty. Oct. 10 2024)",
  "court": "Surrogate’s Court, Saratoga County (NY)",
  "state": "NY",
  "filer": "AI as Expert or By Expert",
  "judge": "Surrogate Jonathan G. Schopf",
  "date": "2024-10-10",
  "outcome": "Expert evidence discounted",
  "outcomeClass": "evidence",
  "ai_tools_used": ["Microsoft Copilot"],
  "desc": "Expert relied on Microsoft Copilot for calculating witness report. Critiquing the objectant’s damages report, the Court wrote: “**This brings to mind the old adage, ‘garbage in, garbage out’. Clearly a user of Copilot and other artificial intelligence software must be trained or have knowledge of the appropriate inputs to ensure the most accurate results.**” ",
  "links": {
    "Opinion": "https://law.justia.com/cases/new-york/other-courts/2024/2024-ny-slip-op-24258.html"
  }
},
{
  "name": "Dewald v. Smith, 2025 NY Slip Op 30663(U) (N.Y. Sup. Ct. Feb. 26 2025)",
  "court": "Supreme Court, New York County",
  "state": "NY",
  "filer": "AI Transcription",
  "judge": "Justice Hasa A. Kingo",
  "date": "2025-02-26",
  "outcome": "Evidence excluded; motion denied",
  "outcomeClass": "evidence",
  "desc": "\"In support of the motion, Plaintiff submits his affidavit and three transcripts, purportedly transcripts. . . Each transcript is accompanied by a “Certification of Transcript Accuracy” in which Plaintiff attests that he utilized a “Generative AI tool” to produce the transcript from an audio or audio/video recording of the events depicted, which he then reviewed, “corrected any discernible errors, omissions, or inaccuracies,” and now attests is a true, accurate, and complete representation of the audio or audio/video recording (id.). Notably, each transcript appears to depict only a portion of the interaction between the parties on that date (id.). Taken together, these items are not sufficient to meet Plaintiff’s burden of proof of a motion for summary judgment. At the outset, the transcripts are inadmissible in the form presented (see CPLR §3212 [b]; Zuckerman, 49 NY2d at 562 [evidence submitted in support of motion for summary judgment must be in admissible evidentiary form]). Failure to produce the audio or audio/video recordings without explanation violates the best evidence rule, and the purported self-certification of the transcripts is insufficient to authenticate the document and lay the necessary evidentiary foundation (see Guide to New York Evidence Rule 9.01, 9.14, 10.03). Standing alone, the self-serving affidavit of Plaintiff lacks the requisite detail to demonstrate Plaintiff’s entitlement to judgment as a matter of law. Therefore, the motion is denied with respect to this claim.",
  "links": {
    "Decision": "https://law.justia.com/cases/new-york/other-courts/2025/2025-ny-slip-op-30663-u.html"
  }
},
{
  "name": "Ferlito v. Harbor Freight Tools USA, Inc., No. 2:20-cv-05615 (E.D.N.Y. Apr. 23 2025)",
  "court": "E.D.N.Y.",
  "state": "NY",
  "filer": "AI as Expert or By Expert",
  "judge": "Mag. Judge Steven I. Locke",
  "date": "2025-04-23",
  "outcome": "No sanction; AI use approved as reliable",
  "outcomeClass": "evidence",
  "desc": "Addressing an expert who had verified his conclusions with ChatGPT, the Court contrasted him with lawyers in Kohls and Mata: “There is no indication that Lehnert used ChatGPT to generate a report with false authority … Accordingly, the Court finds no issue with Lehnert’s use of ChatGPT in this instance.”",
  "links": {
    "Opinion": "https://storage.courtlistener.com/recap/gov.uscourts.nyed.456084/gov.uscourts.nyed.456084.48.0.pdf"
  }
},
{
  "name": "R. L. v. Canada Employment Insurance Commission, 2025 SST 85 (S.S.T. Appeal Div. Feb. 5 2025)",
  "court": "Social Security Tribunal of Canada, Appeal Division",
  "state": "CA-ON",
  "filer": "Reliance on AI as Source of Law",
  "judge": "Tribunal Member Janet Lew",
  "date": "2025-02-05",
  "outcome": "Reference to ChatGPT rejected",
  "outcomeClass": "no_action",
  "desc": "While seeking permission to appeal a denial of Employment-Insurance family-caregiver benefits, the claimant argued—citing advice generated by ChatGPT—that weeks in which she had received sickness benefits should count as insurable hours. The Tribunal rejected that contention, stressing that “**the information the Claimant received from her research on ChatGPT is no substitute for the Employment Insurance Act**,” and found no arguable error in the lower decision.",
  "links": {
    "Decision": "https://www.canlii.org/en/ca/sst/doc/2025/2025sst85/2025sst85.pdf"
  }
},

{
  "name": "Westcore Industries Ltd. v. Le, 2024 BCCRT 1272 (C.R.T. Dec. 13 2024)",
  "court": "Civil Resolution Tribunal (Small Claims)",
  "state": "BC",
  "filer": "AI as Expert or By Expert",
  "judge": "Tribunal Member Maria Montgomery",
  "date": "2024-12-13",
  "outcome": "AI ‘expert’ evidence rejected",
  "outcomeClass": "evidence",
  "desc": "The self-represented respondent tried to bolster his defence with a link to a ChatGPT session—“**I cannot rely on links because the websites’ content may have changed. So, I have not viewed the link**”⁠—and with ChatGPT print-outs purporting to show plumbing standards. Finding that Rule 8.3 requires an expert to be “a person,” the Tribunal concluded that “**ChatGPT does not meet the requirements**.”  Without admissible expert testimony, Mr. Le’s counter-claim failed, and he was ordered to pay $4,920.88 on Westcore’s unpaid-invoice claim.",
  "links": {
    "Decision": "https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt1272/2024bccrt1272.pdf"
  }
},
{
  "name": "Pâtisseries Jessica inc. v. Chen, 2024 QCTAT 1519 (T.A.T. Apr. 29 2024)",
  "court": "Tribunal administratif du travail (Div. santé et sécurité du travail)",
  "state": "QC",
  "filer": "AI as Expert or By Expert",
  "judge": "Administrative Judge Virginie Brisebois",
  "date": "2024-04-29",
  "outcome": "Revision request dismissed; AI evidence discounted",
  "outcomeClass": "evidence",
  "desc": "Trying to reopen a consolidation ruling, the worker leaned on ChatGPT outputs: He queries the ChatGPT conversational engine about whether a posterior annular tear at L4–L5 and L5–S1 can cause paresthesia … and submits the answer generated by the artificial-intelligence tool, asserting further that the precision or accuracy of the information provided by ChatGPT … would be about 92 %.”  The Tribunal was unconvinced, noting the motion resembles more of a disguised appeal, and left the original decision untouched.",
  "links": {
    "Decision": "https://www.canlii.org/fr/qc/qctat/doc/2024/2024qctat1519/2024qctat1519.pdf"
  }
},
{
  "name": "Ng v. ICBC, 2025 BCCRT 708 (C.R.T. May 28 2025)",
  "court": "Civil Resolution Tribunal (Accident Claims)",
  "state": "BC",
  "filer": "AI as Expert or By Expert",
  "judge": "Tribunal Member Christopher C. Rivers",
  "date": "2025-05-28",
  "outcome": "AI evidence rejected; claims dismissed",
  "outcomeClass": "evidence",
  "desc": "Seeking more than the 2 % TFCC award, the self-represented claimant offered “**diagnostic criteria proposed by ChatGPT**” and posted a link to a ChatGPT chat for the definition of “non-bony disruption.” The Tribunal refused, noting that “**the CRT does not typically accept website links because the information behind the link can change**” and that “**generative artificial intelligence, such as ChatGPT, is not so intrinsically reliable that I am prepared to accept it as evidence**.” With no admissible proof of additional impairment, the CRT dismissed self-represented claimant’s claims and ordered him to reimburse ICBC $25 in tribunal fees.",
  "links": {
    "Decision": "https://canlii.ca/t/kcb3m"
  }
},
{
  "name": "Lozano González v. Roberge, 2025 QCTAL 15786 (T.A.L. May 1 2025)",
  "court": "Tribunal administratif du logement (Montréal)",
  "state": "QC",
  "filer": "Reliance on AI as Source of Law",
  "judge": "Administrative Judge Annie Guillemette",
  "date": "2025-05-01",
  "outcome": "Reliance",
  "outcomeClass": "no_action",
  "desc": "At the hearing on a landlord’s bid to repossess an apartment, the Tribunal learned that the landlord had relied on ChatGPT to translate Québec Civil-Code articles governing notice periods: The landlord used the ChatGPT artificial-intelligence tool … The translation obtained rewrote the articles in full and gave them a scope and meaning completely different from the actual text. Because the notice date was therefore incorrect, the Tribunal dismissed the repossession request. It refused tenants’ plea for abuse damages but observed that the landlord had been misled by the use of artificial intelligence, inviting the landlord to find reliable sources if he wanted a more successful outcome.",
  "links": {
    "Decision": "https://www.canlii.org/fr/qc/qctal/doc/2025/2025qctal15786/2025qctal15786.pdf"  // same PDF at CanLII
  }
},
{
  "name": "[X] BV v. Tax Inspector, BK-23/706, ECLI:NL:GHDHA:2024:1771 (Hague Court of Appeal Jun. 26 2024)",
  "court": "Court of Appeal The Hague (Tax Law Team)",
  "state": "NL",
  "filer": "AI as Evidence",
  "judge": "Judges T.A. de Hek, A. van Dongen & W.M.G. Visser",
  "date": "2024-06-26",
  "outcome": "Reliance on AI evidence is rejected",
  "outcomeClass": "evidence",
  "desc": "\"In support of its position, the interested party has, among other things, given ChatGPT the search query to name as many cars as possible that are in a similar economic context and competitive position with the car. It has resulted in 10 exclusive cars. In view of its experience in this right-hand offering, the interested party will not be surprised that the Court does not consider these cars on the basis of that search as cars whose characteristics are closest to those of the car, as referred to by the Court of Justice of the European Union. After all, this requires more than that the reference vehicles are in an equal economic context and competitive position according to an AI programme. After all, the starting point is what the average consumer – a person – considers similar.\" (translated)",
  "links": {
    "Opinion": "https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:GHDHA:2024:1771"
  }
},
{
  "name": "CIBC Trust Corporation, as Trustee of the John Szewczyk Testamentary Trust v. Szewczyk, et al, 2025 ONSC 3382",
  "court": "ONSC",
  "state": "ON",
  "filer": "Text Interpretation",
  "judge": "LEMAY J",
  "date": "2025-06-06",
  "outcome": "Warned not to give the court ChatGPT interpretations of documents",
  "outcomeClass": "warning",
  "desc": "In this will interpretation case concerning the indexing of an annuity under a testamentary trust, the court found that the interpretation proposed by the trustee and one beneficiary was correct, and ordered that overpayments made to the other beneficiary since January 1, 2024, be recovered by postponing future increases. The court also addressed a party's use of ChatGPT, stating: 'Finally, as part of his reply factum, John's counsel provided an analysis of the language of Jennie's will that was performed by ChatGPT. He suggests that, \"while not determinative, the fact that an advanced language-processing tool arrived at the same plain meaning demonstrates that the wording is clear\".' The court noted: 'There is no evidence as to ChatGPT's ability to interpret the words of a testator. This is especially true because the interpretation of a will is a subjective exercise.' and concluded: 'For these reasons, I reject this argument. Going forward, I would caution [litigant] against providing the Court with ChatGPT interpretations of documents as part of his reply arguments.'",
  "links": {
  "Opinion": "https://www.canlii.org/en/on/onsc/doc/2025/2025onsc3382/2025onsc3382.pdf"
  }
  }
]


/* ─────────────────────────── COPYRIGHT / TRAINING ─────────────────────────── */
const copyrightCases = [
  // /* ───────── N.D. CALIFORNIA (20) ───────── */
  // {
  //   "name": "Bartz v. Anthropic PBC, No. 3:24-cv-05417",
  //   "court": "N.D. Cal.",
  //   "date": "2024-10-23",
  //   "desc": "Authors allege Anthropic downloaded pirated copies of hundreds of thousands of books—including theirs—made unlicensed copies, and used them to train the Claude family of large-language models.",
  //   "judge": "William Alsup",
  //   "plaintiffsAttorneys": ["Justin Nelson – Susman Godfrey"],
  //   "defendantsAttorneys": ["Angel T. Nakamura – Arnold & Porter"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69058235/bartz-v-anthropic-pbc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.434709/gov.uscourts.cand.434709.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Millette v. OpenAI Inc., No. 5:24-cv-04710",
  //   "court": "N.D. Cal.",
  //   "date": "2024-08-20",
  //   "desc": "YouTube creator says OpenAI covertly transcribed millions of YouTube videos (including his) and fed the transcripts into ChatGPT’s training corpus without consent.",
  //   "judge": "Edward John Davila",
  //   "plaintiffsAttorneys": ["L. Timothy Fisher – Bursor & Fisher"],
  //   "defendantsAttorneys": ["Andrew Gass – Latham & Watkins"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69012680/millette-v-openai-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.433675/gov.uscourts.cand.433675.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Millette v. Google LLC, No. 5:24-cv-04708",
  //   "court": "N.D. Cal.",
  //   "date": "2024-08-02",
  //   "desc": "Companion suit alleging Google scraped and transcribed YouTube videos to train and fine-tune its Gemini LLMs, again without creators’ permission. Dismissed voluntarily.",
  //   "judge": "Edward John Davila",
  //   "plaintiffsAttorneys": ["L. Timothy Fisher – Bursor & Fisher"],
  //   "defendantsAttorneys": ["Benedict Hur – Willkie Farr"],
  //   "outcome": "Dismissed",
  //   "outcomeClass": "dismissed",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69012654/millette-v-google-llc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.433672/gov.uscourts.cand.433672.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Millette v. NVIDIA Corp., No. 5:24-cv-05157",
  //   "court": "N.D. Cal.",
  //   "date": "2024-09-23",
  //   "desc": "Plaintiff makes the same YouTube claims against NVIDIA, contending the company used the material to train its Cosmos world model.",
  //   "judge": "Edward John Davila",
  //   "plaintiffsAttorneys": ["L. Timothy Fisher – Bursor & Fisher"],
  //   "defendantsAttorneys": ["Sean S. Pak – Quinn Emanuel"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69045427/millette-v-nvidia-corporation/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.434387/gov.uscourts.cand.434387.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Concord Music Group Inc. v. Anthropic PBC, No. 3:24-cv-03811",
  //   "court": "N.D. Cal.",
  //   "date": "2024-06-26",
  //   "desc": "Major publishers allege Claude reproduces hundreds of song lyrics.",
  //   "judge": "Eumi K. Lee",
  //   "plaintiffsAttorneys": ["Steven A. Riley – Riley & Jacobson"],
  //   "defendantsAttorneys": ["Allison L. Stillman – Latham & Watkins"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68889092/concord-music-group-inc-v-anthropic-pbc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.431519/gov.uscourts.cand.431519.1.0_1.pdf"
  //   }
  // },
  // {
  //   "name": "In Re Mosaic LLM Litigation (3:24-cv-01451)",
  //   "court": "N.D. Cal.",
  //   "date": "2024-03-08",
  //   "desc": "Authors allege MosaicML trained on books3 corpus without license for MPT models.",
  //   "judge": "Charles R. Breyer",
  //   "plaintiffsAttorneys": ["Joseph R. Saveri – Saveri Law Firm"],
  //   "defendantsAttorneys": ["Jed Wakefield – Fenwick & West"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68325564/onan-v-databricks-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.426188/gov.uscourts.cand.426188.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Makkai v. Databricks Inc., No. 3:24-cv-02653",
  //   "court": "N.D. Cal.",
  //   "date": "2024-04-25",
  //   "desc": "Authors allege MosaicML trained on books3 corpus without license for MPT models.",
  //   "judge": "Charles Breyer",
  //   "plaintiffsAttorneys": ["Brian O'Mara – DiCello Levitt"],
  //   "defendantsAttorneys": ["Jed Wakefield – Fenwick & West"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68497293/makkai-v-databricks-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.430747/gov.uscourts.cand.430747.1.0.pdf"
  //   }
  // },
  // // PH: validated until here... Current validations: https://chatgpt.com/c/68264581-5054-800d-8748-d4ba0c1bb52b
  // // https://chatgpt.com/c/682645b0-3df0-800d-b83e-e838fa622988
  // {
  //   "name": "Nazemian et al. v. NVIDIA Corp., No. 4:24-cv-01454-JST",
  //   "court": "U.S. District Court, N.D. Cal. (Oakland Div.)",
  //   "dateFiled": "2024-03-08",
  //   "desc": "Authors Abdi Nazemian, Brian Keene, and Stewart O’Nan allege NVIDIA trained its NeMo Megatron LLM on the Books3 shadow-library corpus that contains their copyrighted books, violating 17 U.S.C. §501.",
  //   "judge": "Hon. Jon S. Tigar",
  //   "plaintiffsAttorneys": [
  //     "Joseph R. Saveri – Joseph Saveri Law Firm LLP",
  //     "Matthew Butterick – Joseph Saveri Law Firm LLP",
  //     "Brian D. Clark – Lockridge Grindal Nauen P.L.L.P.",
  //     "Arielle S. Wagner – Lockridge Grindal Nauen P.L.L.P."
  //   ],
  //   "defendantsAttorneys": [
  //     "Trenton H. Norris – Hogan Lovells US LLP",
  //     "Andrew H. Schapiro – Quinn Emanuel Urquhart & Sullivan LLP"
  //   ],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://dockets.justia.com/docket/california/candce/4:2024cv01454/426191",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.426191/gov.uscourts.cand.426191.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Dubus et al. v. NVIDIA Corp., No. 4:24-cv-02655-JST",
  //   "court": "U.S. District Court, N.D. Cal. (Oakland Div.)",
  //   "dateFiled": "2024-05-02",
  //   "desc": "Andre Dubus III and Susan Orlean allege their books were copied to train NVIDIA’s NeMo Megatron models, infringing their copyrights, in a putative class action related to Nazemian.",
  //   "judge": "Hon. Jon S. Tigar",
  //   "plaintiffsAttorneys": [
  //     "Brian O. O'Mara – DiCello Levitt LLP",
  //     "Joseph R. Saveri – Joseph Saveri Law Firm LLP",
  //     "Amy E. Keller – DiCello Levitt LLP"
  //   ],
  //   "defendantsAttorneys": [
  //     "Sean S. Pak – Quinn Emanuel Urquhart & Sullivan LLP",
  //     "Alexander B. Spiro – Quinn Emanuel Urquhart & Sullivan LLP",
  //     "Andrew H. Schapiro – Quinn Emanuel Urquhart & Sullivan LLP"
  //   ],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://dockets.justia.com/docket/california/candce/4:2024cv02655/428992",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.428992/gov.uscourts.cand.428992.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Kadrey v. Meta Platforms Inc., No. 3:23-cv-03417 (consol.)",
  //   "court": "N.D. Cal.",
  //   "date": "2023-07-07",
  //   "desc": "Authors say Meta's LLamA models were trained on Books3 corpus.",
  //   "judge": "Vince Chhabria",
  //   "plaintiffsAttorneys": ["David Boies – Boies Schiller"],
  //   "defendantsAttorneys": ["Bobby A. Ghajar – Cooley"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/67759715/kadrey-v-meta-platforms-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.415354/gov.uscourts.cand.415354.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Chabon v. Meta Platforms Inc., No. 3:23-cv-04663",
  //   "court": "N.D. Cal.",
  //   "date": "2023-09-11",
  //   "desc": "Children's-book author sues Meta over alleged copying of illustrated works in LLaMA.",
  //   "judge": "Vince Chhabria",
  //   "plaintiffsAttorneys": ["Daniel J. Muller – Ventura Hersey & Muller"],
  //   "defendantsAttorneys": ["Bobby A. Ghajar – Cooley"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68616686/chabon-v-meta-platforms-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.418395/gov.uscourts.cand.418395.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Huckabee v. Meta Platforms Inc., No. 3:23-cv-06663",
  //   "court": "N.D. Cal.",
  //   "date": "2023-12-27",
  //   "desc": "Cookbook writer alleges Meta scraped her recipes for LLaMA-Chef variant.",
  //   "judge": "Vince Chhabria",
  //   "plaintiffsAttorneys": ["Joseph R. Saveri – Saveri Law Firm"],
  //   "defendantsAttorneys": ["Bobby A. Ghajar – Cooley"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68754828/huckabee-v-meta-platforms-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.420555/gov.uscourts.cand.420555.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Farnsworth v. Meta Platforms, Inc., No. 3:24-cv-06893",
  //   "court": "U.S. District Court, N.D. Cal.",
  //   "date": "2024-10-01",
  //   "desc": "Novelist Christopher Farnsworth’s proposed class action accuses Meta of copying hundreds of thousands of books to train its Llama large-language-model family.",
  //   "judge": "Araceli Martínez-Olguín (related to Judge Vince Chhabria by order of Oct. 4 2024)",
  //   "plaintiffsAttorneys": [
  //     "Elizabeth J. Cabraser – Lieff Cabraser Heimann & Bernstein",
  //     "Daniel M. Hutchinson – Lieff Cabraser Heimann & Bernstein",
  //     "Reilly T. Stoler – Lieff Cabraser Heimann & Bernstein",
  //     "Scott J. Sholder – Cowan DeBaets Abrahams & Sheppard",
  //     "CeCe M. Cole – Cowan DeBaets Abrahams & Sheppard"
  //   ],
  //   "defendantsAttorneys": [
  //     "Bobby A. Ghajar – Cooley",
  //     "Kathleen R. Hartnett – Cooley",
  //     "Mark Weinstein – Cooley"
  //   ],
  //   "outcome": "Active; Meta’s motion to consolidate with Kadrey v. Meta argued Oct. 2024, discovery ongoing.",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69217445/farnsworth-v-meta-platforms-inc/",
  //     "Complaint": "https://chatgptiseatingtheworld.com/wp-content/uploads/2024/10/Farnsworth-v-Meta-Platforms-COMPLAINT-Oct-2-2024.pdf"
  //   }
  // },
  // {
  //   "name": "In re OpenAI ChatGPT Litigation (lead: Tremblay v. OpenAI, No. 3:23-cv-03223)",
  //   "court": "Transferred April 3 2025 to S.D.N.Y.; originally U.S. District Court, N.D. Cal.",
  //   "date": "2023-06-28",
  //   "desc": "Consolidated copyright class action by authors alleging OpenAI used their books, articles and computer code to train ChatGPT without permission.",
  //   "judge": "Araceli Martínez-Olguín (N.D. Cal.); MDL now before Judge Sidney Stein (S.D.N.Y.)",
  //   "plaintiffsAttorneys": [
  //     "Joseph R. Saveri – Joseph Saveri Law Firm",
  //     "Matthew Butterick – Butterick Law",
  //     "Bryan L. Clobes – Cafferty Clobes Meriweather & Sprengel"
  //   ],
  //   "defendantsAttorneys": [
  //     "Allison L. Stillman – Latham & Watkins",
  //     "Joseph R. Wetzel – Latham & Watkins"
  //   ],
  //   "outcome": "Partially dismissed Feb. 12 2024 (most state-law and vicarious-infringement counts); case centralized in Manhattan by JPML on Apr. 3 2025, with pre-trial proceedings now in MDL No. 3143.",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/67538258/tremblay-v-openai-inc/",
  //     "FirstConsolidatedComplaint": "https://insideaipolicy.com/sites/insideaipolicy.com/files/documents/2024/sep/ai09062024.pdf"
  //   }
  // },
  // {
  //   "name": "Silverman v. OpenAI, Inc., No. 3:23-cv-03416 (member case)",
  //   "court": "U.S. District Court, N.D. Cal. (consolidated into In re OpenAI ChatGPT Litigation)",
  //   "date": "2023-07-07",
  //   "desc": "Comedian-author Sarah Silverman and co-authors Richard Kadrey and Christopher Golden allege ChatGPT trained on/reproduces their books verbatim, infringing copyright.",
  //   "judge": "Araceli Martínez-Olguín",
  //   "plaintiffsAttorneys": [
  //     "Joseph R. Saveri – Joseph Saveri Law Firm",
  //     "Matthew Butterick – Butterick Law"
  //   ],
  //   "defendantsAttorneys": [
  //     "Allison L. Stillman – Latham & Watkins"
  //   ],
  //   "outcome": "Key claims trimmed Feb. 12 2024 but core direct-infringement count remains; now part of MDL proceedings in S.D.N.Y.",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/67569254/silverman-v-openai-inc/",
  //     "Complaint": "https://www.courthousenews.com/wp-content/uploads/2023/12/silverman-v-openai-complaint.pdf"
  //   }
  // },
  // {
  //   "name": "Chabon v. OpenAI, Inc., No. 3:23-cv-04625 (member case)",
  //   "court": "U.S. District Court, N.D. Cal. (consolidated into In re OpenAI ChatGPT Litigation)",
  //   "date": "2023-09-08",
  //   "desc": "Michael Chabon and other authors claim OpenAI copied their books to train ChatGPT, violating the Copyright Act.",
  //   "judge": "Araceli Martínez-Olguín",
  //   "plaintiffsAttorneys": [
  //     "Daniel J. Muller – Ventura Hersey & Muller",
  //     "David A. Straite – DiCello Levitt"
  //   ],
  //   "defendantsAttorneys": [
  //     "Allison L. Stillman – Latham & Watkins"
  //   ],
  //   "outcome": "Consolidated with Tremblay and Silverman; direct-infringement claim survives, case now in S.D.N.Y. MDL.",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/67778017/chabon-v-openai-inc/",
  //     "Complaint": "https://www.documentcloud.org/documents/23972952-chabon-v-openai-complaint"
  //   }
  // },
  // {
  //   "name": "Andersen v. Stability AI Ltd., No. 3:23-cv-00201",
  //   "court": "N.D. Cal.",
  //   "date": "2023-01-13",
  //   "desc": "Illustrators assert Stable Diffusion copied billions of images (incl. their works).",
  //   "judge": "William H. Orrick",
  //   "plaintiffsAttorneys": ["Joseph R. Saveri – Saveri Law Firm"],
  //   "defendantsAttorneys": ["Mark Lemley – Lex Lumina"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/66827321/andersen-v-stability-ai-ltd/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.407208/gov.uscourts.cand.407208.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Doe v. GitHub Inc. (Code AI), No. 4:22-cv-06823",
  //   "court": "N.D. Cal.",
  //   "date": "2022-11-03",
  //   "desc": "Developers claim Copilot trains on their GPL code without honoring licenses.",
  //   "judge": "Jon S. Tigar",
  //   "plaintiffsAttorneys": ["Matthew Butterick – Butterick Law"],
  //   "defendantsAttorneys": ["Alyssa Caridis – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/66535066/doe-v-github-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.402172/gov.uscourts.cand.402172.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "J.L. v. Alphabet Inc., No. 3:23-cv-03440",
  //   "court": "N.D. Cal.",
  //   "date": "2023-07-06",
  //   "desc": "Consumers allege Google's AI scraped private data, books, images and code.",
  //   "judge": "Eumi K. Lee",
  //   "plaintiffsAttorneys": ["Ryan Clarkson – Clarkson Law"],
  //   "defendantsAttorneys": ["David H. Kramer – Wilson Sonsini"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/67804652/jl-v-alphabet-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.415732/gov.uscourts.cand.415732.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Zhang v. Google LLC, No. 3:23-cv-02531",
  //   "court": "N.D. Cal.",
  //   "date": "2023-05-23",
  //   "desc": "Photographer sues Bard/Gemini for using his copyrighted portfolio during training.",
  //   "judge": "Eumi K. Lee",
  //   "plaintiffsAttorneys": ["Joseph R. Saveri – Saveri Law Firm"],
  //   "defendantsAttorneys": ["— (not yet appeared)"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/67592098/zhang-v-google-llc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cand.414235/gov.uscourts.cand.414235.1.0.pdf"
  //   }
  // },

  // /* ───────── S.D. NEW YORK (13) ───────── */
  // {
  //   "name": "The New York Times Co. v. Microsoft Corp. & OpenAI LP, No. 1:23-cv-11195",
  //   "court": "S.D.N.Y.",
  //   "date": "2023-12-27",
  //   "desc": "NYT seeks billions alleging GPT-4 was trained on its paywalled corpus verbatim.",
  //   "judge": "Sidney H. Stein",
  //   "plaintiffsAttorneys": ["Ian Crosby – Susman Godfrey"],
  //   "defendantsAttorneys": ["Annette Hurst – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68117049/the-new-york-times-company-v-microsoft-corporation/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.630933/gov.uscourts.nysd.630933.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Dow Jones & Co. v. Perplexity AI Inc., No. 1:24-cv-07984",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-09-09",
  //   "desc": "WSJ publisher says Perplexity regurgitates pay-walled articles wholesale.",
  //   "judge": "Katherine P. Failla",
  //   "plaintiffsAttorneys": ["William P. Barr – Torridon Law"],
  //   "defendantsAttorneys": ["Eugene Y. Mar – Farella Braun"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69270463/dow-jones-company-inc-v-perplexity-ai-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.605882/gov.uscourts.nysd.605882.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Lehrman v. Lovo Inc., No. 1:24-cv-03770",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-05-07",
  //   "desc": "Voice-over artist claims Lovo cloned her protected recordings to train TTS system.",
  //   "judge": "J. Paul Oetken",
  //   "plaintiffsAttorneys": ["Steve Cohen – Pollock Cohen"],
  //   "defendantsAttorneys": ["David E. Case – Rimon PC"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68919991/lehrman-v-lovo-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.638362/gov.uscourts.nysd.638362.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "UMG Recordings v. Uncharted Labs d/b/a Udio, No. 1:24-cv-04777",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-06-12",
  //   "desc": "Music giants assert Udio's text-to-music model was trained on millions of sound recordings.",
  //   "judge": "Alvin Hellerstein",
  //   "plaintiffsAttorneys": ["Moez Kaba – Hueston Hennigan"],
  //   "defendantsAttorneys": ["Alex Spiro – Quinn Emanuel"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69007066/umg-recordings-inc-v-uncharted-labs-llc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.640392/gov.uscourts.nysd.640392.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Raw Story Media Inc. v. OpenAI Inc., No. 1:24-cv-01514",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-02-14",
  //   "desc": "Digital newsroom alleges ChatGPT reproduces its paywalled investigative pieces.",
  //   "judge": "Colleen McMahon",
  //   "plaintiffsAttorneys": ["Matthew Topic – Loevy & Loevy"],
  //   "defendantsAttorneys": ["Andrew Gass – Latham & Watkins"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68290709/raw-story-media-inc-v-openai-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.633272/gov.uscourts.nysd.633272.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Intercept Media Inc. v. OpenAI Inc. & Microsoft, No. 1:24-cv-01515",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-02-14",
  //   "desc": "Intercept alleges DMCA-CID removal from training data and verbatim article output.",
  //   "judge": "Jed S. Rakoff",
  //   "plaintiffsAttorneys": ["Jonathan Loevy – Loevy & Loevy"],
  //   "defendantsAttorneys": ["Annette Hurst – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68290710/intercept-media-inc-v-openai-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.633273/gov.uscourts.nysd.633273.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Authors Guild v. OpenAI Inc., No. 1:23-cv-08292",
  //   "court": "S.D.N.Y.",
  //   "date": "2023-09-19",
  //   "desc": "Seventeen prominent authors say GPT reproduces their novels nearly verbatim.",
  //   "judge": "Sidney H. Stein",
  //   "plaintiffsAttorneys": ["Anna Freymann – Lieff Cabraser"],
  //   "defendantsAttorneys": ["Annette Hurst – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68050910/authors-guild-v-openai-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.605091/gov.uscourts.nysd.605091.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Alter v. OpenAI Inc. & Microsoft, No. 1:23-cv-10211",
  //   "court": "S.D.N.Y.",
  //   "date": "2023-11-21",
  //   "desc": "Non-fiction authors allege GPT trained on their copyrighted investigative books.",
  //   "judge": "Sidney H. Stein",
  //   "plaintiffsAttorneys": ["J. Craig Smyser – Susman Godfrey"],
  //   "defendantsAttorneys": ["Annette Hurst – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68601105/alter-v-openai-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.648220/gov.uscourts.nysd.648220.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Basbanes v. Microsoft Corp. & OpenAI, No. 1:24-cv-00084",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-01-04",
  //   "desc": "Historian Daniel Basbanes alleges GPT trained on his book 'On Paper'.",
  //   "judge": "Sidney H. Stein",
  //   "plaintiffsAttorneys": ["Scott J. Sholder – Cowan DeBaets"],
  //   "defendantsAttorneys": ["Annette Hurst – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68138737/basbanes-v-microsoft-corporation/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.nysd.630628/gov.uscourts.nysd.630628.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Daily News LP et al. v. Microsoft & OpenAI, No. 1:24-cv-03285",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-04-29",
  //   "desc": "Eight local newspapers sue over Bing/Copilot reproducing subscriber-only articles.",
  //   "judge": "Sidney H. Stein",
  //   "plaintiffsAttorneys": ["Michael Kanovitz – Loevy & Loevy"],
  //   "defendantsAttorneys": ["Annette Hurst – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68484432/daily-news-lp-v-microsoft-corporation/",
  //     "Complaint": "https://www.courthousenews.com/wp-content/uploads/2024/04/newspapers-openAI-suit.pdf"
  //   }
  // },
  // {
  //   "name": "CIR v. OpenAI Inc. & Microsoft, No. 1:24-cv-04872",
  //   "court": "S.D.N.Y.",
  //   "date": "2024-06-05",
  //   "desc": "Center for Investigative Reporting says ChatGPT outputs verbatim Mother Jones content.",
  //   "judge": "Sidney H. Stein",
  //   "plaintiffsAttorneys": ["Matthew Topic – Loevy & Loevy"],
  //   "defendantsAttorneys": ["Annette Hurst – Orrick"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/68892274/the-center-for-investigative-reporting-inc-v-openai-inc/",
  //     "Complaint": "https://content.mlex.com/Attachments/2024-09-24_4IDN3145HHBT36Y2/US_DIS_NYSD_1_24cv4872_FIRST_AMENDED_COMPLAINT.pdf"
  //   }
  // },
  // {
  //   "name": "Advance Local Media LLC v. Cohere Inc., No. 1:25-cv-01305",
  //   "court": "S.D.N.Y.",
  //   "date": "2025-02-13",
  //   "desc": "Advance/Condé Nast allege Cohere's large-language model scraped their magazines.",
  //   "judge": "Colleen McMahon",
  //   "plaintiffsAttorneys": ["Matthew Oppenheim – Oppenheim + Zebrak"],
  //   "defendantsAttorneys": ["— (not yet appeared)"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69636122/advance-local-media-llc-v-cohere-inc/",
  //     "Complaint": "https://chatgptiseatingtheworld.com/wp-content/uploads/2025/02/Advance-Local-Media-LLC-v.-Cohere-Inc.-Conde-Nast-suit-Feb-13-2025.pdf"
  //   }
  // },

  // /* ───────── D. DELAWARE (3) ───────── */
  // {
  //   "name": "Thomson Reuters GmbH v. ROSS Intelligence Inc., No. 1:20-cv-00613-SB",
  //   "court": "D. Del.",
  //   "date": "2020-05-26",
  //   "desc": "Reuters accuses ROSS of copying Westlaw headnotes to train legal-research AI.",
  //   "judge": "Stephanos Bibas",
  //   "plaintiffsAttorneys": ["Dale Cendali – Kirkland & Ellis"],
  //   "defendantsAttorneys": ["David E. Moore – Potter Anderson"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/17131648/thomson-reuters-enterprise-centre-gmbh-v-ross-intelligence-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.ded.72172/gov.uscourts.ded.72172.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Getty Images (US) Inc. v. Stability AI Ltd., No. 1:23-cv-00135",
  //   "court": "D. Del.",
  //   "date": "2023-02-03",
  //   "desc": "Alleges Stable Diffusion was trained on 12 million Getty photos and still outputs their watermarks.",
  //   "judge": "Jennifer L. Hall",
  //   "plaintiffsAttorneys": ["Tammy L. Mercer – Young Conaway"],
  //   "defendantsAttorneys": ["Michael J. Flynn – Morris Nichols"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/66788385/getty-images-us-inc-v-stability-ai-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.ded.81407/gov.uscourts.ded.81407.1.0.pdf"
  //   }
  // },
  // {
  //   "name": "Vacker v. ElevenLabs Inc., No. 1:24-cv-00987",
  //   "court": "D. Del.",
  //   "date": "2024-07-12",
  //   "desc": "Professional narrator says ElevenLabs cloned her voice without consent or license.",
  //   "judge": "Colm F. Connolly",
  //   "plaintiffsAttorneys": ["Edward Anderson – Anderson Yeh"],
  //   "defendantsAttorneys": ["— (not yet appeared)"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69111793/vacker-v-elevenlabs-inc/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.ded.720987/gov.uscourts.ded.720987.1.0.pdf"
  //   }
  // },

  // /* ───────── D. COLORADO (1) ───────── */
  // {
  //   "name": "Pierce v. Photobucket Corp., No. 1:24-cv-03432",
  //   "court": "D. Colo.",
  //   "date": "2024-12-23",
  //   "desc": "Photographers accuse Photobucket's new AI-search tool of training on their licensed images.",
  //   "judge": "N. Reid Neureiter (Mag.)",
  //   "plaintiffsAttorneys": ["Daniel Twetten – Loevy & Loevy"],
  //   "defendantsAttorneys": ["— (not yet appeared)"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.courtlistener.com/docket/69456658/pierce-v-photobucket-corporation/",
  //     "Complaint": "https://storage.courtlistener.com/recap/gov.uscourts.cod.232771/gov.uscourts.cod.232771.1.0.pdf"
  //   }
  // },

  // /* ───────── FOREIGN (3) ───────── */
  // {
  //   "name": "Getty Images & ors v. Stability AI Ltd., Claim IL-2023-000007",
  //   "court": "High Court (Ch) – England & Wales",
  //   "date": "2023-01-16",
  //   "desc": "Getty seeks U.K. damages for Stable Diffusion's alleged wholesale copying of its library.",
  //   "judge": "Mrs Justice Joanna Smith",
  //   "plaintiffsAttorneys": ["Lindsay Lane KC – Fieldfisher"],
  //   "defendantsAttorneys": ["Nicholas Saunders KC – Bird & Bird"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.judiciary.uk/judgments/getty-images-and-others-v-stability-ai/",
  //     "Complaint": "https://www.judiciary.uk/wp-content/uploads/2025/01/Getty-Images-and-others-v-Stability-AI-14.01.25.pdf"
  //   }
  // },
  // {
  //   "name": "SNE & Associations v. Meta Platforms Inc.",
  //   "court": "Tribunal judiciaire de Paris",
  //   "date": "2025-03-12",
  //   "desc": "French publishers sue Meta, alleging LLaMA trained on millions of French-language books.",
  //   "judge": "Aude Buresi (3ᵉ chambre)",
  //   "plaintiffsAttorneys": ["Valérie-Marie Rigaud – Fidal IP-IT"],
  //   "defendantsAttorneys": ["— (not yet appeared)"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://techcrunch.com/2025/03/12/meta-faces-publisher-copyright-ai-lawsuit-in-france/",
  //     "Complaint": "https://www.sne.fr/actu/unis-auteurs-et-editeurs-assignent-meta-pour-imposer-le-respect-du-droit-dauteur-aux-developpeurs-doutils-dintelligence-artificielle-generative/"
  //   }
  // },
  // {
  //   "name": "Canadian News Media v. OpenAI Inc., CV-24-00012600-00CP",
  //   "court": "Ontario Superior Ct.",
  //   "date": "2025-04-08",
  //   "desc": "Class action by 17 Canadian outlets over alleged scraping of paywalled journalism.",
  //   "judge": "Paul Perell J.",
  //   "plaintiffsAttorneys": ["Marcus Kopal – Sotos LLP"],
  //   "defendantsAttorneys": ["— (not yet appeared)"],
  //   "outcome": "Pending",
  //   "outcomeClass": "pending",
  //   "links": {
  //     "Docket": "https://www.canliiconnects.org/en/cases/2025onca260",
  //     "Complaint": "https://www.thestar.com/content/dam/thestar/business/2025/04/08/canadian-media-sue-openai/statement-of-claim-openai.pdf"
  //   }
  // }
];

/* ─────────────────────────── AI–LIABILITY / TORT & DEFAMATION ─────────────────────────── */
const liabilityCases = [
  {
    "name": "Walters v. OpenAI LLC, No. 23-A-04860-2 (Gwinnett Co. Super. Ct. GA)",
    "court": "Gwinnett Co. Super. Ct. (GA)",
    "claim": "Defamation",
    "outcome": "Dismissed",
    "outcomeClass": "dismissed",
    "date": "2023-06-05",
    "desc": "Radio host sues ChatGPT creator for defamation after bot falsely claimed he embezzled funds.",
    "links": {
      "Docket": "https://www.courtlistener.com/docket/67617826/walters-v-openai-llc/"
    }
  },
  {
    "name": "Garcia v. Character Techs. Inc., No. 6:24-cv-01903 (M.D. Fla.)",
    "court": "M.D. Fla.",
    "claim": "Wrongful Death, Negligence, Florida's Deceptive and Unfair Trade Practices Act, …",
    "outcome": "Pending",
    "outcomeClass": "pending",
    "date": "2024-10-22",
    "desc": "Family alleges chatbot encouraged teen's suicide; company seeks dismissal, citing First Amendment.",
    "links": {
      "Docket": "https://www.courtlistener.com/docket/69300919/garcia-v-character-technologies-inc/"
    }
  },
  {
    "name": "Huang Estate v. Tesla Inc. (Autopilot), No. 18CV334980 (Cal. Super. Ct. Jan. 17 2025)",
    "court": "Cal. Super. Ct.",
    "claim": "Negligence, Wrongful Death, …",
    "outcome": "Settlement",
    "outcomeClass": "settlement",
    "date": "2019-04-26",
    "desc": "Tesla settles wrongful-death suit alleging Autopilot caused fatal crash.",
    "links": {
      "Complaint": "https://dig.abclocal.go.com/kgo/PDF/Complaint-Huang-v-Tesla-State-of-Calif-20190430.pdf",
      "Coverage": "https://lsflaw.com/landmark-tesla-wrongful-death-settlement-things-to-know/"
    }
  },
  {
    "name": "Moffatt v. Air Canada, 2024 BCCRT 149 (B.C. Civ. Resol. Trib. Feb. 14 2024)",
    "court": "B.C. Civil Resolution Tribunal",
    "state": "Canada-BC",
    "filer": "Negligent Misrepresentation",
    "judge": "Tribunal Member Christopher Rivers",
    "date": "2024-02-14",
    "outcome": "CA$650.88 damages + fees",
    "outcomeClass": "costs",
    "desc": "Air Canada’s chatbot told a passenger he could apply later for a bereavement-fare refund—information that was false. The tribunal found negligent misrepresentation and ordered the airline to pay the fare difference, interest and tribunal fees.",
    "links": {
      "Decision": "https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html",
      "Coverage": "https://www.theguardian.com/world/2024/feb/16/air-canada-chatbot-lawsuit"
    }
  },
];

/* ─────────────────────────── FIRST-AMENDMENT & AI SPEECH ─────────────────────────── */
const firstAmendmentCases = [
  {
    "name": "Kohls v. Bonta, No. 2:24-cv-02527 (E.D. Cal. Oct. 2 2024)",
    "court": "E.D. Cal.",
    "outcome": "Preliminary Injunction",
    "outcomeClass": "warning",
    "date": "2024-10-02",
    "desc": "Court blocks California 'Defending Democracy from Deepfake Deception Act' as overbroad.",
    "links": {
      "Order": "https://cdn.arstechnica.net/wp-content/uploads/2024/10/Kohls-v-Bonta-Order-Granting-Injunction-10-2-24.pdf",
      "Coverage": "https://www.politico.com/news/2024/10/02/california-law-block-political-deepfakes-00182277/"
    }
  },
  {
    "name": "Character Techs. MTD (Garcia), No. 6:24-cv-01903 (M.D. Fla. Apr. 28 2025)",
    "court": "M.D. Fla.",
    "outcome": "Motion to Dismiss",
    "outcomeClass": "pending",
    "date": "2025-04-28",
    "desc": "Company argues chatbot outputs are protected speech deserving full First-Amendment protection.",
    "links": {
      "Brief": "https://www.documentcloud.org/documents/25503918-garcia-vs-character-technologies-characterai-motion-to-dismiss/",
      "Coverage": "https://arstechnica.com/tech-policy/2025/04/are-chatbot-outputs-protected-speech-court-pressured-to-clarify/"
    }
  }
];

const otherCases = [
{
  "name": "Harris as next friend of R.N.H. v. Adams, No. 24-cv-12437-PGL (D. Mass. Nov. 20 2024)",
  "court": "U.S. District Court, D. Massachusetts",
  "state": "MA",
  "filer": "Due Process",
  "judge": "District Judge Patti B. Saris (hearing), Judge Paul G. Levenson (order)",
  "date": "2024-11-20",
  "outcome": "Preliminary-injunction motion denied",
  "outcomeClass": "warning",
  "desc": "While recounting the background of a school-discipline dispute, the Court explained that the student team’s submission \"had indiscriminately copied and pasted text from the AI application, **including citations to nonexistent books (i.e., AI hallucinations).**\"  It noted that the *very first* footnote “consists of a citation to a nonexistent book: **‘Lee, Robert. *Hoop Dreams: A Century of Basketball.* Los Angeles: Courtside Publications, 2018.’**” The court denied the preliminary injunction motion stating that most factors weighed in favor of the school's discipline.",
  "links": {
    "Opinion": "https://caselaw.findlaw.com/court/us-dis-crt-d-mas/116710071.html"
  }
},
{
  "name": "D(S) v. S(R), 2025 NWTSC 11 (N.W.T. Sup. Ct. Mar. 7 2025)",
  "court": "Supreme Court of the Northwest Territories",
  "state": "NT",
  "filer": "Erin George for Applicant; Respondent self-represented",
  "judge": "Justice S. M. MacPherson",
  "date": "2025-03-07",
  "outcome": "Application to revoke emergency protection order denied; existing order confirmed and varied to bar Respondent from discussing litigation with children",
  "outcomeClass": "no_sanction",
  "desc": "The court noted that respondent created documents and left them for applicant to find, and that “some of these documents were generated with the assistance of ChatGPT, a generative artificial intelligence chatbot, which provides answers to questions posed by users,” and found that the package left for the Applicant “can only reasonably be described as threatening.”",
  "links": {
    "Opinion": "https://www.canlii.org/en/nt/ntsc/doc/2025/2025nwtsc11/2025nwtsc11.pdf"
  }
}
]