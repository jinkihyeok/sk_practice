import {SubscriberByGenderType, SubscriberByRegionType} from "../types";

export const subscriberCountByGender: SubscriberByGenderType[] = [
    {"month": "january", "male": 320, "female": 280},
    {"month": "february", "male": 280, "female": 290},
    {"month": "march", "male": 120, "female": 340},
    {"month": "april", "male": 220, "female": 124},
    {"month": "may", "male": 235, "female": 247},
    {"month": "june", "male": 300, "female": 370},
    {"month": "july", "male": 400, "female": 420},
    {"month": "august", "male": 320, "female": 220},
    {"month": "september", "male": 600, "female": 600},
    {"month": "october", "male": 270, "female": 600},
    {"month": "november", "male": 320, "female": 280},
    {"month": "december", "male": 500, "female": 400},
];

export const subscriberCountByRegion: SubscriberByRegionType[] = [
    {"region": "서울", "count": 657},
    {"region": "경기", "count": 512},
    {"region": "강원", "count": 460},
    {"region": "충북", "count": 391},
    {"region": "충남", "count": 488},
    {"region": "경북", "count": 400},
    {"region": "경남", "count": 300},
    {"region": "전북", "count": 241},
    {"region": "전남", "count": 402},
    {"region": "제주", "count": 320},
]