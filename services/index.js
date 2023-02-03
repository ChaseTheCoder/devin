import { request, gql } from 'graphql-request';
import { join } from 'path';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getHeader = async () => {
  const query = gql`
    query MyQuery {
      headers {
        socialHandleLink
        socialHandle
        name
        headerImage {
          url
        }
      }
    }  
  `;
  const result = await request(graphqlAPI, query);
  return result.headers[0];
}

export const getMissions = async () => {
  const query = gql`
    query MyQuery {
      missions {
        images {
          url
        }
        missionStatement
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.missions[0];
}

export const getEquinox = async () => {
  const query = gql`
  query MyQuery {
    eqxes {
      title
      description
      callToAction
      callToActionLink
      headerImage {
        url
      }
    }
  }`
  const result = await request(graphqlAPI, query);
  return result.eqxes[0];
}

export const getModeling = async () => {
  const query = gql`
    query Modeling {
      modelings {
        header
        images {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.modelings[0];
}