import React, { useState } from 'react';
import styles from './ArchitectureGuide.module.css';
import Card from '@/components/common/Card/Card';

const ArchitectureGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <Card title="Polkadot Architecture">
      <div className={styles.diagramContainer}>
        <svg viewBox="0 0 400 320" className={styles.diagram}>
          {/* Relay Chain (Central Hub) */}
          <circle cx="200" cy="160" r="70" fill="none" stroke="#E6007A" strokeWidth="6" />
          <text x="200" y="165" textAnchor="middle" fill="#E6007A" fontWeight="bold" fontSize="14">Relay Chain</text>
          
          {/* Validators (Small dots on Relay Chain) */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 200 + 70 * Math.cos(rad);
            const y = 160 + 70 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="4" fill="#E6007A" />;
          })}

          {/* Parachains (Connected Chains) */}
          {/* Parachain 1 (Top Left) */}
          <g>
            <line x1="200" y1="160" x2="100" y2="100" stroke="#ccc" strokeWidth="2" strokeDasharray="4" />
            <circle cx="100" cy="100" r="35" fill="#552BBF" opacity="0.9" />
            <text x="100" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Parachain</text>
            {/* Collator */}
            <rect x="85" y="60" width="30" height="10" rx="2" fill="#00B2FF" />
          </g>

          {/* Parachain 2 (Top Right) */}
          <g>
            <line x1="200" y1="160" x2="300" y2="100" stroke="#ccc" strokeWidth="2" strokeDasharray="4" />
            <circle cx="300" cy="100" r="35" fill="#552BBF" opacity="0.9" />
            <text x="300" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Parachain</text>
            {/* Collator */}
            <rect x="285" y="60" width="30" height="10" rx="2" fill="#00B2FF" />
          </g>

          {/* Parachain 3 (Bottom Left) */}
          <g>
            <line x1="200" y1="160" x2="100" y2="220" stroke="#ccc" strokeWidth="2" strokeDasharray="4" />
            <circle cx="100" cy="220" r="35" fill="#552BBF" opacity="0.9" />
            <text x="100" y="225" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Parachain</text>
             {/* Collator */}
             <rect x="85" y="260" width="30" height="10" rx="2" fill="#00B2FF" />
          </g>

          {/* Parachain 4 (Bottom Right) */}
          <g>
            <line x1="200" y1="160" x2="300" y2="220" stroke="#ccc" strokeWidth="2" strokeDasharray="4" />
            <circle cx="300" cy="220" r="35" fill="#552BBF" opacity="0.9" />
            <text x="300" y="225" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Parachain</text>
             {/* Collator */}
             <rect x="285" y="260" width="30" height="10" rx="2" fill="#00B2FF" />
          </g>

          {/* Legend */}
          <g transform="translate(10, 290)">
            <circle cx="0" cy="0" r="4" fill="#E6007A" />
            <text x="10" y="4" fontSize="10" fill="#666">Validator</text>
            <rect x="60" y="-4" width="8" height="8" rx="2" fill="#00B2FF" />
            <text x="75" y="4" fontSize="10" fill="#666">Collator</text>
          </g>
        </svg>
      </div>

      <div className={styles.explanation}>
        <div className={styles.section}>
          <h4 onClick={() => toggleSection('relay')} style={{ cursor: 'pointer' }}>
            Relay Chain {activeSection === 'relay' ? '▼' : '▶'}
          </h4>
          {activeSection === 'relay' && (
            <p>
              The heart of Polkadot. It does not support smart contracts directly but is responsible for the network's shared security, consensus (NPoS), and cross-chain interoperability (XCM). Validators reside here to secure the entire ecosystem.
            </p>
          )}
        </div>

        <div className={styles.section}>
          <h4 onClick={() => toggleSection('para')} style={{ cursor: 'pointer' }}>
            Parachains {activeSection === 'para' ? '▼' : '▶'}
          </h4>
          {activeSection === 'para' && (
            <p>
              Sovereign blockchains that connect to the Relay Chain. They can have their own tokens, governance, and optimize their functionality for specific use cases (DeFi, Identity, Gaming). They benefit from the Relay Chain's shared security.
            </p>
          )}
        </div>

        <div className={styles.section}>
          <h4 onClick={() => toggleSection('roles')} style={{ cursor: 'pointer' }}>
            Key Roles (Validators & Collators) {activeSection === 'roles' ? '▼' : '▶'}
          </h4>
          {activeSection === 'roles' && (
            <p>
              <strong>Validators</strong> (Relay Chain) secure the network by staking DOT and validating proofs.<br />
              <strong>Collators</strong> (Parachains) collect transactions and produce block proofs for validators to verify.
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ArchitectureGuide;
