'use client';
import { useState } from 'react';
export default function CityMeetingPlanner({timezone,city}) {
  const [instant,setInstant]=useState('');
  const date=instant ? new Date(`${instant}Z`) : null;
  const valid=date && !Number.isNaN(date.getTime());
  const format=zone=>new Intl.DateTimeFormat('en',{timeZone:zone,dateStyle:'medium',timeStyle:'short'}).format(date);
  return <div className="border border-outline-variant p-6 max-w-2xl">
    <h3 className="font-headline-md text-xl font-bold mb-3">Meeting time converter</h3>
    <p className="font-body-main text-sm text-on-surface-variant mb-4">Choose a proposed time in UTC to see both local times, including seasonal clock changes. Availability is confirmed separately.</p>
    <label htmlFor="meeting-utc" className="font-body-main font-bold block mb-2">Proposed date and time (UTC)</label>
    <input id="meeting-utc" type="datetime-local" value={instant} onChange={e=>setInstant(e.target.value)} className="border border-outline-variant p-3 w-full" />
    {valid && <dl aria-live="polite" className="font-body-main mt-5 space-y-3"><div><dt className="font-bold">{city} · {timezone}</dt><dd>{format(timezone)}</dd></div><div><dt className="font-bold">Gagan · Noida, India</dt><dd>{format('Asia/Kolkata')}</dd></div></dl>}
  </div>;
}
