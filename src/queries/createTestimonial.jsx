import { gql } from "@apollo/client";

export const CREATE_TESTIMONIAL = gql`
mutation create($content: String) {
    createTestimonial(content: $content){
        id, content, date
    }
}
`;