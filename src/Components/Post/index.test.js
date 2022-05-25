import React from "react";
import {screen, render} from "@testing-library/react";
import {Post} from "./index";

describe('Post', () => {
    it('should render title', () => {
        render(<Post/>);
        expect(screen.getByText(/Post:/i)).toBeInTheDocument();
    });
});