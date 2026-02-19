import { useEffect } from 'react'
import './HexagonCvaultEstimate.css'

const HexagonCvaultEstimate = () => {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'CVault — Site Structure'

    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)

    return () => {
      document.title = prevTitle
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <div className="estimate-page">
      <div className="topbar">
        <div className="topbar-logos">
          <img src="/images/hexagon-logo.svg" alt="Hexagon" className="topbar-logo hexagon-logo" />
          <span className="topbar-plus">+</span>
          <img src="/images/logo-webflove-dark.png" alt="webf.love" className="topbar-logo webflove-logo" />
        </div>
        <span className="topbar-right">&gt;&gt;&gt;</span>
      </div>

      <div className="heading-area">
        <div className="heading-label">Sitemap</div>
        <div className="heading-title">CVault site estimate</div>
        <div className="heading-sub">
          <span>7 pages</span>
          <span>27 sections total</span>
          <span>For client approval</span>
        </div>
      </div>

      <div className="pages-grid">
        {/* HOME */}
        <div className="page-col">
          <div className="page-card">
            <div className="page-name">Home</div>
            <div className="page-count">8 sections</div>
          </div>
          <div className="section-card">
            <div className="section-name">Hero</div>
            <div className="section-headline">Custody Without Compromise.</div>
            <div className="section-tags">
              <span className="tag">Headline</span>
              <span className="tag">2 CTA</span>
              <span className="tag">Dark bg</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Authority</div>
            <div className="section-headline">Engineered for Permanence.</div>
            <div className="section-tags">
              <span className="tag">Copy</span>
              <span className="tag">6 client types</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Services Overview</div>
            <div className="section-headline">Custody + OTC preview cards</div>
            <div className="section-tags">
              <span className="tag">2 cards</span>
              <span className="tag">Links to pages</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Security Preview</div>
            <div className="section-headline">Security by Design. Not by Marketing.</div>
            <div className="section-tags">
              <span className="tag">Dark bg</span>
              <span className="tag">Teaser</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Client Profile</div>
            <div className="section-headline">Built for Sophisticated Capital.</div>
            <div className="section-tags">
              <span className="tag">Built for / Not for</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Governance Preview</div>
            <div className="section-headline">Institutional Standards.</div>
            <div className="section-tags">
              <span className="tag">4 priorities</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Discretion</div>
            <div className="section-headline">Confidential by Default.</div>
            <div className="section-tags">
              <span className="tag">4 statements</span>
            </div>
          </div>
          <div className="section-card cta">
            <div className="section-name">Contact CTA</div>
            <div className="section-headline">Institutional Enquiries Only</div>
          </div>
        </div>

        {/* CUSTODY */}
        <div className="page-col">
          <div className="page-card">
            <div className="page-name">Custody</div>
            <div className="page-count">3 sections</div>
          </div>
          <div className="section-card">
            <div className="section-name">Hero</div>
            <div className="section-headline">Multi-Layered Custody Architecture</div>
            <div className="section-tags">
              <span className="tag">Dark bg</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Architecture Details</div>
            <div className="section-headline">6 technical pillars</div>
            <div className="section-tags">
              <span className="tag">Multi-sig</span>
              <span className="tag">Air-gap</span>
              <span className="tag">Redundancy</span>
            </div>
          </div>
          <div className="section-card cta">
            <div className="section-name">Contact CTA</div>
            <div className="section-headline">Institutional Enquiries Only</div>
          </div>
        </div>

        {/* OTC */}
        <div className="page-col">
          <div className="page-card">
            <div className="page-name">OTC Execution</div>
            <div className="page-count">3 sections</div>
          </div>
          <div className="section-card">
            <div className="section-name">Hero</div>
            <div className="section-headline">Discrete, Structured Liquidity Access</div>
            <div className="section-tags">
              <span className="tag">Dark bg</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Service Details</div>
            <div className="section-headline">OTC for custody clients only</div>
            <div className="section-tags">
              <span className="tag">4 points</span>
              <span className="tag">No retail</span>
            </div>
          </div>
          <div className="section-card cta">
            <div className="section-name">Contact CTA</div>
            <div className="section-headline">Institutional Enquiries Only</div>
          </div>
        </div>

        {/* SECURITY */}
        <div className="page-col">
          <div className="page-card">
            <div className="page-name">Security Architecture</div>
            <div className="page-count">6 sections</div>
          </div>
          <div className="section-card">
            <div className="section-name">Hero</div>
            <div className="section-headline">Security by Design. Not by Marketing.</div>
            <div className="section-tags">
              <span className="tag">Dark bg</span>
              <span className="tag">Icons</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">No Single Point of Failure</div>
            <div className="section-headline">Distributed governance model</div>
            <div className="section-tags">
              <span className="tag">Pillar 1</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Cold-First Custody</div>
            <div className="section-headline">Hardened offline environments</div>
            <div className="section-tags">
              <span className="tag">Pillar 2</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Human + Cryptographic Controls</div>
            <div className="section-headline">Multi-party authorization</div>
            <div className="section-tags">
              <span className="tag">Pillar 3</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Operational Lean Structure</div>
            <div className="section-headline">Minimal attack surface</div>
            <div className="section-tags">
              <span className="tag">Pillar 4</span>
            </div>
          </div>
          <div className="section-card cta">
            <div className="section-name">Contact CTA</div>
            <div className="section-headline">Institutional Enquiries Only</div>
          </div>
        </div>

        {/* GOVERNANCE */}
        <div className="page-col">
          <div className="page-card">
            <div className="page-name">Governance</div>
            <div className="page-count">3 sections</div>
          </div>
          <div className="section-card">
            <div className="section-name">Hero</div>
            <div className="section-headline">Institutional Standards.</div>
            <div className="section-tags">
              <span className="tag">Dark bg</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Framework Details</div>
            <div className="section-headline">Internal controls + risk procedures</div>
            <div className="section-tags">
              <span className="tag">4 priorities</span>
            </div>
          </div>
          <div className="section-card cta">
            <div className="section-name">Contact CTA</div>
            <div className="section-headline">Institutional Enquiries Only</div>
          </div>
        </div>

        {/* JURISDICTION */}
        <div className="page-col">
          <div className="page-card">
            <div className="page-name">Jurisdiction</div>
            <div className="page-count">3 sections</div>
          </div>
          <div className="section-card">
            <div className="section-name">Hero</div>
            <div className="section-headline">Guernsey. A Jurisdiction of Substance.</div>
            <div className="section-tags">
              <span className="tag">Dark bg</span>
            </div>
          </div>
          <div className="section-card">
            <div className="section-name">Guernsey Positioning</div>
            <div className="section-headline">International finance centre</div>
            <div className="section-tags">
              <span className="tag">3 alignment points</span>
            </div>
          </div>
          <div className="section-card cta">
            <div className="section-name">Contact CTA</div>
            <div className="section-headline">Institutional Enquiries Only</div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="page-col">
          <div className="page-card">
            <div className="page-name">Contact</div>
            <div className="page-count">1 section</div>
          </div>
          <div className="section-card">
            <div className="section-name">Enquiry Form</div>
            <div className="section-headline">Institutional Enquiries Only</div>
            <div className="section-tags">
              <span className="tag">Name</span>
              <span className="tag">Organization</span>
              <span className="tag">Jurisdiction</span>
              <span className="tag">AUM Range</span>
              <span className="tag">+2</span>
            </div>
          </div>
        </div>
      </div>

      {/* SCOPE & ESTIMATE */}
      <div className="scope-section">
        <div className="scope-header">
          <div className="scope-title">Scope & Estimate</div>
        </div>

        <div className="scope-grid">
          <div className="scope-block">
            <div className="scope-block-title">Development</div>
            <div className="scope-rows">
              <div className="scope-row">
                <span className="scope-label">Global components (Nav + Footer)</span>
                <span className="scope-hours">4–6 h</span>
              </div>
              <div className="scope-row">
                <span className="scope-label">Home (8 sections)</span>
                <span className="scope-hours">16–20 h</span>
              </div>
              <div className="scope-row">
                <span className="scope-label">Internal pages × 4 (Custody, OTC, Governance, Jurisdiction)</span>
                <span className="scope-hours">14–19 h</span>
              </div>
              <div className="scope-row">
                <span className="scope-label">Security Architecture</span>
                <span className="scope-hours">8–10 h</span>
              </div>
              <div className="scope-row">
                <span className="scope-label">Contact + form integration</span>
                <span className="scope-hours">3–4 h</span>
              </div>
              <div className="scope-row scope-row-total">
                <span className="scope-label">Total</span>
                <span className="scope-hours">~62 h</span>
              </div>
            </div>
          </div>

          <div className="scope-block">
            <div className="scope-block-title">Optional — requires confirmation</div>
            <div className="scope-rows">
              <div className="scope-row">
                <span className="scope-label">Blog / CMS (collection + list + template + editor)</span>
                <span className="scope-hours">10–14 h</span>
              </div>
              <div className="scope-note">Фінальний час залежить від кількості категорій, полів у пості, наявності фільтрації та вимог до адмін панелі для публікації контенту</div>
              <div className="scope-row">
                <span className="scope-label">Whitepaper gating (form → PDF delivery)</span>
                <span className="scope-hours">4–6 h</span>
              </div>
              <div className="scope-note">Залежить від структури форми, способу доставки PDF та чи потрібна інтеграція з поштовим сервісом</div>
              <div className="scope-row">
                <span className="scope-label">Form integration to CRM / Notion via Make</span>
                <span className="scope-hours">4–8 h</span>
              </div>
            </div>
          </div>

          <div className="scope-block">
            <div className="scope-block-title">Open questions</div>
            <div className="scope-rows">
              <div className="scope-row scope-row-question">
                <span className="scope-label">Blog — скільки категорій? Фільтрація? Load more чи пагінація?</span>
              </div>
              <div className="scope-row scope-row-question">
                <span className="scope-label">Форма — куди летять заявки? Email / CRM / Notion?</span>
              </div>
              <div className="scope-row scope-row-question">
                <span className="scope-label">Whitepaper — підтверджено що входить у скоуп?</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scope-total-bar">
          <div className="scope-total-item">
            <div className="scope-total-label">Base development</div>
            <div className="scope-total-value">~62 h</div>
          </div>
          <div className="scope-total-divider">+</div>
          <div className="scope-total-item">
            <div className="scope-total-label">Blog / CMS (if confirmed)</div>
            <div className="scope-total-value">10–14 h</div>
          </div>
          <div className="scope-total-divider">+</div>
          <div className="scope-total-item">
            <div className="scope-total-label">Whitepaper gating (if confirmed)</div>
            <div className="scope-total-value">4–6 h</div>
          </div>
          <div className="scope-total-divider">+</div>
          <div className="scope-total-item">
            <div className="scope-total-label">Form → CRM integration (if confirmed)</div>
            <div className="scope-total-value">4–8 h</div>
          </div>
          <div className="scope-total-divider">=</div>
          <div className="scope-total-item scope-total-final">
            <div className="scope-total-label">Total</div>
            <div className="scope-total-value">70–90 h</div>
          </div>
        </div>
      </div>

      <div className="bottom-brackets">
        <div className="bracket"></div>
        <div className="bracket"></div>
        <div className="bracket"></div>
        <div className="bracket"></div>
        <div className="bracket"></div>
        <div className="bracket"></div>
        <div className="bracket"></div>
      </div>
    </div>
  )
}

export default HexagonCvaultEstimate
