import { gql } from "@apollo/client";

export const PARA_ID = 2003;

export const TOTAL_CONTRIBUTE_HISTORY = gql`
  query {
    events(filter: { method: { equalTo: "Contributed" }, and: { data: { includes: ",${PARA_ID}," } } }) {
      totalCount
      nodes {
        timestamp
        data
      }
    }
  }
`;

export const actionSomeOneConntributeHistory = (address = "HeU2h1RoQNx5MkUKBDZ9VsX5uCNb4gdCf6YADVxj3Ku6SPG") =>
  gql`
query {
  extrinsics(
    filter: {
      signerId: { equalTo: "${address}" }
    }
  ) {
    totalCount
    nodes {
      events(
        filter:{
          method:{equalTo: "Contributed"}
          and: {
            data: {
              includes: ",${PARA_ID},"
            }
          }
        }) {
        nodes {
          id
          timestamp
          data
        }
      }
    }
  }
}
`;

export const actionSomeOneReferrals = (
  referralCode = "0x3e68cf5a7d3350cf8a1fa6ad81bc3515e4e86238f472f6a4655c11137500ef57"
) =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: ",${PARA_ID},\\"${referralCode}\\""
       }
     }
   }
 ){
     totalCount
     nodes {
       data
     }
   }
 }
`;

export const actionGetMyReferralCode = (address) =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: "\\"${address}\\",${PARA_ID},"
       }
     }
   }
 ){
     totalCount
     nodes {
       data
     }
   }
 }
`;

export const CONTRIBUTE_PIONEERS = gql`
  query {
    accounts(orderBy: CONTRIBUTED_TOTAL_DESC) {
      nodes {
        id
        transferTotalCount
        contributedTotalCount
        contributedTotal
      }
    }
  }
`;

export const TOTAL_WHO_CONTRIBUTE_WITH_POWER = gql`
  query {
    crowdloanWhoStatistics(orderBy: TOTAL_BALANCE_DESC) {
      nodes {
        user
        totalPower
        totalBalance
      }
    }
  }
`;

export const TOTAL_REFER_CONTRIBUTE_WITH_POWER = gql`
  query {
    crowdloanReferStatistics(orderBy: TOTAL_BALANCE_DESC) {
      nodes {
        user
        totalPower
        totalBalance
        contributors {
          nodes {
            id
          }
        }
      }
    }
  }
`;

export const REFERRAL_LEADERBORD = gql`
  query {
    crowdloanReferStatistics(orderBy: TOTAL_BALANCE_DESC) {
      nodes {
        user
        totalPower
        totalBalance
        contributors {
          nodes {
            id
          }
        }
      }
    }
  }
`;
