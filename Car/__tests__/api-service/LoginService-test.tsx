import { AxiosResponse } from "axios";
import "react-native";
import APIService from "../../api-service/APIService";
import LoginService from "../../api-service/login-service/LoginService";
import User from "../../models/user/User";

describe("UserService", () => {
    let userData = {
        id: 13,
        name: "Peter",
        surname: "Pen",
        position: "Student",
        imageId: "./dd124lam-112_0!1dxxkd",
        location: "Lviv",
        hireDate: new Date("2020-10-11"),
        email: "peter@gmail.com",
        token: "",
        journeyCount: 8
    };

    test("It should login user", () => {
        jest.spyOn(APIService, "post").mockImplementation(
            () =>
                new Promise<AxiosResponse<User>>(function (resolve) {
                    resolve({
                        data: userData,
                        statusText: "Ok",
                        status: 200,
                        config: {},
                        headers: {
                            "Context-Type": "application/json"
                        }
                    });
                })
        );
        let response: User;

        LoginService.loginUser(userData).then((res) => {
            response = res.data;
            expect(res.status).toEqual(200);
            expect(response).toEqual(userData);
        });
    });
});
