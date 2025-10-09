export type ChecklistItem = {
  id: string;
  text: string;
};

export type Scenario = {
  slug: string;
  title: string;
  lowdown: string;
  checklist: ChecklistItem[];
};

export const scenarios: Scenario[] = [
  {
    slug: 'impulse-shopping',
    title: 'I am going shopping on an impulse. How do I stay on budget?',
    lowdown: 'Impulse shopping can derail your financial goals. The key is to create friction between the "want it" moment and the "buy it" moment, giving you time to think.',
    checklist: [
      { id: '1', text: 'Make a shopping list before you go.' },
      { id: '2', text: 'Set a strict budget for this trip and stick to it.' },
      { id: '3', text: 'Wait 24 hours before buying any non-essential item over $50.' },
      { id: '4', text: 'Unsubscribe from tempting marketing emails.' },
    ],
  },
  {
    slug: 'first-car',
    title: 'I am buying my first car. What should I check?',
    lowdown: 'Buying a car is a major expense that goes beyond the sticker price. Considering the total cost of ownership will help you make a smart decision.',
    checklist: [
      { id: '1', text: 'Calculate the Total Cost of Ownership (TCO): price, insurance, fuel, and maintenance.' },
      { id: '2', text: 'Get pre-approved for a car loan from your bank or credit union before visiting dealerships.' },
      { id: '3', text: 'Research reliability and common issues for the models you are considering.' },
      { id: '4', text: 'Always test-drive the car on routes you frequently use.' },
      { id: '5', text: 'For a used car, get a vehicle history report and a pre-purchase inspection by a trusted mechanic.' },
    ],
  },
  {
    slug: 'vacation-saving',
    title: 'I want to save for a vacation in 2 years. Where do I start?',
    lowdown: 'Saving for a big goal like a vacation is all about consistency and making your money work for you. A clear plan makes the process achievable and less stressful.',
    checklist: [
      { id: '1', text: 'Estimate the total cost of your vacation (flights, accommodation, activities).' },
      { id: '2', text: 'Divide the total cost by 24 (months) to find your monthly savings goal.' },
      { id: '3', text: 'Open a dedicated high-yield savings account for your vacation fund.' },
      { id: '4', text: 'Set up an automatic monthly transfer to this account.' },
    ],
  },
  {
    slug: 'first-paycheck',
    title: 'I just got my first paycheck. How do I understand it?',
    lowdown: 'Your paycheck is more than just a number. Understanding the deductions from your gross pay helps you know where your money is actually going.',
    checklist: [
      { id: '1', text: 'Identify your "Gross Pay" - the total amount before any deductions.' },
      { id: '2', text: 'Review pre-tax deductions like health insurance or retirement contributions.' },
      { id: '3', text: 'Look at tax deductions: federal, state, Social Security, and Medicare.' },
      { id: '4', text: 'Find your "Net Pay" or "Take-Home Pay" - this is what you actually receive.' },
    ],
  },
  {
    slug: '50-30-20-budget',
    title: 'How do I create a simple 50/30/20 monthly budget?',
    lowdown: 'The 50/30/20 rule is a straightforward way to manage your money. It divides your after-tax income into three categories: Needs, Wants, and Savings.',
    checklist: [
      { id: '1', text: 'Calculate your monthly after-tax income.' },
      { id: '2', text: 'List all your "Needs" (e.g., rent, groceries, utilities) and aim to keep them at or below 50% of your income.' },
      { id: '3', text: 'List your "Wants" (e.g., dining out, hobbies, subscriptions) and budget up to 30% for them.' },
      { id: '4', text: 'Allocate at least 20% of your income towards savings, investments, and paying off debt.' },
    ],
  },
  {
    slug: 'first-credit-card',
    title: 'What should I look for in a first credit card?',
    lowdown: 'A first credit card is a tool to build your credit history. The best starter cards are simple, with no annual fee and clear terms.',
    checklist: [
      { id: '1', text: 'Look for cards specifically for students or people with limited credit history.' },
      { id: '2', text: 'Prioritize cards with no annual fee.' },
      { id: '3', text: 'Understand the Annual Percentage Rate (APR), but plan to pay your balance in full each month to avoid interest.' },
      { id: '4', text: 'Check if the card reports to all three major credit bureaus (Equifax, Experian, TransUnion).' },
    ],
  },
];
