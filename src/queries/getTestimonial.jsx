import { gql } from "@apollo/client";

export const GET_TESTIMONIAL = gql`
query testimonial($id: ID!) {
    testimonial(id: $id) {
        id, content, date
    }
}
`;