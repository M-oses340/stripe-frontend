package main

import (
	"errors"
	"fmt"
	"net/http"
)

func main() {
	err := returnsError("wrongpassword")
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Password OK!")
	}
}

func returnsError(password string) error {
	secretPassword := "supersecret"

	if password != secretPassword {
		return errors.New("password does not match")
	}

	return nil
}

func handleCreatePaymentIntent(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint Called")
}
