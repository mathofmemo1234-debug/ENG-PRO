import { LessonDetailedExplanation, LessonModule, UnitData } from '../data/types';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildWorksheetHtml(
  unit: UnitData,
  lesson: LessonModule,
  includeAnswers: boolean
): string {
  const letters = ['A', 'B', 'C', 'D'];
  const mcqHtml = lesson.worksheet.mcq
    .map(
      (q, idx) => `
      <div class="q-box">
        <div class="q-stem" dir="ltr"><strong>${idx + 1}.</strong> ${escapeHtml(q.stemEn)}</div>
        <div class="q-stem-ar" dir="rtl">${escapeHtml(q.stemAr)}</div>
        <div class="options-grid" dir="ltr">
          ${q.options
            .map(
              (opt, oi) => `
            <div class="opt ${includeAnswers && oi === q.correctIndex ? 'opt-correct' : ''}">
              <span><strong>${letters[oi]})</strong> ${escapeHtml(opt)}</span>
            </div>`
            )
            .join('')}
        </div>
        ${
          includeAnswers
            ? `<div class="ans-note" dir="rtl">✓ الإجابة: <strong>${letters[q.correctIndex]}</strong> — ${escapeHtml(q.explanationAr)}</div>`
            : ''
        }
      </div>`
    )
    .join('');

  const tfHtml = lesson.worksheet.trueFalse
    .map(
      (q, idx) => `
      <div class="q-box">
        <div class="tf-row">
          <div class="q-stem" dir="ltr"><strong>${idx + 1}.</strong> ${escapeHtml(q.statementEn)}</div>
          <div class="tf-boxes" dir="ltr">
            <span class="tf-pill ${includeAnswers && q.answer ? 'opt-correct' : ''}">( True )</span>
            <span class="tf-pill ${includeAnswers && !q.answer ? 'opt-correct' : ''}">( False )</span>
          </div>
        </div>
        <div class="q-stem-ar" dir="rtl">${escapeHtml(q.statementAr)}</div>
        ${
          includeAnswers
            ? `<div class="ans-note" dir="rtl">✓ الإجابة: <strong>${q.answer ? 'True (صواب)' : 'False (خطأ)'}</strong> — ${escapeHtml(q.explanationAr)}</div>`
            : ''
        }
      </div>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8" />
<title>ورقة عمل - Unit ${unit.number} - ${escapeHtml(lesson.lessonsLabel)}</title>
<style>
  body { font-family: 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif; color: #0f172a; margin: 24px; line-height: 1.6; }
  .header-box { border: 2px solid #0d9488; border-radius: 12px; padding: 16px; background: #f0fdfa; margin-bottom: 18px; }
  .header-title { font-size: 20px; font-weight: 800; color: #0f766e; margin: 0 0 6px; }
  .header-sub { font-size: 14px; color: #334155; margin: 0 0 12px; }
  .meta-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
  .meta-table td { border: 1px solid #99f6e4; padding: 6px 10px; font-size: 13px; background: #ffffff; }
  .section-title { background: #0d9488; color: #ffffff; padding: 7px 14px; border-radius: 8px; font-size: 15px; font-weight: 700; margin: 18px 0 10px; }
  .q-box { border: 1px solid #cbd5e1; border-radius: 10px; padding: 10px 14px; margin-bottom: 10px; page-break-inside: avoid; break-inside: avoid; }
  .q-stem { font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px; font-weight: 600; color: #0f172a; text-align: left; }
  .q-stem-ar { font-size: 12px; color: #475569; margin-top: 2px; }
  .options-grid { display: table; width: 100%; margin-top: 6px; font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; }
  .opt { display: inline-block; width: 46%; padding: 4px 8px; margin: 2px 1%; border: 1px solid #e2e8f0; border-radius: 6px; }
  .opt-correct { background: #dcfce7; border-color: #16a34a; font-weight: 700; color: #166534; }
  .tf-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
  .tf-boxes { white-space: nowrap; font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; }
  .tf-pill { border: 1px solid #94a3b8; padding: 2px 8px; border-radius: 6px; margin-left: 4px; display: inline-block; }
  .ans-note { margin-top: 6px; padding: 5px 10px; background: #f0fdf4; border-right: 3px solid #16a34a; font-size: 12px; color: #14532d; }
  @media print { body { margin: 10mm; } }
</style>
</head>
<body>
  <div class="header-box">
    <div class="header-title">ورقة عمل تفاعلية — المنهج المصري (الصف الثالث الإعدادي - الفصل الأول)</div>
    <div class="header-sub">الوحدة ${unit.number}: ${escapeHtml(unit.titleAr)} (${escapeHtml(unit.titleEn)}) | ${escapeHtml(lesson.lessonsLabel)}: ${escapeHtml(lesson.titleAr)} (${escapeHtml(lesson.titleEn)})</div>
    <table class="meta-table">
      <tr>
        <td><strong>اسم الطالب / الطالبة:</strong> .........................................</td>
        <td><strong>التاريخ:</strong> .... / .... / 2026</td>
        <td><strong>الدرجة:</strong> ...... / 15</td>
      </tr>
    </table>
  </div>

  <div class="section-title">أولاً: أسئلة الاختيار من متعدد (10 أسئلة — Multiple Choice Questions)</div>
  ${mcqHtml}

  <div class="section-title">ثانياً: أسئلة الصواب والخطأ (5 أسئلة — True or False)</div>
  ${tfHtml}
</body>
</html>`;
}

export function buildWorksheetPlainText(
  unit: UnitData,
  lesson: LessonModule,
  includeAnswers: boolean
): string {
  const letters = ['A', 'B', 'C', 'D'];
  const lines: string[] = [
    `ورقة عمل - الصف الثالث الإعدادي (الفصل الأول)`,
    `Unit ${unit.number}: ${unit.titleEn} (${unit.titleAr})`,
    `${lesson.lessonsLabel}: ${lesson.titleEn} (${lesson.titleAr})`,
    `اسم الطالب: ____________________   التاريخ: ____/____/2026   الدرجة: ___ / 15`,
    ``,
    `=== أولاً: أسئلة الاختيار من متعدد (10 أسئلة) ===`,
    ``,
  ];

  lesson.worksheet.mcq.forEach((q, i) => {
    lines.push(`${i + 1}. ${q.stemEn}`);
    lines.push(`   (${q.stemAr})`);
    lines.push(
      `   ${q.options.map((o, oi) => `${letters[oi]}) ${o}`).join('   |   ')}`
    );
    if (includeAnswers) {
      lines.push(`   [الإجابة: ${letters[q.correctIndex]}] ${q.explanationAr}`);
    }
    lines.push('');
  });

  lines.push(`=== ثانياً: أسئلة الصواب والخطأ (5 أسئلة) ===`);
  lines.push('');
  lesson.worksheet.trueFalse.forEach((q, i) => {
    lines.push(`${i + 1}. ${q.statementEn}   [ True / False ]`);
    lines.push(`   (${q.statementAr})`);
    if (includeAnswers) {
      lines.push(`   [الإجابة: ${q.answer ? 'True' : 'False'}] ${q.explanationAr}`);
    }
    lines.push('');
  });

  return lines.join('\n');
}

export async function copyWorksheetForWord(
  unit: UnitData,
  lesson: LessonModule,
  includeAnswers: boolean
): Promise<boolean> {
  const html = buildWorksheetHtml(unit, lesson, includeAnswers);
  const plain = buildWorksheetPlainText(unit, lesson, includeAnswers);

  try {
    if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
      const item = new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([plain], { type: 'text/plain' }),
      });
      await navigator.clipboard.write([item]);
      return true;
    }
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(plain);
      return true;
    }
  } catch {
    // Fallback below
  }

  const ta = document.createElement('textarea');
  ta.value = plain;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(ta);
  return ok;
}

export function downloadWordDoc(
  unit: UnitData,
  lesson: LessonModule,
  includeAnswers: boolean
): void {
  const html = buildWorksheetHtml(unit, lesson, includeAnswers);
  const blob = new Blob(['\ufeff', html], {
    type: 'application/msword;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Worksheet_Unit${unit.number}_Part${lesson.partNumber}${includeAnswers ? '_WithKey' : ''}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function printWorksheetPdf(
  unit: UnitData,
  lesson: LessonModule,
  includeAnswers: boolean
): void {
  const html = buildWorksheetHtml(unit, lesson, includeAnswers);
  const win = window.open('', '_blank', 'width=900,height=750');
  if (!win) {
    window.print();
    return;
  }
  win.document.open();
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => {
    win.print();
  }, 350);
}

export function buildLessonExplanationHtml(
  unit: UnitData,
  lesson: LessonModule,
  detail: LessonDetailedExplanation,
  userNote?: string
): string {
  const rulesHtml = detail.bookGrammarRules
    .map((rule) => {
      const usageList = rule.usageEn.map((u) => `<li>${escapeHtml(u)}</li>`).join('');
      const structCards = rule.structures
        .map(
          (st) => `
          <div class="sub-box">
            <div class="label-en" dir="ltr">${escapeHtml(st.labelEn)}</div>
            <div class="formula" dir="ltr">${escapeHtml(st.formulaEn)}</div>
            <p><strong>شرح التركيب:</strong> ${escapeHtml(st.structureAr)}</p>
            <div class="ex" dir="ltr"><strong>e.g.</strong> ${escapeHtml(st.exampleEn)}</div>
            <div class="ex-ar">${escapeHtml(st.exampleAr)}</div>
          </div>`
        )
        .join('');
      const gotItHtml =
        rule.gotItExamples && rule.gotItExamples.length > 0
          ? `<div class="takeaway"><strong>تطبيقات عملية محلولة (Worked Practice):</strong></div>` +
            rule.gotItExamples
              .map(
                (g, gi) => `
                <div class="sub-box">
                  <div dir="ltr" class="ex">${gi + 1}. ${escapeHtml(g.promptEn)} <strong>${escapeHtml(g.bracketWordEn)}</strong></div>
                  <p>${escapeHtml(g.howAr)}</p>
                  <div dir="ltr" class="ex" style="color:#166534;font-weight:700">→ ${escapeHtml(g.answerEn)}</div>
                </div>`
              )
              .join('')
          : '';

      return `
      <div class="box">
        <div class="step-head">${escapeHtml(rule.ruleTitleAr)} <span dir="ltr" class="en-sub">(${escapeHtml(rule.ruleTitleEn)})</span></div>
        <ul dir="ltr" style="text-align:left;font-family:'Segoe UI',Arial,sans-serif;font-size:12px;">${usageList}</ul>
        <p>${escapeHtml(rule.usageArSummary)}</p>
        ${structCards}
        ${gotItHtml}
      </div>`;
    })
    .join('');

  const notesHtml =
    detail.languageNotes && detail.languageNotes.length > 0
      ? `<div class="sec-title">مفاتيح لغوية وفروق دقيقة (Language Mastery Notes)</div>` +
        detail.languageNotes
          .map(
            (n) => `
            <div class="box">
              <div class="label-en" dir="ltr">${escapeHtml(n.titleEn)}</div>
              <div class="formula" dir="ltr">${escapeHtml(n.ruleEn)}</div>
              <p>${escapeHtml(n.structureAr)}</p>
              ${n.examplesEn.map((e) => `<div class="ex" dir="ltr">• ${escapeHtml(e)}</div>`).join('')}
            </div>`
          )
          .join('')
      : '';

  const affixesHtml =
    detail.prefixesSuffixes && detail.prefixesSuffixes.length > 0
      ? `<div class="sec-title">جدول البادئات واللواحق (Prefixes &amp; Suffixes)</div>
        <table>
          <thead><tr><th>الكلمة</th><th>البادئة / اللاحقة</th><th>الوظيفة</th><th>الكلمة الجديدة</th><th>المعنى</th></tr></thead>
          <tbody>${detail.prefixesSuffixes
            .map(
              (r) => `
              <tr>
                <td dir="ltr">${escapeHtml(r.word)}</td>
                <td dir="ltr" style="font-weight:700">${escapeHtml(r.affix)}</td>
                <td>${escapeHtml(r.functionAr)}</td>
                <td dir="ltr" style="font-weight:700">${escapeHtml(r.newWord)}</td>
                <td>${escapeHtml(r.meaningAr)}</td>
              </tr>`
            )
            .join('')}</tbody>
        </table>`
      : '';

  const writingOrSpeakingHtml = detail.writingCorner
    ? `<div class="sec-title">${escapeHtml(detail.writingCorner.titleAr)}</div>
      <div class="box">
        <div class="ex" dir="ltr">${escapeHtml(detail.writingCorner.definitionEn)}</div>
        <ul>${detail.writingCorner.components.map((c) => `<li><strong dir="ltr">${escapeHtml(c.labelEn)}</strong> (${escapeHtml(c.labelAr)}): ${escapeHtml(c.guideAr)}</li>`).join('')}</ul>
        <div class="formula" dir="ltr">${escapeHtml(detail.writingCorner.modelTitleEn)}</div>
        <div class="ex" dir="ltr" style="white-space:pre-line">${escapeHtml(detail.writingCorner.modelTextEn)}</div>
      </div>`
    : detail.speakingQA
    ? `<div class="sec-title">${escapeHtml(detail.speakingQA.titleAr)}</div>
      <div class="box">${detail.speakingQA.pairs
        .map(
          (p) =>
            `<div class="sub-box"><div dir="ltr" class="ex"><strong>Q:</strong> ${escapeHtml(p.qEn)}<br/><strong>A:</strong> ${escapeHtml(p.aEn)}</div><div class="ex-ar">${escapeHtml(p.arSummary)}</div></div>`
        )
        .join('')}</div>`
    : '';

  const dissectionHtml = detail.sentenceDissection
    .map(
      (part) => `
      <tr>
        <td dir="ltr" style="font-weight:700;color:${escapeHtml(part.color)}">${escapeHtml(part.text)}</td>
        <td dir="ltr">${escapeHtml(part.roleEn)}</td>
        <td>${escapeHtml(part.roleAr)}</td>
        <td>${escapeHtml(part.tipAr)}</td>
      </tr>`
    )
    .join('');

  const vocabHtml = lesson.vocab
    .slice(0, 12)
    .map(
      (v) => `
      <tr>
        <td dir="ltr"><strong>${escapeHtml(v.word)}</strong> (${escapeHtml(v.pos)})</td>
        <td>${escapeHtml(v.arabic)}</td>
        <td dir="ltr">${escapeHtml(v.exampleEn)}</td>
      </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8" />
<title>مذكرة الشرح المفصل - Unit ${unit.number} - ${escapeHtml(lesson.lessonsLabel)}</title>
<style>
  body { font-family: 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif; color: #0f172a; margin: 22px; line-height: 1.65; }
  .hero { border: 2px solid #0d9488; border-radius: 12px; padding: 16px; background: #f0fdfa; margin-bottom: 16px; }
  .hero h1 { font-size: 20px; color: #0f766e; margin: 0 0 6px; }
  .hero p { font-size: 13px; color: #334155; margin: 0; }
  .sec-title { background: #0d9488; color: #ffffff; padding: 6px 12px; border-radius: 8px; font-size: 14px; font-weight: 700; margin: 16px 0 8px; }
  .box { border: 1px solid #cbd5e1; border-radius: 10px; padding: 10px 14px; margin-bottom: 10px; page-break-inside: avoid; break-inside: avoid; }
  .sub-box { border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; margin: 6px 0; background: #ffffff; }
  .step-head { font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
  .label-en { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; font-weight: 800; color: #0f766e; text-align: left; }
  .en-sub { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; color: #475569; font-weight: 600; }
  .takeaway { background: #fef3c7; border-right: 3px solid #d97706; padding: 5px 9px; font-size: 12px; font-weight: 700; margin: 6px 0; }
  .ex { font-family: 'Segoe UI', Arial, sans-serif; font-size: 12px; background: #f8fafc; padding: 5px 9px; border-radius: 6px; text-align: left; margin-top: 4px; }
  .ex-ar { font-size: 12px; color: #475569; margin-top: 3px; }
  .formula { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; background: #eef2ff; color: #312e81; padding: 6px 10px; border-radius: 6px; margin: 6px 0; text-align: left; font-size: 12px; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 6px; }
  th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: right; }
  th { background: #f1f5f9; font-weight: 800; }
  .note-box { background: #f5f3ff; border: 1px solid #c4b5fd; border-radius: 10px; padding: 10px 14px; font-size: 13px; }
  @media print { body { margin: 10mm; } }
</style>
</head>
<body>
  <div class="hero">
    <h1>مذكرة الشرح المفصل — ${escapeHtml(lesson.titleAr)}</h1>
    <p>الوحدة ${unit.number}: ${escapeHtml(unit.titleAr)} (${escapeHtml(unit.titleEn)}) | ${escapeHtml(lesson.lessonsLabel)}</p>
  </div>

  <div class="sec-title">أهداف الدرس (Learning Objectives)</div>
  <div class="box">
    <ul>${detail.objectivesAr.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
  </div>

  <div class="sec-title">القواعد النحوية المفصّلة (English Rules + شرح التركيب بالعربية)</div>
  ${rulesHtml}

  ${notesHtml}
  ${affixesHtml}
  ${writingOrSpeakingHtml}

  <div class="sec-title">${escapeHtml(detail.dissectionTitleAr)}</div>
  <table>
    <thead><tr><th>الجزء</th><th>الوظيفة (EN)</th><th>الدور النحوي</th><th>ملاحظة ذكية</th></tr></thead>
    <tbody>${dissectionHtml}</tbody>
  </table>

  <div class="sec-title">أهم المفردات والتراكيب</div>
  <table>
    <thead><tr><th>الكلمة</th><th>المعنى</th><th>مثال من الدرس</th></tr></thead>
    <tbody>${vocabHtml}</tbody>
  </table>

  <div class="sec-title">${escapeHtml(detail.mnemonicTitleAr)} &amp; خريطة الامتحان</div>
  <div class="box">
    <p><strong>شفرة الحفظ:</strong> ${escapeHtml(detail.mnemonicAr)}</p>
    <ul>${detail.examBlueprintAr.map((eb) => `<li><strong>${escapeHtml(eb.questionType)}:</strong> ${escapeHtml(eb.tipAr)}</li>`).join('')}</ul>
  </div>

  ${
    userNote && userNote.trim()
      ? `<div class="sec-title">ملاحظاتي الشخصية على الدرس</div><div class="note-box">${escapeHtml(userNote).replace(/\n/g, '<br/>')}</div>`
      : ''
  }
</body>
</html>`;
}

export function downloadLessonExplanationWord(
  unit: UnitData,
  lesson: LessonModule,
  detail: LessonDetailedExplanation,
  userNote?: string
): void {
  const html = buildLessonExplanationHtml(unit, lesson, detail, userNote);
  const blob = new Blob(['\ufeff', html], {
    type: 'application/msword;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Explanation_Unit${unit.number}_Part${lesson.partNumber}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function printLessonExplanationPdf(
  unit: UnitData,
  lesson: LessonModule,
  detail: LessonDetailedExplanation,
  userNote?: string
): void {
  const html = buildLessonExplanationHtml(unit, lesson, detail, userNote);
  const win = window.open('', '_blank', 'width=920,height=760');
  if (!win) {
    window.print();
    return;
  }
  win.document.open();
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => {
    win.print();
  }, 350);
}
