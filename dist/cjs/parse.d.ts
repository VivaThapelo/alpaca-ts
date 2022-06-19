import { Account, RawAccount, RawOrder, Order, RawPosition, Position, RawTradeActivity, TradeActivity, RawNonTradeActivity, NonTradeActivity, RawActivity, Activity, RawClock, Clock, RawOrderCancelation, OrderCancelation, PageOfTrades, RawPageOfTrades, PageOfQuotes, RawPageOfQuotes, RawPageOfBars, PageOfBars, Snapshot, RawSnapshot, TradeUpdate, RawTradeUpdate, RawLatestTrade, LatestTrade } from './entities.cjs';
declare function account(rawAccount: RawAccount): Account;
declare function clock(rawClock: RawClock): Clock;
declare function latestTrade(raw: RawLatestTrade): LatestTrade;
declare function order(rawOrder: RawOrder): Order;
declare function orders(rawOrders: RawOrder[]): Order[];
declare function canceled_orders(rawOrderCancelations: RawOrderCancelation[]): OrderCancelation[];
declare function position(rawPosition: RawPosition): Position;
declare function positions(rawPositions: RawPosition[]): Position[];
declare function tradeActivity(rawTradeActivity: RawTradeActivity): TradeActivity;
declare function nonTradeActivity(rawNonTradeActivity: RawNonTradeActivity): NonTradeActivity;
declare function activities(rawActivities: Array<RawActivity>): Array<Activity>;
declare function pageOfTrades(page: RawPageOfTrades): PageOfTrades;
declare function pageOfQuotes(page: RawPageOfQuotes): PageOfQuotes;
declare function pageOfBars(page: RawPageOfBars): PageOfBars;
declare function snapshot(raw: RawSnapshot): Snapshot;
declare function snapshots(raw: {
    [key: string]: RawSnapshot;
}): {
    [key: string]: Snapshot;
};
declare function trade_update(rawTradeUpdate: RawTradeUpdate): TradeUpdate;
declare const _default: {
    account: typeof account;
    activities: typeof activities;
    clock: typeof clock;
    nonTradeActivity: typeof nonTradeActivity;
    order: typeof order;
    orders: typeof orders;
    canceled_orders: typeof canceled_orders;
    position: typeof position;
    positions: typeof positions;
    tradeActivity: typeof tradeActivity;
    pageOfTrades: typeof pageOfTrades;
    pageOfQuotes: typeof pageOfQuotes;
    pageOfBars: typeof pageOfBars;
    snapshot: typeof snapshot;
    snapshots: typeof snapshots;
    trade_update: typeof trade_update;
    latestTrade: typeof latestTrade;
};
export default _default;
