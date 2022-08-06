import { gql } from "@apollo/client";

export const DELETE_TESTIMONIAL = gql`
mutation delete($id: ID!) {
    deleteTestimonial(id: $id) {
        id,
        content,
        date
    }
}  
`;