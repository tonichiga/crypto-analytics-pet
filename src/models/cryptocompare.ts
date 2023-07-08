// convert to typescript
export interface CryptoCompare {
  Id: string;
  Url: string;
  ImageUrl: string;
  ContentCreatedOn: number;
  Name: string;
  Symbol: string;
  CoinName: string;
  Description: string;
  AssetTokenStatus: string;
  Algorithm: string;
  ProofType: string;
  SortOrder: string;
  Sponsored: boolean;
  Taxonomy: Taxonomy;
  Rating: Rating;
  IsTrading: boolean;
  TotalCoinsMined: number;
  CirculatingSupply: number;
  BlockNumber: number;
  NetHashesPerSecond: number;
  BlockReward: number;
  BlockTime: number;
  AssetLaunchDate: string;
  AssetWhitepaperUrl: string;
  AssetWebsiteUrl: string;
  MaxSupply: number;
  MktCapPenalty: number;
  IsUsedInDefi: number;
  IsUsedInNft: number;
  PlatformType: string;
  DecimalPoints: number;
  AlgorithmType: string;
  Difficulty: number;
}

export interface Rating {
  Weiss: Weiss;
}

export interface Weiss {
  Rating: string;
  TechnologyAdoptionRating: string;
  MarketPerformanceRating: string;
}

export interface Taxonomy {
  Access: string;
  FCA: string;
  FINMA: string;
  Industry: string;
  CollateralizedAsset: string;
  CollateralizedAssetType: string;
  CollateralType: string;
  CollateralInfo: string;
}

export interface CryptoCompareSocialStats {
  time: number;
  comments: number;
  posts: number;
  followers: number;
  points: number;
  overview_page_views: number;
  analysis_page_views: number;
  markets_page_views: number;
  charts_page_views: number;
  trades_page_views: number;
  forum_page_views: number;
  influence_page_views: number;
  total_page_views: number;
  fb_likes: number;
  fb_talking_about: number;
  twitter_followers: number;
  twitter_following: number;
  twitter_lists: number;
  twitter_favourites: number;
  twitter_statuses: number;
  reddit_subscribers: number;
  reddit_active_users: number;
  reddit_posts_per_hour: number;
  reddit_posts_per_day: number;
  reddit_comments_per_hour: number;
  reddit_comments_per_day: number;
  code_repo_stars: number;
  code_repo_forks: number;
  code_repo_subscribers: number;
  code_repo_open_pull_issues: number;
  code_repo_closed_pull_issues: number;
  code_repo_open_issues: number;
  code_repo_closed_issues: number;
  code_repo_contributors: number;
}
