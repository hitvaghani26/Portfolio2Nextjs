'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const contactEmail = 'hit.vaghani.dev@gmail.com';
const canSendMessage = Boolean(process.env.NEXT_PUBLIC_SERVICEID && process.env.NEXT_PUBLIC_TEMPLATEID && process.env.NEXT_PUBLIC_PUBLICKEY);
type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Feedback = { type: 'success' | 'error' | 'info'; message: string };
const initialValues: Values = { name: '', email: '', message: '' };

export default function ContactSection() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [copied, setCopied] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const address = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, [copied]);

  function update(field: keyof Values, value: string) {
    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: undefined }));
    setFeedback(null);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
    } catch {
      if (address.current) {
        const range = document.createRange();
        range.selectNodeContents(address.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setFeedback({ type: 'info', message: 'Email address selected. Press Ctrl+C or Command+C to copy it.' });
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSending) return;
    const nextErrors: Errors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!values.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Please enter a valid email address.';
    if (!values.message.trim()) nextErrors.message = 'Tell me a little about what you have in mind.';
    setErrors(nextErrors);
    setFeedback(null);
    const firstError = (['name', 'email', 'message'] as const).find(field => nextErrors[field]);
    if (firstError) {
      form.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${firstError}"]`)?.focus();
      return;
    }

    if (!canSendMessage) {
      const subject = encodeURIComponent(`Website enquiry from ${values.name.trim()}`);
      const body = encodeURIComponent(`${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`);
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setFeedback({ type: 'info', message: `Your email app should open a draft for you to review. If it doesn’t open, you can email me at ${contactEmail}.` });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICEID as string,
        process.env.NEXT_PUBLIC_TEMPLATEID as string,
        { name: values.name.trim(), email: values.email.trim(), compnay: '', projectdesc: values.message.trim(), service: 'Contact Form Inquiry', start: 'As Soon As Possible', end: 'Flexible' },
        process.env.NEXT_PUBLIC_PUBLICKEY as string,
      );
      setValues(initialValues);
      setFeedback({ type: 'success', message: 'Thanks for reaching out. Your message has been sent, and I’ll get back to you as soon as I can.' });
    } catch {
      setFeedback({ type: 'error', message: `Your message couldn’t be sent. Please try again, or email me directly at ${contactEmail}.` });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <section id="contact" aria-labelledby="contact-heading" className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col py-3 lg:col-span-5 lg:py-5">
              <p className="mb-7 font-retail text-xs text-gray-500">Have something in mind?</p>
              <h2 id="contact-heading" className="font-swear-display text-5xl leading-tight md:text-6xl lg:text-7xl">Let’s talk.</h2>
              <p className="mt-6 max-w-xs font-retail text-sm leading-relaxed text-gray-600">For a project, a role, or a question about my work—send me a note.</p>
              <div className="my-8 h-px bg-gray-200" />
              <p className="mb-3 font-retail text-xs text-gray-500">Email me directly</p>
              <div className="flex items-center gap-3"><a ref={address} href={`mailto:${contactEmail}`} className="break-all font-retail text-sm underline decoration-gray-300 underline-offset-4 hover:decoration-black">{contactEmail}</a><button type="button" onClick={copyEmail} aria-label={copied ? 'Email address copied' : 'Copy email address'} className="shrink-0 p-2 text-gray-500 transition-colors hover:text-black"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{copied ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>}</svg></button></div>
              <p role="status" className="mt-2 min-h-5 font-retail text-xs text-gray-500">{copied ? 'Copied to clipboard.' : ''}</p>
              <div className="mt-auto pt-10"><p className="mb-5 font-retail text-xs text-gray-500">Surat, India</p><nav aria-label="Social profiles" className="flex flex-wrap gap-x-5 gap-y-3">{[
                { label: 'GitHub', href: 'https://github.com/hitvaghani26', Icon: BsGithub },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaghani-hit-48487b235/', Icon: BsLinkedin },
                { label: 'X', href: 'https://x.com/VaghaniHit', Icon: BsTwitterX },
                { label: 'Instagram', href: 'https://www.instagram.com/hit.vaghani/', Icon: BsInstagram },
              ].map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} profile (opens in a new tab)`} className="inline-flex items-center gap-2 font-retail text-xs text-gray-600 underline-offset-4 hover:text-black hover:underline"><Icon aria-hidden="true" className="h-3 w-3" /><span>{label}</span></a>)}</nav></div>
            </div>
            <div className="py-3 lg:col-span-7 lg:py-5">
              <h3 className="font-swear-display text-2xl md:text-3xl">Send a message</h3>
              <p className="mb-8 mt-3 max-w-lg font-retail text-sm leading-relaxed text-gray-500">Leave a note below, or use the email link.</p>
              <form ref={form} onSubmit={submit} noValidate aria-label="Contact Hit Vaghani" className="font-retail">
                <fieldset disabled={isSending} className="min-w-0 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div><label htmlFor="contact-name" className="mb-2 block text-xs text-gray-700">Your name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={150} value={values.name} onChange={event => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} className="contact-input" placeholder="Your full name" />{errors.name && <p id="contact-name-error" className="mt-2 text-xs text-red-700">{errors.name}</p>}</div>
                    <div><label htmlFor="contact-email" className="mb-2 block text-xs text-gray-700">Email address <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={event => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className="contact-input" placeholder="you@example.com" />{errors.email && <p id="contact-email-error" className="mt-2 text-xs text-red-700">{errors.email}</p>}</div>
                  </div>
                  <div><label htmlFor="contact-message" className="mb-2 block text-xs text-gray-700">Your message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows={5} required maxLength={5000} value={values.message} onChange={event => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} className="contact-input resize-y" placeholder="A little about your project or the role." />{errors.message && <p id="contact-message-error" className="mt-2 text-xs text-red-700">{errors.message}</p>}</div>
                  <div className="flex flex-wrap items-center justify-between gap-5"><p className="max-w-xs text-xs leading-relaxed text-gray-500">{canSendMessage ? 'Your message will go directly to my inbox.' : 'This opens a draft in your email app. You can review it before sending.'}</p><button type="submit" className="inline-flex items-center gap-5 rounded-full bg-black px-6 py-3.5 text-sm text-white transition-colors hover:bg-gray-800 disabled:cursor-wait disabled:opacity-60">{isSending ? 'Sending…' : canSendMessage ? 'Send message' : 'Open email draft'}<span aria-hidden="true">↗</span></button></div>
                </fieldset>
                {feedback && <div role={feedback.type === 'error' ? 'alert' : 'status'} className={`mt-6 rounded-xl border px-4 py-3 text-sm leading-relaxed ${feedback.type === 'error' ? 'border-red-200 bg-red-50 text-red-800' : 'border-gray-200 bg-white text-gray-700'}`}>{feedback.message}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-gray-200 px-6 py-7"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 font-retail text-xs text-gray-500 md:px-6 lg:px-14"><p>© {new Date().getFullYear()} Hit Vaghani</p><a href="#home" className="inline-flex items-center gap-3 transition-colors hover:text-black">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    </>
  );
}
