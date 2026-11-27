import React from 'react';
import { ArrowLeftRight, ArrowRight, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import { DiagramType } from '../data/types';

interface GrammarVisualDiagramProps {
  type: DiagramType;
  data?: Record<string, string | string[]>;
  formulaEn: string;
}

export const GrammarVisualDiagram: React.FC<GrammarVisualDiagramProps> = ({
  type,
  data,
  formulaEn,
}) => {
  if (type === 'active-passive') {
    const activeS = (data?.activeS as string) ?? 'Subject';
    const activeV = (data?.activeV as string) ?? 'Verb';
    const activeO = (data?.activeO as string) ?? 'Object';
    const passiveS = (data?.passiveS as string) ?? 'Object';
    const passiveV = (data?.passiveV as string) ?? 'Aux + be/been + P.P.';
    const passiveBy = (data?.passiveBy as string) ?? 'by Subject';

    return (
      <div className="rounded-2xl border border-[var(--border-soft)] bg-gradient-to-br from-slate-50 to-white p-4 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>مخطط التحويل: من المعلوم إلى المجهول</span>
          <span className="font-en text-[var(--brand-primary)]">Active ⇄ Passive Swap</span>
        </div>
        <div dir="ltr" className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center text-center font-en">
          <div className="rounded-xl bg-indigo-50 border border-indigo-200 px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider text-indigo-500 font-bold">Active Subject</div>
            <div className="text-sm font-bold text-indigo-900">{activeS}</div>
          </div>
          <div className="rounded-xl bg-teal-50 border border-teal-200 px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider text-teal-600 font-bold">Active Verb</div>
            <div className="text-sm font-bold text-teal-900">{activeV}</div>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-300 px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider text-amber-600 font-bold">Object</div>
            <div className="text-sm font-bold text-amber-900">{activeO}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] text-xs font-bold">
            <ArrowLeftRight className="w-4 h-4" />
            المفعول يقفز لبداية الجملة ويتحول الفعل إلى صيغة المجهول
          </div>
        </div>
        <div dir="ltr" className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center text-center font-en">
          <div className="rounded-xl bg-amber-100 border-2 border-amber-400 px-3 py-2 shadow-xs">
            <div className="text-[10px] uppercase tracking-wider text-amber-700 font-bold">New Subject (Object)</div>
            <div className="text-sm font-extrabold text-amber-950">{passiveS}</div>
          </div>
          <div className="rounded-xl bg-emerald-100 border-2 border-emerald-400 px-3 py-2 shadow-xs">
            <div className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">Passive Verb</div>
            <div className="text-sm font-extrabold text-emerald-950">{passiveV}</div>
          </div>
          <div className="rounded-xl bg-slate-100 border border-slate-300 px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Optional Agent</div>
            <div className="text-sm font-semibold text-slate-700">{passiveBy}</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'conditional-chain') {
    const ifPart = (data?.ifPart as string) ?? 'If + Subject + had + P.P.';
    const thenPart = (data?.thenPart as string) ?? 'Subject + would have + P.P.';
    const realityAr = (data?.realityAr as string) ?? 'موقف خيالي عكس ما حدث بالفعل في الماضي';
    return (
      <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/70 to-white p-4 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-indigo-700">
          <span>سلسلة الشرط المستحيل في الماضي (الحالة الثالثة)</span>
          <span className="font-en">Past Unreal Cause ➔ Result</span>
        </div>
        <div dir="ltr" className="flex flex-col md:flex-row items-stretch md:items-center gap-3 font-en">
          <div className="flex-1 rounded-xl bg-white border-2 border-indigo-300 p-3 shadow-xs">
            <div className="text-[11px] font-bold text-indigo-600 mb-1">CONDITION (جملة الشرط — ماضٍ تام)</div>
            <div className="text-sm font-bold text-slate-900">{ifPart}</div>
          </div>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-indigo-500 rotate-90 md:rotate-0" />
          </div>
          <div className="flex-1 rounded-xl bg-white border-2 border-teal-300 p-3 shadow-xs">
            <div className="text-[11px] font-bold text-teal-600 mb-1">RESULT (جواب الشرط — النتيجة المتخيلة)</div>
            <div className="text-sm font-bold text-slate-900">{thenPart}</div>
          </div>
        </div>
        <div className="text-xs bg-amber-50 border border-amber-200 text-amber-900 rounded-xl px-3 py-2 font-medium">
          💡 التفسير الواقعي: {realityAr}
        </div>
      </div>
    );
  }

  if (type === 'modal-meter') {
    const meters = [
      { label: 'must', ar: 'إلزام وقانون 100%', cls: 'bg-indigo-600 text-white', width: 'w-full' },
      { label: 'should', ar: 'نصيحة مستحبة 75%', cls: 'bg-teal-600 text-white', width: 'w-3/4' },
      { label: 'can / can’t', ar: 'سماح / قدرة 50%', cls: 'bg-sky-500 text-white', width: 'w-2/3' },
      { label: 'mustn’t', ar: 'تحريم ومنع قاطع ⛔', cls: 'bg-rose-600 text-white', width: 'w-full' },
    ];
    return (
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 to-white p-4 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
          <span>مقياس قوة الأفعال الناقصة (Modal Verbs Strength Meter)</span>
          <span className="inline-flex items-center gap-1 text-rose-600">
            <ShieldAlert className="w-3.5 h-3.5" /> يتبعها دائماً المصدر inf.
          </span>
        </div>
        <div className="space-y-2">
          {meters.map((m) => (
            <div key={m.label} className="flex items-center gap-3">
              <span dir="ltr" className="font-en w-24 text-xs font-extrabold text-slate-800 shrink-0">
                {m.label}
              </span>
              <div className="flex-1 bg-slate-100 rounded-full h-7 overflow-hidden p-0.5">
                <div className={`${m.width} ${m.cls} h-full rounded-full flex items-center px-3 text-xs font-bold`}>
                  {m.ar}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'sequence-steps') {
    const steps = (data?.steps as string[]) ?? [
      '1. First / Firstly',
      '2. Next / Then / After that',
      '3. Finally / Lastly',
    ];
    return (
      <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/70 to-white p-4 space-y-3">
        <div className="text-xs font-bold text-amber-800">خطوات متسلسلة واضحة (Step-by-Step Blueprint)</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {steps.map((s, idx) => (
            <div
              key={idx}
              dir="ltr"
              className="flex items-start gap-2 bg-white border border-amber-200 rounded-xl p-2.5 shadow-xs font-en text-left"
            >
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <span className="text-xs font-semibold text-slate-800 leading-snug">{s}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'reported-shift') {
    const direct = (data?.direct as string) ?? 'Ahmed said to me, "I can solve it now."';
    const indirect = (data?.indirect as string) ?? 'Ahmed told me that he could solve it then.';
    const shifts = (data?.shifts as string[]) ?? ['said to -> told', 'I -> he', 'can -> could', 'now -> then'];
    return (
      <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/80 to-white p-4 space-y-3">
        <div className="text-xs font-bold text-violet-800">مخطط التحويل إلى الكلام غير المباشر (Backshift Engine)</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3" dir="ltr">
          <div className="rounded-xl bg-white border-2 border-violet-300 p-3 text-left font-en">
            <div className="text-[11px] font-bold text-violet-600 mb-1">DIRECT SPEECH (كلام مباشر)</div>
            <div className="text-sm font-bold text-slate-900">{direct}</div>
          </div>
          <div className="rounded-xl bg-emerald-50 border-2 border-emerald-400 p-3 text-left font-en">
            <div className="text-[11px] font-bold text-emerald-700 mb-1">REPORTED SPEECH (كلام منقول)</div>
            <div className="text-sm font-bold text-emerald-950">{indirect}</div>
          </div>
        </div>
        <div dir="ltr" className="flex flex-wrap gap-2">
          {shifts.map((sh) => (
            <span
              key={sh}
              className="font-en text-xs font-bold px-2.5 py-1 rounded-full bg-violet-100 text-violet-900 border border-violet-200"
            >
              {sh}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'timeline') {
    return (
      <div className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-indigo-50 p-4 space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-900">
          <Clock className="w-4 h-4 text-sky-600" />
          خط الزمن البصري (Time Progression)
        </div>
        <div dir="ltr" className="relative pt-4 pb-2 px-4">
          <div className="h-1.5 bg-sky-200 rounded-full w-full" />
          <div className="flex justify-between items-center -mt-3.5 text-[11px] font-en font-bold">
            <div className="flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-amber-500 border-2 border-white shadow" />
              <span className="mt-1 text-amber-800">Past (الماضي)</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-6 h-6 rounded-full bg-teal-600 border-2 border-white shadow ring-4 ring-teal-200" />
              <span className="mt-1 text-teal-900">NOW (الحاضر)</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-white shadow" />
              <span className="mt-1 text-indigo-800">Future (المستقبل)</span>
            </div>
          </div>
        </div>
        <div dir="ltr" className="text-center font-en text-xs font-bold text-slate-700 bg-white/80 rounded-lg py-1.5 px-3 border border-sky-200">
          {formulaEn}
        </div>
      </div>
    );
  }

  // Default: sentence-blocks / tense-card
  return (
    <div className="rounded-2xl border border-[var(--border-soft)] bg-gradient-to-r from-[var(--surface-muted)] to-white p-4">
      <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand-primary-dark)] mb-2">
        <CheckCircle2 className="w-4 h-4" />
        القاعدة البصرية المركزة
      </div>
      <div
        dir="ltr"
        className="font-en text-sm font-bold text-slate-900 bg-white border border-[var(--border-soft)] rounded-xl px-4 py-2.5 text-center shadow-xs"
      >
        {formulaEn}
      </div>
    </div>
  );
};
