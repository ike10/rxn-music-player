# Exploiting Optimistic Rollups: A Deep Dive into Fraud Proof Vulnerabilities

**Author**: Oche 
---
**Date**: January 2024  

---

## Introduction

Optimistic Rollups (ORs) are one of the most widely used Layer 2 scaling solutions for Ethereum. They improve transaction throughput by processing transactions off-chain and only relying on the Ethereum mainnet for final settlement. The security of ORs is guaranteed through the use of **fraud proofs**, which are submitted when a dispute occurs about the state transitions in the rollup.

In this article, we will explore potential vulnerabilities in the **fraud proof mechanism** and how attackers can exploit delays or inefficiencies to cause harm. We will examine the technical foundation of rollups, common pitfalls in fraud proof designs, and how they can lead to loss of funds or even catastrophic rollup failure.

---

## 1. What Are Optimistic Rollups?

Optimistic Rollups rely on the assumption that most transactions are honest. Transactions are processed off-chain, and results are periodically **batched** and posted to Ethereum. The rollup operator posts a **state root** representing the final state after processing transactions. Unlike zk-rollups, which rely on cryptographic proofs, optimistic rollups operate under the **optimistic assumption** that all transactions are valid unless proven otherwise.

### 1.1 Basic Rollup Structure

- **Rollup Contracts**: Deployed on the Ethereum Layer 1 (L1), these contracts hold the rollup’s logic and enforce its rules.
- **State Roots**: The rollup contract periodically records compressed state roots of the rollup on L1, updating the latest transaction batch.
- **Fraud Proofs**: If anyone believes a state root is incorrect, they can submit a fraud proof to challenge it.

---

## 2. How Fraud Proofs Work

Fraud proofs allow a **watcher** (typically a third party) to challenge invalid transactions or state roots. The challenge usually works as follows:

1. **Dispute Period**: A window of time (e.g., 1 week) in which users can submit fraud proofs against a proposed state root.
2. **Challenge Mechanism**: A fraud proof details the specific step or transaction where the rollup deviated from the correct state transition. The rollup operator and the challenger engage in a **multi-step verification process** to check the validity of the proof.

If the fraud proof is successful, the incorrect state root is discarded, and the operator may lose their staked funds as a penalty.

---

## 3. Exploiting the Fraud Proof System

### 3.1 Exploit Scenario 1: Delay and Liveness Attacks

**Attack Vector**: Optimistic rollups rely heavily on timely challenge submissions. Attackers can exploit delays in network communication, causing issues for fraud proof submission.

#### Step-by-Step Exploit:

- An attacker controls a majority of **sequencers** (off-chain entities batching transactions) or can collude with them.
- The attacker intentionally submits an invalid state root but does so **immediately** after a major block is mined. Due to network congestion or gas spikes, third-party watchers might be unable to submit fraud proofs within the allotted dispute window.
- By the time the network stabilizes, the **dispute period** might have ended, resulting in the rollup accepting the invalid state.

#### Mitigation:
To mitigate this, rollup contracts can implement mechanisms that adjust the dispute period dynamically based on network congestion or gas prices.

### 3.2 Exploit Scenario 2: Gas Auctions and Denial of Service

**Attack Vector**: An attacker can manipulate Ethereum gas markets to raise transaction costs, preventing honest actors from submitting fraud proofs.

#### Step-by-Step Exploit:

- A malicious sequencer or operator creates a batch with an invalid state root.
- To ensure no fraud proof is submitted, the attacker triggers a **gas auction** by flooding the network with high-gas transactions, inflating the cost to submit transactions to the mainnet.
- This makes it prohibitively expensive for third-party watchers to challenge the state root, allowing the invalid root to be accepted by the rollup contract.

#### Mitigation:
A potential mitigation would be to create an **incentivized watcher network** with contracts that allow multiple parties to pool funds for submitting fraud proofs. Alternatively, setting a **gas cap** for fraud proof submissions could limit the impact of gas market manipulation.

### 3.3 Exploit Scenario 3: Covert Operator Collusion

**Attack Vector**: Rollup operators may collude with other actors to extract value from improperly handled state transitions.

#### Step-by-Step Exploit:

- An operator works with external parties to perform a sequence of actions that would manipulate the state root.
- Invalid state roots are posted during periods when network usage is low (e.g., weekends).
- Due to a lack of vigilance from watchers, the fraud proof window closes, and the invalid state is accepted.
- Once the fraudulent state is accepted, the operator and their colluders can drain funds from the rollup.

#### Mitigation:
Decentralizing sequencer roles and creating a robust **bounty system** for fraud proof submissions can reduce the risk of collusion. Additionally, using a **randomized challenge mechanism** can ensure that operators cannot predict the best times for attack.

---

## 4. Economic Vulnerabilities in Optimistic Rollups

Beyond technical attack vectors, there are several **economic vulnerabilities** in optimistic rollups that can affect the validity of state transitions.

### 4.1 Incentive Mismatches

Sequencers are often paid based on transaction fees, which could incentivize them to prioritize **profitability** over the validity of state transitions. This creates a **moral hazard**, where operators may knowingly post incorrect state roots to maximize short-term gains.

### 4.2 Liquidity Draining Through Bad State Roots

An attacker can manipulate the state of liquidity pools within the rollup to **drain funds** if the state root is invalid. If watchers fail to submit a fraud proof in time, the liquidity pools would reflect the manipulated balances, resulting in significant losses for liquidity providers.

---

## 5. Best Practices for Securing Fraud Proof Systems

1. **Decentralized Watchers**: Encourage a **distributed network of watchers** incentivized to monitor state roots and submit fraud proofs.
2. **Dynamic Dispute Periods**: Implement dynamic fraud proof windows that adjust based on network congestion or other on-chain conditions.
3. **Sequencer Decentralization**: Decentralize the sequencer role to prevent single points of failure or collusion.
4. **Economic Safeguards**: Establish **economic penalties** for rollup operators who are found guilty of submitting incorrect state roots.

---

## Conclusion

Optimistic rollups are a promising solution for scaling Ethereum, but they introduce unique vulnerabilities, particularly in the **fraud proof mechanism**. Attackers can exploit weaknesses in dispute timing, gas markets, and operator incentives to undermine the integrity of the rollup.

By understanding these attack vectors, developers and security researchers can design more secure rollup systems, ensuring that fraud proofs are reliable and that the security of Layer 2 solutions remains robust.

---

## References

1. [Optimistic Rollups Explained](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/)
2. [Flashbots and Gas Auctions](https://www.flashbots.net/)
3. [Cross-Layer Attack Surfaces in Ethereum](https://arxiv.org/abs/2009.10036)
