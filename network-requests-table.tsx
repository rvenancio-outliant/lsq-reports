"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Clock,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

interface NetworkRequest {
  service: string;
  name: string;
  status: number;
  type: string;
  initiator: string;
  size: string;
  time: string;
}

interface PageInfo {
  loadTime: string;
  comments: string;
  screenshotUrl: string;
}

// Page information for each page
const pageInfos: PageInfo[] = [
  {
    loadTime: "11.29 s",
    averageTime: "10 - 13 s",
    comments: "GTM is killing the performance",
    potentialSolution: "Improvements on GTM",
    screenshotUrl: "https://dsh.re/bec34",
  },
  {
    loadTime: "10 s",
    averageTime: "8 - 12 s",
    comments: "GTM is killing the performance",
    potentialSolution: "Improvements on GTM",
    screenshotUrl: "https://dsh.re/7c1c77",
  },
  // Add more page info as needed...
];

// Data structure to hold all pages
const networkPages: NetworkRequest[][] = [
  // Page 1 data
  [
    {
      service: "Lambda (Campaigns API)",
      name: "campaign?campaignKey=EDMS",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.4 kB",
      time: "1.28 s",
    },
    {
      service:
        "GTM Script Injection (https://create.leadid.com)GTM Script Injection",
      name: "Snap?msn=4&pid=eadf346d-523f-47bb-9d61-b8f9c8...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "1.16 s",
    },
    {
      service:
        "GTM Script Injection (https://create.leadid.com)GTM Script Injection",
      name: "Snap?msn=5&pid=fc89f135-96b9-4606-a9df-d7e68fe...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "1.17 s",
    },
    {
      service: "Intercom",
      name: "launcher_settings",
      status: 200,
      type: "xhr",
      initiator: "frame-modern.6dc8f14a.js:1",
      size: "1.1 kB",
      time: "1.14 s",
    },
    {
      service: "GTM Script Injection",
      name: "activity;src=14197389;type=selec0;cat=sq_st0;ord=7....",
      status: 302,
      type: "fetch / Redirect",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "1.11 s",
    },
    {
      service: "GTM Script Injection",
      name: "u3?pid=2c392-c7cb-400d-a33b-b7d2e83e8de6...",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "1.10 s",
    },
    {
      service: "GTM Script Injection",
      name: "activity;src=14197389;type=selec0;cat=opps;ord=480...",
      status: 302,
      type: "fetch / Redirect",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "1.07 s",
    },
    {
      service: "AWS/Cloudflare? (https://44.238.122.172/is)",
      name: "is",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.4 kB",
      time: "956 ms",
    },
    {
      service: "Sentry",
      name: "monitoring?o=450506941707059Z&p=450654933608...",
      status: 429,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:28",
      size: "1.5 kB",
      time: "931 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "GenerateToken?msn=1&pid=eadf346d-523f-47bb-9d6...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.7 kB",
      time: "930 ms",
    },
    {
      service: "Sentry",
      name: "monitoring?o=450506941707059Z&p=450654933608...",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:28",
      size: "1.2 kB",
      time: "901 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=6&pid=eadf346d-523f-47bb-9d61-b8f9c8...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "882 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "InitFormData?msn=3&pid=eadf346d-523f-47bb-9d61...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "880 ms",
    },
    {
      service:
        "GTM Script Injection (https://selectquote-us.attn.tv/unrenderedCreative)",
      name: "unrenderedCreative?v=4.40.11&r=&id=6685a9426d014...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.3 kB",
      time: "747 ms",
    },
    {
      service: "ipify API",
      name: "api.ipify.org",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.3 kB",
      time: "746 ms",
    },
    {
      service: "GTM Script Injection (https://ct.pinterest.com/v3)",
      name: "v3?id=G-LM4M0G44CY&gtm=45je5790v91T...",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.2 kB",
      time: "743 ms",
    },
    {
      service: "GTM Script Injection (https://ct.pinterest.com/v3)",
      name: "user/?event=signup&ed=%7B%22session_id%22%3A...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.7 kB",
      time: "737 ms",
    },
    {
      service: "GTM Script Injection (https://ct.pinterest.com/v3)",
      name: "user/?tid=26141586761928&ed=%7B%22np%22%3A%...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.7 kB",
      time: "734 ms",
    },
    {
      service: "GTM Script Injection (https://ct.pinterest.com/v3)",
      name: "user/?event=viewcategory&ed=%7B%22session_id%22...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.7 kB",
      time: "732 ms",
    },
    {
      service: "Segment API",
      name: "p",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "723 ms",
    },
    {
      service: "AWS or Cloudflare?",
      name: "is",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.3 kB",
      time: "715 ms",
    },
    {
      service: "Segment API",
      name: "settings",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.2 kB",
      time: "662 ms",
    },
    {
      service: "GTM Script Injection (https://www.redditstatic.com/ads/)",
      name: "12_w94m4hpo_telemetry",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.7 kB",
      time: "656 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=5&pid=fc89f135-96b9-4606-a9df-d7e68fe...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "635 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=4&pid=eadf346d-523f-47bb-9d61-b8f9c8...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "620 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=5&pid=eadf346d-523f-47bb-9d61-b8f9c8...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "618 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=5&pid=eadf346d-523f-47bb-9d61-b8f9c8...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "613 ms",
    },
    {
      service: "AirTable API",
      name: "getSegmentationRules",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "2.0 kB",
      time: "611 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=9&pid=eadf346d-523f-47bb-9d61-b8f9c8...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "606 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=7&pid=eadf346d-523f-47bb-9d61-b8f9c8...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "604 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "Snap?msn=10&pid=eadf346d-523f-47bb-9d61-b8f9c...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "604 ms",
    },
    {
      service: "Intercom",
      name: "ping",
      status: 200,
      type: "xhr",
      initiator: "frame-modern.6dc8f14a.js:1",
      size: "3.6 kB",
      time: "504 ms",
    },
    {
      service: "Intercom",
      name: "ping",
      status: 200,
      type: "xhr",
      initiator: "frame-modern.6dc8f14a.js:1",
      size: "3.6 kB",
      time: "491 ms",
    },
    {
      service: "FullStory",
      name: "page",
      status: 202,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.1 kB",
      time: "482 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-77DV1WZTLN&gtm=45je5790v91T...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "470 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-77DV1WZTLN&gtm=45je5790v91T...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "470 ms",
    },
    {
      service: "Optimizely",
      name: "events",
      status: 204,
      type: "xhr",
      initiator: "25067410829.js:2",
      size: "0.0 kB",
      time: "465 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-LM4M0G44CY&gtm=45je5790v92...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "461 ms",
    },
    {
      service: "GTM Script Injection",
      name: "activity;dc_pre=CMr3r7sso4DFacE-QAdFiU5ig;src=141...",
      status: 200,
      type: "fetch",
      initiator: "activity;src=14197389;type=select",
      size: "0.1 kB",
      time: "419 ms",
    },
    {
      service: "Contentful (TermLifeHours)",
      name: "getTermLifeHours",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "2.2 kB",
      time: "414 ms",
    },
    {
      service: "GTM Script Injection",
      name: "activity;dc_pre=CJS73b7sso4DFQ4C-QAdB8EG2A;src...",
      status: 200,
      type: "fetch",
      initiator: "activity;src=14197389;type=select",
      size: "0.1 kB",
      time: "391 ms",
    },
    {
      service: "Contentful (Monetization)",
      name: "monetization",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.8 kB",
      time: "371 ms",
    },
    {
      service: "GTM Script Injection (https://create.leadid.com)",
      name: "InitFormData?msn=4&pid=fc89f135-96b9-4606-a9df...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "334 ms",
    },
    {
      service: "Next Js",
      name: "en.json",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.2 kB",
      time: "314 ms",
    },
    {
      service: "GTM Script Injection (https://ct.pinterest.com/v3)",
      name: "v3?event=signup&ed=%7B%22session_id%22%3A%22...",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.4 kB",
      time: "308 ms",
    },
    {
      service:
        "GTM Script Injection (https://tags.srv.stackadapt.com/js_tracking)",
      name: "js_tracking?url=https%3A%2F%2Flife.selectquote.com...",
      status: 204,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "306 ms",
    },
    {
      service: "GTM Script Injection (https://ct.pinterest.com/v3",
      name: "v3?event=viewcategory&ed=%7B%22session_id%22%...",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.4 kB",
      time: "289 ms",
    },
    {
      service: "GTM Script Injection (https://tags.srv.stackadapt.com/saq_px)",
      name: "saq_pxl=HNCnBBTqd4Tr218mQts_ls=undefined",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.4 kB",
      time: "291 ms",
    },
    {
      service:
        "GTM Script Injection (https://tags.srv.stackadapt.com/js_tracking)",
      name: "js_tracking?url=https%3A%2F%2Flife.selectquote.com...",
      status: 204,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "290 ms",
    },
    {
      service: "AWS or Cloudflare?",
      name: "rum",
      status: 204,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.1 kB",
      time: "240 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-77DV1WZTLN&gtm=45je5790v91T...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "238 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-77DV1WZTLN&gtm=45je5790v91T...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "237 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-KVYKTGW7DY&gtm=45je5790v918...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "236 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-LM4M0G44CY&gtm=45je5790v92...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "235 ms",
    },
    {
      service: "Optimizely",
      name: "events",
      status: 204,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "232 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-KVYKTGW7DY&gtm=45je5790v918...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "232 ms",
    },
    {
      service: "FullStory",
      name: "web",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "2.5 kB",
      time: "220 ms",
    },
    {
      service: "GTM Script Injection",
      name: "config",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "(disk cache)",
      time: "1 ms",
    },
    {
      service: "GTM Script Injection",
      name: "sa.jpeg",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "(disk cache)",
      time: "1 ms",
    },
    {
      service: "GTM Script Injection",
      name: "sa.jpeg",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "(disk cache)",
      time: "1 ms",
    },
  ],
  // Page 2 data
  [
    {
      service: "Lambda (Campaigns API)",
      name: "campaign?campaignKey=EDMS",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.4 kB",
      time: "1.53 s",
    },
    {
      service: "Intercom",
      name: "ping",
      status: 200,
      type: "xhr",
      initiator: "frame-modern.7412ce5e.js:1",
      size: "3.5 kB",
      time: "1.33 s",
    },
    {
      service: "GTM Script Injection",
      name: "info?msn=40&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=191...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.1 kB",
      time: "1.29 s",
    },
    {
      service: "GTM Script Injection",
      name: "attribution_trigger?pid=44638268&time=1752460530926...A%2F%...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.8 kB",
      time: "1.13 s",
    },
    {
      service: "GTM Script Injection",
      name: "iu3?pid=2e79c392-c7cb-40de-83b4-074958d38ad6&event...amz...",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "1.10 s",
    },
    {
      service: "AWS/Cloudflare? (https://44.238.122.172/is)",
      name: "is",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.4 kB",
      time: "948 ms",
    },
    {
      service: "Next Js",
      name: "step-2.json?formSlug=step-2",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "8.9 kB",
      time: "880 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=32&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "878 ms",
    },
    {
      service: "GTM Script Injection",
      name: "saq_pixl?uid=1hNCvtBBTqd4Tr_7VzIZw&ls_ls=true&land...8.JalvQQ...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.4 kB",
      time: "870 ms",
    },
    {
      service: "Sentry",
      name: "monitoring?o=450506941707059Z&p=450654933608384",
      status: 429,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:28",
      size: "1.5 kB",
      time: "784 ms",
    },
    {
      service: "Sentry",
      name: "monitoring?o=450506941707059Z&p=450654933608384",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:28",
      size: "1.2 kB",
      time: "767 ms",
    },
    {
      service: "GTM Script Injection",
      name: "unrenderedCreative?v=4.40.11&r=&id=660b9da782ce45d...te-for...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.3 kB",
      time: "748 ms",
    },
    {
      service: "ipify API",
      name: "api.ipify.org",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.3 kB",
      time: "746 ms",
    },
    {
      service: "GTM Script Injection",
      name: "aat?pid=2e79c392-c7cb-40de-83b4-074958d38ad6&event...amz...",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.4 kB",
      time: "729 ms",
    },
    {
      service: "Segment API",
      name: "j",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "726 ms",
    },
    {
      service: "Segment API",
      name: "t",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "724 ms",
    },
    {
      service: "Segment API",
      name: "t",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "723 ms",
    },
    {
      service: "Segment API",
      name: "segmentServerSideTracking",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.3 kB",
      time: "706 ms",
    },
    {
      service: "Sentry",
      name: "monitoring?o=450506941707059Z&p=450654933608384",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:28",
      size: "1.2 kB",
      time: "689 ms",
    },
    {
      service: "Contentful (TermLifeHours)",
      name: "getTermLifeHours",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "2.2 kB",
      time: "657 ms",
    },
    {
      service: "Contentful (TermLifeHours)",
      name: "getTermLifeHours",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "2.2 kB",
      time: "618 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=41&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=191...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "614 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=39&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "612 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=38&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "612 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=40&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "611 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=42&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "610 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=35&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "603 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=33&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "597 ms",
    },
    {
      service: "GTM Script Injection",
      name: "Snap?msn=36&pid=b9ffb6ee-911a-46d1-9a61-2692827589...=19...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "593 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-LM4M0G44CY&gtm=45je5790v920859...amr...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "483 ms",
    },
    {
      service: "Optimizely",
      name: "events",
      status: 204,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "469 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-77DV1WZTLN&gtm=45je5790v91155B...enr...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "462 ms",
    },
    {
      service: "Lambda (ABANDON_CAPTURE_API)",
      name: "postBpqAbandonTracking",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "1.2 kB",
      time: "377 ms",
    },
    {
      service: "GTM Script Injection",
      name: "wa/",
      status: 204,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "340 ms",
    },
    {
      service: "GTM Script Injection",
      name: "v",
      status: 204,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.1 kB",
      time: "298 ms",
    },
    {
      service: "GTM Script Injection",
      name: "InitFormData?msn=37&pid=b9ffb6ee-911a-46d1-9a61-26...=1919...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "297 ms",
    },
    {
      service: "GTM Script Injection",
      name: "InitFormData?msn=34&pid=b9ffb6ee-911a-46d1-9a61-26...=1919...",
      status: 200,
      type: "xhr",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.6 kB",
      time: "297 ms",
    },
    {
      service: "Contentful (TermLifeHours)",
      name: "getTermLifeHours",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "2.2 kB",
      time: "283 ms",
    },
    {
      service: "Segment API",
      name: "p",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "240 ms",
    },
    {
      service: "Segment API",
      name: "m",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "239 ms",
    },
    {
      service: "GTM Script Injection",
      name: "collect?v=2&tid=G-KVYKTGW7DY&gtm=45je5790v918069...grn...",
      status: 204,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.0 kB",
      time: "237 ms",
    },
    {
      service: "Segment API",
      name: "i",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "0.2 kB",
      time: "235 ms",
    },
    {
      service: "GTM Script Injection",
      name: "sa.jpeg",
      status: 200,
      type: "fetch",
      initiator: "_app-f2cc18333fa4d35b.js:24",
      size: "(disk cache)",
      time: "1 ms",
    },
  ],
  // Add more pages here as needed...
  // You can easily add Page 3, 4, 5, etc. by adding more arrays to this structure
];

export default function NetworkRequestsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = networkPages.length;

  // Get current page data dynamically
  const currentData = networkPages[currentPage - 1] || [];
  const currentPageInfo = pageInfos[currentPage - 1] || {
    loadTime: "N/A",
    comments: "No comments available",
    screenshotUrl: "#",
  };

  const getStatusBadgeVariant = (status: number) => {
    if (status >= 200 && status < 300) return "default";
    if (status >= 300 && status < 400) return "secondary";
    if (status >= 400) return "destructive";
    return "outline";
  };

  // Generate pagination numbers with ellipsis for large page counts
  const generatePaginationNumbers = () => {
    const delta = 2; // Number of pages to show around current page
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const paginationNumbers = generatePaginationNumbers();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            Network Requests Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Page Information Section */}
          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Load Time
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {currentPageInfo.loadTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Average Load Time:
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {currentPageInfo.averageTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600">
                      Comments:
                    </p>
                    <p className="text-sm text-gray-900 leading-relaxed">
                      {currentPageInfo.comments}
                    </p>
                    <p className="text-sm font-medium text-gray-600 pt-4">
                      Potential Solution:
                    </p>
                    <p className="text-sm text-gray-900 leading-relaxed">
                      {currentPageInfo.potentialSolution}
                    </p>
                  </div>
                  <div className="flex-1"></div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ExternalLink className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Screenshot
                    </p>
                    <a
                      href={currentPageInfo.screenshotUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      View Screenshot
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages} - Showing {currentData.length}{" "}
              requests
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex gap-1">
                {paginationNumbers.map((page, index) => (
                  <div key={index}>
                    {page === "..." ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0"
                        disabled
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page as number)}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                    Service
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                    Name
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                    Status
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                    Type
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                    Initiator
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                    Size
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-900">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((request, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <div
                        className="font-mono text-xs truncate max-w-xs"
                        title={request.service}
                      >
                        {request.service}
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <div
                        className="font-mono text-xs truncate max-w-xs"
                        title={request.name}
                      >
                        {request.name}
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <Badge variant={getStatusBadgeVariant(request.status)}>
                        {request.status}
                      </Badge>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {request.type}
                      </span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      <div
                        className="font-mono text-xs truncate max-w-xs"
                        title={request.initiator}
                      >
                        {request.initiator}
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-right">
                      {request.size}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-right">
                      {request.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {currentData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No data available for this page.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
