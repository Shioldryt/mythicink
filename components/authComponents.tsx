import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

import { CiLock, CiMail } from 'react-icons/ci';


export function MainAuth({ login }: { login: boolean }) {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} variant="light">{login ? "Login": "Register"}</Button>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <form>
                            <ModalHeader className="flex flex-col">{login? "Login" : "Register"}</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <CiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                {!isLogin && (
                                    <Input
                                        endContent={
                                            <CiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Password"
                                        placeholder="Confirm your password"
                                        type="password"
                                        variant="bordered"
                                    />
                                )}

                                {isLogin ? (
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        <Link color="foreground" href="#" size="sm">
                                            Forgot password?
                                        </Link>
                                    </div>
                                ) : ""}
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="light" onPress={() => setIsLogin(!isLogin)}>
                                    {login ? "Not yet registered?" : "Already registered?"}
                                </Button>
                                <Button variant="bordered" type="submit">
                                    {login ? "Sign in" : "Submit"}
                                </Button>
                            </ModalFooter>
                        </form>)}
                </ModalContent>
            </Modal>
        </>
    )
}
