import { gql } from "@apollo/client";

export const GET_TESTIMONIALS = gql`
query testimonials($page: Int!) {
    testimonials(page: $page) {
        info {
            next,
            prev,
            count,
            pages
        },
        results {
            id,
            content,
            date
        }
    }
}

`;