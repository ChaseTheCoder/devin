import { request, gql } from 'graphql-request';
// import { join } from 'path';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getHeader = async () => {
  const query = gql`
    query MyQuery {
      header(where: {id: "cl5mz7o5cc0lx0fk16ggxyh8a"}) {
        headerImageAltText
        headerImage {
          url
        }
        name
        socialHandle
        socialHandleLink
      }
    }  
  `;
  const result = await request(graphqlAPI, query);
  return result.header;
}

export const getMissions = async () => {
  const query = gql`
    query MyQuery {
      mission(where: {id: "cl6305stz7d110bk89exepa1c"}) {
        imageAltText
        missionStatement
        images {
          url
        }
      }
    }`;
  const result = await request(graphqlAPI, query);
  return result.mission;
}

export const getEquinox = async () => {
  const query = gql`
  query MyQuery {
    eqx(where: {id: "cldmhjzim5xl30ak93uktozhb"}) {
      title
      description
      headerImageAlt
      headerImage {
        url
      }
      callToAction
      callToActionLink
    }
  }`
  const result = await request(graphqlAPI, query);
  return result.eqx;
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