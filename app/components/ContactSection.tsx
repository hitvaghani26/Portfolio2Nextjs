'use client';

import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { BsArrowUpRight, BsCheck2, BsCopy } from 'react-icons/bs';
import { profile } from '../content';

export function ContactSection() {
  const [kind, setKind] = useState('Freelance project');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ error: boolean; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      setStatus({ error: true, text: 'Could not copy the address. You can use the email link instead.' });
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) {
      setStatus({ error: true, text: 'Please enter your name, email, and a message.' });
      return;
    }
    const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATEID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus({ error: true, text: 'The contact form is currently unavailable. Please email me directly; your message has not been sent.' });
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      const company = String(data.get('company') || '').trim();
      await emailjs.send(serviceId, templateId, {
        name, email, company,
        // Keep the original template's field name compatible with existing EmailJS setup.
        compnay: company,
        projectdesc: `[${kind}]\n${message}`,
        service: kind,
        start: 'To be discussed',
        end: 'To be discussed',
      }, publicKey);
      form.reset();
      setStatus({ error: false, text: 'Thank you. Your message has been sent.' });
    } catch {
      setStatus({ error: true, text: 'Your message could not be sent. Please try again or email me directly. Your text is still here.' });
    } finally {
      setSending(false);
    }
  }

  return <section className="contact-section section-space" id="contact" aria-labelledby="contact-title"><div className="page-width contact-grid">
    <div><p className="eyebrow">05 / Start a conversation</p><h2 id="contact-title">Something to build?<br /><em>Let&apos;s talk.</em></h2><p>A website, a product, or a place on your engineering team. I&apos;d like to hear what you&apos;re working on.</p>
      <div className="contact-email"><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="icon-button" type="button" onClick={copyEmail} title={copied ? 'Email copied' : 'Copy email address'} aria-label={copied ? 'Email copied' : 'Copy email address'}>{copied ? <BsCheck2 /> : <BsCopy />}</button></div>
      <span className="sr-only" role="status">{copied ? 'Email copied to clipboard' : ''}</span>
      <dl className="contact-facts"><div><dt>Based in</dt><dd>Surat, India (UTC+5:30)</dd></div><div><dt>Conversations in</dt><dd>English / German A1, learning</dd></div></dl>
      <a className="text-link" href={`mailto:${profile.email}?subject=CV%20request`}>Request my CV <BsArrowUpRight aria-hidden /></a>
    </div>
    <form onSubmit={submit} className="contact-form">
      <fieldset disabled={sending}><legend>I&apos;m getting in touch about</legend><div className="contact-choices">{['Freelance project', 'Engineering role'].map(option => <label key={option}><input type="radio" name="inquiry" value={option} checked={kind === option} onChange={() => setKind(option)} /><span>{option}</span></label>)}</div>
        <div className="form-pair"><label htmlFor="contact-name">Name<input id="contact-name" name="name" autoComplete="name" required maxLength={100} /></label><label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={200} /></label></div>
        <label htmlFor="contact-company">Company <span className="optional">(optional)</span><input id="contact-company" name="company" autoComplete="organization" maxLength={200} /></label>
        <label htmlFor="contact-message">{kind === 'Freelance project' ? 'What are you planning?' : 'Tell me about the role'}<textarea id="contact-message" name="message" rows={4} required maxLength={5000} placeholder={kind === 'Freelance project' ? 'Your project, priorities, and any timing or budget in mind.' : 'The team, role, location, and working arrangement.'} /></label>
        <button className="button button-dark" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'}<BsArrowUpRight aria-hidden /></button>
      </fieldset>
      <p className="form-note">Your details are used to respond to this inquiry. Messages are delivered through EmailJS.</p>
      {status && <p className={`form-status ${status.error ? 'is-error' : ''}`} role={status.error ? 'alert' : 'status'}>{status.text}</p>}
    </form>
  </div></section>;
}
