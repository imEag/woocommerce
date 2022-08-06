import { gql } from "@apollo/client";

export const UPDATE_TESTIMONIAL = gql`
mutation updateTestimonial($id: ID!, $content:String) {
    updateTestimonial(id: $id, content:$content){
        id,
        content,
        date
    }
}    
`;