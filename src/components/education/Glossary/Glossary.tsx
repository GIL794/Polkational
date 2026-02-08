import React, { useState } from 'react';
import styles from './Glossary.module.css';
import Card from '@/components/common/Card/Card';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Network' | 'Roles' | 'Consensus' | 'Tech';
}

const terms: GlossaryTerm[] = [
  {
    term: 'Validator',
    definition: 'Node that secures the Relay Chain by staking DOT, validating proofs from collators, and participating in consensus.',
    category: 'Roles'
  },
  {
    term: 'Nominator',
    definition: 'Token holder who contributes to the security of the network by backing up to 16 validators with their stake.',
    category: 'Roles'
  },
  {
    term: 'Collator',
    definition: 'Node that maintains a parachain by collecting parachain transactions and producing state transition proofs for validators.',
    category: 'Roles'
  },
  {
    term: 'Relay Chain',
    definition: 'The central chain of Polkadot responsible for network security, consensus, and cross-chain interoperability.',
    category: 'Network'
  },
  {
    term: 'Parachain',
    definition: 'Sovereign blockchain that connects to the Relay Chain to benefit from shared security and interoperability.',
    category: 'Network'
  },
  {
    term: 'XCM',
    definition: 'Cross-Consensus Messaging format, a language for communication between consensus systems (like parachains).',
    category: 'Tech'
  },
  {
    term: 'Era',
    definition: 'A period of approximately 24 hours in Polkadot during which the validator set remains constant.',
    category: 'Consensus'
  },
  {
    term: 'Session',
    definition: 'A shorter period (usually 4 hours) within an era used for validator rotation.',
    category: 'Consensus'
  },
  {
    term: 'NPoS',
    definition: 'Nominated Proof of Stake. The consensus mechanism used by Polkadot to select the validator set based on total stake.',
    category: 'Consensus'
  },
  {
    term: 'Extrinsic',
    definition: 'A piece of information that comes from outside the chain and is included in a block (e.g., transactions).',
    category: 'Tech'
  }
];

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = terms.filter(t => 
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search glossary terms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBar}
      />
      
      <div className={styles.termGrid}>
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item) => (
            <div key={item.term} className={styles.termCard}>
              <div className={styles.termTitle}>{item.term}</div>
              <div className={styles.termDefinition}>{item.definition}</div>
              <span style={{ 
                fontSize: '0.7rem', 
                color: 'var(--text-muted)', 
                marginTop: '0.5rem', 
                display: 'inline-block',
                background: 'var(--bg-body)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}>
                {item.category}
              </span>
            </div>
          ))
        ) : (
          <div style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
            No definitions found for "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;
