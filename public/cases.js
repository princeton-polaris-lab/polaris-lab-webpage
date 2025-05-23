
/* -------------------- DATA -------------------- */
/*  AI-Hallucination / Ghost-Citation cases  */
const hallucinationCases = [
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
  "court": "Karnataka High Court (Bengaluru)",
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
  "court": "Haw. Intermediate Ct. App.",
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
  "court": "Income Tax Appellate Tribunal (Bengaluru Bench)",
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
  "court": "First-tier Tribunal (Tax Chamber)",
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
  "court": "Regional Court of South Africa, Gauteng Div.",
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
  "court": "D. Conn.",
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
  "court": "Pietermaritzburg High Court (Kwazulu-Natal Div.)",
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
  "court": "D.D.C.",
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
  "court": "S.D. Fla.",
  "state": "FL",
  "filer": "Pro se",
  "judge": "District Judge Melissa Damian",
  "date": "2025-01-10",
  "outcome": "Warning; arguments stricken",
  "outcomeClass": "warning",
  "desc": "Omnibus order dismissed the case after plaintiff’s response brief cited two non-existent Florida appellate decisions. Finding the citations likely came from a generative-AI tool and that the litigant acted in bad faith, the court deemed dismissal the appropriate sanction and warned that fabricated authorities ‘abuse the adversary system.’",
  "links": {
    "Opinion (PDF)": "https://www.beankinney.com/wp-content/uploads/2025/04/O_Brien-v.-Flick_2025-U.S.-Dist.-LEXIS-10625-2.pdf",
    "Westlaw": "2025 WL 242924"
  }
},
/* —— NEW ENTRY —— */
{
  "name": "Gordon v. Wells Fargo Bank N.A. Inc., No. 5:24-cv-388 (M.D. Ga. Apr. 8 2025)",
  "court": "M.D. Ga.",
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
  "court": "S.D. Ga. (Savannah Div.)",
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
  "court": "W.D. Ky. (Paducah Div.)",
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
  "court": "W.D. N.C. (Charlotte Div.)",
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
  "court": "D. Neb.",
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
    "court": "Colo. O.P.D.J.",
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
    "court": "2d Cir.",
    "state": "NY",
    "filer": "Lawyer",
    "judge": "Circuit Judges Parker, Nathan & Merriam (per curiam)",
    "date": "2024-01-30",
    "outcome": "Referral to Grievance Panel",
    "outcomeClass": "referral",
    "desc": "Reply brief cited a nonexistent case; court found Rule 11(b)(2) violation and referred attorney to disciplinary authorities, ordering a copy of the decision served on the client.",
    "links": {
      "Opinion": "https://www.law.nyu.edu/sites/default/files/Park%20v.%20Kim%2C%20No.%2022-2057%20%282024%29.pdf",
      "Coverage": "https://reason.com/volokh/2024/01/30/second-circuit-refers-lawyer-for-disciplinary-proceedings-based-on-ai-hallucinated-case-in-brief/"
    }
  },  /* :contentReference[oaicite:1]{index=1} */
  /* —— NEW ENTRY —— */
{
  "name": "Kruglyak v. Home Depot U.S.A., Inc., No. 1:22-cv-00024 (W.D. Va. Mar. 25 2025)",
  "court": "W.D. Va.",
  "state": "VA",
  "filer": "Pro se",
  "judge": "Senior District Judge Michael F. Urbanski",
  "date": "2025-03-25",
  "outcome": "Warning only",
  "outcomeClass": "warning",
  "desc": "Responding to briefs that quoted several nonexistent precedents—authorities the court could not locate in any reporter—Judge noted the likelihood that plaintiff relied on an AI tool, rejected the arguments as unsupported, and cautioned that any further submission containing fabricated citations would expose the plaintiff to Rule 11 penalties. Given Kruglyak’s pro-se status, the court declined to impose a fine.",
  "links": {
    "Opinion" : "https://www.westlaw.com/Document/I2d86b9d009da11f0af92f78b23f67b47/View/FullText.html?transitionType=Default&contextData=(sc.Default)&VR=3.0&RS=cblt1.0"
  }
},
/* —— END NEW ENTRY —— */

  {
    "name": "Ex parte Lee, No. 10-23-00126-CR (Tex. App.—Waco July 20 2023)",
    "court": "Tex. 10th Ct. App.",
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
    "court": "Sur. Ct. Kings Cty.",
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
    "court": "S.D.N.Y.",
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
    "court": "D. Ariz.",
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
  "court": "Del. Ch.",
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
    "court": "Colo. Ct. App.",
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
    "court": "D. N.M.",
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
    "court": "U.S. Ct. of Fed. Claims",
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
  "court": "Supreme Court of British Columbia",
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
    "court": "Ont. Sup. Ct. (SCJ)",
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
    "name": "R (Ayinde) v. London Borough of Haringey, [2025] EWHC 1040 (Admin)",
    "court": "High Court (Admin.)",
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
  }  /* :contentReference[oaicite:10]{index=10} */,
{
  "name": "Ramirez v. Humala, No. 1:24-cv-00242 (E.D.N.Y.)",
  "court": "E.D.N.Y.",
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
  "name": "Coomer v. Lindell, No. 1:22-cv-01129-NYW-SBP (D. Colo.)",
  "court": "D. Colo.",
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
  "court": "Hadera Magistrate’s Court",
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
    court: "N.D. Cal.",
    state: "CA",
    filer: "Lawyer",
    judge: "District Judge Eumi K. Lee; Magistrate Judge Susan van Keulen",
    date: "2025-05-13",
    outcome: "Pending",
    outcomeClass: "pending",
    desc: "Publishers allege Claude infringes song-lyric copyrights. Plaintiffs moved to strike an Anthropic data-scientist declaration after discovering a potential hallucinated citation; the dispute is ongoing. Attorneys for Anthropic admitted that the declaration was modified by attorneys using Claude to format citations, which introduced the hallucinated citation.",
    links: {
      Docket: "https://www.courtlistener.com/docket/68889092/concord-music-group-inc-v-anthropic-pbc/",
      Filing: "https://chatgptiseatingtheworld.com/wp-content/uploads/2025/05/Olivia-Chen-sampling-protocol.pdf",
      Coverage: "https://www.reuters.com/legal/litigation/anthropic-expert-accused-using-ai-fabricated-source-copyright-case-2025-05-13/",
      Update: "https://www.reuters.com/legal/legalindustry/anthropics-lawyers-take-blame-ai-hallucination-music-publishers-lawsuit-2025-05-15/"
    }
  },
  {
    name: "Lacey v. State Farm Gen. Ins. Co., No. 2:24-cv-05205-FMO-MAA (C.D. Cal.)",
    court: "C.D. Cal.",
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
    "court": "Santa Catarina Court of Justice – Fifth Criminal Chamber",
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
    "court": "Tribunal de Justiça de Santa Catarina – 6ª Câmara Cível",
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
    "court": "Tribunal Superior Eleitoral",
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
    court: "S.D.N.Y.",
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
    court: "E.D. Tex.",
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
    court: "Mo. Ct. App.",
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
    court: "D. Wyo.",
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
    court: "D. Minn.",
    state: "MN",
    filer: "State expert",
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
    court: "E.D. Cal.",
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
    court: "E.D. Ark.",
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
    court: "S.D. Ind.",
    state: "IN",
    filer: "Lawyer",
    judge: "Magistrate Judge Mark J. Dinsmore",
    date: "2025-02-21",
    outcome: "$15,000 Sanction Recommended",
    outcomeClass: "recommendation",
    desc: "After three briefs containing AI-fabricated cases, the magistrate recommended a $15 k Rule 11 sanction and referral for discipline.",
    links: {
      Report: "https://cases.justia.com/federal/district-courts/indiana/insdce/2:2024cv00326/215482/99/0.pdf",
      Coverage: "https://www.lawnext.com/2024/02/not-again-two-more-cases-just-this-week-of-hallucinated-citations-in-court-filings-leading-to-sanctions.html"
    }
  },
  {
    "name": "United States v. Cohen, No. 18-cr-602 (S.D.N.Y. Mar. 20 2024)",
    "court": "S.D.N.Y.",
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
  "court": "Mass. Super. Ct.",
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
  "court": "W.D. Va.",
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
  "court": "D. N.M.",
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
  "court": "E.D. Pa.",
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
  "court": "N.D. Miss.",
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
  "court": "E.D.N.Y.",
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
  "court": "E.D. Pa.",
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
    "court": "La. Ct. App. 4th Cir.",
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
  },  /* :contentReference[oaicite:0]{index=0} */

  {
    "name": "Saxena v. Martinez-Hernandez, No. 2:22-cv-02126-CDS-BNW, 2025 WL 522234 (D. Nev. Feb. 18 2025)",
    "court": "D. Nev.",
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
  },  /* :contentReference[oaicite:1]{index=1} */

  {
    "name": "Greenflight Venture Corp. v. Google LLC, No. 24-cv-80395 (S.D. Fla. Feb. 4 2025)",
    "court": "S.D. Fla.",
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
  },  /* :contentReference[oaicite:2]{index=2} */

  {
    "name": "Benshoof v. Ferguson, 2:24-cv-00808, (W.D. Wash. May 15, 2025) ECF No. 121",
    "court": "W.D. Wash.",
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
  "court": "High Court (Chancery Division)",
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
/* —— NEW ENTRY —— */
{
  "name": "Matter of Vanguard Constr. & Dev. Co. v. 400 Times Square Assoc., LLC, 2025 NY Slip Op 01781 (App. Div. 1st Dep’t Mar. 25 2025)",
  "court": "N.Y. Appellate Division, First Department",
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
  "court": "High Court (Administrative Court)",
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
  "court": "C.D. Cal.",
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
  "court": "High Court of Trinidad & Tobago",
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
  "court": "Supremo Tribunal Federal",
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
  "court": "S.D. Ill.",
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
  "court": "S.D. Ga. (Augusta Div.)",
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
  "court": "5th Cir.",
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
  "court": "W.D. Okla.",
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
  "court": "N.D. Ala.",
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