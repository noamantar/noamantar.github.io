const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FirmsNew-63VJ-HM1.js","assets/react-vendor-xAhqJu7B.js","assets/ApexNew-Bww6G5Go.js","assets/index-CM-V3N5-.js","assets/query-vendor-iefLz-8z.js","assets/supabase-vendor-DW0Ocl7u.js","assets/index-CWOh4V4Z.css","assets/SEOHead-CVGFAcvu.js","assets/NotFound-DuS9xH-B.js","assets/Header-06XPzUpo.js","assets/useCanonicalFirmPageData-BC5pylGP.js","assets/useCanonicalFirmRules-2wOk_-iq.js","assets/tieredRuleFormat-Ce4XlkHX.js","assets/payoutStandard-DfQNmVcj.js","assets/fetch-C8WajeON.js","assets/canonicalRules-yhGyuGJm.js","assets/products-CPPrr9Az.js","assets/payoutSelectedFirst-DxiqNmtu.js","assets/payoutPlainLanguage-CCLa1IXs.js","assets/AccountCatalogCarousel-D6dFOZ7X.js","assets/trackSummaryRegistry-Dz3P_U6j.js","assets/index-BVvSs3wn.js","assets/useIntersectionObserver-DSH7vrcN.js","assets/use-mobile-Bxpkyd_4.js","assets/wallet-B1oDsbsb.js","assets/CompareView-BJkpzFlO.js","assets/switch-CDzWUzgN.js","assets/index-CAFpbxuf.js","assets/FactValue-Kx6JDzKH.js","assets/useCanonicalComparison-zPs2Ajqq.js","assets/evaluationCardStandard-tKfyyGpX.js","assets/info-Cj6OQ_nj.js","assets/dialog-CH3ddjUf.js","assets/index-qGRoS8L7.js","assets/chevron-down-BINT2q_X.js","assets/lightbulb-Bc_MLhjz.js","assets/companyIcons-D-m_uiIX.js","assets/sparkles-Com4n3m2.js","assets/repeat-BHAY3C1A.js","assets/clock-CPZQPnSf.js","assets/percent-C4p64ghg.js","assets/play-CR_j4D1h.js","assets/triangle-alert-BHzFJ0J4.js","assets/circle-help-BNL45gvD.js","assets/calendar-days-Br-3GviR.js","assets/filters-DYbR_De5.js","assets/git-compare-C1P00-5y.js","assets/monitor-sAQRtm6T.js","assets/chevron-up-DAXjtAae.js","assets/badge-percent-Cv9uNyEj.js","assets/rotate-ccw-DTls-a_y.js","assets/external-link-Coi57wYy.js","assets/chevron-left-D72jwMNh.js","assets/useExternalRating-DffohQVo.js","assets/useFirmUpdates-D2KWXgfi.js","assets/firmUpdates-DN9rTqKp.js","assets/partnerLinks-DsRuYxId.js","assets/derivedRuleValues-Doyg_K06.js","assets/takeProfitCanonical-Mx4B0APl.js","assets/useLucidCanonicalProduct-DtJwZfjR.js","assets/LucidDirectAccountCatalog-Ee83O_0C.js","assets/TopstepAccountsSection-eSjoFDZQ.js","assets/button-CzEkH7vt.js","assets/payoutBulenoxMomentum-CY0JReIL.js","assets/FundedNextFlexAccountCatalog-IaRSOb5z.js","assets/tabs-Dl80QgmR.js","assets/index-vmTDOUmY.js","assets/index-Ba0LObUC.js","assets/calendar-clock-BWf6GKA_.js","assets/payoutTakeProfit-ZYS3sb7d.js","assets/opinions-CBJ3lYbE.js","assets/payoutQualifyingCycle-C-Usztry.js","assets/useToolPromotion-BdLyXTZp.js","assets/ui-BGbHnmGN.js","assets/useMonitorCheck-BFuQwSoT.js","assets/PageNav-Nga_lA1c.js","assets/index-B2WdsOss.js","assets/CompareTable-B-f3jaDs.js","assets/ui-72tFE2Nh.js","assets/SeoAccountVariantsBlock-Z99Cf2PR.js","assets/firm-new-BS7v2L2J.css","assets/ForeignNotFound-CApvGdI7.js"])))=>i.map(i=>d[i]);
import{aM as R,aT as w,aU as N,aC as f,s as v,aV as T,aW as A,H as z,aX as W,R as c,U as d,aI as y,_ as a}from"./index-CM-V3N5-.js";import{n as P,r as u,j as r,h as b,i as h,u as C,N as x}from"./react-vendor-xAhqJu7B.js";import{l as g}from"./index-B2WdsOss.js";import{u as F}from"./query-vendor-iefLz-8z.js";import"./supabase-vendor-DW0Ocl7u.js";const k=`\r
import { Toaster } from "@/components/ui/toaster";\r
import { Toaster as Sonner } from "@/components/ui/sonner";\r
import { TooltipProvider } from "@/components/ui/tooltip";\r
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\r
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";\r
import LegacyRedirect from "./components/LegacyRedirect";\r
import { useState, useEffect, lazy, Suspense } from "react";\r
import { Helmet, HelmetProvider } from "react-helmet-async";\r
import { AccessibilityProvider } from "./contexts/AccessibilityContext";\r
const AccessibilityWidget = lazyWithRetry(() => import("./components/AccessibilityWidget"));\r
import CookieConsentBanner from "./components/CookieConsentBanner";\r
const SmartAdvisor = lazyWithRetry(() => import("./components/SmartAdvisor/SmartAdvisor"));\r
import "@/components/home-new/styles/base.css";\r
import "@/components/home-new/styles/00-header.css";\r
import "@/components/home-new/styles/12-footer.css";\r
import "@/components/home-new/styles/99-mobile.css";\r
import Header from "@/components/home-new/sections/Header";\r
import Footer from "@/components/home-new/sections/Footer";\r
import BotFab from "@/components/home-new/BotFab";\r
import { findArticle } from "@/content/blog";\r
import PromotionLiveSync from "./components/PromotionLiveSync";\r
import { RETIRED_PRESENTATION_ROUTE } from "./lib/retiredPresentationRoute";\r
\r
import { lazyWithRetry } from "./lib/lazyWithRetry";\r
import useScrollToTop from "./hooks/useScrollToTop";\r
import useScrollAnchor from "./hooks/useScrollAnchor";\r
import usePrefetchRoutes from "./hooks/usePrefetchRoutes";\r
import useCaseNormalizeRedirect from "./hooks/useCaseNormalizeRedirect";\r
import usePageTracking from "./hooks/usePageTracking";\r
import { initMeasurement } from "./lib/analytics/measurement";\r
import { ADVISOR_DIRECT_PATH, PUBLIC_ADVISOR_ENABLED } from "./lib/ai/advisorVisibility";\r
import { CALC_PAGES } from "./content/calculators/calcPages";\r
import { FOREIGN_LOCALES, splitLocale } from "./i18n/config";\r
import { LocaleProvider } from "./i18n/LocaleContext";\r
import BackToTop from "./components/BackToTop";\r
import FabTuck from "./components/FabTuck";\r
import CopyGuard from "./components/CopyGuard";\r
\r
// Lazy-loaded routes for better initial bundle size\r
const Index = lazyWithRetry(() => import("./pages/Index"));\r
const IndexV2 = lazyWithRetry(() => import("./pages/IndexV2"));\r
const HomeLab = lazyWithRetry(() => import("./pages/HomeLab"));\r
const ApexRedesigned = lazyWithRetry(() => import("./pages/ApexRedesigned"));\r
/** /apex-v2 (legacy data) → /apex, query + hash preserved. */\r
const ApexV2Redirect = () => {\r
  const { search, hash } = useLocation();\r
  return <LegacyRedirect to={\`/apex\${search}\${hash}\`} />;\r
};\r
const Bulenox = lazyWithRetry(() => import("./pages/Bulenox"));\r
const TakeProfit = lazyWithRetry(() => import("./pages/TakeProfit"));\r
const BlogIndex = lazyWithRetry(() => import("./pages/blog/BlogIndex"));\r
const BlogArticlePage = lazyWithRetry(() => import("./pages/blog/BlogArticlePage"));\r
const Lucid = lazyWithRetry(() => import("./pages/Lucid"));\r
const FTMO = lazyWithRetry(() => import("./pages/FTMO"));\r
\r
const TopStep = lazyWithRetry(() => import("./pages/TopStep"));\r
const FundedNext = lazyWithRetry(() => import("./pages/FundedNext"));\r
const MatchingQuiz = lazyWithRetry(() => import("./pages/MatchingQuiz"));\r
const PersonalQuiz = lazyWithRetry(() => import("./pages/PersonalQuiz"));\r
const About = lazyWithRetry(() => import("./pages/About"));\r
const FAQ = lazyWithRetry(() => import("./pages/FAQ"));\r
const Auth = lazyWithRetry(() => import("./pages/Auth"));\r
const ResetPassword = lazyWithRetry(() => import("./pages/ResetPassword"));\r
const Courses = lazyWithRetry(() => import("./pages/Courses"));\r
const FreeCourse = lazyWithRetry(() => import("./pages/FreeCourse"));\r
const CourseContent = lazyWithRetry(() => import("./pages/CourseContent"));\r
const FullCourse = lazyWithRetry(() => import("./pages/FullCourse"));\r
const OrderFlowCourse = lazyWithRetry(() => import("./pages/OrderFlowCourse"));\r
const ComparisonV2 = lazyWithRetry(() => import("./pages/ComparisonV2"));\r
const HeadToHead = lazyWithRetry(() => import("./pages/HeadToHead"));\r
const ComparisonV2Redirect = () => { const { search } = useLocation(); return <Navigate to={\`/comparison\${search}\`} replace />; };\r
const Contact = lazyWithRetry(() => import("./pages/Contact"));\r
const PrivacyPolicy = lazyWithRetry(() => import("./pages/PrivacyPolicy"));\r
const TermsOfService = lazyWithRetry(() => import("./pages/TermsOfService"));\r
const Terms = lazyWithRetry(() => import("./pages/Terms"));\r
const LegalDisclaimer = lazyWithRetry(() => import("./pages/LegalDisclaimer"));\r
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));\r
const Dashboard = lazyWithRetry(() => import("./pages/Dashboard"));\r
const AdminDashboard = lazyWithRetry(() => import("./pages/AdminDashboard"));\r
const AdminFirms = lazyWithRetry(() => import("./pages/admin/AdminFirms"));\r
const AdminFirmEdit = lazyWithRetry(() => import("./pages/admin/AdminFirmEdit"));\r
const AdminLoyalty = lazyWithRetry(() => import("./pages/admin/AdminLoyalty"));\r
const AdminRules = lazyWithRetry(() => import("./pages/admin/AdminRules"));\r
const AdminMonitor = lazyWithRetry(() => import("./pages/admin/AdminMonitor"));\r
const AdminBotQuestions = lazyWithRetry(() => import("./pages/admin/AdminBotQuestions"));\r
const AdminExternalRatings = lazyWithRetry(() => import("./pages/admin/AdminExternalRatings"));\r
const AdminMentorship = lazyWithRetry(() => import("./pages/admin/AdminMentorship"));\r
const AdminSalesCall = lazyWithRetry(() => import("./pages/admin/AdminSalesCall"));\r
const AdminCrmDashboard = lazyWithRetry(() => import("./pages/admin/AdminCrmDashboard"));\r
\r
const Promotions = lazyWithRetry(() => import("./pages/Promotions"));\r
const PromotionsV2 = lazyWithRetry(() => import("./pages/PromotionsV2"));\r
const AntarLinks = lazyWithRetry(() => import("./pages/AntarLinks"));\r
const Verify = lazyWithRetry(() => import("./pages/Verify"));\r
const AccessibilityStatement = lazyWithRetry(() => import("./pages/AccessibilityStatement"));\r
const AITestPage = lazyWithRetry(() => import("./pages/AITestPage"));\r
const EconomicCalendar = lazyWithRetry(() => import("./pages/EconomicCalendar"));\r
const BotPlayground = lazyWithRetry(() => import("./pages/BotPlayground"));\r
const HomeNew = lazyWithRetry(() => import("./pages/HomeNew"));\r
const LegalNew = lazyWithRetry(() => import("./pages/LegalNew"));\r
const FaqNew = lazyWithRetry(() => import("./pages/FaqNew"));\r
const ContactNew = lazyWithRetry(() => import("./pages/ContactNew"));\r
const FreeCourseNew = lazyWithRetry(() => import("./pages/FreeCourseNew"));\r
const IntroCourseNew = lazyWithRetry(() => import("./pages/IntroCourseNew"));\r
const FullCourseNew = lazyWithRetry(() => import("./pages/FullCourseNew"));\r
const ThankYouNew = lazyWithRetry(() => import("./pages/ThankYouNew"));\r
const CoursesNew = lazyWithRetry(() => import("./pages/CoursesNew"));\r
const VideosNew = lazyWithRetry(() => import("./pages/VideosNew"));\r
const ToolsNew = lazyWithRetry(() => import("./pages/ToolsNew"));\r
const GlossaryNew = lazyWithRetry(() => import("./pages/GlossaryNew"));\r
const AboutNew = lazyWithRetry(() => import("./pages/AboutNew"));\r
const BotEvaluation = lazyWithRetry(() => import("./pages/BotEvaluation"));\r
const PresentationPlatformsMap = lazyWithRetry(() => import("./pages/PresentationPlatformsMap"));\r
const CourseTerms = lazyWithRetry(() => import("./pages/CourseTerms"));\r
const CourseThankYou = lazyWithRetry(() => import("./pages/CourseThankYou"));\r
const FullCourseThankYou = lazyWithRetry(() => import("./pages/FullCourseThankYou"));\r
const OrderFlowCourseThankYou = lazyWithRetry(() => import("./pages/OrderFlowCourseThankYou"));\r
const NostroCourse = lazyWithRetry(() => import("./pages/NostroCourse"));\r
const BookmapGuide = lazyWithRetry(() => import("./pages/BookmapGuide"));\r
const AtasGuide = lazyWithRetry(() => import("./pages/AtasGuide"));\r
const ReplikantoGuide = lazyWithRetry(() => import("./pages/ReplikantoGuide"));\r
const TradeSyncerGuide = lazyWithRetry(() => import("./pages/TradeSyncerGuide"));\r
const TradeGexGuide = lazyWithRetry(() => import("./pages/TradeGexGuide"));\r
const TradeZellaGuide = lazyWithRetry(() => import("./pages/TradeZellaGuide"));\r
const FXReplayGuide = lazyWithRetry(() => import("./pages/FXReplayGuide"));\r
const TradingViewGuide = lazyWithRetry(() => import("./pages/TradingViewGuide"));\r
const TopstepXGuide = lazyWithRetry(() => import("./pages/TopstepXGuide"));\r
const WiseGuide = lazyWithRetry(() => import("./pages/WiseGuide"));\r
const Calculators = lazyWithRetry(() => import("./pages/Calculators"));\r
const PayoutOdds = lazyWithRetry(() => import("./pages/PayoutOdds"));\r
const Platforms = lazyWithRetry(() => import("./pages/Platforms"));\r
const NinjaTraderGuide = lazyWithRetry(() => import("./pages/NinjaTraderGuide"));\r
const DeepChartsGuide = lazyWithRetry(() => import("./pages/DeepChartsGuide"));\r
const Academy = lazyWithRetry(() => import("./pages/academy/Academy"));\r
const AcademyVideos = lazyWithRetry(() => import("./pages/academy/AcademyVideos"));\r
const AcademyVideoDetail = lazyWithRetry(() => import("./pages/academy/AcademyVideoDetail"));\r
const AcademyTools = lazyWithRetry(() => import("./pages/academy/AcademyTools"));\r
const AcademyGlossary = lazyWithRetry(() => import("./pages/academy/AcademyGlossary"));\r
const GlossaryTermPage = lazyWithRetry(() => import("./pages/academy/GlossaryTermPage"));\r
const CalculatorPage = lazyWithRetry(() => import("./pages/CalculatorPage"));\r
const ApexNew = lazyWithRetry(() => import("./pages/ApexNew"));\r
const TakeProfitNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.TakeProfitNew })));\r
const LucidNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.LucidNew })));\r
const TopStepNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.TopStepNew })));\r
const ComparisonNew = lazyWithRetry(() => import("./pages/ComparisonNew"));\r
const HeadToHeadNew = lazyWithRetry(() => import("./pages/HeadToHeadNew"));\r
const PromotionsNew = lazyWithRetry(() => import("./pages/PromotionsNew"));\r
const PlatformsNew = lazyWithRetry(() => import("./pages/PlatformsNew"));\r
const DeepChartsGuideNew = lazyWithRetry(() => import("./pages/DeepChartsGuideNew"));\r
const TopstepXGuideNew = lazyWithRetry(() => import("./pages/TopstepXGuideNew"));\r
const WiseGuideNew = lazyWithRetry(() => import("./pages/WiseGuideNew"));\r
const AtasGuideNew = lazyWithRetry(() => import("./pages/AtasGuideNew"));\r
const BookmapGuideNew = lazyWithRetry(() => import("./pages/BookmapGuideNew"));\r
const FxReplayGuideNew = lazyWithRetry(() => import("./pages/FxReplayGuideNew"));\r
const NinjaTraderGuideNew = lazyWithRetry(() => import("./pages/NinjaTraderGuideNew"));\r
const ReplikantoGuideNew = lazyWithRetry(() => import("./pages/ReplikantoGuideNew"));\r
const TradeGexGuideNew = lazyWithRetry(() => import("./pages/TradeGexGuideNew"));\r
const TradeSyncerGuideNew = lazyWithRetry(() => import("./pages/TradeSyncerGuideNew"));\r
const TradeZellaGuideNew = lazyWithRetry(() => import("./pages/TradeZellaGuideNew"));\r
const TradingViewGuideNew = lazyWithRetry(() => import("./pages/TradingViewGuideNew"));\r
const BulenoxNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.BulenoxNew })));\r
const FtmoNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.FtmoNew })));\r
const FundedNextNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.FundedNextNew })));\r
const TopOneNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.TopOneNew })));\r
const FundedFuturesFamilyNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.FundedFuturesFamilyNew })));\r
const MyFundedFuturesNew = lazyWithRetry(() => import("./pages/FirmsNew").then((m) => ({ default: m.MyFundedFuturesNew })));\r
const AcademyNew = lazyWithRetry(() => import("./pages/AcademyNew"));\r
const BlogNew = lazyWithRetry(() => import("./pages/BlogNew"));\r
const ArticleNew = lazyWithRetry(() => import("./pages/ArticleNew"));\r
const VideoNew = lazyWithRetry(() => import("./pages/VideoNew"));\r
// the foreign-language site (/en/...), hidden while it is built: see docs/i18n-plan.md\r
const ForeignSite = lazyWithRetry(() => import("./i18n/ForeignSite"));\r
\r
\r
// the same dark ground as index.html's first frame, so a page still loading its code doesn't flash white\r
const PageFallback = () => <div className="min-h-screen bg-[#12161f]" />;\r
\r
/**\r
 * SmartAdvisor mounting is deferred until the user interacts (mouse/touch/scroll/key)\r
 * or 5 seconds elapse — whichever comes first. This keeps the initial JS bundle small\r
 * and improves INP / TBT on mobile.\r
 */\r
const DeferredSmartAdvisor = () => {\r
  const [shouldMount, setShouldMount] = useState(false);\r
\r
  useEffect(() => {\r
    if (shouldMount) return;\r
\r
    let timeoutId: ReturnType<typeof setTimeout>;\r
    const mount = () => setShouldMount(true);\r
\r
    const events: (keyof WindowEventMap)[] = ['mousemove', 'touchstart', 'scroll', 'keydown', 'click'];\r
    events.forEach((evt) => window.addEventListener(evt, mount, { once: true, passive: true } as any));\r
\r
    // Fallback: mount after 5s even without interaction so the icon appears\r
    timeoutId = setTimeout(mount, 5000);\r
\r
    return () => {\r
      clearTimeout(timeoutId);\r
      events.forEach((evt) => window.removeEventListener(evt, mount));\r
    };\r
  }, [shouldMount]);\r
\r
  if (!shouldMount) return null;\r
\r
  return (\r
    <Suspense fallback={null}>\r
      <SmartAdvisor />\r
    </Suspense>\r
  );\r
};\r
\r
/**\r
 * AccessibilityWidget is deferred 2s after initial load — it's never in the\r
 * initial viewport and shouldn't compete with hero rendering.\r
 */\r
const DeferredAccessibilityWidget = () => {\r
  const [shouldMount, setShouldMount] = useState(false);\r
\r
  useEffect(() => {\r
    const t = setTimeout(() => setShouldMount(true), 2000);\r
    return () => clearTimeout(t);\r
  }, []);\r
\r
  if (!shouldMount) return null;\r
\r
  return (\r
    <Suspense fallback={null}>\r
      <AccessibilityWidget />\r
    </Suspense>\r
  );\r
};\r
\r
const AppContent = () => {\r
  const { pathname } = useLocation();\r
  useCaseNormalizeRedirect();\r
  useScrollToTop();\r
  useScrollAnchor();\r
  usePrefetchRoutes();\r
  usePageTracking();\r
\r
  useEffect(() => {\r
    initMeasurement();\r
  }, []);\r
  \r
  \r
  // the address's language reaches the site-wide widgets too (cookie banner, accessibility, back to top)\r
  return (\r
    <LocaleProvider locale={splitLocale(pathname).locale}>\r
      <Suspense fallback={<PageFallback />}>\r
        <Routes>\r
          {/* Standalone pages without header/footer */}\r
          <Route path="/academy/glossary/:termId" element={<GlossaryTermPage />} />\r
          <Route path="/matching-quiz" element={<MatchingQuiz />} />\r
          <Route path="/calculators" element={<Calculators />} />\r
          <Route path="/calculators/payout-odds" element={<PayoutOdds />} />\r
          {CALC_PAGES.map((c) => (\r
            <Route key={c.slug} path={\`/calculators/\${c.slug}\`} element={<CalculatorPage page={c} />} />\r
          ))}\r
          <Route path={ADVISOR_DIRECT_PATH} element={<BotPlayground />} />\r
          <Route path="/bot-eval" element={<BotEvaluation />} />\r
          <Route path={RETIRED_PRESENTATION_ROUTE.path} element={<LegacyRedirect to={RETIRED_PRESENTATION_ROUTE.destination} />} />\r
          <Route path="/platforms-map" element={<PresentationPlatformsMap />} />\r
          <Route path="/course-terms" element={<CourseTerms />} />\r
          <Route path="/course-thank-you" element={<ThankYouNew page="course" />} />\r
          <Route path="/full-course-thank-you" element={<ThankYouNew page="full-course" />} />\r
          <Route path="/orderflow-course-thank-you" element={<ThankYouNew page="orderflow-course" />} />\r
          <Route path="/auth" element={<Auth />} />\r
          <Route path="/reset-password" element={<ResetPassword />} />\r
          \r
          \r
          {/* LAUNCH SWAP: the live addresses render the new design (the old pages stay below, unrouted, for rollback) */}\r
          <Route path="/" element={<HomeNew />} />\r
          <Route path="/apex" element={<ApexNew />} />\r
          <Route path="/take-profit" element={<TakeProfitNew />} />\r
          <Route path="/lucid" element={<LucidNew />} />\r
          <Route path="/top-step" element={<TopStepNew />} />\r
          <Route path="/bulenox" element={<BulenoxNew />} />\r
          <Route path="/ftmo" element={<FtmoNew />} />\r
          <Route path="/funded-next" element={<FundedNextNew />} />\r
          {/* new firms at their final address; a 404 for visitors until prop_firms.is_public */}\r
          <Route path="/top-one" element={<TopOneNew />} />\r
          <Route path="/funded-futures-family" element={<FundedFuturesFamilyNew />} />\r
          <Route path="/my-funded-futures" element={<MyFundedFuturesNew />} />\r
          <Route path="/comparison" element={<ComparisonNew />} />\r
          <Route path="/comparison/head-to-head" element={<HeadToHeadNew />} />\r
          <Route path="/promotions" element={<PromotionsNew />} />\r
          <Route path="/platforms" element={<PlatformsNew />} />\r
          <Route path="/academy" element={<AcademyNew />} />\r
          <Route path="/blog" element={<BlogNew />} />\r
          <Route path="/academy/videos/:id" element={<VideoNew />} />\r
          <Route path="/deepcharts-guide" element={<DeepChartsGuideNew />} />\r
          <Route path="/topstepx-guide" element={<TopstepXGuideNew />} />\r
          <Route path="/wise-guide" element={<WiseGuideNew />} />\r
          <Route path="/atas-guide" element={<AtasGuideNew />} />\r
          <Route path="/bookmap-guide" element={<BookmapGuideNew />} />\r
          <Route path="/ninjatrader-guide" element={<NinjaTraderGuideNew />} />\r
          <Route path="/tradingview-guide" element={<TradingViewGuideNew />} />\r
          <Route path="/fxreplay-guide" element={<FxReplayGuideNew />} />\r
          <Route path="/tradegex-guide" element={<TradeGexGuideNew />} />\r
          <Route path="/replikanto-guide" element={<ReplikantoGuideNew />} />\r
          <Route path="/tradesyncer-guide" element={<TradeSyncerGuideNew />} />\r
          <Route path="/tradezella-guide" element={<TradeZellaGuideNew />} />\r
          <Route path="/academy/videos" element={<VideosNew />} />\r
          <Route path="/academy/tools" element={<ToolsNew />} />\r
          <Route path="/academy/glossary" element={<GlossaryNew />} />\r
          <Route path="/courses" element={<CoursesNew />} />\r
          <Route path="/faq" element={<FaqNew />} />\r
          <Route path="/privacy-policy" element={<LegalNew page="privacy-policy" />} />\r
          <Route path="/terms-of-service" element={<LegalNew page="terms-of-service" />} />\r
          <Route path="/terms" element={<LegalNew page="terms" />} />\r
          <Route path="/legal-disclaimer" element={<LegalNew page="legal-disclaimer" />} />\r
          <Route path="/accessibility" element={<LegalNew page="accessibility" />} />\r
          <Route path="/blog/:slug" element={<BlogArticleSwitch />} />\r
          <Route path="/contact" element={<ContactNew />} />\r
          <Route path="/about" element={<AboutNew />} />\r
          <Route path="/nostro-course" element={<FreeCourseNew />} />\r
          <Route path="/free-course" element={<IntroCourseNew />} />\r
          <Route path="/full-course" element={<FullCourseNew />} />\r
          {/* the review addresses now lead to the live ones */}\r
          <Route path="/apex-new" element={<Navigate to="/apex" replace />} />\r
          <Route path="/take-profit-new" element={<Navigate to="/take-profit" replace />} />\r
          <Route path="/lucid-new" element={<Navigate to="/lucid" replace />} />\r
          <Route path="/top-step-new" element={<Navigate to="/top-step" replace />} />\r
          <Route path="/bulenox-new" element={<Navigate to="/bulenox" replace />} />\r
          <Route path="/ftmo-new" element={<Navigate to="/ftmo" replace />} />\r
          <Route path="/funded-next-new" element={<Navigate to="/funded-next" replace />} />\r
          <Route path="/comparison-new" element={<Navigate to="/comparison" replace />} />\r
          <Route path="/comparison/head-to-head-new" element={<Navigate to="/comparison/head-to-head" replace />} />\r
          <Route path="/promotions-new" element={<Navigate to="/promotions" replace />} />\r
          <Route path="/platforms-new" element={<Navigate to="/platforms" replace />} />\r
          <Route path="/academy-new" element={<Navigate to="/academy" replace />} />\r
          <Route path="/blog-new" element={<Navigate to="/blog" replace />} />\r
          <Route path="/deepcharts-guide-new" element={<Navigate to="/deepcharts-guide" replace />} />\r
          <Route path="/topstepx-guide-new" element={<Navigate to="/topstepx-guide" replace />} />\r
          <Route path="/wise-guide-new" element={<Navigate to="/wise-guide" replace />} />\r
          <Route path="/atas-guide-new" element={<Navigate to="/atas-guide" replace />} />\r
          <Route path="/bookmap-guide-new" element={<Navigate to="/bookmap-guide" replace />} />\r
          <Route path="/ninjatrader-guide-new" element={<Navigate to="/ninjatrader-guide" replace />} />\r
          <Route path="/tradingview-guide-new" element={<Navigate to="/tradingview-guide" replace />} />\r
          <Route path="/fxreplay-guide-new" element={<Navigate to="/fxreplay-guide" replace />} />\r
          <Route path="/tradegex-guide-new" element={<Navigate to="/tradegex-guide" replace />} />\r
          <Route path="/replikanto-guide-new" element={<Navigate to="/replikanto-guide" replace />} />\r
          <Route path="/tradesyncer-guide-new" element={<Navigate to="/tradesyncer-guide" replace />} />\r
          <Route path="/tradezella-guide-new" element={<Navigate to="/tradezella-guide" replace />} />\r
          <Route path="/academy/videos-new" element={<Navigate to="/academy/videos" replace />} />\r
          <Route path="/academy/tools-new" element={<Navigate to="/academy/tools" replace />} />\r
          <Route path="/academy/glossary-new" element={<Navigate to="/academy/glossary" replace />} />\r
          <Route path="/courses-new" element={<Navigate to="/courses" replace />} />\r
          <Route path="/faq-new" element={<Navigate to="/faq" replace />} />\r
          <Route path="/contact-new" element={<Navigate to="/contact" replace />} />\r
          <Route path="/about-new" element={<Navigate to="/about" replace />} />\r
          <Route path="/nostro-course-new" element={<Navigate to="/nostro-course" replace />} />\r
          <Route path="/free-course-new" element={<Navigate to="/free-course" replace />} />\r
          <Route path="/full-course-new" element={<Navigate to="/full-course" replace />} />\r
          <Route path="/course-thank-you-new" element={<Navigate to="/course-thank-you" replace />} />\r
          <Route path="/full-course-thank-you-new" element={<Navigate to="/full-course-thank-you" replace />} />\r
          <Route path="/orderflow-course-thank-you-new" element={<Navigate to="/orderflow-course-thank-you" replace />} />\r
          <Route path="/privacy-policy-new" element={<Navigate to="/privacy-policy" replace />} />\r
          <Route path="/terms-of-service-new" element={<Navigate to="/terms-of-service" replace />} />\r
          <Route path="/terms-new" element={<Navigate to="/terms" replace />} />\r
          <Route path="/legal-disclaimer-new" element={<Navigate to="/legal-disclaimer" replace />} />\r
          <Route path="/accessibility-new" element={<Navigate to="/accessibility" replace />} />\r
          <Route path="/home-new" element={<Navigate to="/" replace />} />\r
          <Route path="/glossary-new" element={<Navigate to="/academy/glossary" replace />} />\r
          <Route path="/blog-new/:slug" element={<SlugRedirect to="/blog/" />} />\r
          <Route path="/video-new/:id" element={<SlugRedirect to="/academy/videos/" param="id" />} />\r
          {FOREIGN_LOCALES.map((l) => (\r
            <Route key={l} path={\`/\${l}/*\`} element={<ForeignSite locale={l} />} />\r
          ))}\r
          {/* All other routes with header/footer */}\r
          <Route path="*" element={<MainLayout />} />\r
        </Routes>\r
      </Suspense>\r
      {/* every page opens the bot from BotFab; only the bot test page drives the chat directly */}\r
      {PUBLIC_ADVISOR_ENABLED && pathname === "/bot-eval" && <DeferredSmartAdvisor />}\r
      {/* site-wide, on every route: the standalone new pages (/home-new and the -new pages) need them too */}\r
      <DeferredAccessibilityWidget />\r
      <CookieConsentBanner />\r
      <BackToTop />\r
      <FabTuck />\r
      <CopyGuard />\r
    </LocaleProvider>\r
  );\r
};\r
\r
/** /blog/:slug - the new article page when the article is HTML; the firm guides built from data blocks\r
 *  keep the old article page, framed by the new header and footer like every page not yet redesigned. */\r
const BlogArticleSwitch = () => {\r
  const { slug } = useParams();\r
  if (findArticle(slug)?.html) return <ArticleNew />;\r
  return (\r
    <>\r
      <div className="hn hn-solid" dir="rtl">\r
        <Header />\r
      </div>\r
      <main id="main-content" role="main" data-theme="light" className="pt-[88px] max-[760px]:pt-[64px]">\r
        <Suspense fallback={<PageFallback />}>\r
          <BlogArticlePage />\r
        </Suspense>\r
      </main>\r
      <div className="hn" dir="rtl">\r
        <Footer />\r
        {PUBLIC_ADVISOR_ENABLED && <BotFab />}\r
      </div>\r
    </>\r
  );\r
};\r
\r
/** An old review address with a parameter, sent to its live address. */\r
const SlugRedirect = ({ to, param = "slug" }: { to: string; param?: string }) => {\r
  const params = useParams();\r
  return <Navigate to={to + (params[param] ?? "")} replace />;\r
};\r
\r
const MainLayout = () => {\r
  return (\r
    <>\r
      {/* Skip to main content link for accessibility */}\r
      <a \r
        href="#main-content" \r
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"\r
        tabIndex={0}\r
      >\r
        דלג לתוכן הראשי\r
      </a>\r
      \r
      \r
      {/* the new site header on every page not yet redesigned, so the whole site reads as one */}\r
      <div className="hn hn-solid" dir="rtl">\r
        <Header />\r
      </div>\r
      {/* these pages are light: the header takes its light look, and the page starts below it */}\r
      <main\r
        id="main-content"\r
        role="main"\r
        aria-label="תוכן ראשי"\r
        tabIndex={-1}\r
        data-theme="light"\r
        className="pt-[88px] focus:outline-none max-[760px]:pt-[64px]"\r
      >\r
        <Suspense fallback={<PageFallback />}>\r
          <Routes>\r
          <Route path="/" element={<HomeLab />} />\r
          <Route path="/home-v2" element={<IndexV2 />} />\r
          <Route path="/home-lab" element={<Navigate to="/" replace />} />\r
          <Route path="/home-legacy" element={<><Helmet><meta name="robots" content="noindex, nofollow" /></Helmet><Index /></>} />\r
\r
          <Route path="/apex" element={<ApexRedesigned />} />\r
          <Route path="/apex-v2" element={<ApexV2Redirect />} />\r
          <Route path="/bulenox" element={<Bulenox />} />\r
          <Route path="/take-profit" element={<TakeProfit />} />\r
          <Route path="/top-step" element={<TopStep />} />\r
          <Route path="/lucid" element={<Lucid />} />\r
          {/* Phidias retired: Trustpilot rating, data kept */}\r
          <Route path="/phidias" element={<LegacyRedirect to="/comparison" />} />\r
          <Route path="/ftmo" element={<FTMO />} />\r
          <Route path="/lucid-daily" element={<Navigate to="/lucid" replace />} />\r
          {/* Alpha Futures retired: data archived, page removed */}\r
          <Route path="/alpha-futures" element={<LegacyRedirect to="/comparison" />} />\r
          <Route path="/funded-next" element={<FundedNext />} />\r
          <Route path="/personal-quiz" element={<PersonalQuiz />} />\r
          <Route path="/about" element={<About />} />\r
          <Route path="/faq" element={<FAQ />} />\r
          {/* /auth is handled as standalone above */}\r
          <Route path="/courses" element={<Courses />} />\r
          <Route path="/free-course" element={<FreeCourse />} />\r
          <Route path="/course-content" element={<CourseContent />} />\r
          <Route path="/full-course" element={<FullCourse />} />\r
          <Route path="/orderflow-course" element={<OrderFlowCourse />} />\r
          {/* Canonical comparison only; the old implementation was removed. */}\r
          <Route path="/comparison" element={<ComparisonV2 />} />\r
          <Route path="/comparison/head-to-head" element={<HeadToHead />} />\r
          <Route path="/comparison-legacy" element={<LegacyRedirect to="/comparison" />} />\r
          <Route path="/comparison-v2" element={<ComparisonV2Redirect />} />\r
          <Route path="/contact" element={<Contact />} />\r
          {/* Former knowledge center → Academy (backup for the static meta-refresh file in public/trading-tools/) */}\r
          <Route path="/trading-tools" element={<LegacyRedirect to="/academy" />} />\r
          {/* Academy hub — directories reuse existing canonical routes where they already exist */}\r
          <Route path="/academy" element={<Academy />} />\r
          <Route path="/academy/videos" element={<AcademyVideos />} />\r
          <Route path="/academy/videos/:id" element={<AcademyVideoDetail />} />\r
          <Route path="/academy/tools" element={<AcademyTools />} />\r
          <Route path="/academy/glossary/:termId" element={<GlossaryTermPage />} />\r
          <Route path="/academy/glossary" element={<AcademyGlossary />} />\r
          <Route path="/academy/courses" element={<Navigate to="/courses" replace />} />\r
          <Route path="/academy/articles" element={<Navigate to="/blog" replace />} />\r
          <Route path="/platforms" element={<Platforms />} />\r
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />\r
          <Route path="/terms-of-service" element={<TermsOfService />} />\r
          <Route path="/terms" element={<Terms />} />\r
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />\r
          <Route path="/dashboard" element={<Dashboard />} />\r
          <Route path="/admin-dashboard" element={<AdminDashboard />} />\r
          <Route path="/admin/firms" element={<AdminFirms />} />\r
          <Route path="/admin/firms/:id" element={<AdminFirmEdit />} />\r
          <Route path="/admin/rules" element={<AdminRules />} />\r
          <Route path="/admin/monitor" element={<AdminMonitor />} />\r
          <Route path="/admin/bot-questions" element={<AdminBotQuestions />} />\r
          <Route path="/admin/ratings" element={<AdminExternalRatings />} />\r
          <Route path="/admin/mentorship" element={<AdminMentorship />} />\r
          <Route path="/admin/sales-call" element={<AdminSalesCall />} />\r
          <Route path="/admin/crm-dashboard" element={<AdminCrmDashboard />} />\r
\r
          <Route path="/promotions" element={<Promotions />} />\r
          <Route path="/promotions-v2" element={<PromotionsV2 />} />\r
          <Route path="/antar" element={<AntarLinks />} />\r
          <Route path="/links" element={<AntarLinks />} />\r
          <Route path="/verify" element={<Verify />} />\r
          <Route path="/accessibility" element={<AccessibilityStatement />} />\r
          <Route path="/ai-test" element={<AITestPage />} />\r
          <Route path="/economic-calendar" element={<EconomicCalendar />} />\r
          <Route path="/nostro-course" element={<NostroCourse />} />\r
          <Route path="/bookmap-guide" element={<BookmapGuide />} />\r
          <Route path="/atas-guide" element={<AtasGuide />} />\r
          <Route path="/replikanto-guide" element={<ReplikantoGuide />} />\r
          <Route path="/tradesyncer-guide" element={<TradeSyncerGuide />} />\r
          <Route path="/tradegex-guide" element={<TradeGexGuide />} />\r
          <Route path="/tradezella-guide" element={<TradeZellaGuide />} />\r
          <Route path="/fxreplay-guide" element={<FXReplayGuide />} />\r
          <Route path="/tradingview-guide" element={<TradingViewGuide />} />\r
          <Route path="/topstepx-guide" element={<TopstepXGuide />} />\r
          <Route path="/blog" element={<BlogIndex />} />\r
          <Route path="/blog/:slug" element={<BlogArticlePage />} />\r
          <Route path="/wise-guide" element={<WiseGuide />} />\r
          <Route path="/ninjatrader-guide" element={<NinjaTraderGuide />} />\r
          <Route path="/deepcharts-guide" element={<DeepChartsGuide />} />\r
          {/* The club and its raffles are closed: firms do not allow benefits for buying with the code. */}\r
          <Route path="/loyalty" element={<Navigate to="/promotions" replace />} />\r
          <Route path="/loyalty/report" element={<Navigate to="/promotions" replace />} />\r
          <Route path="/loyalty/me" element={<Navigate to="/promotions" replace />} />\r
          <Route path="/loyalty/terms" element={<Navigate to="/promotions" replace />} />\r
          <Route path="/raffle-10k" element={<Navigate to="/promotions" replace />} />\r
          <Route path="/admin/loyalty" element={<AdminLoyalty />} />\r
\r
          {/* Legacy redirects — emit noindex so Google removes them from the index */}\r
          <Route path="/bulenox2" element={<LegacyRedirect to="/bulenox" />} />\r
          <Route path="/bulenox-2" element={<LegacyRedirect to="/bulenox" />} />\r
          <Route path="/top-step-2" element={<LegacyRedirect to="/top-step" />} />\r
          <Route path="/take-profit-2" element={<LegacyRedirect to="/take-profit" />} />\r
          <Route path="/mffu-2" element={<LegacyRedirect to="/" />} />\r
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}\r
          <Route path="*" element={<NotFound />} />\r
          </Routes>\r
        </Suspense>\r
      </main>\r
      <div className="hn" dir="rtl">\r
        <Footer />\r
        {/* the new bot button (the old floating one hides wherever the new header is) */}\r
        {PUBLIC_ADVISOR_ENABLED && <BotFab />}\r
      </div>\r
      \r
      </>\r
  );\r
};\r
\r
const App = () => {\r
  // Create QueryClient inside the component to ensure proper React context\r
  const [queryClient] = useState(() => new QueryClient({\r
    defaultOptions: {\r
      queries: {\r
        // prices, rules and deals change a few times a day (scanner, admin): a page reads them once, and\r
        // returning to the tab doesn't read them again. Deals that start or end mid-visit: PromotionLiveSync.\r
        staleTime: 1000 * 60 * 10,\r
        refetchOnWindowFocus: false,\r
      },\r
    },\r
  }));\r
\r
  return (\r
    <HelmetProvider>\r
      <QueryClientProvider client={queryClient}>\r
        <PromotionLiveSync />\r
        <TooltipProvider>\r
          <AccessibilityProvider>\r
            <Toaster />\r
            <Sonner />\r
            <BrowserRouter>\r
              <AppContent />\r
            </BrowserRouter>\r
          </AccessibilityProvider>\r
        </TooltipProvider>\r
      </QueryClientProvider>\r
    </HelmetProvider>\r
  );\r
};\r
\r
export default App;\r
`,L=[...new Set([...k.matchAll(/\bpath="(\/[^"]*)"/g)].map(e=>e[1])),...R.map(e=>`/calculators/${e.slug}`),w.path,N],E=e=>{const t=e.split(/[?#]/)[0].replace(/(.)\/+$/,"$1")||"/";return L.some(o=>P({path:o,end:!0},t)!==null)},m=1e3,S=10*6e4,G=e=>e.trim().replace(/[—–־]/g,"-");async function _(e){const t={};for(let o=0;;o+=m){const{data:n,error:l}=await v.from("content_translations").select("source_text, text").eq("locale",e).eq("status","approved").range(o,o+m-1);if(l)throw l;for(const p of n??[])t[G(p.source_text)]=p.text;if(!n||n.length<m)return t}}function D(e){const{data:t}=F({queryKey:["content_translations",e],queryFn:()=>_(e),staleTime:S,retry:!1});u.useEffect(()=>{t&&f(e,t,"db")},[t,e])}const i=(e,t,o)=>y(()=>Promise.all([o(),g(e,t)]).then(([n])=>n)),s=["firm","phrases","firms"],I={en:[{path:"/take-profit",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.TakeProfitNew})))},{path:"/apex",Page:i("en",s,()=>a(()=>import("./ApexNew-Bww6G5Go.js").then(e=>e.A),__vite__mapDeps([2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])))},{path:"/lucid",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.LucidNew})))},{path:"/top-step",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.TopStepNew})))},{path:"/bulenox",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.BulenoxNew})))},{path:"/ftmo",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.FtmoNew})))},{path:"/funded-next",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.FundedNextNew})))},{path:"/top-one",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.TopOneNew})))},{path:"/my-funded-futures",Page:i("en",s,()=>a(()=>import("./FirmsNew-63VJ-HM1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80])).then(e=>({default:e.MyFundedFuturesNew})))}]},O=e=>y(()=>Promise.all([a(()=>import("./ForeignNotFound-CApvGdI7.js"),__vite__mapDeps([81,1,3,4,5,6,76])),g(e,["phrases"])]).then(([t])=>t)),B={en:O("en")},V=({locale:e})=>{const{pathname:t,search:o,hash:n}=C(),l=W(t).path;if(!E(l)){const p=B[e];return r.jsx(p,{})}return r.jsx(x,{to:`${l}${o}${n}`,replace:!0})},M=e=>{u.useEffect(()=>{const t=document.documentElement;return t.lang=e,t.dir=c[e].dir,()=>{t.lang=d,t.dir=c[d].dir}},[e])};function X({locale:e}){return M(e),D(e),r.jsxs(T,{locale:e,children:[!A[e]&&r.jsx(z,{children:r.jsx("meta",{name:"robots",content:"noindex, nofollow"})}),r.jsx(u.Suspense,{fallback:r.jsx("div",{className:"min-h-screen"}),children:r.jsxs(b,{children:[I[e].map(({path:t,Page:o})=>r.jsx(h,{path:t,element:r.jsx(o,{})},t)),r.jsx(h,{path:"*",element:r.jsx(V,{locale:e})})]})})]})}export{I as FOREIGN_PAGES,X as default};
