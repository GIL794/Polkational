import { Question } from '@/components/education/Quiz/Quiz';

export interface QuizCollection {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: Question[];
}

export const quizzes: QuizCollection[] = [
  {
    id: 'architecture-basics',
    title: 'Polkadot Architecture Basics',
    description: 'Test your knowledge on the fundamental building blocks of Polkadot.',
    difficulty: 'Beginner',
    questions: [
      {
        id: 1,
        question: "What is the primary function of the Relay Chain?",
        options: [
          "To execute smart contracts directly",
          "To provide shared security and consensus for the network",
          "To store private user data",
          "To generate new DOT tokens for every user"
        ],
        correctAnswer: 1,
        explanation: "The Relay Chain is the heart of Polkadot, responsible for the network's shared security, consensus, and cross-chain interoperability. It does not support smart contracts directly."
      },
      {
        id: 2,
        question: "Which role is responsible for producing blocks on a Parachain?",
        options: [
          "Validators",
          "Nominators",
          "Collators",
          "Fishermen"
        ],
        correctAnswer: 2,
        explanation: "Collators maintain parachains by collecting transactions and producing state transition proofs for Validators on the Relay Chain to verify."
      },
      {
        id: 3,
        question: "What are Parachains?",
        options: [
          "A type of cryptocurrency wallet",
          "Sovereign blockchains that connect to the Relay Chain",
          "The governance council of Polkadot",
          "A centralized database for transaction storage"
        ],
        correctAnswer: 1,
        explanation: "Parachains are sovereign blockchains that connect to the Relay Chain, benefiting from its shared security while maintaining their own logic and tokenomics."
      }
    ]
  },
  {
    id: 'consensus-npos',
    title: 'Consensus & Staking (NPoS)',
    description: 'Deep dive into Nominated Proof of Stake and network security.',
    difficulty: 'Intermediate',
    questions: [
      {
        id: 1,
        question: "What consensus mechanism does Polkadot use?",
        options: [
          "Proof of Work (PoW)",
          "Nominated Proof of Stake (NPoS)",
          "Delegated Proof of Stake (DPoS)",
          "Proof of History (PoH)"
        ],
        correctAnswer: 1,
        explanation: "Polkadot uses Nominated Proof of Stake (NPoS) where Nominators back Validators with their stake to secure the network."
      },
      {
        id: 2,
        question: "What happens if a Validator behaves maliciously?",
        options: [
          "Nothing, the network ignores it",
          "They are banned from the Discord server",
          "Their staked DOT (and their nominators') is slashed",
          "They pay a small transaction fee"
        ],
        correctAnswer: 2,
        explanation: "Slashing is the penalty mechanism in NPoS. If a validator acts maliciously (e.g., double signing), a percentage of their stake (and their nominators') is burned."
      },
      {
        id: 3,
        question: "What is an Era in Polkadot?",
        options: [
          "A period of 6 seconds (block time)",
          "A period of approximately 24 hours where rewards are calculated",
          "A period of 4 hours for validator rotation",
          "The time it takes to upgrade the runtime"
        ],
        correctAnswer: 1,
        explanation: "An Era is a period of approximately 24 hours. Staking rewards are paid out at the end of each era, and the validator set can change."
      }
    ]
  },
  {
    id: 'xcm-interoperability',
    title: 'XCM & Interoperability',
    description: 'Understand how chains communicate via Cross-Consensus Messaging.',
    difficulty: 'Advanced',
    questions: [
      {
        id: 1,
        question: "What does XCM stand for?",
        options: [
          "eXtensible Consensus Mechanism",
          "Cross-Consensus Messaging",
          "Cross-Chain Money",
          "eXtended Chain Management"
        ],
        correctAnswer: 1,
        explanation: "XCM stands for Cross-Consensus Messaging, a language for communicating between consensus systems (like parachains, smart contracts, etc.)."
      },
      {
        id: 2,
        question: "What is HRMP?",
        options: [
          "High Risk Money Protocol",
          "Horizontal Relay-routed Message Passing",
          "Hyper-Redundant Message Protocol",
          "Hardware Resource Management Protocol"
        ],
        correctAnswer: 1,
        explanation: "HRMP (Horizontal Relay-routed Message Passing) allows parachains to exchange messages by routing them through the Relay Chain."
      },
      {
        id: 3,
        question: "What is a MultiLocation?",
        options: [
          "A GPS coordinate of a node",
          "A way to identify a point in the consensus hierarchy relative to another",
          "A database of all user addresses",
          "The physical server location of a validator"
        ],
        correctAnswer: 1,
        explanation: "MultiLocation is a core concept in XCM used to specify relative locations within the consensus hierarchy (e.g., 'Parent', 'Parachain 1000')."
      }
    ]
  }
];
