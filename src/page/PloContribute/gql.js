import { gql } from "@apollo/client";

export const gqlContributesByParaId = (paraId) => gql`
  query {
    events(filter: { method: { equalTo: "Contributed" }, and: { data: { includes: ",${paraId}," } } }) {
      totalCount
      nodes {
        timestamp
        data
      }
    }
  }
`;

export const gqlSomeOneContributesByAddressAndParaId = (address, paraId) =>
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
              includes: ",${paraId},"
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

export const gqlReferralsOfSomeOneByAddressAndParaId = (referralCode, paraId) =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: ",${paraId},\\"${referralCode}\\""
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

export const gqlGetReferralCodeOfSomeOneByAddressAndParaId = (address, paraId) =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: "\\"${address}\\",${paraId},"
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

export const ALL_WHO_CROWDLOAN = gql`
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

export const ALL_REFER_CROWDLOAN = gql`
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
