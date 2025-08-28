export const generateMockAnalysis = (fileName, fileContent) => {
  const mockSummaries = [
    "This employment agreement establishes the terms of employment between the company and employee, including salary, benefits, working hours, and termination conditions. The contract includes standard provisions for confidentiality, non-compete clauses, and intellectual property rights.",
    "This residential lease agreement outlines the rental terms for a property, including monthly rent, security deposit, lease duration, and responsibilities of both tenant and landlord. The agreement covers maintenance, utilities, and conditions for lease termination.",
    "This service agreement defines the scope of work, payment terms, deliverables, and timeline for professional services. It includes provisions for liability limitations, intellectual property rights, and dispute resolution mechanisms.",
    "This non-disclosure agreement (NDA) establishes confidentiality obligations between parties when sharing sensitive business information. It defines what constitutes confidential information, permitted uses, and the duration of confidentiality obligations."
  ]

  const mockRisks = [
    { text: "Automatic renewal clause may extend contract without explicit consent", severity: "high", clause: "Section 12.3" },
    { text: "Late payment penalties compound at 1.5% per month", severity: "medium", clause: "Section 8.2" },
    { text: "Broad termination rights favor the counterparty", severity: "high", clause: "Section 15.1" },
    { text: "Limited liability clause may restrict legal recourse", severity: "medium", clause: "Section 9.4" },
    { text: "Non-compete clause has broad geographic scope", severity: "high", clause: "Section 6.1" },
    { text: "Indemnification clause places significant liability on you", severity: "medium", clause: "Section 11.2" }
  ]

  const mockBenefits = [
    { text: "30-day cancellation notice period provides flexibility", clause: "Section 14.2" },
    { text: "Intellectual property rights clearly favor your interests", clause: "Section 7.1" },
    { text: "Performance bonuses guaranteed based on measurable metrics", clause: "Section 5.3" },
    { text: "Comprehensive insurance coverage provided at no additional cost", clause: "Section 11.1" },
    { text: "Dispute resolution includes mediation before litigation", clause: "Section 16.1" },
    { text: "Price increase limitations protect against excessive charges", clause: "Section 4.2" }
  ]

  const mockObligations = [
    { party: "You", obligation: "Make monthly payments by the 1st of each month", deadline: "Monthly", status: "ongoing" },
    { party: "You", obligation: "Provide 30 days written notice before termination", deadline: "Before termination", status: "conditional" },
    { party: "You", obligation: "Maintain confidentiality of proprietary information", deadline: "Throughout term + 2 years", status: "ongoing" },
    { party: "Other Party", obligation: "Deliver services as specified in Exhibit A", deadline: "Within 30 days", status: "pending" },
    { party: "Other Party", obligation: "Maintain professional liability insurance", deadline: "Throughout term", status: "ongoing" },
    { party: "Other Party", obligation: "Provide quarterly performance reports", deadline: "Quarterly", status: "ongoing" }
  ]

  const keyDates = [
    { date: "2024-12-01", event: "Contract effective date", type: "start" },
    { date: "2025-11-30", event: "Contract expiration", type: "end" },
    { date: "2024-11-01", event: "First payment due", type: "payment" },
    { date: "2025-05-30", event: "Mid-term review date", type: "milestone" }
  ]

  const uncertainAreas = [
    "Clause 8.3 contains ambiguous language regarding liability limits that may require legal interpretation",
    "Section 12 references undefined terms that could lead to disputes",
    "Jurisdiction clause may conflict with local regulations",
    "Force majeure provisions may not cover all relevant circumstances"
  ]

  // Randomly select items to make each analysis unique
  const selectedRisks = mockRisks.sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 3))
  const selectedBenefits = mockBenefits.sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 3))
  const selectedObligations = mockObligations.sort(() => 0.5 - Math.random()).slice(0, 3 + Math.floor(Math.random() * 2))
  const selectedUncertain = uncertainAreas.sort(() => 0.5 - Math.random()).slice(0, 1 + Math.floor(Math.random() * 2))

  return {
    summary: mockSummaries[Math.floor(Math.random() * mockSummaries.length)],
    risks: selectedRisks,
    benefits: selectedBenefits,
    obligations: selectedObligations,
    confidence: Math.floor(85 + Math.random() * 10),
    keyDates: keyDates,
    uncertainAreas: selectedUncertain
  }
}