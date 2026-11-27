import React, { useEffect, useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Monitor,
  QrCode,
  Share,
  Smartphone,
  X,
} from 'lucide-react';
import QRCode from 'qrcode';
import { VERCEL_APP_URL } from '../utils/speech';

function useVercelQrImages(active: boolean) {
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [downloadUrl, setDownloadUrl] = useState<string>('');

  useEffect(() => {
    if (!active) return;
    let cancelled = false;

    const opts = (width: number) => ({
      width,
      margin: 2,
      errorCorrectionLevel: 'H' as const,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    });

    QRCode.toDataURL(VERCEL_APP_URL, opts(320))
      .then((url) => {
        if (!cancelled) setPreviewUrl(url);
      })
      .catch(() => {});

    QRCode.toDataURL(VERCEL_APP_URL, opts(640))
      .then((url) => {
        if (!cancelled) setDownloadUrl(url);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [active]);

  return { previewUrl, downloadUrl };
}

function downloadQrPng(downloadUrl: string) {
  if (!downloadUrl) return;
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'eng-mastery-qr.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const { previewUrl, downloadUrl } = useVercelQrImages(isOpen);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(VERCEL_APP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/55 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="باركود فتح المنصة على الجوال"
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-2xl flex items-center justify-center text-white"
              style={{ background: 'var(--hero-gradient)' }}
            >
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900">
                باركود فتح المنصة على الجوال
              </h3>
              <p className="text-[11px] font-semibold text-slate-500">
                امسح الباركود بكاميرا الهاتف لفتح المنصة فوراً
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق نافذة الباركود"
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="باركود منصة إتقان الإنجليزية"
              className="w-56 h-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xs"
            />
          ) : (
            <div className="w-56 h-56 rounded-2xl bg-slate-200 animate-pulse" />
          )}

          <a
            href={VERCEL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="inline-flex items-center gap-1.5 font-en text-xs font-extrabold text-[var(--brand-primary-dark)] hover:underline"
          >
            <span>{VERCEL_APP_URL}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'تم النسخ ✓' : 'نسخ الرابط'}</span>
          </button>
          <button
            type="button"
            onClick={() => downloadQrPng(downloadUrl || previewUrl)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl text-white text-xs font-extrabold shadow-xs hover:opacity-95 transition cursor-pointer"
            style={{ background: 'var(--hero-gradient)' }}
          >
            <Download className="w-4 h-4" />
            <span>تحميل الباركود PNG</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface PwaInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isInstalled: boolean;
  canNativeInstall: boolean;
  onNativeInstall: () => void;
}

export const PwaInstallModal: React.FC<PwaInstallModalProps> = ({
  isOpen,
  onClose,
  isInstalled,
  canNativeInstall,
  onNativeInstall,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(VERCEL_APP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/55 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="تثبيت المنصة كتطبيق PWA"
    >
      <div
        className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-2xl flex items-center justify-center text-white"
              style={{ background: 'var(--hero-gradient)' }}
            >
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900">
                تثبيت المنصة كتطبيق على جهازك (PWA)
              </h3>
              <p className="text-[11px] font-semibold text-slate-500">
                تعمل بملء الشاشة وبأيقونة مستقلة على الجوال والكمبيوتر
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق نافذة التثبيت"
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isInstalled && (
          <div className="px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-extrabold">
            التطبيق مثبّت ويعمل حالياً بوضع التطبيق المستقل ✓
          </div>
        )}

        {canNativeInstall && (
          <button
            type="button"
            onClick={onNativeInstall}
            className="w-full py-3 px-4 rounded-2xl text-white font-extrabold text-sm shadow-sm hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
            style={{ background: 'var(--hero-gradient)' }}
          >
            <Download className="w-4 h-4" />
            <span>تثبيت التطبيق الآن</span>
          </button>
        )}

        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-teal-600" />
              <span>أندرويد (Chrome / Samsung Internet)</span>
            </div>
            <p className="leading-relaxed">
              اضغط قائمة المتصفح <span className="font-extrabold">⋮</span> في الأعلى، ثم اختر{' '}
              <span className="font-extrabold">تثبيت التطبيق (Install app)</span> أو{' '}
              <span className="font-extrabold">الإضافة إلى الشاشة الرئيسية</span>.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
              <Share className="w-4 h-4 text-indigo-600" />
              <span>آيفون وآيباد (Safari)</span>
            </div>
            <p className="leading-relaxed">
              افتح الرابط في متصفح <span className="font-extrabold">Safari</span>، اضغط زر المشاركة{' '}
              <span className="font-extrabold">⬆️</span> بالأسفل، ثم اختر{' '}
              <span className="font-extrabold">إضافة إلى الشاشة الرئيسية (Add to Home Screen)</span>.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-blue-600" />
              <span>الكمبيوتر (Chrome / Edge)</span>
            </div>
            <p className="leading-relaxed">
              اضغط أيقونة التثبيت <span className="font-extrabold">⊕</span> في شريط العنوان أعلى
              المتصفح أو من القائمة اختر <span className="font-extrabold">تثبيت منصة إتقان الإنجليزية</span>.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
          <span dir="ltr" className="font-en text-xs font-bold text-slate-500 truncate">
            {VERCEL_APP_URL}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition cursor-pointer shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'تم النسخ ✓' : 'نسخ الرابط'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface VercelQrShareCardProps {
  onOpenInstall?: () => void;
}

export const VercelQrShareCard: React.FC<VercelQrShareCardProps> = ({ onOpenInstall }) => {
  const { previewUrl, downloadUrl } = useVercelQrImages(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(VERCEL_APP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 shadow-xs">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] text-xs font-extrabold">
            <QrCode className="w-3.5 h-3.5" />
            <span>الوصول السريع وتثبيت التطبيق</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            باركود المنصة وتثبيتها على كل الأجهزة
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            امسح الباركود بكاميرا أي هاتف أندرويد أو آيفون لفتح رابط المنصة على Vercel مباشرة، أو حمّل صورة الباركود لطباعتها ومشاركتها مع الطلاب، أو ثبّت المنصة كتطبيق مستقل (PWA).
          </p>
          <a
            href={VERCEL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="inline-flex items-center gap-1.5 font-en text-xs sm:text-sm font-extrabold text-[var(--brand-primary-dark)] hover:underline"
          >
            <span>{VERCEL_APP_URL}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ ✓' : 'نسخ الرابط'}</span>
            </button>
            <button
              type="button"
              onClick={() => downloadQrPng(downloadUrl || previewUrl)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-white text-xs font-extrabold shadow-xs hover:opacity-95 transition cursor-pointer"
              style={{ background: 'var(--hero-gradient)' }}
            >
              <Download className="w-3.5 h-3.5" />
              <span>تحميل الباركود PNG</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (onOpenInstall) {
                  onOpenInstall();
                } else if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('eng-open-pwa-install'));
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] border border-[var(--border-soft)] text-xs font-extrabold hover:opacity-90 transition cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>تثبيت التطبيق (PWA)</span>
            </button>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="باركود فتح المنصة على Vercel"
                className="w-40 h-40 rounded-xl bg-white p-1.5 border border-slate-200 mx-auto"
              />
            ) : (
              <div className="w-40 h-40 rounded-xl bg-slate-200 animate-pulse mx-auto" />
            )}
            <div className="text-[11px] font-bold text-slate-500">امسح للفتح على Vercel</div>
          </div>
        </div>
      </div>
    </section>
  );
};
