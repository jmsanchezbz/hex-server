    query allDailyData($first: Int!, $skip: Int!, $afterDay: Int!) {
  dailyDataUpdates(
    first: $first
    skip: $skip
    orderBy: beginDay
    orderDirection: asc
    where: {beginDay_gt: $afterDay}
  ) {
    id
    timestamp
    beginDay
    endDay
    payout
    shares
    sats
    payoutPerTShare
    blockNumber
    lobbyEth
    lobbyHexAvailable
    lobbyHexPerEth
    transactionHash
  }
}
    `;function kd(a,e={}){return n["d"](Ed,a,e)}const _d=Vd["a"]`
    query allGlobalInfos($first: Int!, $skip: Int!, $afterDay: BigInt!) {
  globalInfos(
    first: $first
    skip: $skip
    orderBy: hexDay
    orderDirection: asc
    where: {hexDay_gt: $afterDay}
  ) {
    id
    allocatedSupply
    totalSupply
    lockedHeartsTotal
    nextStakeSharesTotal
    shareRate
    stakePenaltyTotal
    stakeSharesTotal
    latestStakeId
    totalHeartsinCirculation
    totalMintedHearts
    timestamp
    blocknumber
    hexDay
    globalInfoCount
    transactionHash
  }
}
    `;function Td(a,e={}){return n["d"](_d,a,e)}Vd["a"]`
    query allGoodAccountings($first: Int!, $skip: Int!, $address: Bytes!) {
  stakeGoodAccountings(
    first: $first
    skip: $skip
    where: {stakerAddr: $address}
    orderBy: timestamp
    orderDirection: asc
  ) {
    id
    stakerAddr
    stakeId
    payout
    stakedHearts
    stakedShares
    timestamp
    penalty
    blockNumber
    transactionHash
  }
}
    `;Vd["a"]`
    query allStakeEnds($first: Int!, $skip: Int!) {
  stakeEnds(first: $first, skip: $skip, orderBy: timestamp, orderDirection: asc) {
    id
    stakerAddr
    stakeId
    payout
    stakedHearts
    stakedShares
    timestamp
    penalty
    servedDays
    prevUnlocked
    daysLate
    daysEarly
    blockNumber
    transactionHash
  }
}
    `;Vd["a"]`
    query allStakes($first: Int!, $skip: Int!, $address: Bytes!) {
  stakeStarts(
    first: $first
    skip: $skip
    where: {stakerAddr: $address}
    orderBy: timestamp
    orderDirection: asc
  ) {
    id
    stakerAddr
    stakeId
    timestamp
    stakedHearts
    stakeShares
    stakedDays
    isAutoStake
    stakeTShares
    startDay
    endDay
    blockNumber
    transactionHash
  }
  stakeEnds(
    first: $first
    skip: $skip
    where: {stakerAddr: $address}
    orderBy: timestamp
    orderDirection: asc
  ) {
    id
    stakerAddr
    stakeId
    payout
    stakedHearts
    stakedShares
    timestamp
    penalty
    servedDays
    prevUnlocked
    daysLate
    daysEarly
    blockNumber
    transactionHash
  }
}
    `;const fd=Vd["a"]`
    query allStakesAndTransfers($first: Int!, $skip: Int!, $address: Bytes!) {
  transfersIn: transfers(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: asc
    where: {to: $address}
  ) {
    id
    from
    to
    value
    hexDay
    timestamp
    transactionHash
    numeralIndex
  }
  transfersOut: transfers(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: asc
    where: {from: $address}
  ) {
    id
    from
    to
    value
    hexDay
    timestamp
    transactionHash
    numeralIndex
  }
  stakeStarts(
    orderBy: timestamp
    orderDirection: asc
    first: $first
    skip: $skip
    where: {stakerAddr: $address}
  ) {
    id
    stakerAddr
    stakeId
    timestamp
    stakedHearts
    stakeShares
    stakedDays
    isAutoStake
    stakeTShares
    startDay
    endDay
    blockNumber
    transactionHash
  }
  stakeEnds(
    orderBy: timestamp
    orderDirection: asc
    first: $first
    skip: $skip
    where: {stakerAddr: $address}
  ) {
    id
    stakerAddr
    stakeId
    payout
    stakedHearts
    stakedShares
    timestamp
    penalty
    servedDays
    prevUnlocked
    daysLate
    daysEarly
    blockNumber
    transactionHash
  }
  stakeGoodAccountings(
    orderBy: timestamp
    orderDirection: asc
    first: $first
    skip: $skip
    where: {stakerAddr: $address}
  ) {
    id
    stakerAddr
    stakeId
    payout
    stakedHearts
    stakedShares
    timestamp
    penalty
    blockNumber
    transactionHash
  }
}
    `;function Sd(a,e={}){return n["d"](fd,a,e)}Vd["a"]`
    query allTransfers($first: Int!, $skip: Int!, $address: Bytes!) {
  transfersIn: transfers(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: asc
    where: {to: $address}
  ) {
    id
    from
    to
    value
    hexDay
    timestamp
    transactionHash
    numeralIndex
  }
  transfersOut: transfers(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: asc
    where: {from: $address}
  ) {
    id
    from
    to
    value
    hexDay
    timestamp
    transactionHash
    numeralIndex
  }
}
    `;const gd=Vd["a"]`
    query allStakeStarts($first: Int!, $skip: Int!, $address: Bytes!) {
  stakeStarts(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: desc
    where: {stakerAddr: $address}
  ) {
    id
    stakerAddr
    stakeId
    timestamp
    stakedHearts
    stakeShares
    stakedDays
    isAutoStake
    stakeTShares
    startDay
    endDay
    blockNumber
    transactionHash
  }
}
    `;function Xd(a,e={}){return n["d"](gd,a,e)}var md,qd,Dd,xd,Pd,Ad,Md,Rd,Id,vd,Ld,Gd,Od,Nd,Bd,Fd,Zd;(function(a){a["Id"]="id",a["PlsPrice"]="plsPrice"})(md||(md={})),function(a){a["Amount0"]="amount0",a["Amount1"]="amount1",a["AmountUsd"]="amountUSD",a["FeeLiquidity"]="feeLiquidity",a["FeeTo"]="feeTo",a["Id"]="id",a["Liquidity"]="liquidity",a["LogIndex"]="logIndex",a["NeedsComplete"]="needsComplete",a["Pair"]="pair",a["PairBlock"]="pair__block",a["PairId"]="pair__id",a["PairName"]="pair__name",a["PairReserve0"]="pair__reserve0",a["PairReserve1"]="pair__reserve1",a["PairReservePls"]="pair__reservePLS",a["PairReserveUsd"]="pair__reserveUSD",a["PairTimestamp"]="pair__timestamp",a["PairToken0Price"]="pair__token0Price",a["PairToken1Price"]="pair__token1Price",a["PairTotalSupply"]="pair__totalSupply",a["PairTotalTransactions"]="pair__totalTransactions",a["PairTrackedReservePls"]="pair__trackedReservePLS",a["PairUntrackedVolumeUsd"]="pair__untrackedVolumeUSD",a["PairVolumeToken0"]="pair__volumeToken0",a["PairVolumeToken1"]="pair__volumeToken1",a["PairVolumeUsd"]="pair__volumeUSD",a["Sender"]="sender",a["Timestamp"]="timestamp",a["To"]="to",a["Token0"]="token0",a["Token0Decimals"]="token0__decimals",a["Token0DerivedPls"]="token0__derivedPLS",a["Token0DerivedUsd"]="token0__derivedUSD",a["Token0Id"]="token0__id",a["Token0Name"]="token0__name",a["Token0Symbol"]="token0__symbol",a["Token0TotalLiquidity"]="token0__totalLiquidity",a["Token0TotalSupply"]="token0__totalSupply",a["Token0TotalTransactions"]="token0__totalTransactions",a["Token0TradeVolume"]="token0__tradeVolume",a["Token0TradeVolumeUsd"]="token0__tradeVolumeUSD",a["Token0UntrackedVolumeUsd"]="token0__untrackedVolumeUSD",a["Token1"]="token1",a["Token1Decimals"]="token1__decimals",a["Token1DerivedPls"]="token1__derivedPLS",a["Token1DerivedUsd"]="token1__derivedUSD",a["Token1Id"]="token1__id",a["Token1Name"]="token1__name",a["Token1Symbol"]="token1__symbol",a["Token1TotalLiquidity"]="token1__totalLiquidity",a["Token1TotalSupply"]="token1__totalSupply",a["Token1TotalTransactions"]="token1__totalTransactions",a["Token1TradeVolume"]="token1__tradeVolume",a["Token1TradeVolumeUsd"]="token1__tradeVolumeUSD",a["Token1UntrackedVolumeUsd"]="token1__untrackedVolumeUSD",a["Transaction"]="transaction",a["TransactionBlock"]="transaction__block",a["TransactionId"]="transaction__id",a["TransactionTimestamp"]="transaction__timestamp"}(qd||(qd={})),function(a){a["Balance"]="balance",a["Burns"]="burns",a["Id"]="id"}(Dd||(Dd={})),function(a){a["Balance"]="balance",a["Burns"]="burns",a["ContractId"]="contractID",a["Id"]="id",a["Token"]="token",a["TokenDecimals"]="token__decimals",a["TokenDerivedPls"]="token__derivedPLS",a["TokenDerivedUsd"]="token__derivedUSD",a["TokenId"]="token__id",a["TokenName"]="token__name",a["TokenSymbol"]="token__symbol",a["TokenTotalLiquidity"]="token__totalLiquidity",a["TokenTotalSupply"]="token__totalSupply",a["TokenTotalTransactions"]="token__totalTransactions",a["TokenTradeVolume"]="token__tradeVolume",a["TokenTradeVolumeUsd"]="token__tradeVolumeUSD",a["TokenUntrackedVolumeUsd"]="token__untrackedVolumeUSD"}(xd||(xd={})),function(a){a["BountyAmount"]="bountyAmount",a["BountyTo"]="bountyTo",a["BountyToBalance"]="bountyTo__balance",a["BountyToId"]="bountyTo__id",a["BurnedPlsx"]="burnedPLSX",a["ContractId"]="contractID",a["Date"]="date",a["Id"]="id",a["Token"]="token",a["TokenBurnt"]="tokenBurnt",a["TokenBurntBalance"]="tokenBurnt__balance",a["TokenBurntContractId"]="tokenBurnt__contractID",a["TokenBurntId"]="tokenBurnt__id",a["TokenDecimals"]="token__decimals",a["TokenDerivedPls"]="token__derivedPLS",a["TokenDerivedUsd"]="token__derivedUSD",a["TokenId"]="token__id",a["TokenName"]="token__name",a["TokenSymbol"]="token__symbol",a["TokenTotalLiquidity"]="token__totalLiquidity",a["TokenTotalSupply"]="token__totalSupply",a["TokenTotalTransactions"]="token__totalTransactions",a["TokenTradeVolume"]="token__tradeVolume",a["TokenTradeVolumeUsd"]="token__tradeVolumeUSD",a["TokenUntrackedVolumeUsd"]="token__untrackedVolumeUSD"}(Pd||(Pd={})),function(a){a["Amount0"]="amount0",a["Amount1"]="amount1",a["AmountUsd"]="amountUSD",a["FeeLiquidity"]="feeLiquidity",a["FeeTo"]="feeTo",a["Id"]="id",a["Liquidity"]="liquidity",a["LogIndex"]="logIndex",a["Pair"]="pair",a["PairBlock"]="pair__block",a["PairId"]="pair__id",a["PairName"]="pair__name",a["PairReserve0"]="pair__reserve0",a["PairReserve1"]="pair__reserve1",a["PairReservePls"]="pair__reservePLS",a["PairReserveUsd"]="pair__reserveUSD",a["PairTimestamp"]="pair__timestamp",a["PairToken0Price"]="pair__token0Price",a["PairToken1Price"]="pair__token1Price",a["PairTotalSupply"]="pair__totalSupply",a["PairTotalTransactions"]="pair__totalTransactions",a["PairTrackedReservePls"]="pair__trackedReservePLS",a["PairUntrackedVolumeUsd"]="pair__untrackedVolumeUSD",a["PairVolumeToken0"]="pair__volumeToken0",a["PairVolumeToken1"]="pair__volumeToken1",a["PairVolumeUsd"]="pair__volumeUSD",a["Sender"]="sender",a["Timestamp"]="timestamp",a["To"]="to",a["Token0"]="token0",a["Token0Decimals"]="token0__decimals",a["Token0DerivedPls"]="token0__derivedPLS",a["Token0DerivedUsd"]="token0__derivedUSD",a["Token0Id"]="token0__id",a["Token0Name"]="token0__name",a["Token0Symbol"]="token0__symbol",a["Token0TotalLiquidity"]="token0__totalLiquidity",a["Token0TotalSupply"]="token0__totalSupply",a["Token0TotalTransactions"]="token0__totalTransactions",a["Token0TradeVolume"]="token0__tradeVolume",a["Token0TradeVolumeUsd"]="token0__tradeVolumeUSD",a["Token0UntrackedVolumeUsd"]="token0__untrackedVolumeUSD",a["Token1"]="token1",a["Token1Decimals"]="token1__decimals",a["Token1DerivedPls"]="token1__derivedPLS",a["Token1DerivedUsd"]="token1__derivedUSD",a["Token1Id"]="token1__id",a["Token1Name"]="token1__name",a["Token1Symbol"]="token1__symbol",a["Token1TotalLiquidity"]="token1__totalLiquidity",a["Token1TotalSupply"]="token1__totalSupply",a["Token1TotalTransactions"]="token1__totalTransactions",a["Token1TradeVolume"]="token1__tradeVolume",a["Token1TradeVolumeUsd"]="token1__tradeVolumeUSD",a["Token1UntrackedVolumeUsd"]="token1__untrackedVolumeUSD",a["Transaction"]="transaction",a["TransactionBlock"]="transaction__block",a["TransactionId"]="transaction__id",a["TransactionTimestamp"]="transaction__timestamp"}(Ad||(Ad={})),function(a){a["Asc"]="asc",a["Desc"]="desc"}(Md||(Md={})),function(a){a["DailyTxns"]="dailyTxns",a["DailyVolumeToken0"]="dailyVolumeToken0",a["DailyVolumeToken1"]="dailyVolumeToken1",a["DailyVolumeUsd"]="dailyVolumeUSD",a["Date"]="date",a["Id"]="id",a["PairAddress"]="pairAddress",a["PairAddressBlock"]="pairAddress__block",a["PairAddressId"]="pairAddress__id",a["PairAddressName"]="pairAddress__name",a["PairAddressReserve0"]="pairAddress__reserve0",a["PairAddressReserve1"]="pairAddress__reserve1",a["PairAddressReservePls"]="pairAddress__reservePLS",a["PairAddressReserveUsd"]="pairAddress__reserveUSD",a["PairAddressTimestamp"]="pairAddress__timestamp",a["PairAddressToken0Price"]="pairAddress__token0Price",a["PairAddressToken1Price"]="pairAddress__token1Price",a["PairAddressTotalSupply"]="pairAddress__totalSupply",a["PairAddressTotalTransactions"]="pairAddress__totalTransactions",a["PairAddressTrackedReservePls"]="pairAddress__trackedReservePLS",a["PairAddressUntrackedVolumeUsd"]="pairAddress__untrackedVolumeUSD",a["PairAddressVolumeToken0"]="pairAddress__volumeToken0",a["PairAddressVolumeToken1"]="pairAddress__volumeToken1",a["PairAddressVolumeUsd"]="pairAddress__volumeUSD",a["Reserve0"]="reserve0",a["Reserve1"]="reserve1",a["ReserveUsd"]="reserveUSD",a["Token0"]="token0",a["Token0Decimals"]="token0__decimals",a["Token0DerivedPls"]="token0__derivedPLS",a["Token0DerivedUsd"]="token0__derivedUSD",a["Token0Id"]="token0__id",a["Token0Name"]="token0__name",a["Token0Symbol"]="token0__symbol",a["Token0TotalLiquidity"]="token0__totalLiquidity",a["Token0TotalSupply"]="token0__totalSupply",a["Token0TotalTransactions"]="token0__totalTransactions",a["Token0TradeVolume"]="token0__tradeVolume",a["Token0TradeVolumeUsd"]="token0__tradeVolumeUSD",a["Token0UntrackedVolumeUsd"]="token0__untrackedVolumeUSD",a["Token1"]="token1",a["Token1Decimals"]="token1__decimals",a["Token1DerivedPls"]="token1__derivedPLS",a["Token1DerivedUsd"]="token1__derivedUSD",a["Token1Id"]="token1__id",a["Token1Name"]="token1__name",a["Token1Symbol"]="token1__symbol",a["Token1TotalLiquidity"]="token1__totalLiquidity",a["Token1TotalSupply"]="token1__totalSupply",a["Token1TotalTransactions"]="token1__totalTransactions",a["Token1TradeVolume"]="token1__tradeVolume",a["Token1TradeVolumeUsd"]="token1__tradeVolumeUSD",a["Token1UntrackedVolumeUsd"]="token1__untrackedVolumeUSD",a["TotalSupply"]="totalSupply"}(Rd||(Rd={})),function(a){a["HourStartUnix"]="hourStartUnix",a["HourlyTxns"]="hourlyTxns",a["HourlyVolumeToken0"]="hourlyVolumeToken0",a["HourlyVolumeToken1"]="hourlyVolumeToken1",a["HourlyVolumeUsd"]="hourlyVolumeUSD",a["Id"]="id",a["Pair"]="pair",a["PairBlock"]="pair__block",a["PairId"]="pair__id",a["PairName"]="pair__name",a["PairReserve0"]="pair__reserve0",a["PairReserve1"]="pair__reserve1",a["PairReservePls"]="pair__reservePLS",a["PairReserveUsd"]="pair__reserveUSD",a["PairTimestamp"]="pair__timestamp",a["PairToken0Price"]="pair__token0Price",a["PairToken1Price"]="pair__token1Price",a["PairTotalSupply"]="pair__totalSupply",a["PairTotalTransactions"]="pair__totalTransactions",a["PairTrackedReservePls"]="pair__trackedReservePLS",a["PairUntrackedVolumeUsd"]="pair__untrackedVolumeUSD",a["PairVolumeToken0"]="pair__volumeToken0",a["PairVolumeToken1"]="pair__volumeToken1",a["PairVolumeUsd"]="pair__volumeUSD",a["Reserve0"]="reserve0",a["Reserve1"]="reserve1",a["ReserveUsd"]="reserveUSD",a["TotalSupply"]="totalSupply"}(Id||(Id={})),function(a){a["Block"]="block",a["Burns"]="burns",a["Id"]="id",a["Mints"]="mints",a["Name"]="name",a["PairHourData"]="pairHourData",a["Reserve0"]="reserve0",a["Reserve1"]="reserve1",a["ReservePls"]="reservePLS",a["ReserveUsd"]="reserveUSD",a["Swaps"]="swaps",a["Timestamp"]="timestamp",a["Token0"]="token0",a["Token0Price"]="token0Price",a["Token0Decimals"]="token0__decimals",a["Token0DerivedPls"]="token0__derivedPLS",a["Token0DerivedUsd"]="token0__derivedUSD",a["Token0Id"]="token0__id",a["Token0Name"]="token0__name",a["Token0Symbol"]="token0__symbol",a["Token0TotalLiquidity"]="token0__totalLiquidity",a["Token0TotalSupply"]="token0__totalSupply",a["Token0TotalTransactions"]="token0__totalTransactions",a["Token0TradeVolume"]="token0__tradeVolume",a["Token0TradeVolumeUsd"]="token0__tradeVolumeUSD",a["Token0UntrackedVolumeUsd"]="token0__untrackedVolumeUSD",a["Token1"]="token1",a["Token1Price"]="token1Price",a["Token1Decimals"]="token1__decimals",a["Token1DerivedPls"]="token1__derivedPLS",a["Token1DerivedUsd"]="token1__derivedUSD",a["Token1Id"]="token1__id",a["Token1Name"]="token1__name",a["Token1Symbol"]="token1__symbol",a["Token1TotalLiquidity"]="token1__totalLiquidity",a["Token1TotalSupply"]="token1__totalSupply",a["Token1TotalTransactions"]="token1__totalTransactions",a["Token1TradeVolume"]="token1__tradeVolume",a["Token1TradeVolumeUsd"]="token1__tradeVolumeUSD",a["Token1UntrackedVolumeUsd"]="token1__untrackedVolumeUSD",a["TotalSupply"]="totalSupply",a["TotalTransactions"]="totalTransactions",a["TrackedReservePls"]="trackedReservePLS",a["UntrackedVolumeUsd"]="untrackedVolumeUSD",a["VolumeToken0"]="volumeToken0",a["VolumeToken1"]="volumeToken1",a["VolumeUsd"]="volumeUSD"}(vd||(vd={})),function(a){a["Id"]="id",a["TotalLiquidityPls"]="totalLiquidityPLS",a["TotalLiquidityUsd"]="totalLiquidityUSD",a["TotalPairs"]="totalPairs",a["TotalTransactions"]="totalTransactions",a["TotalVolumePls"]="totalVolumePLS",a["TotalVolumeUsd"]="totalVolumeUSD",a["UntrackedVolumeUsd"]="untrackedVolumeUSD"}(Ld||(Ld={})),function(a){a["DailyVolumePls"]="dailyVolumePLS",a["DailyVolumeUsd"]="dailyVolumeUSD",a["DailyVolumeUntracked"]="dailyVolumeUntracked",a["Date"]="date",a["Id"]="id",a["TotalLiquidityPls"]="totalLiquidityPLS",a["TotalLiquidityUsd"]="totalLiquidityUSD",a["TotalTransactions"]="totalTransactions",a["TotalVolumePls"]="totalVolumePLS",a["TotalVolumeUsd"]="totalVolumeUSD"}(Gd||(Gd={})),function(a){a["Amount0In"]="amount0In",a["Amount0Out"]="amount0Out",a["Amount1In"]="amount1In",a["Amount1Out"]="amount1Out",a["AmountUsd"]="amountUSD",a["From"]="from",a["Id"]="id",a["LogIndex"]="logIndex",a["Pair"]="pair",a["PairBlock"]="pair__block",a["PairId"]="pair__id",a["PairName"]="pair__name",a["PairReserve0"]="pair__reserve0",a["PairReserve1"]="pair__reserve1",a["PairReservePls"]="pair__reservePLS",a["PairReserveUsd"]="pair__reserveUSD",a["PairTimestamp"]="pair__timestamp",a["PairToken0Price"]="pair__token0Price",a["PairToken1Price"]="pair__token1Price",a["PairTotalSupply"]="pair__totalSupply",a["PairTotalTransactions"]="pair__totalTransactions",a["PairTrackedReservePls"]="pair__trackedReservePLS",a["PairUntrackedVolumeUsd"]="pair__untrackedVolumeUSD",a["PairVolumeToken0"]="pair__volumeToken0",a["PairVolumeToken1"]="pair__volumeToken1",a["PairVolumeUsd"]="pair__volumeUSD",a["Sender"]="sender",a["Timestamp"]="timestamp",a["To"]="to",a["Token0"]="token0",a["Token0Decimals"]="token0__decimals",a["Token0DerivedPls"]="token0__derivedPLS",a["Token0DerivedUsd"]="token0__derivedUSD",a["Token0Id"]="token0__id",a["Token0Name"]="token0__name",a["Token0Symbol"]="token0__symbol",a["Token0TotalLiquidity"]="token0__totalLiquidity",a["Token0TotalSupply"]="token0__totalSupply",a["Token0TotalTransactions"]="token0__totalTransactions",a["Token0TradeVolume"]="token0__tradeVolume",a["Token0TradeVolumeUsd"]="token0__tradeVolumeUSD",a["Token0UntrackedVolumeUsd"]="token0__untrackedVolumeUSD",a["Token1"]="token1",a["Token1Decimals"]="token1__decimals",a["Token1DerivedPls"]="token1__derivedPLS",a["Token1DerivedUsd"]="token1__derivedUSD",a["Token1Id"]="token1__id",a["Token1Name"]="token1__name",a["Token1Symbol"]="token1__symbol",a["Token1TotalLiquidity"]="token1__totalLiquidity",a["Token1TotalSupply"]="token1__totalSupply",a["Token1TotalTransactions"]="token1__totalTransactions",a["Token1TradeVolume"]="token1__tradeVolume",a["Token1TradeVolumeUsd"]="token1__tradeVolumeUSD",a["Token1UntrackedVolumeUsd"]="token1__untrackedVolumeUSD",a["Transaction"]="transaction",a["TransactionBlock"]="transaction__block",a["TransactionId"]="transaction__id",a["TransactionTimestamp"]="transaction__timestamp"}(Od||(Od={})),function(a){a["DailyTxns"]="dailyTxns",a["DailyVolumePls"]="dailyVolumePLS",a["DailyVolumeToken"]="dailyVolumeToken",a["DailyVolumeUsd"]="dailyVolumeUSD",a["Date"]="date",a["Id"]="id",a["PriceUsd"]="priceUSD",a["Token"]="token",a["TokenDecimals"]="token__decimals",a["TokenDerivedPls"]="token__derivedPLS",a["TokenDerivedUsd"]="token__derivedUSD",a["TokenId"]="token__id",a["TokenName"]="token__name",a["TokenSymbol"]="token__symbol",a["TokenTotalLiquidity"]="token__totalLiquidity",a["TokenTotalSupply"]="token__totalSupply",a["TokenTotalTransactions"]="token__totalTransactions",a["TokenTradeVolume"]="token__tradeVolume",a["TokenTradeVolumeUsd"]="token__tradeVolumeUSD",a["TokenUntrackedVolumeUsd"]="token__untrackedVolumeUSD",a["TotalLiquidityPls"]="totalLiquidityPLS",a["TotalLiquidityToken"]="totalLiquidityToken",a["TotalLiquidityUsd"]="totalLiquidityUSD"}(Nd||(Nd={})),function(a){a["Decimals"]="decimals",a["DerivedPls"]="derivedPLS",a["DerivedUsd"]="derivedUSD",a["Id"]="id",a["Name"]="name",a["PairBase"]="pairBase",a["PairDayDataBase"]="pairDayDataBase",a["PairDayDataQuote"]="pairDayDataQuote",a["PairQuote"]="pairQuote",a["Symbol"]="symbol",a["TokenDayData"]="tokenDayData",a["TotalLiquidity"]="totalLiquidity",a["TotalSupply"]="totalSupply",a["TotalTransactions"]="totalTransactions",a["TradeVolume"]="tradeVolume",a["TradeVolumeUsd"]="tradeVolumeUSD",a["UntrackedVolumeUsd"]="untrackedVolumeUSD"}(Bd||(Bd={})),function(a){a["Block"]="block",a["Burns"]="burns",a["Id"]="id",a["Mints"]="mints",a["Swaps"]="swaps",a["Timestamp"]="timestamp"}(Fd||(Fd={})),function(a){a["Allow"]="allow",a["Deny"]="deny"}(Zd||(Zd={}));Vd["a"]`
    query allPairDayDatas($token0: String!, $token1: String!, $first: Int!, $skip: Int!, $date: Int!) {
  pairDayDatas(
    first: $first
    skip: $skip
    where: {token0: $token0, token1: $token1, date_gt: $date}
    orderBy: date
    orderDirection: desc
  ) {
    id
    date
    reserve0
    reserve1
    reserveUSD
    token0 {
      id
    }
    token1 {
      id
    }
  }
}
    `;const Yd=Vd["a"]`
    query allTokenDayDatas($token: String!, $first: Int!, $skip: Int!, $date: Int!) {
  tokenDayDatas(
    first: $first
    skip: $skip
    where: {token: $token, date_gt: $date}
    orderBy: date
    orderDirection: asc
  ) {
    id
    date
    priceUSD
  }
}