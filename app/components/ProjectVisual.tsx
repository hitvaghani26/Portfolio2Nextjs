import type { ProjectVisualKind } from '../data/projects';

const captions: Record<ProjectVisualKind, string> = {
  workflow: 'A shared flow for customers, labs and collection staff',
  performance: 'Recorded comparison for a 60-patient order',
  integration: 'Order submission and status updates',
  content: 'Language-specific content and images',
  mobile: 'Visit photo, location and collection status',
  cms: 'Content managed by the people who maintain it',
};

const headings: Record<ProjectVisualKind, string> = {
  workflow: 'Booking & results',
  performance: 'Order query / Before & after',
  integration: 'Partner integration',
  content: 'Content publishing',
  mobile: 'During the visit',
  cms: 'Content management',
};

export default function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  return (
    <div className={`project-visual project-visual-${kind}`} role="img" aria-label={captions[kind]}>
      <div className="visual-topline"><span>{headings[kind]}</span></div>
      {kind === 'workflow' && (
        <div className="visual-flow">
          {['Register', 'Book', 'Collect', 'Results'].map((step, index) => (
            <div key={step} className="visual-flow-step"><span className="visual-step-number">0{index + 1}</span><span>{step}</span></div>
          ))}
        </div>
      )}
      {kind === 'performance' && (
        <div className="visual-query">
          <div className="visual-query-row"><span>Joined result</span><div className="visual-query-bar visual-query-before" /><b>21,600</b></div>
          <div className="visual-query-row"><span>Focused queries</span><div className="visual-query-bar visual-query-after" /><b>301</b></div>
          <p>Database result rows · documented 60-patient test</p>
        </div>
      )}
      {kind === 'integration' && (
        <div className="visual-integration"><div className="visual-flow">
          {['Storefront', 'Outbox', 'Partner'].map((step, index) => (
            <div key={step} className="visual-flow-step"><span className="visual-step-number">0{index + 1}</span><span>{step}</span></div>
          ))}
        </div><div className="visual-return">← Signed events &amp; reconciliation</div></div>
      )}
      {kind === 'content' && (
        <div className="visual-content"><div className="visual-content-source">Editor<br /><span>Content + media</span></div><div className="visual-language-grid">{['EN', 'KK', 'RU'].map((locale) => <div key={locale}><b>{locale}</b><span className="visual-line" /><span className="visual-line short" /></div>)}</div></div>
      )}
      {kind === 'mobile' && (
        <div className="visual-mobile"><div className="visual-phone"><span className="visual-phone-notch" /><span className="visual-phone-title">Visit details</span>{['Photo', 'Location', 'Collection status'].map((item) => <div key={item} className="visual-phone-row"><span>{item}</span><span aria-hidden="true">✓</span></div>)}</div><p>Capture evidence.<br />Keep the next step clear.</p></div>
      )}
      <p className="visual-caption">{captions[kind]}</p>
    </div>
  );
}
